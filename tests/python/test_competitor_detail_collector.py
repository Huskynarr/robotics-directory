"""Content checks must establish the listing identity, not match fallback JS."""
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location("detail_collector", ROOT / "scripts/collect-buyandrent-details.py")
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)
LISTING = {"listingId": "65900646-81da-4bd2-b30a-c81d3d857510", "name": "BellaBot", "company": "Pudu Robotics", "companySlug": "pudu-robotics"}
URL = "https://buyandrentrobots.com/robot/" + LISTING["listingId"]
HTML = b'''<div id="notFoundState" style="display:none">Robot not found</div>
<div id="pageContent"><h1 id="heroTitle">BellaBot</h1><p id="heroDesc">Delivery &amp; service.</p>
<div id="coName">Pudu Robotics</div><a id="heroCoBtn" href="/companies/pudu-robotics">Company</a>
<div id="detailRows">Robot Type <span>Delivery Robot</span></div><div id="useCasesList"></div></div>
<script>const fallback = 'Robot not found';</script>'''


class DetailCollectorTests(unittest.TestCase):
    def tearDown(self):
        MODULE.INVENTORY.RATE_LIMITED.clear()

    def test_hidden_not_found_fallback_does_not_reject_populated_product(self):
        content, identity = MODULE.parse_detail(HTML, LISTING, URL, 200)
        self.assertEqual(identity["status"], "matched-identity")
        self.assertEqual(content["descriptionSha256"], MODULE.digest("Delivery & service."))

    def test_empty_shell_http_error_and_wrong_product_are_not_content_checks(self):
        for body, url, status in [
            (b'<h1 id="heroTitle"></h1><script>const title="BellaBot";</script>', URL, 200),
            (HTML, URL, 404), (HTML.replace(b"BellaBot", b"OtherBot"), URL, 200),
            (HTML, "https://buyandrentrobots.com/robots", 200),
            (HTML.replace(b"/companies/pudu-robotics", b"https://other.example/companies/pudu-robotics"), URL, 200),
        ]:
            self.assertEqual(MODULE.parse_detail(body, LISTING, url, status)[1]["status"], "needs-review")

    def test_hidden_or_duplicate_identity_is_rejected(self):
        for body in [HTML.replace(b'id="pageContent"', b'id="pageContent" hidden'), HTML + b'<h1 id="heroTitle">BellaBot</h1>']:
            self.assertEqual(MODULE.parse_detail(body, LISTING, URL, 200)[1]["status"], "needs-review")

    def test_changed_content_resets_review_and_preserves_prior_attempt(self):
        content, identity = MODULE.parse_detail(HTML, LISTING, URL, 200)
        previous = {"listingId": LISTING["listingId"], "inventory": {}, "content": content, "identity": identity, "review": {"status": "reviewed", "note": "Prior decision"}}
        ledger = {"checks": [previous]}
        same = {"listingId": previous["listingId"], "inventory": {}, "content": dict(content), "identity": identity}
        MODULE.update_check(ledger, same)
        self.assertEqual(same["review"]["status"], "reviewed")
        changed = {**same, "content": {**content, "descriptionSha256": MODULE.digest("New claim")}}
        MODULE.update_check(ledger, changed)
        self.assertEqual(changed["review"]["status"], "pending")
        self.assertEqual(ledger["checks"][0]["review"]["note"], "Prior decision")

    def test_rate_limit_stops_the_incremental_run_and_keeps_earlier_evidence(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            inventory = root / "inventory.json"
            inventory.write_text(json.dumps({"listings": [LISTING, {**LISTING, "listingId": "e26f201d-29d4-4113-9668-0340e7a4798b"}]}))
            out = root / "ledger.json"
            old = {"listingId": "unrelated-old-listing", "review": {"status": "pending"}}
            out.write_text(json.dumps({"checks": [old]}))
            response = {"url": URL, "status": 429, "body": b"", "fetchedAt": "2026-11-05T12:00:00Z", "error": "HTTP 429", "contentType": "text/plain"}
            with patch.object(MODULE.INVENTORY, "fetch", return_value=response) as request:
                MODULE.main(["--inventory", str(inventory), "--out", str(out), "--cache", str(root / "cache"), "--limit", "2", "--delay", "0"])
                request.assert_called_once()
            ledger = json.loads(out.read_text())
            self.assertEqual(ledger["checks"][0], old)
            self.assertEqual(ledger["checks"][1]["identity"]["status"], "needs-review")
            self.assertEqual(ledger["checks"][1]["review"]["status"], "pending")

    def test_fetch_preserves_the_actual_redirect_destination(self):
        class Response:
            status = 200
            headers = {"content-type": "text/html"}
            def read(self): return HTML
            def geturl(self): return "https://buyandrentrobots.com/robots"
            def __enter__(self): return self
            def __exit__(self, *_): return False
        with patch.object(MODULE.INVENTORY.urllib.request, "urlopen", return_value=Response()):
            response = MODULE.INVENTORY.fetch(URL)
        self.assertEqual(response["finalUrl"], "https://buyandrentrobots.com/robots")
        self.assertEqual(MODULE.parse_detail(response["body"], LISTING, response["finalUrl"], response["status"])[1]["status"], "needs-review")

    def test_refresh_keeps_both_response_bodies_and_invalidates_changed_claims(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            inventory = root / "inventory.json"
            inventory.write_text(json.dumps({"listings": [LISTING]}))
            out = root / "ledger.json"
            args = ["--inventory", str(inventory), "--out", str(out), "--cache", str(root / "cache"), "--limit", "1", "--delay", "0"]
            for body in [HTML, HTML.replace(b"Delivery &amp; service.", b"A changed feature.")]:
                response = {"url": URL, "finalUrl": URL, "status": 200, "body": body, "fetchedAt": "2026-11-05T12:00:00Z", "error": None, "contentType": "text/html"}
                with patch.object(MODULE.INVENTORY, "fetch", return_value=response):
                    MODULE.main([*args, "--refresh"])
            checks = json.loads(out.read_text())["checks"]
            self.assertNotEqual(checks[0]["source"]["bodyFile"], checks[1]["source"]["bodyFile"])
            self.assertEqual(Path(checks[0]["source"]["bodyFile"]).read_bytes(), HTML)
            self.assertEqual(checks[1]["review"]["status"], "pending")


if __name__ == "__main__":
    unittest.main()
