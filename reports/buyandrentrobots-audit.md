# BuyAndRentRobots directory audit

Inventory captured: 2026-11-01; reviewed additions updated: 2026-11-03. Source: <https://buyandrentrobots.com/directory>.

The public inventory contains **862 listings and 412 companies**. Paginated API
responses, the sitemap and the server-rendered robot listing agree on listing IDs.
Company API, sitemap and statistics agree. This establishes inventory coverage,
not validation of every detail page or product.

The provisional classification yields **348 deduplicated model/series records**:
335 concrete candidates and 13 series across 99 proposed product brands. Separately
counted listings include 94 services, 260 nonproducts and 122 unresolved entries.
One hundred and thirteen of the 122 originally unresolved listings have separate,
dated reviews: eighteen components, five software platforms, seven service
offerings, five educational lab/program services, six integrated robotic
systems, seven hand-guided inspection/lifting aids or application offers,
thirteen generic product ranges without identified catalog models, sixteen mapped
product families and thirty-six concrete models. Source classifications are
retained unchanged; 9 listings still await review.
See `listing-reviews.json` and `coverage.json`.
Model/series counts are deduplicated; these figures cannot be summed as though
they counted the same unit. Company roles are source-derived heuristics, not
independently verified business identities.

The early detail-page collector matched a hidden JavaScript error fallback and
cannot establish whether individual pages exist. Later manual probes returned
HTTP 429. Further requests stopped after confirmation; earlier retries were part
of the flawed initial run. All 862 product detail checks remain pending content
validation. Company checks recorded 98 HTTP 200 responses and 314 failed or
rate-limited responses; HTTP status alone does not validate content.

The updated collector makes detail checks opt-in and stops further network calls
after HTTP 429. Offline mode rebuilds from saved evidence without HTTP and retains
historical limitations. Incomplete inventories cannot replace complete output.

Features are controlled factual themes, not copied marketing paragraphs. Leading
themes among the 348 candidates include service tasks (131), delivery (85),
autonomous operation (52), floor cleaning (38) and humanoid interaction (36).
Categories alone no longer imply autonomous cleaning, and a reference to LiDAR,
a forklift or an underwater vehicle no longer implies navigation, autonomy or
inspection respectively. These are directory themes, not verified specifications.

The extraction now retains all recognized themes rather than stopping at five.
All source listing themes for a deduplicated model are merged, with each feature's
listing IDs and URLs retained. The 348 model/series records contain 702 theme
assignments (691 before the latest extraction revision); all 862 listings contain 1,464 (previously 1,446).
Company descriptions contribute 545 theme assignments across 210 source company
records, with 466 supplied use cases across 95 records. These are shown separately
from product/service listing themes. All counts include category positioning and
do not establish uniqueness or exhaustive semantic extraction.

The current strict audit includes **nine CSV files and 2,378 catalog rows**, with 646 exact
manufacturer spellings. Batch 154 refreshed the separate heuristic gap file offline
against all 2,378 rows (638 normalized manufacturer keys). Matches now require the
same brand; an identical model name under another manufacturer cannot count as exact.
It flags 113 model and eleven brand search candidates, including reviewed aliases,
families, components and services. These are not 113 verified catalog gaps. Source
inventories retain their original dates and historical comparison values; use
`buyandrentrobots-gaps.json` for the current comparison. The stricter `coverage.json`
counts 221 exact matches, twenty-one verified aliases, eight manufacturer corrections,
forty-six resolved families, zero family/variant reviews,
twenty-two nonrobot hardware/components, four software platforms, fourteen services, two
manually guided appliances, five integrated robotic systems, one named robot unit, one generic family and three without an exact match among the 348 original
model/series candidates. The two appliances are KB 5 and PUDU SH1; they retain
source records without robot catalog coverage. Reviews of the 122 originally
unclear listings remain separate: 113 reviewed and 9 open. Fuzzy matches and
partial family matches are not evidence of exact coverage.

The initial collection wrote research files. The subsequent reviewed import added
manufacturer-supported products to the CSV catalog. Changes, business USPs,
priorities and limitations are in [the consolidated audit](competitor-audit-2026-11-01.md).

Current product-highlight coverage: 1311 dated records across the catalog, including
185 existing-model enrichments and 1124 task additions. All 430 catalog models
matched to named competitor mentions now have dated highlights.
The original JD Humanoid row duplicated canonical JD/SKU KI-0100; it was merged with image, old-link and saved-selection preservation. The corrected baseline is 1,254 original identities plus 1124 task additions, totaling 2,378.
This is separate from identity/family resolution. The model-review export now
provides primary highlights, supporting URLs, dates and complete/partial/missing/
unmapped status, alongside the original directory claims. Existing specification
tables are not automatically verified by highlight-only enrichment.

The combined saved-source research queue covers 518 catalog targets: 430 from
explicit model mentions, 489 when reviewed listing resolutions are included and
518 when reviewed company-description references are included. All 518 have dated
highlights; 496 have selected-field reviews and 22 await those reviews. Family and
context references remain labeled and do not become exact model identities. The
queue also retains all 591 source company groups, including company-only profiles.
Use `pnpm research:refresh` to refresh coverage, the JSON/CSV research queues,
heuristic comparison and the four review exports without HTTP.

Selected specification checks cover 24,034 fields across 1272 catalog models: 8,835 documented,
14,774 not documented, 317 conflicting and 108 roadmap fields. They do not certify whole
products. The model-review CSV includes selected values, review states, URLs and dates.
Charging time now has its own column; maxRuntime remains operating endurance.

On 2026-11-02, the DealMaker Omni listing was resolved as a financing-client
reference using a company page explicitly describing the VR treadmill client.
Three named TGW RovoFlex systems were added using company-authored sources;
this does not resolve the unrelated TGW Go2/NEO claims. Company focus and
directory themes are now visible separately on brand profiles and searchable
in the brand directory. Company-review exports retain source themes and add
separate columns for dated company-authored focus reviews.


On 2026-11-02, T-Chef company-authored sources linked the former Chinese name
智谷天厨 to the current name 仟弈智能 and described cooking robotics, smart-kitchen
systems and Cooking Domain Agent maintenance support. The reviewed company URL
appears separately from the directory-supplied 36kr media link. The generic
Delivery Bot / EduBot entries remain unresolved; this company evidence does not
turn them into catalog models. All three strict model mentions and nine unclear
listings remain open.


## Ergänzung vom 2. November 2026 – Produktnamen aus Firmenbeschreibungen

Alle 412 Quellenfirmen wurden ausdrücklich auf Produktnamen in ihren Beschreibungen
geprüft: 299 haben Beschreibungstext, 113 keinen. In 76 Quellenfirmen stehen 132
benannte Referenzen: 52 Modellnamen, 28 Familien, 19 Softwareangebote, neun
Komponenten, sieben Komponentenfamilien, fünf Marken, drei Systeme, sechs
Konfigurationsbezeichnungen, ein Dienst, eine Maschinenfamilie und ein ungeklärter
Name. Dies ist eine Namenserfassung, keine Bestätigung sämtlicher Produktidentitäten.

Die Referenzen erscheinen mit Typ, ursprünglichem Namenskontext, Quellenlink,
Snapshotdatum und Prüfdatum auf 76 Profilen und sind über die Markensuche auffindbar.
DJI-Kamera-/Zubehörnamen werden von Drohnen getrennt; ROS, Helix und SuperDrive
werden als Software geführt. Die verkürzte Capra-Nennung „500“ bleibt mit ihrem
Kontext „Capra 200 and 500“ erhalten. Anbieterreferenzen wie Unitree G1 bei Elite
Event Robotics begründen keine Herstellerzuordnung. Es gibt keine automatischen
Roboterkarten oder Kataloglinks aus dieser Namenserfassung.

`company-descriptions.json` sichert den Quelltext unabhängig vom Scratch-Verzeichnis.
`company-description-reviews.json` enthält für jede Quellenfirma eine explizite
Entscheidung mit SHA-256 des exakten Beschreibungstextes. Änderungen an Identität,
Beschreibung, Quelle oder Datum sowie fehlende Reviews werden zurückgewiesen.
Bei fehlerhaften oder unvollständigen Eingangsdaten ersetzt die Extraktion keine
bestehende Ausgabe. Die Quelldaten werden nur serverseitig beim Build gelesen.
Der Snapshot stammt vom 1. November 2026; die Namenprüfung vom 2. November 2026
ist kein neuer Live-Abruf des weiterhin blockierten Wettbewerber-Hosts.

Ein eigener Export `company-product-review.csv` enthält 132 Zeilen mit Namen,
Typen, Kontexten, Quellen, Daten, Hashes und Katalogkandidaten. Die bestehenden
592 Firmen-, 406 Modell-/Serien- und 862 Listingzeilen bleiben erhalten. Der
zusätzliche Abgleich weist 27 Namenskandidaten und sechs Präfixkandidaten aus;
19 Modellnamen benötigen eine weitergehende Identitätsprüfung. 80 Referenzen
haben einen anderen Namenstyp. Diese Zählung ist von der bisherigen Abdeckung
streng getrennt und bestätigt auch bei exaktem Namen keine Herstelleridentität.

Die zusätzliche Herstellerprüfung belegt Tokinomo Shelfobot als stationären
Werberoboter mit beweglichem Arm, Näherungserkennung, LED/Ton und Fernverwaltung
von Kampagnen. Er ergänzt den Katalog mit datierten Herstellermerkmalen.
Umsatzsteigerungsversprechen werden nicht übernommen. Visibubble bleibt außerhalb
des Roboterkatalogs: Die geprüfte Herstellerseite beschreibt wechselbare magnetische
Botschaften, Sensor, Licht und Ton, dokumentiert aber keine Roboterbewegung.
Die Syrebo-Seite nennt SY-HR08E nur im URL-Pfad, nicht im extrahierten Text;
das reicht hier nicht zur Modellbestätigung. Klinische Wirksamkeitsversprechen
werden daraus nicht abgeleitet.

Aktueller Bestand: 1.665 Modelle, 631 exakte Herstellerbezeichnungen,
1.034 Firmen-/Markenprofile (620 mit Modellen, 414 Quellenprofile ohne Modelle),
523 datierte Produktmerkmalsdatensätze aus 410 Ergänzungen und 113 bestehenden
Modellen. Tokinomo wird seinem bestehenden Quellenprofil zugeordnet; kein
doppeltes Firmenprofil entsteht. Alle 421 zu ursprünglichen benannten
Wettbewerber-Nennungen zugeordneten Katalogmodelle behalten Merkmalsbelege.
Die drei ursprünglichen offenen Modellidentitäten und neun unklaren Listings
bleiben offen. Führungsposition und vollständige Spezifikationsprüfung sind
weiterhin nicht nachgewiesen.

Belege, vorherige Bestände, Herstellerabrufe und Prüfprotokolle:
`scratch/competitor-research/primary/batch-28/`. Änderungen bleiben lokal.


Validierung: 244 Unit-Tests in 19 Dateien, elf Python-Tests und 118 ausgewählte
Browserfälle bestanden. Die neuen Produktnamenbereiche wurden auf Desktop/Mobil
und in Hell/Dunkel mit Axe geprüft. Im ersten Lauf bestanden 117 Fälle; ein Fall
auf einer bestehenden Seite mit YouTube-Einbettung meldete einen compute-pressure-
Berechtigungsfehler in der Konsole. Die unveränderte Wiederholung bestand; es
wurde keine Meldung im Test oder in der Anwendung unterdrückt. Eine transiente
Meldung aus der Einbettung ist eine mögliche Ursache, aber nicht abschließend belegt.
Alle 554 Themenprofile, die 132 Namen auf
76 Profilen, die neue Shelfobot-Seite und sämtliche 592/406/862/132 Exportzeilen
wurden zusätzlich abgeglichen. Build: 2.713 Seiten, rund 404 MB. Datenprüfung:
null Fehler, 536 Warnungen; die zusätzliche Warnung betrifft das nicht belegte
Shelfobot-Erscheinungsjahr. Erneuter Import: 523 Datensätze, null Ergänzungen.
Alle 1.664 vorherigen Katalogzeilen und 522 vorherigen Merkmalsbelege bleiben
erhalten. Die 1.961 Quellenidentitätsdatensätze wurden unverändert abgeglichen.
Alle 193 erfassten eigenen Testprozesse sind beendet, Port 4321 ist
geschlossen; eigene Recherche-Hilfsprozesse verbleiben nicht. Kein Recherchebrowser
wurde geöffnet, fremde Ressourcen blieben erhalten. Änderungen bleiben lokal ohne
Commit, Push oder Deployment. Nachweise: `batch-28/inventory-check.json`,
`batch-28/evidence-check.json` und `batch-28/resource-check.json`.


## Ergänzung vom 2. November 2026 – Modellprüfung der Firmenbeschreibungen

Die Namenserfassung hat nun eine eigene datierte Identitätsprüfung.
`company-product-reviews.json` enthält 45 Entscheidungen: 38 konkrete
Modellreferenzen zu 37 unterschiedlichen Katalogmodellen, sechs ausdrücklich
qualifizierte Verweise auf verwandte Versionen und einen Nicht-Roboter.
132 Quellennamen und ihre ursprünglichen Typen bleiben unverändert. Die sechs
Versionsverweise zählen nicht als genaue Modellkonfiguration. Die sieben übrigen
Modellnamen – ANYmal, ANYmal X, Sparky, Bee-Bot, Titan the Robot, SY-HR08E und Thymio –
bleiben in dieser Quellenebene ohne abgeschlossene Identitätsentscheidung.
Die 80 anders typisierten Software-/Komponenten-/Familienreferenzen sind weiterhin
eine Namenserfassung; diese Prüfung zertifiziert nicht automatisch ihre Identität.

Die Entscheidungen binden an die genaue Quellbeschreibung per SHA-256 und verlangen
datierte Primärbelege. Katalogziele müssen existieren und eigene Primärquellen
besitzen. Fehlende/mehrdeutige Ziele, veraltete Hashes, unzulässige URLs, fehlende
Belege und ungültige oder zeitlich widersprüchliche Daten führen zum Abbruch.
Markenprofile und der 132-zeilige Namenexport zeigen die Entscheidung, Quellen,
Prüfdaten, Hinweise und getrennte Kataloglinks. Breit benannte Serien und
Generationen bleiben als verwandte Versionen gekennzeichnet. Anbieter wie Elite
Event Robotics und Scarlett Entertainment werden durch Unitree-G1-/Pepper-Verweise
nicht zu Herstellern; Verfügbarkeit oder Händlerautorisierung wird nicht behauptet.

Neu im Katalog sind neun durch Herstellerseiten belegte Modelle:

- DJI Air 3S: Zwei Kameras, ein Zoll Hauptsensor, Free Panorama und nächtliche
  Hinderniserkennung unter den Herstellerbedingungen.
- DJI Flip: Faltbarer Propellerrundumschutz, Handstart, Motivverfolgung und
  4K/60fps-HDR-Kamera.
- DJI Mini 4 Pro: Echte vertikale HDR-Aufnahmen, Rundum-Hinderniserkennung und
  ActiveTrack 360.
- DJI Mavic 3 Pro: Hasselblad-Kamera plus zwei Telekameras und Rundumsensorik.
  Die nur per Fußnote zugeordnete ProRes-Funktion wird dem Standardmodell nicht
  pauschal zugeschrieben.
- Tennant T7AMR: BrainOS-Navigation, Hindernisvermeidung, Bürstenverschleißanzeige
  und Flottenberichte; ec-H2O bleibt eine verfügbare Option.
- Tennant T16AMR: Autonome industrielle Bodenreinigung, zylindrischer Schrubbkopf,
  Absaugung und Sichtbarkeitspaket. Kumulative Betriebsstunden innerhalb von
  24 Stunden werden nicht als kontinuierliche Laufzeit importiert.
- Badger Technologies PatrolBot: Über Wachmanagementsoftware geplante Patrouillen,
  Hindernisumfahrung, Livevideo und Vorfallbilder.
- Barrett Burt: Armgewicht-Unterstützung, haptische Assistenz/Widerstand und
  therapeutisch ausgewählte Interaktionen. Keine Wirksamkeits-, Sicherheits- oder
  Zulassungsgarantie wird übernommen; widersprüchliche Angaben zu 18/20 Aktivitäten
  bleiben weg.
- Ozobot Bit: Historisches Originalmodell mit Farbcode-/Linienprogrammierung und
  OzoBlockly; kein Alias für Bit+. Grundlage ist der bereits am 1. November 2026
  gespeicherte Herstellerleitfaden. Es erfolgte kein erneuter Versuch gegen den
  blockierten Haupt-Host.

Vier bestehende Modelle erhalten Merkmalsbelege: Tennant X4 ROVR, X6 ROVR und
T380AMR sowie Misty II. Deren vorhandene CSV-Werte werden nicht als vollständig
geprüft ausgegeben. X4/X6 im Tennant-Firmenkontext werden auf die belegten
ROVR-Modellnamen aufgelöst; gleichnamige X6 anderer Hersteller sind keine Ziele.
Misty dokumentiert Tiefen-/Abstandssensorik, mechanische Interaktion und
programmierbare Erweiterungen in der eigenen Entwicklerdokumentation.

Aktueller Bestand: 1.674 Modelle, 632 exakte Herstellerbezeichnungen,
1.034 Marken-/Firmenprofile (621 mit Modellen, 413 ohne), 536 datierte
Produktmerkmalsdatensätze aus 419 Ergänzungen und 117 bestehenden Modellen.
Alle 1.665 vorherigen CSV-Zeilen und 523 bisherigen Merkmalsdatensätze bleiben
unverändert. Quellenidentitäten, 592 Firmengruppen, die ursprünglichen 406
Modell-/Seriennennungen und 862 Listings bleiben erhalten. Der neue Barrett-
Hersteller ist seinem vorhandenen Firmenprofil zugeordnet. Die ursprünglichen
drei offenen Modellidentitäten und neun unklaren Listings bleiben offen.
Marktführerschaft und vollständige Spezifikationsprüfung sind weiterhin unbewiesen.

Nachweise: `scratch/competitor-research/primary/batch-29/`,
`batch-29/primary-review-notes.json` und die versionierten Daten unter
`data/competitors/`. Änderungen bleiben lokal ohne Commit, Push oder Deployment.


Validierung: 265 Unit-Tests in 20 Dateien, elf Python-Tests und alle 124 ausgewählten
Browserfälle bestanden. Axe prüft den neuen Entscheidungsbereich in Hell/Dunkel
und Desktop/Mobil. Im ersten Browserlauf bestanden 123 Fälle; die bestehende
mobile Produktseite meldete erneut einen compute-pressure-Konsolenfehler. Der
Seitentest ersetzt jetzt ausschließlich die externe YouTube-Playerantwort durch
einen festen Testinhalt. Alle sechs betroffenen Seitentests bestanden anschließend;
Fehler der Seitenskripte werden weiterhin erfasst. Videowiedergabe wird damit
nicht geprüft. Die genaue Herkunft der ursprünglichen Meldung ist nicht direkt
belegt; die Änderung entfernt die externe Playerausführung aus diesem Seitentest.
Der erzeugte HTML-Bestand wurde für alle 554 Themenprofile,
132 Namen auf 76 Profilen, 45 Entscheidungen und 13 Produktseiten abgeglichen;
sämtliche 592/406/862/132 Exportzeilen wurden geprüft. Build: 2.722 Seiten,
rund 406 MB. Datenprüfung: null Fehler, 545 Warnungen. Die neun neuen Warnungen
betreffen nicht belegte Erscheinungsjahre der neun Ergänzungen. Ein Test fand
anfangs den fehlenden Navigations-Tag `programmable` beim originalen Bit; der
belegte Tag wurde ergänzt, danach bestand die gesamte Unit-Suite. Erneuter Import:
536 Datensätze, null Ergänzungen. Alle 1.665 vorherigen Katalogzeilen und
523 vorherigen Merkmalsdatensätze bleiben unverändert.

Alle 222 erfassten eigenen Testprozesse sind beendet; Port 4321 ist
geschlossen. Eigene Recherche-Hilfsprozesse verbleiben nicht. Kein Recherchebrowser
wurde geöffnet; andere Aufgabenressourcen blieben erhalten. Änderungen bleiben
lokal ohne Commit, Push oder Deployment. Nachweise: `batch-29/inventory-check.json`,
`batch-29/evidence-check.json` und `batch-29/resource-check.json`.


## Ergänzung vom 2. November 2026 – Bee-Bot, SY-HR08E und benannte Eventangebote

Der Katalog enthält jetzt 1.676 Modelle mit 634 exakten Herstellerbezeichnungen
und 540 datierten Primärquellen-Datensätzen für Produktmerkmale (421 ergänzte
Modelle und 119 Anreicherungen bereits vorhandener Modelle). Neu sind TTS Bee-Bot
und Syrebo SY-HR08E. Thymio II und ANYmal X erhalten zusätzliche Merkmalsbelege.
Bee-Bot bietet bildschirmfreie Tastenprogrammierung, aufnehmbares Audiofeedback,
Näherungsinteraktion und USB-Laden. Widersprüchliche Angaben zu 200 Befehlen bzw.
256 Schritten bleiben weg; ein Bluetooth-Hinweis in der Seitennavigation wird
nicht zur Produkteigenschaft. Robotix Education bleibt ein separates Anbieterprofil.

Die Syrebo-Herstellerbroschüre nennt SY-HR08E und dokumentiert den weichen
Exoskelett-Handschuh mit passivem, assistiertem, Widerstands- und Spiegeltraining
sowie spielbasierten Interaktionen und Berichten. Die vier Bildseiten wurden lokal
per OCR transkribiert; PDF, Seitenbilder, Konfidenzen und Maschinenabschrift bleiben
als Nachweis erhalten. Es erfolgte keine unabhängige visuelle Textkorrektur.
Die Produktseite bestätigt Funktionen, ihre URL allein ist kein Identitätsbeleg.
Wirksamkeits-, Eignungs- und Zulassungsbehauptungen werden nicht übernommen.
Die temporäre OCR-Umgebung wurde nach abgeschlossener Transkription entfernt.

Für Thymio II belegt das offizielle Mobsya-Repository offene Elektronikentwürfe,
Fertigungsdateien und CC-BY-SA-3.0-Lizenzierung. Die offizielle Historie unterscheidet
den ursprünglichen Thymio und Thymio II; die allgemeine Quellenbezeichnung wird
nur als verwandte Generation verknüpft. Die belegte Zuordnung von Mobsya zum
vorhandenen Profil Thymio by Mobsya verhindert ein zusätzliches Katalogprofil.
Syrebo ist nun ebenfalls seinem bestehenden Quellenprofil als Hersteller zugeordnet.
Insgesamt bestehen weiter 1.034 Profile, davon 623 mit Modellen und 411 ohne.

ANYbotics nennt ANYmal X in einem eigenen öffentlichen Beitrag mit autonomer
Navigation sowie thermischer, visueller, akustischer und Gassensorik und Anbindung
an Wartungssysteme. Ausschließlich der Herstellerbeitrag, keine Kommentare oder
Videomaschinenabschrift, trägt diese Merkmale. Weltneuheits-/Zertifizierungsclaims
werden nicht übernommen. Der bisherige Werbetext wurde sachlich ersetzt und das
unbelegte Anfangs-Erscheinungsjahr 2022 geleert. Der angekündigte Meilenstein vom
27. Oktober 2026 belegt kein ursprüngliches Erscheinungsjahr und wird nicht als
solches eingesetzt. Die übrigen Bestands-Spezifikationen sind weiterhin ungeprüft.
Die selektiven Feldprüfungen decken nun 67 Felder bei 13 Modellen ab:
45 dokumentiert, 18 nicht dokumentiert, zwei widersprüchlich, zwei Roadmap-Werte.

Die sieben übrigen modelltypisierten Namen aus Firmenbeschreibungen haben nun
abgegrenzte Entscheidungen. Insgesamt: 52 Entscheidungen, davon 41 konkrete
Modellreferenzen zu 40 unterschiedlichen Modellen, acht verwandte Generationen,
ein Nicht-Roboter und zwei benannte Angebote mit weiterhin ungeklärter Hardware.
Sparky ist bei Event-Robot.com als Event-/Moderationsangebot belegt, Titan bei
Schöpfer Cyberstein als interaktive Showfigur. Weder das genaue Hardwaremodell
noch der Steuerungs-/Autonomiegrad werden daraus abgeleitet. Keine Gleichsetzung
mit Sparky 1, keine neue Hardware-Herstellerzuordnung und keine pauschale
Kostüm-/Autonomiebehauptung. Scarletts Quellenreferenz belegt keine aktuelle
Autorisierung oder Verfügbarkeit. Der neue Entscheidungstyp verweigert Katalogziele;
Profile und Exporte zeigen die weiterhin unbestätigte Hardware ausdrücklich.

Alle 132 Quellennamen bleiben unverändert; 80 andere typisierte Namen sind noch
keine Identitätsprüfung. Die 406 ursprünglichen Modell-/Seriennennungen bleiben
eine getrennte Abdeckung mit drei offenen Identitäten und neun unklaren Listings.
Alle 421 dazu verknüpften Katalogmodelle haben weiterhin datierte Merkmalsbelege.
Marktführerschaft und vollständige Spezifikationsprüfung sind nicht nachgewiesen.
Alle 1.674 vorherigen Katalogzeilen bleiben vorhanden: 1.673 unverändert, eine mit
den beiden dokumentierten Korrekturen. Alle 536 bisherigen Merkmalsdatensätze,
45 bisherigen Namensentscheidungen und 1.961 Quellenidentitäten bleiben erhalten.
Nachweise: `scratch/competitor-research/primary/batch-30/`, insbesondere
`primary-review-notes.json`, `syrebo-brochure-ocr.json` und `inventory-check.json`.


Validierung dieser Ergänzung: 268 Unit-Tests in 20 Dateien und elf Python-Tests
bestanden. Alle 128 ausgewählten Browserfälle sind erfolgreich geprüft. Im ersten
Lauf bestanden 126; 2 neue Eventangebot-Prüfung(en) suchte(n) die sichtbare
Statuskennzeichnung irrtümlich im Hinweisfeld statt im umgebenden Produkteintrag.
Nach Selektorkorrektur bestanden beide Desktop-/Mobilfälle. Keine Appänderung
oder entfernte Aussageprüfung war dafür nötig. Die YouTube-Antwortisolation aus
Batch 29 bleibt bestehen; Videowiedergabe liegt außerhalb dieses Prüfumfangs.
HTML-/Export-Abgleich: 554 Themenprofile, 76 Namensprofile, 132 Namen,
52 Entscheidungen, vier neue/angereicherte Produktseiten und 592/406/862/132
Exportzeilen. ANYmal-X-Korrekturen und beide Hardware-Abgrenzungen sind zusätzlich
im erzeugten HTML geprüft. Build: 2.724 Seiten, rund 406 MB. Datenprüfung:
null Fehler, 548 Warnungen; neu sind die beiden unbekannten Erscheinungsjahre
der Ergänzungen und das geleerte unbestätigte ANYmal-X-Jahr. Lint und Formatierung
bestanden. Erneuter Import: 540 Belegdatensätze, null Ergänzungen.

Alle 215 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen und eigene Recherche-Hilfsprozesse verbleiben nicht.
Es wurde kein Recherchebrowser geöffnet; andere Aufgabenressourcen blieben
unverändert. Änderungen sind lokal. Nachweise: `batch-30/inventory-check.json`,
`batch-30/evidence-check.json`, `batch-30/correction-html-check.json` und
`batch-30/resource-check.json`.


## Ergänzung vom 2. November 2026 – sechs T-Chef-Kochsysteme und Gastronomievergleich

Die sechs in Batch 27 gefundenen Herstellerprodukte sind nun als eigenständige
programmierbare Kochsysteme geprüft und importiert: E10A, TC-E20A, TC-E40A,
TC-G300, TC-G1000 und TC-40EA-US. Die Produktseiten und der Produktindex nennen
die Geräte ausdrücklich und beschreiben manuelle/automatische Kochprogramme,
Dosierung bzw. angetriebenes Rühren. Es wird weder ein bestimmter Roboterarm noch
mobile Autonomie daraus abgeleitet. Grundlage sind die bereits am 2. November
2026 erfolgreich gespeicherten Herstellerseiten. Es gab keine erneuten Anfragen
an blockierte Hosts. Die sechs Produkte sind zusätzliche Herstellerfunde aus der
Klärung einer Wettbewerberfirma, keine weiteren ursprünglichen Modellnennungen.

E10A nutzt Induktionsheizung mit Öl-/Wasserkanälen und maximal 1 kg je Charge.
TC-E20A führt 2 kg Chargenkapazität sowie manuelle und automatische Modi; die
Parametertabelle verkürzt denselben Namen zu E20A. Daraus entsteht kein weiteres
Modell. TC-E40A dokumentiert Rezepterstellung, automatische Zutaten-/Gewürzzugabe,
geregeltes Rühren, variable Kochwinkel und automatische Ausgabe bei maximal
4 kg Chargenkapazität. Fünf gegenüber acht flüssigen Würzmitteln sind innerhalb
der Seite widersprüchlich; diese Anzahl wird nicht übernommen. Die Wasserpistole
wird nicht zu einer Selbstreinigungsfunktion umgedeutet.

TC-G300 und TC-G1000 sind Gas-Kochsysteme mit bidirektionalem Trommelrühren,
Rührklauen, neigbarem Behälter, Touchscreen und Cloud-Rezeptabläufen. Die
Hersteller-Maximalwerte liegen bei 30 bzw. 100 kg pro Charge; beide Seiten nennen
360 kg Geräte-Netto-Masse. Die Daten wurden je Modell geprüft und nicht übertragen.
TC-40EA-US bleibt von TC-E40A getrennt: 2 kg optimale und 4 kg maximale
Stir-Fry-Kapazität, Edelstahlbehälter, andere Maße und 235 kg Netto-Masse mit dem
Herstellervorbehalt möglicher Abweichungen. Zertifikats-/Normenbehauptungen,
20-Prozent-Einsparungswerbung, Personalersatz, universelle Sicherheitsversprechen
und rezeptabhängige Durchsatz-/Garzeitangaben werden nicht übernommen.

Der neue Bereich Küche & Gastronomie führt die sechs Kochsysteme und die bereits
mit food-service markierten Macco-Produkte. Seine Navigation ist auf Desktop und
Mobil verfügbar. Zwei explizite Datenfelder — cookingCapacity und heatSource —
zeigen Chargenkapazität und Heizquelle in Detailtabelle, Vergleich und
strukturierten Produkteigenschaften. Chargenkapazität wird nicht als Nutzlast,
Gerätemasse oder Durchsatz ausgegeben. Optimale und maximale Mengen bleiben
getrennt. Die englischen und deutschen Feld-/Navigationsbezeichnungen sind
ergänzt; die Rohwerte bleiben quellennahe Herstellerangaben.

24 datierte Feldprüfungen belegen Masse, Maße, Chargenkapazität und Heizquelle
für die sechs Geräte. Die Prüfungen umfassen damit insgesamt 91 Felder an
19 Modellen: 69 dokumentiert, 18 nicht dokumentiert, zwei widersprüchlich und
zwei Roadmap-Werte. Diese Zahlen stehen weiterhin für einzelne Felder und sind
keine vollständige Produktzertifizierung oder unabhängige Leistungsmessung.
Die neuen Spalten wurden an commercial.csv angehängt; alle bisherigen Zellwerte
bleiben unverändert. Keines der sechs Geräte erhält erfundene Nutzlast-, Akku-,
Laufzeit-, Preis-, Zulassungs- oder Erscheinungsjahrwerte.

T-Chef ist anhand von Herstellerhistorie, Firmenbeschreibung und Produktindex dem
bestehenden Profil Zhigu Tianchu zugeordnet. Originaler Medienlink und geprüfte
Firmenwebsite bleiben getrennt. Delivery Bot und EduBot werden weiterhin keiner
T-Chef-Hardware gleichgesetzt. Das Firmenprofil zeigt sechs belegte Produktkarten
und behält den ausdrücklichen Hinweis auf die ungeklärten ursprünglichen Namen.
Die Zahl der Quellenfirmengruppen bleibt 592. Gesamtbestand: 1.682 Modelle,
635 exakte Herstellerbezeichnungen und 1.034 Profile (624 mit Modellen / 410 ohne).
546 datierte Produktmerkmalsdatensätze verteilen sich auf 427 Ergänzungen und
119 Anreicherungen bereits vorhandener Modelle. Alle 1.676 bisherigen Katalogzeilen,
540 bisherigen Merkmalsbelege, 52 Namensentscheidungen, 13 bisherigen selektiven
Feldprüfungen und 1.961 Quellenidentitäten bleiben erhalten.

Die sechs bisherigen T-Chef-Funde haben abgeschlossene Importentscheidungen in
`batch-31/cooking-product-lead-decisions.json`; das ursprüngliche Lead-Artefakt
bleibt unverändert. Offen bleiben die drei ursprünglichen Modellidentitäten,
neun unklaren Listings, zwei Event-Hardwareidentitäten und die 80 anders typisierten
Namensreferenzen. Vollständige Spezifikationsprüfung und Marktführerschaft sind
nicht nachgewiesen. Weitere Nachweise: `batch-31/primary-review-notes.json`,
`batch-31/inventory-check.json` und die sechs verlinkten Herstellerseiten.


Validierung: 269 Unit-Tests in 20 Dateien, elf Python-Tests und alle 138 ausgewählten
Browserfälle bestanden. Die Browserfälle prüfen zusätzlich Gastronomienavigation,
Kapazitäts-/Masse-/Heizquellenvergleich, deutsche Feldbezeichnungen und Primärlinks
sowie Barrierefreiheit der neuen US-Produktseite in Hell/Dunkel und Desktop/Mobil.
Die geänderte Firmenprofilprüfung erwartet jetzt sechs belegte Kochsysteme und
behält die Grenzen der ungeklärten ursprünglichen Namen bei. Eine anfängliche
Unit-Erwartung von null Produktkarten wurde entsprechend aktualisiert; danach
bestand die ganze Suite. Der ergänzende statische Prüfer wurde angepasst, um
JSON-LD-Listen neben einzelnen Produktobjekten zu berücksichtigen. Die bestehende
YouTube-Testantwort bleibt isoliert; tatsächliche Videowiedergabe wird nicht geprüft.

HTML-/Export-Abgleich: 554 Themenprofile, 76 Namensprofile, 132 Namen,
52 Namensentscheidungen, sechs neue Produktseiten und 592/406/862/132 Exportzeilen.
Alle 24 neuen Feldzellen und strukturierten Produkteigenschaften stimmen mit den
geprüften Herstellerwerten überein. Nutzlast-/Laufzeitinferenz und unbestätigte
Zertifikats-/Einsparungswerbung fehlen in den neuen Produktseiten. Build:
2.730 Seiten, rund 409 MB. Datenprüfung: null Fehler, 554 Warnungen; die sechs
neuen Warnungen sind unbelegte Erscheinungsjahre. Lint und Formatierung bestanden.
Erneuter Import: 546 Belegdatensätze, null Ergänzungen.

Alle 199 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen und eigene Recherche-Hilfsprozesse verbleiben nicht.
Es wurde kein Recherchebrowser geöffnet; andere Aufgabenressourcen blieben
erhalten. Änderungen sind lokal. Nachweise: `batch-31/inventory-check.json`,
`batch-31/evidence-check.json`, `batch-31/cooking-evidence-check.json` und
`batch-31/resource-check.json`.


## Ergänzung vom 2. November 2026 – Familienzuordnung, Inspire und Interbotix ALOHA

Alle 28 bislang ungeprüften Familiennamen aus den Firmenbeschreibungen haben nun
abgegrenzte Zuordnungen. 27 Familien führen zu einzeln durch Primärquellen belegten
verwandten Varianten; SKYHUB erhält einen eigenen Systembezug ohne eigenständiges
Roboterziel. Die 132 extrahierten Namen, Quelltypen und Beschreibungshashes bleiben
unverändert. Die Verknüpfungen sind keine exakten Konfigurationsmatches, keine
vollständige aktuelle Serienübersicht und kein Nachweis von Verfügbarkeit.

Aus bestehenden Belegen werden konkrete Varianten von Kas/Neo, Carti/Servi,
LaserWeeder, Mercury/myCobot, ER-FLEX, Skypod, GR, HaiPick, Kime, TIAGo,
Blaze/OB7, C2, HUBO, RB/RBQ, Relay, GoPal und Walker verknüpft. Die RB-Zuordnung
enthält nur die 13 geprüften kollaborativen RB-/RB-N-Arme, keine RBQ-Vierbeiner
oder RB-Y1-Hybridplattform. ER-FLEX behält zehn getrennte Arm-/ESD-Konfigurationen
unter Enabled Robotics; MiR und UR werden nicht zu Herstellern des Gesamtsystems.
HUBO verweist ausdrücklich auf historische Entwicklerbelege. DEEBOT verknüpft
beispielhaft nur die geprüfte kommerzielle PRO-Linie und wählt keine Verbrauchergeneration.
Die bisherigen Merkmalsdatensätze und ihre ursprünglichen Prüfdaten bleiben erhalten.

Neu im Katalog sind DJI Inspire 3 und drei Interbotix-Konfigurationen:
ALOHA Stationary, ALOHA Mobile und ALOHA Solo. Inspire 3 ist durch die benannte
Produkt- und Spezifikationsseite als Filmkamera-Drohne belegt. Vollformatsensor,
kompatible DL-Objektive und O3-Pro-Einzel-/Doppelsteuerung werden beschrieben.
Gerätemasse mit Kamera, zwei Akkus, Objektiv, PROSSD und Propellern bleibt von der
maximalen Startmasse getrennt. Die 28/26 Minuten Flugzeit behalten die Unterschiede
der Fahrwerksstellung und die Hersteller-Testbedingungen; kein Missions- oder
Ladezeitversprechen. ProRes-RAW-Lizenz-/Paketumfang wird nicht pauschal behauptet.
Drei zusätzliche Feldprüfungen erhöhen den Umfang auf 94 Felder an 20 Modellen:
72 dokumentiert, 18 nicht dokumentiert, zwei widersprüchlich, zwei Roadmap-Werte.

Die versionierte Trossen-Dokumentation benennt ausdrücklich Interbotix-ALOHA-Kits,
die von Trossen angeboten werden. Die Hardwaremarke im Katalog ist Interbotix;
Trossen bleibt ein eigenes Anbieterprofil mit verwandten Produktlinks. Stationary
führt zwei Leader- und zwei Follower-Arme sowie vier RealSense-D405-Kameras, Solo
je einen Leader/Follower und zwei Kameras. Mobile kombiniert das Armpaar-System
mit einer SLATE-Basis und getrennter Joystick-/Arm-Teleoperation. Lern-/Datensatz-
Workflows sind dokumentiert; daraus wird keine sofort nutzbare Autonomie abgeleitet.
Die Dokumentationsversion 2.0 ist kein zusätzlicher Produktname ALOHA 2 und keine
Gleichsetzung mit Trossen AI Arms. Beim mobilen Kameratyp widersprechen sich
Packliste und Spezifikation; der Typ wird nicht übernommen. Die leere Startseite
war ein öffentlicher Meta-Refresh zur Versionsseite, dem normal gefolgt wurde.

Bestehende ECOVACS-Modelle GOAT A3000 LiDAR und WINBOT W2 Pro Omni erhalten
Merkmalsbelege. GOAT beschreibt Dual-LiDAR-/Kamerasensorik und einstellbare
Schnitthöhe; es wird nicht mit dem separat beworbenen PRO-Nachfolger vermischt.
WINBOT dokumentiert die tragbare Versorgungs-/Aufbewahrungsstation, Sprühreinigung
und App-/WIN-SLAM-Planung. Fallgarantien, Versicherungsansprüche, Effizienzwerbung,
aktuelle Preise und vollständige Bestands-Spezifikationen werden nicht übernommen.

Die neue SOLARTODO-Firmenprüfung benennt SKYHUB als koordiniertes Katalogsystem
aus Fluggerät, Wechselstation und einem gewählten Bodenroboter. Das Handbuch Rev 1.3
vom 27. September 2026 unterscheidet Geräte-/Freigabezuständigkeiten und separates
Bodenroboterladen. Die öffentlichen Dashboard-/Showcase-Zahlen sind ausdrücklich
simuliert und werden nicht als Kundeneinsatz oder Leistungsnachweis gewertet.
Der neue System-Prüftyp erlaubt nur Familien-/Systemnamen und keine Roboterziele.
Vier im Handbuch genannte Komponenten — STT 1S MAX, STT-HUB1101, STTBOT-S1 und
STTBOT-T1 — bleiben separate Recherchefunde mit ungeklärter OEM-Identität,
physischer Produkt-/Lieferprüfung und Katalogintegration. Ihre Namen stehen in
`batch-32/skyhub-hardware-leads.json`; es werden keine vier ungeprüften Roboterimporte
oder zusätzlichen ursprünglichen Wettbewerber-Modellnennungen daraus gemacht.

Gesamtbestand: 1.686 Modelle, 636 exakte Herstellerbezeichnungen und
1.035 Profile (625 mit Modellen / 410 ohne). 552 datierte Merkmalsbelege verteilen
sich auf 431 Ergänzungen und 121 Anreicherungen bestehender Modelle. Die
Namensprüfungen umfassen 80 Entscheidungen: 41 konkrete Modellreferenzen,
35 qualifizierte verwandte Produktbezüge, einen Nicht-Roboter, zwei Eventangebote
mit unbestätigter Hardware und einen Systembezug. 52 andere typisierte Namen
bleiben ohne Primäridentitätsprüfung. Alle 1.682 bisherigen Katalogzeilen,
546 Merkmalsbelege, 52 bisherigen Namensentscheidungen, 19 bisherigen selektiven
Feldprüfungen und 1.961 Quellenidentitäten bleiben unverändert erhalten.
Die ursprünglichen drei offenen Modellidentitäten und neun unklaren Listings
bleiben offen; Marktführerschaft und vollständige Spezifikationen sind unbewiesen.
Nachweise: `batch-32/primary-review-notes.json`, `batch-32/family-targets.json`,
`batch-32/inventory-check.json` und die datierten Hersteller-/Entwicklerquellen.


Validierung: 272 Unit-Tests in 20 Dateien, elf Python-Tests und alle 148 ausgewählten
Browserfälle bestanden. Zusätzliche Browserfälle prüfen die Interbotix-/Anbietertrennung,
13 getrennte RB-Armverweise ohne RBQ-Vermischung, SKYHUB-System-/Simulationsgrenzen
und Inspire-Flugtestbedingungen. Axe prüft das neue Firmenprofil in Hell/Dunkel und
Desktop/Mobil. Eine bisherige Unit-Annahme, alle nicht als Modell extrahierten Namen
seien ungeprüft, wurde um die ausdrücklichen manuellen Familien-/Systementscheidungen
erweitert; automatische Modellkandidaten bleiben für diese Namen ausgeschlossen.
Im ersten Browserlauf bestanden 146 Fälle; zwei Navigationstests nahmen X10 auf
der ersten Ergebnisseite an. Durch zusätzliche Flugroboter liegt es später.
Die Tests suchen jetzt nach dem Modellfeld X10; beide gezielten Nachprüfungen
bestanden. Ein erster Nachprüfungsversuch mit kombiniertem Marken-/Modelltext
fand wegen der bisherigen feldweisen Suche nichts.
Die bestehende YouTube-Testantwort bleibt isoliert; tatsächliche Videowiedergabe
wird nicht geprüft.

HTML-/Export-Abgleich: 554 Themenprofile, 76 Namensprofile, 132 Namen,
80 Entscheidungen, sechs neue/angereicherte Produktseiten und 592/406/862/132
Exportzeilen. Zusätzlicher Abgleich prüft alle 28 Familienprofilelemente mit
89 verwandten Modelllinks, drei neue Feldzellen und strukturierte Eigenschaften,
drei ALOHA-Seiten sowie den Systembezug ohne Roboterziele. Build: 2.735 Seiten,
rund 410 MB. Datenprüfung: null Fehler, 558 Warnungen; die vier neuen Warnungen
sind unbekannte Erscheinungsjahre. Lint und Formatierung bestanden. Erneuter Import:
552 Belegdatensätze, null Ergänzungen.

Alle 263 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen und eigene Recherche-Hilfsprozesse verbleiben nicht.
Kein Recherchebrowser wurde geöffnet; andere Aufgabenressourcen blieben erhalten.
Änderungen sind lokal. Nachweise: `batch-32/inventory-check.json`,
`batch-32/evidence-check.json`, `batch-32/family-evidence-check.json` und
`batch-32/resource-check.json`.


## Ergänzung vom 2. November 2026 – Software, Komponenten und integrierte Systeme

49 weitere Namen aus den gespeicherten Firmenbeschreibungen haben eine getrennte
Primärquellenprüfung erhalten: 17 Softwarebezüge, 16 Komponenten/-familien,
fünf Marken-/Firmenbezüge, fünf verkürzte Konfigurationen, vier zusätzliche
Systembezüge, ein Dienst und eine Maschinengruppe. Zusammen sind 129 der 132
extrahierten Namen mit einer abgegrenzten Entscheidung versehen. Die ursprünglichen
Namen, Typen, Beschreibungs-Hashes und Quelldaten bleiben unverändert. Eine
Klassenprüfung ist keine Freigabe aller Hersteller-, Betreiber- oder Rechtsbeziehungen.
Nuro Driver bleibt beispielsweise im Original als Software typisiert; die
Primärquelle beschreibt dagegen ausdrücklich ein System aus Software und Hardware.
Oxipital AI ist als Firmen-/Technikbezug eingeordnet, ohne den behaupteten
Asset-Verkauf oder eine rechtliche Identität mit Soft Robotics zu bestätigen.

Die neuen Prüfklassen verhindern Roboterziele für Software, Komponenten, Marken,
Dienste und Maschinengruppen. Konfigurationsbezüge erfordern dagegen einen
belegten verwandten Katalogeintrag und erscheinen ausdrücklich als verwandtes
Produkt. Booster Geek/Education/Pro führen zum K1-Grundmodell; ihre abweichenden
Akkus, Rechenleistungen und Laufzeiten werden nicht vermischt. Capra „500“ führt
zur separat dokumentierten Capra-500-Plattform. BrainOS bleibt von Tennant-Hardware,
ROS/Gazebo/Open-RMF von Robotermodellen, Waymo One von Fahrzeug-Generationen und
ROBOMACHINE von einem vermeintlichen FANUC-Roboterarm getrennt.

Fünf integrierte Hardwareangebote wurden ergänzt: CafeXbot Coffee Barista Robot,
CafeXbot Ice Cream Robot, CafeXbot Robotic Cafe, ScalableArc Welding Cobot Cart und
DriveMod Forklift. VLT ist die Kioskmarke; Franke und Pasmo bleiben getrennte
Komponentenlieferanten. Das Eisangebot ist namentlich auf der Herstellerübersicht
belegt; die Detailseite lieferte keinen auswertbaren Text. Es erhält daher keine
abgeleiteten Einzelkonfigurationsdaten. Widersprüchliche Kaffee-Ausgabezeiten und
fehlerhafte Leistungs-/Energieeinheiten werden nicht übernommen. Der Schweißwagen
ist in der Industrie-Rubrik für Roboterarme eingeordnet: Scalable Robotics integriert
einen ABB GoFa-10 auf einem BuildPro Rhino Cart und liefert ScalableArc-Teaching.
Es entsteht kein zusätzliches ABB-Arm-Modell.

Bei DriveMod Forklift unterscheiden die Quellen den BYD-Basisstapler von Cyngns
Autonomietechnik. Die Meldung vom 15. Juni 2023 beschrieb Entwicklung und einen
geplanten Start. Spätere Herstellerankündigungen vom 21. Oktober 2024 und
19. Februar 2025 berichten einen ersten bezahlten Einsatz beziehungsweise weitere
Brancheneinsätze. Damit ist eine reine Entwicklungsprojekt-Einordnung überholt;
unabhängige Einsatzbestätigung, heutige Lieferung und das konkrete aktuelle Chassis
bleiben offen. Die URL /autonomous-forklift beschreibt inzwischen Tugger-Workflows
und gilt deshalb nicht als aktuelle Stapler-Spezifikation. Unterschiedliche
Traglastangaben aus älteren Fundstellen werden nicht gepoolt; die geprüften alten
PDF-URLs lieferten 404. Einsatzdaten werden nicht als Erscheinungsjahr importiert.

16 zusätzliche Firmenprofile erhalten Funktionsbeschreibungen aus eigenen Quellen,
unter anderem für AmbiOS, BrainOS, Helix, Foresight, LocusONE, MIRAI, Nuro Driver,
SubNav OS, MoveIt Pro, SuperDrive/HyperFoundry, Carbon, Waymo One und Make Wonder.
Insgesamt bestehen jetzt 20 getrennte Firmenfokus-Prüfungen. Diese Angaben sind
belegte Selbstdarstellungen, keine unabhängigen Alleinstellungs-, Sicherheits-,
Zertifizierungs-, ROI- oder Leistungsnachweise. Die littleBits-Einordnung hält
außerdem fest, dass die alte App laut Support Anfang 2025 entfernt wurde und die
Space-Rover-w33-Steuerung davon abhängt; daraus folgt keine Einstellung aller Kits.

Offen bleiben APP+ (geprüfte Herstellerseiten nennen 1+OS, keine belegte Aliasregel),
VEX Robotics beim Anbieter iDesign 365 (403 bei Anbieter, Hersteller und gewählter
Supportseite) und Kime v5 (kein Beleg der konkreten Version/Start-/Portionierungs-
Behauptung im bisher geprüften Herstellerangebot). Keine dieser Angaben wird auf
ähnlich benannte Produkte umgebogen. Neue 403/429 und die ROS-Anubis-Abfrage wurden
nicht umgangen; frei zugängliche Entwicklerhandbücher, die Plattformbeschreibung
von Open Robotics und Hersteller-Supportdokumente dienen als eigene Primärquellen.

Stand: 1.691 Modelle, 638 exakte Hersteller-Schreibweisen und 1.035 Firmen-/Markenprofile,
davon 627 mit Modellen und 408 ohne Hardwarekarten. 557 datierte Produkt-Belegdatensätze
entsprechen 436 Ergänzungen und 121 Anreicherungen. Die 421 ursprünglich zugeordneten
Katalogprodukte behalten ihre Belege. 592 Quellfirmengruppen, 406 ursprüngliche
Modell-/Familiennennungen, 862 Listings und 132 Beschreibungsnamen bleiben getrennt.
Alle 1.686 vorherigen CSV-Zeilen, 552 Produktbelege, 80 Namensentscheidungen und
20 selektiven Spezifikationsprüfungen sind unverändert erhalten. Die beiden neuen
Herstellerzuordnungen betreffen ausschließlich Scalable Robotics und VLT Robotics.
Die selektiven Feldprüfungen bleiben bei 94 Feldern für 20 Modelle. Drei ursprüngliche
Modellidentitäten, neun unklare Listings, zwei Event-Hardwareidentitäten und vier
SKYHUB-Komponenten/OEM-Funde sind weiterhin offen. Marktführerschaft ist unbewiesen.


Validierung dieser Ergänzung: 282 Unit-Tests in 20 Dateien, elf Python-Tests und
alle 168 ausgewählten Desktop-/Mobil-Browserfälle bestanden. Neue Fälle prüfen die
Trennung von Software und Robotermodellen, acht DJI-Komponenten ohne Roboterziele,
die Forklift-Zuordnung mit datierten Einsatzmeldungen sowie die Komponentenlieferanten
bei CafeXbot und dem Schweißwagen. Axe prüft zusätzlich Open Robotics, VLT und
Scalable Robotics in Hell/Dunkel auf Desktop und Mobil. Ein anfänglicher
Kategoriefehler des Schweißwagens wurde durch Einordnung als industrielles
Roboterarmsystem behoben; alle bisherigen CSV-Zeilen blieben unverändert.
Im ersten Browserlauf bestanden 166 Fälle. Zwei alte PlusAI-Prüfungen erwarteten
noch ungeprüfte Softwarenamen und eine feste Reihenfolge der Quellenlinks/-zeiten.
Die angepassten Tests prüfen die neuen Softwareentscheidungen, unveränderte
Originalquellen/-daten, fehlende Roboterlinks und APP+ weiterhin als ungeprüft.
Beide gezielten Nachprüfungen bestanden.
Die bestehende YouTube-Testantwort bleibt isoliert, tatsächliche Videowiedergabe
wird nicht geprüft.

Der HTML-/Exportabgleich bestätigt 554 Themenprofile, 76 Namensprofile, 132 Namen,
129 Entscheidungen, fünf neue Produktseiten, 20 Firmenfokus-Profile und sämtliche
592/406/862/132 Exportzeilen. Die 49 neuen Anzeigen enthalten fünf ausdrücklich
verwandte Konfigurationslinks und 44 Bezüge ohne Roboterziele. Build: 2.740 Seiten,
rund 411 MB. Datenprüfung: null Fehler, 563 Warnungen; fünf neue Warnungen betreffen
unbekannte Erscheinungsjahre. Lint und Formatierung bestanden. Erneuter Import:
557 Produktbelegdatensätze, null Ergänzungen.

Alle 276 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen; eigene Recherche-Hilfsprozesse verbleiben nicht.
Kein Recherchebrowser wurde geöffnet. Andere Aufgabenressourcen blieben erhalten.
Änderungen bleiben lokal. Nachweise: batch-33/inventory-check.json,
batch-33/evidence-check.json, batch-33/typed-evidence-check.json,
batch-33/review-findings.json und batch-33/resource-check.json.


## Ergänzung vom 2. November 2026 – APP+, VEX, Kime V5 und SKYHUB-Katalogbezüge

Alle 132 aus den Firmenbeschreibungen extrahierten Namen haben jetzt eine
abgegrenzte Quellenentscheidung. Drei bisher offene Namen wurden mit neuen,
frei zugänglichen Dokumenten eingeordnet, ohne ihre ursprünglichen Typen,
Beschreibungs-Hashes oder Quelltexte zu verändern. Dies bedeutet keine vollständige
Hardware-, Verfügbarkeits- oder Anbieterzertifizierung.

APP+ ist in einer SGInnovate-Programmbroschüre ausdrücklich als Hand-Plus-Software
mit den Picking-Zellen PICK+, MOVE+ und PACK+ genannt. Die PDF-Metadaten datieren
die Erstellung auf den 9. September 2022. Die heutige Herstellerseite beschreibt
dagegen 1+OS. Die historische Benennung ist damit belegt; Alias, Umbenennung und
gemeinsame Versionsidentität bleiben unbewiesen. Programmquellen sind im Validator
nur für Software-Bezugprüfungen zugelassen und können weder Roboterziele noch
Hardwareimporte belegen. Die übrigen Quellenanforderungen einschließlich Datum,
HTTP(S)-URL und gebundenem Beschreibungs-Hash bleiben bestehen.

Ein frei zugänglicher, auf der Hersteller-Dokumentdomain gehosteter V5-/EXP-
Unterrichtsleitfaden belegt VEX Robotics als Bildungsrobotik-Marke. Gesperrte
Hersteller-, Anbieter- und Konzernseiten werden nicht als Inhaltsbelege genutzt.
Der Markenbezug erzeugt keine Robotermodelle aus Unterrichtsbauten und bestätigt
keine Herstellerrolle oder Lieferautorisierung von iDesign 365.

Macco stellt Kime V5 in eigenen Beiträgen ausdrücklich vor und zeigt programmierte
Körperposen. Ein öffentlicher, als Mitgliedsbeitrag gekennzeichneter Technologie-
Eintrag nennt Víctor Martin von Macco und verlinkt das Datenblatt „Datasheet Kime
Macco 25.pdf“. Dieses trägt den Titel KIME V5 und 2025; seine Erstellungsmetadaten
nennen den 2. Dezember 2025. Daraus wird kein exaktes Markteinführungsdatum
abgeleitet. RGB-/Tiefenbild-Erkennung von Objekten und Zuständen wie leer/voll
belegt nicht die Verzeichnisbehauptung einer kamerabasierten Portionskontrolle.
SDK-/Softwareplattform-Angaben bedeuten keine uneingeschränkten Änderungsrechte;
dasselbe Dokument behält Änderungen dem Macco-Technikteam vor. Zertifizierungs-
behauptungen und numerische Tabellenwerte werden nicht importiert. Die lokale
Bildansicht steht nicht zur Verfügung; eine unabhängige visuelle Tabellenprüfung
wird deshalb nicht behauptet.

Vier Katalogangebote wurden ergänzt: Hand Plus PICK+, MOVE+ und PACK+ sowie
Macco Kime V5. Die aktuelle Hand-Plus-Produktseite trennt ihre eigenen Integrationen
von Partnerarmen, AMRs und Greifern. PICK+ und PACK+ sind in der Industrie-Rubrik
für Roboterarme auffindbar; MOVE+ kombiniert PICK+ mit einer mobilen Basis und
gehört zu kommerzieller Logistik. Partner-Armtypen, Traglasten, Durchsatz und
konkrete Basismodelle werden nicht aus der allgemeinen Übersicht geraten.
Kime V5 bleibt als Version von den bestehenden unversionierten Bartender-, Chef-
und Kiosk-Angeboten getrennt. Zwei neue Firmenfokus-Profile ergänzen diese
Funktions- und Integrationsgrenzen; insgesamt sind es jetzt 22.

Die vier SKYHUB-Einzelkatalogseiten wurden erstmals gesondert ausgewertet.
STT 1S MAX beschreibt Sicht-/Thermalsensorik, STT-HUB1101 den passenden
Flugakkuwechsel, STTBOT-S1 die kleinere zweifingrige Bodenplattform und STTBOT-T1
die größere Variante ohne unabhängig bewegliche Geschickhand im Standardumfang.
S1-Abmessungen, Akkukonfiguration und Arm-Messdefinitionen dürfen nicht von T1
übertragen werden; Ladeleistung, rechnerisches Ladefenster und Betriebszeit sind
unterschiedliche Größen. Die Seiten nennen ihre Angaben Katalogspezifikationen
und erklären ausdrücklich, dass sie keine ausgelieferte Anlage belegen. Vier
belegte Katalog-Funktionsbezüge und ihre direkten Quellen ergänzen daher das
Firmenprofil. OEM, physisches Produkt, Auslieferung und gelieferte Konfiguration
bleiben vier offene Hardwareprüfungen. Die ursprünglichen Funddatensätze bleiben
erhalten; es werden daraus keine zusätzlichen eigenständigen Roboterkarten erzeugt.

Stand: 1.695 Modelle, 639 exakte Hersteller-Schreibweisen und 1.035 Firmen-/Markenprofile,
davon 628 mit Modellen und 407 ohne Hardwarekarten. 561 datierte Produktbelege
entsprechen 440 Ergänzungen und 121 Anreicherungen. Alle 1.691 vorherigen CSV-Zeilen,
557 Produktbelege, 129 Namensentscheidungen und 20 selektiven Feldprüfungen sind
unverändert erhalten. Nur Hand Plus erhält eine neue, explizite Zuordnung zu seinen
eigenen Integrationsangeboten. Die 592 Quellfirmengruppen, 406 ursprünglichen
Modell-/Familiennennungen, 862 Listings und 132 Beschreibungsnamen bleiben getrennt.
Die 421 ursprünglich zugeordneten Katalogprodukte behalten ihre Produktbelege.
Alle Namensentscheidungen sind jetzt vorhanden; die zwei Event-Hardwareidentitäten,
drei ursprünglichen Modellidentitäten, neun unklaren Listings, vier SKYHUB-
Hardwareprüfungen, heutige Lieferbedingungen und Marktführerschaft bleiben offen.


Validierung dieser Ergänzung: 284 Unit-Tests in 20 Dateien, elf Python-Tests und
alle 182 ausgewählten Desktop-/Mobil-Browserfälle bestanden. Neue Prüfungen
decken die drei Hand-Plus-Systeme, den getrennten Kime-V5-Bezug, VEX ohne
Hardwarezuordnung, SKYHUB ohne neue Roboterkarten sowie historische APP+-Software
ab. Ein zusätzlicher Validator-Test verhindert, dass Programmquellen als
Hardwarebelege gelten. Axe prüft Hand Plus und Macco zusätzlich in Hell/Dunkel
auf Desktop und Mobil. Die bestehende YouTube-Testantwort bleibt isoliert;
tatsächliche Videowiedergabe wird nicht geprüft.
Im ersten Browserlauf bestanden 180 Fälle. Zwei alte Macco-Suchtests erwarteten
noch drei Angebote; sie prüfen jetzt zusätzlich die separat belegte V5-Karte und
alle vier Produktlinks. Beide gezielten Desktop-/Mobil-Nachprüfungen bestanden.

Der HTML-/Exportabgleich bestätigt 554 Themenprofile, 76 Namensprofile, 132 Namen
mit 132 Entscheidungen, vier neue Produktseiten und alle 592/406/862/132
Exportzeilen. Der gezielte Namensabgleich prüft drei neue Entscheidungen, einen
Versionslink, drei Hand-Plus-Karten und vier SKYHUB-Katalogbezüge ohne neue
Hardwarekarten. Build: 2.744 Seiten, rund 411 MB. Datenprüfung: null Fehler,
567 Warnungen; vier neue Warnungen betreffen unbekannte Erscheinungsjahre.
Lint und Formatierung bestanden. Erneuter Import: 561 Produktbelege, null Ergänzungen.

Alle 297 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen; eigene Recherche-Hilfsprozesse verbleiben nicht.
Kein Recherchebrowser wurde geöffnet. Andere Aufgabenressourcen blieben erhalten.
Änderungen bleiben lokal. Nachweise: batch-34/inventory-check.json,
batch-34/evidence-check.json, batch-34/name-evidence-check.json,
batch-34/review-findings.json und batch-34/resource-check.json.


## Ergänzung vom 2. November 2026 – Universal-Robots-Angebote und belastbare Auswahlwerte

Die Hersteller-Familienübersichten wurden auf ihre 17 einzeln verlinkten Angebote
geprüft. Bisher standen nur drei Gen-7-Arme ohne datierte Produktmerkmalsbelege im
Katalog. Ergänzt sind zwölf benannte Konfigurationen: UR3e auf CB5 und UR3e-540,
UR7e auf CB5 und UR7e-920, UR12e auf CB5 und UR12e-1300, UR16e auf CB5 sowie
UR8 Long, UR15, UR18, UR20 und UR30 jeweils auf CB5. Die expliziten CB5-/CB7-Angebote
sind Controller-Konfigurationen; daraus werden keine zwölf neuen mechanischen
Armentwicklungen abgeleitet. UR20-1750 und UR30-1300 sind separat verlinkte Namen,
deren Seiten aber keine andere Controller-/Hardwarekonfiguration gegenüber CB5
belegen. Sie bleiben zwei offene Namens-/Konfigurationsprüfungen ohne zusätzliche
Roboterkarten. Aktuelle Angebote belegen keine vollständige historische Modellpalette.

Die drei vorhandenen g-Series-Arme haben jetzt datierte Produktbelege und fünf
gezielt geprüfte Werte je Modell. UR17g-1300 erhält statt der zuvor pauschalen
17 kg die dokumentierten 15 kg Grundtraglast und bis zu 17,5 kg erweiterte Traglast.
Auch bei UR10g, UR8 Long, UR15, UR20 und UR30 bleiben Grund-/Maximaltraglast und
Herstellerbedingungen getrennt. Werkzeuggewicht gehört zur Belastung. Die
g-Series-Datenblätter nennen 47,3 / 43,4 / 42 kg einschließlich Kabel; die bloßen
Armgewichte auf den Produktseiten werden damit nicht gleichgesetzt. TCP-Maximaltempo
ist keine zugesicherte Taktleistung. SP7 ist laut Datenblatt optional.

UR3e-540 und UR7e-920 behalten offene Reichweitenkonflikte: Die Seiten nennen
540 bzw. 920 mm, ihre verlinkten generischen Armdatenblätter 500 bzw. 850 mm.
Auch die Zollumrechnung auf den Seiten entspricht den älteren Werten. Deshalb
werden weder ein mechanischer Reichweitenzuwachs noch eine Fehlerkorrektur des
Herstellers behauptet. Die ursprünglichen CB5-Werte bleiben getrennt. Abweichende
Wiederholgenauigkeiten werden nicht als zusätzliche Spezifikation importiert.
Alte /ur8-long-, /ur15- und /ur18-Adressen liefern inzwischen g-Series-Inhalte;
die CB5-Vorgänger werden über ihre expliziten Produktseiten belegt. Ein alter
UR16e-Pfad und zwei veraltete PDF-Links antworten mit 404; funktionierende direkte
Herstellerlinks belegen die Produkte, nicht diese Fehlerseiten.

Eine zusätzliche Firmenfokus-Prüfung trennt die drei Familien und deren
Werkzeugschnittstellen. Die Herstelleranleitung verlangt eine Beurteilung der
konkreten Anwendung; eine pauschal schutzzaunfreie Nutzung wird nicht behauptet.
PDF-Revisionen vom Oktober 2026 sind keine Markteinführungsdaten. Lieferfähigkeit,
Preis, Zertifizierung und ROI werden nicht aus Werbeaussagen abgeleitet. PDF-Text
wurde ausgewertet; eine unabhängige visuelle Tabellen-/Diagrammprüfung wird nicht
behauptet. Die Spezifikationsbelege führen direkt zum technischen Armdatenblatt;
Produktseite und Datenblatt sind außerdem gemeinsam unter den Produktquellen sichtbar.

Stand: 1.707 Modell-/Konfigurationseinträge, 639 Hersteller-Schreibweisen,
1.035 Firmen-/Markenprofile (628 mit Modellen / 407 ohne), 576 datierte Produktbelege
(452 Ergänzungen / 124 Anreicherungen) und 23 Firmenfokus-Prüfungen. Die Feldprüfung
umfasst 169 Werte auf 35 Modellen: 145 dokumentiert, 18 nicht dokumentiert,
vier widersprüchlich und zwei Roadmap-Werte. Davon sind 75 Werte auf 15 Angeboten neu
geprüft. Alle 561 bisherigen Produktbelege, 132 Namensentscheidungen, 20 vorherigen
Feldprüfungen und 1.692 der 1.695 alten CSV-Zeilen sind unverändert; drei zuvor
vorhandene UR-Zeilen wurden ausdrücklich anhand neuer Primärquellen überarbeitet.
Die ursprünglichen drei Modellidentitäten und neun unklaren Listings bleiben offen.

Validierung: 286 Unit-Tests bestanden. Alle 14 neuen Desktop-/Mobil-Browserfälle
bestanden, einschließlich acht Axe-Fällen in Hell/Dunkel auf Marken-/Produktseiten.
Nach Umstellung der Spezifikationslinks auf die PDFs bestanden sechs gezielte
Funktionsnachprüfungen. Die 182 Browser- und elf Python-Fälle der vorherigen Ergänzung
sind separat dokumentiert; sie wurden hier nicht erneut ausgeführt. HTML-/Export-
Abgleich: 554 Themenprofile, 76 Namensprofile, 132 Entscheidungen, 15 Produktseiten
und 592/406/862/132 Exportzeilen. Alle 75 neuen Feldzellen, Quellenlinks und
strukturierten Produktwerte stimmen überein; die 15 unbekannten Preise erzeugen
keine strukturierten Kaufangebote. Build: 2.756 Seiten, rund 413 MB. Datenprüfung:
null Fehler, 579 Warnungen; zwölf neue Warnungen betreffen unbekannte Erscheinungsjahre.
Testformatierung bestanden, erneuter Import: 576 Belege und null Ergänzungen.

Alle 86 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen und eigene Recherche-Helfer verbleiben nicht. Kein
Recherchebrowser wurde geöffnet; andere Aufgabenressourcen blieben erhalten.
Änderungen bleiben lokal. Nachweise unter batch-35/: product-decisions.json,
inventory-check.json, evidence-check.json, specification-evidence-check.json und
resource-check.json. Marktführerschaft bleibt unbewiesen.


## Ergänzung vom 2. November 2026 – MiR-Plattformen, historische Modelle und Partnerzuordnung

Drei historische Transportplattformen sind nach datierten Herstellerdatenblättern
und der MiR-Historie ergänzt: MiR200 (2017), MiR500 (2018) und MiR1000 (2019).
Die PDFs sind vom Hersteller erstellte Unterlagen beim Distributor RG Group;
die Quellenrolle bleibt ausdrücklich kenntlich. Eine historische Spezifikation
belegt weder aktuelle Lieferbarkeit noch Abkündigung. Die heutigen 404-Antworten
auf alte Produktpfade und fehlende Sitemap-Einträge ändern daran nichts. MiR100
bleibt unverändert; eine vollständige historische Modellpalette wird nicht behauptet.

Vier vorhandene Plattformen wurden mit den aktuellen Hersteller-Spezifikationen
abgeglichen: MiR250, MiR600, MiR1350 und MiR1200 Pallet Jack. Die 77 Feldprüfungen
auf sieben Modellen trennen Basis-Traglast, Schleppkapazität und Modul-Nutzlast.
Hook 250 nennt 500 kg Schleppkapazität, nicht 500 kg Plattformtraglast; EU Pallet
Lift 1350 nennt 1.250 kg nutzbare Palettenlast auf der 1.350-kg-Basis. Der schmale
800-mm-Durchgang beim MiR250 setzt die beschriebene Schutzfeldkonfiguration voraus;
der Standardwert beträgt 1.500 mm. Laufzeiten bleiben mit Lastbedingungen erhalten:
MiR250 bis 13 h voll / 17 h 30 min leer, MiR600 bis 8 h 30 min voll / 11 h leer,
MiR1350 6 h 45 min voll / 9 h 50 min leer. Nachladeverhältnisse sind keine Dauer
einer vollständigen Batterieladung. MiR1000 hat eine dokumentierte 10–90-Prozent-
Ladezeit, aber keine in dieser Unterlage belegte Betriebslaufzeit oder IP-Klasse.

Der Pallet Jack behält drei markierte Konfliktfelder: 750 kg und 1.786 lb sind
keine äquivalenten Massen; Übersicht und technische Seite nennen 8 bzw. bis 10 h;
das Datenblatt druckt die Gehäusemaße in cm, die technische Seite in mm und nennt
1.140 statt 1.120 mm maximale Hubhöhe. Einheiten und Werte werden nicht stillschweigend
korrigiert. Die mm-Maße bleiben mit Konfliktkennzeichnung sichtbar; die Masse bleibt
unbestätigt. PDF-Text wurde ausgewertet, eine unabhängige visuelle Tabellenprüfung
wird nicht behauptet. Hersteller-Fallstudien sind keine unabhängigen Leistungsnachweise.

Zwei Firmenfokus-Prüfungen ergänzen MiR und Enabled Robotics. MiR Fleet/Insights
werden als Software erfasst. Zehn Zubehör-/Stationsentscheidungen und zwei
Partnerintegrationen erzeugen keine zusätzlichen Roboterkarten. Die MiR-Seiten
schreiben MC250/MC600 ausdrücklich Enabled zu; ihre Beziehung zu heutigen ER-FLEX-
und ER-MAX-Varianten ist nicht als exakter Modellalias belegt. Historische Broschüren
mit anderen UR-Armen/Traglasten werden nicht auf heutige Varianten übertragen.
Betriebszeit und tägliche Auslastung bleiben getrennt; 3D-Positionierung bleibt optional.

Aktueller Gesamtstand: 1.710 Modell-/Konfigurationseinträge, 639 Hersteller-Schreibweisen,
1.035 Firmen-/Markenprofile (628 mit Modellen / 407 ohne), 579 datierte Produktbelege
(455 Ergänzungen / 124 Anreicherungen), 25 Firmenfokus-Prüfungen und 246 geprüfte
Felder auf 42 Modellen: 197 dokumentiert, 40 nicht dokumentiert, sieben widersprüchlich,
zwei Roadmap-Werte. Alle Quelleninventare, 132 Namensentscheidungen und 35 bisherigen
Feldprüfungen bleiben erhalten. Von 1.707 alten CSV-Zeilen sind 1.703 unverändert,
vier ausdrücklich aktualisiert; von 576 alten Merkmalsdatensätzen sind 572 unverändert,
vier überarbeitet und drei neue angefügt. Drei ursprüngliche Modellidentitäten und
neun unklare Listings bleiben offen. Vollständige Herstellerprüfung und Marktführerschaft
sind weiterhin nicht belegt.

Validierung: 289 Unit-Tests und 22 neue Desktop-/Mobil-Browserfälle bestanden,
einschließlich zwölf Axe-Fällen für Hell/Dunkel. Frühere Browser-/Python-Ergebnisse
bleiben als Historie erhalten und wurden hier nicht erneut ausgeführt. HTML-/Export-
Abgleich: 554 Themenprofile, 76 Namensprofile, 132 Entscheidungen, sieben Produktseiten,
592/406/862/132 Exportzeilen. Alle 77 Felder stimmen mit den CSV-Werten überein;
55 Quellenmarkierungen, 48 strukturierte Werte und drei Konfliktzellen sind geprüft.
15 leere Felder bleiben ausgeblendet. Sieben Erscheinungsjahre stehen in zusätzlichen
Tabellenzeilen und haben derzeit keine einzelne Quellenmarkierung; die Hersteller-
Historie ist in den Produktquellen verlinkt. Unbekannte Preise erzeugen keine Kaufangebote.
Build: 2.759 Seiten, rund 414 MB. Datenprüfung: null Fehler, 575 Warnungen (vier weniger,
weil bisher fehlende Erscheinungsjahre belegt sind). Testformatierung und wiederholter
Import bestanden: 579 Produktbelege, null Ergänzungen. Kein Anwendungscode geändert.

Alle 63 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen und eigene Recherche-Helfer verbleiben nicht. Andere
Aufgabenressourcen bleiben erhalten. Änderungen sind lokal. Nachweise unter
scratch/competitor-research/primary/batch-36/: product-decisions.json,
non-model-decisions.json, inventory-check.json, evidence-check.json,
specification-evidence-check.json und resource-check.json.


## Ergänzung vom 2. November 2026 – Produktmerkmale und Quellen im Modellvergleich

Die Vergleichstabelle zeigte bislang technische Werte ohne die recherchierten
Produktmerkmale oder deren Belege. Sie zeigt jetzt für alle verfügbaren 579
Merkmalsdatensätze sämtliche 1.782 Aussagen, 712 Quellenreferenzen mit Prüfdatum
und Quellenrolle sowie die einschlägigen Feldprüfungen. Diese Aussagen sind keine
1.782 nachgewiesenen Alleinstellungsmerkmale. Hersteller-, Entwickler-, Integrator-
und Einsatzbetreiberquellen bleiben unterscheidbar. Doppelte Quellen mit identischer
Adresse, Datum und Rolle erscheinen pro Modell einmal. Ein vorhandener Merkmalsbeleg
bestätigt nicht die ganze technische Tabelle oder aktuelle Lieferbarkeit.

Widersprüchliche Werte, Roadmap-Angaben und nicht dokumentierte Felder behalten
sichtbare Prüfhinweise und Bedingungen. Ungeprüfte Modelle bekommen keine erfundene
Verifikation. Modellnamen verlinken ihre Detailseiten. Die neue öffentliche JSON-Datei
enthält ausschließlich Merkmale, Primärquellen und Feldprüfstatus/-hinweise, keine
internen Recherchepfade oder vollständigen Wettbewerberbeschreibungen. Sie wird
bei mindestens zwei Vergleichsmodellen erst beim Öffnen nachgeladen und während
der Seitensitzung wiederverwendet. Unkomprimiert: 319.656 Byte. Die bestehende
1.324.091-Byte-Katalogdatei bleibt unverändert; die Startansicht lädt keine zusätzlichen
Belege. Bei Ladefehler bleiben technische Werte und Modelllinks nutzbar; ein eigener
Hinweis und eine erneute Ladeaktion ersetzen keine Quellen durch erfundene Inhalte.
Verspätete Antworten überschreiben weder einen geleerten Vergleich noch die neue
Sprache. Englisch dient als Rückfall für alle 28 Oberflächensprachen; deutsche
Beschriftungen sind übersetzt. Die geprüften Merkmalsaussagen bleiben in ihrer
bisherigen Sprache. Lange Tabellen scrollen innerhalb der Vergleichsansicht.

Validierung: 292 Unit-Tests, 144 frische Desktop-/Mobil-Browserfälle bestanden:
18 neue Vergleichsfälle einschließlich vier Hell-/Dunkel-Axe-Fällen und 126
bestehende Marken-, Katalog- und Detailprüfungen. Geprüft sind vollständige Merkmals-
und Quellenanzeige, Quellenrollen, Konflikthinweise, fehlende Prüfungen, Laden bei
Bedarf, Wiederverwendung, HTTP-Fehler mit erneutem Laden, verspätete Antworten,
Sprachwechsel, HTML-Escaping und das Auslassen ausführbarer Quellen-URLs. Zusätzlich
stimmen alle 579 Merkmalsdatensätze und 246 Feldprüfstatuswerte auf 42 Modellen im
erzeugten JSON mit den Belegdateien überein. Die bisherigen 554 Themenprofile,
76 Namensprofile, 132 Entscheidungen, sieben MiR-Seiten und 592/406/862/132
Exportzeilen sind erneut abgeglichen. Lint für die geänderten JavaScript-Dateien
und Formatierung bestanden. Build: 2.759 HTML-Seiten plus Datenendpunkte, rund
414 MB. Datenprüfung: null Fehler, 575 bestehende Warnungen. Alle 25 gesicherten
Daten-/Inventardateien sind bytegleich; 1.710 Katalogzeilen, 579 Belege und
42 Feldprüfungen bleiben unverändert. Drei Modellidentitäten und neun unklare
Listings bleiben offen; Marktführerschaft ist nicht nachgewiesen.

Alle 177 erfassten eigenen Testprozesse sind beendet;
Port 4321 ist geschlossen und eigene Recherche-Helfer verbleiben nicht. Andere
Aufgabenressourcen bleiben erhalten. Änderungen sind lokal. Nachweise unter
scratch/competitor-research/primary/batch-37/.


## Ergänzung vom 2. November 2026 – XYZ Robotics: echte Modelle statt generischer Quellenetiketten

Vier herstellerbelegte Angebote sind ergänzt: RockyOne und RockyLight als mobile
Manipulationsroboter sowie RockyOne SE und die ausdrücklich stationäre RockyLight-SE-
Ausführung als benannte Palettierroboter. Zwei aktuelle Produktseiten nennen die
mobilen Grunddaten: 30 bzw. 25 kg maximale Handhabungslast, 1.200 bzw. 650 kg
Robotergewicht, 0,9 bzw. 2 m/s Fahrtempo und IP54 bzw. IP20. Die 1.400 × 1.060 bzw.
1.120 × 800 mm sind Stellflächen, keine vollständigen Gehäusemaße. Werkzeuganteile,
Anwendungslasten und Sicherheitsbedingungen bleiben separat zu prüfen. Die
Herstellerhistorie nennt 2023 und 2024 als Einführung der beiden mobilen Modelle.
Fallberichte mit 28/29-kg-Kartons sind keine universellen Grenzen oder Leistungsgarantien.

Herstellerfälle vom 3. Juli 2025, 21. Januar 2026 und 3. August 2026 belegen die
SE-Namen und beschriebenen Funktionen. RockyLight SE nutzt laut Fallbericht 3D-
Erfassung, Palettenplanung und nach außen orientierte Barcodes. RockyOne SE wird
mit Karton-Reorientierung und vorgegebenen Palettenmustern beschrieben. Keine
mobilen Leistungsdaten, Baugrößen oder Batteriezeiten werden auf SE übertragen.
Fallveröffentlichungen belegen kein SE-Erscheinungsjahr. Fallberichte und Kundenzitate
auf Herstellerseiten sind keine unabhängige Betriebs-, ROI- oder Durchsatzprüfung.
Komplette Förder-/Sortierlinien, Barcode-Hardware und die Rocky-MMR-Familie erzeugen
keine weiteren Roboterkarten. Der Download-Hinweis führt im gespeicherten Linkinventar
nicht direkt zu einem Dokument; kein Formular wurde abgeschickt oder geschütztes PDF bezogen.

Eine Firmenfokus-Prüfung und die Produktseiten zeigen die offizielle XYZ-Adresse
getrennt vom ursprünglichen MarketWatch-Quellenlink. Die drei Wettbewerberetiketten
DeliveryDrone, SecurityGuard und ServiceBot bleiben unbestätigt; aktuelle Lagerroboter
belegen deren Identität nicht. Auch Kawasaki A700/Kx und Parrot CHUCK DV7 bleiben
mangels eindeutiger Primärzuordnung offen. Ähnliche Namen werden nicht als Aliasse
ausgegeben. Gesperrte Wettbewerber-/Herstellerhosts wurden nicht erneut angefragt.
Vier alte, in Suchresultaten genannte Routen liefern 404; die Belege stammen von
funktionierenden, aktuell verlinkten Herstellerseiten. Die Fehlerseiten belegen weder
Modellidentität noch Abkündigung.

Stand: 1.714 Modelle/Konfigurationen, 640 Hersteller-Schreibweisen, 1.035 Profile
(629 mit Modellen / 406 ohne), 583 Produktbelege (459 Ergänzungen / 124 Anreicherungen),
26 Firmenfokus-Prüfungen. 290 Feldentscheidungen auf 46 Modellen: 211 dokumentiert,
70 nicht dokumentiert, sieben widersprüchlich und zwei Roadmap-Werte. Die 44 neuen
Feldentscheidungen enthalten 26 bewusst leere Felder. Alle 1.710 bisherigen CSV-Zeilen,
579 Produktbelege, 42 Feldprüfungen und 132 Quellen-Namensentscheidungen bleiben
unverändert. Beim XYZ-Firmengruppeneintrag wurde ausschließlich die nun vorhandene
Katalog-Herstellerzuordnung ergänzt. Die drei offenen Modellidentitäten und neun
unklaren Listings bleiben erhalten; Marktführerschaft bleibt unbewiesen.

Validierung: 294 Unit-Tests und 20 neue Desktop-/Mobil-Browserfälle bestanden,
einschließlich zwölf Axe-Fällen in Hell/Dunkel. Die 144 vorherigen Browserfälle bleiben
als Historie dokumentiert und wurden für diese reine Datenergänzung nicht erneut
ausgeführt. Abgleich von 554 Themenprofilen, 76 Namensprofilen, 132 Entscheidungen,
vier neuen Produktseiten und 592/406/862/132 Exportzeilen. Alle 44 neuen Feldwerte,
16 Quellenmarkierungen und zwölf strukturierten Eigenschaften stimmen überein;
26 leere Felder bleiben ausgeblendet, unbekannte Preise erzeugen keine Kaufangebote.
Erscheinungsjahre stehen weiterhin als zusätzliche Tabellenzeilen ohne eigene
Feldmarkierung; die Herstellerhistorie ist verlinkt. Das Vergleichs-JSON liefert jetzt
583 Datensätze / 1.810 Aussagen / 722 Quellenreferenzen und 290 Feldprüfstatuswerte;
unterschiedliche Aussagen sind keine nachgewiesenen Alleinstellungsmerkmale.
Build: 2.763 HTML-Seiten, rund 415 MB. Datenprüfung: null Fehler, 577 Warnungen,
zwei neue wegen unbekannter SE-Erscheinungsjahre. Formatierung, Test-Lint und
wiederholter Import bestanden: 583 Belege, null Ergänzungen. Anwendungscode unverändert.
Alle 61 erfassten eigenen Testprozesse beendet,
Port 4321 geschlossen, keine eigenen Recherche-Helfer verbleiben. Andere Aufgaben-
ressourcen erhalten; Änderungen lokal. Nachweise unter batch-38/.


## Ergänzung vom 2. November 2026 – Recherchierte Produktmerkmale in der Modellsuche

Die bisherige Katalogsuche prüfte Modellnamen, Hersteller, Kurzbeschreibungen und
Tags. Merkmalsaussagen waren nur auf Detailseiten und im Vergleich verfügbar.
Die Suche prüft jetzt zusätzlich alle 1.810 Aussagen aus 583 Produktbelegen.
Konkrete Vorher-/Nachher-Abfragen: ECIC 0→1 (RockyLight), AprilTag 0→1 (MiR250),
barcode facing outward 0→1 (RockyLight SE), Parrot ANAFI UKR 0→1 und Karcher 0→5.
Das sind geprüfte Textabfragen im eigenen Katalog, keine Reichweiten-/Rankingmessung.
Bei vollständigen Merkmalsätzen fehlten zuvor 719 Treffer für das jeweils zugehörige
Modell; nun sind alle 1.810 Sätze für ihr Modell abrufbar. Diese Diagnose prüft
wörtlichen Text, keine beliebigen natürlichen Fragen oder nachgewiesenen Alleinstellungsmerkmale.

Ausschließliche Merkmalstreffer zeigen den ganzen passenden Satz, damit Bedingungen
und Einschränkungen erhalten bleiben, und verlinken direkt zum Merkmals-/Quellenabschnitt.
Treffer in Name, Beschreibung oder Tags behalten den normalen Modelllink. Die Suche
normalisiert Groß-/Kleinschreibung, Akzente, ß, Leerraum und Bindestrichvarianten;
Hersteller plus Modell sind gemeinsam suchbar. Diese Abrufregeln ändern keine
Identitätszuordnung. Verzeichnisbehauptungen, Quelladressen und interne Recherche-
Metadaten werden nicht als zusätzliche Modellmerkmale indexiert. Englische Merkmals-
texte werden nicht als übersetzte deutsche Sachtexte ausgegeben.

Suche und Vergleich teilen einen einzigen bei Bedarf geladenen Belegabruf und den
Zwischenspeicher der Seitensitzung. Ein Katalogaufruf ohne Suchanfrage oder Vergleich
lädt keine Belegdatei. Katalogdatei (1.328.307 Byte) und Beleg-JSON (336.131 Byte)
bleiben byteinhaltlich unverändert. Während des Ladens zeigt die Suche den Zustand;
sie meldet bei fehlenden Basistreffern noch kein abschließendes leeres Ergebnis.
Bei Ladefehler bleiben Basissuche und Filter nutzbar; ein ausdrücklicher Hinweis
begrenzt die Trefferabdeckung und bietet erneutes Laden an. Verspätete Antworten
berücksichtigen die aktuelle Abfrage und stellen keine gelöschte Suche wieder her.
Filter, Zurück-Navigation und Sprachwechsel bleiben erhalten. Treffertext wird als
Text ausgegeben, eingebettetes Markup nicht ausgeführt. UI-Beschriftungen haben
englischen Rückfall und deutsche Übersetzungen.

Validierung: 300 Unit-Tests in 23 Dateien und 188 frische Desktop-/Mobil-Browserfälle
abgedeckt: 186 bestanden im Erstlauf; zwei Filterfälle bestanden nach gezielter
Testkorrektur auf Desktop und Mobil. Der Test hatte den bereits über URL-Filter
geöffneten Bereich wieder geschlossen; jetzt prüft er den geöffneten Zustand. Der
Anwendungscode blieb für die Nachprüfung unverändert. Davon sind 24 neue Suchfälle einschließlich vier Hell-/Dunkel-Axe-Fällen;
164 bestehende Vergleichs-, Marken-, Katalog-, Detail- und XYZ-Fälle wurden erneut
ausgeführt. Gesamte frische Axe-Abdeckung: vier Such-, vier Vergleichs- und zwölf
XYZ-Fälle. Daten-/Exportabgleich: 554 Themenprofile, 76 Namensprofile, 132 Entscheidungen,
vier XYZ-Produktseiten und 592/406/862/132 Exportzeilen. Alle 25 gesicherten Daten-/
Inventardateien bleiben bytegleich: 1.714 Katalogzeilen, 583 Belege, 46 Feldprüfungen,
290 Feldentscheidungen, 26 Firmenfokus-Prüfungen und sämtliche Quellenidentitäten
unverändert. Lint der geänderten JavaScript-/Astro-Dateien und Formatierung bestanden.
Build: 2.763 HTML-Seiten, rund 415 MB. Datenprüfung: null Fehler, 577 bestehende
Warnungen. Drei Modellidentitäten und neun unklare Listings bleiben offen;
Marktführerschaft ist nicht gemessen. Alle 268
erfassten eigenen Testprozesse beendet, Port 4321 geschlossen, keine eigenen
Recherche-Helfer. Andere Aufgabenressourcen erhalten; Änderungen lokal.
Nachweise unter scratch/competitor-research/primary/batch-39/.


## Ergänzung vom 2. November 2026 – Unitree: Variantenwerte korrigiert

Zwei erfolgreich gesicherte Herstellerseiten enthalten beschriftete Spalten für
G1/G1 EDU und Go2 AIR/PRO/X/EDU. Die Spaltenzuordnung ist aus dem HTML dokumentiert,
nicht aus zusammengezogenen Textwerten geraten. Sechs vorhandene Karten sind
überarbeitet, Go2 X ist als separat benannte Ausführung ergänzt. Die vorhandene
Schreibweise Go2-EDU bleibt erhalten; es entsteht keine zweite EDU-Karte.

Go2 Pro nennt aktuell 2.800 US-Dollar ohne Steuer/Fracht und 0–3,5 m/s statt der
alten rund 2.700 Dollar und 4,0 m/s. AIR: etwa 7 kg / maximal etwa 10 kg Last,
0–2,5 m/s. PRO: etwa 8 kg / maximal etwa 10 kg. X und EDU: etwa 8 kg / maximal
etwa 12 kg, 0–3,7 m/s mit separat genanntem Maximum von etwa 5 m/s. Der
5-m/s-Seitenkopf ist als Labortest qualifiziert, kein Tempo jeder Ausführung.
AIR/PRO/X haben laut Tabelle 8.000 mAh und etwa 1–2 Stunden Laufzeit, EDU
15.000 mAh und etwa 2–4 Stunden. Höchstlast, Tempo, Gelände und Laufzeit sind
keine Garantie gleichzeitig erreichbarer Leistungswerte. Akku-/Ladegerätedaten
belegen keine vollständige Ladedauer. EDU hat Kontaktpreis; der alte 3.000-Dollar-
Wert ist nicht übernommen. X nennt 4.500 Dollar ohne Steuer/Fracht.

Die generische Go2-Karte enthält nur gemeinsame Maße/Gewicht; Preis, Last, Tempo,
Gelände und Laufzeit erfordern eine ausgewählte Variante. Sie kombiniert keinen
AIR-Preis mit X-Geschwindigkeit. Unbelegte IP54-Werte und die unbelegte EDU-
Altersspanne sind entfernt. Grafisches Programmieren ist von voller sekundärer
Entwicklung getrennt: AIR/PRO sind mit ○, X mit ◕ und EDU mit ● markiert. Der
genaue SDK-Umfang von X ist damit nicht als voller EDU-Umfang bewiesen. Dock-
Kompatibilität von X/EDU belegt kein mitgeliefertes Dock. Die Pro-Beschreibung
verspricht keine pauschale GPT-Funktion mehr. Consumer-Zuordnung bleibt für die
Unterfilter erhalten, EDU zusätzlich im Forschungsbereich; entfernte pauschale
Geländetags werden nicht durch neue Leistungsgarantien ersetzt.

G1 nennt etwa 2 kg maximale Armlast, EDU etwa 3 kg; Armhaltung beeinflusst die
Last stark. Das ist keine Ganzkörper-Traglast. Steh- und Faltmaße sowie Akku-
Gewicht sind konkret ausgewiesen. EDU-Hände und Rechner bleiben optional. Ein
G1-Gehgeschwindigkeitswert ist in der geprüften Tabelle nicht dokumentiert;
der alte 2-m/s-Wert ist entfernt. Rund zwei Stunden sind eine Schätzung,
kein gesondert garantiertes Maximum. Demonstrationsfunktionen sind teilweise
noch in Entwicklung. Bestehende Erscheinungsjahre, Bilder und Videos wurden
durch diese ausgewählten Feldprüfungen nicht neu verifiziert.

Stand: 1.715 Modelle/Konfigurationen, 640 Hersteller-Schreibweisen und 1.035
Profile (629 mit Modellen / 406 ohne). 586 Produktbelege: 460 Ergänzungen und
126 Anreicherungen bestehender Modelle; 1.846 einzelne Merkmalsaussagen und
725 Produkt-Quellenreferenzen. 365 ausgewählte Feldentscheidungen auf 53
Modellen: 257 dokumentiert, 99 nicht dokumentiert, sieben widersprüchlich,
zwei Roadmap-Werte. Die 75 neuen Entscheidungen betreffen sieben Karten.
1.708 bisherige CSV-Zeilen sind unverändert, sechs explizit korrigiert, eine
ergänzt. 579 bisherige Produktbelege unverändert, vier aktualisiert, drei neu.
Alle 46 früheren Feldprüfungen und ursprünglichen Quellenidentitäten sind
erhalten. Drei Modellidentitäten und neun unklare Listings bleiben offen;
vollständige Herstellerabdeckung und Marktführerschaft sind nicht bewiesen.

Validierung: 303 Unit-Tests in 23 Dateien bestanden. Der erste Lauf meldete
302 bestanden / einen Fehler wegen fehlender Unterfilterzuordnung nach der
Tagbereinigung; nach Ergänzen der Consumer-Klassifikation ist der volle Lauf
erfolgreich. 20 Unitree-Browserfälle auf Desktop/Mobil abgedeckt: 14 bestanden im Erstlauf,
sechs nach gezielter Testkorrektur. Die Tests erwarteten zunächst einen formatierten
Preis und den falschen Markenpfad /brands/unitree/; geprüft werden jetzt der
qualifizierte Preistext und /brands/unitree-robotics/. Anwendungscode unverändert.
Die Abdeckung enthält zwölf Axe-Prüfungen in Hell/Dunkel. Die 188 Fälle aus Batch 39 sind
Historie, keine erneuten Durchläufe. Sieben Seiten, 75 Werte, 49
Quellenmarkierungen, 26 ausgelassene leere Felder, 38 strukturierte
Eigenschaften und vier numerische Preisangebote stimmen überein. Unbekannte
Preise erzeugen keine strukturierten Kaufangebote. Erneuter Abgleich von 554
Themenprofilen, 76 Namensprofilen, 132 Entscheidungen und 592/406/862/132
Exportzeilen. Alle 1.846 Merkmalsaussagen bleiben für ihr Modell suchbar.
Vergleichs-JSON: 354658 Byte, vollständig mit Quellen/Status abgeglichen;
interne Recherchepfade ausgeschlossen. Build: 2.764 Seiten, rund 415 MB.
Datenprüfung: null Fehler, 578 Warnungen; eine neue wegen unbekanntem Go2-X-
Erscheinungsjahr. Wiederholter Import: 586 Belege, null Ergänzungen. Test-Lint
und Formatierung bestanden. Anwendungscode unverändert. Alle
120 erfassten eigenen Testprozesse beendet, Port 4321 geschlossen,
keine eigenen Recherche-Helfer. Fremde Ressourcen erhalten. Änderungen lokal.
Nachweise: scratch/competitor-research/primary/batch-40/.


## Ergänzung vom 2. November 2026 – Verlorene Quellenmerkmale wieder erfasst

Der Vergleich gespeicherter Beschreibungen mit den kontrollierten Merkmalsthemen
zeigte konkrete Lücken. 24 zusätzliche Themenvorlagen erfassen jetzt 45 direkte
Zuordnungen: 27 aus 17 Firmenbeschreibungen und 18 aus 14 Listings. Daraus folgen
elf zusätzliche Zuordnungen in sieben zusammengeführten Modell-/Familieneinträgen.
Diese elf sind abgeleitete Zuordnungen, keine elf weiteren unabhängigen Behauptungen.
Die 348 Modell-/Familienkandidaten haben nun 702 Merkmalszuordnungen, alle 862 Listings
1.464; Firmenbeschreibungen 545. Die 466 gelisteten Firmen-Einsatzfälle bleiben gleich.

Beispiele: ROS-2-Unterstützung bei Husky UGV; Roboterdocking bei BotEyes; taktile
Rückmeldung bei Phoenix bzw. ein taktiles Sensorkit; Fallaufrichtung, omnidirektionale
Bewegung, KI-Rechner und Curriculum bei der Booster-Beschreibung. Weitere Themen
sind Wagenzüge, Palettenhubwagen, Bandversorgung, Cross-Docking, Hochregal-/Dichtlager,
Ein-/Auslagerung, Preisschildprüfung, Betonplatzierung, Solarmodulinstallation und
geskriptete Eventinteraktion. ROS-/Gazebo-Nennungen sind Softwarebezüge. ROS allein
belegt keine ROS-2-Kompatibilität; ein Softwareanbieter erzeugt keine Roboterkarte.

Docking des Roboters wird nicht aus logistischem Cross-Docking abgeleitet. Betreuung
durch einen Vor-Ort-Operator wird bei Bots-4-Events und Elite Event Robotics erfasst,
bei RobotsInternational wegen des ausdrücklichen Ausschlusses nicht. Vor-Ort-Demos
und Baustellenpersonal begründen ebenfalls keinen Operatorsupport. Die Themen bleiben
sichtbar unbestätigte Verzeichnisaussagen, getrennt von datierten Primärbelegen. Keine
Kennzahl, Norm-/Zulassungsbehauptung, gegenwärtige Verfügbarkeit, Herstelleridentität
oder bewiesene Alleinstellung wird daraus in technische Tabellen übernommen.

Die Aktualisierung verwendet ausschließlich den gespeicherten Snapshot vom 1. November
2026: null Netzabrufe, kein erneuter Zugriff auf den limitierten Host. Originaltexte,
Zeitpunkte, 1.961 Quellenidentitäten und alle 132 Namensentscheidungen bleiben erhalten.
45 Prüfnachweise enthalten Quellenadresse, Quellidentität, passenden Textausschnitt und
Beschreibungshash. Jede der 702 Modell-Merkmalszuordnungen behält die exakten zugrunde
liegenden Listing-IDs und Quellenlinks. Der heuristische Katalogabgleich wurde auf
1.715 Zeilen und 632 normalisierte Hersteller-Schlüssel aktualisiert; das sind weiterhin
640 exakte Schreibweisen. Seine 98 offenen Modellkandidaten und elf Marken sind keine
neuen strengen Lücken; der strenge Abgleich bleibt bei drei Modellidentitäten und neun
unklaren Listings. Die unterschiedlichen Prüfbegriffe werden nicht vermischt.

Acht konkrete Markenabfragen liefern jetzt passende Treffer statt null: ROS 2 support
claimed (Clearpath), cross-docking logistics (Seegrid/Vecna), tactile sensing
(Robotics Center/Sanctuary), on-site operator support (zwei Eventanbieter), scripted
interaction (DMA), concrete placement und solar-panel installation (Construction
Robotics), education curriculum (Booster/Sphero/STEMbotix/Wonder Workshop). Das prüft
die vorhandene Wort-/Teilstringsuche; Teiltreffer belegen keine exakte Fähigkeit und
keine beliebige semantische Suche. Etwa kann „docking“ auch „cross-docking“ finden,
während die dargestellten Themen deren Bedeutungen ausdrücklich trennen.

Validierung: 303 Unit-Tests in 23 Dateien, zwölf Offline-Collector-Tests und 20 neue
Desktop-/Mobil-Browserfälle abgedeckt: zwölf bestanden im Erstlauf, acht nach gezielter
Testkorrektur. Die neuen Linkprüfungen trafen Überschrift und zweite Profilverknüpfung
gleichzeitig; sie prüfen jetzt die eindeutige Verknüpfung in der Kartenüberschrift.
Frontend unverändert. Darunter acht bestandene Axe-Fälle in Hell/Dunkel. Der
erste Python-Lauf fand einen Großschreibungsfehler der neuen KI-Rechner-Vorlage;
die Korrektur ist im erfolgreichen Gesamtlauf enthalten. Frühere Browserläufe sind
Historie. 554 Themenprofile, 76 Namensprofile, 132 Entscheidungen und 592/406/862/132
Exportzeilen erneut abgeglichen. Alle neun Katalog-CSVs, 586 Primärbelege und 365
Feldprüfungen bleiben bytegleich. Katalogskript 1.331.365 Byte und Vergleichs-JSON
354.658 Byte unverändert. Build: 2.764 Seiten, rund 415 MB; Datenprüfung null Fehler,
578 bestehende Warnungen. Test-Lint und Formatierung bestanden. Frontend unverändert.
Alle 142 erfassten eigenen Testprozesse beendet, Port 4321 geschlossen, keine
eigenen Recherche-Helfer. Fremde Ressourcen erhalten; Änderungen lokal.
Nachweise: scratch/competitor-research/primary/batch-41/.


## Ergänzung vom 2. November 2026 – Clearpath: Generationen, Systeme und Feldbelege

Fünf eigenständig dokumentierte Angebote ergänzt: Husky A200, Husky AMP, Husky
Observer, Dingo-D und Dingo-O. Acht bestehende Einträge korrigiert: Husky A300,
Warthog UGV, Jackal UGV, Ridgeback, Dingo, Boxer sowie TurtleBot 4 und 4 Lite.
13 neue Feldprüfungen umfassen 143 Werte: 85 dokumentiert, 53 nicht dokumentiert
und fünf widersprüchlich. Insgesamt jetzt 1.720 Modelle/Konfigurationen, 640 exakte
Herstellerschreibweisen, 1.035 Profile, 591 datierte Merkmalsdatensätze (465 neue
Modelle, 126 bestehende angereichert), 1.894 Aussagen und 736 Produkt-Quellenverweise.
66 Modelle haben 508 ausgewählte Feldprüfungen: 342 dokumentiert, 152 nicht
dokumentiert, zwölf widersprüchlich und zwei Roadmap. 27 Firmenfokus-Prüfungen.

Husky A300 übernimmt weder die A200-Traglast noch dessen Schutzart. Beim AMP sind
81 kg maximale bzw. 31,5 kg Geländenutzlast Werte des ausgestatteten Systems.
Observer hat 10 kg zusätzliche Nutzlast und einen ausdrücklich als Designangabe
bezeichneten IP55-Anspruch. Widersprüche bei A300-Höhe/Laufzeit sowie Warthog-
Gewicht/Laufzeit und Ridgeback-Gewicht bleiben mit Quellen und Bedingungen sichtbar.
Bei Dingo-D/O unterscheiden sich Gewicht, Abmessungen, Traglast, Antrieb sowie
Batteriezahl/-generation. Generische Dingo-Werte werden nicht auf Varianten verteilt.
TurtleBot 4/Lite behalten unterschiedliche Höhe, Masse und Kamera; Ladezeit und
lastabhängige Betriebszeit stehen getrennt. Boxer-Bereitschaftszeit gilt nicht als
kontinuierliche Betriebszeit. Unbelegte Preise und Erscheinungsjahre bleiben leer
bzw. „Not disclosed“; kein strukturiertes Preisangebot für diese 13 Modelle.

14 erfolgreiche Seitenabrufe; 13 gespeicherte Hersteller-/Dokumentationsquellen
tragen diese Prüfung. Ein zusätzlich geladenes AMP-Handbuch dient nur der Recherche.
Kein bekannter blockierter Host erneut angefragt, kein Formular versandt. Sieben
Anwendungs-, Software- und Integrationsbezeichnungen bleiben ohne eigene Roboterkarte.
Die generische Husky-Nennung erhält weitere Kandidatenverknüpfungen; die geprüfte
Familienentscheidung und ihre offene exakte Generation bleiben unverändert.
1.961 Quellenidentitäten, 132 Namensentscheidungen und die ursprünglichen drei offenen
Modellidentitäten/neun unklaren Listings erhalten. Das ist keine vollständige Prüfung
aller historischen Clearpath-Angebote und kein Verfügbarkeits- oder Marktführernachweis.

Validierung: 308 Unit-Tests in 23 Dateien bestanden. 24 Clearpath-Browserfälle fanden
im Erstlauf zwei echte mobile Darstellungsfehler: lange, mit Schrägstrichen verbundene
Batterievarianten verbreiterten die A300-Spezifikationstabelle auf 402 statt 375 Pixel.
Wertespalten erlauben jetzt Wortumbruch. Nach erneutem Build bestanden alle 24 Fälle
und 20 Unitree-Regressionsfälle, einschließlich 20 Axe-Fällen in Hell/Dunkel.
554 Themenprofile, 76 Namensprofile, 132 Entscheidungen und 592/406/862/132
Exportzeilen erneut geprüft. 13 Produktseiten: 143 Werte, 103 Quellenkennzeichnungen,
40 ausgelassene Leerfelder und 90 strukturierte Eigenschaften abgeglichen. 1.707 alte
Katalogzeilen, 578 alte Merkmalsdatensätze und alle 53 bisherigen Feldprüfungen
unverändert; acht Katalog-/Merkmalseinträge gezielt korrigiert. Erneuter Import: null
Ergänzungen. Test-Lint und Formatierung inklusive CSS bestanden. Build: 2.769 Seiten,
rund 416 MB; Datenprüfung null Fehler, 583 Warnungen (fünf zusätzliche unbekannte
Erscheinungsjahre). Katalogskript 1338851 Byte, Vergleichs-JSON
394253 Byte. Alle 174 erfassten eigenen Test-/Diagnoseprozesse beendet,
keine eigenen Recherche-Helfer, Port 4321 geschlossen. Fremde Ressourcen erhalten.
Änderungen lokal. Nachweise: scratch/competitor-research/primary/batch-42/.


## Ergänzung vom 2. November 2026 – Pudu: reale Varianten und belastbare Vergleichswerte

17 erfolgreich gespeicherte Hersteller-/Academy-Seiten tragen die Prüfung. Neun
ausdrücklich benannte Konfigurationen ergänzt: T150 Standard/Lifting, T300
Standard/Lifting, T600 Upright, MP2000 Standard/Narrow Fork und PuduBot 2
PDFD12/PDFD22. 15 bestehende Datensätze korrigiert; BellaBot, BellaBot Pro,
KettyBot Pro, T150 und T300 von Smart Home nach commercial verschoben. IDs und
vorhandene Bildpfade bleiben stabil. Generische Familieneinträge bleiben erhalten;
abweichende Varianten werden nicht zu synthetischen Daten zusammengeführt.

266 neue ausgewählte Feldentscheidungen auf 24 Modellen: 180 dokumentiert, 80 nicht
dokumentiert, sechs widersprüchlich. T150/T300 Standard wiegen laut Hersteller
65 kg, Lifting 81 kg; T600 Upright 112 kg, Underride 94 kg. Unterfahrversion ohne
Ground Projection und Power-assist-Schalter. Die Zwei-Stunden-Ladung bei T150,
T300 und T600 gilt für 0–90 Prozent. T300 nennt 12 Stunden ohne und acht mit voller
Last; das ist eine Lastbedingung und wird nicht als Quellenkonflikt ausgegeben.
MP2000-Ladezeit hängt von 100–120 bzw. 200–240 Vac ab; äußere Gabelbreite 620 mm
bei Standard und 550 mm bei Narrow Fork. Palettengeometrie und Last qualifizieren
Durchfahrt, Stapelgang, Steigung, Geschwindigkeit und Laufzeit.

BellaBot/BellaBot Pro haben 40 kg Gesamtlast und höchstens 10 kg je Tablett;
die alte Pro-Beschreibung „four 40kg trays“ ist entfernt. Pro: elf Stunden ohne
Last; angekündigte Speisenerkennung weiterhin in Entwicklung. Beim Basismodell
bleiben abweichende Laufzeit- und Geschwindigkeitsangaben aus Produktseite,
Vergleich und Manual sichtbar. KettyBot Pro nennt in der Beschreibung 51 cm,
in Tabelle/Fußnote mindestens 52 cm in bestimmten Situationen. PuduBot-2-Manual
trennt PDFD12 (7-Zoll, 37 kg) und PDFD22 (10,1-Zoll, 39 kg); dessen rund drei
Ladestunden widersprechen den vier Stunden der undifferenzierten Produktseite.
Die auf der Produktseite ungewöhnlich genannten zwölf Stunden leer/fünfzehn
beladen bleiben als Herstellerbehauptung attribuiert, ohne sie auf die genauen
Manual-Konfigurationen zu übertragen oder scheinbar plausibel umzudrehen.

CC1: fünf Stunden Scheuern/Kombination, vier Teppich, neun leises Wischen; Manual
nennt zusätzlich allgemein drei bis acht Stunden. Kein universeller Neun-Stunden-
Wert. Modustestbedingungen: niedrige Stufe und Akku 100 auf 10 Prozent. Richtige
Schwellen-/Spaltmaße statt alter 4-cm-Spalt-Angabe. MT1-Roboter 65 kg; die 57,8 kg
der optionalen Entleerstation sind Zubehörmasse. FlashBot Arm: 15 kg Lieferkapazität,
keine belegte Last je Arm; sechs aktive plus fünf passive Handfreiheitsgrade.
Nicht belegte 70 kg und 1,25 m/s entfernt. KettyBot/HolaBot behalten ihre eigenen
Lade-, Last- und Bodenbedingungen. Optionale Docks, Wasserstationen, Teppichmodule
und Gebäudeintegration bleiben von der Roboter-Grundausstattung getrennt.

Aktuell 1.729 Katalogeinträge, 640 exakte Herstellerschreibweisen, 1.035 Profile,
600 datierte Produktmerkmal-Datensätze (474 Ergänzungen/126 bestehende angereichert),
1.921 Aussagen/747 Produkt-Quellenverweise. 90 Modelle mit 774 Feldprüfungen:
522 dokumentiert, 232 nicht dokumentiert, 18 widersprüchlich, zwei Roadmap.
28 Firmenfokus-Prüfungen. 1.961 Quellenidentitäten, alle 132 Namensentscheidungen,
die strengen drei offenen Modellidentitäten und neun unklaren Listings unverändert.
Zwölf weitere primär belegte Pudu-Produkte warten auf Feldprüfung; D1/SwiftBot
sind außerhalb dieses Blocks. Kein Nachweis vollständiger historischer Programme,
aktueller Verfügbarkeit, unabhängiger Leistung oder Marktführerschaft.

314 Unit-Tests/23 Dateien bestanden. Im Erstlauf 313 bestanden/einer fehlgeschlagen:
der Alias-Duplikatentest entfernt Klammern und fasste die neuen Bildschirm-SKUs
mit der Familie zusammen. Sichtbare Namen verwenden nun die expliziten PDFD12/
PDFD22-Codes ohne Klammern; IDs und Hardwaregrenzen bleiben erhalten. Gesamtlauf
erneut bestanden. Im ersten Browserlauf bestanden 18 Fälle, acht Axe-Fälle beanstandeten nur durch
Farbe erkennbare Quellenlinks im Fließtext. Produktquellen sind jetzt unterstrichen;
technische Quellenlabels durch lesbare Dokumenttitel ersetzt. Nach erneutem Build
bestanden alle 26 Pudu- und 24 Clearpath-Fälle, darunter 16 Hell/Dunkel-Axe-Fälle.
Frühere Browserläufe bleiben Historie. 24 Produktseiten:
266 Felder, 210 Quellenkennzeichnungen, 56 ausgelassene Leerfelder und 184
strukturierte Eigenschaften geprüft; kein strukturiertes Preisangebot für die
24 Modelle. 554 Themenprofile/76 Namensprofile/132 Entscheidungen und
592/406/862/132 Exportzeilen abgeglichen. 1.705 alte Katalogzeilen, 576 alte
Merkmalsdatensätze sowie alle 66 früheren Feldprüfungen unverändert; 15 Datensätze
gezielt korrigiert. Importwiederholung: null Ergänzungen. Build 2.778 Seiten,
rund 417 MB. Datenprüfung null Fehler/600 Warnungen: neun neue unbekannte und acht
entfernte unbelegte Erscheinungsjahre erklären die 17 zusätzlichen Warnungen.
Test-/Astro-Lint und Format bestanden. Frontendänderung ausschließlich unterstrichene
Produktquellenlinks; JavaScript unverändert. Katalogskript
1358591 Byte/Vergleichs-JSON 429661 Byte. Alle
182 eigenen erfassten Testprozesse beendet, keine eigenen Recherche-Helfer,
Port 4321 geschlossen; fremde Ressourcen erhalten. Änderungen lokal.
Nachweise: scratch/competitor-research/primary/batch-43/.


## Ergänzung vom 2. November 2026 – Pudu: Reinigung, Flächenleistung und Mobilität

Zwölf bestehende Modelle korrigiert: BG1/BG1 Pro, CC1 Pro/Disc, ET1, MT1 Max/Vac,
GT3/GT5/GT7 und D5/D5-W. Zehn erfolgreich gespeicherte Hersteller-HTML-Seiten mit
geprüften SHA-256-Werten tragen diese Prüfung. Elf HTTP-200-Abrufe enthalten
zusätzlich einen D5.js-Endpunkt, dessen Inhalt vom HTML-Kollektor nicht gespeichert
wurde; dieser Endpunkt wird ausdrücklich nicht als Beleg verwendet. Keine neuen
Roboterkarten oder Kategorienwechsel. Die übrigen 1.717 Katalogzeilen bleiben
inhaltlich erhalten; cleaning/outdoor erhalten zwei leere optionale Spalten, wo
kein Wert belegt ist. Alle 1.961 Quellenidentitäten und 132 Namensentscheidungen
bleiben erhalten. Der erneute Import erzeugt null Ergänzungen.

152 ausgewählte Feldentscheidungen: 106 dokumentiert, 44 nicht dokumentiert, zwei
widersprüchlich. BG1: 0,2–1,0 m/s; Pro: 0,2–1,2 m/s. Die Ladebedingungen ab bzw.
bis 180 V überlappen am exakten Grenzwert; dieser Widerspruch bleibt sichtbar.
Tankvolumen wird nicht zur Nutzlast. CC1 Pro Disc hat 80 kg, 69 Ah und 380 mm
Arbeitsbreite; Pro 75 kg, 50 Ah und 500 mm mit Seitenbürsten. Laufzeit und Modus
bleiben getrennt; Pro-Vakuummodi werden nicht auf Disc übertragen. ET1 führt
300 mm Scheuern/Staubwischen gegenüber 390 mm Kehren/Saugen. Display und Dock-
Lieferumfang bleiben qualifiziert. MT1 Max: 85 kg Roboter gegenüber 57,8 kg für
die optionale Entleerungsstation; Warnung vor Extremwetter bleibt erhalten.
MT1 Vac: H11, H13 optional; Laufzeit nach Boden und Reinigungsmodus.

Neue Felder Arbeitsbreite/Flächenleistung erscheinen auf Produktseiten, im
Vergleich und in strukturierten Product-Eigenschaften. GT3 nennt 20.000 m² je
Ladung; daraus wird keine Stundenleistung berechnet. GT5/GT7 nennen 8.000 m²/h
als Herstellerwert. Schnelle Ladegeräte bleiben optional; GT7 erhält keinen
von GT3/GT5 übernommenen IP-Wert. D5/D5-W: 30/25 cm Stufe, 25/30 Grad Aufstieg,
61/62 kg einschließlich Akku. Die generische 5-m/s-Formulierung wird keiner
exakten Variante zugeschrieben. Datierte Storefront-Angebote: 80.000/85.000 USD
mit getrennten Varianten-IDs; Bestand, Zubehörumfang, Steuern, Versand und
Lieferfähigkeit bleiben ungeprüft. Unbelegte Erscheinungsjahre sind entfernt.

Alle 38 primär belegten Pudu-Einträge haben nun ausgewählte Feldprüfungen;
D1/SwiftBot bleiben außerhalb dieses Prüfbestands. Gesamt: 1.729 Katalogeinträge,
600 Produktmerkmal-Datensätze, 1.940 Aussagen und 745 Produkt-Quellenreferenzen.
102 Modelle mit 926 Feldentscheidungen: 628 dokumentiert, 276 nicht dokumentiert,
20 widersprüchlich, zwei Roadmap. Firmenfokus bleibt bei 28 Prüfungen; der Pudu-
Eintrag ist erweitert. Ursprüngliche drei offene Modellzuordnungen und neun
unklare Listings unverändert. Vollständige Herstellerprüfung, Detailprüfung aller
Wettbewerber-Listings und eine gemessene Marktführerschaft bleiben offen.

320 Unit-Tests in 23 Dateien und 46 Browserfälle auf Desktop/Mobil bestanden,
darunter 16 Hell-/Dunkel-Axe-Prüfungen. Die 28 neuen Pudu-Fälle prüfen zwölf
Modelle, Zubehör-/Modusgrenzen, reine Merkmalssuche, Preise und deutsche Vergleichs-
felder. 18 bestehende Vergleichsfälle prüfen unter anderem Nachladen, Fehler,
Wiederholung, Sprachwechsel und HTML-/URL-Escaping. Vergleichsquellen sind nun
unterstrichen. 554 Themenprofile, 76 Namensprofile, 132 Identitätsentscheidungen
und Exporte mit 592/406/862/132 Zeilen geprüft. Zwölf Produktseiten: 152 Felder,
118 Quellenkennzeichnungen, 34 ausgelassene Leerfelder, 106 strukturierte
Eigenschaften und zwei numerische Preisangebote geprüft. Lint/Format bestanden.
Build: 2.778 Seiten, etwa 417 MB; Datenprüfung null Fehler, 602 Warnungen.
Zwei zusätzliche Warnungen betreffen entfernte unbelegte D5-Erscheinungsjahre.
Katalogskript 1384232 Bytes, Vergleichsbelege 449601 Bytes.
Alle 91 erfassten eigenen Testprozesse beendet, Port 4321 geschlossen,
keine eigenen Recherche-Hilfsprozesse; fremde Ressourcen erhalten. Änderungen lokal.
Nachweise: scratch/competitor-research/primary/batch-44/.


## Ergänzung vom 2. November 2026 – KEENON: Modellunterschiede, XMAN und Tankkapazitäten

XMAN-F1 als neues Modell ergänzt; 13 bestehende KEENON-Einträge korrigiert.
DINERBOT T8/T10 und ButlerBot W3 von Smart Home nach commercial verschoben;
IDs und Bildpfade bleiben stabil. T8 erhält erstmals datierte Primärmerkmale.
14 ausgewählte Modellprüfungen mit 170 Feldern: 101 dokumentiert, 66 nicht
belegt, drei widersprüchlich. Die übrigen 1.716 bisherigen Katalogzeilen bleiben
inhaltlich erhalten. Die neue optionale cleaning-Spalte waterTankCapacity
bleibt bei anderen Modellen leer, soweit diese Prüfung keinen Beleg ergänzt.
Alle 102 vorherigen Feldprüfungen, 28 Firmenfokus-Datensätze, 1.961
Quellenidentitäten und 132 Namensentscheidungen bleiben erhalten.

18 erfolgreiche HTML-Abrufe: 14 verwendete Produktseiten, die Startseite und
drei zusätzliche Produktverweise; drei weitere Routen (C25/G2/M2) liefern 404.
Alle 21 gespeicherten HTML-Antworten und fünf Bildposter auf SHA-256 geprüft.
Zwei Bildposter tragen ausgewählte R1/F1-Fakten als offen bezeichnete OCR-
Transkriptionen: R1 radgetrieben, 174 cm, 110 kg, 36 Gesamt-DoF; F1 zweibeinig,
175 cm, 68 kg, 43 Gesamt-DoF. Beide zählen zwei Sechs-DoF-Hände mit. Technische
Messung, selbstständige Aufgabenleistung, Lieferfähigkeit und Preise bleiben
ungeprüft. Persona-Geburtstage werden nicht zu exakten Erscheinungsdaten.
R1 behält die durch die frühere Herstellerankündigung belegte Jahreszahl 2025;
F1 hat kein belegtes Releasejahr. Menüverweise XMAN-L1/X101/M102 bleiben in der
Firmenfokus-Recherche sichtbar, ohne daraus verifizierte Roboterkarten zu
machen. X101/M102 liefern identischen allgemeinen Krankenhauslogistik-Text
und bytegleiche Banner; diese Daten trennen keine exakten Hardwaremodelle.
404 bei historischen Routen beweist keine Einstellung des Produkts.

C20: Masse einschließlich Akku und leerer Tanks; 450 mm Kehren/Saugen gegenüber
285 mm Scheuern, 7 L Frisch-/5 L Abwasser. C30 ist Trockenreinigung: bis sechs
Stunden Kehren/Saugen, zehn Stunden Staubwischen; 600 m²/h bleibt getrennt von
2.500 m² je Ladung. C40: bis fünf Stunden Scheuern, zwölf Kehren; zwei Stunden
Laden ist kein Fünf-Sekunden-Akkuwechsel. C55: fünf Stunden je Betriebsperiode,
vier Stunden Laden, Hot-Swap-Doppelakkus; theoretische 2.376 m²/h und 550 mm
Scheuerbreite ohne Seitenbürste. Der Tank-Headlinewert 110 L weicht von der
Tabelle mit 60 L Frisch- plus 47 L Abwasser ab. Dieser Konflikt bleibt am
vergleichbaren Tankfeld mit Quellenhinweis sichtbar. Stationen benötigen
geeignete Anschlüsse; Zubehörumfang bleibt ungeprüft. Tankvolumen wird nicht
zur Nutzlast und ein Akkuwechsel nicht zur unbegrenzten Einzelakku-Laufzeit.

T3: 180 L Kabinenvolumen getrennt von 40 kg Last, kein belegter Ladewert.
T8: 20 kg, 55-cm-Durchfahrt, bis 15 Stunden. T9: 40 kg gesamt/10 kg je Ebene,
bis 18 Stunden; vier Stunden Laden gilt für 15–100 Prozent bei eingeschaltetem
Roboter, Ladesäule ausdrücklich nicht enthalten. T10: 9–12,5 Stunden Betrieb,
5,5 Stunden Laden unter derselben Teil-Ladebedingung; aktuelle Sensorik ersetzt
den alten 270-Grad-Text. T11: 20 kg gesamt, mittlere Ebene fünf/untere zehn kg;
kein erfundener Wert für die weitere Ebene oder numerische Ladezeit. W3 hat
anpassbar bis vier Fächer und 20 kg Gesamtlast; unbelegtes „waterproof“ entfernt.
Aufzugsintegration bleibt abhängig vom kompatibel eingerichteten Gebäude.

S100: acht Stunden nur unter den genannten Bedingungen mit weniger als 100 kg
Last; 2,5 Stunden Laden von 0–100 Prozent eingeschaltet. „100 kg+“ ist keine
exakte obere Traglast. 90 cm Durchfahrt ohne Drehung widersprechen den daneben
stehenden 29,53 Zoll (ca. 75 cm); metrischer Wert mit Warnhinweis. S300: 300 kg,
bis sechs Stunden bei Volllast, 3,5 Stunden Laden ohne belegten Prozentbereich.
23-cm-Chassistext und Tabelle mit 1.282 mm Gesamthöhe bzw. 230 mm Bodenfreiheit
lassen die Konfiguration offen; kein stilles Umdeuten in eine feste Höhe.
Standalone-Aufgaben ohne WLAN/5G beweisen keine vollständige Offline-Flotten-
funktion. Sicherheits-, Desinfektions- und Einführungszeit-Werbung ist keine
unabhängig getestete Zertifizierung oder medizinische Wirksamkeitsbestätigung.

Aktueller Gesamtbestand: 1.730 Modelle/Konfigurationen; 602 primär belegte
Merkmal-Datensätze (475 Ergänzungen/127 Altmodelle), 1.975 Aussagen und 748
Produkt-Quellenreferenzen. 116 Modelle/1.096 Feldentscheidungen: 729 dokumentiert,
342 nicht dokumentiert, 23 widersprüchlich, zwei Roadmap. 29 Firmenfokus-Prüfungen.
KEENON hat 17 Katalogeinträge, davon 15 mit Primärmerkmalen und 14 mit ausgewählten
Feldprüfungen. C25 sowie G2/M2 bleiben offen. Ursprüngliche drei Modellzuordnungen
und neun unklare Listings unverändert. Vollständige Herstellerprüfung, Prüfung
aller Wettbewerber-Detailseiten und eine gemessene Marktführerschaft bleiben offen.

328 Unit-Tests in 24 Dateien bestanden. Browser: zunächst 52 von 54 bestanden;
zwei neue T8-Tests erwarteten fälschlich /category/commercial/ statt des bereits
vorhandenen Links /?category=commercial. Testselektor korrigiert, beide Desktop-/
Mobilfälle bestanden in der Nachprüfung; Anwendung unverändert. Damit alle 54
Fälle bestanden: 36 KEENON- und 18 bestehende Vergleichsfälle, darunter 20
Hell-/Dunkel-Axe-Prüfungen. Produkt-/Markenseiten, reine Merkmalssuche, deutsche
Tankvergleichsfelder sowie Ladefehler, Wiederholung, Sprachwechsel und Escaping
geprüft. 554 Themenprofile, 76 Namensprofile und 132 Identitätsentscheidungen;
Exporte mit 592/406/862/132 Zeilen; 14 Produktseiten mit 170 Feldern, 117
Quellenkennzeichnungen, 52 ausgelassenen Leerfeldern und 101 strukturierten
Eigenschaften abgeglichen. R1-Releasejahr bleibt als zusätzliche Tabellenzeile
mit Herstellerbeleg in den Merkmalen, ohne eigenes Feld-Badge. Alle 14 unbekannten
Preise ohne numerisches Offer. Lint/Format bestanden; Reimport null Ergänzungen.
Build: 2.779 Seiten, etwa 418 MB; Datenprüfung null Fehler/607 Warnungen. Fünf
zusätzliche Warnungen: ein neues unbekanntes F1-Releasejahr und vier entfernte
unbelegte Altjahre. Katalogskript 1400813 Bytes; Belege 477801 Bytes.
Alle 134 erfassten eigenen Testprozesse beendet, Port 4321 geschlossen,
keine eigenen Recherche-Hilfsprozesse. Temporäre OCR-Umgebung entfernt;
Originalbelege erhalten, fremde Ressourcen unverändert. Änderungen lokal.
Nachweise: scratch/competitor-research/primary/batch-45/.


## Ergänzung vom 2. November 2026 – Gausium: Varianten und belegter Firmenalias

Elf ausdrücklich benannte Konfigurationen ergänzt, zwölf bestehende Gausium-Zeilen
korrigiert. Alle 23 aktuellen Gausium-Einträge haben ausgewählte Feldprüfungen:
307 Entscheidungen, davon 185 dokumentiert, 116 nicht belegt und sechs
widersprüchlich. Die übrigen 1.718 bisherigen Katalogzeilen bleiben unverändert.
116 frühere Modellprüfungen, 29 Firmenfokus-Datensätze, 1.961 Quellenidentitäten
und 132 Namensentscheidungen bleiben erhalten. Keine Kategorieverschiebung.

Ein Herstellerbeitrag vom 14. November 2022 bezeichnet Gausium ausdrücklich als
Alias von Gaussian Robotics. Die beiden bisherigen Firmenprofile sind deshalb
zusammengeführt; ursprüngliche Firmennamen und Quellen-URLs bleiben erhalten.
Die alte Profiladresse /brands/gaussian-robotics/ leitet statisch zur kanonischen
Gausium-Adresse weiter und ist aus der Sitemap ausgeschlossen. Dies ist ein
Markennamensbeleg, keine Behauptung einer rechtlichen Unternehmensfusion.
591 Quellfirmengruppen, 1.034 Gesamtprofile (629 mit/405 ohne Modelle),
553 Themenprofile und 30 hersteller-/firmenbelegte Fokus-Prüfungen.

Beetle Standard/Pro trennt 102/112 kg und drei/fünf Stunden laut Variantentabelle;
die Familienübersicht nennt dagegen vier bis acht Stunden bei 60 Ah. Der Konflikt
bleibt sichtbar, ohne festen Familien-Maximalwert. Mira nennt Mindestlaufzeiten
je Reinigungsmodus; Marvel hat ebenfalls Untergrenzen für Kehren/Staubwischen.
Diese Werte werden nicht zu maximalen Gesamtlaufzeiten. Der optionale Marvel-
Standauftritt bleibt optional. Reinigungsdruck und Behältervolumen werden nicht
zu Nutzlast. Vier metrisch/imperiale Konflikte bleiben mit Quellenhinweis erhalten:
Mira 1,4 m/s gegenüber 4,27 ft/s, Marvel 3.024 m²/h gegenüber 21.700 ft²/h,
Phantas unterer Praxiswert 350 m²/h gegenüber 3.367 ft²/h und Sweeper 111
1.200-mm-Durchfahrt gegenüber 79 Zoll. Keine stille Einheitenkorrektur.
Beim Sweeper 111 widersprechen sich außerdem 240-Ah-Akkutabelle und die
40-/60-Ah-Beschriftung der Laufzeit; kein unbedingter Laufzeit-Maximalwert.

Omnie Disc/ Roller: 157/148 kg, 520/406 mm Scheuerbreite. Die 780 mm beim
Roller sind Kehrabdeckung mit optionalen Seitenbürsten. Disc-Kehren steht auf
„Coming Soon“ und wird nicht als aktive Kehrleistung ausgezeichnet. Scrubber 50
Disc/Roller bleiben separat; der SoftBank-Anbietereintrag Scrubber 50 Pro ist
keiner Bürstentabelle exakt zugeordnet und behält 14 nicht belegte Feldentscheidungen.
Scrubber 75 S/P verwendet ausdrücklich gemeinsame Familienwerte, ohne einen
separaten Variantentest zu behaupten; drei Grad Reinigung bleiben getrennt von
acht Grad Fahrt. Station und Radar haben widersprüchliche Paket-/Optionssprache.
PhanShop Max unterstützt laut Tabelle keine Warenablage; sein 18,5-Zoll-Display
belegt keine Touchfunktion. Vacuum 40 Diffuser hat einen Vier-Liter-Luftbefeuchter,
keinen Bodenreinigungstank; 18 Stunden gelten fürs Trockenwischen. Historische
Delivery X1/X1 Pro: 35/38 kg unbeladen und 30 kg über drei Ablagen, jeweils maximal
zehn kg pro Ablage. Keine aktuelle Lieferfähigkeit aus historischen Tabellen abgeleitet.

Die aktuelle verlinkte Phantas-Tabelle bleibt mit Generationsvorbehalt dokumentiert.
„Phantas Extra“ erscheint als Herstellername, ist aber keiner getrennten Hardware-
Tabelle eindeutig zugeordnet; keine zusätzliche Modellkarte. Das unbelegte alte
Phantas-Releasejahr wurde entfernt. Alle 23 geprüften Gausium-Preise und Releasejahre
bleiben unbekannt. 28 erfolgreiche HTML-Antworten und vier öffentliche JSON-Antworten
archiviert; drei geratene Nachrichtenrouten liefern ungenutzte 404-Antworten.
Alle 35 Antwortkörper per SHA-256 geprüft. Keine Formulare abgesendet.

Aktueller Gesamtbestand: 1.741 Modelle/Konfigurationen, 614 primär belegte
Merkmalsdatensätze (486 Ergänzungen/128 bestehende Modelle), 2.054 Aussagen und
783 Produkt-Quellenreferenzen. 139 Modelle/1.403 ausgewählte Felder: 914 dokumentiert,
458 nicht dokumentiert, 29 widersprüchlich, zwei Roadmap. Drei ursprüngliche
Modellzuordnungen und neun unklare Listings bleiben offen. Die vollständige
Herstellerhistorie, Prüfung aller Wettbewerber-Detailseiten und gemessene
Marktführerschaft bleiben unbewiesen; Produktmerkmale sind keine nachgewiesenen
Alleinstellungsmerkmale gegenüber dem gesamten Markt.

339 Unit-Tests in 25 Dateien sowie alle 160 Browserfälle bestanden: 36 neue Gausium-,
106 bestehende Marken- und 18 bestehende Vergleichsfälle, jeweils Desktop/Mobil.
Darunter 16 erfolgreiche Axe-Prüfungen in Hell/Dunkel. Zunächst 154 bestanden,
sechs Testfehler: veralteter BellaBot-Wortlaut, „net“ statt Herstellerangabe
„unladen“ beim Vacuum 40 und eine Suchphrase, die bereits in der Kurzbeschreibung
stand. Tests korrigiert; die Suche nutzt jetzt einen ausschließlich in den
Merkmalsbelegen vorkommenden Display-Vorbehalt. Alle sechs betroffenen Desktop-/
Mobilfälle bestehen in der Nachprüfung; Anwendung und Daten dabei unverändert.
Lint und Formatierung bestanden.
HTML-/Exportabgleich: 553 Themenprofile, 76 Namensprofile, 132 Entscheidungen,
23 Produktseiten und 591/406/862/132 Exportzeilen. Alle 307 neuen Felder stimmen
mit CSV und Darstellung überein; 214 Quellenbadges, 93 ausgelassene Leerfelder,
191 strukturierte Eigenschaften. 23 unbekannte Preise erzeugen keine Kaufangebote.
Der Vergleich liefert alle 614 Merkmalsdatensätze und 1.403 Feldstatus korrekt aus;
private Forschungsmetadaten bleiben ausgeschlossen. Katalogdatei
1420310 Byte, Beleg-JSON 539709 Byte.
Build: 2.789 Seiten, rund 419 MB. Datenprüfung null Fehler/619 Hinweise, zwölf mehr
durch elf neue unbekannte Releasejahre und ein entferntes unbelegtes Jahr.
Erneuter Import: null Ergänzungen. Alle 276 erfassten eigenen Testprozesse beendet,
keine eigenen Recherchehelfer aktiv, Port 4321 geschlossen. Lokale Änderungen.
Artefakte: scratch/competitor-research/primary/batch-46/.


## Ergänzung vom 2. November 2026 – IPLUSMOBOT: benannte Varianten und vergleichbare Messgrößen

22 bestehende Einträge korrigiert und elf Konfigurationen ergänzt: EMMA 2000L,
FOLA BN1501T/BN1501/BN3001/DN1516/DN2030/PN1530, Luna 30T, LDT1500-OMNI,
NERA-P200-DS3 und die ausdrücklich gezeichnete EMMA-T-Ausführung mit EMMA 400L.
Alle 33 aktuellen IPLUSMOBOT-Katalogeinträge haben ausgewählte Feldprüfungen:
564 Entscheidungen, davon 299 dokumentiert, 246 nicht belegt und 19 widersprüchlich.
Die übrigen 1.719 bisherigen Katalogzeilen bleiben inhaltlich unverändert; die
sechs optionalen neuen commercial-Spalten sind bei anderen Modellen leer.
139 frühere Modellprüfungen, 30 Firmenfokus-Datensätze, 1.961 Quellenidentitäten,
132 Namensentscheidungen und 591 Quellfirmengruppen bleiben erhalten. Drei
bestehende Wettbewerber-Familienzuordnungen (EMMA L, FOLA, LUNA) um acht belegte
Varianten erweitert; Familienstatus und Originalquellen bleiben erhalten. Jetzt
haben alle 429 den ursprünglichen Quellenfunden zugeordneten Katalogmodelle
datierte Merkmalsbelege; dies ist keine vollständige historische Variantenprüfung.

Navigation, Andocken, Antrieb, Hubweg, maximale Gabelhöhe und Armreichweite sind
jetzt getrennte Felder in Detailtabellen, strukturierten Produktdaten und Vergleich;
Deutsch/Englisch lokalisiert, bestehender englischer Fallback für weitere UI-Sprachen.
EMMA ±30 mm Positionierung wird nicht zu ±2 mm Navigation: der kleinere Wert gilt
für Andocken, laut Broschüre mit QR-Code. Laufzeituntergrenzen bleiben getrennt
von maximaler Laufzeit und Ladezeitobergrenzen. Lastfreie und beladene Geschwindigkeit
bleiben nebeneinander sichtbar. EMMA 400L behält 75 mm Hubweg aus seiner Spalte;
die generische 60-mm-Familienangabe ersetzt die Variante nicht. Beim neuen EMMA
2000L wird keine fehlende Volllastgeschwindigkeit vom Nachbarmodell übernommen.

FOLA: Die sechs neuen Spaltenzuordnungen wurden anhand der PDF-Textkoordinaten
für je Abmessung, Masse, Last, Gabelhöhe und Geschwindigkeit geprüft. Minimale/
maximale Gabelhöhen sind kein Hubweg. DN1416/QN1416/BN2001 widersprechen ihren
Web-„Stroke“-Beschriftungen. QN1416 hat 2.034 mm Länge im Web/Detailtext gegenüber
12.034 mm in der Broschürentabelle und 2.320 gegenüber 2.410 mm Gangbreite.
BN2001 nennt 585 kg mit unpassenden 1.829 lb. SN300 hat widersprüchliche Leer-/
Volllastreihenfolge; SN600 zusätzlich abweichende Geschwindigkeiten, eine
1.400-kg-Headline gegenüber 600 kg Detailangabe und sechs gegenüber mindestens
acht Stunden Laufzeit. Weitere Einheiten- und Spaltendiskrepanzen bleiben
mit Feldstatus sichtbar. Keine automatische „Korrektur“ der Herstellerdaten.

OMNI trennt Fahr-/Andockgenauigkeit, Hubweg, Drehdurchmesser und Leer-/Volllastfahrt.
Luna 30T erhält 30 t und mindestens sechs Stunden aus der Broschüre, ohne Maße,
Masse, Geschwindigkeit, Ladezeit oder IP-Wert der kleineren Varianten zu erben.
Web und APAC-Broschüre beschreiben abweichende LUNA-Andockwerte und Navigations-
methoden; keine unbelegte weltweite Konfigurationsgleichheit. NERA-A trennt
Armtraglast von Plattformlast und Armreichweite von Positionierungsgenauigkeit;
A12-UF omnidirektional, JM/TT Differenzialantrieb. 0,5-mm-Ausführungspräzision mit
Vision aus der Werbung und 1-mm-Tabellenangabe werden nicht bedingungslos vermischt.

LDT1500-OMNI ist konkret benannt; Lauf-/Ladezeiten der benachbarten FPD/SMT/PV-
Anwendungsblöcke werden nicht übernommen. NERA-P200-DS3 ist ein autonomes
Integrationschassis mit 200 kg Decklast, kein mitgelieferter Manipulator; 110 kg
Masse bleibt durch optionales Gegengewicht qualifiziert. Akkukapazität wird nicht
zur erfundenen Laufzeit. Die EMMA-T/400L-Zeichnung nennt 300 kg Last, getrennt vom
bis zu 800 kg tragenden Familienbereich. Unbenannte weitere Kombinationen,
SMT/PCBA/FPD/PV-Anwendungsüberschriften, der NERA-C-Controller und CLOUDIA/OWL/iMCS/
CARLY-Software werden nicht als weitere vollständige Robotermodelle gezählt.
CE-Optionen, ESD-, Allwetter-, Software-Uptime-/TCO-Aussagen bleiben Herstellerangaben.

15 HTTP-Antwortkörper gespeichert und gehasht: 14 HTML und eine zwölfseitige
APAC-PDF; 13 Primär-Snapshots verwendet. Zwei geratene ältere PDF-Pfade leiten
auf eine HTML-Downloadseite und sind keine Produktbelege. PDF-Text und vier
Seiten mit Textkoordinaten geprüft; Bildprüfung war in dieser Sitzung nicht
verfügbar und wird nicht behauptet. Keine Formulare abgesendet.

Gesamtbestand: 1.752 Modelle/Konfigurationen, 625 Primärmerkmalsdatensätze
(497 Ergänzungen/128 bestehende Modelle), 2.151 Aussagen und 816 Produktquellen-
referenzen. 172 Modelle mit 1.967 ausgewählten Feldentscheidungen: 1.213 dokumentiert,
704 nicht dokumentiert, 48 widersprüchlich, zwei Roadmap. 31 Firmenfokus-Prüfungen.
1.034 Profile (629 mit/405 ohne Modelle), 553 Themenprofile. Die ursprünglichen
drei Modellzuordnungen und neun unklaren Listings bleiben offen; vollständige
historische/regionale Herstellerabdeckung, sämtliche Wettbewerber-Detailseiten
und eine gemessene Spitzenposition bleiben unbewiesen.

352 Unit-Tests in 26 Dateien bestanden. Ein erster Lauf hatte 350 bestandene und
eine fehlgeschlagene Prüfung wegen veralteter Summenerwartungen; nach Aktualisierung
der Modell-/Feld-/Konfliktsummen 351 Tests erfolgreich. Nach Ergänzung einer
Prüfung der erweiterten Familienverknüpfungen final alle 352 erfolgreich. Alle 98 Browserfälle
bestanden: 44 IPLUSMOBOT, 36 Gausium und 18 Vergleich, einschließlich 32 Axe-Fällen
für Desktop/Mobil und Hell/Dunkel. Lint/Formatierung bestanden. Build 2.800 Seiten,
rund 421 MB; Datenprüfung null Fehler/630 Hinweise, elf neue unbekannte Releasejahre.
HTML-/Exportabgleich: 553 Themenprofile, 76 Namensprofile, 132 Entscheidungen,
33 Produktseiten und 591/406/862/132 Exportzeilen. Die drei erweiterten Familien-
Exportzeilen enthalten alle acht neuen Modelle samt Primärmerkmalen und Feldprüfungen.
Diese abschließende Änderung betrifft Recherche-/Exportmetadaten; kein Frontend-
Import, deshalb unveränderter bereits getesteter Build. Alle 564 Felder stimmen mit CSV
und Darstellung überein; 351 Quellenbadges, 213 ausgelassene Leerfelder und
318 strukturierte Eigenschaften. Alle 33 unbekannten Preise ohne Kaufangebote.
Öffentliche Belegauslieferung vollständig abgeglichen; private Recherchemetadaten
bleiben ausgeschlossen. Katalogdatei 1482455 Byte,
Beleg-JSON 641933 Byte. Erneuter Import ohne Ergänzungen.
Alle 159 erfassten eigenen Testprozesse beendet, keine eigenen Recherchehelfer aktiv,
Port 4321 geschlossen; andere Aufgaben erhalten. Lokale Änderungen.
Artefakte: scratch/competitor-research/primary/batch-47/.


## Ergänzung vom 2. November 2026 – Bear Robotics: reale Modelle und belastbare Vergleichsgrenzen

Neun bestehende Bear-Einträge korrigiert; vier Modelle ergänzt: Servi mini,
Servi Clean und Servi Clean Max unter Bear Robotics sowie B9 unter LG.
Bear beschreibt B9 ausdrücklich als LG-Zusammenarbeit; die Quelle ist als
Integrationspartner gekennzeichnet. Alle zwölf Bear-Katalogmodelle und LG B9
haben ausgewählte Feldprüfungen: 167 Entscheidungen, davon 114 dokumentiert,
52 nicht dokumentiert und ein Quellenkonflikt. Die übrigen 1.743 bisherigen
Katalogzeilen bleiben inhaltlich unverändert. 172 frühere Modellprüfungen,
31 Firmenprüfungen, 1.961 Quellenidentitäten, 97 Familienzuordnungen und alle
132 Namensentscheidungen bleiben erhalten.

Servi mini ist im Herstellertext benannt. Seine eigene HTML-Sektion gruppiert
die Mini-Ansichtsdatei mit 980 mm Höhe, einem Tablett plus Rückgabebehälter und
44 lb Gesamtlast. Sie erbt weder 1.046 mm Höhe noch 30 kg des Servi. Keine fremden
Bilder kopiert. Servi Plus wechselt von smarthome nach commercial; ID, Route und
vorhandener Bildpfad bleiben gleich. Handbuch: 62 kg, 535 × 590 × 1.230 mm und
0,8 m/s im sicheren Fahrmodus gegenüber 1,2 m/s Maximum. 40 kg Gesamtlast bleibt
von 10 kg je Tablett getrennt. Unbelegte 16.000 USD und pauschale 720 Minuten
entfernt. Website 10–12 h gegenüber Handbuch 8–12 h Durchschnittslaufzeit bleiben
als Konflikt sichtbar. 7 mm sichere Schwellenhöhe, 12 mm Maximum und Web-0,5-Zoll-
Angabe werden mit ihren Bedingungen erhalten; Mindestdurchgang 650 mm.

Servi Q: mindestens zwölf Stunden sind keine maximale Laufzeit. Acht-Zoll-
Touchscreen und 18,5-Zoll-Werbedisplay bleiben getrennt; Radreinigung setzt eine
separat verkaufte Matte voraus. Peer-to-peer-Flottenkommunikation beweist nicht,
dass alle Cloud-/Dashboard-Funktionen offline arbeiten. Carti 100 lädt laut
Handbuch drei Stunden von 1 % auf 75 %, nicht von leer auf voll. Sichere Fahrt
bis 0,8 m/s und 1,2 m/s Maximum bleiben getrennt. Die 100 kg Gesamtlast verteilen
sich auf obere/mittlere Tabletts je 15 kg und unteres 70 kg.

Fünf Carti-Low-Profile-Sektionen mit ihren eigenen Modellabbildungs-URLs abgeglichen.
SLAM-Navigation ±10 mm ist nicht QR-Andocken ±5 mm. Hubweg 60 mm, Betrieb acht
Stunden und automatisches Laden höchstens 1,5 Stunden bleiben getrennt. Carti 400
hat optional 300 mm CE-Höhe, Carti 1000/1500 optional 270 mm gegenüber 260 mm
Standardhöhe; für 600/1000s wird keine CE-Höhe vom Nachbarn übernommen. Die
15-cm-Andockfreiraum-Werbung ist weder Roboterhöhe noch Durchgangsbreite. CE ist
optional; Flotten-/24-Stunden-Werbeaussagen sind nicht unabhängig geprüft.

Servi Clean: vier Stunden Saugen oder acht Stunden Staubwischen, 10-Liter-Staub-
behälter, 20 kPa. Clean Max: 3,5 Stunden Schrubben oder acht Stunden Staubwischen,
35/33 Liter Rein-/Schmutzwasser. Arbeitsbreiten 17,33/19,68 Zoll und maximale
Flächenleistungen 7.535/12.917 sq ft/h bleiben modellgebunden. LG B9: sechs Stunden
Kehren oder vier Stunden Saugen; 9.688 sq ft Reinigungsfläche sind keine Stunden-
leistung. Zwei Betriebs-/zwei Reserveakkus begründen keine Einzelladung für
24 Stunden. 6,3 lb im Kapazitätsfeld und 3,0 L in der Komponentenbeschreibung
werden nicht stillschweigend in dieselbe Staubmenge umgerechnet.

Erscheinungsjahre nur aus ausdrücklich benannten Herstellermeilensteinen. Der
Familienstart wird nicht auf separat benannte Carti 1000s und Servi Clean Max
übertragen. Firmenfokus trennt Hardware, Flottensoftware und LG-Partnerschaft.
Die Historie nennt Kinisi/KR1; die Angebotsseite lässt Last, Reichweite und genaue
Mobilität bis zum Launch offen. Werbewerte 14,4 km/h/IP65 ohne passende finale
Tabelle werden nicht auf Servi/Carti übertragen; separate Kinisi-Identität bleibt
mit eigenen Primärquellen abzugleichen. Keine vollständige historische/regionale
Produktpalette oder einzigartige Marktüberlegenheit behauptet.

Zwölf HTTP-Körper gehasht geprüft: neun HTML und drei PDF. Elf Primär-Snapshots
verwendet, einschließlich Carti-Handbuch Seite 11 und Servi-Plus-Handbuch Seiten
10/38. Die zweiseitige Bildbroschüre enthält keinen extrahierbaren Text und bleibt
als Produktbeleg ungenutzt. Keine Bild-/OCR-Prüfung behauptet, keine Formulare
abgesendet, keine bekannten blockierten Hosts erneut angefragt.

Gesamtbestand: 1.756 Modelle/Konfigurationen, 629 Primärmerkmalsdatensätze
(501 Ergänzungen/128 bestehende Modelle), 2.185 Aussagen und 833 Quellenreferenzen.
185 Modelle mit 2.134 ausgewählten Feldentscheidungen: 1.327 dokumentiert,
756 nicht dokumentiert, 49 widersprüchlich, zwei Roadmap. 32 Firmenfokus-Prüfungen.
1.034 Profile (629 mit/405 ohne Modelle); 553 Themenprofile. Alle 429 den benannten
Wettbewerber-Modellen zugeordneten Katalogmodelle behalten datierte Merkmale.
Die drei ursprünglichen Modellidentitäten, neun Listings, vollständige Detail-
seitenprüfung bei BuyAndRentRobots und eine gemessene Spitzenposition bleiben offen.

363 Unit-Tests/27 Dateien bestanden. 92 Browserfälle geprüft: 30 Bear/LG, 44
IPLUSMOBOT und 18 Vergleich, einschließlich 28 Axe-Fällen Desktop/Mobil Hell/Dunkel.
Erster Lauf 90 bestanden/zwei fehlgeschlagen: der neue deutsche Vergleichstest
erwartete den englischen Quellenrollentext statt korrekt „Quelle des Integrations-
partners“. Nur Testerwartung korrigiert; beide Fälle anschließend bestanden.
Lint/Format bestanden. Build 2.804 Seiten/rund 422 MB; Datenprüfung null Fehler/
626 Hinweise, vier weniger durch belegte Erscheinungsjahre trotz Ergänzungen.
HTML-/Exportprüfung: 553 Themenprofile, 76 Namensprofile, 132 Namensentscheidungen,
13 Produktseiten und 591/406/862/132 Exportzeilen. Sechs Bear-Quellenmodellzeilen
enthalten neun unterschiedliche bestehende Katalogmodelle samt geprüften Werten,
Status, Quellen und Daten. Erste Exportprüfung hatte eine falsche Erwartung von
vier Zeilen; auf die sechs tatsächlichen Quellnennungen korrigiert und vollständig
abgeglichen. Alle 167 Felder stimmen mit CSV/Darstellung überein; 119 Quellenbadges,
39 ausgelassene Leerfelder, neun Jahreszeilen und 106 strukturierte Eigenschaften.
Alle 13 unbekannten Preise ohne strukturierte Kaufangebote. Öffentliche Belege
vollständig abgeglichen; private Recherchemetadaten ausgeschlossen. Katalogdatei
1491413 Byte, Beleg-JSON 675480 Byte. Erneuter Import ohne Ergänzungen.
Alle 180 erfassten eigenen Testprozesse beendet, keine eigenen Recherchehelfer,
Port 4321 geschlossen; andere Aufgaben erhalten. Lokale Änderungen.
Artefakte: scratch/competitor-research/primary/batch-48/.


## Ergänzung vom 2. November 2026 – Enabled Robotics: Systemtraglast und markerbezogene Präzision

Zwölf bestehende Enabled-Konfigurationen gegen die aktuell verlinkten Integrations-
datenblätter geprüft: zehn ER-FLEX-Standard-/ESD-Ausführungen und zwei ER-MAX.
192 Feldentscheidungen: 120 dokumentiert, 72 nicht dokumentiert. Keine neuen
Roboter oder Software-Dubletten. Die übrigen 1.744 bisherigen Zeilen bleiben
inhaltlich unverändert; die zwei neuen optionalen commercial-Spalten sind dort
leer. 185 frühere Modellprüfungen, 31 unveränderte Firmenfokus-Datensätze, alle
1.961 Quellenidentitäten, 97 Familienzuordnungen und 132 Namensentscheidungen
bleiben erhalten. Der vorhandene Enabled-Firmenfokus wurde aktualisiert.

Die neuen Felder transportPayload und visionPrecision stehen in Detailtabellen,
strukturierten Produktdaten und Vergleich, mit Deutsch/Englisch und bestehendem
Sprachfallback. ER-FLEX: je Arm 7,5/12,5/16/17,5/10 kg und 850/1.300/900/1.300/
1.750 mm Reichweite ohne Werkzeug; gemeinsame Transportlast bis 165 kg. Zehn
Produktnummern trennen Standard/ESD. Die Einleitung nennt vier Modelle, die
Detailauswahl fünf Arme/zehn Konfigurationen; diese Abweichung bleibt genannt.
ER-MAX: 25/35 kg Armtraglast und 1.750/1.300 mm Reichweite, getrennt von 380 kg
Transportlast. Weder 250 noch 600 aus der MiR-Basisbezeichnung wird als nutzbare
Systemtraglast übernommen. Aktuelle Armwerte sind keine Freigabe jeder Lastlage.

ER-FLEX: geschätzte acht Stunden Betrieb von 100 % auf 10 % Ladung, getrennt von
20 Stunden täglicher Auslastung. ER-MAX: vier Stunden Betrieb im gleichen Lade-
zustandsfenster, getrennt von 18,5 Stunden Auslastung. Ladegeräte-Stromstärken
werden nicht in eine erfundene Ladezeit umgerechnet. Maximale Dauerlaufzeit,
Kaufpreis und Erscheinungsjahr bleiben für alle zwölf Einträge undokumentiert.

1 mm gilt relativ zu installierten Markern, nicht als allgemeine Navigation,
Andocktoleranz oder Armwiederholgenauigkeit. Die Arm-Home-Position bei fahrender
Basis bleibt explizit. IP21 bzw. IP52 gelten für die Plattform, IP54 für Arm/Turm;
kein pauschales Gesamtsystem-IP54. ER-FLEX-Masse 209–229 kg ist eine Familien-
spanne ohne Zuordnung zu jedem Arm/ESD; ER-MAX 460 kg ist ein gemeinsamer Wert.
800 × 580 bzw. 1.350 × 910 mm sind Grundflächen, keine vollständigen Arm-/Werkzeug-
hüllräume. Zeichnungs- und Ladeflächenhöhen ersetzen keine Gesamthöhe.

Die Hersteller-Partnerseite nennt ER-FLEX auch MC250 und ER-MAX auch MC600.
Das ist eine Familiennamensentsprechung, keine exakte Zuordnung jeder älteren
UR5e-/UR10e-/UR16e-/Controller-/Beschichtungsvariante. Frühere ER-FLEX- und
ER-FLEX-MAX-Unterlagen bleiben historischer Kontext; 4,5 Stunden bzw. 20/30 kg
werden nicht in heutige Konfigurationen übertragen. ER-ABILITY, ER-ORGANIZER und
ER-CONNECT sind Software. Hochmodule, Ladegeräte und Marker bleiben Zubehör.
Keine unabhängige Prüfung von ESD/ISO/PL-D, barrierefreiem Betrieb oder ROI.

Acht neue HTTP-Antwortkörper gehasht: sechs HTML und zwei einseitige, direkt von
den Produktseiten verlinkte PDFs. Sieben neue Primär-Snapshots verwendet. 31
Tabellenzellen anhand der PDF-Textkoordinaten den exakten Armspalten zugeordnet.
Keine Bildprüfung behauptet, kein Formular abgesendet. Vier frühere Firmenquellen
beibehalten: die beiden PDF-Körper erneut gehasht; zwei alte MiR-Go-HTML-Körper
wurden damals nicht gespeichert, deshalb nur historische Text-/Metadaten-Snapshots
erhalten und kein neuer Rohdaten-Hashnachweis behauptet. Keine neue Datierung
oder Wiederabfrage dieser beiden Seiten. Die exakten aktuellen Felder stammen
aus den neu gespeicherten Integrationsdatenblättern.

Gesamtbestand unverändert 1.756 Modelle/Konfigurationen und 629 Primärmerkmals-
datensätze (501 Ergänzungen/128 bestehende Modelle). Jetzt 2.233 Aussagen und
845 Quellenreferenzen; 197 Modelle mit 2.326 ausgewählten Feldentscheidungen:
1.447 dokumentiert, 828 nicht dokumentiert, 49 widersprüchlich, zwei Roadmap.
32 Firmenfokus-Prüfungen, 1.034 Profile (629 mit/405 ohne Modelle), 553 Themenprofile.
Alle 429 Katalogmodelle mit Bezug zu benannten Wettbewerber-Nennungen behalten
datierte Merkmale. Die ursprünglichen drei Modellidentitäten und neun Listings,
alle BuyAndRent-Detailseiten, vollständige historische/regionale Herstellerprüfung
und eine gemessene Spitzenposition bleiben offen.

374 Unit-Tests/28 Dateien und alle 80 Browserfälle im ersten Lauf bestanden:
32 Enabled, 30 Bear/LG und 18 Vergleich, einschließlich 24 Axe-Fällen Desktop/Mobil
Hell/Dunkel. Lint/Format bestanden. Build 2.804 Seiten/rund 422 MB; Datenprüfung
null Fehler/626 Hinweise. HTML-/Exportabgleich: 553 Themenprofile, 76 Namensprofile,
132 Namensentscheidungen, zwölf Produktseiten und 591/406/862/132 Exportzeilen.
Zwei MC250/MC600-Quellzeilen mit allen zwölf integrierten Zielmodellen samt Feldern,
Status, Quellen und Prüfdaten abgeglichen. Alle 192 Felder stimmen mit CSV und
Darstellung überein: 132 Quellenbadges, 60 ausgelassene Leerfelder, 120 strukturierte
Eigenschaften. Zwölf unbekannte Preise ohne strukturierte Kaufangebote. Öffentliche
Belege vollständig abgeglichen, private Recherchemetadaten ausgeschlossen.
Katalogdatei 1514906 Byte; Beleg-JSON 733720 Byte. Erneuter Import ohne Ergänzungen.
Alle 133 erfassten eigenen Testprozesse beendet, keine eigenen Recherchehelfer,
Port 4321 geschlossen; andere Aufgaben erhalten. Lokale Änderungen.
Artefakte: scratch/competitor-research/primary/batch-49/.


## Ergänzung vom 2. November 2026 – Rainbow Robotics: Reichweite, Einheiten und Modellgrenzen

13 bestehende kollaborative Arme und RBQ-10 anhand aktueller englischer Hersteller-
seiten geprüft: 209 Feldentscheidungen, davon 111 dokumentiert, 92 nicht dokumentiert
und sechs widersprüchlich. Keine neuen Roboterkarten. 1.742 andere Katalogzeilen
bleiben inhaltlich unverändert; die optionale Spalte armReach ist bei anderen
Roboterarmen leer. Die bereits vorhandene Anzeige in Detailtabellen, strukturierten
Produkteigenschaften und Vergleich liefert diese Armreichweiten aus. 197 frühere
Feldprüfungen einschließlich RB-Y1, 32 Firmenfokus-Prüfungen, 1.961 Quellenidentitäten,
97 Familienzuordnungen und 132 Namensentscheidungen bleiben erhalten. Ein neuer
Rainbow-Firmenfokus trennt aktuelle Arme, Vierbeiner und benachbarte Produktnamen.

RB5-850 und RB5-850N nennen im Fließtext 850 mm, in Tabelle/Familienkarte 927,7 mm.
Beide Werte bleiben sichtbar; weder ein anderer Bezugspunkt noch eine Generation
wird erfunden. Beim Standard-RB5-850 stehen 5 kg neben 6,6 lb; RB30-1400 nennt
71 kg neben 158 lb. Auch diese Einheitenwidersprüche bleiben direkt beim Wert.
RBQ-10 nennt 6 gegenüber 9 km/h Gehen und 20 gegenüber 25 cm Stufenhöhe;
14 km/h gilt ausdrücklich für Laufen. Längs-/Quersteigung 45 %/20 % sind Prozent,
keine Grad. Zwei Stunden/bis vier Stunden Laufzeit haben keine dokumentierten
Last-/Testbedingungen. Akkutausch und automatisches Laden liefern keine Ladezeit.

Grundflächen von 128/173/196/245 mm Durchmesser sind Montageflächen, keine
vollständigen Armhüllräume. Arm- und Controller-Massen/-Maße bleiben getrennt.
±0,05 mm Wiederholgenauigkeit wird nicht als absolute Positioniergenauigkeit
beworben. Nur vier exakte Modelltabellen geben lineare TCP-Geschwindigkeit an;
Gelenkwinkelgeschwindigkeiten werden nicht in m/s umgerechnet. IP54 gilt für
RB3-730 und RB5-850, IP66 für die übrigen zehn direkt eingesehenen Armvarianten.
Für RB16-900 bleibt die Schutzart unbekannt: sein verlinkter Produktaufruf liefert
HTTP 200 mit der Startseite. Nur die gültige Familienkarte dient als Modellbeleg.

RBC-N: SUS304-basierter Hygienebau, IP66 und NSF/ANSI-169-Aussagen bleiben
Herstellerangaben; kein unabhängiger Zertifikats-, Regionalpaket- oder Weltpremieren-
nachweis. RBQ-LiDAR, LTE, PTZ/Thermalmodule und kabelloses Laden sind konfigurations-
abhängig. RBY-Erweiterungen, vier RBM-Namen und ASTRO werden nur als benachbarte
Rechercheansätze festgehalten, nicht durch Navigation zu zusätzlich geprüfter
Hardware erklärt. Historische HUBO-/FX-2- und bestehende RB-Y1-Belege bleiben erhalten.

17 neue HTML-Antwortkörper mit SHA-256 gesichert; 15 Primär-Snapshots verwendet:
13 exakte Modellseiten und zwei Armfamilien. 13 Armkarten und 122 extrahierte
Tabellen-/Kartenangaben mit den gespeicherten Körpern abgeglichen. Der fehlerhafte
Produktlink und die zusätzliche RBQ-Familienseite sind als Kontext erhalten.
30 Links zu kontakt-/einwilligungspflichtigen Downloads nur protokolliert; kein
Formular abgeschickt und keine solche Datei angefordert. Keine Bildprüfung behauptet.

Gesamtbestand: 1.756 Modelle/Konfigurationen, 640 Herstellerschreibweisen,
1.034 Profile (629 mit/405 ohne Modelle), 629 Primärmerkmal-Datensätze mit
2.263 Aussagen/857 Quellenreferenzen. Jetzt 211 Modelle mit 2.535 ausgewählten
Feldentscheidungen: 1.558 dokumentiert, 920 nicht dokumentiert, 55 widersprüchlich,
zwei Roadmap. 33 Firmenfokus-Prüfungen; 553 Themenprofile. Alle 429 zu benannten
Quellennennungen zugeordneten Katalogmodelle behalten datierte Merkmale.
Die drei ursprünglichen Modellidentitäten, neun unklaren Listings, unvalidierte
BuyAndRent-Detailinhalte, übrige Herstellerprüfung und gemessene Spitzenposition
bleiben offen.

386 Unit-Tests/29 Dateien sowie 80 unterschiedliche Browserfälle bestanden:
30 Rainbow, 32 Enabled und 18 Vergleich, einschließlich 28 Axe-Fällen auf
Desktop/Mobil in Hell/Dunkel. Zunächst 78 bestanden/zwei neue Testannahmen falsch:
Die IP-Zelle ohne Wert hat keinen Badge. Tests auf leere Zelle und sichtbare
Quellenbegrenzung angepasst; beide gezielten Wiederholungen bestanden. Keine
Produkt-/Quellcodeänderung hierfür. Lint/Format bestanden. Build 2.804 Seiten/rund
422 MB; Datenprüfung null Fehler/626 Hinweise. HTML-/Exportabgleich: 553 Themen-
profile, 76 Namensprofile, 132 Namensentscheidungen und 14 Produktseiten;
591/406/862/132 Exportzeilen. Drei Rainbow-Quellzeilen mit 14 Katalogzielen und
allen ausgewählten Feldern samt Status/Belegen abgeglichen. 209 Feldwerte geprüft:
103 Quellenbadges, 78 ausgelassene Leerwerte, 14 Beschreibungen/14 Websites,
89 strukturierte Eigenschaften, 14 unbekannte Preise ohne Kaufangebote.
Öffentliche Vergleichsdaten exakt abgeglichen; interne Recherchemetadaten fehlen.
Katalogdatei 1517763 Byte, Beleg-JSON 779931 Byte. Erneuter Import ohne Ergänzungen.
Alle 168 erfassten eigenen Testprozesse beendet, keine eigenen Recherchehelfer,
Port 4321 geschlossen; fremde Ressourcen erhalten. Änderungen bleiben lokal.
Artefakte: scratch/competitor-research/primary/batch-50/.


## Ergänzung vom 2. November 2026 – Elephant Robotics: Generationen, Betriebsmodi und Begleitroboter

Zwölf vorhandene Modelle mit 199 ausgewählten Feldentscheidungen geprüft:
75 dokumentiert, 122 nicht dokumentiert, zwei widersprüchlich. Keine neuen
Roboterkarten oder Kategorienverschiebungen. Der vorhandene myCobot 280 M5
bekommt erstmals datierte Primärmerkmale; elf frühere Merkmalsdatensätze wurden
aktualisiert. 1.744 andere Zeilen bleiben inhaltlich unverändert. Die neue optionale
humanoid-Spalte armReach nutzt die bestehende Anzeige in Detail, strukturierten
Daten und Vergleich; andere humanoide Zeilen bleiben dort leer. 211 frühere
Feldprüfungen, 33 Firmenfokus-Prüfungen, 1.961 Quellenidentitäten, 97 Familien-
zuordnungen und 132 Namensentscheidungen bleiben erhalten. Ein Elephant-Fokus
stellt die geprüften Produktunterschiede und offenen Variantenfragen dar.

Original-myAGV: 3,6 gegenüber 3,02 kg und 311 × 236 × 130 gegenüber
300 × 205 × 145 mm bleiben Quellenkonflikte. 1–1,5 Stunden Arbeit werden von
1,5–2 Stunden Standby und 3,5–4 Stunden Laden getrennt. Die widersprüchlichen
Ladespannungsangaben werden nicht zu einer Ladegeräteempfehlung. Pi/JN 2023:
4,16 kg, 5 kg Plattformlast, 311,15 × 230 × 110 mm, 181 Minuten Navigation und
328 Minuten Standby. Keine Übernahme der ursprünglichen 0,9 m/s oder Ladezeit.
Pi-/Jetson-Controller und Kameraspalten bleiben getrennt, Ausrüstung optional.

myCobot 280 M5: 280 mm/250 g; 320 M5 und Pi: 350 mm/1 kg; Pro 630:
630 mm/bis 2 kg. Lebensdauern 500/2.000/>10.000 Stunden werden nicht als
Batterielaufzeit gespeichert. Gelenkgeschwindigkeit ist keine lineare TCP-
Geschwindigkeit. Beim 320 bleiben 1-mm-Wiederholgenauigkeit der Landingpage und
±0,5-mm-Positionierangabe der Tabelle begrifflich verschieden; kein einheitlicher
geprüfter Präzisionswert. Der myPalletizer-Pfad liefert ausdrücklich myCobot-320-Pi-
Inhalte; der Inhalt, nicht allein der URL-Name, bestimmt den Modellbezug.

Mercury A1/B1/X1 bleiben Arm, stationärer Torso und mobile Plattform mit
7/17/19 Freiheitsgraden. Die B1-/X1-Angabe 1 kg wird nicht auf zwei Arme verdoppelt;
ihr Bezug bleibt unklar. B1-Armradius wird nicht automatisch zum X1-Radius.
X1: bis acht Stunden ohne Lastbedingung, 1,2 m/s Basisfahrt, 15 Grad und 2 cm
Hindernishöhe. Die aktuelle Orin-Nano-SUPER-Nennung verifiziert nicht jede ältere
Controllerkonfiguration oder widersprüchlich beschriftete Rechentechnik-Tabelle.

Das internationale MARS-1001-Handbuch liefert MarsCat: 2,9 kg, 16 Gelenke,
Alter 12+, unterschiedliche Posenmaße ohne Schwanz, zwei Stunden aktive oder
drei bis vier Stunden reguläre Bewegung und drei Stunden Laden. Die zweite
stehende Längenangabe mit uneindeutig wiederholtem Ohne-Schwanz-Label wird nicht
korrigierend interpretiert. MetaCat dokumentiert Berührung, Stimme, Augen, Kopf,
Schwanz, Schnurren und USB-C; zehn Stunden/600 Minuten bleiben unbelegt und sind
entfernt. Keine Übertragung von MarsCat-Laufen/SDK, therapeutischer Wirkung oder
LLM-Fähigkeit. Regionale/bündelabhängige Preisbeispiele bleiben datiert in den
Merkmalen, nicht als globale numerische Kaufangebote. Der ausgewählte MetaCat-
Ragdoll-ohne-Anzug-Preis 159 USD und der Ausschluss Amerikas wurden geprüft.

metaCat AI bleibt als vorhandener, ungeprüfter Katalogeintrag erhalten: seine
bisherige Produktadresse liefert 404. Das beweist weder Einstellung noch Identität
mit MetaCat. Eine Shop-Suche nennt metaDog/metaPanda; der folgende metaDog-
Detailabruf liefert HTTP 429, metaPanda wurde danach ausgelassen. Keine weiteren
Shopanfragen und keine neuen Modellkarten allein aus Suchtreffern. Bekannte zuvor
gesperrte andere Hosts wurden nicht erneut abgefragt.

25 gespeicherte HTTP-Körper erneut gehasht: 21 erfolgreiche HTML, eine HTML-404
und drei PDFs. 21 Primär-Snapshots verwendet, darunter zwei Text-PDFs. 16 Header-/
Zellenwerte der 2023-AGV-Tabelle, drei separate Mercury-Modelltabellen und sechs
MarsCat-Label-/Wertpaare anhand der PDF-Koordinaten abgeglichen. Das bildbasierte
Quick-Guide-PDF wird nicht als Datenbeleg verwendet; keine Bildprüfung behauptet.
Die spätere Klartext-429 hat Text/Metadaten, aber keinen gespeicherten Rohkörper;
für diese Antwort wird keine nachträgliche Roh-Hashprüfung behauptet.

Gesamt: 1.756 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile
(629 mit/405 ohne Modelle), 630 Merkmalsdatensätze (501 Ergänzungen/129 bestehende
Modelle), 2.279 Aussagen/867 Quellenreferenzen. 223 Modelle mit 2.734 ausgewählten
Feldern: 1.633 dokumentiert, 1.042 nicht dokumentiert, 57 widersprüchlich, zwei
Roadmap. 34 Firmenfokus-Prüfungen. Alle 429 zu ursprünglichen benannten Nennungen
zugeordneten Katalogmodelle behalten Merkmalsbelege. Drei ursprüngliche Modell-
identitäten, neun Listings, BuyAndRent-Detailinhalte, weitere Herstellerprüfung
und eine gemessene Spitzenposition bleiben offen.

398 Unit-Tests/30 Dateien und 80 Browserfälle im ersten Lauf bestanden:
32 Elephant, 30 Rainbow und 18 Vergleich, einschließlich 28 Axe-Fällen auf
Desktop/Mobil in Hell/Dunkel. Lint/Format bestanden; Build 2.804 Seiten/rund
422 MB. Datenprüfung null Fehler/631 Hinweise; fünf zusätzliche Hinweise betreffen
nun unbelegte frühere Erscheinungsjahre. HTML-/Exportabgleich: 553 Themenprofile,
76 Namensprofile, 132 Namensentscheidungen, zwölf Produkte; 591/406/862/132
Exportzeilen. Sechs ursprüngliche Elephant-Modellzeilen mit neun Zielen und
exakten Feld-/Status-/Belegwerten geprüft. Drei zusätzlich geprüfte Modelle sind
keine Ziele dieser ursprünglichen Modellnennungen; die Quellenabdeckung wird
nicht entsprechend aufgebläht. Alle 199 Feldwerte stimmen: 65 Quellenbadges,
110 ausgelassene Leerfelder, zwölf Beschreibungen/zwölf Websites, 52 strukturierte
Eigenschaften, zwölf unbekannte regionale Gesamtpreise ohne pauschale Angebote.
Öffentliche Vergleichsdaten vollständig abgeglichen; interne Metadaten ausgeschlossen.
Katalogdatei 1523493 Byte, Beleg-JSON 825388 Byte. Erneuter Import ohne Ergänzungen.
Alle 137 erfassten eigenen Testprozesse beendet, keine eigenen Recherchehelfer,
Port 4321 geschlossen; andere Aufgaben erhalten. Lokale Änderungen.
Artefakte: scratch/competitor-research/primary/batch-51/.


## Ergänzung vom 2. November 2026 – Fdata: Modellspalten, Sensorpakete und Einheiten

Vier ausdrücklich benannte Modelle ergänzt: A012 Mini aus der direkt verlinkten
Hersteller-Arbeitsmappe sowie A005, A006 und A010 aus jeweils eigenen Produktseiten
der zweiten Herstellerdomain. Zehn vorhandene Fdata-Konfigurationen überarbeitet;
14 ausgewählte Feldprüfungen mit 238 Entscheidungen: 106 dokumentiert, 130 nicht
dokumentiert, zwei Quellenwidersprüche. Keine neuen Kategorien oder Datenfelder.
1.746 frühere Katalogzeilen, 223 frühere Feldprüfungen und 34 Firmenfokus-Prüfungen
bleiben unverändert. Ein neuer Firmenfokus erläutert die Grenzen der Belege.

Die A012-Arbeitsmappe enthält fünf explizite Modellspalten: Plus/Pro/Omni/Basis/Mini
mit 100/80/60/60/30 kg Nutzlast. Mini: 38 kg und 500 × 465 × 285 mm; die Webtabelle
zeigt nur die ersten vier Varianten. Die vorhandene A012-Familienzuordnung wurde
um Mini erweitert; 96 andere Familienentscheidungen bleiben unverändert, insgesamt
weiter 97. Die Zahl der Katalogziele ursprünglicher Nennungen steigt von 429 auf
430, alle mit datierten Merkmalen. Die alten A012-/Plus-Übersichtslabels nennen
50/80 kg statt aktuell 60/100 kg. Aktuelle Werte bleiben mit Konfliktstatus und
offener Versionszuordnung sichtbar. Seitwärtsfahrt ist für Omni explizit und für
Plus optional; die generische 62-cm-Passageangabe trotz 700-mm-Plus-Breite wird
nicht als geprüfte Durchfahrts- oder Dockingtoleranz übernommen.

A011: 500 × 500 × 302 mm, 30 kg, 50 kg Last, 2WD, acht Stunden ohne Lastbedingung;
30 km bleiben Reichweite. A020: 500 kg, 4WD-Differentialantrieb, 40/70-Ah-Optionen,
über acht Stunden ohne eindeutige Pack-/Lastzuordnung. A025R/F/N teilen 400 kg,
500 kg Last, 2.000 × 1.300 × 590 mm und acht bis zehn Stunden ohne Lastbedingung.
Die Sensorpakete unterscheiden sich: R ohne gesetzte Sensorhaken, F mit 2D-Lidar,
IMU/Ultraschall, N mit RTK, 3D-Lidar, IMU/Ultraschall. Striche sind keine Aussage,
dass spätere Erweiterungen unmöglich sind. Autonomie bleibt ausstattungsabhängig.
Die 30-Grad-Steigung ist eine Familienangabe ohne dokumentierte Lastbedingung.

A026: PDF nennt 450 kg, 1.300 × 850 × 820 mm, 1.000 kg Nutzlast, longitudinal und
lateral bis 2 m/s, IP65, unter Volllast höchstens zehn Grad und 100 mm Hindernis.
Mindestens 270 mm Chassis-Bodenfreiheit stehen neben 130 mm Radbaugruppenfreiheit;
der höhere Wert wird nicht zum gesamten Mindestabstand umgedeutet. 48 V/125 Ah,
Ladeverfahren und 100 m Fernsteuerreichweite sind keine Laufzeit, Ladezeit oder
Navigationspräzision. Ultraschallpositionen sind noch TBD und unter 80 dB ausdrücklich
geschätzt; keine unabhängige Sicherheits- oder Akustikzertifizierung behauptet.

A005: 100 kg, acht km/h bei Volllast, vier Stunden Laden, 20 km Reichweite;
zehn Grad/50 mm unter Last und 20 Grad/90 mm unbeladen bleiben getrennt. A006:
300 kg, 156 kg, 1.600 × 820 × 520 mm; 40/70-Ah-Pakete mit 35/60 km. Die
Battery-Life-Zellen 7/12 haben keine Zeiteinheit und werden nicht in Stunden
umgerechnet. A010: 80 kg, Ackermann, unabhängige Radaufhängung, zehn Grad unter
80 kg Last und 50 mm Hindernis. Lenkwinkelpräzision, Temperaturbereich und
Blinker sind keine Navigations-/Dockinggenauigkeit oder IP-Schutzklasse.

Beide Domains nutzen dieselbe Kontaktadresse; die ältere Übersicht verlinkt
A012/Plus unmittelbar auf fdatabot. Ihre A004-/A008-/A009-Produktlinks leiten
auf anders benannte A012-/A025-/A020-Seiten weiter. Keine Gleichsetzung, keine
behauptete Einstellung und keine neuen Modellkarten allein aus diesen Redirects.
Die drei Namen bleiben zusätzliche ungeklärte Hinweise. Weitere Service-/Mähroboter
und historische/regionale Produktreihen sind durch diese Auswahl nicht vollständig
geprüft. Verfügbarkeit, Lagerbestand und Lieferkonfiguration sind nicht bestätigt.

19 gespeicherte HTTP-Körper erneut gehasht: 16 HTML, zwei XLSX, ein PDF;
15 Primär-Snapshots verwendet. 63 nichtleere Arbeitsmappenzellen, 56 A025-Header-/
Spaltenwerte, zwei per Rowspan expandierte A006-Batteriezeilen und sieben
A026-Label-/Wertpaare anhand positionierten PDF-Texts abgeglichen. Keine
Bildprüfung behauptet; bildbasierte A020-/A025-Spezifikationen nicht verwendet.
Keine Formulare abgeschickt und bekannte gesperrte Hosts nicht erneut abgefragt.

Gesamt: 1.760 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile
(629 mit/405 ohne Modelle), 634 Merkmalsdatensätze (505 Ergänzungen/129 bestehende
Modelle), 2.299 Aussagen/890 Quellenreferenzen. 237 Modelle mit 2.972 ausgewählten
Feldern: 1.739 dokumentiert, 1.172 nicht dokumentiert, 59 widersprüchlich, zwei
Roadmap. 35 Firmenfokus-Prüfungen. Quelleninventare und 132 Namensentscheidungen
bleiben erhalten. Die ursprünglichen drei Modellidentitäten, neun unklaren Listings,
862 BuyAndRent-Detailinhalte und eine gemessene Spitzenposition bleiben offen.

408 Unit-Tests/31 Dateien und 78 Browserfälle im ersten Lauf bestanden: 28 Fdata,
32 Elephant, 18 Vergleich, einschließlich 28 Axe-Fällen auf Desktop/Mobil in
Hell/Dunkel. Lint/Format bestanden; Build 2.808 Seiten/rund 423 MB. Datenprüfung:
null Fehler/635 Hinweise. Vier neue Hinweise betreffen ausschließlich unbelegte
Erscheinungsjahre der vier Ergänzungen. HTML-/Exportabgleich: 553 Themenprofile,
76 Namensprofile, 132 Namensentscheidungen, 14 Produkte und 591/406/862/132
Exportzeilen; sechs Fdata-Quellenmodellzeilen erreichen elf geprüfte Katalogziele.
Vergleichsbelege 877.773 Byte, gemeinsamer Katalog 1.529.508 Byte. Eigene
Testprozesse und Helfer beendet, Port 4321 frei; Nutzer-/Fremdressourcen erhalten.
Nur lokale Änderungen, kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Productive Robotics: Arme, Schweißprozesse und Zellen

Acht vorhandene OB7-/Blaze-Konfigurationen überarbeitet und sieben ausdrücklich
benannte Angebote ergänzt: Blaze Max, Blaze Laser Max, Blaze MAX Mobile, Blaze LF,
Blaze MIG Cell, Blaze Laser Cell und Assemble & Weld Cell. Das sind drei weitere
Max-Ausführungen, ein Paket, zwei Zellen und ein kundenspezifisches Mehrrobotersystem,
keine sieben neuen grundlegenden Armkonstruktionen. 15 ausgewählte Feldprüfungen
mit 255 Entscheidungen: 88 dokumentiert, 163 nicht dokumentiert, vier widersprüchlich.
Ein Firmenfokus ergänzt; 1.752 andere frühere Katalogzeilen unverändert.

OB7/Stretch: fünf/vier kg Nutzlast, 1.000/1.250 mm Reichweite und jeweils
22 kg neben nicht äquivalenten 58 lb. Die Massendifferenz bleibt ein Quellenkonflikt.
Max 8/12/16: acht/zwölf/16 kg Last, 1.700/1.300/1.000 mm Reichweite und 58 kg.
Flanschdurchmesser ist keine Gesamtgröße; IP30-Steuerung, IP41-Tablet und optionaler
IP65-PG2-Greifer sind keine bestätigte Schutzklasse des OB7-Arms. Optionen werden
nicht pauschal als mitgeliefert oder als weitere Robotermodelle geführt.

Blaze und Max: 1.550/2.159 mm einschließlich Brenner; dasselbe Größenpaar ist
für Laser und Mobile ausdrücklich benannt. Der Serienname Blaze Max Laser führt
zur gleichen größeren Laser-Ausführung wie Blaze Laser Max, nicht zu einer dritten
Karte. Schweißvorschub bis 2.540 mm/min steht jetzt als weldSpeed getrennt von der
freien Bewegung. Das Laser-PDF nennt sowohl 0–2+ m/s als auch höchstens 2 m/s,
positionsabhängig; dieser Widerspruch bleibt bei den beiden Laser-Größen sichtbar.
±0,1 mm Wiederholgenauigkeit ist keine absolute Positionier- oder Schweißgütegarantie.
Die gemeinsam angegebene, nicht eindeutig größenbezogene Masse 22 kg/58 lb wird
nicht ausgewählt; 64 kg gehört zur Miller-Schweißquelle, nicht zum Gesamtroboter.
IP61 für Laserroboter/Steuerung und IP41 für das Tablet sind keine Zellenschutzklasse.

OptX 1 kW ist für Schweißen, 2 kW zusätzlich für Reinigen beschrieben. 32 A im
PDF stehen 20 A in LF-/Mobile-Optionstabellen gegenüber; keine geprüfte
Revisionszuordnung. Auch die Ethernet-Beschriftung des Controllers unterscheidet
sich zwischen Web und PDF. Quellenstrom, Laserleistung und Einschaltdauer werden
nicht zu Nutzlast, Laufzeit oder einem universellen Anschlusswert. Mobile nutzt
Rollen mit Feststellung; autonome Fahrt und Batterielaufzeit sind nicht belegt.

LF-, MIG- und Laser-Zellen nennen einen Arbeitstisch 4 × 8 Fuß. workTableSize
zeigt diese Maße getrennt von unbekannten Gesamt-/Gehäuseabmessungen. MIG-Zellen
bieten Miller-Quellenoptionen, Laser-Zellen OptX-Optionen; Absaugung, Beleuchtung und
Blaze-Vision-Video sind Herstellermerkmale. Sicherheits-, Garantie-, Produktivitäts-
und Keine-PSA-Aussagen bleiben zugeschriebene Angaben, keine unabhängig geprüften
Verträge oder universellen Betriebsanweisungen. Das Assemble-&-Weld-System kombiniert
OB7-Halten mit Blaze-Schweißen und wird auftragsbezogen gebaut; Achsen, Lasten und
Reichweiten werden nicht aus zwei Einzelarmen summiert oder pauschal übertragen.

Die Serienübersicht beschreibt Blaze Duo mit zwei Stationen und automatischen
Türen, verlinkt aber die MIG-Cell-Seite; deren Garantiezeile nennt Laser Cell.
Identität, Layout und Garantiebezug bleiben ungeklärt. Kein separates Duo-Modell
angelegt. Neun benannte Greifer-/Stand-/Prozess-/Schnittstellen-Zubehöre bleiben
Zubehör. Portal-Handbücher und Formularguides nicht abgerufen, keine Formulare
abgeschickt und zuvor gesperrte Hosts nicht erneut abgefragt.

Beide neuen Messgrößen erscheinen in Detailtabelle, strukturierten Produktdaten
und Vergleich mit Englisch-/Deutsch-Labels und bestehendem Sprachfallback.
Der neue Gewerbefilter Fertigung & Schweißen findet die vier benannten Pakete/
Zellsysteme. Ein erster Integrationstest hatte die fehlende passende Unterkategorie
aufgedeckt; sie wurde ergänzt, ohne Produktionszellen zu Forschungsbasen umzudeuten.

Zusätzlich 151 pauschale Fehlwert-Hinweise auf bereits dokumentierten Feldern von
26 früheren Elephant-/Fdata-Prüfungen entfernt. Werte, Status, Quellen, Daten und
inhaltliche Einschränkungen bleiben unverändert. Von 237 früheren Reviews sind
211 vollständig unverändert, 26 nur in diesen Hinweisen korrigiert. Eine neue
Regression prüft dies katalogweit. Bei den 15 neuen Reviews wurden außerdem
86 solche Vorlagenhinweise vor Abschluss bereinigt. Historische Prüfartefakte bleiben
unverändert; die Notizbereinigung ist keine neue Herstellerverifikation.

16 gespeicherte HTTP-Körper erneut gehasht: 15 HTML und ein einseitiges PDF,
alle 16 als Primärbelege verwendet. 20 beschriftete OB7-Werte, sieben PDF-Roboter-
Labelpaare und zwei getrennte OptX-Strom-Bereiche anhand des positionierten Texts
abgeglichen. Größenpaar-, Komponenten-, Tisch- und Duo-Verlinkungen geprüft.
Keine Bildprüfung behauptet. Quelleninventare, 97 Familienzuordnungen und
132 Beschreibungsnamensentscheidungen bleiben erhalten.

Gesamt: 1.767 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile
(629 mit/405 ohne Modelle), 641 Merkmalsdatensätze (512 Ergänzungen/129 bestehende
Modelle), 2.341 Aussagen/920 Quellenreferenzen. 252 Modelle mit 3.227 ausgewählten
Feldern: 1.827 dokumentiert, 1.335 nicht dokumentiert, 63 widersprüchlich, zwei
Roadmap. 36 Firmenfokus-Prüfungen. Alle 430 Ziele ursprünglicher Modellnennungen
behalten datierte Merkmale. Drei ursprüngliche Modellidentitäten, neun unklare
Listings, sämtliche 862 BuyAndRent-Detailinhalte, weitere Herstellerprüfung und
eine gemessene Spitzenposition bleiben offen.

422 Unit-Tests/32 Dateien und 112 Browserfälle im ersten Lauf bestanden: 34
Productive, 28 Fdata, 32 Elephant und 18 Vergleich, einschließlich 40 Axe-Fällen
auf Desktop/Mobil in Hell/Dunkel. Vorherige Unit-Fehler: fehlender Fertigungsfilter
und ein neuer Test, der optionale Notizen stets als String annahm; beides behoben.
Lint/Format bestanden; Build 2.815 Seiten/rund 429 MB. Datenprüfung null Fehler/
642 Hinweise; sieben zusätzliche Hinweise ausschließlich unbelegte Erscheinungsjahre
der Ergänzungen. HTML-Abgleich: 15 Merkmalsseiten und 41 Spezifikationsseiten mit
692 Feldern, 236 Quellenmarkierungen und 185 strukturierten Eigenschaften; 553
Themenprofile, 76 Namensprofile und 132 Entscheidungen. 591/406/862/132 Exportzeilen,
acht Productive-Quellenmodellzeilen und acht zugehörige Katalogziele geprüft.
Zusätzlich aktuelle Notizen aller erreichbaren betroffenen Reviews in 20 Exportzeilen
mit 28 Katalogzielen gegen die exakten Feldtexte abgeglichen.
Vergleichsbelege 923.786 Byte, Katalogskript 1.553.986 Byte. Eigene Prozesse beendet,
Port 4321 frei; Fremd-/Nutzerressourcen erhalten. Nur lokale Änderungen.


## Ergänzung vom 2. November 2026 – Richtech: Gewerbe, Plattformen und Quellenkonflikte

Acht vorhandene Modelle überarbeitet: Dex, Matradee Plus, Pallet Jack, DUST-E MX,
DUST-E S, ADAM, Scorpion und Titan. ADAM/Scorpion stehen nun bei gewerblichen
Getränkerobotern, Titan bei gewerblicher Logistik. IDs, bestehende Modell-URLs und
lokale Bildpfade bleiben erhalten; keine Bildprüfung behauptet. Keine neuen
Modelle angelegt. 1.759 andere Katalogzeilen und alle 252 bisherigen Feldprüfungen
unverändert. Acht neue Prüfungen umfassen 156 Felder: 56 dokumentiert, 93 nicht
dokumentiert, zwei widersprüchlich, fünf Roadmap. Ein Firmenfokus ergänzt.

Dex: stationäre/mobile Plattform, 11 lb je Arm, vier Taskkameras und Jetson Thor.
Mobile Höhe 4 Fuß 6 Zoll, stationär 3 Fuß 7 Zoll; nur Höhe, keine vollständigen
Abmessungen. Vier Stunden Batterie, zwei Stunden Laden sowie Spalt/Schwelle gelten
für mobil. Stationär nutzt externe Versorgung. Die Seite kündigt weiterhin
Roadmap-/Demo-Updates vor dem Start an: diese fünf technischen Werte bleiben als
Roadmap markiert. Keine unbenannten Plattform-SKUs oder bestätigte Lagerverfügbarkeit.

Matradee Plus: 88 lb insgesamt über vier Tabletts, nicht je Tablett; zehn Stunden
Batterie, vier Stunden Laden. Herstellerachsen 22,8 B × 19,2 L × 50,7 H Zoll bleiben
erhalten. Tablett- und Displaymaße sind keine Gesamtgröße. Pallet Jack: 3.307 lb
Nennlast und 8,26 Zoll angegebene angehobene Höhe, ohne belegten Hubweg/Bezugspunkt.
Steigung 5° voll/10° leer; 86,6 Zoll Gangbreite ist kein Radius. Die allgemeine
Positionierangabe ±0,19 Zoll/±1° wird ohne Messmethode nicht zu Andockgenauigkeit.

DUST-E MX: 557 lb ohne Wasser, 20 Zoll Reinigung/30 Zoll Saugleiste, 21.958 ft²/h,
6° Steigung und beschriftete 17/13-gal-Frisch-/Schmutzwassertanks. Gallonenstandard
unbekannt, keine pauschale Literumrechnung. DUST-E S: 13,7 Zoll Bürste/15,7 Zoll
Abzieher, maximal 8.138 ft²/h, sieben Prozent statt Grad und zwei Stunden Laden.
10/15 Liter haben keine Frisch-/Schmutzwasserzuordnung; der 1-Liter-Müllbehälter ist
getrennt. Bürstendruck ist keine Nutzlast, Zubehör/Station keine pauschale Lieferzusage.

ADAM: 11 lb je Arm; die sechs-DoF-Beschriftung nennt keinen Pro-Arm-/Gesamtscope.
Die Größenzeile 19,6 Zoll × 32,6 Zoll × 110 lbs vermischt Maße und Masse. Nur zwei
qualifizierte Maße bleiben mit Konfliktstatus; Gesamtmasse und dritte Abmessung
werden nicht erfunden. Spannweite ist keine radiale Reichweite. Scorpion: sechs
DoF, 11 lb und durchschnittlich eine Minute je Getränk bei einem Standardlayout mit
20 Zutaten. Eine Haupt-/drei Zusatzsprachen sind keine unbegrenzte Sprachabdeckung.
±0,5 Prozent betrifft Zutatenmessung, keine Arm-/Navigationsgenauigkeit.

AC/540 W beziehungsweise AC/380 W und die vom Hersteller behauptete NSF-Zulassung
bleiben getrennt von Batterielaufzeit oder unabhängig geprüften Zertifikaten.
Die ADAM-Fallstudie nennt bis 50 Getränke/Stunde bei einem konkreten Fünf-Getränke-
Menü sowie 1.365 Getränke/32.746 USD in 30 Tagen. Ihre Payback-Texte nennen sowohl
vor fünf Jahren als auch sechs Monate; keine universelle Durchsatz-/ROI-Garantie.
Mietformate ADAM Tisch/klassischer Trailer und Scorpion Tisch/Cybertruck sind
Dienstleistungen, keine weiteren Robotermodelle; kein Preis oder Regionalangebot
erfunden. Unbelegte Erscheinungsjahre von ADAM/Scorpion entfernt.

Titan: zehn bis 24 Stunden abhängig von Nutzung, 5,5 Stunden Laden, IP43 am Körper
und IP66 nur an der Batterie. Die Beschreibung nennt 330 lb, die Tabelle 330–1300 lb,
ohne benannte Varianten-/Lastmoduszuordnung. Nutzlast bleibt widersprüchlich;
keine erfundenen Varianten. ADA-Rampenwerbung ohne Zahl wird nicht zur Gradangabe.

Zwölf HTTP-Körper gehasht: elf HTML und ein siebenseitiges PDF. Elf Quellen verwendet,
50 beschriftete technische Werte mit gespeichertem Text abgeglichen. Der Solutions-
Index liefert trotz HTTP200 keine serverseitigen Produktinhalte; vollständige aktuelle
oder historische Herstellerabdeckung ist damit nicht belegt. Keine Formulare versandt
und keine zuvor gesperrten Hosts erneut angefragt.

Gesamt: 1.767 Modelle/Konfigurationen, 640 Herstellerschreibweisen und 1.034 Profile;
641 Merkmalsdatensätze mit 2.353 Aussagen/923 Quellenreferenzen. 260 Modelle mit
3.383 ausgewählten Feldern: 1.883 dokumentiert, 1.428 unbekannt, 65 widersprüchlich,
sieben Roadmap. 37 Firmenfokus-Prüfungen. Alle 430 Ziele ursprünglicher Nennungen
behalten datierte Merkmale. Quelleninventare, 97 Familienentscheidungen und
132 Beschreibungsnamensentscheidungen erhalten. Drei ursprüngliche Modellidentitäten,
neun Listings, alle 862 BuyAndRent-Detailinhalte und gemessene Marktführerschaft offen.

434 Unit-Tests/33 Dateien bestanden. 84 unterschiedliche Browserfälle bestanden:
32 Richtech, 34 Productive-Regression und 18 Vergleich; darunter 28 Axe-Fälle auf
Desktop/Mobil in Hell/Dunkel. Erster Lauf: 82 bestanden/zwei fehlgeschlagen; der neue
deutsche Vergleichstest erwartete fälschlich Dezimalpunkte. Die Anwendung zeigte
korrekte Dezimalkommas. Test korrigiert, beide betroffenen Fälle erneut bestanden.
Keine Produktänderung dafür erforderlich. Lint/Format bestanden. Build 2.815 Seiten/
rund429 MB; Datenprüfung null Fehler/644 Hinweise. Die zwei neuen Hinweise betreffen
ausschließlich die nun offen ausgewiesenen unbekannten Erscheinungsjahre.

HTML-Abgleich: acht Modellseiten, 156 Feldentscheidungen, 55 Quellenmarkierungen,
85 ausgelassene Leerfelder, 47 strukturierte technische Eigenschaften und36 Merkmals-
sätze sowie Firmenfokus mit acht Karten. Acht ursprüngliche Modell-Exportzeilen/
acht Ziele/156 Feldvorkommen exakt abgeglichen; Gesamt-Exporte591/406/862/132 Zeilen.
Vergleichs-JSON 950.440 Byte, Katalogskript1.556.373 Byte; interne Recherchepfade
bleiben ausgeschlossen. Erneuter Import null Ergänzungen. Eigene Testprozesse,
Browser und Vorschau geschlossen; Port4321 frei. Änderungen nur lokal, kein Commit,
Push oder Deployment. Fortschritt belegt, vollständige Herstellerprüfung und Nr.1
weiterhin unbewiesen.


## Ergänzung vom 2. November 2026 – OrionStar: aktuelle Modelle, Lasten und Reinigungsmodi

Fünf ausdrücklich benannte Modelle ergänzt: GreetingBot AD sowie CleaniBot S55 Pro,
M1, K1 und C5. Acht bestehende englische/chinesische Einträge korrigiert. LuckiBot Pro
und Lucki (Zhaocaibao) von Smart Home nach gewerblicher Zustellung verschoben; IDs,
Modell-URLs und lokale Bilder erhalten. 1.759 andere Katalogzeilen und alle 260 früheren
Feldprüfungen unverändert. 13 neue Prüfungen umfassen 225 Felder: 99 dokumentiert,
126 nicht dokumentiert; keine neuen Konflikt-/Roadmap-Status. Ein Firmenfokus ergänzt.

Alle elf Produktlinks der aktuellen englischen Navigation mit gespeicherten Seiten
abgeglichen: vier Reinigung, drei Zustellung, drei Empfang und CarryBot. CarryBot
nennt D100/D150 als zwei Hardwaremodelle. Zusammen mit dem separat erhaltenen
chinesischen Eintrag ergeben sich 13 geprüfte Katalogeinträge. Die allgemeine
Produktübersicht lässt einzelne Navigationseinträge aus; vollständige historische
Herstellerabdeckung wird nicht behauptet. Software und Zubehör sind keine zusätzlichen
Robotermodelle. Kein EXE-Download oder Programmstart und kein Formularversand.

LuckiBot: 40 kg insgesamt/10 kg je Tablett; Pro: 60 kg insgesamt/15 kg je Tablett,
beides ausdrücklich belegt. Autodoor nennt 20 kg je Tablett ohne Gesamtnutzlast und
69-Liter-Stauraum neben 410×480×315 mm maximalem Einzelstauraum; deren Verhältnis
ist nicht erläutert. Keine Übernahme der offenen Pro-Last oder -Masse. Die drei
englischen Liefermodelle nennen 4, 5 Stunden Laden im ausgeschalteten Zustand.
Chinesisches Zhaocaibao nennt dagegen 4, 5 Stunden am Dock, 5° Steigung und obere
Tabletts 500×420 mm; englisches LuckiBot nennt 500×430 mm. Region-/Revisionsgleichheit
bleibt unbestätigt, deshalb beide bisherigen Identitäten erhalten. Kein chinesischer
Steigungswert auf das englische Modell übertragen. Frühere 12–15 Stunden beim
chinesischen Eintrag durch belegte zehn Stunden im typischen Fahrbetrieb ersetzt.

CarryBot D100: 100 kg und bis neun Stunden; D150: 150 kg und zwölf Stunden. Die
Vergleichsfußnote gilt für 100 kg Last auf Marmorboden. Traglast schließt montierte
Tabletts/Regal ein; 30 kg je Tablett hebt die Gesamtgrenze nicht auf. D150 unterscheidet
48 kg Basis, 58 kg Tabletts und 60 kg mit Regal(48+12). Keine einzelne Familienmasse
gewählt. Gemeinsame Robotermaße 600×525×1377 mm bleiben getrennt vom
405×825×937-mm-Regal; keine abgeleitete Gesamtgröße der Installation. Die detaillierte
Tabelle ist ausdrücklich D150: Maße, Masse, Geschwindigkeit und Ladezeit werden
nicht nach D100 kopiert. CarryBot 1/2/3 sind Tragekonfigurationen unter beiden benannten
Modellen, keine erfundenen zusätzlichen SKUs. Allgemeine 1-cm-Positionierwerbung
wird nicht zur Andockgenauigkeit.

GreetingBot Mini: 21 kg, 410×410×1000 mm, zwölf Stunden typische Fahrt und höchstens
4, 5 Stunden Laden ausgeschaltet. Nova: 56 kg, 558×525×1350 mm, zwölf bis 14 Stunden
und 4, 5 Stunden am Dock. AD: 21, 5-Zoll-Werbedisplay plus 14-Zoll-Touchscreen, acht bis
zehn Stunden; 8 A am Dock ist Stromstärke, keine Ladedauer. Qualitative Zentimeter-
positionierung ist keine exakte±1-cm-Grenze; Gangbreiten sind keine Körpermaße.
Sprachabdeckung, Drittanbieter-LLMs und Softwarezugriff bleiben einsatzabhängige
Herstellerangaben. Unbelegte Startjahre von Pro, Nova und Zhaocaibao entfernt.

S55 Pro: 3, 5 Stunden Power Scrub, 4, 5 Stunden Scrub/Sweep-Vacuum/zusätzlicher
Mop-Modus, 19, 5 Stunden ECO Vacuum und 28 Stunden Dust Mop.28 Stunden gelten nicht
für alle Reinigung. Flächenleistungen 1197/1368 m²/h bleiben modusspezifisch;
Kartierungsfläche ist keine Stundenleistung. Keine Werkzeugbreite aus Körper- oder
Durchfahrtsbreite abgeleitet. M1: 500-mm-Bürste/680-mm-Abzieher, 3, 5 Stunden Schrubben/
acht Stunden Moppen, 35/33 Liter Wasser. K1: 440-mm-Bürste, 420-mm-Körperbreite,
880-mm-Durchfahrtsbreite getrennt; Quelllabels Vacuuming 8h/Mopping 4h unvertauscht.
10 Liter sind Staubbehälter, keine Wassertanks; Wasserstation nicht unterstützt.
C5: 45 Liter Frisch-/45 Liter Abwasser statt 90 Liter Frischwasser. Stationstank 8 Liter,
25 kg Bürstendruck, 10.000 Stunden Lüfterlebensdauer und Stationsleistung 1800 W sind
keine zusätzliche Bordkapazität, Nutzlast, Batterielaufzeit oder Gesamtroboterleistung.
C5-Steigung 5° beladen/8° leer bleibt getrennt. Desinfektion, Zero-Edge, Produktivität,
ROI, Lärm und Sicherheitswerbung sind keine unabhängigen Prüfresultate.

14 gespeicherte HTML-Körper erneut gehasht, alle 14 als Quellen verwendet.56
beschriftete technische Paare, 18 D150-Spezifikationszellen in drei Konfigurationen
sowie zwölf Last-/Laufzeitzellen in sechs D100/D150-Spalten anhand der HTML-Struktur
geprüft. Keine Bildprüfung behauptet. Quelleninventare, 97 Familienentscheidungen
und 132 Beschreibungsnamensentscheidungen erhalten.

Gesamt: 1.772 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile;
647 datierte Merkmalsdatensätze(517 Ergänzungen/130 bestehende Modelle), 2.389
Aussagen/930 Quellenreferenzen.273 Modelle mit 3608 ausgewählten Feldern: 1982
dokumentiert, 1554 unbekannt, 65 widersprüchlich, sieben Roadmap.38 Firmenfokus-
Prüfungen. Alle 430 Ziele ursprünglicher Modellnennungen behalten datierte Merkmale.
Drei ursprüngliche Identitäten, neun Listings, alle 862 BuyAndRent-Detailinhalte,
weitere Herstellerprüfung und gemessene Marktführerschaft bleiben offen.

447 Unit-Tests/34 Dateien bestanden. Ein neuer Test griff zunächst auf eine
Werteliste statt auf den vorhandenen Einzelwert des Gewerbereinigungsfilters zu;
Test anhand der stabilen Unterkategorie korrigiert.84 verschiedene Browserfälle
bestanden: 34 OrionStar, 32 Richtech-Regression und 18 Vergleich, darunter 28 Axe-Fälle
auf Desktop/Mobil in Hell/Dunkel. Erster Lauf 80 bestanden/vier fehlgeschlagen:
zwei neue Prüfungen nahmen die erste 24-Karten-Seite und die Auswahlreihenfolge
als Vergleichsspaltenfolge an. Tests nutzen nun Herstellerfilter beziehungsweise
Modellüberschriften; alle vier betroffenen Desktop-/Mobilfälle erneut bestanden.
Dafür keine Produktänderung nötig. Lint/Format bestanden. Build 2820 Seiten/rund 429 MB.
Datenprüfung null Fehler/652 Hinweise;acht zusätzliche Hinweise betreffen nur fünf
neue Modelle ohne Startjahr und drei offengelegte bislang unbelegte Startjahre.

HTML-/Exportprüfung: 13 Modellseiten, 225 Feldentscheidungen, 86 Quellenmarkierungen,
113 ausgelassene Leerfelder, 73 strukturierte technische Eigenschaften und 57
Merkmalsätze; ein Firmenfokus mit 13 Karten. Sechs ursprüngliche Modell-Exportzeilen/
sieben Ziele/119 Feldvorkommen exakt geprüft. Gesamt-Exporte 591/406/862/132 Zeilen.
Vergleichs-JSON990.575 Byte, Katalogskript 1.564.093 Byte; interne Recherchemetadaten
nicht ausgeliefert. Erneuter Import null Ergänzungen. Eigene Testprozesse, Browser und
Vorschau geschlossen, Port 4321 frei. Änderungen nur lokal;kein Commit, Push oder
Deployment. Verifizierter Fortschritt, vollständige Prüfung und Nr.1 weiter unbewiesen.


## Ergänzung vom 2. November 2026 – OTTO: Traglast, Ladefenster und Fahrraum

Fünf bestehende Modelle anhand der aktuell verlinkten Herstellerdatenblätter
überarbeitet: OTTO 100, 600, 1200, 1500 und Lifter. Keine zusätzlichen Modelle
oder Kategorieverschiebungen. 110 ausgewählte Feldentscheidungen: 64 dokumentiert,
45 unbekannt und ein Quellenkonflikt. Alle 273 früheren Feldprüfungen sowie 1.767
andere Katalogzeilen inhaltlich erhalten; lediglich zwei leere optionale Spalten
kommen bei anderen gewerblichen Zeilen hinzu. 642 frühere Merkmalsdatensätze bleiben
unverändert, fünf wurden überarbeitet. Ein Firmenfokus ergänzt.

Gangbreite und Wenderadius sind nun eigene Felder auf Modellseiten, in strukturierten
Daten und im Vergleich, mit englischen/deutschen Bezeichnungen und bestehendem
Sprachfallback. Gangbreiten gelten ausdrücklich ohne Nutzlast und je nach Ein- oder
Zweirichtungsverkehr. Drehen auf der Stelle bedeutet keine Null-Freiraum-Garantie.
OTTO 1500 nennt für den Zweirichtungsverkehr 3570 mm und 146 Zoll im selben Blatt;
146 Zoll entsprechen 3708,4 mm. Dieser Widerspruch bleibt beim Wert sichtbar.

OTTO 100 trägt insgesamt 150 kg einschließlich montierter Ausrüstung und Wagen,
OTTO 1500 insgesamt 1900 kg einschließlich Aufbau. Die Modellnummer ist keine
Traglastangabe. Der integrierte Hub von 100 beträgt 62 mm und ist keine maximale
Stapler-Hubhöhe. Laufzeiten von sechs bzw. zehn Stunden für 100/1500 gelten von
90 auf 10 Prozent Ladezustand. Ladezeiten 18/30/30/60 Minuten für 100/600/1200/1500
gelten von 10 auf 90 Prozent. 10.000/6000/3000 Ladezyklen sind Lebensdauerangaben,
keine Betriebsstunden. Für 600/1200 bleibt die Laufzeit unbekannt. Beim 600 stehen
42 A maximale Batterie-Laderate neben einem 100-A-Zubehörladegerät; diese Labels
werden nicht als identische Geräteauswahl behandelt.

Lifter: 1,0 m maximale Hubhöhe autonom und 2,7 m manuell; Wenderadius 1985 mm autonom
und 1420 mm manuell. Lastschwerpunkt 623 mm sowie 183 cm Last-Höhenlimit bei 1000 kg
gegenüber 134 cm bei 1200 kg bleiben getrennt von der Hubhöhe. Bleiakku lädt ungefähr
sechs Stunden, Lithium ungefähr eine Stunde mit 200-A-Supercharger, jeweils 10–90 %.
Die Web-Überschrift von 60 Minuten gilt nicht für jeden Akku. Palettenandocken ±50 mm
steht getrennt vom Absetzen mit Zielmarke (x ±13 mm, y ±10 mm, Winkel ±1°).
Unklare Winkel-/Wiederholgenauigkeitszeichen der anderen vier PDFs werden nicht
zu erfundenen Grad- oder Sigma-Grenzen normalisiert. IP20 gilt belegt nur für
100/1500; Bodenhindernis, Bodenfreiheit und überfahrbarer Spalt bleiben getrennt.

Fleet Manager, Open API/OPC-UA, VDA5050 ohne hier geprüfte Version, Ladegeräte,
HADS, Wagen, Aufbauten und Batterievarianten sind qualifizierte Software-/Zubehör-
oder Konfigurationsangaben. Sie erzeugen keine erfundenen Hardwaremodelle.
Sicherheits-, Normen-, ROI- und Marktführungswerbung bleibt Herstellerangabe.
Keine Formulare übermittelt, keine unabhängige Sicherheits-/Verfügbarkeitsprüfung.

14 gespeicherte HTTP-Körper erneut gehasht und alle als Quellen verwendet:
neun HTML-Seiten sowie fünf PDFs mit zehn Seiten. PDF-/HTML-Text exakt reproduziert;
66 technische Label-Wert-Paare, acht bedingte Gangbreiten und Lifter-Modus-/Akku-/
Lastgrenzen geprüft. Keine visuelle PDF- oder Bildprüfung behauptet.

Aktueller Gesamtbestand: 1.772 Modelle/Konfigurationen, 640 Herstellerschreibweisen,
1.034 Profile, 647 datierte Merkmalsdatensätze (517 Ergänzungen/130 bestehende Modelle),
2405 Aussagen und 935 Quellenreferenzen. 278 Modelle mit 3718 ausgewählten Feldern:
2046 dokumentiert, 1599 unbekannt, 66 widersprüchlich und sieben Roadmap. 39 Firmenfokus-
Prüfungen. Alle 430 Ziele ursprünglicher Modellnennungen behalten datierte Merkmale.
Drei ursprüngliche Identitäten, neun Listings, alle 862 BuyAndRent-Detailinhalte,
weitere Herstellerprüfung und gemessene Marktführerschaft bleiben offen.

459 Unit-Tests in 35 Dateien bestanden. Zwei neue Textprüfungen erwarteten zunächst
fehlende Leerzeichen; Erwartungen anhand der vorhandenen Prosa korrigiert.
80 Browserfälle bestanden: 28 OTTO, 34 OrionStar-Regressionen und 18 Vergleichsfälle,
darunter 28 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Lint und Format bestanden.
Build: 2820 Seiten, ungefähr 430 MB; Datenprüfung null Fehler und unverändert
652 Hinweise. Fünf Modellseiten/110 Felder/60 Quellenmarkierungen/40 ausgelassene
Leerfelder/55 strukturierte Eigenschaften/31 Merkmalsätze und ein Firmenfokus mit
fünf Karten geprüft. Fünf ursprüngliche Modell-Exportzeilen mit 110 Feldvorkommen
exakt abgeglichen; Gesamt-Exporte 591/406/862/132 Zeilen. Vergleichs-JSON 1.013.708 Byte,
Katalogskript 1.579.797 Byte. Interne Recherchemetadaten werden nicht ausgeliefert.
Erneuter Import: null Ergänzungen. Eigene Testprozesse, Browser und Vorschau geschlossen,
Port 4321 frei. Änderungen nur lokal, kein Commit, Push oder Deployment.
Dies ist verifizierter Fortschritt; vollständige Herstellerprüfung und Nr. 1 bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Robotize: aktuelle GoPal-Modelle und historischer GoPal 400

Sechs bestehende Modelle anhand der aktuell verlinkten Herstellerseiten und Broschüre
überarbeitet: E22, E24, E24W, U22W, U24W und P35. GoPal 400 als separat benanntes
historisches Modell ergänzt: Die Herstellerchronik nennt den Start im Dezember 2017.
Kein technischer Wert wird aus der Modellnummer 400 oder aus aktuellen Nachfolgern
abgeleitet. Historische Traglast, Masse, Maße, Laufzeit und Generationsgleichheit bleiben
unbekannt. Alle 278 früheren Feldprüfungen und 1.766 andere Katalogzeilen unverändert.
641 frühere Merkmalsdatensätze erhalten, sechs überarbeitet, einer ergänzt.
Ein Firmenfokus ergänzt. Sieben neue Prüfungen umfassen 154 Felder: 46 dokumentiert,
79 unbekannt und 29 widersprüchlich.

Wiederholte Seitenübersichten nennen dieselben 187 kg, 1400×860×340 mm und 500 kg
bei verschiedenen Modellen. Die ausdrücklich benannten Spezifikationsabschnitte und
die sechs Broschürenspalten nennen stattdessen E24W 215 kg, U22W/U24W 242 kg und
P35 120 kg sowie abweichende Maße, Lasten und Geschwindigkeiten. Ausgewählte Werte
folgen benannten Abschnitten und Broschüre; die Unterschiede bleiben beim Wert sichtbar.
U24W nennt 1200 kg einschließlich Palette. P35 nennt 300 kg einschließlich Aufsatz;
Homepage-Karte 250 kg und Seitenübersicht 500 kg bleiben als Konflikt erhalten.
Höhere Lasten bestimmter Partnerkonfigurationen sind keine allgemeine Traglastfreigabe.

E22/E24 unterstützen Euro-/Halb-Euro-Paletten, E24W zusätzlich Industrie-Euro-Paletten;
U22W/U24W UK-/US-Paletten. Palettenzustand und Lastgeometrie bleiben Bedingungen.
2400 mm Lasthöhe ist weder Roboterhöhe noch maximale Bord-Hubhöhe. P35-Karosserie
960×660×295 mm und 120 kg bleiben getrennt von der 20-kg-Ladestation mit
505×790×258 mm und 1000 W. P35 hat 24-V-LFP und induktives Hauptladen sowie USB-C
für Notladen; Palettenmodelle haben 48-V-LFP und physische Dock-/Steckerschnittstellen.

Palettenseiten nennen 45 Minuten für Vollladung; die Broschüre nennt 45 Minuten von
30 auf 95 Prozent. P35-Seite und Broschüre nennen 45 beziehungsweise 55 Minuten für
dasselbe 30–95-Prozent-Fenster. Keine stille Harmonisierung. Laufzeit 6–14 Stunden
beziehungsweise P35 8–14 Stunden bleibt lastabhängig; 20 km Distanz, 5000 Ladezyklen
und 24/7/365-Flottenbetrieb sind keine zusätzlichen garantierten Betriebsstunden.

Gangbreiten trennen Minimum, Zweirichtungsverkehr, Ideal-/Hochgeschwindigkeitsbereich
und Türdurchfahrt. P35-Seite nennt 960 mm Gang und 760 mm Durchfahrt, Broschüre
1000 mm und 900 mm für das nackte AMR ohne Aufbau. P35-Radius 660 mm steht neben
1300 mm Broschüren-Drehdurchmesser; imperial erscheinen dort außerdem 3,3 bzw.
4,27 Fuß. Andere Seiten verwenden Durchmesser-Labels für Werte vom Roboterzentrum,
während die Broschüre 1900/2000 mm Drehdurchmesser nennt. Keine stillschweigende
Halbierung oder Freiraumgarantie. ±2 Prozent Steigung sind keine ±2 Grad. Bodenstufen,
Reibung, Temperatur und Feuchte bleiben getrennt von einer unbelegten IP-Klasse.

GoControl, Paletten-/Hub-/Förderstationen, IO Box, Tasten, Ladegeräte und Aufsätze von
Nord Modules/ROEQ bleiben Software, Zubehör oder Partnerintegration. Stationäre
Transaktionshöhen und 1500-kg-Förderstationen werden nicht zu Bord-Hub-/Traglastwerten.
Sicherheits-, Freigabe-, ROI- und Marktführungswerbung bleibt Herstellerpositionierung.
Keine Formulare übermittelt und keine unabhängige Leistungs-/Verfügbarkeitsprüfung.

Zwölf HTTP-Körper erneut gehasht: elf HTML-Seiten und eine 15-seitige Broschüre.
HTML-/PDF-Text exakt reproduziert, 30 HTML-Spezifikationsbeziehungen, 84 Werte in
sechs positionierten PDF-Modellspalten sowie 33 Werte in drei Fahrraum-Spalten geprüft.
Bildinput ist nicht verfügbar; keine visuelle PDF-/Bildprüfung behauptet.

Die erste Browserprüfung bestand 80 von 82 Fällen. Zwei Desktop-/Mobilprüfungen
zum historischen Modell deckten eine echte Darstellungslücke auf: zusätzliche
Spezifikationszeilen wie Startjahre hatten keine Feldkennung/Quellenmarkierung.
SpecsTable ergänzt diese Metadaten jetzt auch für zusätzliche geprüfte Felder.
Nach neuem Build wurden alle 82 Fälle erneut bestanden: 36 Robotize, 28 OTTO-
Regressionen und 18 Vergleichsfälle, einschließlich 28 Axe-Prüfungen in Hell/Dunkel
auf Desktop/Mobil. Alle 470 Unit-Tests in 36 Dateien, Lint und Format bestanden.
Übergreifender HTML-Abgleich: 285 Modellseiten, 3872 ausgewählte Feldwerte und
2254 sichtbare technische Werte mit Quellenmetadaten; alle 20 geprüften
Startjahre haben jetzt Quellenmarkierungen. Frühere Herstellerquellen wurden dabei
nicht erneut abgerufen oder unabhängig zertifiziert.

Neue Modell-/Exportprüfung: sieben Seiten, 154 Felder, 68 Quellenmarkierungen,
72 ausgelassene Leerfelder, 60 strukturierte Eigenschaften und 40 Merkmalsätze.
Ein Firmenfokus mit sieben Karten; sechs ursprüngliche Modell-Exportzeilen mit
132 Feldvorkommen exakt abgeglichen. Gesamt-Exporte unverändert 591/406/862/132 Zeilen.
Vergleichs-JSON 1054235 Byte, Katalogskript 1583066 Byte; keine internen
Recherchemetadaten ausgeliefert. Build 2821 Seiten, ungefähr 430 MB. Datenprüfung
null Fehler und unverändert 652 Hinweise. Erneuter Import: null Ergänzungen.

Gesamt: 1.773 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile,
648 datierte Merkmalsdatensätze (518 Ergänzungen/130 bestehende Modelle), 2427 Aussagen
und 949 Quellenreferenzen. 285 Modelle mit 3872 ausgewählten Feldern: 2092 dokumentiert,
1678 unbekannt, 95 widersprüchlich und sieben Roadmap. 40 Firmenfokus-Prüfungen.
Alle 430 Ziele ursprünglicher Modellnennungen behalten datierte Merkmale.
Drei ursprüngliche Identitäten, neun Listings, alle 862 BuyAndRent-Detailinhalte,
weitere Herstellerprüfung und gemessene Marktführerschaft bleiben offen.
Eigene Browser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.
Änderungen nur lokal, kein Commit, Push oder Deployment. Verifizierter Fortschritt;
vollständige Herstellerprüfung und Nr. 1 bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Deep Trekker und Pipe Trekker

Sieben bestehende Deep-Trekker-ROVs/Crawler korrigiert; VAC MAX, Pipe Trekker A-150/A-200
und die historisch benannten DTG2, DTG2 Worker, DTX2, DT320 und DT340 ergänzt.
Pipe Trekker bleibt als vom Hersteller ausdrücklich eingeführte Marke separat.
13 benannte S/X- und ROV-Pakete innerhalb der jeweiligen Modellbelege erhalten;
Ausstattungspakete werden nicht zu zusätzlichen Robotergrundmodellen.
15 Feldprüfungen mit 300 Entscheidungen: 68 dokumentiert, 220 unbekannt, zwölf Konflikte.
Zwei Firmenfokusse ergänzt; 285 frühere Prüfungen und 1.766 andere Katalogzeilen erhalten.

Konflikte bleiben sichtbar: SPECTRA 3,5/4 Knoten, PHOTON 200/215 Grad Kameradrehung,
MAG/VAC 406 mm/13 Zoll Breite, VAC 4K/1080p und Pipe Trekker fünf/acht Stunden Akku.
A-200-S-Shop wiederholt A-150-Masse, -Maße und -Geschwindigkeit; S/X-Elektriktabellen
widersprechen A-200-Seite bei Kapazität und Antriebsabdichtung. A-150, A-200 und DT320
haben weitere unvereinbare Maßpaare. Keine stille Reparatur oder Spezifikationsvererbung.
VAC MAX 36-Zoll-Kopfbreite ist keine Karosseriebreite. Generische angehängte Tabellen
belegen nicht die vollständige breitere Baugruppe; kein errechnetes Tempo von 24 m/min.
IP68-Kabeltrommel, Kabelbruchlast und Zug-/Schubkraft sind keine Roboter-IP-/Nutzlastwerte.
Controllerlaufzeit, Hybridstrom, Kabellänge und Tauchtiefe bleiben getrennt.
Historische Artikeldaten werden nicht zu Startjahren. Ein alter Worker-URL liefert jetzt
einen aktuellen SAR-Ratgeber; tatsächlicher Seiteninhalt hat Vorrang vor altem Slug.
Vier Manual-Landings führen nur zum Support-Shell; keine Handbücher daraus zertifiziert.

37 gespeicherte HTML-Körper gehasht und Text reproduziert; 92 konkrete Belege geprüft:
59 sichtbare Tabellenpaare, 20 eingebettete Shop-Werte, vier Paketlisten, PHOTON-Spalten-
beziehung, Product/FAQ-Daten und sechs Textstellen. 26 tatsächlich verwendete Snapshots.
Keine Bildsichtprüfung, Formularübermittlung oder weiteren Zugriffe auf blockierte Hosts.
15 gerenderte Modellseiten: 300 Felder, 64 Quellenmarkierungen, 206 ausgelassene Leerfelder,
49 strukturierte Werte und 68 Merkmalsätze. Zwei Firmenfokusse geprüft; sieben ursprüngliche
Modell-Exportziele mit 140 Feldvorkommen abgeglichen. Gesamt-Exporte 591/406/862/132 Zeilen.
Globaler Metadatenabgleich: 300 Seiten, 4172 Feldwerte und 2318 sichtbare technische Werte
mit Quellenmarkierung; 20 geprüfte Startjahre weiterhin belegt.

Alle 482 Unit-Tests in 37 Dateien bestanden; Lint und Format bestanden. 102 verschiedene
Browserfälle bestanden: 48 Deep/Pipe Trekker, 36 Robotize- und 18 Vergleichsregressionen,
einschließlich 36 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Erster Lauf 100 bestanden,
zwei Fehler in einem neuen Testselektor (Karte und Favoritenknopf tragen dieselbe ID).
Selektor auf Roboterkarten begrenzt, beide Fälle erneut bestanden; keine Produktänderung.
Build 2830 Seiten, ungefähr 431 MB; null Datenfehler, 660 Hinweise (+8 fehlende Startjahre).
Erneuter Import null Ergänzungen. Vergleichs-JSON 1119217 Byte und
Katalogskript 1593285 Byte; interne Recherchemetadaten bleiben serverseitig.
Eigene Browser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Stand: 1.781 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1.035 Profile,
656 datierte Merkmalsdatensätze (526 Ergänzungen/130 bestehende Modelle), 2474 Aussagen,
970 Quellenreferenzen und 42 Firmenfokus-Prüfungen. 300 Modelle mit 4172 ausgewählten
Feldern: 2160 dokumentiert, 1898 unbekannt, 107 widersprüchlich und sieben Roadmap.
Drei ursprüngliche Modellidentitäten, neun Listings und alle 862 BuyAndRent-Detailinhalte
bleiben offen. Vollständige historische Prüfung und Marktführerschaft sind unbewiesen.
Änderungen nur lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Addverb Lagerrobotik und Physical AI

25 ausdrücklich benannte Modelle/Systeme ergänzt und neun vorhandene Einträge
korrigiert. Der Addverb-Bestand umfasst jetzt 34 Datensätze in vier Kategorien.
Dazu gehören Dynamo 100/200/500/1000/1500/2500; FlowT und 1000/1530/1520;
Dash Line/Tug; Veloce; Zippy 6/10/30/40/X; Cruiser/360; Multi-Pro; Quadron;
Medius; Skyron; SortIE; Travect; Trakr und 5/20; Elixis/Elixis-W; Syncro 5/10; JEN 6.
34 neue Modellprüfungen umfassen 697 Felder: 298 dokumentiert, 379 unbekannt,
18 widersprüchlich und zwei Zielwerte/Roadmap. 300 vorherige Prüfungen und
1.772 andere Katalogzeilen bleiben unverändert. Ein Firmenfokus ergänzt.

Die FlowT-1530-Auswahl verlinkt ein ausdrücklich FlowT 1520 genanntes Dokument.
Beide Namen bleiben separat, ohne Übernahme von 1520-Masse, -Maßen oder -Hubhöhe
in den 1530. 1000/2000-kg-FlowT-Angaben bleiben ein Quellenkonflikt. Dynamo 2500
nennt im PDF omnidirektionalen, im Web differentiellen Antrieb. Leere/beladene
Geschwindigkeit, 0–80-/20–80-Prozent-Ladefenster, Chassis-/Zuglast, Palettenmaße,
Systemdurchsatz und Einzelroboterleistung bleiben getrennt. Veloce und Zippy nennen
Wendedurchmesser, keine belegten Radien. Rackhöhen und AC-/Stromschienenbetrieb
werden nicht zu Karosseriemaßen oder Akkulaufzeiten. Skyron-Temperatur ist kein Gelände.

Physical-AI-Varianten wurden im öffentlichen Selektor getrennt aufgerufen:
Trakr 5/20, Syncro 5/10 und Elixis/Elixis-W. Trakr 5 hat widersprüchliche
Desktop-/Responsive-Akkuangaben und 120/170-mm-Stufenwerte. IP67 und automatisches
Laden sind optional. Elixis ist zweibeinig (75 kg), Elixis-W fährt auf Rädern (210 kg).
Laufzeiten sind ausdrücklich Zielwerte; fünf Kilogramm pro Arm werden nicht
unqualifiziert zur Gesamtnutzlast. Syncro-Controller sind keine Armabmessungen.
JEN 6 enthält einen kopierten Quadruped-Text; daraus entstehen keine 20 kg Armnutzlast.
Generische Trakr-/FlowT-Familien erhalten keine übernommenen Variantendaten.

30 gespeicherte HTML-Seiten, 24 PDFs mit 91 Seiten, drei JavaScript-Dateien und
15 öffentliche, rein lesende Selektorantworten: alle 72 Körper gehasht und die
HTML-/PDF-Textextraktion reproduziert. Sechs gerenderte Variantenstände gehasht.
178 konkrete Quellenbeziehungen geprüft: 90 positionierte PDF-Zeilen, 15 benannte
Selektoren, sechs Standnachweise, 30 sichtbare Label-/Wertpaare, 30 DOM-Eigenschafts-
zeilen, drei widersprechende Responsive-Zeilen und vier JEN-6-Spezifikationspaare.
Alle 30 HTML-Seiten samt Selektornamen haben explizite Klassifikationsentscheidungen.
Cruiser-Palettenklassen, Multi-Pro-Größen und Zippy-Bandanbauten bleiben Konfigurationen.
Movect/Mobinity/Concinity/Optimus sind Software; Rapido, Corzie, konventionelle
Förderer und eigenständige Lifte sind angrenzende Angebote. Deren Selektornamen
wurden inventarisiert; keine Vollprüfung sämtlicher angrenzender Variantendetails.
Keine Kontakt-/Angebots-/Abonnement-/Download-Einwilligungsformulare übermittelt.
Keine Bildsichtprüfung oder weiteren Zugriffe auf bereits blockierte Hosts.

34 gerenderte Modellseiten abgeglichen: 697 Felder, 284 Quellenmarkierungen,
345 ausgelassene Leerfelder, 247 strukturierte Werte und 146 Merkmalsätze.
Firmenfokus und Firmenexport stimmen überein; ein ursprünglicher Modell-Exportdatensatz
enthält sechs Dynamo-Ziele mit 132 Feldvorkommen. Gesamtexporte 591/406/862/132 Zeilen.
Globaler Abgleich: 334 Modellseiten, 4869 Feldwerte und 2602 sichtbare technische
Werte mit Quellenmarkierung; 20 geprüfte Startjahre weiter belegt.
Vergleichs-JSON 1248216 Byte und Katalogskript 1622120 Byte.

494 Unit-Tests in 38 Dateien bestanden; Lint und Format bestanden. Abschließender
Browserlauf vollständig bestanden: 100 Fälle, davon 34 Addverb, 48 Deep/Pipe-Trekker-
und 18 Vergleichsregressionen, einschließlich 32 Axe-Prüfungen auf Desktop/Mobil
in Hell/Dunkel. Erster Lauf: 96 bestanden, vier mobile Überläufe im neuen Firmenfokus.
Ursache war eine lange Aufzählung ohne Leerzeichen. Prosa lesbar aufgelöst, neu gebaut
und alle 100 Fälle erneut bestanden. Keine Quellcodeänderung hierfür erforderlich.
Build 2855 Seiten, etwa 435 MB; null Datenfehler, 687 Hinweise (+27 fehlende Startjahre:
25 neue Modelle und zwei gelöschte unbelegte Altjahre). Erneuter Import null Ergänzungen.
Eigene Browser, Vorschauen und Hilfsprozesse geschlossen; Port 4321 frei.

Aktueller Gesamtstand: 1.806 Modelle/Konfigurationen, 641 Herstellerschreibweisen,
1.035 Profile, 683 datierte Merkmalsdatensätze (551 neue/132 bestehende Modelle),
2599 Aussagen, 1024 Quellenreferenzen und 43 Firmenfokus-Prüfungen.
334 ausgewählte Modellprüfungen mit 4869 Feldern: 2458 dokumentiert, 2277 unbekannt,
125 widersprüchlich, neun Roadmap. Drei ursprüngliche Modellidentitäten, neun Listings
und sämtliche 862 BuyAndRent-Detailinhalte bleiben offen. Vollständige historische
Herstellerprüfung, exklusive USPs und Marktführerschaft sind nicht nachgewiesen.
Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – DEEP Robotics Plattformen und Editionen

Lite3 Venture, Lite3 EDU und DR02 Standard ergänzt; neun bestehende Einträge
korrigiert: LYNX M20/M20 Pro, X30/X30 Pro, Lite3, Lynx S10/M20S und DR02/DR02 Pro.
Zwölf neue ausgewählte Prüfungen umfassen 183 Felder: 54 dokumentiert, 129 unbekannt.
334 frühere Prüfungen und 1.797 andere Katalogzeilen unverändert. Ein Firmenfokus
ergänzt. Jueying, Jueying Mini, X20 und Yunju bleiben außerhalb dieser Prüfung;
die frühere DR01-Prüfung bleibt erhalten. M20_Piper bleibt ein Integrationshinweis.

M20/M20 Pro: 33 kg einschließlich Akku, 15 kg effektive Last. Zwei Meter pro Sekunde
sind Arbeitsgeschwindigkeit; fünf sind ein nicht verfügbares Laborextrem, die Fußnote
nennt drei als Produktgrenze. Diese unterschiedlichen Bedingungen sind kein
gleichartiger Feldkonflikt. Leere/beladene Laufzeit und Reichweite bleiben getrennt.
Optionale Ladestation und zukünftige OTA-Funktionen erhalten keine Verfügbarkeitszusage.
Grafische Häkchen im PDF wurden nicht als Merkmale transkribiert.
X30: 56 kg und 1000 × 470 × 595 mm; Pro: 59 kg und 1000 × 470 × 715 mm.
Gemeinsame PDF-Zeilen bleiben als solche qualifiziert; Pro-Navigation wird nicht
automatisch zur Basisausstattung. Keine frei übertragene Fünf-Meter-Geschwindigkeit.

Lite3: Elf Kilogramm betreffen die benannte Körperbaugruppe, nicht das ganze Gerät.
Beinmassen werden wegen überlappender Bauteile nicht addiert; Körpermaße und
Koordinatenversätze ergeben keine belegte Standhöhe. Venture-SDK und EDU-Lightning-LM
haben eigene Bedingungen; Jetson AGX und Livox Mid360 sind keine universelle
Lieferumfangszusage. S10/M20S haben benannte SDK-Unterstützung ohne geerbte M20-Ratings.
DR02 Pro hat 31 Gelenke mit derzeit gesperrten Halsachsen 29/30; Standard hat 21
ohne Hals. DR02 bleibt eine eigene Familienreferenz. Eine externe Versorgung mit
72 V, 5 A und 360 W ist kein Akkukapazitäts- oder Ladezeitbeleg. Aus Bildern wurden
keine mechanischen Maße abgeschrieben. Unbelegte Preise, Jahres- und Leistungswerte
wurden in den ausgewählten Feldern entfernt.

54 gespeicherte HTTP-Körper gehasht und Extraktion reproduziert: 44 erfolgreich
(26 HTML, zwei PDFs mit vier Seiten, 15 Klartextdateien und ein JavaScript).
Zehn Produktrouten lieferten HTTP 520 und dienen nicht als Belege; danach keine
weiteren Zugriffe auf diesen Produkthost. 64 Quellenbeziehungen geprüft:
41 positionierte PDF-Spalten-/Zeilenbezüge, sieben HTML-Tabellenzeilen und 16
benannte SDK-/Herstellertextstellen. 20 verwendete Primär-Snapshot-URLs.
Alle 54 Antworten klassifiziert, zwölf Modellentscheidungen gespeichert.
Keine Bildsichtprüfung, Formularübermittlung oder Ausführung von Herstellercode.

Zwölf gerenderte Modellseiten: 183 Feldwerte, 42 Quellenmarkierungen, 117 ausgelassene
Leerfelder, 30 strukturierte Werte und 55 Merkmalsätze. Firmenfokus und Export
abgeglichen; sechs ursprüngliche Modell-Exportziele mit 91 Feldvorkommen geprüft.
Gesamtexporte weiterhin 591/406/862/132 Zeilen. Globaler Metadatenabgleich:
346 Seiten, 5052 Felder, 2644 sichtbare technische Werte mit Quellenstatus,
2097 ausgelassene Leer-/NA-Felder und 20 belegte Startjahre. Dieser Abgleich prüft
die Ausgabe vorhandener Reviews, nicht erneut die früheren Herstellerquellen.
Vergleichs-JSON 1295135 Byte; Katalogskript 1625505 Byte.

504 Unit-Tests in 39 Dateien bestanden; Lint und Format bestanden. 84 Browserfälle
bestanden: 32 DEEP Robotics, 34 Addverb- und 18 Vergleichsregressionen, darunter
28 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Build 2858 Seiten, etwa 436 MB.
Null Datenfehler, 696 Hinweise (+9 fehlende Startjahre: drei neue Modelle und sechs
gelöschte unbelegte Altjahre). Erneuter Import null Ergänzungen. Keine UI-Codeänderung.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1.809 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1.035 Profile,
688 datierte Merkmalsdatensätze (554 neue/134 bestehende Modelle), 2634 Aussagen,
1048 Quellenreferenzen und 44 Firmenfokus-Prüfungen. 346 ausgewählte Modellprüfungen
mit 5052 Feldern: 2512 dokumentiert, 2406 unbekannt, 125 widersprüchlich, neun Roadmap.
Drei ursprüngliche Modellidentitäten, neun Listings und sämtliche 862 BuyAndRent-
Detailinhalte bleiben offen. Historische Vollständigkeit, exklusive USPs und
Marktführerschaft sind nicht nachgewiesen. Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – PAL Robotics Plattformen und Konfigurationen

Elf benannte Plattformen/Konfigurationen ergänzt: TIAGo Base, OMNI Base, Base AI,
Base Delivery, Base Actuated Conveyor, Base Shelf, TIAGo LITE, TIAGo++, Pro Arm,
TIAGo Head und REEM-C. Sechs bestehende Einträge korrigiert: TIAGo, TIAGo Pro,
StockBot, Kangaroo, TALOS und ARI. Keine Kategorienübertragung. Alle elf Plattformen
des gespeicherten Herstellerverzeichnisses sind vertreten; sechs weitere Namen sind
historische, Editions- oder ausgestattete Konfigurationen, keine sechs neuen Grunddesigns.
17 ausgewählte Modellprüfungen mit 287 Feldern: 95 dokumentiert, 184 unbekannt,
acht widersprüchlich. Die frühere Kangaroo-Prüfung mit acht Feldern wurde auf
16 Felder erweitert; ihre Quelle bleibt im Snapshot erhalten. 345 andere Reviews,
1.803 andere Katalogzeilen, 44 Firmenfokusse und ursprüngliche Quellenidentitäten
unverändert. Netto 16 zusätzliche Reviews und 279 zusätzliche Felder. Ein Firmenfokus ergänzt.

TIAGo Pro: 80 kg, 120–155 cm, 23 DoF inklusive Standardgreifern und vier Stunden
im verlinkten Datenblatt gelten für die dokumentierte Konfiguration. 92/236 cm
vertikale/horizontale Reichweite gehören zum mobilen Roboter; 96/240 cm gehören
zur ausdrücklich getrennten Teleoperation Station. Der bisherige Konfliktvermerk
war daher zu weitgehend. Drei Kilogramm pro ausgestrecktem Arm schließen den
Endeffektor aus; Torsohub 35 cm. Keine Verdopplung zur ungeprüften Gesamtnutzlast.
Die Station bleibt Zubehör. TIAGo mit einem/zwei Akkus hat 4–5/8–10 Stunden;
generische 70 kg und Familienwerte werden nicht in LITE oder ++ kopiert.
Die ++-Spalte nennt zwei Siebenachsarme, keine vollständige Gesamtgelenkzahl.

StockBot: ~10 Stunden und fünf Stunden Vollladung in der Webtabelle stehen gegen
zwölf und vier Stunden im Datenblatt/FAQ. Beide Felder bleiben widersprüchlich.
RFID-Erfassung bis vier Meter und optische Erfassung bis 2,4 Meter sind getrennte
Messgrößen; 0,5-Meter-Artikelortung ist keine Dockinggenauigkeit. Marketingzähler
werden nicht zu unabhängigen Genauigkeits- oder Laufzeitprüfungen.
Kangaroo: Armvarianten mit 4/5/7 DoF tragen ausgestreckt 7/5/3 kg; beidhändig
stehen separat 30/28/25 kg. Die beidhändigen Werte sind keine Summe ausgestreckter
Armlasten. 50–65 kg und 14–40 DoF bleiben konfigurationsabhängig. Die fehlerhafte
976-Ah-Schreibweise im PDF wird nicht als Akkukapazität übernommen.
TALOS: 1,5 Stunden Gehen versus drei Stunden Bereitschaft; Drehmomentsensor-Aussage
mit Ausnahme für Kopf, Handgelenke und Greifer. Separate Handgelenk-Kraftsensoren
heben diese Ausnahme nicht auf. ARI: 73/75 cm Tiefe bleiben ein Quellenkonflikt;
unbelegte 60 kg entfernt. Sprache, Navigation, Docking und Cloud-Funktionen bleiben
paketabhängig; Hersteller-Datenschutzwerbung ist keine unabhängige Rechtsprüfung.

TIAGo Base: 70/100 kg Nutzlast und 1/1,5 m/s Maximalgeschwindigkeit sind zwischen
aktueller Seite, verlinktem PDF und Herstellerartikel nicht auf eine exakte Revision
aufgelöst. Ein-Zentimeter-Stufe und etwa sechs Prozent Steigung im FAQ sind keine
150-mm-Stufe; die PDF-Beschriftung kombiniert Spalt/Stufe und bleibt unklar.
OMNI Base nennt 150 mm Spaltbreite, keine vertikale Stufenhöhe. Bare-Base-Werte
werden nicht auf Delivery-, Conveyor- oder Shelf-Gesamtsysteme übertragen.
Der Base-AI-Artikel von 2023 dokumentiert 150 kg, 245° LiDAR und zwei RGB-D-Kameras.
Seine alte Produktadresse leitet zur heutigen 100-kg-OMNI-Base-Seite um; daraus
folgen weder identische Hardware noch aktuelle Verfügbarkeit.

TIAGo Pro Arm: 9,5 kg, sieben Achsen; 110 cm Webhöhe gegen 105 cm im Datenblatt.
Sieben Kilogramm Spitzen- und sechs Kilogramm Dauerlast sind in der Tabelle
qualifiziert; die zusätzliche Drei-Kilogramm-Angabe im Überblick hat keine erklärte
Beziehung dazu. Diese Unsicherheit bleibt markiert. 75 cm horizontale Reichweite
und 95 cm unqualifizierte Reichweite werden nicht als gleiche Messung ausgegeben.
24-Stunden-Betriebszyklus bei externer Versorgung ist keine Akkulaufzeit.
Visual Programming ist im Überblick als künftig verfügbar gekennzeichnet.
TIAGo Head ist eine separat versorgte, zweiachsige HRI-Plattform, keine passive
Ersatzhülle. Sie und REEM-C sind im aktuellen Verzeichnis als Legacy klassifiziert.
Head-Paketpreise von 12.950/19.900 EUR im gespeicherten PDF enthalten zehn Prozent
Bildungsrabatt und schließen Versand/Steuern/Zölle aus; keine aktuellen allgemeinen
Offers daraus erzeugt. REEM-C: drei Stunden Gehen/sechs Bereitschaft getrennt;
Konzeption 2013 ist kein belegtes erstes kommerzielles Startjahr.

33 gespeicherte HTTP-Körper gehasht und Text reproduziert: 18 HTML und 15 PDF-Körper
mit 43 Seiten, einschließlich zweier Routen auf dasselbe Pro-PDF. Eindeutig sind
14 PDFs mit 41 Seiten. 88 konkrete Quellenbeziehungen geprüft: 63 Tabellenzeilen,
eine getrennte Zubehörsektion, 17 benannte Textbezüge, sechs positionierte PDF-
Regionen und eine finale Weiterleitungsadresse. 26 verwendete Primär-Snapshot-URLs.
Alle 33 Antworten, elf Hersteller-Verzeichnisplattformen und sechs weitere Namen
haben Klassifikationsentscheidungen. Keine Bildsichtprüfung, Formularübermittlung,
Preis-/Demoanfrage oder erneuten Zugriffe auf zuvor blockierte Hosts.

17 gerenderte Modellseiten: 287 Felder, 86 Quellenmarkierungen, 167 ausgelassene
Leerfelder, 63 strukturierte Werte und 59 Merkmalsätze. Firmenfokus und Export
abgeglichen; vier ursprüngliche Modell-Exportziele mit 68 Feldvorkommen geprüft.
Gesamtexporte 591/406/862/132 Zeilen. Globaler Metadatenabgleich: 362 Modellseiten,
5331 Felder, 2725 sichtbare technische Werte mit Quellenstatus, 2263 ausgelassene
Leer-/NA-Felder und 20 belegte Startjahre. Frühere Herstellerquellen wurden hierfür
nicht erneut unabhängig geprüft. Vergleichs-JSON 1350855 Byte,
Katalogskript 1638994 Byte; interne Recherchemetadaten bleiben serverseitig.

516 Unit-Tests in 40 Dateien, Lint und Format bestanden. Alle 84 Browserfälle
bestanden: 34 PAL, 32 DEEP-Robotics- und 18 Vergleichsregressionen, einschließlich
28 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Build 2869 Seiten, etwa 437 MB.
Null Datenfehler, 711 Hinweise (+15 fehlende Startjahre: elf Ergänzungen und vier
entfernte unbelegte Altjahre). Erneuter Import null Ergänzungen. Keine UI-Codeänderung.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1.820 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1.035 Profile,
701 datierte Merkmalsdatensätze (565 neue/136 bestehende Modelle), 2681 Aussagen,
1076 Quellenreferenzen und 45 Firmenfokus-Prüfungen. 362 ausgewählte Modellprüfungen
mit 5331 Feldern: 2601 dokumentiert, 2588 unbekannt, 133 widersprüchlich, neun Roadmap.
Drei ursprüngliche Modellidentitäten, neun Listings und alle 862 BuyAndRent-
Detailinhalte bleiben offen. Vollständige historische Prüfung, unabhängige Leistung,
exklusive USPs und Marktführerschaft sind nicht nachgewiesen. Änderungen lokal;
kein Commit, Push oder Deployment.


## 2026-11-02: current comparison and combined research queue (batch 62)

Removed the cross-manufacturer exact-name fallback and refreshed the stale
1,715-row heuristic comparison against all 1,820 current catalog rows without HTTP.
The 114 model/eleven brand hints include already reviewed aliases, families,
components and services; only three original model identities remain unresolved.
The 122 originally unclear listings remain preserved, with 113 reviews and nine
open. Original inventory bytes, source dates and historical embedded comparisons
remain unchanged. Use the separate current gap file and strict coverage decisions.

The combined JSON/CSV queue contains 518 scoped targets, including 430 from explicit
model mentions, 489 with reviewed listing resolutions, and 518 with reviewed
description references. All have dated highlights; 206 have selected-field reviews
and 312 await those reviews. The queue preserves source links, family/context scope
and review notes. Manufacturer priorities start with Unitree, Fourier and Intuitive
Surgical. Company focus evidence covers 44 of 591 source groups and 45 overall profiles.

Verification: 525 unit tests in 41 files and 20 Python tests pass; changed-file ESLint
and formatting pass. All 23 catalog/evidence files, 1,961 source identity records and
prior strict audit decisions preserved. Four exports retain 591/406/862/132 rows;
the new research CSV has 518 rows. No new build, browser or manufacturer HTTP run.
Batch 61 build/browser results remain historical. No own browser/server started;
previous 141 own test processes closed and port 4321 free. All 862 detail contents,
three model identities, nine listings, whole-product verification and market leadership
remain unresolved. Changes are local; no commit, push or deployment.


## Ergänzung vom 2. November 2026 – Fourier-Modelle und Quellenabgrenzung (Batch 63)

Sieben benannte Modelle/Konfigurationen ergänzt: GR-3C, GR-3C Ultra, GR Mini,
GRW, GRW Lite, ArmMotus M2 Pro und ExoMotus M4 Immersive. Elf bestehende Einträge
korrigiert, darunter GR-1, GR-2, GR-3, N1 und GR Nano. Die Dublette von GR Nano unter
Fourier/Fourier Intelligence wurde zusammengeführt; die bisherige Modelladresse
bleibt erhalten. Nexus-01 ist eine N1-Bezeichnung, kein zusätzliches Modell.
RehabHub, InfinityNet, reine Sensorik und Trainingsgeräte werden nicht pauschal
als neue Robotermodelle gezählt. 18 ausgewählte Modellprüfungen mit 293 Feldern:
109 dokumentiert, 176 unbekannt und acht widersprüchlich. Ein Firmenfokus ergänzt.

GR-1: unbelegte 125.000 USD und pauschale Traglast entfernt; etwa 3 kg pro Hand,
60 Minuten Betrieb gegenüber 45 Minuten Gehen, 315 Minuten Laden und getrennte
44/34-Konfigurationen. GR-2: optionale 12-DoF-Hände bleiben von Standardhänden getrennt.
GR-3: 43 Basisgelenke und bis zu 55 mit optionalen Händen sind unterschiedliche
Konfigurationen; Geschwindigkeit und Spannweite behalten dagegen Quellenkonflikte.
Laden etwa 1,5 Stunden, nicht drei Stunden. N1: 38/39 kg und Körpermaße bleiben
widersprüchlich; 2,7 km/h Gehen und unterschiedliche Laufangaben sind abgegrenzt.
GR-3C-Editionen erhalten keine aus der generischen GR-3-Seite kopierte Masse.
Mini erhält keine N1-Geschwindigkeit; die uneindeutige Ladezeit bleibt leer.

GRW: 160 kg auf der Website gegenüber etwa 240 kg in der Dokumentation sowie
abweichende Maße und Gelenkzahlen bleiben sichtbar. 16 kg gelten kombiniert für
beide Arme, nicht je Arm; die chinesische Unterlage nennt 8 kg je Arm.
Zwei Stunden Laden gelten für 0–80 Prozent. 880/895 mm Wendekreisdurchmesser werden
nicht als Wenderadius ausgegeben; maximale Greifhöhe wird nicht als Hubhöhe
übernommen. Lite erhält keine GRW-Nutzlast oder Gesamtgelenkzahl. Nano ist eine
200-g-Tischplattform mit drei Kopfachsen; ASR/TTS/LLM/VLM gehören zur externen
Kundenplattform. Reha-Trainingsraum, Patientengewicht oder Übungskraft werden nicht
als Gelenkzahl, Robotertraglast oder belegter klinischer Nutzen ausgegeben.

57 gespeicherte Quellenkörper gehasht: 54 erfolgreiche Antworten und drei 404;
23 HTML, 19 gerenderte HTML, ein Binärkörper und 14 PDF-Körper mit zusammen
180 Seiten einschließlich doppelter Körper. 30 unterschiedliche öffentliche
JavaScript-Ressourcenkörper zusätzlich gehasht. 83 konkrete Quellenbeziehungen
geprüft: 35 HTML-Tabellenzeilen, neun benannte Textbezüge, 20 positionierte
PDF-Textregionen, neun begrenzte Reha-PDF-Abschnitte, neun positionierte OCR-Belege
und eine lokale OCR-Gegenprüfung im Handbuch. 27 verwendete Primär-URLs.
32 Seiten aus neun PDF-Körpern maschinell erkannt; sechs lokale OCR-Regionen
nachgeprüft. Keine manuelle Bildsichtprüfung. Mehrdeutige Zeichen wurden nicht
zu technischen Angaben erklärt. Alte leere SPA-Routen und falsch befüllte
Reha-Detailtexte wurden nicht als Produktbelege verwendet. Beide eigenen
Recherchebrowser wurden geschlossen. Zuvor blockierte Hosts wurden nicht erneut
angefragt; keine Formulare, Bestellungen oder Demoanfragen übermittelt.

18 gerenderte Modellseiten: 293 Felder, 99 Quellenmarkierungen, 158 ausgelassene
Leerfelder, 69 strukturierte technische Werte und 65 Merkmalsätze.
Firmenfokus und Exporte abgeglichen; acht ursprüngliche Modell-Exportziele mit
128 Feldvorkommen. Alle 362 früheren Modellprüfungen, 45 früheren Firmenfokusse,
1.809 übrigen Katalogzeilen und 1.961 ursprünglichen Quellenidentitäten erhalten.
Globaler Metadatenabgleich: 380 Modellseiten und 5.624 ausgewählte Felder.
Vergleichs-JSON 1417857 Byte; Katalogskript 1649124 Byte.

540 Unit-Tests in 42 Dateien und alle 94 Browserfälle bestanden: 42 Fourier,
34 PAL und 18 Vergleichsfälle, einschließlich 28 Axe-Prüfungen auf Desktop/Mobil
in Hell/Dunkel. Build: 2.876 Seiten, etwa 438 MB. Datenprüfung: null Fehler,
718 Hinweise, sieben mehr als zuvor; unbekannte Erscheinungsjahre bleiben offen.
Erneuter Import: null Ergänzungen. Geänderte Tests bestehen Lint/Format.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1.827 Modelle/Konfigurationen, 641 Herstellerschreibweisen,
1.035 Marken-/Firmenprofile, 711 datierte Merkmalsdatensätze (572 neue und
139 bestehende Modelle), 2.721 Aussagen, 1.118 Quellenreferenzen und 46 Firmenfokusse.
380 Modellprüfungen umfassen 5.624 Felder: 2.710 dokumentiert, 2.764 unbekannt,
141 widersprüchlich und neun Roadmap. Die gemeinsame Rechercheliste enthält
weiterhin 518 Ziele mit Merkmalsbelegen; 214 haben ausgewählte Feldprüfungen,
304 benötigen diese noch. Drei ursprüngliche Modellidentitäten, neun Listings
und alle 862 BuyAndRent-Detailinhalte bleiben offen. Exklusive USPs,
historische Vollständigkeit und Marktführerschaft sind nicht nachgewiesen.
Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Unitree-Konfigurationen und Lastgrenzen (Batch 64)

Sechs ausdrücklich benannte Konfigurationen ergänzt: A2-PRO, As2-W X, As2-W EDU,
R1 AIR, R1 EDU und H1-2. Zwölf bestehende Einträge korrigiert: A2, As2 AIR/PRO/X/EDU,
AS2-W, B2, B2-W, R1, H2, H2 EDU und H1. Keine Kategorienübertragung.
18 ausgewählte Modellprüfungen umfassen 259 Felder: 160 dokumentiert und
99 unbekannt. Ein Herstellerfokus ergänzt. 1.815 übrige Katalogzeilen,
380 frühere Modellprüfungen, 46 Firmenfokusse und 1.961 Quellenidentitäten erhalten.
Frühere Erscheinungsjahre, Bilder und Videos liegen außerhalb dieser Feldprüfung.

A2: etwa 42 kg einschließlich Akku, 35 kg ohne Akku; die Standardspalte nennt
nur einen LiDAR, A2-PRO zwei. PRO nennt IP56–IP67, ausdrücklich IP67 für
Kernkomponenten; daraus folgt keine pauschale IP67-Gesamtroboterfreigabe.
25 kg Gehbelastung, ideale 35 kg und 100 kg Standlast sind getrennt.
30 cm Treppenstufe ist nicht die separate 0,5–1-m-Kletterhöhe. Hot-Swap bedeutet
nicht unbegrenzte Laufzeit pro Akkuladung.

As2 AIR: 65 N·m statt generischer 95 N·m, 10 kg Gehbelastung, etwa zwei Stunden
unbelastet, mehr als 1,5 Stunden bei 10 kg. Kein IP-Wert in der AIR-Spalte;
der generische IP54-Text wird nicht übertragen. PRO: 75 N·m, 13 kg Gehbelastung.
X/EDU: 95 N·m, 15 kg. Nur X/EDU bieten Sekundärentwicklung. AIR hat 8000 mAh
und Unitree L2, die anderen Spalten 15000 mAh und industriellen LiDAR. Ein
Ladedock ist nur für EDU gelistet. GPS/4G sind standardmäßig deaktiviert und
benötigen Benutzerfreigabe; ihre Existenz ist kein uneingeschränkter Betriebsnachweis.

As2-W: 16 Gelenkmotoren, etwa 25 kg einschließlich Akku, IP54. Kontinuierliche
30-cm-Treppen sind von 0,4–0,8 m maximaler Kletterhöhe getrennt; der 80-cm-Slogan
wird nicht als durchgängige Treppenspezifikation verwendet. Standlast 150 kg
ist keine Gehtraglast; diese beträgt etwa 16 kg. X und EDU unterstützen
Sekundärentwicklung, Dock und zusätzliche Rechenmodule sind nur bei EDU gelistet.
Der widersprüchliche Radiusdruck in der Reifentabelle wird nicht als Wenderadius
übernommen; unqualifizierte Geschwindigkeitswerbung ersetzt keine Messbedingungen.

B2: unbelegte 17.000 USD entfernt. >6 m/s gelten für besondere Konfigurationen
mit praktischer Geschwindigkeitsbegrenzung. Vier bis sechs Stunden allgemeine
Laufzeit, >5 Stunden unbelastetes Gehen und >4 Stunden mit 20 kg Last bleiben
getrennt. Radumrüstung und autonomes Laden sind Optionen. B2-W: etwa 85 kg
mit Akku statt 75 kg; eigene Herstelleradresse. 15 km/h und 25 km mit 40 kg
Last sind ausdrücklich besondere Konfigurationen. 30 km unbelastete Reichweite
werden nicht in Betriebsstunden umgerechnet; Akkudauer und Ladezeit bleiben leer.

R1 AIR: 20 Gelenke, etwa 27 kg mit Akku, Monokularkamera, 4900 USD ohne Steuern
und Versand. R1: 26 Gelenke, etwa 29 kg, Binokularkamera und 5900 USD. Nur EDU
listet Sekundärentwicklung, optionale Hände und zusätzliche Rechenmodule;
26–40 Gelenke bleiben konfigurationsabhängig. Die englische Tabellenzeile
„Maximum Torque of Arm Joint“ nennt etwa 2 kg und verweist auf eine Arm-Last-
Fußnote. Diese Einheiten-/Beschriftungsunklarheit wird nicht stillschweigend
in eine gesicherte Nutzlast oder ein Drehmoment umgewandelt.

H2: Tabellenmaße 1820 × 456 × 218 mm; etwa 70 kg mit Akku. Armnennlast etwa
7 kg, Spitzenlast etwa 15 kg; keine Gesamtkörper- oder verdoppelte Bimanuallast.
Standard nennt Core i5 und keine Zusatzmodule; EDU zusätzlich Core i7 und
wählbare Module wie Thor. Generische 2070 TOPS und ältere „3× Orin NX“-Prosa
begründen keine überall enthaltene Konfiguration. H1: etwa 47 kg Gesamtmasse,
unbelegte 90.000 USD, 30 kg Traglast und zwei Stunden Akku entfernt. 864 Wh
sind keine Akkudauer. 3,3 m/s und potenzielle >5 m/s sind getrennt. H1-2:
etwa 70 kg, 27 Gelenke, <2 m/s, 7 kg Armnennlast und 21 kg Spitzenlast.
H1-Gelenkzahlen werden nicht aus Gliedmaßenzahlen zu einer unbekannten
Gesamtzahl zusammengerechnet.

25 öffentliche HTML-Quellenkörper gespeichert, alle HTTP 200, gehasht und
Text reproduziert. Acht benannte Vergleichstabellen mit 239 Zeilen geprüft;
258 konkrete Quellenbeziehungen einschließlich 17 Fußnoten-/Textbezügen und
zweier variantengenauer Preiszeilen. Keine Bildsichtprüfung, Bestellungen,
Formulare oder Zugriffe auf früher blockierte Anbieter.
15 weitere Portfolioquellen sind enthalten: eine Firmenseite sowie 14 Produkt-/
Anwendungsreferenzen, die noch eine Modell-/Konfigurationsentscheidung benötigen.
Dazu gehören A2-W, H2-X, H2-D, R1-D, G1-D, G1-Comp, G1-Boxing, B2-Ex, G1+,
R1-7a, D1-T, Z1, AlienGo und D2. Sie sind in `portfolio-decisions.json`
mit Snapshot und Prüfbedarf gespeichert und werden in diesem Durchgang
nicht als zusätzliche Robotermodelle gezählt. Insbesondere benannte Arme,
Systeme, Konfigurationen und Anwendungen dürfen nicht pauschal gleichgesetzt werden.

18 gerenderte Modellseiten: 259 Felder, 139 Quellenmarkierungen, 84 ausgelassene
Leerfelder, 114 strukturierte technische Werte und 72 Merkmalsätze.
15 Modell-Exportziele mit 213 Feldvorkommen sowie Firmenfokus und Gesamtexporte
abgeglichen. Globaler Metadatenabgleich: 398 Modellseiten, 5883 ausgewählte Felder,
2963 sichtbare technische Werte samt Quellenstatus, 2505 ausgelassene Leer-/NA-Felder
und 25 zuvor belegte Startjahre. Drei veröffentlichte USD-Preise haben strukturierte
Offers; 15 unbekannte Preise erzeugen keine. Die Preise behalten den Ausschluss
von Steuern/Versand und sind keine Bestands- oder regionalen Lieferzusagen.
Vergleichs-JSON 1475471 Byte, Katalogskript 1657783 Byte.

556 Unit-Tests in 43 Dateien und alle 80 Browserfälle bestanden: 42 neue Unitree-,
20 frühere G1/Go2- und 18 Vergleichsfälle, einschließlich 32 Axe-Prüfungen.
Build: 2882 Seiten, etwa 439 MB. Datenprüfung: null Fehler und 724 Hinweise,
sechs zusätzliche nicht belegte Startjahre der Ergänzungen. Lint/Format der
geänderten Tests bestanden; erneuter Import null Ergänzungen. Eigene
Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1833 Modelle/Konfigurationen, 641 Herstellerschreibweisen,
1035 Marken-/Firmenprofile, 720 datierte Merkmalsdatensätze (578 neue und
142 bestehende Modelle), 2766 Aussagen, 1127 Quellenreferenzen und 47 Firmenfokusse.
398 ausgewählte Modellprüfungen umfassen 5883 Felder: 2870 dokumentiert,
2863 unbekannt, 141 widersprüchlich und neun Roadmap. Von 518 ursprünglichen
Referenzzielen haben 223 ausgewählte Feldprüfungen, 295 benötigen diese noch.
Die 14 neuen Hersteller-Portfolioreferenzen werden getrennt geführt.
Drei ursprüngliche Modellidentitäten, neun Listings und 862 BuyAndRent-
Detailinhalte bleiben offen. Vollständigkeit, exklusive USPs, unabhängige
Leistung und Marktführerschaft sind nicht nachgewiesen. Änderungen lokal;
kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Unitree-Portfolio, Arme und mobile Systeme (Batch 65)

Alle 14 im vorherigen Durchgang gesicherten Produkt-/Anwendungsreferenzen haben
eine abgegrenzte Entscheidung. 26 benannte Modelle/Konfigurationen ergänzt:
A2-W/PRO, H2-X/EDU, H2-A Standard, H2-D Standard/Flagship, R1-A5/A7 und
R1-A5-D/A7-D, G1-D Standard/Ultimate, G1+/EDU, G1-Comp, B2-Ex Chassis/Inspection
Solution, AlienGo, R1-7a, D1, D1-T Standard/Full Edition, Z1 AIR/PRO und D2.
G1-Boxing ist ein Anwendungskontext am bestehenden G1, kein weiterer Hardwaretyp.
26 ausgewählte Modellprüfungen mit 409 Feldern: 206 dokumentiert, 203 unbekannt.
Alle 1833 vorherigen CSV-Zeilen und 398 vorherigen ausgewählten Modellprüfungen
unverändert; 719 frühere Merkmalsdatensätze unverändert, G1 um Kontext und Quelle
ergänzt. Ein Firmenfokus erweitert, 46 weitere unverändert. 1961 ursprüngliche
Quellenidentitäten erhalten. Unitree umfasst jetzt 58 Katalogeinträge; sechs ältere
Komponenten-/Legacy-Einträge sind weiterhin außerhalb der ausgewählten Feldprüfungen.

A2-W wiegt etwa 52 kg mit und 45 kg ohne Akku; 16 Motoren. Standard nennt einen,
PRO zwei LiDAR. PRO IP56–IP67 mit IP67 für Kernkomponenten ist keine einheitliche
Gesamtroboter-IP67-Freigabe. 25 kg Gehbelastung, ideale 35 kg und 100 kg Standlast
bleiben getrennt. Mehr als 3,5 Stunden unbelastet und mehr als 1,5 Stunden mit
25 kg sind Herstellerbedingungen; 30-cm-Treppen und 0,5–1 m Klettern verschieden.

H2-X: 65+ kg, 31 Körpergelenke, etwa 7 kg Nenn-/15 kg Spitzenlast pro Arm.
Die Herstellerseite nennt sowohl statische als auch gehende acht Stunden;
beides bleibt als ungemessene Herstellerangabe qualifiziert. Fünf Stunden des
optionalen Funkmikrofons sind keine Roboterlaufzeit, 7 A Ladestrom keine Ladezeit.
H2-X Standard 25400 USD ohne Steuer/Versand, EDU unbekannt. Optionale Thor-/AGX-
Module werden nicht zu einem überall enthaltenen Paket zusammengerechnet.

H2-A Standard ist eine feste Basis ohne gelistete Hubsäule oder angetriebenes
Fahrwerk; etwa 0,6 m Reichweite ohne geschickte Hände. H2-D Standard: 148 kg,
manuelles Fahrwerk und etwa 0,36 m Hub; direkter 7×24-Netzbetrieb liefert keine
Akkulaufzeit. Flagship: 120 kg, angetriebenes Fahrwerk, etwa 0,46 m Hub, 1,5 m/s
und etwa fünf Stunden Akku. 0,75 m Wendedurchmesser wird nicht Wenderadius;
2 m Arbeitsraum werden nicht Gabelhub. Arm-Nenn-/Spitzenlast bleibt pro Arm.

R1-A5/A7 sind feste Arme mit 11/13 kg einschließlich externer Stromversorgung;
die mobilen Varianten nennen 30/32 kg ohne daraus eine Akkuinklusion abzuleiten.
15/19 beziehungsweise 18/22 Gelenke schließen den Greifer ein. 2–4 kg Armlast
hängt von der Armstellung ab. 4290 USD ist ein Familien-Ab-Preis ohne exaktes
strukturiertes Angebot. Drei Fahrwerk-Freiheitsgrade bestimmen keinen Antriebstyp.

G1-D Standard/Ultimate: 17/19 Gelenke ohne Endgeräte, etwa 90 kg, zwei/sechs
Stunden Akku. Nur Ultimate nennt 1,5 m/s und angetriebenes Differentialfahrwerk.
24/7 betrifft Software-Dienstverfügbarkeit und ist keine Akkuzusage. 3 kg ist
maximale Einzelarmlast. Höhenpositionen werden nicht als belegter Hub verrechnet.
G1+ Standard/EDU: 25 beziehungsweise 25–45 Gelenke, 3/4 kg Armlast, 35/35+ kg.
0,45 m Armspanne ist keine sichere Armreichweite. Standardpreis 15000 USD ohne
Steuern/Versand, EDU unbekannt. G1-Comp-Optionen und Rechenmodule bleiben wählbar;
G1-Boxing-Demonstrationen begründen kein enthaltenes Boxpaket für jeden Standard-G1.

B2-Ex Chassis/Inspection: 130/170 kg, 45°/30°, sieben/vier Stunden unter den
jeweiligen Herstellerbedingungen. Chassis: 40 kg Gehlast und separate 70 kg
Maximalangabe ohne bekannten Betriebsmodus. Inspection-Testlast von 40 kg plus
etwa 80 W externer Last ist keine freie zusätzliche Nutzlast; diese bleibt leer.
Ex db mb IIB T4 Gb und Ex db eb ib mb IIB T4 Gb sind Herstellerkennzeichnungen,
kein unabhängig geprüftes Zertifikat. IP66 bleibt als generische Familienangabe
qualifiziert. AlienGo: 21,5 ± 1 kg ohne Akku; 13 kg Last ohne Betriebsmodus,
2,5–4,6 Stunden ohne veröffentlichte Bedingungen. Schutzmodus ist kein IP-Wert.

R1-7a: sieben Achsen, 2 kg, 650 mm einschließlich Hand; 1650 USD als Ab-Preis,
Masse unbekannt und begrenzte Steifigkeit/Kontrolloptionen sichtbar. D1 ist der
Einzelarm: 2,37 kg, 500 g Nutzlast, sechs Achsen plus Greifer. D1-T Standard/Full
sind Zwei-/Vierarm-Kits; ihre Gesamtmasse, Nutzlast und Gelenkzahl bleiben leer.
Unter 8500/16000 USD sind Preisobergrenzen ohne exakte strukturierte Offers.
Z1 AIR/PRO: 4,3/4,5 kg und 2/≥3 kg Last. 405 g beziehungsweise 33 N·m beziehen
sich auf eine Motorkomponente; 500 W liefert keine Akkulaufzeit. D2: netto
5,9 kg, sieben Achsen plus Greifer; 3 kg Tabellenlast und maximal 5 kg Übersicht
behalten ihre Bedingungen. 633 mm Armlänge sind nicht 780 mm Greiferradius.
As2 trägt laut Hersteller nur einen Arm; zwei Arme auf A2 schließen Hochgeschwindigkeits-
laufen aus. 60 W typisch/870 W Spitze werden nicht in Stunden umgerechnet.

Quellen: 14 am selben Tag gespeicherte Herstellerkörper aus Batch 64 bytegleich
wiederverwendet; ihre damals gesicherten HTTP-Status sind jeweils 200. Keine neuen
Quellsnapshots angefordert; ein gehosteter Web-Gegencheck. Hash und Text reproduziert,
13 benannte Tabellen mit 326 Zeilen und 362 konkrete Quellenbezüge geprüft.
Keine unabhängige Zertifikatsprüfung, Bildsichtprüfung oder Bestandsprüfung.
Keine Formulare und keine Wiederholung früher blockierter Anbieterzugriffe.

26 gerenderte Modellseiten: 409 Felder, 178 Quellenmarkierungen, 179 ausgelassene
Leerfelder, 136 strukturierte technische Werte und 102 Merkmalsätze geprüft;
zusätzlich bestehender G1-Boxing-Abschnitt und Firmenfokus. Diese 26 Ergänzungen
sind außerhalb der ursprünglichen Modellnennungen und erzeugen deshalb keine
zusätzlichen Modell-Exporttreffer. Gesamtexporte: 591 Firmen, 406 Modellnennungen,
862 Listings, 132 Beschreibungsentscheidungen und 518 Rechercheziele erhalten.
Global: 424 Modellseiten, 6292 Felder, 3141 sichtbare technische Werte samt Belegen,
2684 ausgelassene Leer-/NA-Felder und 25 bereits belegte Startjahre abgeglichen.
Zwei exakte veröffentlichte USD-Preise erzeugen Offers, 24 unbekannte Preise keine.
Vergleichs-JSON 1564511 Byte; Katalogskript 1685614 Byte.

574 Unit-Tests in 44 Dateien und 104 Browserfälle bestanden: 44 neue Portfolio-,
42 frühere Plattform- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2908 Seiten, etwa 443 MB. Datenprüfung: null Fehler und 750 Hinweise,
26 zusätzliche unbekannte Erscheinungsjahre. Lint/Format bestanden; erneuter
Import null Ergänzungen. Eigene Testbrowser, Vorschau und Hilfsprozesse beendet;
Port 4321 frei und Ressourcen anderer Aufgaben erhalten.

Gesamt: 1859 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
746 datierte Merkmalsdatensätze (604 neue/142 bestehende Modelle), 2869 Aussagen,
1154 Quellenreferenzen und 47 Firmenfokusse. 424 ausgewählte Prüfungen umfassen
6292 Felder: 3076 dokumentiert, 3066 unbekannt, 141 widersprüchlich, neun Roadmap.
Von den ursprünglichen 518 Referenzzielen haben weiterhin 223 ausgewählte
Feldprüfungen; 295 benötigen diese noch. Die 14 Unitree-Portfolioreferenzen sind
jetzt entschieden und keine offene Warteschlange mehr. Drei ursprüngliche
Modellidentitäten, neun Listings und 862 BuyAndRent-Detailinhalte bleiben offen.
Vollständigkeit, exklusive USPs und Marktführerschaft sind nicht belegt.
Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Carbon Robotics: Anbaugeräte, Demonstrator und Traktorgrenzen (Batch 66)

Sechs bestehende Modelle technisch geprüft: LaserWeeder und LaserWeeder G2
200/300/400/600/1200. Das vom Hersteller ausdrücklich benannte „First Autonomous
LaserWeeder Unit“ ergänzt, eingeführt im März 2021 und nur für Felddemonstrationen,
nicht zum Verkauf. Es bleibt vom kommerziellen Traktoranbaugerät aus Februar 2022
getrennt. Sieben Prüfungen mit 119 Feldern: 42 dokumentiert, 77 unbekannt.
Ein Firmenfokus ergänzt; alle 47 bisherigen Firmenfokusse und 424 bisherigen
Modellprüfungen unverändert. Die 1853 übrigen alten Katalogzeilen behalten ihre
Werte; zwei optionale kommerzielle CSV-Spalten sind dort leer. Keine Kategorien-
übertragung; 1961 ursprüngliche Quellenidentitäten und alle Exportzeilen erhalten.

Die sechs kommerziellen Anbaugeräte bekommen belegte Behandlungskapazität in
ha/h und ac/h, sichtbar in Detailtabelle, strukturierten Eigenschaften und Vergleich.
LaserWeeder: 0,20–0,61 ha/h. G2 200: 0,16–0,28; 300: 0,30–0,61; 400: 0,32–0,65;
600: 0,61–1,21; 1200: 1,21–2,43 ha/h. Alle Werte sind Herstellerangaben unter
nicht vollständig dokumentierten Feldbedingungen. Unkrautschüsse pro Minute
werden weder Fläche pro Stunde noch Fahrgeschwindigkeit. Traktor-Mindesthubkraft
wird nicht Robotertraglast: G2 300 wiegt 2540 kg, fordert aber 3600 kg Hubkraft;
G2 1200 wiegt 8165 kg und fordert 8618 kg Hubkraft. Laser-/Modul-/Kamerazahlen
sind keine Gelenk-Freiheitsgrade.

G2 1200 verlangt hinteren PTO-Generator und IVT am 8R-Traktor; die anderen G2-
Spalten verlangen vorderen PTO-Generator und nennen eigene Motor-/PTO-Grenzen.
Ein nicht genannter Mindest-PTO-Wert des 1200 wird nicht aus anderen Modellen
übernommen. Der kommerzielle LaserWeeder nutzt 30 × 150 W Diodenlaser und
42 Kameras. Der autonome Demonstrator hat acht 150-W-CO2-Laser, zwölf Kameras,
74-hp-Cummins-Diesel und vier hydraulische Fahrmotoren. 75 Gallonen Tankkapazität
liefern keine Betriebsstunden; seine 80-Zoll-Spurweite ist keine Arbeitsbreite.

Die Quellen drucken nominell „20 ft / 6.01 m“ und separat 609 cm Gesamtbreite.
Die G2-Familienseite druckt „21 inches (61 cm)“ pro Modul. Diese Einheiten stimmen
nicht überein. Weder Rahmenbreite, ein Modulmaß noch verstellbare Reihen-/Spurweite
belegt die gesamte Behandlungsbreite; das Feld bleibt deshalb bei allen sieben
Einträgen leer, die Diskrepanzen stehen in Merkmalsätzen und Feldnotizen.
Eine zunächst zugeordnete nominale Breite wurde vor dem abschließenden Build
wegen dieser Bedeutungsgrenze zurückgenommen. Kein zusätzliches technisches
Konfliktfeld behauptet, eine belegte Arbeitsbreite zu enthalten.

24/7 bedeutet Software-/Fernunterstützung, nicht Akkulaufzeit. Kühlung und
versiegelte Module liefern keinen IP-Wert. Zielgenauigkeit unter einem Millimeter,
bis zu 99 % Unkrautvernichtung sowie Ertrags-/Kosten-/Amortisationswerte bleiben
zugeordnete Hersteller-/Fallbehauptungen, keine garantierten Betriebsergebnisse
oder Navigationsgenauigkeit. Alle Preise bleiben unbekannt und erzeugen keine
strukturierten Kaufangebote. G2-Varianten erhalten ohne Einzelmodellbeleg kein
Erscheinungsjahr aus der Familiennavigation.

Carbon ATK leitet auf Carbon Autonomy weiter: Nachrüstsatz für Deere 6R/8R/8RX/8RT
ab 2019, mit Kamera/Radar/LiDAR, menschlicher Fernüberwachung und manueller
Übernahme. Früher Zugang und anfänglich bestimmte US-Regionen bleiben sichtbar.
Der Satz ist kein zusätzliches komplettes Traktormodell und kein impliziter
Lieferbestandteil jedes LaserWeeders. Carbon AI, Large Plant Model, Plant Profiles,
Ops Center, Companion und iPad-App sind Software-/Modellfunktionen, keine weiteren
Roboterkarten. Das Firmenprofil dokumentiert diese Unterschiede mit Quellen.

Elf neue öffentliche HTML-Körper gespeichert, alle HTTP 200; Hash und Text
reproduziert. 33 ausdrücklich zugeordnete Spezifikationsabschnitte mit 151 Zeilen
und insgesamt 177 Quellenbezüge geprüft. Die beiden Unit-Specs-Blöcke derselben
LaserWeeder-Seite bleiben unter den jeweiligen kommerziellen/Demo-Überschriften.
26 Felder haben zusätzliche konkrete Abschnittszuordnung; Masse, Maßzahlen,
Flächenraten und PTO-Seite wurden gegen die passenden Blöcke geprüft.
Keine Formulare, Bildsichtprüfung, unabhängigen Feldversuche oder Wiederholung
früher gesperrter Anbieterzugriffe. Intuitive wurde wegen der dokumentierten
Sperrseiten nicht erneut abgerufen; der nächste substanzielle technische Review
ging deshalb an die sechs Carbon-Referenzziele.

Gerenderte Prüfung: sieben Seiten, 119 Felder, 35 Quellenmarkierungen,
70 ausgelassene Leerfelder, 26 strukturierte Eigenschaften, 45 Merkmalsätze und
ein Firmenfokus. Sieben unbekannte Preise ohne Offers. Der ursprüngliche
Modellnennungs-Export enthält einen LaserWeeder-Treffer mit 17 Feldern; die
gemeinsame Recherchewarteschlange enthält alle sechs Referenzmodelle mit
102 Feldern. Die zusätzlichen G2-Zuordnungen stammen aus geprüfter Firmen-
beschreibungsreferenz und sind keine fünf weiteren ursprünglichen Modellnennungen.
Globaler Metadatenabgleich: 431 Seiten und 6411 Felder, davon
3176 sichtbare technische Werte mit Quellen,
2754 ausgelassene Leer-/NA-Felder und 27 belegte Startjahre.
Vergleichs-JSON 1591095 Byte, Katalogskript 1700792 Byte.

585 Unit-Tests in 45 Dateien sowie insgesamt 96 verschiedene Browserfälle bestanden: 34 Carbon-,
44 frühere Unitree-Portfolio- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Im ersten Browserlauf bestanden 94 Fälle; zwei deutsche Vergleichserwartungen
verwendeten fälschlich Dezimalpunkte. Nach Korrektur auf die tatsächlich korrekt
lokalisierten Dezimalkommas bestehen beide gezielt wiederholten Fälle. Die
Produktdarstellung benötigte dafür keine Änderung; kein vollständiger zweiter
96-Fälle-Lauf behauptet.
Die erste Unit-Ausführung deckte einen falschen Testzugriff auf die Suchfunktion
auf; der Test verwendet nun deren tatsächlichen Rückgabetyp und der vollständige
abschließende Unit-Lauf besteht. Build: 2909 Seiten, etwa 444 MB. Datenprüfung:
null Fehler und unverändert 750 Hinweise. Lint/Format bestanden; erneuter Import
null Ergänzungen. Eigene Testbrowser, Vorschau und Hilfsprozesse beendet;
Port 4321 frei; andere Aufgabenressourcen erhalten. Änderungen bleiben lokal,
ohne Commit, Push oder Deployment.

Gesamt: 1860 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
747 datierte Merkmalsdatensätze (605 neue/142 bestehende Modelle), 2896 Aussagen,
1155 Quellenreferenzen und 48 Firmenfokusse. 431 ausgewählte Modellprüfungen
umfassen 6411 Felder: 3118 dokumentiert, 3143 unbekannt, 141 widersprüchlich,
neun Roadmap. Von 518 ursprünglichen Referenzzielen haben jetzt 229 ausgewählte
Feldprüfungen; die offene Zahl fällt von 295 auf 289. Drei Modellidentitäten,
neun Listings und 862 BuyAndRent-Detailinhalte bleiben offen. Vollständigkeit,
exklusive Vorteile, unabhängige Leistungswerte und Marktführerschaft sind nicht belegt.


## Ergänzung vom 2. November 2026 – FANUC CR/CRX, Lastmodi und Wiederholgenauigkeit (Batch 67)

Sechs bestehende CR-Arme geprüft: CR-4iA, CR-7iA, CR-7iA/L, CR-14iA/L, CR-15iA und
CR-35iB. Zwölf ausdrücklich benannte Konfigurationen ergänzt: CRX-3iA, -5iA, -10iA,
-10iA/L, -20iA/L, -30iA, -10iA/L Paint sowie Food-Ausführungen von -5iA, -10iA,
-10iA/L, -20iA/L und -30iA. 18 ausgewählte Prüfungen umfassen 288 Felder:
138 dokumentiert, 146 unbekannt, vier widersprüchlich. Ein Firmenfokus ergänzt.
Alle 431 alten Modellprüfungen, 48 alten Firmenfokusse und 1961 Quellenidentitäten
erhalten; 1854 übrige alte Katalogzeilen behalten ihre Werte. Die neue optionale
Arm-Spalte bleibt dort leer. Keine Kategorienübertragung.

Wiederholgenauigkeit des Arms ist als `armRepeatability` getrennt von absoluter
Positioniergenauigkeit und visueller Lokalisierung gespeichert. Detailtabelle,
Product-Eigenschaften und Vergleich zeigen Herstellerwert, ISO-9283-Bezug,
Prüfstatus und Quellenhinweis. Englisch/Deutsch sind beschriftet; andere vorhandene
Oberflächensprachen nutzen die bestehende englische Rückfallregel. Keine Werte
bei älteren Armen ohne gesonderte Prüfung nachgetragen. Vier Quelldateien wurden
um genau fünf Feld-/Übersetzungseinträge erweitert; vorherige Änderungen erhalten.

CR-14iA/L: 14 kg Maximal-Wristlast, aber 911 mm Reichweite nur unter 12 kg;
ab einschließlich 12 kg 820 mm. Der vermutete US-Modellpfad leitet auf die Familie
um; eine weitere vermutete EU-Route liefert 404. Beide sind keine Modellbelege.
CR-35iB: 35 kg bei 1831 mm; optionale 50 kg schränken den Raum auf 1643 mm ein.
Der 300-mm/s-Kollaborationsmodus und bis zu 750 mm/s unter Anwendungseinschätzung
werden nicht zu einer pauschal zulässigen Zellgeschwindigkeit. CR-15iA nennt
800/1500 mm/s mit separat angeordnetem Sicherheitssensor für die höhere Angabe.
CR-7iA/L hat 1000 mm/s maximale kartesische Geschwindigkeit ohne belegten
separaten Kollaborations-/High-Speed-Wert; der 500-mm/s-Wert der Nachbarseite
wurde nicht übernommen. Körper-IP54 versus IP67 für Handgelenk/J3 bleibt getrennt.

Vier Konflikte sichtbar: CR-7iA hat 717 mm in Tabelle/Broschüre und 911 mm in
generischer Seitenprosa; CR-35iB wiegt 386 kg in Broschüren/Datenblatt gegenüber
375 kg auf der US-Seite; Paint hat 47 kg in der aktuellen EU-Tabelle gegenüber
40 kg auf der US-Seite; CRX-30iA nennt in der Broschüre 1756 mm bei 30 kg und
1889 mm bei 25 kg, während die US-Tabelle 1889 mm neben 30 kg unqualifiziert
aufführt. Keine stille Auswahl oder rechnerische Controller-Subtraktion.

Die aktuelle CRX-30iA-Tabelle nennt zusätzlich 40 kg mit nur nach unten gerichtetem
Handgelenkflansch. Ein zusätzlicher 1700-mm-Eintrag verweist auf Fußnote 8, die
ISO 9283 statt des Lastmodus beschreibt. Deshalb wird daraus keine unbelegte
40-kg/Reichweiten-Paarung. Die alte CRX-25iA-Route leitet aktuell auf CRX-30iA um;
das begründet keine zusätzliche neue Karte oder vollständig geprüfte historische
Hardwaregleichheit. CRX-3iA: 11 kg, 692 mm, 3 kg und 1200/2500 mm/s nach Modus.
CRX-20iA/L erbt keine High-Speed-Zahl, die seine eigene Spalte nicht nennt.

Food-Seiten nennen fünf konkrete Ausführungen, IP67, korrosionsbeständige
Handgelenkoberfläche, geschlossene Kabelführung und NSF-H1-Fett für unbeabsichtigten
Lebensmittelkontakt. Daraus folgen keine universelle direkte Lebensmittel-
Kontaktzulassung, Sterilisation oder unabhängig geprüfte Hygienezertifizierung.
Food-Masse, Achszahl, Geschwindigkeit und Wiederholgenauigkeit bleiben leer;
Standardarmwerte sind nicht automatisch vollständige Ausstattungsdaten. Food
-30iA bleibt bei seinen 25/30-kg-Angaben ohne Übernahme des 40-kg-Modus.
Paint bleibt eine benannte Lackier-/Beschichtungsvariante; keine unabhängige
Explosionsschutz-Freigabe geprüft. Endwerkzeuge, Kameras, Kraftsensoren und
Controller bleiben paketabhängig. Acht Jahre Wartungspositionierung sind keine
Akkudauer, Garantiezeit oder gesicherte Verfügbarkeit. Unbelegte Preise,
Erscheinungsjahre und vollständige Armabmessungen bleiben leer. US-Seiten von
CR-4iA/-7iA/-7iA/L nennen nicht mehr produzierte Legacy-Produkte; das ist keine
weltweite Stilllegungsfrist für installierte Systeme.

27 neue Quellenkörper gespeichert: 26 HTTP 200, eine 404; 20 HTML und sieben PDF.
Hash und extrahierter Text reproduziert. Zwei Tabellen auf der jeweils elften
Broschürenseite mit 14 Modellspalten, 14 Headerpositionen und 112 einzelnen
Koordinatenzellen geprüft; acht US-DL-Tabellen und Fußnoten ergeben insgesamt
205 konkrete Quellenbezüge. PDF-Texte und Positionen wurden geprüft, keine
visuelle PDF-/Bildprüfung oder unabhängige Leistung-/Zertifikatsprüfung behauptet.
Die 2024/2026-Ordnerdaten sind keine Modell-Erscheinungsjahre. Keine Formulare,
Bestellungen oder erneuten Zugriffe auf zuvor gesperrte Anbieter.

18 gerenderte Modellseiten: 288 Felder, 124 Quellenmarkierungen, 128 ausgelassene
Leerfelder, 106 strukturierte Eigenschaften, 85 Merkmalsätze und ein Firmenfokus
abgeglichen. Ein ursprünglicher Familien-Export trifft sechs CR-Ziele mit 96
Feldvorkommen; alle sechs Rechercheziele entsprechen dem Export. 18 unbekannte
Preise erzeugen keine Offers. Globaler Abgleich: 449 Modellseiten und 6699 Felder,
3300 sichtbare technische Werte mit Quellen,
2882 ausgelassene Leer-/NA-Felder und 27 belegte Startjahre.
Vergleichs-JSON 1662629 Byte; Katalogskript 1717075 Byte.

597 Unit-Tests in 46 Dateien und 100 Browserfälle bestanden: 48 FANUC-,
34 Carbon- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2921 Seiten, etwa 445 MB. Datenprüfung: null Fehler, 762 Hinweise;
zwölf zusätzliche unbekannte Erscheinungsjahre. Lint/Format der geänderten
Quelldateien und Tests bestanden; erneuter Import null Ergänzungen. Eigene
Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei, Ressourcen
anderer Aufgaben erhalten. Änderungen lokal; kein Commit, Push oder Deployment.

Gesamt: 1872 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
759 datierte Merkmalsdatensätze (617 neue/142 bestehende Modelle), 2963 Aussagen,
1186 Quellenreferenzen und 49 Firmenfokusse. 449 ausgewählte Modellprüfungen mit
6699 Feldern: 3256 dokumentiert, 3289 unbekannt, 145 widersprüchlich, neun Roadmap.
Von 518 ursprünglichen Referenzzielen haben jetzt 235 ausgewählte Feldprüfungen;
die offene Zahl sinkt von 289 auf 283. Drei Modellidentitäten, neun Listings und
862 BuyAndRent-Detailinhalte bleiben offen. Andere industrielle/historische
FANUC-Familien sind nicht vollständig geprüft. Vollständigkeit, exklusive USPs,
unabhängige Leistung und Marktführerschaft bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Smart Robotics, Systemgrenzen und Durchsatz (Batch 68)

Sechs bestehende Systeme/Konfigurationen anhand von neun frisch gespeicherten
Herstellerseiten geprüft: Smart Palletizer Essential, Advanced und Premium,
Smart Item Picker, Smart Depalletizer und Smart Mixed Case Palletizer.
96 ausgewählte Felder: 21 dokumentiert, 73 unbekannt, zwei widersprüchlich.
Ein Firmenfokus ergänzt; keine neue Modellkarte. Homepage, Produktnavigation,
Lagerautomatisierungs- und Palettierübersicht nennen die vier bestehenden Systeme.
Der Footer-Link parcel-picking leitet auf Smart Depalletizer um und begründet
keinen weiteren Roboter. Alle 1961 Quellenidentitäten, 1866 übrigen Katalogzeilen,
449 bisherigen Modellprüfungen und 49 Firmenfokusse erhalten.

Die gespeicherte HTML-Vergleichsmatrix wurde nach benannten Spalten und zehn
Zellen je Spalte abgeglichen. Fußflächen: 2,4 × 2,3 m / 2,4 × 2,75 m /
2,4 × 3,5 m; jeweils 3 m maximale Stapelhöhe. Produkte/Stapelmuster: 10 / 20 /
unbegrenzt. Essential ohne Multi-picks und offene Kartons; Advanced mit Multi-picks,
aber ohne offene Kartons; Premium mit beiden Funktionen. Die Check-/Disable-
Dateinamen in den HTML-Zellen liefern 15 Funktionszuordnungen; keine visuelle
Bildprüfung behauptet. Die Matrix nennt Zwischenlagen, OEE-Dashboard und
Installation in einem halben Tag; die Hardware-FAQ nennt Zwischenlageneinheit
und vertikalen Lift optional. Funktionsversprechen und endgültige Stückliste
bleiben deshalb getrennt. Die familienweiten 1600 Kartons/h und 30 kg werden
keiner der drei Konfigurationen als exakter Wert zugeordnet. Partnerarme von
Universal Robots/Doosan und unterschiedliche Greifer ergeben keine pauschal
eingeschlossene Armmasse, Achszahl oder Greiferausstattung.

Durchsatz ist als `throughput` getrennt von linearer Geschwindigkeit gespeichert;
`stackingHeight` ist getrennt von Anlagenabmessungen, Reichweite und Gabelhubhöhe.
Detailseite, Product-Eigenschaften und Vergleich zeigen Werte, Status und Quellen.
Englisch/Deutsch beschriftet; bestehende englische Rückfallregel für andere
Oberflächensprachen. Vier Quelldateien um genau zehn Einträge ergänzt; frühere
Arm-Wiederholgenauigkeit erhalten. Die zwei optionalen kommerziellen CSV-Spalten
bleiben außerhalb dieser sechs Systeme leer.

Smart Item Picker: bis 1000 Items/h, Barcode und Wiegen, WCS/WMS-/AutoStore-/ASRS-/
AMR-/Fördertechnik-Integration. Die Formulierung oberhalb 5 kg ist keine maximale
5-kg-Traglast; obere Grenze unbekannt. Smart Depalletizer: bis 1000 Produkte/h,
KI-Saugkreiswahl ohne SKU-Teaching, einzelne/gemischte SKUs auf Paletten sowie
in Käfigen/Behältern und konfigurierbare Cobot-/Industriearmhardware.

Smart Mixed Case Palletizer: bis 500 Items/h und dynamische Platzierung ohne
vorberechnete Stapelsequenzen. Zwei Herstellerkonflikte sichtbar: Produkt-FAQ
bis 30 kg, Palettierübersicht 30 kg und darüber; Stapelhöhe bis 2 m in FAQ,
über 2 m in Feature-Text und Übersicht. Keine größere Angabe still ausgewählt,
keine gleichzeitige Erreichbarkeit von Last- und Durchsatzmaxima behauptet.
Herstellerangaben sind keine unabhängig gemessenen oder exklusiven USPs.
Preise, Anlagenmasse, Strom-/Akkulaufzeit, IP-Schutz und Erscheinungsjahre bleiben
unbekannt, wo die Quellen keine exakte Systemangabe liefern.

Quellenkörper: neun HTTP 200, Hash und extrahierter Text reproduziert; 20 begrenzte
Aussagen und drei benannte Konfigurationsspalten geprüft. Keine Formulare,
Bestellungen oder erneuten Zugriffe auf zuvor gesperrte Anbieter.
Sechs gerenderte Modellseiten mit 96 Feldern,
17 Quellenmarkierungen, 67 ausgelassenen
Leerfeldern und 11 strukturierten Eigenschaften
abgeglichen. 30 Merkmalsätze und ein Firmenfokus geprüft. Export und Recherchequeue
behalten alle sechs Ziele. Globaler Abgleich: 455 Seiten, 6795 Felder,
3317 sichtbare technische Werte mit Quellen,
2949 ausgelassene Leer-/NA-Felder und 27 belegte Startjahre.
Vergleichs-JSON 1684840 Byte; Katalogskript 1732641 Byte.

608 Unit-Tests in 47 Dateien und 106 Browserfälle bestanden: 40 Smart-Robotics-,
48 FANUC- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2921 Seiten, etwa 446 MB. Datenprüfung: null Fehler, 762 Hinweise,
unverändert zum Vorlauf. Lint/Format bestanden; erneuter Import null Ergänzungen.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei,
Ressourcen anderer Aufgaben erhalten. Änderungen lokal.

Gesamt: 1872 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
759 datierte Merkmalsdatensätze (617 neue/142 bestehende Modelle), 2975 Aussagen,
1187 Quellenreferenzen und 50 Firmenfokusse. 455 ausgewählte Modellprüfungen mit
6795 Feldern: 3277 dokumentiert, 3362 unbekannt, 147 widersprüchlich, neun Roadmap.
Von 518 ursprünglichen Referenzzielen haben 241 ausgewählte Feldprüfungen;
die offene Zahl sinkt von 283 auf 277. Drei Modellidentitäten, neun Listings und
862 BuyAndRent-Detailinhalte bleiben offen. Vollständigkeit, exklusive USPs,
unabhängige Leistung und Marktführerschaft bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Capra und Hypershell, Modellgrenzen und Preisangaben (Batch 69)

Fünf Capra- und fünf bestehende Hypershell-Modelle geprüft; drei ausdrücklich
benannte Hypershell-Modelle ergänzt: X Ultra, X Carbon und X Pro, jeweils getrennt
von den S-Varianten. 13 Prüfungen, 224 Felder: 86 dokumentiert, 138 unbekannt.
Zwei Firmenfokusse ergänzt. Alle 1961 Quellenidentitäten, 1862 übrigen alten
Katalogzeilen, 455 bisherigen Modellprüfungen und 50 Firmenfokusse erhalten.
Keine Kategorieübertragung. SmartFleet bleibt Software; Anwendungsfälle und die
nummerierte Halo Origin Edition ohne gesondert belegte Hardware werden nicht
als weitere Roboterkarten gezählt.

CAPRA200: 50 kg mit zwei Akkus, 1125 × 600 × 373 mm, 50 kg auf dem Chassis und
200 kg Zuglast, 6 km/h, 465 mm Wenderadius, bis 20 Stunden Betrieb abhängig von
Untergrund, Steigung und Nutzlast. Tabelle erlaubt bis vier Akkus; die Laufzeit
ist nicht ausdrücklich mit der gewogenen Zwei-Akku-Konfiguration gepaart.
CAPRA500: 73,5 kg ohne ausdrückliche Akku-Einschlussangabe, 1145 × 635 × 356 mm,
100 kg Chassislast und 500 kg Zuglast, 6 km/h, 480 mm Wenderadius, bis 15 Stunden
unter Last-/Streckenbedingungen. Beide: 60 Minuten drahtlos nur von 20 auf 80
Prozent, kein Volladeversprechen; IP65 Basisplattform, bis 50 Prozent Steigung
und 140 mm Stufe mit Geometrie-/Lastbedingungen. 50 Prozent sind keine 50 Grad.
Unter −10 °C ist ein zusätzliches Heizelement erforderlich. Tabellenwerte und
Fußnoten in zehn Zeilen mit zwei benannten Modellspalten geprüft; Flyertext
bestätigt die Trennung von Trag- und Zuglast. Keine visuelle PDF-Prüfung behauptet.

Carrier nennt 100 kg Oberdecklast und 500 kg beladenen Wagen. Die Hero-Zahl
500 kg wird nicht als 500 kg Chassislast übernommen. Konfigurierte Lösungen
Carrier/Scout/Urban behalten ihre Zehn-Stunden-Positionierung und erben keine
20-/15-Stunden-Dauer, Masse, Geschwindigkeit oder Abmessungen der Basisplattform.
Urban nennt zwei Stunden Laden ohne Start-/Endladezustand. Scout nennt
360-Grad-Überwachung, autonome Patrouillen, Fernüberwachung und manuelle
Übernahme. Urban arbeitet je nach Einsatz autonom oder teilautonom. IP- und
Sicherheitskomponentenbehauptungen zertifizieren keine beliebigen Aufbauten
oder öffentlichen Einsätze unabhängig.

Hypershell: X Ultra S und X Max S mit bis 1000 W, 22 Nm und unterstütztem Tempo
bis 25 km/h; X Pro S bis 800 W, 18 Nm und 20 km/h. Das sind Unterstützungswerte
für Träger, keine autonome Fahrgeschwindigkeit oder Frachttraglast. Ultra S
nennt bis 30 km je Akku und zwei enthaltene Akkus; kein garantiertes 60-km-Ziel
und keine Umrechnung in Akkustunden. Pro S nennt 17,5 km Standardreichweite;
Max S hat keine eigene belegte Kilometerangabe im geprüften Text. 1,8 kg sind
im Juni-Text speziell für Ultra S genannt, ohne geklärten Akku-Einschluss und
ohne Übernahme auf Max S/Pro S. Die neuen Felder `assistPower`, `assistancePace`
und `assistanceRange` erscheinen mit Quellenstatus in Detail, strukturierten
Product-Eigenschaften und Vergleich, mit Englisch/Deutsch und bestehendem
englischen Rückfall für andere UI-Sprachen. Andere Outdoor-Datensätze bleiben
in diesen optionalen Spalten leer.

Halo: vier aktive Hüft-/Kniegelenke, bis 1490 W Spitzenleistung, 2,6 kg genannte
Systemmasse, 370 g PocketVolt-Akku und bis 20 km je Akku. Akku-Einschluss in der
Systemmasse bleibt ungeklärt; keine Addition/Subtraktion geraten. Vier Motoren
sind keine vollständige mechanische Freiheitsgradzählung. Faltvolumen unter acht
Litern sind keine vollständigen Außenmaße; 85-Liter-Rucksackkompatibilität ist
keine Nutzlast. Ankündigung vom 3. September 2026: erste 200 Origin-Edition-Geräte
ab 2299 USD vorbestellbar, offizielle Verkäufe und gestaffelte Lieferungen für
November 2026 geplant. Diese Ankündigung bestätigt keine erfolgten Lieferungen
oder aktuellen Lagerbestand am 2. November. Die im Mai angekündigte S-Modell-
AI-Agent-Firmware bleibt ein Zukunftsplan. Herstellerberichtete SGS-/TÜV-Werte,
Ermüdungs- und Schutzvorteile sind keine unabhängig geprüften Gesundheits- oder
Verletzungspräventionswirkungen.

Der Juni-Portfolio-Text benennt X Ultra, X Carbon, X Pro und X Go mit damaligen
MSRP-Werten von 1999/1799/1199/999 USD. Die Juni-23-bis-30-Aktion ist abgelaufen.
Exakte Masse, Ausgangsleistung, Tempo, Reichweite, IP und Erstveröffentlichung
werden nicht aus dem speziell Ultra S betreffenden Absatz oder einer allgemeinen
X-Serienbehauptung übernommen. Die direkte Hypershell-Seite lieferte einmal HTTP
429; weitere Abrufe gestoppt. Drei frische herstellereigene Pressemitteilungen
über PRNewswire liefern datierte Belege, keine unabhängige Berichterstattung
oder vollständige aktuelle Shop-/Lieferprüfung.

Preisverarbeitung korrigiert: Betragsextraktion hängt keine Datumsziffern mehr an
den Geldbetrag an; zum Beispiel 1999 USD mit dem Datum 20. Mai 2026 sortiert als
1999. Preisbereiche nutzen die untere Grenze. Strukturierte exakte Offers nur für
unqualifizierte positive Beträge mit konsistenter Währung. Historische MSRP,
Vorbestellungs-Startpreise, Aktionen, Schätzungen, Bereiche und andere qualifizierte
Texte bleiben lesbarer Katalogtext. Globaler Abgleich aller 1875 Produktseiten:
352 unqualifizierte Offers erhalten,
1523 qualifizierte/unbekannte Preise ohne Offer,
18 ausdrücklich erkannte qualifizierte Preise und alle acht
Hypershell-Preise ohne exaktes Offer. Dies verifiziert keine aktuellen Verkäufer-
preise oder Lagerbestände des gesamten Altbestands.

Zwölf gespeicherte Quellenkörper: elf HTTP 200 und ein 429; zehn HTML, ein PDF,
eine Rate-Limit-Antwort. Hashes und extrahierter Text reproduziert, 51 begrenzte
Aussagen bzw. exakte Modellzellen geprüft. Keine Formulare/Bestellungen oder
Wiederholungsabrufe zuvor gesperrter Hosts. 13 gerenderte Modellseiten:
224 Felder, 65 Quellenmarkierungen,
133 ausgelassene Leerfelder, 48
strukturierte Eigenschaften und 58 Merkmalsätze. Zwei Firmenfokusse,
zehn ursprüngliche Modell-/Rechercheziele mit 170 Feldvorkommen und drei
Firmenbeschreibung-Ziele geprüft. Global: 468 geprüfte Modellseiten mit 7019
Feldern, 3382 sichtbare technische Werte mit Quellen,
3082 ausgelassene Leer-/NA-Felder und 31 belegte Startjahre.
Vergleichs-JSON 1739445 Byte; Katalogskript 1749655 Byte.

627 Unit-Tests in 48 Dateien und 106 Browserfälle bestanden: 48 Capra/Hypershell-,
40 Smart-Robotics- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2924 Seiten, etwa 446 MB. Datenprüfung: null Fehler, 765 Hinweise,
drei zusätzliche unbekannte Erscheinungsjahre der neuen alten X-Modelle.
Lint/Format bestanden; erneuter Import null Ergänzungen. Eigene Testbrowser,
Vorschau und Hilfsprozesse geschlossen; Port 4321 frei, andere Aufgaben erhalten.
Änderungen lokal; kein Deployment.

Gesamt: 1875 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
762 datierte Merkmalsdatensätze (620 neue/142 bestehende Modelle), 3004 Aussagen,
1194 Quellenreferenzen und 52 Firmenfokusse. 468 ausgewählte Modellprüfungen mit
7019 Feldern: 3363 dokumentiert, 3500 unbekannt, 147 widersprüchlich, neun Roadmap.
Von 518 ursprünglichen Referenzzielen haben 251 ausgewählte Feldprüfungen;
die offene Zahl sinkt von 277 auf 267. Drei Modellidentitäten, neun Listings und
862 BuyAndRent-Detailinhalte bleiben offen. Vollständigkeit, exklusive USPs,
unabhängige Leistung und Marktführerschaft bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Omron und ECOVACS, Varianten und Quellenkonflikte (Batch 70)

Zehn vorhandene Modelle geprüft und zwölf ausdrücklich benannte Hardware-/ESD-
Varianten ergänzt: LD-60 ESD, LD-90 ESD, LD-90x ESD, LD-250 ESD, OL-450S2,
OL-450S3, MD-650, MD-900, HD-1500 sowie GOAT A3000/A2000/O1000 LiDAR PRO.
22 Prüfungen mit 392 Feldern: 218 dokumentiert, 166 unbekannt, acht widersprüchlich.
Zwei Firmenfokusse ergänzt. Alle 1865 übrigen alten Katalogzeilen, 468 bisherigen
Modellprüfungen, 52 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten.
Keine Kategorieübertragung oder neue CSV-Spalte. Software, Mast-/Dock-/Pendant-
Optionen und GOAT-Zubehörpakete werden nicht als weitere Robotermodelle gezählt.
Die vorhandene OL-450S-Familie bleibt zusätzlich zu ihren benannten Varianten.

LD: Die ESD-Ausführungen stehen ausdrücklich in der Bestelltabelle mit eigenen
Bestellidentitäten; IEC 61340-5-1 bleibt eine Hersteller-Complianceangabe.
LD-60/90/90x einschließlich ESD: 62 kg mit Akku; LD-250/ESD: 148 kg mit Akku.
Der Akku muss separat bestellt werden: Masseneinschluss bedeutet keinen
Lieferumfang. LD-90x ist für Cart-Transporter-Anwendungen benannt. Laufzeiten
behalten Leer-/Volllastbezug. Alle LD-Ladezeiten von 2 h 10 min beziehen sich nur
auf 20–80 Prozent. LD-90/90x bleiben bei Nennlast auf ebenem Boden; die gemeinsame
PDF erlaubt die 4,8-Grad-/8,3-Prozent-Steigung nur bis 60 kg. LD-250 nennt maximal
1,7 Grad/3 Prozent. IP20 gilt für den Roboter, nicht andere Komponentenratings.

OL: Die Webseite druckt 1,2 mm/s; das gemeinsame S2/S3-Datenblatt nennt 1200 mm/s
vorwärts/seitwärts und 300 mm/s rückwärts. Der Einheitenkonflikt bleibt sichtbar
bei Familie und beiden Varianten. Plattenhöhe 108–308 mm ergibt 200 mm Hubweg;
308 mm sind keine Hubstrecke. S2: 771-mm-Platte, 188 kg ohne Mast/201 kg mit Mast;
S3: 851-mm-Platte, 192/205 kg, jeweils mit Akku. Kein einzelnes Familiengewicht
gewählt. 450 kg Hubkapazität, etwa elf Stunden leer/sieben Stunden voll, 25 Minuten
Laden nur 20–80 Prozent. Flache trockene Innenböden, keine Stufen; 10-mm-Spalten
nicht oberhalb 750 mm/s. 750-mm-Wenderadius und 685-mm-Schwenkradius sind getrennt.

MD/HD: 650/900/1500 kg Last; MD 220 kg ohne Akku/Zubehör, HD 506 kg mit Akku.
MD-900-Webspalte lässt Volllastlaufzeit aus; die gemeinsame PDF-Laufzeitzeile
deckt beide MD-Spalten ausdrücklich mit zehn Stunden leer/acht Stunden voll ab.
Kein Kopieren aus der Nachbar-Webspalte. HD hat 12,5/neun Stunden. Hilfsverbrauch
beeinflusst die Dauer. Laden 19,6 beziehungsweise 24 Minuten nur 20–80 Prozent;
eine Full-charge-Webüberschrift ändert den gedruckten Ladebereich nicht. MD-IP22
benötigt eingesetzte Top-Plate-Plugs, Ladepads bleiben IP10; Akku-IP33 ist nicht
Chassis-IP. Null Wenderadius bedeutet keinen verschwindenden Schwenkraum.

ECOVACS Commercial: K1-Webseite nennt 1,5 h Laden, Vergleichstabelle zwei Stunden.
700 m²/h Maximum und 1296 m²/h theoretische Kapazität tragen unterschiedliche
Bezeichnungen; beide Werte samt ungeklärtem Testbezug bleiben erhalten. 440 mm
Reinigungsbreite, 300 mm Walzenbreite und 420 mm Gehäusebreite sind verschiedene
Maße. Zehn Liter Staubbehälter werden kein Wassertank/Nutzlastwert. M1/M1 3D:
500-mm-Walze, 2160 m²/h theoretisch, 35/33 Liter Frisch-/Schmutzwasser, 2,5 h Laden
ohne Ladezustandsbereich. M1 3D: 126,5 kg und 1050 mm Höhe, M1: 125 kg/1012 mm.
3D-LiDAR wird nicht vom 3D-Modell auf die Standardausführung übertragen.

GOAT A3000: Verlinktes GPL11-Handbuch nennt 16,4 kg mit Akku und
680 × 460 × 342,5 mm. US-Tabellenhöhe 13,39 Zoll entspricht etwa 340,1 mm;
Abweichung bleibt gekennzeichnet. Mähen 118 Minuten von 100 auf 15 Prozent oder
80 Minuten von 85 auf 15 Prozent; kein pauschales Zwei-Stunden-Versprechen.
45 ± 5 Minuten Laden ohne genannte Ladezustände. 400 m²/h Labor-Mährate ist von
500 m² je zwei Stunden einschließlich Laden getrennt. 33 cm Schnittbreite,
IPX6 Mäher/IPX4 Station. US-Hauptprodukt: 2999,99 USD, ausverkauft, beobachtet am
2. November 2026. Der sichtbare 999,99-USD-Selektor gehört zum O1000 RTK.

GOAT PRO: A3000 PRO mit 7500 mAh/70 Minuten Laden, A2000 PRO 3000 mAh/50 Minuten,
O1000 PRO 5200 mAh/70 Minuten. A3000-PRO-Laufzeitzelle 160 hat keine Zeiteinheit;
kein 160-Minuten-Wert übernommen. Massenzelle 18.3KG unter lb-Überschrift bleibt
Einheitenkonflikt; Hero-Steigung 15 Grad widerspricht der 50-Prozent-/27-Grad-
Tabelle. A2000 PRO nennt 50 Minuten Mähen, O1000 PRO 90 Minuten. Mäher und
Trimmerbreiten, Maße mit/ohne Bürste, Arbeitsflächen-/Grenzsteigung und Station
bleiben getrennt. Regionale Hauptproduktpreise 2499,99/1999,99/1499,99 USD wurden
am 2. November als vorrätig angezeigt, nicht universell oder dauerhaft garantiert.
Zubehörpakete sind keine zusätzlichen Hardwareidentitäten.

WINBOT: Roboter 1,6 ± 0,1 kg und 271 × 271 × 77 mm, Station 5,5 ± 0,2 kg und
312 × 215 × 327 mm. 110 Minuten ±10 Prozent Akku-Betrieb sind von 30 Minuten
Stromausfall-Haftschutz getrennt; Netzbetrieb möglich. Ladezeit höchstens drei
Stunden ohne Ladezustandsgrenzen. Fast-Mode-Flächenzeit 1 min 45 s ± 15 s/m² ist
keine lineare Fahrgeschwindigkeit. 60 ± 5 ml Wassertank sind keine 4500-mAh-
Akkukapazität. Glas mindestens 3 mm und 30 × 40 cm Fenster; Außenglas nur mit
ordnungsgemäßer Sicherung, ruhigem Wind und ohne Regen/Schnee laut Handbuch.
Kein IP-Wert erfunden. Hauptproduktpreis 499,99 USD, datiert als vorrätig;
538-USD-Paket ist ein anderer Selektor. Unbelegte alte Startjahre von WINBOT und
ursprünglichem A3000 entfernt statt aus dem PDF-Uploaddatum neu datiert.

23 gespeicherte Quellenkörper, alle HTTP 200: 17 HTML und sechs PDFs. Hashes und
Text reproduziert; 161 begrenzte Aussagen/Modellzellen, neun Omron-Modelltabellen,
drei kommerzielle ECOVACS-Modellspalten und 14 PDF-Tabellenseiten geprüft.
Keine Formulare/Bestellungen, keine erneut abgerufenen gesperrten Hosts und keine
visuelle Bild-/PDF-Prüfung oder unabhängige Leistungs-/Zertifizierungsbehauptung.
Weitere Omron-Industrieroboter und übrige ECOVACS-Modelle bleiben außerhalb dieser
abgegrenzten Prüfung. A2500 RTK aus Zubehörkompatibilität bleibt Recherchehinweis.

22 gerenderte Produktseiten: 392 Felder, 199 Quellenmarkierungen, 149 ausgelassene
Leerfelder, 177 strukturierte Eigenschaften und 130 Merkmalsätze geprüft.
Zwei Firmenfokusse, zwei ursprüngliche Modell-Exportziele mit 36 Feldvorkommen,
fünf Firmenproduktziele und zehn ursprüngliche Rechercheziele mit 179 Feldern.
Globaler Metadatenabgleich: 490 Modellseiten, 7411 Felder, davon
3581 sichtbare technische Werte mit Belegen,
3231 ausgelassene Leer-/NA-Felder und 31 belegte Startjahre.
Globaler Preisabgleich: alle 1887 Produktseiten, 350
unqualifizierte Offers erhalten, 1537 qualifizierte/unbekannte Preise
ohne Offer. Datierte regionale Beobachtungen bleiben lesbarer Text ohne universelles
exaktes Offer. Dies ist keine erneute Verkäuferpreisprüfung sämtlicher Altmodelle.

636 Unit-Tests in 49 Dateien und 106 Browserfälle bestanden: 40 neue
Omron/ECOVACS-, 48 Capra/Hypershell- und 18 Vergleichsfälle, darin 36 Axe-Prüfungen
auf Desktop/Mobil und hell/dunkel. Kein vollständiger Repository-Browserlauf.
Build 2936 Seiten, etwa 448 MB; Datenprüfung null Fehler und 779 Hinweise
(+12 unbekannte Erstjahre neuer Modelle, +2 entfernte unbelegte Altjahre).
Semantische HTML-Korrektur: Vergleichsleiste als beschriftetes Aside, Produktkopf
als vom H1 benannte Section. Die zusätzliche Axe-Best-Practice-Prüfung hatte
Inhalte außerhalb von Landmarken gefunden; diese Ursache ist behoben. Keine
Änderung der Daten-/Vergleichslogik. Format/Lint, erneuter Import ohne Ergänzungen,
Inventar-/Quellen-/Such-/Vergleichsprüfungen bestanden. Eigene Browser, Server und
Hilfsprozesse geschlossen; andere Aufgaben unverändert.

Gesamtstand: 1887 Modelle/Konfigurationen, 774 datierte Merkmalsdatensätze,
632 neue Modelle dieser Aufgabe und 142 vorhandene Anreicherungen. 3104 einzelne
Merkmalaussagen, 1221 Produktquellenverweise, 54 Firmenfokusse, 7411 Felder auf
490 Modellen: 3581 dokumentiert, 3666 unbekannt, 155 widersprüchlich, neun Roadmap.
518 ursprüngliche Rechercheziele haben Merkmalsbelege; 261 ausgewählte Feldprüfungen,
257 offen. 53 von 591 Quellen-Firmengruppen mit Fokus, 538 ohne. Offline-
Heuristik weiter 114 Modell-/elf Markensuchhinweise; keine bestätigten Lücken.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte offen.
Vollständige Produktverifikation und Marktführerschaft bleiben unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-70/`.


## Ergänzung vom 2. November 2026 – Quasi Robotics und Tennant (Batch 71)

Zehn vorhandene Modelle geprüft, drei neue Tennant-Modelle ergänzt: X2 ROVR SCRUB,
X16 SWEEP und P1 VAC. 13 Modellprüfungen mit 237 Feldern: 123 dokumentiert,
104 unbekannt und zehn widersprüchlich. Zwei Firmenfokusse ergänzt. Alle 1877
übrigen bisherigen Katalogzeilen behalten ihre Werte, 490 vorherige Modellprüfungen,
54 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten. Die Cleaning-CSV
hat zusätzlich die optionale Spalte minAisleWidth; andere Zeilen erhalten dort nur
einen leeren Wert. Vorhandene Oberfläche und Vergleich unterstützen das Feld bereits.
Keine Änderung am Anwendungscode oder Kategorieübertragung. Docks, Software,
Akkus und Regalzubehör sind keine zusätzlichen Roboteridentitäten.

Quasi: Elf HTML-Tabellen mit fünf expliziten Modellspalten und gemeinsam markierten
Zellen sichern Mini, Standard, Large, PartPorter und Heavy ab. Mindestgangbreiten
0,76/0,9/1,2/1,5/1,2 m, unterschiedliche Ablagen und vorgeschlagene Gesamtlasten
bleiben modellbezogen. Gerundete lb/kg-Werte werden nicht als exakte Umrechnung
oder universelle Traglast behandelt. Erste vier Varianten: Differentialantrieb,
720 Wh und bis 16 Stunden; Heavy: Mecanum, 1440 Wh und bis 14 Stunden. Laden
etwa 60/90 Minuten bis 50 Prozent und 2,5/4 Stunden bis 100 Prozent ohne genannten
Anfangsladezustand. Wireless optional nur bei Large, PartPorter und Heavy;
Komponenten-IP20 ist kein Roboter-IP-Wert. Sensor-, E-Stop- und Stack-Light-Optionen
bleiben je Spalte getrennt. 46.500 m² Arbeitsbereich ist keine Stundenleistung.
Steigung ist lastabhängig: zehn Grad leer, ungefähr fünf Prozent halb und drei
Prozent voll beladen. Geschwindigkeit ist konfigurierbar, aber ohne numerisches
Maximum. Local-WebSocket und Cloud-REST haben unterschiedliche Voraussetzungen.
Kauf/RaaS nach Angebot; Stundenlohn- und ROI-Rechner sind keine Kaufpreise.

Tennant: Dedicated X4-/X6-Sheets geben 1860/6967 m² je Lösungstank an; die
X-Series-Broschüre nennt separat 1860/1914 m² je Stunde theoretisch im manuellen
Modus. Keine Umdeutung zu autonomer Stundenleistung. X4-Länge 960 mm steht
940 mm in der X-Series-Broschüre gegenüber. X2-Datenblatt: 10.000 ft²/929 m²
je Tank; X-Series druckt theoretisch manuell je Stunde 10.000 ft²/1929 m², deren
Umrechnung nicht stimmt. Konflikt bleibt sichtbar. X2-Maße und Tankvolumen tragen
die dokumentierte Präzision sowie die Rundungen anderer Broschüren; Navigation,
90-Grad-Einfahrt und U-Turn unter 762 mm sind keine exakt festgelegte Mindestbreite.
Herstellerankündigungen belegen X4 2024, X6 2025 und X2 2026.

T380AMR-/T7AMR-Broschüren nennen Lithiumlaufzeiten bis fünf/6,5 Stunden; gemeinsames
März-2022-Sheet vier/sechs Stunden. Beide Broschüren tragen Februar-2022-Stände;
daraus folgt keine bewiesene spätere Aufrüstung. T380 nennt selbst 385 und 386 kg
für dieselben 850 lb. T7-Flächenangabe ohne Zeitintervall bleibt ohne Stundenwert.
T16: vier/5,5 Stunden Economy-Mode sind nicht die beworbenen bis 13 Reinigungsstunden
innerhalb eines 24-Stunden-Zyklus. Vier Stunden Laden gelten nur für Lithium mit
High-Capacity-Offboard-Lader, ohne angegebene Ladezustandsgrenzen. 635-kg-Lithium-
Konfiguration wird mit 11,5 beziehungsweise 12,2 kWh gekoppelt; Quellenkonflikt bleibt.
Autonome und manuelle Fahrgeschwindigkeiten, Betrieb-/Transportsteigungen sowie
Passage, Einfahrt und U-Turn bleiben getrennt. Unbelegtes T380-Startjahr entfernt.

X16 SWEEP: 4621 m²/h autonom gegenüber 9777 m²/h manuell; 150 L/158 kg beziehen
sich auf trockenen Hopperinhalt. Gangbreite web 1400 mm versus PDF/Broschüre 1440 mm
und bis sechs Stunden web versus mehr als sechs Stunden Eco im PDF bleiben
widersprüchlich. P1 VAC: bis 3,5 Stunden Standardmodus, 1,5 Stunden Laden ohne
Zustandsgrenzen, 700 m²/h ohne Seitenbürste. 440-mm-Arbeitsbreite mit Seitenbürste
ist von der 279-mm-Hauptbürste getrennt. Web 46 kg und 558×420×592 mm weichen von
44,7 kg und 558×425×608 mm in der Spezifikation ab. Staubbehälter, Auffangschale,
Ladegerät und Roboter bleiben getrennt; kein Wasser-, Nutzlast- oder achtstündiger
Laufzeitwert erfunden. Erstjahre von P1 und X16 nicht aus PDF-Revisionen abgeleitet.

51 gespeicherte Quellenkörper, alle HTTP 200: 26 HTML, 17 PDFs und acht regionale
Hersteller-Dokument-APIs. Hashes und Text reproduziert; 406 begrenzte Text-/Zellbelege,
elf Quasi-Tabellen und 35 PDF-Textseiten erfasst. Keine Formulare, keine erneut
abgerufenen gesperrten Hosts, keine visuelle PDF-/Bildprüfung und keine unabhängigen
Leistungs-, Exklusivitäts- oder Zertifizierungsnachweise.

13 gerenderte Produktseiten: 237 Felder, 120 Quellenmarkierungen, 91 ausgelassene
Leerfelder, 104 strukturierte Eigenschaften und 90 Merkmalsätze geprüft. Zwei
Firmenfokusse, vier ursprüngliche Modell-Exportziele mit 68 Feldvorkommen, zehn
Firmenproduktziele und zehn ursprüngliche Rechercheziele mit 180 Feldern geprüft.
Globaler Abgleich: 503 Modellseiten, 7648 Feldwerte, 3701 sichtbare technische Werte
mit Quellenstatus, 3322 ausgelassene Leer-/NA-Felder und 34 belegte Startjahre.
Alle 1890 Preis-Ausgaben geprüft: 350 unqualifizierte Offers, 1540 qualifizierte oder
unbekannte Preise ohne Offer. Keine erneute Verkäuferpreisprüfung aller Altmodelle.

643 Unit-Tests in 50 Dateien und 96 Browserfälle bestanden: 38 neue Quasi/Tennant-,
40 Omron/ECOVACS- und 18 Vergleichsfälle, darin 36 Axe-Prüfungen auf Desktop/Mobil,
hell/dunkel. Erster Lauf: 92 bestanden, vier Testannahmen fehlgeschlagen. Suchtest auf einen
reinen Merkmalsbegriff und Vergleichstest auf tatsächliche Spaltenüberschriften
sowie lokalisierte Dezimalzeichen korrigiert; alle vier gezielt nachgeprüften
Fälle bestanden. Keine Anwendungskorrektur dafür nötig. Kein vollständiger
Repository-Browserlauf. Build 2939 Seiten, etwa
449 MB; Datenprüfung null Fehler, 782 Hinweise (+2 neue unbekannte Erstjahre,
+1 entferntes unbelegtes Altjahr). Format/Lint, Import ohne Ergänzungen und
Inventar-/Quellen-/Such-/Vergleichsprüfungen bestanden. Eigene Testprozesse und
Server geschlossen und überprüft; andere Aufgaben unverändert.

Gesamtstand: 1890 Modelle/Konfigurationen, 777 datierte Merkmalsdatensätze,
635 neue Modelle dieser Aufgabe, 142 vorhandene Anreicherungen, 3164 einzelne
Merkmalaussagen, 1257 Produktquellenverweise und 56 Firmenfokusse. 7648 Felder auf
503 Modellen: 3704 dokumentiert, 3770 unbekannt, 165 widersprüchlich, neun Roadmap.
518 ursprüngliche Rechercheziele mit Merkmalsbelegen, 271 mit ausgewählten
Feldprüfungen, 247 offen. 55 von 591 Quellen-Firmengruppen mit Fokus, 536 ohne.
Offline-Heuristik weiterhin 114 Modell-/elf Markensuchhinweise, keine bestätigten
Lücken. Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte
bleiben offen. Vollständige Produktverifikation und Marktführerschaft unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-71/`.


## Ergänzung vom 2. November 2026 – Cleanfix und EZ-Robot (Batch 72)

Acht vorhandene Modelle mit 13 neuen Prüfungen und 231 Feldern bearbeitet:
102 dokumentiert, 125 unbekannt, vier widersprüchlich. Fünf neue Produktidentitäten:
RA660 Navi XL Generation 2, EZ-InMoov Enhanced Robot Head, EZ-InMoov Humanoid Robot
(Hardware Kit), AdventureBot und Battle Flipper. JD Humanoid war eine originale
Dublette zu JD mit derselben Herstellerseite/SKU KI-0100. Alte Bilddatei zu JD
übernommen; alte URL führt per noindex-Weiterleitung mit kanonischem Ziel zu JD.
Favoriten und Vergleichsauswahlen werden über die bestehende Aliaslogik migriert
und dedupliziert. Alte URL bleibt aus Sitemaps; Markenprofil zeigt eine JD-Karte.
Keine Änderung des Anwendungsalgorithmus. Die Educational-CSV erhält die bereits
von Detailseite/Vergleich unterstützte optionale driveMode-Spalte.

Alle 1881 übrigen bisherigen Katalogzeilen behalten ihre Werte; 503 frühere
Modellprüfungen, 56 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten.
Zwei neue Firmenfokusse. Fünf Ergänzungen minus eine Dublette ergeben vier
zusätzliche Katalogeinträge. Ausgangsbestand bereinigt 1254 plus 640 Ergänzungen
während dieser Aufgabe ergibt 1894 Modelle/Konfigurationen. Keine neue Roboterkarte
für Controller-Developer-Kit, zwei Umbausätze, Softwarepakete oder Classroom-Bundles.

Cleanfix: Pure/Connect bleiben getrennt; iPad-App und Berichte sind Connect-spezifisch.
Optionaler Lithium-/120-Ah-Akku und Fast Charging werden nicht als universelle
Standardausstattung präsentiert. 40 Minuten bis 80 Prozent und 60 bis 100 Prozent
nennen keinen Anfangsladezustand. M- und XL-Membrantanks teilen Frisch-/Schmutz-
volumen; 45/45 beziehungsweise 110/110 Liter sind keine unabhängigen 90/220 Liter.
Mai-2025-XL-Konfiguration: 313 kg mit Wasser, 1010×850×1185 mm, 0,6 m/s. Explizit
benannte Generation 2: 1015×850×1100 mm, 215 kg mit Akku ohne Wasser auf der Webseite
und 315 kg mit Wasser im Flyer. Unterschiedliche Massenzustände sind kein Konflikt.
Web-Speedzelle 08. m/s bleibt als missgebildete Angabe sichtbar neben 0,8 m/s im
Gen.-2-Flyer. 24/7-Dockbetrieb ist kein kontinuierlicher Akkulaufzeitnachweis.

S170: 170-mm-Hauptwalze, 275 mm mit Seitenbürste, bis 250 Minuten. Ladewerte
5,5–6 Stunden auf Webseite/Flyer versus höchstens 5,5 im Juli-2024-Handbuch bleiben
widersprüchlich. Ramp-slope-Zeile mit 20 mm wird weder als Grad noch als bewiesene
Stufenhöhe umgedeutet. 320 m² ohne Zeitintervall bleibt ohne Stundenleistung;
Empfehlungen 20–300/320 m² behalten ihre Quellen. 0,28-L-Staubbehälter und 2,5-L-
Stationsbeutel sind keine Wassertanks. SIM-Nutzung braucht laut Handbuch ein
bezahltes FieldBots-OS-Abo. Indoor-Trockenreinigung, kein industrielles Umfeld,
keine nassen/gefährlichen Stoffe laut Handbuch. UVC-/Cybersecurity-Aussagen bleiben
Herstellerangaben ohne unabhängigen Wirksamkeitsnachweis.

EZ-Robot: Produktmassen und L×B×H bleiben getrennt von Versandwerten. Six nennt
zwölf Gelenke/zwölf Hebelservos; andere Servo- und Controllerkanalzahlen liefern
keinen pauschalen DOF-Wert. Servodrehmoment/Gradgeschwindigkeit sind weder Nutzlast
noch lineare Fahrgeschwindigkeit. JD-Altersangabe 10+ ersetzt keine allgemeine
Kit-Altersgrenze; 16 DOF und 2014 aus der alten Dublette werden nicht übernommen.
AdventureBot und Battle Flipper unterscheiden sich durch Mechanik und 0,71/0,79 kg.

InMoov-Kits benötigen selbst gedruckte Kunststoffteile. Standardkopf: vier Servos,
LiPo/USB-Lader, 1,25 kg zusammengebaut. Enhanced: fünf schwere plus zwei Mikroservos,
zusätzliche Halsbewegung/Faseroptik, 7,5-V-Netzteil und 1,75 kg. Enhanced-Höhe 33 cm
und 12,1 Zoll stimmen nicht überein und bleiben markiert. Torso/Kopf-Hardwarekit
ist kein fertig montierter laufender Ganzkörperroboter; eigene Masse, Maße und
Gelenkzahl bleiben unbekannt statt von verwandten Produktkarten übernommen.
Ein Jahr ARC Pro ist Softwareumfang, keine weitere Hardwareversion. Beobachtete
USD-Einzelpreise und Kopf-Optionsspannen sind auf den 2. November datiert und mit
Listinglabel Unavailable versehen; keine universellen exakten Offers. Die
2026-Preisliste rundet Dollarwerte; Paket-/Zubehörpreise bleiben getrennt.

31 nutzbare gespeicherte Quellenkörper: 21 HTML, zehn PDFs. Hashes und extrahierter
Text reproduziert, 27 begrenzte Text-/Modellbelege. Archivierte PDF-Textseiten sind
keine visuell geprüften Seiten; die weitgehend gescannte EZ-Broschüre liefert nur
elf Textzeichen und wird nicht für Produktbehauptungen genutzt. Neue 403-Sperre
auf cleanfix-robotics.com beobachtet und weitere Anfragen dort gestoppt; öffentliche
Herstellerunterlagen unter cleanfix.com genutzt. Keine früher gesperrten Hosts
erneut abgerufen, keine Formulare, keine visuelle Bild-/PDF-Prüfung.

13 gerenderte Produktseiten: 231 Felder, 86 Quellenmarkierungen, 119 ausgelassene
Leerfelder, 68 strukturierte Eigenschaften und 76 Merkmalsätze geprüft. Zwei
Firmenfokusse; vier ursprüngliche Modell-Exportziele mit 76 Feldvorkommen und acht
ursprüngliche Rechercheziele mit 144 Feldern. Globaler Metadatenabgleich: 516
Modellseiten/7879 Felder, 3787 sichtbare technische Werte,
3441 ausgelassene Leer-/NA-Felder und 34 belegte Startjahre. Alle 1894
Preis-Ausgaben geprüft: 350 unqualifizierte Offers, 1544 ohne Offer. Kein erneuter
Verkäuferpreischeck aller Altmodelle. 653 Unit-Tests in 51 Dateien und 94 Browserfälle
bestanden: 38 neue Cleanfix/EZ-, 38 Quasi/Tennant- und 18 Vergleichsfälle, darin 36
Axe-Prüfungen auf Desktop/Mobil, hell/dunkel. Build 2943 Seiten, etwa 450 MB;
Datenprüfung null Fehler/787 Hinweise, fünf neue unbekannte Erstjahre. Anfangs
falsche Unterfilter-Tags neuer Kits korrigiert und Generationsbezeichnung außerhalb
von Klammern geführt, damit der vorhandene Dublettencheck sie erhält. Format/Lint,
Import ohne Ergänzungen, Daten-/Quellen-/Such-/Vergleichs-/Identitätschecks bestanden.
Eigene Testprozesse/Server geschlossen und geprüft; andere Aufgaben unverändert.

Gesamtstand: 1894 Modelle/Konfigurationen, 782 datierte Merkmalsdatensätze,
640 Ergänzungen dieser Aufgabe und 142 bestehende Anreicherungen. 3216 einzelne
Merkmalaussagen, 1282 Produktquellenverweise und 58 Firmenfokusse. 7879 Felder auf
516 Modellen: 3806 dokumentiert, 3895 unbekannt, 169 widersprüchlich, neun Roadmap.
518 ursprüngliche Rechercheziele mit Merkmalsbelegen; 279 mit Feldprüfung und
239 offen. 57 von 591 Quellen-Firmengruppen mit Fokus. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Offline-Heuristik
weiter 114 Modell-/elf Markensuchhinweise, keine bestätigten Lücken. Vollständige
Produktverifikation und Marktführerschaft bleiben unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-72/`.


## Ergänzung vom 2. November 2026 – DJI und HWArobotics (Batch 73)

Acht vorhandene Modelle geprüft und vier benannte Produkte ergänzt: DJI Mavic 3 Pro
Cine sowie HWArobotics FPSS1500A, FPSS1500B und GTR200. Zwölf neue Prüfungen umfassen
225 Felder: 91 dokumentiert, 131 unbekannt und drei widersprüchlich. Zwei neue
Firmenfokusse. Alle 1886 übrigen Katalogzeilen, 516 vorherigen Modellprüfungen,
58 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten. Keine Änderungen
am Anwendungsalgorithmus, an CSV-Spalten oder an Modell-Aliassen.

DJI: Die Mini 4 Pro erreicht laut Hersteller 34 Minuten mit Standardakku oder
45 Minuten mit Plus-Akku; Plus ist auf der geprüften Seite in Europa nicht
verfügbar und erhöht die Masse über 249 g. Flug, Schweben, Funkreichweite und
Flugdistanz behalten ihre unterschiedlichen Testbedingungen. Startmasse liefert
weder maximal zulässige Startmasse noch Nutzlast. Mavic Standard mit 958 g und
8 GB bleibt getrennt von Cine mit 963 g, 1 TB und Apple ProRes auf drei Kameras.
Fly More und Premium sind Zubehörpakete. Air 3S mit 27 m/s benötigt äquivalent
6 m/s Rückenwind, EU-Grenze 19 m/s; Flip mit 16 m/s benötigt 4 m/s Rückenwind,
Tracking bleibt bei 12 m/s. Ladezeiten behalten Ladegerät/Hub, Akkuzahl und
sequentielles/paralleles Laden; nur Flip nennt ausdrücklich 0–100 Prozent.
Dreiachsige Kamerastabilisierung ist keine Gesamtroboter-DOF-Zahl.

HWA: Ladeeinheit, Shuttle, Lift und vollständiges Regalsystem bleiben getrennt.
SLS300/400 nennen 35 kg Nennlast und 50 kg Maximum; SLS500 nennt 3–20 kg,
SLS600 35/50 kg. Die 2500 beziehungsweise mindestens 1000 Behälter pro Stunde
sind Single-Aisle-Compound-Systemraten; SLS400 behält die Fußnote mit 10 m Höhe
und 50 m Regallänge. SLS500 nennt mindestens 540 pro Stunde für einen Eingang.
Behältermaße sind keine Chassisabmessungen; 70 kg Güterlift und über 160 kg
Shuttle-plus-Tote-Lift sind andere Module. SLS300/400 behalten 4 m/s aus ihren
benannten Datenblättern, SLS500 bleibt ohne eigene Geschwindigkeitsangabe.
SLS600 behält die gedruckten Ungleichungen trotz Maximum-Überschriften.
24-Stunden-Systembetrieb belegt keine Laufzeit einer Akkuladung.

Die aktuellen Tote-Webseiten heißen SLS900 Standard, Variable, Buffer & Sort
und 4-Way, verlinken jedoch ältere SLS300/400/500/600-Datenblätter. Umbenennung
und Hardwarekontinuität sind ungeklärt. Abweichende aktuelle Geschwindigkeiten,
Behältergrenzen und Laufzeitaussagen werden nicht auf ältere Modelle übertragen.
Keine zusätzlichen SLS900-Karten oder behaupteten Aliasse angelegt.

FPSS1500A ist für −10 bis 50 °C, B für −25 bis 50 °C beschrieben. Das Shuttle
misst 1172 × 960 × 125 mm bei 350 kg Eigengewicht und 1500 kg Palettenlast.
1200 × 1000 mm ist das Palettenformat, 2000 kg die separate Hubwerkskapazität.
35 mm Shuttle-Hub in drei Sekunden ist nicht die 22 m Regallagerhöhe. Acht
Stunden pro Ladung bleiben getrennt von mehrtägigem Betrieb mit Nachladen;
die B-FAQ nennt zusätzlich 72 Stunden ohne klare Ladeabgrenzung und bleibt
als Konflikt markiert. Headline-Maximum 2 m/s versus Tabelle ≥2 m/s bleibt bei
beiden Varianten sichtbar. ±3 mm ist Shuttle-Positionierung. Keine IP-Klasse,
Ladezeit oder DOF aus Räderzahl abgeleitet. GTR200 ist eine kameragestützte
Roboter-Pickstation laut archivierter Herstellerbroschüre; PSD310/PSS105 sind
menschliche Arbeitsstationen, MFC ist Software. Keine fremden Arm-/Greiferwerte,
Projekt-Tagesraten oder Akku-Laufzeiten übernommen. Aktuelle Lieferung und genaue
Konfiguration bleiben unbestätigt.

25 gespeicherte Quellenkörper: 17 HTML und acht PDFs. Hashes und Text reproduziert,
21 begrenzte Textbelege sowie 63 PDF-Textseiten mit Koordinaten archiviert.
Keine visuelle Bild-/PDF-Prüfung, Formulare oder erneuten Abrufe gesperrter Hosts.
Zwölf gerenderte Modellseiten mit 225 Feldern, 82 Quellenmarkierungen, 119
Leerfeldauslassungen, 70 strukturierten Eigenschaften und 65 Merkmalsätzen geprüft.
Zwei Fokus-Seiten; vier ursprüngliche Modell-Exportziele mit 80 Feldern, vier
Firmenbeschreibungsziele und acht Rechercheziele mit 148 Feldern. Globaler Abgleich
von 528 Modellseiten/8104 Feldern: 3869 sichtbare Werte mit Quellen, 3560 ausgelassene
Leer-/NA-Felder und 34 belegte Erstjahre. Alle 1898 strukturierten Preisausgaben
geprüft: 350 Offers und 1548 ohne Offer; kein erneuter Verkäuferpreischeck aller
Altmodelle. 661 Unit-Tests in 52 Dateien und 94 Browserfälle bestanden: 38 neue
DJI/HWA-, 38 Cleanfix/EZ- und 18 Vergleichsfälle, darin 36 Axe-Prüfungen auf Desktop
und Mobil in hell/dunkel. Build: 2947 Seiten, etwa 450 MB. Datenprüfung: null
Fehler und 791 Hinweise, vier zusätzliche unbekannte Erstjahre. Der erste Testlauf
hatte nur einen veralteten globalen Konfliktzähler; nach Aktualisierung von 169
auf 172 bestehen alle 661 Fälle. Format, Lint, Bestands-/Quellen-/Vergleichschecks
und Import ohne Ergänzungen bestanden. Alle 159 eigenen Testprozesse beendet,
Serverport frei, keine eigenen Recherche-Hilfsprozesse; andere Aufgaben erhalten.

Gesamtstand: 1898 Modelle/Konfigurationen, 786 datierte Merkmalssätze, 644 Ergänzungen
und 142 bestehende Anreicherungen. Bereinigte Ausgangsbasis weiterhin 1254 nach
der früheren JD-Dubletten-Korrektur. 3257 einzelne Merkmalaussagen, 1299 Produkt-
quellenverweise und 60 Firmenfokusse. 8104 Felder auf 528 Modellen: 3897 dokumentiert,
4026 unbekannt, 172 widersprüchlich und neun Roadmap. Alle 518 ursprünglichen
Rechercheziele haben Merkmalsbelege; 287 haben Feldprüfungen, 231 sind offen.
59 von 591 Quellengruppen haben einen Firmenfokus. Drei ursprüngliche Modell-
identitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen;
dazu die SLS900-Namens-/Hardwarezuordnung. Die Heuristik bleibt bei 114 Modell-
und elf Markensuchhinweisen. Vollständige Herstellerverifikation und Marktführung
bleiben unbelegt. Prüfdateien: `scratch/competitor-research/primary/batch-73/`.


## Ergänzung vom 2. November 2026 – GreyOrange und KUKA (Batch 74)

Acht vorhandene Modelle geprüft und sieben benannte iisy-Varianten ergänzt:
LBR iisy 3 R760, 6 R1300, 8 R930, 11 R1300, 11 R1300 CR, 15 R930 und 15 R930 CR.
15 neue Prüfungen mit 275 Feldern: 114 dokumentiert, 160 unbekannt und ein Konflikt.
Zwei neue Firmenfokusse. Alle 1890 übrigen Katalogzeilen, 528 vorherigen
Modellprüfungen, 60 Firmenfokusse und 1961 Quellenidentitäten erhalten. Keine
Anwendungsänderungen, neuen CSV-Spalten oder behaupteten Modell-Aliasse.

GreyOrange: Uplift-L nennt 1000 kg und 2 m/s; Elevate 1400 kg und 1,50 m/s.
AnyPallet hat bis 2000 kg, XXL bis 2500 kg, beide 1,4 m/s beladen beziehungsweise
1,7 m/s unbeladen. Elevate nimmt geschlossene Paletten erhöht auf, AnyPallet
auch vom Boden. XXL nennt 2450 mm Gabeln; horizontale Gabellänge ist keine
Hubhöhe. Eigene Modellmaße bleiben getrennt von Gangbreite und Wenderadius.
Uplift-L druckt 1280 mm Länge und zugleich 51,2 Zoll; letzteres entspricht
1300,48 mm. Beide Angaben und der Konflikt bleiben sichtbar. Masse, Akku-/Lade-
dauer, IP-Code, Fahrwerkskinematik, Abstände und numerische Hubhöhen bleiben
unbelegt statt von anderen Modellen abgeleitet.

GreyMatter ist Software zur Orchestrierung; CRN umfasst ausdrücklich Hardware
von Drittanbietern. Die Ranger-Markenbezeichnung belegt nicht, wer jedes Chassis
fertigt. Sodimac mit 63 AMRs und 4000 Paletten pro Tag ist ein Einsatzbericht zum
Flottenbetrieb, keine einzelne Roboterleistung. Einsparung, Implementierungszeit
und ROI bleiben nicht unabhängig geprüfte Anbieterclaims mit Anwendungskontext.

KUKA: iiwa hat sieben Achsen und Sunrise Cabinet; iisy sechs Achsen mit aktueller
iiQKA.OS2-Plattform und KR C5 micro-2 laut benannter Webzeile. Standard-iiwa:
7 R800 mit 23,9 kg und ±0,1 mm Wiederholgenauigkeit; 14 R820 mit 29,9 kg und
±0,15 mm. Die Tabelle und Broschüre beschränken ihre Daten auf Standardversionen.
CR-Masse und -Wiederholgenauigkeit bleiben daher offen. iiwa-CR-Webzeilen nennen
nur Bodenmontage, Standard zusätzlich Wand/Decke. 800/820 mm Reichweite ist keine
komplette dreidimensionale Körperabmessung; ±2 Prozent Drehmomentgenauigkeit ist
keine kartesische Positioniergenauigkeit oder Nutzlastreserve.

iisy 3 R760 hat IP30 und 22,8 kg; größere Varianten IP54. Standard 6/11 R1300
haben 46,3 kg, 8/15 R930 43,2 kg. Standard-Wiederholgenauigkeit ±0,1 mm beim
3-kg-Modell und ±0,05 mm bei den größeren. Die eigenen CR-Zeilen für 11 und 15 kg
belegen Identität, Last, Reichweite, IP und Montage; Standardmassen und -präzision
werden nicht übernommen. Familienangaben zu optionaler ISO-Klasse 3 und ESD sind
keine individuellen Anwendungszertifikate. IP, Reinraumklasse und sichere
Kollaboration sind verschiedene Eigenschaften. Werkzeug, Medienflansch und
Softwarepakete werden nicht zu enthaltenen Händen oder zusätzlichen Robotern.
Kein garantierter schutzzaunfreier Einsatz und keine unabhängige Sicherheits-
oder Exklusivitätsprüfung. KMR iisy-2 sowie Education-Zellen/-Kits aus dem großen
Portfolio sind mit Seitenverweisen als gesondert zu prüfende Integrationsleads
festgehalten; nicht pauschal importiert.

Neun nutzbare Quellenkörper: sieben HTML und zwei PDFs. Zwei zunächst vermutete
PDF-Adressen lieferten allgemeines Fehler-HTML mit HTTP 200 und wurden
semantisch ausgeschlossen. Byte-Hashes und Text reproduziert, 13 exakte Textanker,
begrenzte Modellblöcke und acht PDF-Textseiten mit Koordinaten archiviert. Der
102-seitige Gesamtkatalog ist vollständig gespeichert, fünf ausgewählte Seiten
fließen in den Textbeleg ein. Keine visuelle Bild-/PDF-Prüfung, Formulare oder
erneuten Abrufe früher gesperrter Hosts.

15 gerenderte Modellseiten mit 275 Feldern, 100 Quellenmarkierungen, 145
Leerfeldauslassungen, 85 strukturierten Eigenschaften und 86 Merkmalsätzen geprüft.
Zwei Fokus-Seiten; ein ursprünglicher Modell-Export mit vier Zielmodellen/68
Feldern und acht Rechercheziele/156 Felder. Global 543
Modellseiten mit 8379 Feldern geprüft:
3969 sichtbare Werte samt Quellen,
3705 ausgelassene Leer-/NA-Felder und 34 belegte Erstjahre.
Alle 1905 strukturierten Preisausgaben geprüft: 350 Offers und 1555 ohne Offer;
kein erneuter Verkäuferpreischeck aller Altmodelle. 669 Unit-Tests in 53 Dateien
und 94 Browserfälle bestanden: 38 neue GreyOrange/KUKA-, 38 DJI/HWA- und 18
Vergleichsfälle, darin 36 Axe-Prüfungen auf Desktop/Mobil in hell/dunkel. Build:
2954 Seiten, etwa 452 MB. Datenprüfung: null Fehler und 798 Hinweise, sieben
zusätzliche unbekannte Erstjahre. Format, Lint, Import ohne Ergänzungen und
Bestands-/Quellen-/Vergleichschecks bestanden. Alle 159 eigenen Testprozesse beendet,
Serverport frei; keine eigenen Recherche-Hilfsprozesse, andere Aufgaben erhalten.

Gesamtstand: 1905 Modelle/Konfigurationen, 793 datierte Merkmalssätze, 651 Ergänzungen
und 142 bestehende Anreicherungen. Bereinigte Ausgangsbasis weiterhin 1254 nach
der früheren JD-Dubletten-Korrektur. 3319 einzelne Merkmalaussagen, 1329 Produkt-
quellenverweise und 62 Firmenfokusse. 8379 Felder auf 543 Modellen: 4011 dokumentiert,
4186 unbekannt, 173 widersprüchlich und neun Roadmap. Alle 518 ursprünglichen
Rechercheziele mit Merkmalen; 295 mit Feldprüfungen und 223 offen. 61 von 591
Quellengruppen haben einen Firmenfokus. Drei ursprüngliche Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik weiter
114 Modell- und elf Markensuchhinweise. Frühere offene Herstellerzuordnungen und
neue Integrationsleads bleiben erhalten. Vollständigkeit und Marktführung sind
weiter unbelegt. Prüfdateien: `scratch/competitor-research/primary/batch-74/`.


## Ergänzung vom 2. November 2026 – VideoRay und Standard Bots (Batch 75)

Acht vorhandene Modelle geprüft: VideoRay Defender, Pro 5, Ally und Wraith;
Standard Bots Spark, Core, Thor und Bolt. 131 neue Feldprüfungen: 65 dokumentiert,
58 unbekannt, sechs widersprüchlich und zwei Roadmap-Angaben. Zwei Firmenfokusse.
Keine neue Modellidentität, Kategorie oder CSV-Spalte. Alle 1897 übrigen Zeilen,
543 vorherigen Modellprüfungen, 62 Firmenfokusse und 1961 Quellenidentitäten erhalten.

VideoRay: Bewegungsachsen sind nicht Thruster oder die neun IMU-Sensorachsen.
Pro 5 hat drei, Ally vier, Defender und Wraith sechs kontrollierte Freiheitsgrade.
Der Herstellervergleich benennt Erstjahre 2019, 2024, 2017 und 2025 ausdrücklich.
Pro 5 nennt im Datenblatt 11,8 kg und 300 m, auf der Produktseite 10 kg und 305 m;
auch 4,4 versus über 4,4 Knoten bleibt als Quellenabweichung sichtbar. Wraith:
2026-Vergleich 4,3 Knoten und getrennt 1,0 m/s Heave/2,0 m/s Transit; Datenblatt
Version 250826: 4,2 Knoten und 1,5 m/s vertikal. Piloting-Manipulatorlasten
1,4/10,0/9,5/36,3 kg bleiben getrennt von Schub, Pollerzug und >100 lb Bergung.
Defender 300 m Standard sowie 1000/4000-m-Konfigurationen sind keine einheitliche
Standardtauchtiefe; 450/1500 m Tether-Reichweite ist kein Tiefenbeleg.
Ally-Akkus sind aktuell nicht verfügbar/integrationsbereit. Base/Premium und
Basic/SAR sind Zubehörpakete, keine zusätzlichen Grundroboter. Wraiths sechs
Akkus, Energie-/Leistungsangaben und Controller-IP65 belegen weder zwei Stunden
Laufzeit noch einen vollständigen ROV-IP-Code. Kamera-FOV-Konflikt Ally 180/200 Grad
bleibt bei den Merkmalen. Acht archivierte VideoRay-Handbuchnamen samt Links sind
als offene historische Identitäts-/Dublettenprüfungen gespeichert; Handbücher nicht
in diesem Durchgang abgerufen.

Standard Bots: Spark/Core/Thor 7/18/30 kg Nennlast, 21/32,5/79 kg Armmasse und
±0,025 mm Hersteller-Wiederholgenauigkeit ohne ausgewählten Prüfnormnachweis.
Spark 950 mm eigene Spezifikation versus 900 mm Modellkarte; Thor druckt wörtlich
2 mm (78.7 in), daneben 2000 mm und 2 m. Konflikte bleiben sichtbar. Fußabdruck
unter 200 beziehungsweise 296 mm Durchmesser wird nicht zur Körperabmessung.
Spark-Geschwindigkeit weiter Coming Q2 2026; ein vergangener Termin ist kein
Liefernachweis. Core bis 3 m/s und Thor 4 m/s sind eigene lineare Werkzeugwerte;
Thors 30-kg-FAQ gilt bei kollaborativen Geschwindigkeiten/TCP-Bedingungen.
IP65 ist bei Spark/Thor ausdrücklich Design Rating, keine verifizierte Zertifizierung
und kein auf Core übertragener Code. Lokaler Betrieb nach Programmübertragung,
Netzpflicht für Updates/Fernsupport/verbundene Anwendungen und Beta-Ausnahmen
bleiben zusammen erhalten. Werkzeugkompatibilität ist keine enthaltene Hand.
Startpreise $29.500/$39.500/$49.500 haben in den ausgewählten Texten keine explizite
Währung und keine vollständige Konfigurations-/Steuerabgrenzung; keine Offers.
Bolt und autonome Navigation bleiben Coming soon. Geplante mobile 6 mph sind
keine Festbasisgeschwindigkeit. Torso-Abdeckung bis sieben/zehn Fuß ist keine
Armreichweite. Hot-Swap-/24-Stunden-Wortlaut ist keine Einzelakku-Laufzeit.

16 nutzbare Quellenkörper (zehn HTML, sechs lesbare PDFs), 32 exakte Textanker und
zwölf PDF-Textseiten mit Koordinaten. Vier gescannte PDFs gerendert, aber wegen
nicht unterstützter Bildansicht/fehlender OCR nicht ausgewertet; keine Fakten
daraus gewählt. Zwei 404-Adressen und zwei kurze Linkseiten ausgeschlossen.
Keine visuelle Bild-/PDF-Prüfung, Formulare oder erneuten Abrufe gesperrter Hosts.
Acht Modellseiten: 131 Felder, 62 sichtbare Quellenmarkierungen, 53 ausgelassene
Leerfelder, 50 strukturierte Eigenschaften und 46 Merkmalsätze. Acht Modell-
Exportziele und acht Rechercheziele mit jeweils 131 Feldern sowie zwei Firmen-
Fokus-/Exportzeilen geprüft. Global 551 Modellseiten mit
8510 Feldern geprüft: 4031
sichtbare Quellen/Werte, 3758 ausgelassene Leer-/NA-Felder und
38 belegte Erstjahre. Alle 1905 strukturierten Preisausgaben geprüft: 350 Offers,
1555 ohne Offer; keine erneute Verkäuferprüfung aller Altpreise.
681 Unit-Tests in 54 Dateien und 94 Browserfälle bestanden: 38 neue VideoRay/
Standard-Bots-, 38 GreyOrange/KUKA- und 18 Vergleichsfälle, darunter 36 Axe-
Prüfungen auf Desktop/Mobil in hell/dunkel. Build: 2954 Seiten, etwa 452 MB.
Datenprüfung: null Fehler und 794 Hinweise, vier weniger durch belegte Erstjahre.
Format, Lint, wiederholter Import ohne Ergänzungen, Bestands-/Quellen-/Vergleichs-
prüfungen bestanden. Alle 159 eigenen Testprozesse beendet, Serverport frei;
keine eigenen Recherche-Hilfsprozesse, andere Aufgaben erhalten.

Gesamtstand: 1905 Modelle/Konfigurationen, 793 datierte Merkmalssätze, unverändert
651 Ergänzungen und 142 bestehende Anreicherungen. 3340 einzelne Merkmalaussagen,
1337 Produktquellenverweise und 64 Firmenfokusse. 8510 Felder auf 551 Modellen:
4076 dokumentiert, 4244 unbekannt, 179 widersprüchlich und elf Roadmap. Alle 518
ursprünglichen Rechercheziele mit Merkmalen; 303 mit Feldprüfungen und 215 offen.
63 von 591 Quellengruppen mit Firmenfokus. Drei ursprüngliche Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik weiter
114 Modell- und elf Markensuchhinweise, keine bestätigten Lücken. Frühere offene
Zuordnungen und neue historische Leads bleiben erhalten. Vollständigkeit und
Marktführung weiterhin unbelegt; nur lokale Änderungen. Prüfdateien:
`scratch/competitor-research/primary/batch-75/`.


## Ergänzung vom 2. November 2026 – Quantum Systems, Ohmnilabs und WIY Drones (Batch 76)

Acht Modelle ergänzt: Trinity Pro, Trinity Tactical, PULSE P19, Mandrill, Seavex,
Subvex, Skyron 400 und WIY Drones STRILA. Acht vorhandene Modelle geprüft:
Ohmni Telepresence Robot, Ohmni SuperCam, OhmniCare, OhmniClean, Reliant, Twister
und die beiden Vector-AI-Betriebsarten. 262 Feldentscheidungen: 109 dokumentiert,
138 unbekannt, zehn widersprüchlich und fünf Roadmap. Drei Firmenfokusse ergänzt.
1897 übrige Zeilen, 551 vorherige Modellprüfungen, 64 Firmenfokusse und alle 1961
Quellenidentitäten erhalten. Keine Kategorieübertragung oder neue CSV-Spalte.

Ohmni: Das Original ist seit August 2024 eingestellt. Die inzwischen auf den
Nachfolger ausgerichtete Altseite belegt keine Übertragung von 66 lb, vier Rädern
oder 8–9 Stunden auf das Original. Dessen 18 lb Eigenmasse bleiben von 31 lb Versand
getrennt; 4–5 Stunden Gespräch und 8–10 Stunden Standby sind Betriebsarten.
Die ungefähr drei Stunden Ladezeit gelten nur halbvoll bis voll bei ausgeschaltetem
Roboter. 2 versus 2,2 mph ist ein Quellenkonflikt. SuperCam gehört laut archivierter
Supportangabe zu Seriennummern ab PVT3000; 109/80/138 Grad FOV sind horizontal/
vertikal/diagonal, keine einzelne 360-Grad-Kamera. Die Supportangabe behält den
1. November 2026 als Prüfdatum. Der neue Abruf lieferte 403 und ist kein Beleg;
weitere Hostanfragen wurden gestoppt. OhmniCare: 14×18 gegenüber 15×9,5 Zoll
Grundfläche bleibt widersprüchlich; 20 Minuten Laden pro Betriebsstunde ist kein
Vollladezyklus. OhmniClean: 79 versus 71 lb und zwei Stunden durchschnittlicher
Betrieb versus 75 Minuten Desinfektion bleiben sichtbare Konflikte. 24 Stunden
dank Akkuwechsel sind keine Einzelakku-Laufzeit; 9000 Stunden Lampenlebensdauer
ebenfalls nicht. Raumzeit und Mappingrate belegen weder normierten Durchsatz noch
garantierte Infektionsreduktion. Sicherheits-/Betriebsbedingungen bleiben erhalten.

Quantum: Flugzeit und maximales Abfluggewicht bleiben von Akkulaufzeit und
Leergewicht getrennt. Reliants 9 kg Nutzlast stammt aus dem verlinkten englischen
Datenblatt; Controller-Akku/IP-Werte werden nicht aufs Fluggerät übertragen.
Vector AI behält getrennte Flächen-/Multicopter-Betriebsarten bei gleichem
umrüstbarem Rumpf. Trinity Pro nennt 90 Minuten, standardmäßig exportbedingt auf
59 Minuten begrenzt. Familienjahr und PDF-Datum sind kein Pro-Erstjahr. Trinity
Tactical nennt IP54 im Text und IP55 im Datenblatt. PULSE P19 ist ein vorläufiges
Juni-2026-Konzept: fünf ausgewählte Leistungsfelder bleiben Roadmap, bemannte und
geplante unbemannte Modi sowie gewichtsabhängige Nutzlast-/Treibstoffbudgets sind
qualifiziert; kein VTOL- oder Liefernachweis. Mandrill 750 versus 750+ kg bleibt
ein Konflikt; kurze/lange Bauform und Rad/Kette sind Optionen ohne Zusatzkarten.
Seavex: 4500 kg Verdrängung ist keine Leermasse, 1,8 m Tiefgang keine Körperhöhe.
Bis zwei Monate Missionsdauer sind keine Akkulaufzeit; Betrieb bis Seegang 3 und
Überleben bis 6 bleiben getrennt. Subvex: 533 versus 530 mm Durchmesser bleibt
widersprüchlich; 6000 m Tauchtiefe, USBL-Reichweite und Sonarreichweite sind eigene
Größen. Vier Tage Missionsdauer werden nicht aus 42 kWh hergeleitet. Skyron 400:
800 g Webseite versus 1,2 kg Datenblatt Nutzlast; Booster bleibt eine Option.

STRILA bleibt WIY Drones zugeordnet, Quantum als Integrationspartner. Beteiligung
und Joint Venture beweisen keine rechtliche Herstellerfusion. 5,7 versus 5,3 kg
Abfluggewicht und 415 versus 350 km/h bleiben widersprüchlich; die Quelle mit
fehlendem /h wird nicht stillschweigend korrigiert. Kein Wirksamkeits-, Kampf-,
Verfügbarkeits- oder unabhängiger Zertifizierungsnachweis. Trinity F90+, SCORPION,
TRON und Vector vor AI bleiben vier historische Identitäts-/Familienleads.

44 nutzbare aktuelle Quellenkörper: 20 HTML und 24 PDFs, zusätzlich eine archivierte
normalisierte Supportmomentaufnahme ohne erhaltenes HTML. 42 exakte Textanker und
108 PDF-Textseiten mit Koordinaten gespeichert. Zehn kurze Linkseiten, eine
vermutete 404-Adresse und der neue 403-Abruf ausgeschlossen. Keine visuelle
Bild-/PDF-Prüfung oder Formulare, keine Wiederholung früher gesperrter Hosts.
16 Modellseiten mit 262 Feldern und 107 Quellenmarkierungen geprüft; 123 Leerfelder
ausgelassen, 91 strukturierte Eigenschaften und 76 Merkmalaussagen geprüft.
Acht Modell-Exportziele und acht Rechercheziele mit jeweils 130 Feldern, drei
Firmenfokusse und zwei ursprüngliche Firmenexportzeilen geprüft. Global 567
Modellseiten mit 8772 Feldern: 4138
sichtbare Quellen/Werte, 3881 ausgelassene Leer-/NA-Felder und
38 belegte Erstjahre. Alle 1913 strukturierten Preisausgaben geprüft: 350 Offers,
1563 ohne Offer. Das ist keine erneute Verkäuferprüfung aller Altpreise.

696 Unit-Tests in 55 Dateien und 98 Browserfälle bestanden: 42 neue Quantum/Ohmni-,
38 GreyOrange/KUKA- und 18 Vergleichsfälle, darunter 36 Axe-Prüfungen auf Desktop/
Mobil in hell/dunkel. Eine zunächst fehlgeschlagene Prosa-Abstandserwartung
korrigiert, anschließend alle Unit-Tests bestanden; Erstprotokoll erhalten.
Build: 2963 Seiten, etwa 453 MB. Datenprüfung: null Fehler und 802 Hinweise,
acht zusätzliche unbekannte Erscheinungsjahre. Format, Lint, wiederholter Import
ohne Ergänzungen sowie Bestands-/Quellen-/Vergleichsprüfungen bestanden.
Alle 163 eigenen Testprozesse beendet, Serverport frei;
keine eigenen Recherche-Hilfsprozesse, Ressourcen anderer Aufgaben erhalten.

Gesamtstand: 1913 Modelle/Konfigurationen, 801 datierte Merkmalssätze, 659 Ergänzungen
und 142 bestehende Anreicherungen. 3392 einzelne Merkmalaussagen, 1367 Produktquellen-
verweise und 67 Firmenfokusse. 8772 Felder auf 567 Modellen: 4185 dokumentiert,
4382 unbekannt, 189 widersprüchlich und 16 Roadmap. Alle 518 ursprünglichen
Rechercheziele mit Merkmalen; 311 mit Feldprüfungen und 207 offen. 65 von 591
Quellengruppen mit Firmenfokus. Drei ursprüngliche Modellidentitäten, neun
Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik unverändert
114 Modell- und elf Markensuchhinweise, keine bestätigten Lücken. Frühere offene
Zuordnungen bleiben erhalten. Vollständigkeit und Marktführung weiterhin unbelegt;
nur lokale Änderungen. Prüfdateien: `scratch/competitor-research/primary/batch-76/`.


## Ergänzung vom 2. November 2026 – Robot.com und LocoRobo (Batch 77)

Vier benannte physische Angebote ergänzt: LocoXtreme, LocoArm, LocoRover und R-top.
Acht vorhandene ursprüngliche Rechercheziele geprüft: R-cargo, R-kiwi, R-noid,
R-dog, LocoScout, LocoHex, LocoDrone und LocoDrone X. 197 Feldentscheidungen:
48 dokumentiert, 148 unbekannt, eine Roadmap. Zwei Firmenfokusse ergänzt.
Alle 1905 übrigen Zeilen, 567 vorherigen Modellprüfungen, 67 Firmenfokusse und
1961 Quellenidentitäten erhalten. Keine Kategorieübertragung oder neue CSV-Spalte.

R-noid: Das verlinkte Datenblatt Revision 003 vom 14. Mai 2026 nennt zwei Arme mit
je sieben Achsen, vier Torso- und zwei Halsachsen sowie 2 m/s Spitze. 90 kg Gesamt-
masse, 1,7 m Höhe und 0,55 m Radbasis sind kein vollständiger Körperquader.
0,82 m Arm length ist keine ausgewiesene Nutzreichweite; 0–1,9 m vertikaler Arbeits-
raum ebenfalls nicht. 4 kg pro Arm werden nicht addiert oder als bei Höchsttempo
garantierte Last dargestellt. Drei Stunden Akku, Netzbetrieb und 110 V sind keine
Ladedauer oder mehrschichtige Einzelakku-Laufzeit. Modularer Endeffektor bedeutet
keine bestimmte enthaltene Hand. Kameras, acht Ultraschallsensoren und 360-Grad-
LiDAR werden nicht als mechanische Achsen gezählt. Der Hersteller nennt den
22. Juni 2026 ausdrücklich als kommerziellen Start; das Mai-PDF-Datum bleibt
Dokumentdatum. Fünf Rollen und 19 Aufgaben sind keine weiteren Modelle.

R-top: Eigene Herstelleradresse und Seitentitel sowie feste Oberflächen werden
ausdrücklich von R-noids mobiler Basis unterschieden. Gemeinsame Überschriften
mit sechs Achsen und 9 lb pro Arm belegen keine eindeutig abgegrenzte R-top-
Konfiguration und ersetzen keine R-noid-Modellspezifikation. Daher keine numerische
Übernahme. R-cargo nennt acht Stunden Akku; Payload und Speed stehen ohne Zahlen.
Selbst-/Drahtlosladen bleibt optional, API in 48 h ein Integrationsversprechen,
keine Ladedauer. R-kiwi: 10–12 Stunden Modellseite versus zwölf Stunden Portfolio
sind vereinbare Headlines ohne Belastungsprotokoll. 18 lb sind Massennutzlast,
19 L Ladevolumen, kein Quellenkonflikt. Historische Kiwibot-Generationen bleiben
getrennt. R-dog: Homepage sagt coming in 2027; Modellseite nennt Konzept, Warteliste
und Piloten. Gegenwärtige Werbe-/Inspektionsprosa einer allgemeinen Seite löst
die Verfügbarkeit nicht. Geplanter Umgebungseinsatz trägt Roadmap-Status;
kein tatsächliches Erscheinungsjahr, numerische Plattformdaten oder Offer.

LocoRobo: LocoScout/Hex sind schulische Vier-/Sechsbeiner; Beinanzahl ist keine
Gelenkzahl, Klassenstufe kein numerisches Alter. Rettungs-, Agrar- und Erkundungs-
übungen beweisen keinen Feldeinsatz. LocoXtreme nennt sechs integrierte Sensoren,
Blockcoding, Python/Java und gemeinsame Programmspeicherung; keine angenommene
Fahrmechanik. LocoArm nennt Python-gesteuerte Greif-/Sortier-/Montageübungen mit
mobilen oder stationären Projekten, keine standardmäßig enthaltene Basis/Hand.
LocoRover nennt vier Mecanum-Räder, HD-FPV-Kamera und integrierten Arm; dessen
Identität mit LocoArm ist nicht belegt. ROS/Gazebo/SLAM, HRI und Edge-AI bleiben
Hochschul-Lehrsystemkontext, keine konkrete Hardware-Revision, Messgenauigkeit
oder pauschale Open-Hardware-Lizenz. LocoDrone und LocoDrone X bleiben zwei
Anbieternamen ohne exakte Fluggerät-/OEM-Daten. Hochschulschreibweise LocoDroneX
ist kein drittes Gerät. CodeMyDrones/CodeMyRobots, LocoFly, TryDrones und
BuildMyDrones bleiben Software-, Vorbereitungs-, Wettbewerbs- oder Kitangebote.
FAA-Vorbereitung und Erfolgsquoten sind weder Zertifizierungsgarantie noch
Flugerlaubnis. Historische Revisionen, exakte Drohnen und R-top-Hardware bleiben Leads.

18 nutzbare aktuelle Quellenkörper (17 HTML, ein PDF), 47 exakte Textanker und eine
PDF-Textseite samt Koordinaten gespeichert. Eine vermutete 404-Adresse und kurze
Support-Linkseite ausgeschlossen; keine Formulare, gesperrten Hosts oder visuelle
Bild-/PDF-Prüfung. Zwölf Modellseiten mit 197 Feldern geprüft: 37 sichtbare Quellen-
markierungen, 136 ausgelassene Leerfelder, 23 strukturierte Eigenschaften und
53 Merkmalaussagen. Vier Modell-Exportziele mit 65 Feldern, acht Rechercheziele mit
130 Feldern sowie zwei Firmenfokus-/Exportzeilen geprüft. Global 579
Modellseiten mit 8969 Feldern: 4175
sichtbare Quellen/Werte, 4017 ausgelassene Leer-/NA-Felder und
39 belegte Erstjahre. Alle 1917 strukturierten Preisausgaben geprüft: 350 Offers,
1567 ohne Offer; keine erneute Verkäuferprüfung aller Altpreise.

709 Unit-Tests in 56 Dateien und 96 Browserfälle bestanden: 40 neue Robot.com/
LocoRobo-, 38 GreyOrange/KUKA- und 18 Vergleichsfälle, darunter 36 Axe-Prüfungen
auf Desktop/Mobil in hell/dunkel. Build: 2967 Seiten, etwa 454 MB. Datenprüfung:
null Fehler und 806 Hinweise, vier zusätzliche unbekannte Erscheinungsjahre.
Format, Lint, wiederholter Import ohne Ergänzungen und Bestands-/Quellen-/Vergleichs-
prüfungen bestanden. Alle 161 eigenen Testprozesse beendet, Serverport frei;
keine eigenen Recherche-Hilfsprozesse, andere Aufgaben erhalten.

Gesamtstand: 1917 Modelle/Konfigurationen, 805 datierte Merkmalssätze, 663 Ergänzungen
und 142 bestehende Anreicherungen. 3423 einzelne Merkmalaussagen, 1387 Produktquellen-
verweise und 69 Firmenfokusse. 8969 Felder auf 579 Modellen: 4233 dokumentiert,
4530 unbekannt, 189 widersprüchlich und 17 Roadmap. Alle 518 ursprünglichen
Rechercheziele mit Merkmalen; 319 mit Feldprüfungen und 199 offen. 67 von 591
Quellengruppen mit Firmenfokus. Drei ursprüngliche Modellidentitäten, neun
Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik unverändert
114 Modell- und elf Markensuchhinweise, keine bestätigten Lücken. Frühere offene
Zuordnungen erhalten. Vollständigkeit und Marktführung weiterhin unbelegt;
nur lokale Änderungen. Prüfdateien: `scratch/competitor-research/primary/batch-77/`.


## Ergänzung vom 2. November 2026 – SROD und Macco Robotics (Batch 78)

Zwölf neue SROD-Modelle: S190DHD, S300EHD, S200CHD, S150A, S150AF, S300YL,
S300Y, S450A, F100, S70, Micro Wriggling Cutting Robot und S3831E. Acht vorhandene
Modelle geprüft: S100C MINI, T200, D600D, D800F sowie Kime Bartender/Chef/Kiosk/V5.
356 Feldentscheidungen: 130 dokumentiert, 224 unbekannt, zwei widersprüchlich.
Drei Anwendungsrouten-Paare S150A/S190DHD/S150AF nennen dasselbe Modell und haben
identische technische Tabellen; keine zusätzlichen Karten. SROD-Firmenfokus neu,
Macco-Fokus erweitert mit Erhalt seiner drei bisherigen Aussagen und Quellen.
Alle 1909 übrigen Zeilen, 579 vorherigen Modellprüfungen, 68 unveränderten Fokusse
und 1961 Quellenidentitäten erhalten. Keine Kategorie-/CSV-Spaltenänderung.

SROD: T200 nennt 70 kg im Headlinefeld, 75 kg in der Körper-Spezifikation; getrennt
davon 115 kg Kabelwinde. DN600+ setzt Erweiterungschassis voraus. Kamera-Lift ist
keine Lasthebefähigkeit, Kameraachsen/Räder/Motoren sind keine belegte Gesamt-DOF.
S100C 4,5 kg gilt mit 70-mm-Rädern. 8–10-Stunden-Headlines und Reel-Batterien werden
nicht als reine Crawler-Laufzeit importiert. S300YL 125 kg Reel inklusive Kabel und
15 Ah sind keine Crawler-Masse/-Laufzeit. S450A behält vier Stunden als qualifizierte
System-Headline ohne Batteriestandort/Last; Pull 14 kg ist weder Masse noch Nutzlast.
D600D Hydraulik-/Spülströme sind kein Sedimentdurchsatz. D800F: 650 kg Roboter versus
2500 kg Supporteinheit; mindestens zwölf Stunden Terminal-Akku ist keine Roboter-
Laufzeit. 200 m³/h Pumpe, 40 m Förderhöhe und 40-mm-Partikel sind getrennte Maxima,
kein gemeinsamer Betriebspunkt. IP68/20 m sind keine Militär-/Ex-Zertifizierung;
Standardumgebung nicht explosionsgeschützt, Ex-Ausführung auf Anfrage, Diesel optional.
S70 externe Rückspeisung mit unlimited-Wortlaut ist keine Akkulaufzeit; Tether bis
2 km ist keine Tauchtiefe. Positions-/Leckempfindlichkeits-Headlines behalten fehlende
Prüf-/Referenzbedingungen. F100: 9,5 kg ohne Akku, mindestens vier Stunden pro Akku,
10–30 cm Positionsfehler pro 100 m als Herstellerwert; 100-m-Blatt in fünf Minuten
ist ein Beispiel, keine konstante Fahrgeschwindigkeit. 1080P-Panorama aktuell,
8K erst späteres Softwareupdate. S3831E: DN500–600 mm Headline gegen DN500–6000 mm
Tabelle bleibt Konflikt; 20 m Tauchtiefe, 0,25–6 m Sonar und 200–1000 m Tether bleiben
getrennt, zwei/vier Stunden gelten bei hoher/niedriger Stufe. Micro-Cutter: Standard
DN80–150, DN250 optional; Axialfeed 100 m Headline gegen 100 mm Tabelle wird nicht
still korrigiert oder zu Lift-/Armreichweite erklärt.

Macco: Bartender 200 Cocktails/h und bis zu 80 Rezepte, Chef 120 Gerichte/h und
Mehrrezeptfunktion sind eigene Angebots-Headlines ohne ausgewähltes Last-/Rezept-
Prüfprotokoll. Generische 300+ Getränke/h und Live-Demo-Präzision sind keine allen
Konfigurationen zugewiesenen Spezifikationen. Monatlich ab 1800/2300/2800 EUR sind
bankabhängige Finanzierungen, keine belegten Kauf-/Mietpreise oder Offers. Kime V5:
60 kg Roboter mit Basis, 1498 mm Roboterhöhe, circa zwei Meter Roboter plus Kiosk;
keine vollständige Systemmasse/-geometrie. 5 kg je Arm nicht addiert; zwei Sechs-
Achs-Arme, drei Kopf-/Halsachsen und 350-Grad-Taillenbereich nicht zu erfundener
Gesamt-DOF zusammengezählt. Fünffingerhände im Versionsblatt, 359–720 Grad/s keine
lineare Fahr-/TCP-Geschwindigkeit. IP44 innen, Betrieb 5–35 °C versus Lager 0–40 °C.
Netz-/Leistungswerte keine Akkulaufzeit. SDK bleibt durch Macco-Personalrechte
beschränkt; CE/USA/FCC/NSF und Hygieneprosa ohne ausgewählten Zertifikatsumfang.
Body-Pose-Vorschau mit Herstellertext erneut belegt, ohne visuelle Videoanalyse.
V5-Daten werden nicht auf alle unversionierten Angebote übertragen.

32 nutzbare aktuelle Quellenkörper: 30 statische HTML, ein gerendertes DOM, ein PDF
mit fünf Text-/Koordinatenseiten. 64 exakte Anker, gerenderte Anker zusätzlich im
gespeicherten DOM geprüft. Statische Macco-Apphülle ausgeschlossen. Ein eigener
Recherchebrowser samt Kontext und sieben Hilfsprozessen geschlossen/verifiziert.
Keine Formulare, gesperrten Hosts, visuelle Bild-/PDF-Analyse oder unabhängigen Tests.
20 Modellseiten mit 356 Feldern: 112 sichtbare Quellenmarkierungen, 204 ausgelassene
Leerfelder, 89 strukturierte Eigenschaften und 66 Merkmalaussagen geprüft. Keine
Treffer im ursprünglichen Modellnennungs-Export; zwei Beschreibungsreferenzen mit
vier Macco-Zielen, acht Rechercheziele mit 142 Feldern und zwei Firmenfokus-/Export-
zeilen geprüft. Global 599 Modellseiten/9325 Felder:
4287 sichtbare Quellen/Werte, 4221
ausgelassene Leer-/NA-Felder und 39 belegte Erstjahre. 1929 strukturierte Preise:
350 Offers, 1579 ohne Offer; keine erneute Verkäuferprüfung sämtlicher Altpreise.

721 Unit-Tests in 57 Dateien und 100 Browserfälle bestanden: 40 neue SROD/Macco-,
38 GreyOrange/KUKA-, 18 Vergleichs- und vier bisherige Macco-Markenfälle, darunter
36 Axe-Prüfungen Desktop/Mobil hell/dunkel. Build: 2979 Seiten, etwa 456 MB.
Datenprüfung: null Fehler, 818 Hinweise, zwölf neue unbekannte Erscheinungsjahre.
Format, Lint, wiederholter Import ohne Ergänzungen sowie Bestands-/Quellen-/Vergleichs-
prüfungen bestanden. Alle 165 eigenen Testprozesse und sieben Recherche-
prozesse beendet, Testserverport frei; Ressourcen anderer Aufgaben erhalten.

Gesamtstand: 1929 Modelle/Konfigurationen, 817 datierte Merkmalssätze, 675 Ergänzungen,
142 bestehende Anreicherungen. 3463 einzelne Merkmalaussagen, 1402 Produktquellen-
verweise, 70 Firmenfokusse. 9325 Felder auf 599 Modellen: 4363 dokumentiert,
4754 unbekannt, 191 widersprüchlich, 17 Roadmap. Alle 518 ursprünglichen Recherche-
ziele mit Merkmalen; 327 mit Feldprüfungen und 191 offen. 68 von 591 Quellengruppen
mit Firmenfokus. Drei ursprüngliche Modellidentitäten, neun Listingidentitäten und
862 Buy-Detailinhalte bleiben offen. Heuristik 114 Modell-/elf Markensuchhinweise,
keine bestätigten Lücken. Weitere SROD-Systemarten und frühere offene Zuordnungen
bleiben erhalten. Vollständigkeit und Marktführung weiterhin unbelegt; lokale
Änderungen. Prüfdateien: `scratch/competitor-research/primary/batch-78/`.


## Ergänzung vom 2. November 2026 – Avidbots und Event 38 (Batch 79)

Sechs bestehende Modelle geprüft: Neo 2, Neo 2W, Kas, E400 Mapping, E400 ISR und
E455. 114 Feldentscheidungen: 59 dokumentiert, 49 unbekannt, sechs widersprüchlich.
Zwei neue Firmenfokusse. Keine zusätzlichen Karten aus Reinigungsköpfen,
Sensor-/Funkoptionen, Home Base, Desinfektionsaufsatz, DROPS oder Command Center.
Alle 1923 übrigen Katalogzeilen, 599 bisherigen Modellprüfungen, 70 Firmenfokusse
und 1961 Quellenidentitäten erhalten. CSV-Spalten und Kategorien unverändert.

Kas: 172 kg leer versus 266 kg GVW; 552-mm-Arbeitsweg, 559-mm-Bürstendurchmesser
und 630-mm-Rakel getrennt. 500–1000 m²/h praktische Leistung versus 2186 m²/h
theoretisches Maximum. 2025-Blatt bis vier Stunden versus Produktseite bis drei
und Einführung 3+ Stunden; Akkuwechsel verlängert Schichten, keine Einzelladung.
Tankbelegung 45/46 L im Datenblatt, 46/45 L in FAQ, zusätzlich 50-L-Abwassertext
und 48-L-Lösung in Broschüre bleibt widersprüchlich. Gerade Durchfahrt 1,05 m im
Blatt versus 1,0 m auf Seite, 1,55-m-Wendemanöver separat. Anpresslast 36/36,8/40,8 kg
ist keine Roboter-Nutzlast. Allgemeine Neo-FAQ auf Kas-Seite liefert keine Kas-Werte.

Neo 2: Disc-GVW 661/669 kg, Zylinder-GVW 663/688 kg inklusive Akkus und voller
Lösung; Leermassen 283/291 bzw. 285/290 kg. Untere Seiten-GVW 581,5 kg ungeklärt.
Konfigurationsbezogene Bürstenbreiten und theoretische Flächenleistungen getrennt;
metrische 1374-mm-Höhe bleibt mit Hinweis auf inkonsistente Zollangabe. Neo 2
maximal 0,5 % Reinigungssteigung im gewählten Blatt, Neo 2W 3 % im 2024-Blatt.
Neo 2W: Paletten-/Gabelerkennung, Bulk Navigator und Debris Diverter mit Vorreinigung
und Standortprüfung; Home Base ist Rückkehrpunkt, kein belegter Lade-/Füll-Dock.
480-Stunden-Wartung ist keine Akkulaufzeit. Neo 2 eingeführt am 1. September 2020,
Kas am 10. April 2024; historische Datumsangaben nicht aus PDF-Uploaddaten abgeleitet.

Event 38: Erster HTML-main enthielt nur den Hero. Gesicherter #main-Rahmen enthält
auch technische Abschnitte und wurde aus Originalbytes reproduziert. E400 Mapping:
3-m-Spannweite/1,5-m-Länge getrennt vom Packmaß; 20 lb/9,3 kg Startmasse und
3 lb/1,3 kg Nutzlast als nicht exakte Hersteller-Einheitenpaare erhalten. 90 Minuten,
54 Meilen Flugstrecke und fünf Meilen Telemetrie getrennt; PPK ohne erfundene
Navigationsgenauigkeit, leichte Regenbeständigkeit ohne IP-Code. E400 ISR:
120 Minuten bei voller Flugmasse 20 lb/9 kg ist weder Leermasse noch MTOW;
320-g-Gimbal keine maximale Flugzeug-Nutzlast. Vier-Minuten-Aufbau keine Ladezeit;
40×-Zoom aus 20× optisch und 2× digital. IP53, Temperatur und Wind bleiben
Herstellerangaben. E455: über zwei Stunden mit sieben Pfund unter 55 lb Gesamtmasse
nicht auf Zwölf-Pfund-Option übertragen. Aktuelle 60 lb gegen 65 lb der Einführung
bleiben Konflikt; HTML datePublished 7. November 2023 getrennt von Änderung 2026.
BVLOS-/Part-108-Texte keine pauschale Flugerlaubnis; DROPS-Integration vom September
2026 liefert keine universell verbaute Hand, Ladezeit oder unbegrenzte Flugausdauer.

24 nutzbare Quellenkörper: 15 HTML, neun PDF mit 36 Text-/Koordinatenseiten,
108 exakte Quellenanker. Drei 404-Quellen ausgeschlossen. Keine Formulare,
gesperrten Hosts erneut abgerufen, Recherchebrowser oder visuelle PDF-/Bildanalyse.
Sechs Modellseiten: 114 Felder, 59 Quellenmarkierungen, 43 ausgelassene Leerfelder,
50 strukturierte Eigenschaften und 25 Merkmalaussagen geprüft. Sechs Modell-Export-
zeilen/sieben Zielvorkommen mit 133 Feldvorkommen, zwei Firmenfokus-Seiten/-Exporte,
zwei Beschreibungsreferenzen/drei Ziele und sechs Rechercheziele/114 Felder geprüft.
Global 605 Modellseiten/9439 Felder mit 4346 sichtbaren Quellenwerten, 4264
ausgelassenen Leer-/NA-Feldern und 42 belegten Erstjahren. 1929 Preisangaben:
350 Offers und 1579 ausgelassene Offers; keine aktuelle Verkäuferprüfung aller Altpreise.

729 Unit-Tests in 58 Dateien, 20 Python-Tests und 92 Browserfälle bestanden:
34 neue Avidbots/Event-38-, 40 SROD/Macco- und 18 Vergleichsfälle, darunter
36 Axe-Prüfungen Desktop/Mobil hell/dunkel. Build 2979 Seiten, ungefähr 456 MB.
Datenprüfung null Fehler, 817 Hinweise; ein bisher unbekanntes Erstjahr ergänzt.
Format, Lint, Bestands-, Quellen-, Vergleichs- und Wiederholungsimportprüfung bestanden.
Alle 157 eigenen Testprozesse beendet, Testserverport frei;
Ressourcen anderer Aufgaben erhalten. Dies ist keine erneute vollständige Browser-Suite.

Gesamtstand: 1929 Modelle/Konfigurationen, 817 Merkmalssätze, 3470 einzelne Aussagen,
1412 Produktquellenverweise, 72 Firmenfokusse. 9439 Felder auf 605 Modellen:
4422 dokumentiert, 4803 unbekannt, 197 widersprüchlich, 17 Roadmap. Von 518
ursprünglichen Zielen haben 333 Feldprüfungen und 185 bleiben offen. Firmenfokusse
decken 70 von 591 Quellengruppen ab. Drei Modell- und neun Listingidentitäten,
862 Buy-Detailinhalte und vorherige offene Portfolios bleiben erhalten; 114 Modell-
und elf Markenhinweise bleiben Heuristiken. Vollständigkeit und Marktführung unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-79/`.

Auf Nutzerwunsch werden abgeschlossene Zwischenstände committed und auf
`origin/codex/competitor-directory-expansion` gepusht. Lokale Rohrecherche und
andere Aufgaben bleiben außerhalb dieser Commits; Pages-Publishing ist unverändert.


## Ergänzung vom 2. November 2026 – Geek+ (Batch 80)

31 benannte Modelle bzw. ausdrücklich bezeichnete Versionen in P/M/F/RS/S/X:
28 Ergänzungen und drei bestehende Modelle. 682 Feldprüfungen: 310 dokumentiert,
352 nicht dokumentiert, 20 widersprüchlich. Ein Firmenfokus ergänzt. Alle 1926
unbeteiligten Katalogzeilen, 605 bisherigen Modellprüfungen, 72 Firmenfokusse und
1961 Quellenidentitäten erhalten. Keine neuen CSV-Spalten oder Kategoriewechsel.

P500R: 600 kg Nutzlast; aktuelle globale Lastgeschwindigkeit 1,5 m/s gegenüber
japanischen 1,6 m/s. P800R aktuell 142 kg, regional 165 kg inklusive Batterie,
2022 162 kg; aktuelle 1095-mm-Länge gegenüber früher 1090 mm. Reguläre 195-mm-
und dickere PopPick-275-mm-Höhe bleiben Konfigurationen. Aktuelle 55-mm-Hubstrecke
gegenüber früheren 60 mm ungeklärt. P1200R aktuell 288 kg, regional 320 kg,
historisch 187 kg und abweichende Geschwindigkeiten. P800R V6.0 bleibt die explizite
historische 800-kg-Konfiguration. Globale/regionale/historische Zuordnung ungeklärt.
Ladeintervalle von zehn Minuten für definierte Arbeitsintervalle sind keine volle
Ladezeit; Abweichungen 1,5–2 gegen 2–3 Stunden bleiben bei den gewählten P-Quellen.

M200C hat 300 kg Nutzlast trotz seines Namens, 106 kg Körpermasse und getrennte
Fahrt-/endgestützte Stopptoleranzen. MP1000R-SNE V2.1 hat eigene 1105×855×275-mm-
Maße und wird nicht in generisches MP1000R oder M1000R umgedeutet. Seine gedruckte
0,7-m-Durchfahrt bei 855-mm-Körperbreite bleibt ungeklärt; 774-mm-Drehdurchmesser
wird kein erfundener Radius. M2000C/M3000C nennen ausdrücklich minimale,
anpassbare 1800×1000×350-mm-Körpermaße; Regalgrößen bleiben getrennt.

F12ML-Nutzlast ist höhenabhängig: 1500/1200/1000 kg in den Blattstufen
0–2/2–2,5/2,5–3 m. Blatt nennt 2300-mm-Hubhöhe gegenüber Webseite
2344/2844/3244 mm; Zuordnung ungeklärt. Stufen bis drei Meter beweisen nicht,
dass die 2300-mm-Version drei Meter erreicht. F20MT 2000 kg und 120-mm-Hub.
Körper-/Gabelmaße, Fahr-/Hubgeschwindigkeit und volle Ladezeit bleiben getrennt.
Gedruckte F12ML-„Rotation speed ≥800mm“ wird weder Winkelgeschwindigkeit noch
angenommener Wenderadius. CE/UKCA/PLd bleiben spezifische Herstellerangaben.

RS5-D, RS8-DA/DX, RS11-DA/DX behalten aktuelle 40-kg-Lastangaben. Historische
240/320-kg-Maximalnutzlast wird ohne belegte Aggregat-/Einzelbehälterzuordnung
nicht gleichgesetzt. RS8-DA 900/1000-kg-Masse und 4700/4600-mm-Körperhöhe bleiben
Quellenkonflikte; Lagerhöhe 8220 mm ist keine aktuelle Hubhöhe 7935 mm.
RS11-DA-Hubzyklus zwölf Sekunden auf Seite gegenüber zehn im Blatt bleibt im
Merkmalstext. Batteriestrom, Ah und Zyklen liefern keine Lauf-/Ladezeit.
RS Air hat im Hubhöhenfeld „Minimum Aisle width:1015“ ohne bestätigte Einheit;
Hubhöhe und Gangbreite bleiben leer. P40/P40R sind beide explizit bezeichnet,
aber ihre Gleichsetzung bleibt unbewiesen: Webseite 386 mm, P40R-Blatt 383 mm.
Historisches P40 75 kg/andere Maße wird nicht zu einer erfundenen dritten Generation.

S-Serie: sechs ausdrücklich benannte Blattversionen statt drei zusätzlicher
unversionierter Doppelkarten. S20C V2.0 75 kg/560-mm-Länge/2,0 m/s beladen,
V3.0 78 kg/650 mm/2,5 m/s. Generische Seitenzuordnung ungeklärt; S20T-Seite
2,5 m/s beladen überschreibt nicht V2.0-Blatt 2,0 m/s. Verstellbare Trägerhöhe
S20C-A ist keine belegte Hubstrecke. X1200H 245 kg und explizit beladen/unbeladen
2,5/1,8 m/s werden nicht vertauscht. X1200Z 270 kg, 1,6/1,5 m/s und getrennte
Raumtemperatur-/Kühlhaus-Akkuwerte. 8–10 h nach 1,2 h Ladung gehört nicht zur
Kühlhausvariante mit 6–8 h nach zwei Stunden. „Motor-driven“ ist kein belegtes
Lokalisierungsverfahren; Kühlhaus-CE/UL-Batterie ist TBD. Historisches X1200
bleibt separat. Dokumentdatum liefert kein Erstjahr oder aktuelle Lieferbarkeit.

21 nutzbare URL-Antworten (acht HTML, 13 PDF), davon 16 verschiedene Inhaltskörper
(acht HTML/acht PDF). 76 gespeicherte PDF-Text-/Koordinatenseiten einschließlich
identischer Downloads; 49 Seiten in den verschiedenen PDF-Inhalten. 97 exakte
Textanker geprüft. Leere 200-Antwort einer alten P-Route ausgeschlossen.
Keine Formulare, Recherchebrowser, erneuten Abrufe bekannter gesperrter Hosts oder
visuelle PDF-/Bildprüfung. Quellen-Hashes und Entscheidungen versioniert in
`reports/competitor-batch-80-evidence.json`; Rohdateien lokal in
`scratch/competitor-research/primary/batch-80/`.

742 Unit-Tests in 59 Dateien, 20 auf die Wettbewerber-Skripte begrenzte Python-Tests
und 82 Browserfälle bestanden: 30 Geek+-, 34 Avidbots/Event-38- und 18 Vergleichsfälle,
darunter 32 Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build
3007 Seiten, ungefähr 460 MB. Datenprüfung null Fehler, 845 Hinweise, davon
28 zusätzliche unbelegte Erstjahre; kein Erstjahr geraten. Lint, Format, Quellen-,
Bestands-, Vergleichs-, Preis- und Wiederholungsimportprüfung bestanden. Alle
143 erfassten eigenen Testprozesse beendet; Port4321 frei,
Ressourcen anderer Aufgaben erhalten. Dies ist keine vollständige Browser-Suite.

Gesamtstand: 1957 Modelle/Konfigurationen, 703 Ergänzungen, 845 Merkmalssätze,
3576 Aussagen, 1465 Produktquellenverweise, 73 Firmenfokusse. 10121 Felder auf
636 Modellen: 4732 dokumentiert, 5155 unbekannt, 217 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 336 Feldprüfungen und 182 bleiben offen.
Firmenfokusse decken 71 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und alle vorherigen offenen Portfolios
bleiben erhalten. Auch Geek+-Altsysteme, neue Systemnamen und regionale Portfolios
bleiben Recherchepunkte; Vollständigkeit und Marktführung sind unbelegt.

Zwischencommit `ea35b27` mit Geek+-Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
folgen als zweiter Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Locus Robotics und Seegrid (Batch 81)

Acht ausgewählte Modelle: zwei Ergänzungen (historisches Locus Max, Seegrid Lift
EL1) und sechs bestehende Modelle. 184 Feldprüfungen: 49 dokumentiert, 132 nicht
dokumentiert, drei widersprüchlich. Seegrid-Firmenfokus ergänzt, vorhandenen
Locus-Fokus vertieft. Alle 1951 unbeteiligten Katalogzeilen, 636 bisherigen
Modellprüfungen, 72 anderen Firmenfokusse und 1961 Quellenidentitäten erhalten.
Keine neuen CSV-Spalten oder Kategoriewechsel.

Origin: 36 kg/80 lb als gerundetes Herstellerpaar, bis 14 h und ungefähr 50 min
Laden; Last-/Arbeitsprofil und Ladezustandsfenster fehlen. Die Seite benennt die
Achsen ihrer 20,4×22,8×62-Zoll-Maße nicht ausdrücklich. Vector: 272 kg/600 lb,
gleiche Lauf-/Ladezeitbedingungen. Öffentliche Einführung am 28. März 2022 steht
gegenüber 2023 in der aktuellen Firmenchronik; Versand-/Regionszuordnung offen.
Omnidirektionale Fahrt liefert keinen numerischen Wenderadius.

Array: globale Herstellerankündigung am 13. April 2026, frühe nordamerikanische
Einsätze und geplante regionale Skalierung getrennt. NeuraGrasp ist ein weicher,
nachgiebiger Greifer laut Hersteller; Gelenkzahl, Last und Reichweite unbekannt.
100 Prozent SKU-Abdeckung gehört zum gemischten System. 24/7-Betrieb und
250K/500K Einheiten pro Tag liefern keine einzelne Akkulaufzeit oder Roboterleistung.
Max ist in der Firmenankündigung vom 28. März 2022 ausdrücklich benannt; damalige
begrenzte Verfügbarkeit beweist keine heutige Lieferbarkeit. Keine numerische
Max-Last aus veralteten Suchauszügen oder inzwischen geänderten Blogtexten übernommen.

CR1: 4000 lb Palettenlast, maximal automatisch 5 mph und aktuell 15 ft Hubhöhe;
künftige höhere Masten sind keine heutige Bewertung. Debütankündigung vom
15. Februar 2024 steht gegenüber 2025 in der Firmenchronik. RS1: 3500 lb und
maximal 5 mph; Hero/FAQ nennen sechs Fuß, die Spezifikationskarte sechs Zoll.
Dieser Einheitenkonflikt bleibt ungeklärt. Seine Einführung im Dezember 2022 ist
in der CR1-Ankündigung ausdrücklich datiert. EL1: 2700 lb, maximal automatisch
3,4 mph und 5 ft 2 in Hubhöhe. Gabelabmessungen sind keine Körpermaße.
EL1-Seite behauptet VDA5050 2.1; ein Firmenplan vom Juli 2025 für 2026 beweist
keine abgeschlossene Umstellung aller Modelle.

S7: bis 10000 lb gesamte gezogene Wagenlast, keine aufliegende Nutzlast oder
Fahrzeugmasse; maximal automatisch 4 mph und Steigung bis 2,5 Prozent unter
Hersteller-/Einsatzbedingungen. Kein Palettenhub. Auto-Charge und Fleet Central
belegen keine numerische Einzelakku-Laufzeit, volle Ladezeit oder universelle
Kompatibilität. Unbekannte Eigengewichte, IP-Codes und Positioniertoleranzen
bleiben leer. RaaS/ROI liefert keinen konkreten Kaufpreis oder strukturiertes Angebot.

22 nutzbare HTML-URL-Inhalte, davon 21 verschieden, und 46 exakte Stichprobenanker
gegen gespeicherte Bytes geprüft. Zwölf 404-Antworten und drei Highspot-200-
Unsupported-Browser-Seiten ausgeschlossen; zwei Seegrid-Hub-Downloads mit Timeout.
Ein eigener Diagnosebrowser prüfte die drei Viewer, ohne nutzbares PDF. Seine
sieben Prozesse sind beendet. Keine Formulare, visuelle PDF-Prüfung, importierten
numerischen PDF-Suchauszüge oder erneuten Abrufe bekannter gesperrter Hosts.
Versioniertes Quellen-/Entscheidungsprotokoll:
`reports/competitor-batch-81-evidence.json`; Rohbelege lokal unter
`scratch/competitor-research/primary/batch-81/`.

751 Unit-Tests in 60 Dateien, 20 Wettbewerber-Python-Tests und 68 ausgewählte
Browserfälle bestanden: 20 Locus/Seegrid-, 30 Geek+- und 18 Vergleichsfälle,
darunter 24 Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung.
Build 3009 Seiten, ungefähr 461 MB. Datenprüfung null Fehler und 842 Hinweise
(drei weniger): ein neues unbelegtes Erstjahr, ein neues belegtes historisches
Erstjahr und vier bisherige Jahre mit belegtem oder widersprüchlichem Meilenstein.
Lint, Format, Wiederholungsimport (null Ergänzungen), Bestands-, Quellen-,
Seiten-, Vergleichs-, Preis- und globale Feldmetadatenprüfung bestanden.
Alle 152 erfassten eigenen Testprozesse beendet;
Port4321 frei, Ressourcen anderer Aufgaben erhalten. Keine vollständige Browser-Suite.

Gesamtstand: 1959 Modelle/Konfigurationen, 705 Ergänzungen, 847 Merkmalssätze,
3593 Aussagen, 1480 Produktquellenverweise und 74 Firmenfokusse. 10305 Felder auf
644 Modellen: 4781 dokumentiert, 5287 unbekannt, 220 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 342 Feldprüfungen und 176 bleiben offen.
Firmenfokusse decken 72 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `4e7b62d` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
folgen als zweiter Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Robotnik (Batch 82)

15 benannte Angebote in sieben Plattformfamilien plus RB-THERON FP: neun neue
Modelle/Varianten und sechs vertiefte Bestandsprüfungen. 366 Felder: 167 dokumentiert,
189 nicht dokumentiert und zehn widersprüchlich. Firmenfokus ergänzt. Alle 1953
unbeteiligten Katalogzeilen, 644 bisherigen Modellprüfungen, 74 Firmenfokusse und
1961 Quellenidentitäten erhalten. Acht kommerzielle Ergänzungen und eine
Bildungsvariante nutzen bestehende Spalten; keine Kategoriewechsel.

RB-KAIROS: 100 kg mit Standardrädern, 250 kg nur mit stärkeren optionalen Rädern.
115 kg Basismasse und 978×776×690 mm sind keine Maße/Masse der Plus-Installation.
RB-KAIROS+ trennt UR7e/UR12e/UR16e-Armlast 7,5/12,5/16 kg, Restplattformlast
230/215/215 kg und Robotermasse 135/150/150 kg. Separate Armgewichte nicht nochmals
addiert; Rad-/Restlastzuordnung bleibt qualifiziert.

RB-ROBOUT: 1000 kg Standard, 2000 kg nur mit geänderter Länge/Breite. Blattmaße
1758×891×372 mm und 360 kg nicht unbesehen jeder schweren Variante zugeordnet.
Gemeinsamer Hero 8 h steht gegen technisches Basisfeld/Blatt 10 h. RB-ROBOUT+
trennt fünf UR-Arme, konfigurierte Masse und Restlast 755/765/760/735/765 kg;
800-kg-Hero/1000-kg-Basiskomponente nicht ohne Zuordnung gleichgesetzt. UR15-
Höhe 1758 mm in Tabelle gegen 1785 mm in Zeichnung bleibt widersprüchlich.
Optionale 1200-/800-mm-Säulen liefern keine Hubstrecke oder maximale Gabelhöhe.

WATCHER/WATCHER XL: 73/75 kg Selbstmasse, 50/40 kg Fracht, IP54/IP55 sowie 5/10 h.
IP65-Mikrofon und Lautsprecher sind keine IP65-Zertifizierung des Gesamtsystems.
XL-Wechselakku/14-cm-Hindernisfähigkeit nicht auf das Standardmodell übertragen.
FIQUS: 450 kg/1000 kg Fracht, IP42 und 10 h. FIQUS+: 600 kg konfigurierte Masse,
700–720 kg Restplattformlast und getrennte UR-Armlasten bis 35 kg, IP53 und 9 h.
±300 mm Querführung ist keine vertikale Hubstrecke oder zusätzliche Armreichweite;
verstellbare Breite 1177–1610 mm und Doppelarm bleiben Optionen.

SUMMIT: 65 kg, 50 kg Fracht, IP54 und 5 h. SUMMIT+ mit aktuellen Kinova-Optionen
70/72/73 kg, Armlast 0,5/4/4 kg und Reichweite 760/891/902 mm. Blatt-Hero 40 kg
Restlast widerspricht Tabelle 45/43/42 kg. XL-GEN leitet auf RB-GEN+ weiter,
benennt im Inhalt aber SUMMIT+ mit anderen Daten; historische Generation nicht
zugeordnet und keine zusätzliche erfundene Modellkarte angelegt.

THERON: 70 kg/200 kg, 8 h, differentialer Antrieb. Optionale Aufbauhöhe 418 statt
320 mm liefert keine belegte 98-mm-Hubstrecke. THERON+: UR7e in Seite/Tabelle,
UR5e in Blattprosa; 6 h technisch gegen 8 h im selben Blatt-Hero. Alternative
omnidirektionale Basis nicht vollständig den Tabellenwerten zugeordnet. FP ist
als benannte Ausbildungsvariante erfasst: 70 kg/200 kg, 5 h und eigenes Blatt.
Tabelle 717×550×320,5 mm gegen Zeichnung 717,70×550,56×320,40 mm bleibt als
ungeklärte Präzisions-/Rundungsabweichung sichtbar; kein Erstjahr aus AF08.26.

VOGUI: 165 kg Selbstmasse und 150 kg Fracht. VOGUI+ mit UR7e/UR8 Long/UR12e
185/210/200 kg konfigurierte Masse, 7,5/10/12,5 kg Armlast und getrennten Restlasten.
125 kg Plattformangabe auf Seite gegen 130/105/115 kg im Blatt bleibt ungeklärt.
1750-mm-Reichweite des UR8 Long hat ausdrücklich eingeschränkten Arbeitsraum.
Keine numerische Dockinggenauigkeit, volle Ladezeit, Erstjahre oder Preise geraten.
ROS2/RLC/Command Manager/HMI und URCap bleiben Software-/Integrationsbefunde;
Hersteller-UR+/ISO/CE/Alleinstellungsbehauptungen nicht unabhängig zertifiziert.

30 nutzbare URL-Inhalte: 15 HTML und 15 PDF, 28 verschiedene Inhaltskörper. 41 PDF-
Text-/Koordinatenseiten, 114 exakte Stichprobenanker sowie 42 koordinatengeprüfte
Tabellenzeilen mit 98 Zahlenzellen geprüft. 15 öffentliche Viewer-Hüllen zugunsten
der verlinkten PDF-Inhalte ausgeschlossen. Keine Formulare, Recherchebrowser,
bekannten gesperrten Hosts oder visuellen PDF-Prüfungen. Quellenprotokoll:
`reports/competitor-batch-82-evidence.json`; Rohdateien lokal unter
`scratch/competitor-research/primary/batch-82/`.

761 Unit-Tests in 61 Dateien, 20 Wettbewerber-Python-Tests und 66 ausgewählte
Browserfälle bestanden: 28 Robotnik-, 20 Locus/Seegrid- und 18 Vergleichsfälle,
darunter 20 Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build
3018 Seiten, ungefähr 462 MB. Datenprüfung null Fehler, 851 Hinweise (neun neue
unbelegte Erstjahre). Lint, Format, Wiederholungsimport (null Ergänzungen), Bestands-,
Quellen-, Seiten-, Vergleichs-, Preis- und globale Feldmetadatenprüfung bestanden.
Alle 115 erfassten eigenen Testprozesse beendet;
Port 4321 frei, Ressourcen anderer Aufgaben erhalten. Keine vollständige Browser-Suite.

Gesamtstand: 1968 Modelle/Konfigurationen, 714 Ergänzungen, 856 Merkmalssätze,
3635 Aussagen, 1505 Produktquellenverweise und 75 Firmenfokusse. 10671 Felder auf
659 Modellen: 4948 dokumentiert, 5476 unbekannt, 230 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 345 Feldprüfungen und 173 bleiben offen.
Firmenfokusse decken 73 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `ef7c49f` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Rapyuta Robotics (Batch 83)

PA-AMR Weight Inspection als benannte Variante ergänzt; PA-AMR, PA-AMR XL,
PA-AMR Extra High Capacity und AFL vertieft geprüft. 125 Felder: 38 dokumentiert,
83 unbekannt und vier widersprüchlich. Ein Firmenfokus ergänzt. Alle 1964
unbeteiligten Katalogzeilen, 659 früheren Modellprüfungen, 75 Firmenfokusse und
1961 ursprünglichen Quellenidentitäten unverändert; keine neuen CSV-Spalten.

Standard/XL: acht Stunden in HTML gegen zehn Stunden in der weiterhin verlinkten
Familienbroschüre; Batterie-/Generations-/Einsatzzuordnung ungeklärt. Zwei 50-L-
oder vier 10-L-Behälter beim Standardmodell sind von 45 kg Gesamtfracht getrennt.
49×33×30 cm bezeichnen transportierbare Gegenstände, keine Chassisabmessungen.
10–15 cm Lokalisierung bleibt eine Herstellerangabe ohne definierte Fehlermetrik.
Der XL-Link führt zur High-Capacity-Seite; deren 45 kg Eigenmasse und 1,2 m
Gangempfehlung werden ohne Generationenbeleg nicht auf XL übertragen. Kein
zusätzliches identisches Zwei-Behälter-Chassis aus dem Redirect erfunden.
Extra High Capacity behält drei 75-L-Behälter, 39,2 kg Fracht, 63 kg Eigenmasse und
1,2 m/s; die vorläufige Vier-Fuß-Gangbreite ist kein bestätigter Grenzwert.

Weight Inspection: 40 kg Fracht sind keine Eigenmasse. 610×580 mm sind nur
Breite/Tiefe, die Höhe bleibt offen. Bis zu vier Wiegebehälter und Unterstützung
für Behälter bis 50 L belegen keine vier gleichzeitig passenden 50-L-Behälter.
10 g Mindestartikelgewicht und eine Reaktion unter einer Sekunde sind weder
Wiegegenauigkeit noch Kommissionierdurchsatz. Automatische/manuelle Ladung
bleibt mit einer/zwei Stunden getrennt; Ladezustandsfenster und Bedingungen fehlen.

AFL: 1,35 Tonnen und 4,5 m Hubhöhe ohne gemeinsamen Last-Höhen-Nachweis; drei
Stunden Ladung sind keine Betriebsdauer. 30 Paletten pro Stunde sind ein
Einsatzort-Ergebnis. Seitliche Abstände 150–200 mm und 50 mm hinten liefern keine
gesamte Mindestgangbreite. Japan-Verfügbarkeit, Altmodell-Videos und PLd-Sensor-
Behauptung behalten ihren Geltungsbereich. ASRS bleibt als konfigurierbares
Robotik-Lagersystem im Firmenfokus, rapyuta.io als Plattform; kein unbenanntes
Einzelchassis oder garantierter Faktor für Durchsatz/Speicherdichte abgeleitet.

14 URL-Abrufe: neun nutzbare Inhalte (acht HTML und eine verlinkte PDF-Broschüre).
Fünf HTTP-403-Routen ausgeschlossen und nicht erneut angefragt. Neun exakte
Stichprobenanker und Körper-Hashes im Quellenprotokoll
`reports/competitor-batch-83-evidence.json`. PDF-Text ausgewertet, keine visuelle
PDF-Prüfung behauptet. Keine Formulare oder Recherchebrowser verwendet.

769 Unit-Tests in 62 Dateien, 20 Wettbewerber-Python-Tests und 40 ausgewählte
Browserfälle bestanden: 22 Rapyuta- und 18 Vergleichsfälle, darunter zwölf
Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build: 3019 Seiten,
ungefähr 462 MB. Datenprüfung: null Fehler, 852 Hinweise (ein zusätzliches
unbelegtes Erstjahr). Lint, Format, Wiederholungsimport mit null Ergänzungen,
Bestands-, Quellen-, Seiten-/Export- und Vergleichsprüfung bestanden. Metadaten
aller 664 geprüften Modellseiten mit 10796 Feldern kontrolliert; die übrigen
Herstellerquellen wurden dabei nicht erneut recherchiert. Veraltete öffentliche
Merkmalsdaten im ersten Testlauf erkannt und vor dem finalen Build neu erzeugt.
Alle 236 erfassten eigenen Testprozesse beendet; Port 4321 frei.

Gesamtstand: 1969 Modelle/Konfigurationen, 715 Ergänzungen, 857 Merkmalssätze,
3645 Aussagen, 1511 Produktquellenverweise und 76 Firmenfokusse. 10796 Felder auf
664 Modellen: 4986 dokumentiert, 5559 unbekannt, 234 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 348 Feldprüfungen und 170 bleiben offen.
Firmenfokusse decken 74 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `# BuyAn` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Cyberdyne (Batch 84)

Zwölf benannte Angebote ergänzt: HAL-FL08, HAL-FL07, HAL-FL05, Medical HAL Single
Joint, Well-being HAL Single Joint, HAL Lumbar Type for Well-being (BB04), HAL-LB06,
HAL-LB03-SSSJP, HAL-LB01, CL02, Transportation Robot und Medicalcare Pit
(HPD-BT04-JP). HAL-ML08, HAL-ML07 und HAL-ML05 vertieft geprüft. 384 Felder:
96 dokumentiert, 288 unbekannt; ein neuer Firmenfokus. Alle 1966 unbeteiligten
Katalogzeilen, 664 früheren Modellprüfungen, 76 Firmenfokusse und 1961 ursprünglichen
Quellenidentitäten unverändert; keine neuen CSV-Spalten oder Kategorieübertragungen.

Bei HAL bleiben Medizin-/Well-being-Angebote, Ein-/Zweibeinmasse inklusive Zubehör,
Geräteabmessungen und Körpergrößen/-massen getrennt. Die EU-Unterlage gilt nur für
ML07/ML08. Einzelgelenk-Masse/-Maße schließen Steuerung und Batterie aus. BB04 hat
eine gemeinsame 3,1-kg-Tabellenzelle für drei Größen; Lauf-/Ladezeit bleiben unbekannt.
Die japanische Arbeitshilfe ist ausdrücklich LB06 (2,7 kg, Batterieumfang offen;
zehn Stunden Betrieb, drei Stunden Ladung), die englische LB03-SSSJP (3,1 kg mit
Batterie; 4,5 Stunden Betrieb, zwei Stunden Ladung). Keine Sprachalias-Gleichsetzung
oder Übernahme dieser Werte auf das erwähnte LB01. IPX4 und IP5X bleiben getrennte
Herstellerangaben. Ein neuer Filter „Arbeitsunterstützung“ mit englischen/deutschen
Texten erschließt die gewerblichen Arbeitshilfen.

CL02: bis 3000 m² je Ladung ist kein Stundenwert; optionale Desinfektionseinheit
und Fahrstuhlanbindung bleiben optional. Transportplattform: 200 kg Bordfracht
sind keine Zugkraft und keine 25 kg Eigenmasse; Japan-Verfügbarkeit bleibt begrenzt.
Medicalcare Pit: robotisch unabhängige linke/rechte Entlastung mit HAL-Daten;
120 kg Körpermasse inklusive HAL/Orthesen sind keine freie Fracht. Bandgeschwindigkeit
0,2–8 km/h und 110 mm Einstiegshöhe sind weder mobile Fahrgeschwindigkeit noch
Hubweg. HALTREAD, All-in-One, Acoustic X, CYIN und Dienste bleiben abgegrenzte
Portfoliofunde. Keine Zulassung oder unabhängige klinische Wirkung bestätigt.

26 Abrufversuche: 24 nutzbare Inhalte (23 HTML und eine 14-seitige PDF). Ein
vorübergehender DNS-Fehler wurde behoben; eine bildbasierte vierseitige Broschüre
bleibt ungelesen und ausgeschlossen. 24 exakte Stichprobenanker und Körper-Hashes,
sechs HTML-Modellspalten, zwei gemeinsame Massezellen und sechs PDF-Zellen anhand
der Textkoordinaten geprüft. Keine visuelle PDF-Prüfung behauptet. Keine gesperrten
Hosts erneut angefragt, Formulare oder Recherchebrowser verwendet. Dauerhafte
Quellen-/Entscheidungsbelege: `reports/competitor-batch-84-evidence.json`.

781 Unit-Tests in 63 Dateien, 20 Wettbewerber-Python-Tests und 44 ausgewählte
Browserfälle bestanden: 26 Cyberdyne- und 18 Vergleichsfälle, darunter zwölf
Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Zwei anfängliche
Testfehler erwarteten einen Dezimalpunkt im deutschen Vergleich; die bestehende
korrekte Kommadarstellung und Modellqualifikation werden nun ausdrücklich geprüft.
Build: 3031 Seiten, ungefähr 469 MB. Datenprüfung: null Fehler, 864 Hinweise
(zwölf zusätzliche unbelegte Erstjahre). Lint, Format, Wiederholungsimport mit null
Ergänzungen, Bestands-, Quellen-, Seiten-/Export- und Vergleichsprüfung bestanden.
Metadaten aller 679 geprüften Modellseiten mit 11180 Feldern kontrolliert, ohne
erneute Herstellerrecherche für frühere Modelle. Alle 265
erfassten eigenen Testprozesse beendet; Port 4321 frei.

Gesamtstand: 1981 Modelle/Konfigurationen, 727 Ergänzungen, 869 Merkmalssätze,
3698 Aussagen, 1536 Produktquellenverweise und 77 Firmenfokusse. 11180 Felder auf
679 Modellen: 5082 dokumentiert, 5847 unbekannt, 234 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 351 Feldprüfungen und 167 bleiben offen.
Firmenfokusse decken 75 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `d4695f0` mit Daten, Filter und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Interbotix und Trossen (Batch 85)

28 benannte Angebote ergänzt, drei bestehende ALOHA-Kits vertieft geprüft.
590 Felder: 200 dokumentiert, 353 unbekannt, neun widersprüchlich und 28 Roadmap.
Zwei Firmen-/Markenfokusse ergänzt. Alle 1978 unbeteiligten Katalogzeilen,
679 früheren Modellprüfungen, 77 Firmenfokusse und 1961 ursprünglichen
Quellenidentitäten unverändert; keine neuen CSV-Spalten oder Kategorieübertragungen.
Trossens bestehendes Quellenprofil ordnet nun ausdrücklich die 16 neuen Angebote
unter „Trossen Robotics“ zu. Interbotix bleibt eine getrennte Hardwaremarke mit
15 Modellen. Keine Quellennamen, Aliasse oder Erfassungsdaten überschrieben.

Zwölf X-Series-Arme mit eigener Modellübersicht: PincherX-100/-150,
ReactorX-150/-200, WidowX-200/-250/-250 6DOF, ALOHA WidowX-250 6DOF,
ViperX-250/-300/-300 6DOF und ALOHA ViperX-300 6DOF. Volle angegebene Arbeitslast
nur mit empfohlener maximal halber Ausladung; Arbeitsraum und Kühlpausen bleiben
qualifiziert. Servozahl ist keine Arm-DOF-Zahl, Wiederholgenauigkeit keine absolute
Genauigkeit. PincherX-150 nennt wörtlich 150 mm Reichweite bei 900 mm Gesamtspanne;
keine eigenmächtige Korrektur auf 450 mm. Axiale Kettenlänge und Greiferwagenabstand
bleiben von Reichweite und Kontaktöffnung getrennt.

ALOHA Stationary/Mobile/Solo bleiben die ursprünglichen Interbotix-Kits. Mobile
nennt 122 kg, 1 m/s und 1,4 kWh; Energie wird nicht zu Laufzeit umgerechnet.
750 g Traglast und 750 mm Reichweite gehören zum jeweiligen ViperX-Follower mit
Ausladungsgrenze. Frühere Trossen WidowX AI Base/Leader/Follower und die drei
AI-Kits bleiben eigene Angebote. Sechs Armachsen plus Greifer sind keine sieben
Armachsen. Rechneroptionen und Aussagen zur Modellkompatibilität behalten ihre
Bedingungen; weder Kit-Gesamtmassen noch aktuelle Lieferbarkeit abgeleitet.

Neue WidowX Core Follower, Core Leader, Pro und Heavy sowie Rivet Base, die
Rivet-Konfiguration mit zwei Pro-Armen/Kameras, drei Workbench-Lite-Arm-/Kamera-
Pakete und der angekündigte volle Workbench sind separat erfasst. Aktuelle
Arm-Unterlagen sind ausdrücklich vorläufig: Core/Pro-Reichweite 790 mm statt
700 mm auf der Produktseite, Heavy 1114 mm statt 1400 mm. Heavy nennt 6 kg je Arm,
das Workbench-Heavy-Paket 8 kg; Konfiguration/Lastbedingungen ungeklärt. Die
2026-Preise sind vorgeschlagen und warten auf Freigabe, keine festen strukturierten
Kaufangebote. Rivet Base enthält keine Arme, Kameras oder eingebauten Rechner;
890 mm sind vertikaler Verfahrweg, keine absolute Hubhöhe. Lite-Kamerapakete und
Rechnerverzicht bleiben getrennt, voller Workbench ausdrücklich „coming soon“.
Glide ist passiv, Cockpit ein Bedienstand und TRumi ein handgeführter Datensammler.
Sie sowie Computer, Dienste und fremde UGV-Angebote sind keine zusätzlichen
angetriebenen Roboter unter dieser Marke. SLATE/LoCoBot bleiben offene Folgespuren.

41 HTML-/PDF-Abrufe: 40 nutzbare Fach-/Portfolioquellen (35 HTML, fünf PDF mit
14 Textseiten); ein kurzer Dokumentationsindex dient nur der Linkfindung. Zwölf
Modelltabellen, eine expandierte Drei-Modell-Tabelle und 41 weitere exakte Anker
geprüft; Hashes und Spaltenzuordnung dauerhaft in
`reports/competitor-batch-85-evidence.json`. Zwei Rasterzeichnungen heruntergeladen,
aber wegen nicht verfügbarer Bildansicht nicht visuell geprüft; keine Maße daraus
abgeleitet. Keine Formulare/Warenkorbaktionen oder Recherchebrowser verwendet.
Früher gesperrte Hosts wurden nicht erneut angefragt.

793 Unit-Tests in 64 Dateien, 20 Wettbewerber-Python-Tests und 50 ausgewählte
Browserfälle bestanden: 32 Interbotix/Trossen- und 18 Vergleichsfälle, darunter
zwölf Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build: 3059
Seiten, ungefähr 473 MB. Datenprüfung: null Fehler, 892 Hinweise (28 zusätzliche
unbelegte Erstjahre). Lint, Format, Wiederholungsimport mit null Ergänzungen,
Bestands-, Quellen-, Seiten-/Export- und Vergleichsprüfung bestanden. Metadaten
aller 710 geprüften Modellseiten mit 11770 Feldern kontrolliert, ohne erneute
Herstellerrecherche für frühere Modelle. Anfängliche Testannahmen über Profilfelder,
Trossens bislang leeren eigenen Produktbestand, Abschnittswortlaut und URL-Fragmente
korrigiert; veralteten Zwischenbuild vor dem finalen Build beendet. Alle
430 erfassten eigenen Testprozesse beendet; Port 4321 frei.

Gesamtstand: 2009 Modelle/Konfigurationen, 755 Ergänzungen, 897 Merkmalssätze,
3847 Aussagen, 1645 Produktquellenverweise und 79 Firmenfokusse. 11770 Felder auf
710 Modellen: 5282 dokumentiert, 6200 unbekannt, 243 widersprüchlich, 45 Roadmap.
643 exakte Herstellerbezeichnungen; 1036 Profile, davon 632 mit/404 ohne Modelle.
Von 518 ursprünglichen Zielen haben 354 Feldprüfungen und 164 bleiben offen.
Firmenfokusse decken 76 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `fa00c6b` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.

## Ergänzung vom 2. November 2026 – Ozobot (Batch 86)

Vier bestehende Modelle geprüft: Ari, Evo, Bit und getrennt davon Bit+.
68 Felder: 23 dokumentiert, 45 unbekannt. Keine neuen Robotermodelle oder
CSV-Spalten. Bit+ erhält eigene Primärmerkmale, Ozobot einen Firmenfokus.
Alle 2005 unbeteiligten Katalogzeilen, 710 früheren Feldprüfungen, 79 früheren
Firmenfokusse und 1961 ursprünglichen Quellenidentitäten bleiben unverändert.
Originale Inventardaten und die getrennte Bit/Bit+-Zuordnung bleiben erhalten.

Ari: 57 g Roboter, 43 × 43,0 mm Breite/Höhe ohne erfundene Tiefe, 3,7 V /
1050 mAh und etwa 240 Minuten Herstellerlaufzeit. 0,9 kg gehören zum Ladekoffer,
nicht zum Roboter; JSON-Versandgewicht 907 g wird nicht übertragen.
Etwa 60 Minuten mit externem 5 V / 1 A Ladegerät und etwa 168 Minuten bis 80 %
im Ladekoffer sind unterschiedliche Methoden/Zielzustände. PC-basierte
Editor-/Python-Programme verlangen laut Datenblatt laufende WLAN-Verbindung;
Bluetooth-/Flashloading-Angaben der Kompatibilitätstabelle behalten ihren
ungeklärten Workflow-/Firmwarebezug. Android/AI-Werbung belegt kein lokales
Generativmodell und keine gemessenen Lernresultate.

Evo: Herstellerdatenblatt nennt 1 oz Roboter und getrennt 2 lb Ladekoffer,
33,5 × 33,0 mm Breite/Höhe ohne Tiefe sowie etwa 60 Minuten Betrieb. Der ältere
geteilte Bit/Evo-Leitfaden nennt 60–90 Minuten ohne Betriebsmodus. Das ist keine
unabhängig gemessene Maximaldauer. 60 Minuten kabelgebundenes Laden und 60 Minuten
bis 80 % im Koffer bleiben getrennt. Gespeicherte Blockly-Programme bis 2 kB
können ohne aktiven PC laufen; daraus folgt kein eigenständiges Python.
Die Datenblattüberschrift „Python over WiFi“ widerspricht ihrer eigenen
BLE-Verbindungsbedingung und belegt keine native WLAN-Hardware. Zehn RGB-LEDs
auf der aktuellen Produktseite gegenüber fünf Front-/einer oberen LED im alten
Leitfaden bleiben ein ungeklärter Revisionsunterschied.

Original Bit: bis 40 Minuten Laden und geteilte historische 60–90-Minuten-Laufzeit,
Einzeltastensteuerung und Farbcode-/OzoBlockly-Lernen sind im alten Leitfaden
belegt. Sie werden nicht auf Bit+ übertragen. Für Bit+ sind Blockly und Arduino
via WebUSB im eigenen Hersteller-Kompatibilitätsblatt belegt. Die bisherigen
unbelegten Angaben zu Preis, Geschwindigkeit, Laufzeit und Erscheinungsjahr
wurden entfernt; Schulstufen werden nicht als Lebensalter ausgegeben.

Ari Entry Kit 250 USD und Evo Entry Kit 175 USD sind über exakte Produkt-/
Variantenmetadaten mit ausdrücklicher Währung belegt. Enthaltenes Zubehör,
Mehrfachpacks, Schulungs-/Curriculumpakete, Handelsrabatte und Lieferzusagen sind
getrennt. Das öffentliche Produkt-JSON enthält 82 Angebote, darunter ein
„Ora EEK Bundle“ mit leerem Beschreibungstext. Das reicht nicht für eine
exakte Ora-Modell-/Herstellerzuordnung oder zusätzliche Roboterkarte.

19 Quellenversuche: 16 HTTP-200-Inhalte, darunter zehn PDFs mit 59 Textseiten;
zwei vorübergehende DNS-Fehler und ein abschließendes HTTP 429. Danach keine
weiteren Anfragen an den Haupt-Host. PDF-Text und Wortkoordinaten sind gesichert,
keine visuelle PDF-/Checkbox-Auswertung behauptet. Die Wettbewerber-Hosts und
anderen früher gesperrten Hersteller wurden nicht erneut abgefragt.

Stand: 2009 Modelle/Konfigurationen, 898 Merkmalsdatensätze (755 Aufgaben-Ergänzungen,
143 bestehende Anreicherungen), 3863 Aussagen, 1654 Produktquellenverweise,
80 Firmenfokusse auf 77 der 591 Quellen-Firmengruppen. 11838 Felder auf 714
Modellseiten: 5305 dokumentiert, 6245 unbekannt, 243 widersprüchlich, 45 Roadmap.
Die ursprünglichen 518 Rechercheziele haben jetzt 357 Feldprüfungen und 161 bleiben offen.
Drei Modellidentitäten, neun Listing-Identitäten, 862 Detailinhalte und historische/
regionale Portfolios bleiben offen. Marktführerschaft ist nicht gemessen.

Prüfung: 793 Unit-Tests in 64 Dateien, 20 Python-Tests und 30 ausgewählte Browserfälle
bestanden (12 Ozobot, 18 Vergleich; darin acht Axe-Läufe). Build: 3059 Seiten,
473 MB. Datenprüfung: 0 Fehler, 894 Warnungen; zwei zusätzliche Warnungen folgen aus
entfernten unbelegten Erscheinungsjahren. Lint, Format, Import mit null Ergänzungen,
Offline-Refresh, Quellenhashes, Export-/Quellenerhalt und alle 714 gerenderten
Prüfseiten bestanden. Anfangs falsche Bestandskonstanten und Annahmen in den
zusätzlichen Prüfskripten wurden korrigiert; kein Anwendungsalgorithmus geändert.
Eigene Testserver, Browser und Hilfsprozesse beendet und geprüft.

Dauerhafter Beleg: `reports/competitor-batch-86-evidence.json`.

## Ergänzung vom 2. November 2026 – UFACTORY (Batch 87)

Vier neue Modelle: UFACTORY 850, Lite 6 sowie historisch getrennte uArm Swift und
uArm Metal. Vier bestehende Modelle geprüft: xArm 5/6/7 und uArm Swift Pro.
144 Felder: 58 dokumentiert, 83 unbekannt und drei widersprüchlich. Ein
Firmenfokus am bestehenden katalogeigenen UFACTORY-Profil ergänzt; keine
Zusammenführung mit einem Quellen-Händler/-Integrator. Alle 2005 unbeteiligten
Katalogzeilen, 714 früheren Feldprüfungen, 80 früheren Firmenfokusse und 1961
ursprünglichen Quellenidentitäten bleiben unverändert. Keine neuen CSV-Spalten.

Die aktuelle dreispaltige xArm-PDF-Tabelle und die fünf Modelle umfassende
Vergleichstabelle wurden einschließlich horizontal verbundener Zellen geprüft.
xArm 5/6/7 behalten 3/5/3,5 kg Last, 700 mm Reichweite, 5/6/7 Achsen, 1 m/s TCP-
Tempo und ±0,1 mm Wiederholbarkeit. Das ist keine absolute Positioniergenauigkeit.
Das 1305-Handbuch nennt 11,3/12,5/14,3 kg Armmasse; der Support-Vergleich dagegen
11,2/12,2/13,7 kg. Eine genaue Revisionszuordnung ist nicht geklärt. Der Support
nennt xArm 5 Lite und vier flexible kartesische Steuergrößen x/y/z/yaw trotz
fünf mechanischer Achsen; daraus entsteht keine zusätzliche unbelegte Lite-Karte.
850-Werte aus benachbarten Vergleichsblöcken werden nicht auf xArm übertragen.

850: sechs Achsen, 5 kg Last, 850 mm Reichweite, 20 kg Armkörper, 1 m/s und
±0,02 mm Wiederholbarkeit; Gigabit-Ethernet-Leitung für externe Peripherie.
Lite 6: sechs Achsen, 600 g Last, 440 mm Reichweite, 8 kg, 0,5 m/s und ±0,5 mm;
Steuerung in der Basis integriert. Ø190 mm bzw. 130 × 140 mm sind Grundflächen,
keine vollständigen Körperhüllen. Externe Steuerungsgewichte/-maße und die
IP40-Zeile des Gripper G2 bleiben Komponentendaten. Versionsabweichungen der
Steuerungen werden nicht als Armmasse oder vollständige Systemmaße ausgegeben.
Kollisionserkennung vergleicht Motorstrom mit einem dynamischen Modell und
hängt unter anderem von Last, Schwerpunkt, Montage und Reibungsparametern ab;
das belegt keinen enthaltenen Kraftsensor und keine unabhängig sichere Zelle.

Swift Pro: Entwicklerhandbuch Seite 13 nennt 2,2 kg, vier DOF, 500 g Maximal-
last, 50–320 mm Arbeitsbereich, 100 mm/s und 0,2 mm Wiederholbarkeit ohne ±.
150 × 140 × 281 sind ausdrücklich Millimeter; der alte Zentimeterwert und das
alte Tempo von 0,5 m/s wurden korrigiert. Verfügbare Benutzerhandbuchversion
4.10.2 streicht 3D-Druck, mobile Bluetooth-Verbindung, OpenMV und Gravieren.
Ältere Entwicklerbeispiele werden nicht zu aktuellen Studio-Funktionszusagen.
Swift/Swift Pro und Metal sind über getrennte, vom Herstellerhandbuch aus
verlinkte ROS-/Python-/Firmware-Projekte belegt. Physische Werte für den
ursprünglichen Swift und Metal bleiben leer; sie erben keine Pro-Daten.
Lesbare kanonische README-Seiten dienen als öffentliche Quellenlinks; die
zugehörigen öffentlichen API-Inhalte mit Hashes belegen den Abruf.

Produktseiten nennen für 850 und Lite 6 Einstiegspreise von 8999 bzw. 2999 USD;
sie bleiben ohne belegte Lieferkonfiguration qualifiziert und erzeugen kein
festes strukturiertes Angebot. Unterschiedliche xArm-Familien-Einstiegspreise,
„seit 2018“, PDF-Uploadpfade und SDK-Daten belegen weder Einzelmodell-Preise noch
Erscheinungsjahre. Gripper, Kraftsensor, Kamerahalter, Steuerungen, Slider/
Conveyor, Simulationssoftware und Integrator-Zellen sind getrennte Rollen.

26 Quellenversuche: 23 HTTP-200-Inhalte, darunter zehn PDFs mit 344 extrahierten
Textseiten und vier historische README-Antworten. Zwei DNS-Fehler und eine
404-Antwort auf einen nicht vorhandenen Repository-Kandidaten bleiben als nicht
nutzbare Belege erhalten. Keine früher gesperrten Wettbewerber-/Hersteller-Hosts
erneut angefragt, keine Formulare oder Warenkorbaktionen. Ausgewählte Textanker,
Wortkoordinaten und Tabellenzellen geprüft; keine visuelle Zeichnungsauswertung
oder vollständige historische/regionale Portfoliozertifizierung behauptet.

Stand: 2013 Modelle/Konfigurationen, 903 Merkmalsdatensätze (759 Aufgaben-Ergänzungen,
144 bestehende Anreicherungen), 3898 Aussagen, 1683 Produktquellenverweise,
81 Firmenfokusse auf 77 der 591 Quellen-Firmengruppen. 11982 Felder auf 722
Modellseiten: 5363 dokumentiert, 6328 unbekannt, 246 widersprüchlich, 45 Roadmap.
Die ursprünglichen 518 Rechercheziele haben jetzt 360 Feldprüfungen und 158 bleiben offen.
Drei Modellidentitäten, neun Listing-Identitäten, 862 Detailinhalte und historische/
regionale Portfolios bleiben offen. Marktführerschaft ist nicht gemessen.

Prüfung: 793 Unit-Tests in 64 Dateien, 20 Python-Tests und 32 ausgewählte Browserfälle
bestanden (14 UFACTORY, 18 Vergleich; darin acht Axe-Läufe). Build: 3063 Seiten,
474 MB. Datenprüfung: 0 Fehler, 900 Warnungen; vier neue und zwei entfernte unbelegte
Erscheinungsjahre erklären sechs zusätzliche Warnungen. Lint, Format, Import mit
null Ergänzungen, Offline-Refresh, Quellenhashes, Export-/Quellenerhalt und alle
722 gerenderten Prüfseiten bestanden. Nach Verfeinerung der historischen Quellen-
links erneut auf dem endgültigen Datenstand gebaut; kein Anwendungsalgorithmus
geändert. Eigene Testserver, Browser und Hilfsprozesse beendet und geprüft.

Dauerhafter Beleg: `reports/competitor-batch-87-evidence.json`.


## Ergänzung vom 2. November 2026 – Realbotix (Batch 88)

Sechs bestehende Identitäten geprüft: Aria, B-Series, M-Series, F-Series,
Echo Tabletop und Echo Full Body. Keine neue Modellkarte. 102 Felder: 21
dokumentiert, 74 unbekannt und sieben Roadmap. Ein Herstellerfokus ergänzt.
Alle 2007 unbeteiligten Katalogzeilen, 722 früheren Feldprüfungen, 81 früheren
Firmenfokusse und 1961 ursprünglichen Quellenidentitäten bleiben unverändert.

Aria bleibt als historische Demonstrator-Identität erreichbar, bezeichnet im
aktuellen Echo-Angebot aber eine wählbare Persona auf zwei Hardwareplattformen.
Die alten unbelegten Preis-, Masse-, Fahrtempo-, Laufzeit- und Alterswerte sind
entfernt. Aria/Mila/Dave/Amar ergeben keine acht zusätzlichen Roboter; die
Ereignisnamen David und Melody sind ohne eindeutige Hardwarezuordnung keine
neuen Standardmodelle. Die CES-Gesprächsdauer ist kein Akkulaufzeittest.

Der Herstellerbericht von 2025 beschreibt B-Series als Büste mit 17 bewegten
Gesichtspunkten, nicht mit verifizierten 17 mechanischen DOF. M-Series hat 39 DOF
und bleibt ab der Taille stationär. F-Series hat 44 DOF, eine motorisierte
Radbasis und eine geschätzte Akkulaufzeit von 4–8 Stunden ohne Testprofil.
Die frühere Angabe „480 min“ als Maximaldauer ist entfernt. Berichtspreise sind
historische Startbeträge; aktuelle Lieferkonfigurationen und Erstveröffentlichung
bleiben unbekannt. Die bisher unbelegten vier Erscheinungsjahre sind entfernt.

Die aktuelle Echo-Matrix wurde mit getrennten Hardware- und Persona-Spalten
geprüft: Tabletop 17 DOF, ca. 25 lb, 13 × 13 in Grundfläche und 31/32 in Höhe;
Full Body 39 DOF, ca. 88 lb, 28 × 28 in und 72/77 in. Höhen unterscheiden
weibliche/männliche Konfigurationen. Full-Body-Finger, Stereo-Kameras und vier
Mikrofone werden nicht automatisch auf Tabletop übertragen. Produktionswerte
bleiben angekündigt; Gehen, Last und Akkulaufzeit sind nicht belegt.

Die Preise werden als angezeigte Dollarbeträge ohne unbelegte ISO-Währung
geführt. Kaufbetrag, 199-Dollar-Reservierung, Pflicht-KI-Abo ab 19,99/Monat,
Steuern/Versand und optionale Vinci-Hardware bleiben getrennt. Gesprächsstunden
sind Tarifkontingente. Vinci benötigt Enterprise with Vision; dessen lokale
Verarbeitung belegt keinen pauschalen Offlinebetrieb sämtlicher KI-Funktionen.
Die Datenschutzerklärung beschreibt auch externe KI-/Sprachverarbeitung.

Die Veröffentlichung vom 26. Oktober 2026 plant Lieferung ab dem zweiten
Halbjahr 2027: zunächst 225 Tabletop und 25 Full Body. Reservierungen sind laut
Bedingungen auf 50 US-Staaten/DC begrenzt; Termine sind unverbindliche Schätzungen.
Der digitale Zwilling ist für 2027 angekündigt. Volljährigkeit des Kontoinhabers
ist keine 18–99-Nutzerfreigabe; Wellness-Themen belegen keine klinische Wirkung.

Aktuell: 2013 Katalogeinträge, 643 exakte Herstellernamen, 1036 Profile, 632 mit
und 404 ohne Modelle. 904 Merkmalsdatensätze (759 Ergänzungen/145 bestehende
Anreicherungen), 3916 Aussagen, 1693 Produkt-Quellenreferenzen. 82 Firmenfokusse
auf 78 der 591 Quellen-Firmengruppen. 12084 Felder auf 728 Modellseiten:
5384 dokumentiert, 6402 unbekannt, 246 widersprüchlich und 52 Roadmap.
Von 518 ursprünglichen Prüf-Zielen haben 363 Feldprüfungen, 155 warten;
die 5955 Zielfelder enthalten 2734 dokumentierte, 3058 unbekannte,
153 widersprüchliche und zehn Roadmap-Werte. Offen bleiben drei Modellidentitäten,
neun Listingidentitäten und alle 862 Buy-Detailinhalte. Vollständige historische
Herstellerabdeckung oder Marktführerschaft ist nicht bewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte Browserfälle
bestanden (16 Realbotix/18 Vergleich, einschließlich acht Axe-Läufen). Build:
3063 Seiten, ca. 474 MB; Audit: null Fehler/904 Warnungen. Vier zusätzliche
Warnungen stammen von entfernten unbelegten Erscheinungsjahren. Lint, Format,
Import-Trockenlauf (null Ergänzungen), Offline-Refresh, sechs Modellseiten/
Exporte, vollständiger Vergleichsdatentransport und alle 728 gerenderten
Prüfseiten geprüft. Ein kopierter Scratch-Checker erwartete zunächst 54 statt
51 Exportfelder aus drei Humanoid-Prüfungen; nach Korrektur bestanden. Keine
Anwendungsänderung erforderlich. 14 Quellenversuche, 13 HTTP-200-Antworten,
darunter zwei PDF-Dokumente/28 Textseiten; ein FAQ-DNS-Fehler ausgeschlossen.
Keine visuelle PDF-Prüfung. Eigene Testprozesse und Browserressourcen beendet.
Dauerhafter Beleg: `reports/competitor-batch-88-evidence.json`.


## Ergänzung vom 2. November 2026 – LEGO (Batch 89)

Vier benannte Set-Konfigurationen ergänzt: MINDSTORMS NXT 2.0 8547 sowie
Computer Science & AI 45520 (K-2), 45521 (3-5), 45522 (6-8). Fünf bestehende
Identitäten geprüft: ursprüngliches NXT, EV3, Robot Inventor 51515 und SPIKE
Essential/Prime. 153 Felder: 35 dokumentiert, 118 unbekannt. Ein Herstellerfokus
am bestehenden LEGO-Education-Profil ergänzt. Alle 2008 unbeteiligten CSV-Zeilen,
728 früheren Feldprüfungen, 82 früheren Firmenfokusse und 1961 ursprünglichen
Quellenidentitäten bleiben unverändert. Zwei öffentliche Echo-Preishinweise
verlieren nur einen technischen Darstellungsbegriff; Aussagen/Quellen/Felder
bleiben unverändert. Keine neuen CSV-Spalten oder Profilzusammenführungen.

Set-Identitäten bleiben getrennt: NXT 8527 (579 Teile/2006), NXT 2.0 8547
(619/2009), EV3-Heimset 31313 (601/2013) und Robot Inventor 51515 (949/2020).
Die EV3-Katalogidentität beschreibt nicht automatisch alle Education-Bundles.
MicroPython startet bei EV3 von einer 4–32-GB-microSD-Karte; das ist weder
interner RAM noch eine universelle Softwarelösung für alle Generationen.
ARM9/Linux und Entwicklerprotokolle stammen aus der EV3-Dokumentation.
Blast, Charlie, Tricky, Gelo und M.V.P. sind fünf alternative Robot-Inventor-
Bauten eines Sets, keine fünf zusätzlich verkauften Roboter. Blast-Höhe und
Hub-Sensorachsen werden nicht als Set-Abmessung/mechanische DOF übertragen.

SPIKE Essential: Veröffentlichung vom 17. August 2021 nennt 449 Steine,
vier Minifiguren sowie Hub, Motoren, Lichtmatrix und Farbsensor; Alter 6+.
SPIKE Prime: Hersteller-FAQ nennt 528 Elemente, Alter 10+, sechs Hub-Ports,
5×5-Matrix, USB/Bluetooth und Python. Die 63 g ohne Akku und 88×56×32 mm sind
Hub-Werte; sie ersetzen keine Gesamtmasse oder vollständige Roboterhülle.
Akku: 2100 mAh/7,3 V und Zyklenbedingungen sind keine Betriebsstunden. Die
FAQ nennt ca. drei Stunden Ladung leer→voll bei USB 500 mA. Unbelegte feste
Set-Gewichte, Größen, Laufzeiten, Handtypen und Alters-Obergrenzen entfernt.

Direktverkauf von SPIKE endete am 30. Juni 2026. App-/Lehrplansupport ist bis
30. Juni 2031 geplant; keine neuen Funktionen nach Verkaufsende. Die aktuelle
Hersteller-FAQ nennt Wettbewerbseinsatz bis zur Saison 2027–2028, CS & AI ab
2026–2027. Das ist keine unbefristete Teilnahme- oder Betriebssystemzusage.
Die gemeinsame Prime-Produktseite enthält einen Essential-Textfehler; benannte
Setnummer, separate FAQ, Ruhestandstabelle und Komponentenblätter bestimmen
die Zuordnung. Ersatzteile/Erweiterungen bleiben Komponenten, keine Roboter.

Aktuelle CS-&-AI-Einzelsets: 45520 mit 276 Steinen/einem Einzelmotor, 45521 mit
321/einem Doppelmotormodul, 45522 mit 379/Doppel- plus Einzelmotor und Controller.
Farbsensor/Karten bleiben setgenau; 45522 nennt zwei statt einer Verbindungskarte.
Die strukturierten Herstellerangebote bestätigen 339,95/429,95/529,95 USD,
getrennt von Sechser-Klassenpaketen und erforderlichem Nutzergerät. Dreißig
Lektionen in sechs Einheiten, Gerätelokalität, PIN-Zugang, Offline-Nutzung nach
Installation und nötiger Internetzugriff für Einrichtung/Updates/Lehrerportal
behalten ihren Funktionsbereich. MoveNet/Pose-/Klassifizierungslernen ist kein
Chatbot, keine enthaltene Roboterkamera und kein autonomer Navigationsbeleg.
Schulklassenbänder werden nicht in Lebensalter oder Achszahlen umgedeutet.

41 Quellenversuche: 31 HTTP-200-Antworten, zwei DNS-Fehler, ein 403 und sieben
404. Vier leere Service-/Redirect-Antworten ausgeschlossen, darunter der
RCX/RIS-Kandidat 9719; HTTP 200 belegt dort kein Produkt. Fünf PDFs gespeichert:
60 Textextraktionsseiten plus 24 bildbasierte NXT-Seiten ohne nutzbaren Text.
Keine visuelle PDF-Prüfung, kein Übertragen ungesehener Bilddetails. Der zunächst
einmal aufgerufene Robot-Inventor-Verkaufspfad war schon in Batch 12 mit 403
protokolliert und antwortete erneut 403; er wurde ausgeschlossen und nicht
weiter angefragt. Öffentliche Presse-/Servicequellen lieferten die Belege.
Weitere RCX/RIS-, WeDo-/BOOST-, Education-/Retail-Bundles, vollständige historische
Portfolios und heutige Legacy-Softwarekompatibilität bleiben offen.

Aktuell: 2017 Katalogeinträge, 643 exakte Herstellernamen, 1036 Profile,
632 mit/404 ohne Modelle. 910 Merkmalsdatensätze (763 Ergänzungen/147 bestehende
Anreicherungen), 3954 Aussagen, 1716 Produkt-Quellenreferenzen. 83 Firmenfokusse
auf 79 der 591 Quellen-Firmengruppen. 12237 Felder auf 737 Modellseiten:
5419 dokumentiert, 6520 unbekannt, 246 widersprüchlich, 52 Roadmap. Von 518
ursprünglichen Prüfzielen haben 366 Feldprüfungen, 152 warten. Die 6006 Zielfelder
enthalten 2748 dokumentierte, 3095 unbekannte, 153 widersprüchliche und zehn
Roadmap-Werte. Offen: drei Modellidentitäten, neun Listingidentitäten und alle
862 Buy-Detailinhalte; Vollständigkeit und Marktführerschaft nicht bewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte Browserfälle
bestanden (16 LEGO/18 Vergleich, einschließlich acht Axe-Läufen). Build:
3067 Seiten/ca. 475 MB, Audit null Fehler/907 Warnungen; drei zusätzliche
Warnungen stammen von neuen Kits ohne belegtes Erstveröffentlichungsjahr.
Lint, Format, Import-Trockenlauf null Ergänzungen, Offline-Refresh, neun
Modellseiten/Exporte, Vergleichsdatentransport und alle 737 gerenderten Prüfseiten
geprüft. Nach Textglättung und Synchronisierung der neuen Prüfnotizen wurden
Unit/Build/Audit auf dem finalen Stand erneut ausgeführt. Keine Anwendungs-
Algorithmen geändert. Eigene Testprozesse/Browserressourcen beendet.
Dauerhafter Beleg: `reports/competitor-batch-89-evidence.json`.


## Ergänzung vom 2. November 2026 – SMP Robotics (Batch 90)

17 benannte Konfigurationen ergänzt, drei vorhandene Modelle geprüft und ein
Herstellerfokus ergänzt. 370 Datenfelder: 71 dokumentiert, 296 unbekannt,
drei widersprüchlich. Unverändert bleiben 2014 unbeteiligte Katalogzeilen,
737 frühere Feldprüfungen, 83 Firmenfokusse und 1961 Quellenidentitäten.
Keine neuen CSV-Spalten oder Übertragung bestehender Modelle in andere Kategorien.
Die neuen S8-Varianten stehen unter Outdoor/Garten; S2 erhält Inspektion und S4
Landwirtschaft als belegte Suchzuordnung. Anwendungsalgorithmen unverändert.

Ergänzungen: Promt S5.2 IS 2020, Herchel S5.2 PTZ IR IS 2020, Prompt S5.2 ISD 2021,
S2 Umweltmessung, S3.2 Thermografie, S4 Vogel-/Tierabwehr, S6.3 Gasinspektion,
S5 G, S5 Gas Detector Solar, A5 Gas Detector, S11, S11 P, S5s,
S5 ALPR, S5 ALPR DUO sowie S8 P und S8 C. S7/S7.2 wird ohne eindeutige
Abgrenzung von Prompt nicht zusätzlich gezählt; Kepler/IPD sowie die
Herchel/Herschel/Argus-Codes und Auflösungsvarianten bleiben offen.

Bestandsmodelle: Argus S5.3 behält eigene Kamera-/TX2-/IP65-Angaben, ohne die
widersprüchlichen Detektionsreichweiten oder alte generische Acht-Stunden-Prosa
als gesicherte Modellwerte zu übernehmen. S5.4 ist durch die Ankündigung vom
2. März 2026 mit Orin NX, Entwicklerakkreditierung und SMP Store belegt;
angekündigter Versandbeginn März 2026 belegt keinen heutigen Lagerbestand.
Picard/Promt: Zehn/zwölf Stunden sind geschätzte Betriebszeit im 2020-Prospekt,
kein gemessenes Maximum. Ladezeit vier bis sechs Stunden bleibt getrennt.
Web-/Prospekt-Hüllen widersprechen sich. Picards 185 kg werden auf der Webseite
als Betriebsmasse, im Prospekt auch als Luftfrachtgewicht bezeichnet; keine
still gewählte Gesamtmasse. Abweichende 2021-Werte bleiben in ihrem Jahresumfang.

Prompt ISD 2021: 18 kg Last, 148 kg mit Akku ohne Fracht, vollständige Hülle
1420×720×1620 mm; 415×315×245 mm sind nur das Frachtfach. S6.3: Methan bis
50 m ist Sensorentfernung, Thermik/360°-Akustik sind Optionen. Die beschriebene
Ausführung ist ausdrücklich nicht als explosionsgeschützt oder eigensicher
dargestellt. Solar-Nachladung, Propanvorrat, Fahrstrecke, Kameraachsen und
Werbeaussagen über Schutzfläche/Wirtschaftlichkeit ergeben keine Akku-Laufzeit,
Roboter-DOF oder unabhängige Wirksamkeits-/Sicherheitsbestätigung.

22 Quellenversuche: 20 HTTP-200-Antworten, zwei vorübergehende DNS-Fehler.
Drei PDF-URLs mit zehn extrahierten Seiten entsprechen nur zwei verschiedenen
PDF-Inhalten/acht eindeutigen Textseiten: Picard/Promt sind bytegleich und keine
unabhängigen Bestätigungen. Wortkoordinaten gespeichert; keine visuelle
PDF-Prüfung oder Übernahme ungesehener Zeichnungsmaße. Keine gesperrten Hosts
wiederholt und kein 429 beobachtet. Historische/regionale Vollständigkeit,
heutige Lieferbarkeit und unabhängige Leistungswerte bleiben offen.

Aktuell: 2034 Katalogeinträge, 643 exakte Herstellernamen, 1036 Profile,
632 mit/404 ohne Modelle. 927 Merkmalsdatensätze (780 Ergänzungen/147 bestehende
Anreicherungen), 4025 Aussagen, 1742 Produkt-Quellenreferenzen. 84 Firmenfokusse
auf 80 der 591 Quellen-Firmengruppen. 12607 Felder auf 757 Modellseiten:
5490 dokumentiert, 6816 unbekannt, 249 widersprüchlich, 52 Roadmap. Von 518
ursprünglichen Prüfzielen haben 369 Feldprüfungen, 149 warten. Die 6063 Zielfelder
enthalten 2765 dokumentierte, 3133 unbekannte, 155 widersprüchliche und zehn
Roadmap-Werte. Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-
Detailinhalte bleiben offen; Vollständigkeit und Marktführerschaft unbewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte Browserfälle
bestanden (16 SMP/18 Vergleich, einschließlich acht Axe-Läufen). Build:
3084 Seiten/ca. 477 MB. Audit: null Fehler/923 Warnungen; 17 neue ungeklärte
Erstjahre minus ein neu belegtes bestehendes Erstjahr ergeben netto 16 weitere
Warnungen. Lint, Format, Import-Trockenlauf null Ergänzungen, Offline-Refresh,
20 Modellseiten und Quellen-/Exporttransport sowie alle 757 gerenderten
Feldprüfseiten geprüft. Die erste Unit-Prüfung fand die korrigierte
Unterkategorie-Zuordnung; finale Prüfungen liefen auf dem korrigierten Stand.
Eigene Testprozesse/Browserressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-90-evidence.json`.


## Ergänzung vom 2. November 2026 – SoftBank/Aldebaran/Maxtronics (Batch 91)

Sechs Modelle ergänzt: Whiz i, Whiz B/P/V, Pepper+ und Maxtronics NAO7.
NAO7 bleibt ausdrücklich ein Entwicklungsprojekt mit unbekanntem Preis und
Erscheinungstermin; geplante Hand-/Hardwaremerkmale sind keine ausgelieferten
Werte. NAO6, Pepper und Whiz geprüft. Insgesamt 163 Felder: 62 dokumentiert,
99 unbekannt, eines widersprüchlich und eines Roadmap. Zwei Firmenfokusse
ergänzt; Maxtronics erhält die Modellbindung im vorhandenen Firmenprofil.
Historische NAO6/Pepper-Zuordnung bleibt Aldebaran; keine pauschale rechtliche
Nachfolger- oder OEM-Identität abgeleitet. 2031 unbeteiligte Katalogzeilen,
757 frühere Feldprüfungen, 84 Firmenfokusse und 1961 Quellenidentitäten bleiben
unverändert. Keine neuen CSV-Spalten oder Kategorieverschiebungen.

NAO6: H25600 mit 5,48 kg, 574×311×275 mm H×T×B, 25 DOF und IPX0.
60 Minuten aktive und 90 Minuten normale Nutzung sind getrennt; 90 Minuten
Ladezeit haben kein belegtes Ladezustandsintervall. Nicht belegtes Erstjahr,
Alter und Fingerzahl entfernt. Der Cloudwechsel zum 1. Oktober 2026 ist auf
NAO6 begrenzt; Offlinebetrieb kann fortbestehen, NAO5 ist ausgenommen.
Pepper: Legacy-Hülle mit Armen unten getrennt von maximaler Armhülle; keine
Armreichweite daraus abgeleitet. NAOqi 2.5/Python und 2.9/Android/QiSDK bleiben
getrennt. Japanische Plan-Endtermine am 1. Februar und 31. Mai 2027 sind kein
weltweites Ende aller Pepper. Pepper+ enthält qualifizierte japanische
Miettarife, keine strukturierten Kaufangebote oder übernommenen Legacy-Maße.

Whiz: 30 kg Maschine plus 5 kg Akku im US-Blatt; Japan-2020 nennt etwa 35 kg
inklusive Akku. Der gemeinsame aktuelle Modaltext vermischt Generationen;
Gewicht bleibt als Konflikt markiert. Whiz i hat eigene 34 kg und Betriebsmodi
3,6/1,8 Stunden sowie fünf Stunden Laden. Whiz B/P/V behalten ihre eigenen
Maße, Massen und Modi. Staubbehälter sind keine Wassertanks; Komponentenbreiten
keine kombinierte Arbeitsbreite. 600 mm Mindestdurchgang bei Whiz V ist keine
Roboterbreite. Alttexte/ähnliche Maße begründen keine Gausium-OEM-Gleichsetzung.
Software, Mietpakete und ServiQ-Koentwicklung erzeugen keine weiteren Karten.

41 Quellenversuche: 35 HTTP200-Antworten, drei vorübergehende DNS-Fehler,
drei 404. Vier PDFs mit 323 automatisch extrahierten Seiten. Das 312-seitige
Pepper+-Handbuch wurde nur für ausgewählte Einrichtungs-/Ladepassagen auf sechs
Seiten geprüft. Keine vollständige Handbuchprüfung, visuelle PDF-Prüfung oder
Verwendung passwortgeschützter Handbücher. Kein 429 und keine Wiederholung
bekannter gesperrter Hosts. Historische/regionale Vollständigkeit,
heutige Lieferbarkeit und unabhängige Wirksamkeit bleiben offen.

Aktuell: 2040 Katalogeinträge, 644 exakte Herstellernamen, 1036 Profile,
633 mit/403 ohne Modelle. 933 Merkmalsdatensätze (786 Ergänzungen/147 bestehende
Anreicherungen), 4053 Aussagen, 1773 Produkt-Quellenreferenzen. 86 Firmenfokusse
auf 82 der 591 Quellen-Firmengruppen. 12770 Felder auf 766 Modellseiten:
5552 dokumentiert, 6915 unbekannt, 250 widersprüchlich, 53 Roadmap. Von 518
ursprünglichen Prüfzielen haben 372 Feldprüfungen, 146 warten. 6116 Zielfelder:
2785 dokumentiert, 3165 unbekannt, 156 widersprüchlich, zehn Roadmap.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte
bleiben offen; Vollständigkeit und Marktführerschaft sind unbewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte Browserfälle
bestanden (16 SoftBank/Maxtronics, 18 Vergleich, einschließlich acht Axe-Läufen).
Build: 3090 Seiten/ca. 478 MB. Audit: null Fehler/926 Warnungen. Zwei neue
unbekannte Erstjahre und das entfernte unbelegte NAO6-Erstjahr ergeben drei
zusätzliche Warnungen. Lint, Format, Import-Trockenlauf null Ergänzungen,
Offline-Refresh, neun Modellseiten/Quellen-/Exporttransport sowie alle 766
Feldprüfseiten geprüft. Initial fehlendes Plus im Pepper+-Slug, doppelte
Profilgenerierung und ein Datumsleerzeichen vor finaler Prüfung korrigiert.
Eigene Browser-/Testressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-91-evidence.json`.


## Ergänzung vom 2. November 2026 – 1X Technologies (Batch 92)

Vier vorhandene Modelle geprüft: NEO, NEO Beta, NEO Gamma und EVE. 68 Felder:
21 dokumentiert, 47 unbekannt. Keine neuen Modellkarten. Beta/Gamma erhalten
zwei zusätzliche datierte Merkmalsbelege für Bestandsmodelle; ein Firmenfokus
ergänzt. 2036 unbeteiligte CSV-Zeilen, 766 frühere Feldprüfungen, 86 Firmenfokusse,
alle Firmenprofile/Aliasse und 1961 Quellenidentitäten bleiben unverändert.
Keine CSV-Spalten oder Kategorieverschiebungen.

NEO: Einführung am 28. Oktober 2025 getrennt von Beta 2024, Gamma 2025 und dem
geplanten Kunden-Lieferbeginn 2026. US-Angebot: 20.000 USD Early-Access-Kauf,
499 USD Monatsabo, 200 USD rückerstattbare Reservierungsanzahlung. Kein
allgemeines strukturiertes Lager-Kaufangebot. 66 lb Masse, 5 ft 6 in Höhe;
55 lb Tragen, 154 lb Heben und 18 lb Armlast bleiben verschiedene Größen.
1,4 m/s Gehen, 6,2 m/s maximales Laufen und 8 m/s Handgeschwindigkeit werden nicht
vermischt. Vier Stunden Betrieb ohne belegtes gemessenes Maximum. Sechs Minuten
Laden je Stunde Betrieb sind keine volle Ladezeit. 842 Wh Hardwaretabelle und
0,75 kWh Kosten-FAQ bleiben eine offene Kapazitäts-/Revisionsabweichung.

Die neuere Handunterlage zählt 25 DOF als 22 in Fingern/Handfläche plus drei im
Handgelenk. Kein zusätzlicher Modell-Datensatz, kein ungeklärter 22/25-Konflikt
und keine doppelte Addition von Handgelenken in eine Roboter-Gesamtsumme.
IP68 gilt den Händen, IP44 dem Körper; laut FAQ ist der ganze Roboter nicht
wasserdicht. Fingertippgenauigkeit ist keine Armwiederholgenauigkeit. Expert-
Sitzungen werden laut öffentlicher FAQ vom Besitzer geplant/akzeptiert;
anfängliche Kochfunktionen bleiben eingeschränkt. Kapazitäts-/Fabrikaussagen
belegen keine erfolgte Kundenauslieferung oder unabhängige Sicherheitsprüfung.

NEO Beta: Ankündigung vom 30. August 2024 bezeichnet ihn als Prototyp für
begrenzte Forschung in ausgewählten Haushalten. Der Kochfilm vom 8. November 2024
verwendete VR-Teleoperation, gefilterte Sprachübertragung und menschliche Hilfe
zum Einschalten des Brenners. Keine autonome Kochleistung daraus abgeleitet.
NEO Gamma: Einführung 21. Februar 2025, interne Heimtests, 100-Hz-Körperregler,
neues Audio-/Kleidungsdesign. Der NVIDIA-Forschungsbericht vom 18. März 2025
beschreibt eine konkrete Tassen-/Spülmaschinenaufgabe mit 5-Hz-Sicht-Aktionsschleife
und möglicher On-/Offboard-Inferenz. Keine Übertragung auf jede Alltagssituation.
Unbelegte 75.000-USD-Preise und numerische Altangaben bei Beta/Gamma entfernt.

EVE: Firmenzeitachse belegt Fabrikeinsätze 2022. Der 2018-Eintrag betrifft den
Revo1-Motor und belegt kein erstes EVE-Erscheinungsjahr. Aktuelle EVE-/Flottenseiten
sind Anfrage-/Partnerformulare, keine technischen Datenblätter oder Lagerbelege.
Alte Masse, Geschwindigkeit, Last und Laufzeit sind durch diese ausgewählten
Quellen nicht bestätigt; NEO-Werte werden nicht übernommen. Komponenten,
AI-Modelle, Software, Miet-/Kaufpläne und Farben erzeugen keine weiteren Roboter.

26 Quellenversuche: 16 HTTP200, zwei vorübergehende DNS-Fehler, acht 404.
HTML-Text und öffentlich ausgelieferte FAQ-Hydrationsdaten geprüft; keine PDFs.
Ein optionaler externer Browserversuch fand die FAQ-Schaltfläche nicht vor
Zeitablauf und wurde geschlossen. Keine erfolgreiche Live-FAQ-Darstellung
behauptet. Keine Formulare oder Käufe ausgelöst, kein 429, keine bekannten
blockierten Hosts wiederholt. Historische/regionale Vollständigkeit, heutige
Lieferbarkeit und unabhängige Sicherheits-/Leistungswerte bleiben offen.

Aktuell: 2040 Katalogeinträge, 644 exakte Herstellernamen, 1036 Profile,
633 mit/403 ohne Modelle. 935 Merkmalsdatensätze (786 Ergänzungen/149 bestehende
Anreicherungen), 4065 Aussagen, 1786 Produkt-Quellenreferenzen. 87 Firmenfokusse
auf 83 der 591 Quellen-Firmengruppen. 12838 Felder auf 770 Modellseiten:
5573 dokumentiert, 6962 unbekannt, 250 widersprüchlich, 53 Roadmap. Von 518
ursprünglichen Prüfzielen haben 374 Feldprüfungen, 144 warten. 6150 Zielfelder:
2800 dokumentiert, 3184 unbekannt, 156 widersprüchlich, zehn Roadmap.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben
offen. Vollständigkeit und Marktführerschaft sind weiterhin unbewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte lokale Browserfälle
bestanden (16 1X, 18 Vergleich, einschließlich acht Axe-Läufen). Build: 3090 Seiten,
ca. 478 MB. Audit: null Fehler/927 Warnungen; das nicht belegte EVE-Erstjahr
entfällt und erzeugt eine zusätzliche Warnung. Lint, Format, Import-Trockenlauf
null Ergänzungen, Offline-Refresh, vier Modellseiten/Quellen-/Exporttransport
sowie alle 770 gerenderten Feldprüfseiten geprüft. Der erste Scratch-Abgleich
fand veraltete abgeleitete Produktmerkmale nach einem Import-Trockenlauf;
explizites Importieren, Refresh und neue Manifeste korrigierten das vor finalen
Prüfungen. Eigene Browser-/Testressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-92-evidence.json`.


## Ergänzung vom 2. November 2026 – Agile Robots (Batch 93)

Sechs Modelle ergänzt: Diana 7, Thor 3, Thor 7, Thor 7 Pro, Thor 12 und Thor 20.
Agile ONE und Yu 5 Industrial geprüft. 143 Felder: 64 dokumentiert, 72 unbekannt,
sieben Roadmap. Thor 20 steht weiterhin als „Coming soon“ auf der Modellseite;
seine sieben numerischen technischen Werte bleiben angekündigte Spezifikationen.
Thor 3 ist ausdrücklich auf APAC begrenzt. Ein Firmenfokus ergänzt; 2038
unbeteiligte CSV-Zeilen, 770 frühere Feldprüfungen, 87 Firmenfokusse, alle
Firmenprofile/Aliasse und 1961 Quellenidentitäten bleiben unverändert.
Keine neuen CSV-Spalten oder Kategorieverschiebungen.

Agile ONE: Öffentliches HTML ordnet Animationswerte Einheiten/Bezeichnungen zu:
174 cm Höhe, 69 kg Masse, 2 m/s Gehen und 20 kg nicht näher verteilte Last.
Englische/deutsche Fassung gegengeprüft; keine Maße aus Bildern abgelesen.
21 Gelenke der beschriebenen Hand sind kein Beleg für frühere 71 Ganzkörper-DOF;
die Produktseite spricht von 21 Gelenken der beschriebenen Hand. Das separate
Agile-Hand-Modul hat 21 Gelenke und 15/16 DOF, nicht automatisch jede ausgelieferte
ONE-Handkonfiguration. Ehemalige Acht-Stunden-/480-Minuten-Werte sind durch
gewählte Primärquellen nicht belegt und entfallen. Einführung 19. November 2025,
früher Produktionsplan für 2026 und Vorführung am 4. Februar 2026 bleiben getrennt.
Cloud-Training und ein Knopfdruck bei der AI-Cloud-Eröffnung belegen keine
Roboterlaufzeit, freie Lieferbarkeit oder unabhängig geprüfte Fabrikautonomie.

Yu 5 Industrial: 5 kg bei 1000 mm oder 7 kg bei 850 mm; Last-/Radiuspaare nicht
kombinieren. Sechs Achsen, 31,5 kg Roboter, IP54 für Roboter/Controller,
±0,05 mm Wiederholgenauigkeit und maximal 2 m/s TCP ausdrücklich bei 5 kg Last.
2D-Kamera/LEDs, NPU, Python/Browserprogrammierung und Handführung bleiben benannte
Funktionen. Netzverbrauch 250 W ist keine Akkulaufzeit; Controller-/Zeichnungsmaße
sind keine vollständige Roboterhülle. Zwei vermutete aktuelle Produktpfade
liefern 404, das technische PDF ist erreichbar; daraus kein Abkündigungsdatum.

Diana 7: Sieben drehmomentsensitive Achsen, 7 kg/923 mm, 28 kg Roboter,
16 kg separater Controller, IP50, ±0,05 mm Wiederholgenauigkeit, 2,4 m/s TCP.
0,5 N Kraftregelgenauigkeit ist keine Lage-/Navigationsgenauigkeit. AgileCore,
C++/Python/Lua und die im Prospekt genannte FCI-Forschungsschnittstelle machen
Diana nicht zu einer Franka-FR3-Identität oder universell kompatiblen Konfiguration.

Thor-Spalten: 3/7/7 Pro/12/20 tragen 3/7/7/12/20 kg bei 600/900/900/1300/1700 mm.
Robotergewichte 14/32/38/35/72 kg, TCP-Geschwindigkeit 1,8/3,1/2,5/3,7/2,8 m/s.
Separate Controller: Thor 3 mit 20 kg, übrige mit 16 kg. Sechs Achsen je Modell.
Wiederholgenauigkeit ±0,03/0,03/0,03/0,05/0,1 mm. Thor 3 IP20; Thor 7/7 Pro/12
laut Robotertabelle IP54. Thor 20 nennt ausdrücklich IP54 am Handgelenk, während
die Tabelle die Komponente nicht abgrenzt; keine pauschale Gesamtsystemabdichtung.
Pro ist eine benannte Variante mit Gelenkmomentsensoren/0,5 N Kraftregelung,
eigener Masse/Geschwindigkeit. Die generische Web-Spanne 1,8–3 m/s ersetzt nicht
die exakten Modellwerte; der Prospekt nennt bis 3,7 m/s. Keine Winkelraten oder
Sockel-/Controllermaße als lineare Geschwindigkeit bzw. ganze Hülle übernommen.

Agile Hand, AgileCore und unbenannte AMR-/AGV-Kategorien erzeugen keine zusätzlichen
Roboterkarten. Franka, idealworks und BÄR behalten eigene Marken-/Modellidentitäten;
Unternehmenszugehörigkeit ist kein Produktalias. Hersteller-Qualitäts-/Sicherheits-
aussagen sind keine unabhängige Zertifizierung jeder eingebauten Anwendung.
Historische Erstjahre, volle regionale Produktbreite, konkrete Softwarepakete,
Thor-20-Auslieferung und heutige Yu-Verfügbarkeit bleiben offen.

15 Quellenversuche: zwölf HTTP200, ein vorübergehender DNS-Fehler, zwei 404.
Drei PDFs mit 16 textlich extrahierten Seiten/Wortkoordinaten; keine visuelle
PDF-Prüfung oder Übernahme ungesehener Zeichnungsmaße. HTML-Animationsattribute
beider Sprachfassungen ausgewertet; dies ist keine unabhängige Bestätigung.
Keine Formulare/Käufe, kein 429 oder Wiederholen bekannter blockierter Hosts.

Aktuell: 2046 Katalogeinträge, 644 exakte Herstellernamen, 1036 Profile,
633 mit/403 ohne Modelle. 941 Merkmalsdatensätze (792 Ergänzungen/149 bestehende
Anreicherungen), 4092 Aussagen, 1801 Produkt-Quellenreferenzen. 88 Firmenfokusse
auf 84 der 591 Quellen-Firmengruppen. 12981 Felder auf 778 Modellseiten:
5637 dokumentiert, 7034 unbekannt, 250 widersprüchlich, 60 Roadmap. Von 518
ursprünglichen Prüfzielen haben 376 Feldprüfungen, 142 warten. 6185 Zielfelder:
2817 dokumentiert, 3202 unbekannt, 156 widersprüchlich, zehn Roadmap.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben
offen. Vollständigkeit und Marktführerschaft sind weiterhin unbewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte lokale Browserfälle
bestanden (16 Agile/18 Vergleich, einschließlich acht Axe-Läufen). Build:
3096 Seiten/ca. 479 MB. Audit: null Fehler/933 Warnungen; sechs neue ungeklärte
Erstjahre. Lint, Format, Import-Trockenlauf null Ergänzungen, Offline-Refresh,
acht Modellseiten/Quellen-/Exporttransport sowie alle 778 gerenderten Feldprüfseiten
geprüft. Eigene Browser-/Testressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-93-evidence.json`.


## Ergänzung vom 2. November 2026 – Knightscope (Batch 94)

Historischen stationären K1 Tower ergänzt; K1 Hemisphere, K3, K5 und K7 geprüft.
80 Felder: 27 dokumentiert, 50 unbekannt, drei Roadmap. Vier neue Feldprüfungen;
die bestehende Drei-Feld-Prüfung von K7 wird auf 16 Felder erweitert, nicht
dupliziert. Der alte Prüfstand bleibt im dauerhaften Beleg erhalten. K3 erhält
erstmals datierte Merkmalsbelege. Ein Firmenfokus ergänzt. 2042 unbeteiligte
CSV-Zeilen, 777 frühere Feldprüfungen, 88 Firmenfokusse, sämtliche Profile/Aliasse
und alle 1961 Quellenidentitäten bleiben unverändert. Keine neuen CSV-Spalten
oder Kategorieverschiebungen.

K5: Aktuell verlinktes V5-Datenblatt nennt 420 lb, 64,6 in Höhe, 44,6 in Länge,
34,9 in Breite und bis 3 mph. Die Werte sind aus beschriftetem PDF-Text und
Wortkoordinaten übernommen, nicht aus Bildmaßstäben. 2023 nennt der Geschäftsbericht
noch ungefähr 398 lb, 5 ft Höhe und 3 ft Breite; diese historischen Angaben
werden nicht zu einer aktuellen Konfiguration kombiniert. V5: durchschnittlich
2,5–3 Stunden Patrouille zwischen Ladestopps, durchschnittlich 20–30 Minuten
autonomes Nachladen. Kein belegter Leer-bis-voll-Ladezyklus oder Maximalwert.
24/7-Dienst umfasst Ladestopps. Vier Videokameras, eine Wärmebildkamera,
sechs LiDAR- und dreizehn Sonarsensoren. ADA-Flächen/-Rampen und bis 20 Prozent
Parkhaussteigung; Prozentwerte sind keine Gradwinkel und keine Offroad-Freigabe.

K1 Hemisphere: 30 lb, 24 in Durchmesser, 10 in Tiefe, IP65, stationäre Montage.
Bis ungefähr 210 Grad HD-Video, optionale Gesichtserkennung, Kennzeichenerkennung,
Rufknopf, Gegensprechen, Ansagen und Stroboskop. Beworbene Preise ab 545 USD/Monat
sind qualifizierte Abonnementangaben, kein verbindlicher Geräte-Kaufpreis;
weiterhin kein strukturiertes Kaufangebot. Netzanschluss, Erkennungsreichweite
und Videospeicherung sind keine Akkulaufzeit oder belegte Identifikationsgenauigkeit.

K3: 2023 belegtes Innenraum-ASR mit ungefähr 340 lb, 4 ft Höhe, 2 ft Breite.
Geofencing mit Lasern, Ultraschall, IMU und Encodern. Historische K3/K5-Familie:
ungefähr 2–3 Stunden Patrouille, ungefähr 20 Minuten oder mehr je Ladestopp;
Monitoring bleibt dabei aktiv. Parknutzung, Parkuhr und Kennzeichenerkennung
sind für K3 ausdrücklich abgeschaltet. Historisches KSOC und Kommunikations-
funktionen bedeuten keine automatisch ausgelieferte Signals-/ASF-Nachrüstung.
Aktueller vermuteter K3-Pfad liefert 404; keine Abkündigung allein daraus abgeleitet.

K7: Aktuelle Force-Seite führt ihn weiterhin unter „Under Development“.
Bis 10 mph, leichtes Offroad, PTZ/Wärmebild und Talk-down bleiben Roadmap.
Q2-2026-Präsentation plante begrenzte Beta-Einsätze für das zweite Halbjahr 2026
und eine September-Messevorführung; abgelaufene Zieltermine beweisen keine Erfüllung.
Historisches vierrädriges Konzept ist keine Garantie aller späteren Eigenschaften.
Die frühere Drei-Feld-Prüfung bleibt als Vorversion im Belegmanifest erhalten.

K1 Tower: Im 2023er Geschäftsbericht ausdrücklich benannte stationäre Sicherheits-
plattform, ungefähr 6 ft Höhe, 3 ft Breite und 150 lb, für Innen-/Außen-Eingänge.
Nicht als mobile Patrouille beschrieben. Getrennt von Hemisphere, Blue-Light-
Notrufsäule und angekündigtem Super Tower; gemeinsamer K1-Name ist kein Aliasbeleg.
Heutige Lieferbarkeit und Erstjahr bleiben offen. Frühere unbelegte Erstjahre
2018 bei Hemisphere, 2017 bei K3 und 2015 bei K5 entfernt; Unternehmens-Pilotverkäufe
im Jahr 2015 belegen keine exakte Modelleinführung.

Herstellerprofil erfasst benachbarte Blue-Light-/Notrufgeräte, Retrofit-Kit,
K1 Capsule und Super Tower samt Entwicklungsstatus. 7/14/21 ft sind Höhenoptionen;
die ASF-Broschüre grenzt PTZ auf 14/21 ft ein. Daraus keine zusätzlichen mobilen
Roboterkarten. H1 ist ein Wearable-Prototyp für menschliche Sicherheitskräfte,
kein humanoider Roboter; Signals, RTX, Mission Intelligence, Bewachung und
Personenschutz bleiben Software/Dienste. Alarmreduktions-, Kriminalitäts- und
Marktführerschaftsaussagen sind nicht unabhängig validiert.

16 tatsächliche Quellenversuche: zwölf HTTP200, zwei 404 und zwei 403.
403 bei altem IR-Host und SEC-Bericht; keine positiven Belege aus Fehlerseiten.
Sieben PDFs mit 184 automatisch textlich extrahierten Seiten; nur ausgewählte
Produkt-/Roadmap-/Geschäftsberichtsabschnitte gelesen. Wortkoordinaten gespeichert,
keine vollständige oder visuelle PDF-Prüfung behauptet. K5-Produktpfad leitet
auf die byteidentische Force-Seite um und ist kein unabhängiger Zusatzbeleg.
Keine Formulare, Käufe, neuen 429 oder Wiederholungen zuvor blockierter Hosts.

Aktuell: 2047 Modelle/Konfigurationen, 644 exakte Herstellernamen, 1036 Profile,
633 mit/403 ohne Modelle. 943 Merkmalsdatensätze (793 Ergänzungen/150 bestehende
Anreicherungen), 4106 Aussagen, 1810 Produkt-Quellenreferenzen. 89 Firmenfokusse
auf 85 der 591 Quellen-Firmengruppen. 13058 Felder auf 782 Modellseiten:
5664 dokumentiert, 7083 unbekannt, 250 widersprüchlich, 61 Roadmap. Von 518
ursprünglichen Prüfzielen haben 378 Feldprüfungen, 140 warten. 6230 Zielfelder:
2832 dokumentiert, 3231 unbekannt, 156 widersprüchlich, elf Roadmap.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben
offen. Vollständigkeit und Marktführerschaft sind weiterhin unbewiesen.

793 Unit-Tests/64 Dateien, 20 verfolgte Python-Tests und 32 ausgewählte lokale
Browserfälle bestanden (14 Knightscope/18 Vergleich, einschließlich acht Axe-Läufen).
Ein zusätzlicher Discovery-Lauf enthielt drei fremde unverfolgte Tests; diese
Dateien wurden nicht verändert oder aufgenommen. Build: 3097 Seiten/ca. 480 MB.
Audit: null Fehler/937 Warnungen; vier zusätzliche ungeklärte Erstjahre.
Lint, Format, Import-Trockenlauf null Ergänzungen, Offline-Refresh,
fünf Modellseiten, Quellen-/Exporttransport und alle 782 gerenderten Feldprüfseiten
geprüft. Eigene Browser-/Testressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-94-evidence.json`.


## Ergänzung vom 2. November 2026 – Rainbow Robotics Humanoide, Quadrupeds und AMRs (Batch 95)

Sechs benannte Plattformen ergänzt: RBM-D400, RBM-D1000, RBM-S100a, RBM-S100b,
RB-Y2 und RBQ-10W. Die letzten beiden stehen ausdrücklich auf „Coming soon“.
Sechs bestehende Identitäten geprüft: HUBO, HUBO 2, DRC-HUBO, FX-2, RB-Y1 und
RBQ-3. Zusammen 218 Felder: 55 dokumentiert, 159 unbekannt, zwei widersprüchlich
und zwei Roadmap. Elf neue Feldprüfungen; die bestehende Acht-Feld-Prüfung von
RB-Y1 auf 17 Felder erweitert. Alle 26 aktuellen Katalogidentitäten von Rainbow
haben damit ausgewählte Feldprüfungen; dies beweist keine vollständige historische
oder regionale Hersteller-Produktliste. HUBO und RBQ-3 erhalten erstmals datierte
Merkmalsbelege. Vorhandenen Firmenfokus erweitert, keine zusätzliche Firma gezählt.

2041 unbeteiligte CSV-Zeilen, 781 frühere Feldprüfungen, 88 andere Firmenfokusse,
sämtliche Profile/Aliasse und alle 1961 Quellenidentitäten bleiben unverändert.
Die ersten sechs Firmenfokus-Aussagen und sechs Quellen der früheren Arm-/RBQ-10-
Prüfung bleiben erhalten. Alte RB-Y1-Prüfung und vorheriger Rainbow-Fokus stehen
vollständig im dauerhaften Belegmanifest. FX-2 behält seine zusätzliche staatliche
Attributionsquelle. Keine neuen CSV-Spalten oder Kategorieverschiebungen.

Vier AMRs: D400/D1000 tragen 400/1000 kg bei 70/150 kg Robotergewicht;
600×800×240 beziehungsweise 800×1100×300 mm (B×T×H), maximal 1,2 m/s.
Differenzialantrieb mit zwei aktiven Rädern und vier Doppelrollen; zwei 2D-LiDAR,
eine Tiefenkamera, optional Boden-QR. 50 V/25 Ah beziehungsweise 50 V/50 Ah
sind keine Laufzeiten. Anschluss-/Ladestationsangaben belegen keine Ladedauer.
S100a: ungefähr 50 kg, 510×510×1250 mm und ausdrücklich 120 kg Nutzlast.
S100b: ungefähr 70 kg, 710×680×1250 mm und 100 kg Nutzlast. Der Familienname S100
belegt keine einheitliche 100-kg-Last. Beide Tabellen nennen zehn Stunden
kontinuierliche Fahrt und 3,5 Stunden Laden ohne Last-/SOC-Endpunkte;
kein unabhängig gemessenes Maximum daraus abgeleitet. Eine 2D-LiDAR und zwei
Tiefenkameras, optionale 3D-LiDAR. Erkennung etwa 5 cm niedriger Hindernisse ist
keine Kletterstufe. Cargo-Box- und optionale 450-W-Ladermaße sind keine Roboterhülle.
Web-FMS, SLAM, Simulation, MES/WMS und Topmodule bleiben Integrationsmerkmale.

RB-Y1: 3 kg je Arm, 600 mm bis Handgelenk plus nicht festgelegte Handlänge,
Plattformtabelle 600×690×1400 mm. A/M-Konfigurationen 131/170 kg.
Produktübersicht nennt 24 DOF, A/M-Tabelle 20/26. Entwicklerhandbuch nennt oben
A24/M26, in M-Detailtabelle dagegen insgesamt 24. Keine eigenmächtig korrigierte
Summe oder Gleichsetzung von Befehlsdimension, Gelenk- und Radzählung.
Aktuelle Seite/Handbuch nennen 1,5 m/s; Einführung vom 5. April 2024 nennt 2,5 m/s.
Zeit-/Konfigurationsunterschied bleibt sichtbar, ohne unbelegte Revisionszuordnung.
Handbuchübersicht 1270 Wh gegenüber Produkt-/Packwert 1250 Wh; der größere Pack
trägt in einem Handbuchabschnitt „Model B“. Daraus kein neues Ganzrobotermodell,
keine Laufzeit oder garantierte Ladezeit. Separate Robot/User-PCs, SDK/ROS 2,
Simulation und Teleoperation behalten Entwicklungsscope. Vorführung vom März 2025
ist ausdrücklich teleoperiert. V1.2/V1.3-Wrist, A/M-Basen, Neck/Gripper/Vision,
Leader Arms und SDK-Model UB bleiben Konfiguration/Komponenten; keine Zusatzkarten.
Einführung 2024 ist durch den Herstellerbericht mit erstem öffentlichen Auftritt
im März 2024 belegt; Vorbestellung ab 8. Mai ist ein gesonderter angekündigter Schritt.

Historische Forschung: Herstellerheritage beschreibt einen HUBO-Meilenstein 2004;
KAIST nennt Rainbow-Gründung 2011. Universitätsentwicklung ist keine damalige
Rainbow-Serienlieferung. Original-HUBO-Zahlen und Erstjahr 2005 bleiben durch die
gewählten Primärquellen unbelegt. HUBO 2 ist im KAIST-Bericht vom 14. Mai 2020
als zweite Generation und TV-Co-Anchor benannt, nicht als autonomes Nachrichtensystem.
DRC-HUBO ist durch KAIST als DARPA-Gewinner 2015 identifiziert; Wettbewerb ist
kein belegtes Erstjahr oder universelle Katastrophenschutz-Zertifizierung.
Unbelegte Altwerte etwa 45/80 kg, 40/32 DOF und Handkonfigurationen entfallen.
FX-2: KAIST dokumentiert menschlichen Fahrer bei der Fackelstaffel am 11. Dezember
2017. Zeitgenössischer Regierungsbericht bestätigt gemeinsame HUBO-Lab/Rainbow-
Entwicklung und erste Enthüllung an diesem Tag; 2017 bleibt als Einführung erhalten.
Keine allgemeine Fahrgastzulassung, autonome Navigation oder Traglast abgeleitet.

RBQ-3: Zwei tatsächliche Hersteller-Vorführungsberichte, darunter RoboWorld am
28. Oktober 2021, belegen Modellidentität. Publikations-/Eventdaten und 2026er
Website-Migrationszeit bleiben getrennt. Das aktuelle Handbuch bezeichnet explizit
RBQ10; dessen IP54, Interfaces und Leistungswerte nicht auf RBQ-3 übertragen.
Ehemalige 25 kg, 3 kg Last, 12 DOF, 2 m/s, 180 Minuten, ungefähr 40000 USD und
Erstjahr 2023 sind durch die ausgewählten exakten Quellen nicht belegt.
Ein Auftritt 2021 widerlegt die angenommene erste Existenz 2023, begründet aber
kein exaktes tatsächliches Erstjahr. Historische Verfügbarkeit bleibt offen.

RB-Y2/RBQ-10W sind in ihren jeweiligen Lineup-Karten innerhalb desselben Karten-
Elements mit „Coming soon“ markiert. Dedizierte Platzhalterseiten liefern eine
Positionierung ohne technische Tabelle. Leg-Wheel-Simulatorassets und Nachbar-
modelle liefern keine realen Auslieferungsspezifikationen. Generic Mobile
Manipulator, ASTRO, FMS, Lader und Erweiterungen bleiben separate System-/Software-
oder Zubehörbefunde. Keine zusätzlichen Roboter aus bloßen Höhen-/Interfaceoptionen.

36 tatsächliche Quellenversuche: 33 HTTP200, ein 404 und zwei DNS-Fehler auf den
beiden Labor-Domainnamen. Aktuelle WordPress-Suche führt zu tatsächlich gelesenen
öffentlichen Herstellerberichten; Suchtreffer allein sind keine technischen Belege.
GitHub-Baum und begrenzte historische Commitabfrage begründen weder gelieferte
Hardware noch eine vollständige Versionsgeschichte. RBY-/RBM-Kataloge verlangen
personenbezogene Angaben und Einwilligung; kein Abruf dieser geschützten Dateien,
keine Formulare/Einwilligung/Käufe. Keine PDFs oder visuelle PDF-Prüfung, keine
neuen 429 oder Wiederholungen vorher blockierter Hosts.

Aktuell: 2053 Modelle/Konfigurationen, 644 exakte Herstellernamen, 1036 Profile,
633 mit/403 ohne Modelle. 951 Merkmalsdatensätze (799 Ergänzungen/152 bestehende
Anreicherungen), 4137 Aussagen, 1827 Produkt-Quellenreferenzen. Weiterhin 89
Firmenfokusse auf 85 der 591 Quellen-Firmengruppen. 13268 Felder auf 793 Modellseiten:
5714 dokumentiert, 7240 unbekannt, 251 widersprüchlich, 63 Roadmap. Von 518
ursprünglichen Prüfzielen haben 381 Feldprüfungen, 137 warten. 6290 Zielfelder:
2842 dokumentiert, 3280 unbekannt, 157 widersprüchlich, elf Roadmap.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben
offen. Vollständigkeit und Marktführerschaft sind weiterhin unbewiesen.

793 Unit-Tests/64 Dateien, 20 verfolgte Python-Tests und 38 ausgewählte lokale
Browserfälle bestanden (20 Rainbow/18 Vergleich, einschließlich acht Axe-Läufen).
Ein anfänglicher Integrationstest fand fehlende bestehende Lagerlogistik-Filtertags
an den vier neuen AMRs. Tags sachgerecht ergänzt; vollständige Unit-Suite und
Build/Audit/Import gegen korrigierte Daten wiederholt, keine Prüfung abgeschwächt.
Build: 3103 Seiten/ca. 481 MB. Audit: null Fehler/947 Warnungen; zehn zusätzliche
ungeklärte Erstjahre, darunter vier entfernte unbelegte Altjahre.
Lint, Format, Import-Trockenlauf null Ergänzungen, Offline-Refresh,
zwölf Modellseiten, Quellen-/Exporttransport und alle 793 gerenderten Feldprüfseiten
geprüft. Eigene Browser-/Testressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-95-evidence.json`.


## Ergänzung vom 2. November 2026 – Bitcraze Flugkits und Ökosystem (Batch 96)

Crazyflie 2.1+ und Crazyflie 2.1 Brushless erhalten zwei neue ausgewählte
Feldprüfungen: 34 Felder, davon 18 dokumentiert und 16 unbekannt. Keine neue
Roboterkarte. Ein Herstellerfokus ergänzt, insgesamt 90. Alle 2051 anderen
Katalogzeilen, 793 bisherigen Feldprüfungen, 89 früheren Firmenfokusse, sämtliche
Profile/Aliasse und 1961 Quellenidentitäten unverändert. Beide bisherigen
Produktbelege mit ihren Metadaten sind im dauerhaften Manifest erhalten.

Herstellershop nennt ausdrücklich 240 USD für Plus und 480 USD für Brushless.
Das sind datierte Kit-Listenpreise; Steuer-/Versandbedingungen und zusätzlich
erforderliche Funk-, Deck- oder Positionierungskosten sind damit nicht belegt.
Keine exakten strukturierten Kaufangebote aus den qualifizierten Preistexten.
Plus: 29 g Abflugmasse, 92×92×29 mm in der veröffentlichten B×H×T-Reihenfolge
mit Motorabstand/Füßen; diese Achsen werden nicht still korrigiert. Sieben Minuten
Flug mit Standardakku, 40 Minuten Laden, maximal empfohlene 15 g Zusatzlast.
Die Herstellerliste nennt Coreless-Antrieb und 250-mAh-Akku.

Brushless: Rev-3-Datenblatt nennt 34 g mit Beinen und 37 g mit Schutzbügeln.
Die einleitenden 32 g ersetzen diese Abflugkonfigurationen nicht. 100 mm bezeichnet
diagonalen Motor-Mittelpunktabstand; 55-mm-Propeller und Schub je Motor sind weder
vollständige Roboterhülle noch Zusatznutzlast. Zehn Minuten Standardakku-Flug,
60 Minuten Laden, maximal empfohlene 40 g Standardnutzlast, 350-mAh-Akku im Kit.
Für beide fehlen Last-/Flugbedingungen und Lade-SOC-Endpunkte. Die zuvor doppelt
eingetragenen Flugzeiten entfallen als gesondertes Maximum, ohne die belegten
Flugintervalle zu entfernen. Dokumentrevision vom 2. Oktober 2024 ist kein
automatisch belegtes Erstlieferdatum; Erstjahr bleibt unbekannt.

BLE-Handsteuerung, PC-Radio/Python und externes ROS-2-Crazyswarm2 behalten ihren
jeweiligen Umfang. Automatisierter/autonomer Flug benötigt Positionierung, etwa
Lighthouse, UWB/Loco oder externe Motion-Capture-Systeme. Kontaktpads allein belegen
kein autonomes Andocken. Der LOS-Funktest über einen Kilometer ist keine belegte
autonome Flugreichweite oder Wetterfreigabe. Die LED-Ring-Ausnahme der Brushless-
Kompatibilität bleibt sichtbar. Bolt 1.1 ist laut Systemübersicht ein Controller;
Radios, Decks, Docks und Bundles erzeugen keine zusätzlichen Ganzrobotermodelle.

Neun gespeicherte Collector-Versuche: sechs HTTP200-Antworten, davon ein PDF,
ein HTTP403 am Produktindex und zwei DNS-Fehler. Index nicht wiederholt. Ein
Shop-DNS-Fehler einmal erfolgreich wiederholt; gescheiterter Brushless-Produktseiten-
Abruf bleibt erhalten. Dessen technische Angaben nutzen erfolgreich gespeichertes
modellgenaues Datenblatt und Shopseite. Alle gespeicherten Bodies per SHA256 geprüft;
HTML-/PDF-Text gelesen. PDF-Text und gespeicherte Quellen tragen die Prüfung; eine visuelle Sichtung
ist anhand der verfügbaren Werkzeugprotokolle nicht nachgewiesen. Lokaler Bildbetrachter unterstützte die Eingabe
nicht; daraus keine lokale Bildprüfung behauptet. Keine Zeichnungsmaße abgeleitet,
keine Formulare oder Warenkorbaktionen. Historische Varianten und vollständige
Herstellerhistorie sind mit dieser ausgewählten Prüfung nicht abgedeckt.

Aktuell 2053 Modelle/Konfigurationen, 951 Produktmerkmalsdatensätze, 4141 Aussagen
und 1831 Produktquellenverweise. Ausgewählte Prüfungen: 13302 Felder auf 795 Modellen,
5732 dokumentiert, 7256 unbekannt, 251 widersprüchlich und 63 Roadmap. Ursprüngliche
518 Zielmodelle: 383 mit ausgewählten Feldprüfungen, 135 offen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte weiterhin offen. Kein Nachweis einer
Marktführerschaft oder vollständigen historischen/aktuellen Produktverifikation.

793 Unit-Tests/64 Dateien und zehn ausgewählte Desktop-/Mobil-Browserfälle bestanden,
einschließlich vier Axe-Läufen sowie Vergleich, Suche und Firmenprofil. Build:
3103 Seiten/ca. 481 MB. Audit null Fehler/947 Warnungen, unverändert zum Vorbatch.
Import-Trockenlauf null Ergänzungen, Offline-Refresh und alle 795 gerenderten
Feldprüfseiten/13302 Felder geprüft. Geänderten Test gelintet/formatiert. Keine
Anwendungslogik geändert; frühere Python-, Anwendungslint-/Format- und vollständige
Vergleichsregressionsresultate bleiben in Batch 95, ohne als neu ausgeführt zu gelten.
Eigene Test-/Browserressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-96-evidence.json`.


## Ergänzung vom 2. November 2026 – Blue Robotics ROV/USV und Betriebsbedingungen (Batch 97)

Zwei bestehende Plattformen geprüft: BlueROV2 und BlueBoat. 38 Felder, davon
21 dokumentiert, 16 unbekannt und eine ungeklärte Akku-Bedingung. Keine neue
Roboterkarte. Ein Firmenfokus ergänzt, insgesamt 91. Alle 2051 anderen Katalogzeilen,
795 bisherigen Feldprüfungen, 90 früheren Firmenfokusse, sämtliche Profile/Aliasse
und 1961 Quellenidentitäten unverändert. Beide früheren Produktbelege einschließlich
Metadaten bleiben im dauerhaften Manifest erhalten. Die aktuellen Ambi-Abrufe
begründen keine neue technische Prüfung; deren frühere Datensätze bleiben erhalten.

BlueROV2: sechs T200-Grundthruster, optional acht mit Heavy-Kit. Heavy ermöglicht
volle Sechs-Achsen-Fahrzeugregelung und aktive Nick-/Rollstabilisierung; keine
sechs mechanischen Armachsen und keine höhere Horizontalgeschwindigkeit abgeleitet.
Grundtabelle 457×338×254 mm, 11–12 kg mit Standardballast und Herstellerakku,
9–10 kg ohne beide. Acrylic/Aluminium-Gehäuse sind getrennt für 100/300 m Tiefe
bewertet. Tetherlänge und Sonarreichweite sind keine zusätzliche Tauchtiefe.
Verfügbare Zusatzauftriebsmasse 1,2 kg mit vier Lumen-Leuchten bis 1,4 kg ohne
Leuchten; 7 kgf vertikaler Bollardschub ist keine neutrale Zusatznutzlast.

Aktive HTML-Tabelle nennt ungefähr zwei Stunden normale/vier Stunden leichte
Nutzung mit 15,6-Ah-Akku; verlinktes PDF nennt dieselben Intervalle mit 18 Ah.
Diese nicht aufgelöste Bedingungsabweichung bleibt als Konflikt sichtbar, ohne
Revision oder unabhängig gemessene Laufzeit zu erfinden. Kein gesondertes Maximum
und keine Ladedauer daraus abgeleitet. Ungefähr 30 Sekunden Akkuwechsel ist kein
Laden. Ab 4900 USD laut sichtbarer Produktüberschrift; Produkt-JSON-LD nennt USD
und Steuerexklusion, aber keinen Betrag. Preisbetrag daher ausdrücklich aus der
sichtbaren From-Angabe, nicht aus einem erfundenen strukturierten Angebot. Base-Kit
enthält laut Käuferleitfaden weder Tether noch Leuchten; Akku, Ladegerät und Laptop
sind ebenfalls separat. Montage laut Hersteller ungefähr sechs bis acht Stunden.

BlueBoat: 14,5 kg ohne Akkus und Nutzlast. 15 kg ist die gemeinsame Grenze für
Akkus plus Instrumente. Bei 1 m/s und ungefähr 30 W ohne Nutzlast nennt die Tabelle
18/36/50/62 Stunden mit zwei/vier/sechs/acht Akkus. Größte aufgeführte Akkukonfiguration
2128 Wh; nicht mit Höchstgeschwindigkeit, voller Nutzlast oder beliebigen
Wetterbedingungen gleichgesetzt. 3 m/s gelten bei zwei Akkus ohne Nutzlast.
Benutzerseitige Solarversorgung mit theoretisch unbestimmter Dauer zählt nicht als
Akku-Maximum. Zwei M200-Motoren mit Weedless-Propellern, Differenzialschub.

L×B×H: 120×93×46 cm ausgeklappt, 120×71×24 cm gefaltet. Verpackungsmaße bleiben
separat. Der extrahierte PDF-Text enthält außerdem eine 38-cm-Höhenmarkierung; ihr
Bezugsumfang ist nicht visuell verifiziert. Sie ersetzt nicht die tabellierten
46 cm, und eine Zuordnung zu Antenne oder Konfiguration wird nicht behauptet. Standardfunk bis 250 m, optionale Richtantennen über 800 m
unter passenden Bedingungen: keine garantierte Missionsreichweite oder
Kollisionsvermeidung. 320 mm maximaler beladener Tiefgang ist keine Tauchtiefe.
Ab 4400 USD vor Steuern; Akkus, Ladegerät, Laptop, gewählte Funk-/Sonaroptionen
und Versand behalten ihren Umfang. Keine exakten strukturierten Kaufangebote
für die qualifizierten Startpreise erzeugt.

GPS, Navigator, ArduRover und BlueOS unterstützen Wegpunkte, Guided und Loiter.
Das Produktmarketing nennt Return-to-Home bei Funkverlust. Der Betriebsleitfaden
qualifiziert dagegen: Standard-GCS-Verlust nach fünf Sekunden führt außerhalb
Auto zu Hold mit gestoppten Motoren ohne aktives Positionhalten; Auto ignoriert
jenen Failsafe und setzt die Mission fort. Parameter und Modus sind entscheidend,
kein universelles selbständiges Heimkehren. Unterwasser-Gripper, Sonarsysteme,
Skids, Heavy, Gehäuse, BaseStation und Propulsionskomponenten bleiben Optionen bzw.
Komponenten. Ein Distributor-Tag „T500 Thruster ROV“ belegt kein zusätzliches
modellgenaues Herstellerfahrzeug. Firmenhistorie ab T100-Kampagne 2014 belegt nicht
das Erstjahr beider Roboter. Keine vollständige historische/regionale Produktliste,
IP-Klassifizierung, numerische Navigationsgenauigkeit oder Marktführerschaft abgeleitet.

14 gespeicherte Collector-Versuche: neun HTTP200-Bodies, davon zwei PDFs, vier
HTTP403 an vorab ausgewählten Ambi-URLs und ein HTTP404 am vermuteten alten ROV-
Handbuchpfad. Danach korrekten produktverlinkten Betriebspfad erfolgreich gelesen.
Keine weiteren Ambi-Anfragen nach dem beobachteten Batch. Alle gespeicherten Bodies
per SHA256 geprüft und HTML-/PDF-Text gelesen. Eine visuelle Prüfung beider
Datenblätter ist anhand der verfügbaren Werkzeugprotokolle nicht nachgewiesen.
Zusätzliche Webversuche sind nicht Teil der 14 Collector-Versuche. Keine Formulare oder Warenkorbaktionen.

Aktuell 2053 Modelle/Konfigurationen, 951 Produktmerkmalsdatensätze, 4149 Aussagen
und 1836 Produktquellenverweise. Ausgewählte Prüfungen: 13340 Felder auf 797 Modellen,
5753 dokumentiert, 7272 unbekannt, 252 widersprüchlich und 63 Roadmap. Ursprüngliche
518 Ziele: 385 mit ausgewählten Feldprüfungen, 133 offen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Keine Vollständigkeit
oder Führungsposition allein aus Bestandszahlen abgeleitet.

793 Unit-Tests/64 Dateien und zwölf ausgewählte Desktop-/Mobil-Browserfälle bestanden,
einschließlich vier Axe-Läufen, Vergleich, Suche und Firmenprofil. Build 3103 Seiten/
ca. 481 MB. Audit null Fehler/947 Warnungen, unverändert. Import-Trockenlauf null
Ergänzungen, Offline-Refresh, alle 797 gerenderten Feldprüfseiten/13340 Felder und
Quellen-/Exporttransport geprüft. Zwei anfängliche Vergleichsfälle erwarteten einen
englischen Dezimalpunkt in der deutschen Ansicht. Neue Browsererwartung auf
15,6 Ah korrigiert und alle zwölf Fälle wiederholt; rohe 15.6-Ah-Belegprüfung
beibehalten, keine Daten- oder Anwendungsänderung daraus. Anfangsergebnisse erhalten.
Geänderten Test gelintet/formatiert. Keine
Anwendungslogik geändert; frühere Python-/Anwendungslint-/Format- und vollständige
Vergleichsregressionen in Batch95-Historie erhalten, ohne neue Ausführung zu behaupten.
Eigene Test-/Browserressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-97-evidence.json`.


## Korrektur vom 2. November 2026 – Umfang der PDF-Prüfungen in Batch 96/97

Die zuvor behaupteten PDF-Screenshot-Sichtungen sind nicht durch die verfügbaren
Werkzeugprotokolle belegt und wurden in beiden Manifesten zurückgenommen.
Gespeicherte Antwortkörper, SHA256 und extrahierte technische Tabellentexte sind
weiterhin belegt. Zwei Größen-Feldhinweise nennen den 38-cm-Bezugsumfang der
BlueBoat-Zeichnung nun ausdrücklich ungeklärt. Tabellenwerte und Modellidentitäten
bleiben unverändert. Ursprungsaussagen bleiben in Git und im Korrekturbericht
nachvollziehbar. Siehe `reports/competitor-evidence-inspection-correction-2026-11-02.json`.


## Ergänzung vom 2. November 2026 – AgiBot-Varianten und aktuelle Produkte (Batch 98)

13 neue Modellkarten: A2 Ultra, A2 Lite, X2 Ultra, X2 REC, X2 EDU, G1 MAX,
D1 Edu, D1 Max, D1 MaxPro, C5, C4, C2 und C2P. Zwölf bestehende Modelle geprüft:
A2, A3, A3 Ultra, Lingxi X1/X2, Genie G1, G2, G2 Max, G2 Air, D1 Pro,
D1 Ultra und D1 Ultra-W. 431 ausgewählte Felder: 220 dokumentiert, 209 unbekannt,
zwei mit ungeklärtem Quellen-/Zählumfang. 24 neue Feldprüfungen, bestehende
Ultra-W-Prüfung erweitert. Ein Firmenfokus ergänzt, insgesamt 92. Die 2041 anderen
bisherigen Katalogzeilen, 796 übrigen Feldprüfungen, 91 bisherigen Firmenfokusse,
Profile/Aliasse und alle 1961 ursprünglichen Quellenidentitäten unverändert.
Vorherige Produktbelege und die ersetzte Ultra-W-Feldprüfung bleiben im Manifest.

A3 Ultra: Herstellerankündigung vom 18. Juli 2026 nennt 174 cm, 60 kg, 51 aktive
Freiheitsgrade, 5 kg je Arm und bis zu acht Stunden kombinierte Betriebszeit.
55 kg und zehn Stunden gehören zum Grundmodell A3. Broschüren-Handangabe bis
20 DOF wird nicht zum Ganzkörperwert addiert. Zehn Sekunden Akkutausch sind keine
Ladedauer. A2 Ultra/Lite behalten eigene Tabellenspalten; der Pfad A2_Pro nennt
heute A2 Lite und belegt kein zusätzliches Modell A2 Pro. Der alte A2_W-Pfad
liefert A2-Ultra-Inhalt. A2 Max und Yuanzheng A2-W daher nicht umgedeutet, sondern
unverändert mit offener historischer Identitäts-/Versionsprüfung belassen.
G1 MAX wird trotz ähnlicher 230-kg-Angabe nicht als belegter A2-W-Alias behandelt.

X2: vorhandenen Lingxi-X2-Datensatz als aktuelle Grundmodellkarte behalten,
keine zusätzliche Dublette erzeugt. Aktuelle Basisdaten 35 kg/25 DOF/fünf je Arm;
Ultra 39 kg/30 DOF/sieben je Arm, REC 40 kg/30 DOF, EDU 35 kg/29 DOF.
Historische Revisionsgleichheit ist damit nicht bewiesen. Die Serienseite
schließt Ultra-Navigation und Hindernisvermeidung ausdrücklich für Basis-X2 aus.
REC erhält nicht automatisch Laufzeit und Geschwindigkeit der Nachbarspalte.
EDU-Höhe enthält einen Dummy-Kopf; optionale Hände und Rechenmodule sind kein
serienmäßig enthaltenes Komplettsystem. G1 nennt 20 DOF ohne Endeffektor in der
Tabelle und 26 im Text ohne vollständige Aufschlüsselung; Zählumfang bleibt sichtbar.

G2 Max: Bekanntmachung im Juli, formeller Start am 29. Oktober 2026.
Letztere Herstellerquelle nennt 21 DOF, bis 40 kg gemeinsame Zweiarmlast und
0,1–2,5 m Arbeitshöhe. Keine 40 kg je Arm und keine Armreichweite daraus abgeleitet.
G2-Grundplattform hat eine eigene 5-kg-je-Arm-/26-DOF-Spezifikation; Jetson-T5000-
2070-TFLOPS(FP4)-Angabe bleibt mit Präzisionsformat, ohne TOPS-Umrechnung.
Herstellerberichtete Tablet-Linienkennzahlen sind keine Akkulaufzeit oder
unabhängige universelle Produktivitätsmessung. G2 Air bleibt ein betreutes,
einarmiges System; vollständige Autonomie ist ein Entwicklungspfad.

D1 Pro/Edu: aktuell 15,5 kg inklusive Akku und 3,5 m/s; SDK-Entwicklung ist
ausdrücklich Edu zugeordnet. Ultra/Ultra-W: 16/22 kg und 12/16 DOF; allgemeine
1–2 Stunden Betrieb und eine Stunde unter Last behalten ihre Bedingungen.
Ultra-W hat 16 cm kontinuierliche Treppen und separat 60 cm maximale Kletterhöhe.
D1 Max: 25 cm kontinuierliche Treppen sind nicht 80 cm einzelne Hindernishöhe;
HTML-Mindestlaufzeiten ≥5/≥3,5 h bleiben gegenüber PDF 5±0,5/3,5±0,5 h ungeklärt.
D1 MaxPro: 50 kg Last, 2081 Wh, 5,5±0,5 h ohne Last/zwei Stunden mit 50 kg.
3 m/s sind Labor-Extremwert; Produkt laut Fußnote auf 2 m/s begrenzt.
Laden 10–90 Prozent ungefähr 4,5 Stunden. 30-cm-Treppen, 20-cm-Waten,
LiDAR-Sensorgenauigkeit und Ganzfahrzeug-IP67 bleiben getrennte Messgrößen.

C5/C4/C2/C2P: Reinigungsleistung und Werkzeugbreiten getrennt nach Modell und
theoretischem/maximalem bzw. genanntem Stundenwert. 25 kg C5-Bürstendruck ist keine
Nutzlast; vier Minuten Tankselbstreinigung keine Akkuladedauer. Stations- und
Roboterbehälter werden nicht addiert oder doppelt als Frisch-/Schmutzwasser vergeben.
C2P: vier Stunden Laufzeit, zwei Stunden kontinuierlicher Betrieb mit vollem
Wassertank und zwei Stunden Laden sind drei unterschiedliche Angaben.
700 mm Mindest-Durchfahrtshöhe wird nicht als horizontale Gangbreite übernommen.
Bei C4 wird 800 mm tabellierter Wenderadius nicht in einen Durchmesser umgerechnet.

Worken bleibt ein vorgeschlagener Produktivitätsrahmen; AHA3, GO-Modelle,
Link-U OS, Genie Studio/Sim, Datensätze, Hände, Gelenke und Stationen sind keine
weiteren vollständigen Roboterkarten. Link-U-Komplettveröffentlichung als Open Source
bis Ende 2026 bleibt am 2. November eine Zukunftsangabe. Keine unabhängigen,
exklusiven USPs oder erreichte Marktführerschaft abgeleitet.

36 gespeicherte Collector-Versuche: 33 HTTP200-Bodies einschließlich sechs PDFs,
zwei vermutete Pfade mit404, Store429 ohne Wiederholung. Alle Body-Hashes geprüft.
Eine überlappende Collector-Ausführung verursachte einen Index-/Manifestkonflikt;
ursprüngliche Request-Metadaten und Bodies wiederhergestellt und sämtliche Hashes
abgeglichen, ohne Wiederabruf. Danach sequenziell abgerufen. PDF-Tabellen als Text
geprüft; keine visuelle Sichtung oder Zeichnungsinterpretation behauptet.
Die separate Inspektionskorrektur früherer Batches bleibt dokumentiert in
`reports/competitor-evidence-inspection-correction-2026-11-02.json`.

Aktuell 2066 Modelle/Konfigurationen, 973 Produktmerkmal-Datensätze, 4239 Aussagen,
1881 Produktquellenverweise. Ausgewählte Prüfungen: 13769 Felder auf 821 Modellen;
5972 dokumentiert, 7480 unbekannt, 254 widersprüchlich/ungeklärt und 63 Roadmap.
Ursprüngliche 518 Ziele: 387 mit Feldprüfungen, 131 offen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte weiter offen.

793 Unit-Tests/64 Dateien, 14 ausgewählte Desktop-/Mobilfälle einschließlich vier
Axe-Läufen bestanden. Alle 821 gerenderten Prüfseiten/13769 Felder, 25 aktuelle
Modellseiten/431 Felder, Firmenfokus, Exporte, Suche und exakter Vergleichs-Payload
geprüft. Zwei anfängliche Suchtests verlangten einen Merkmalstreffer-Satz für eine
auch in der Beschreibung vorhandene Phrase. Bestehendes Verhalten war korrekt;
Test auf tatsächlich ausschließlich im Merkmal vorkommende Phrase geändert und
alle 14 Fälle bestanden. Keine Anwendungs- oder Datenänderung daraus abgeleitet.
Build 3116 Seiten/ca. 483 MB. Audit null Fehler/966 Warnungen: alle 19 zusätzlichen
Warnungen betreffen ausdrücklich unbekannte Erscheinungsjahre. Offline-Refresh und
Import-Trockenlauf mit null Ergänzungen bestanden. Geänderte Testdatei gelintet und
formatiert. Keine Anwendungslogik geändert; frühere vollständige Browser-/Python-
Prüfungen bleiben historische Ergebnisse. Eigene Test-/Browserprozesse geschlossen,
Port4321 frei; andere Aufgaben unangetastet. Dauerhafter Beleg:
`reports/competitor-batch-98-evidence.json`.


## Ergänzung vom 2. November 2026 – Boston Dynamics Generationen und Konfigurationen (Batch 99)

Zehn neue Modell-/Komplettkonfigurationskarten: Hydraulic Atlas, PETMAN, Stretch,
Stretch for Case Pick, Spot Enterprise Asset Management Kit, Handle, Spot Classic,
Sandflea, RHex und RiSE. Sieben bestehende Einträge geprüft: Atlas, E-Atlas, Spot,
Spot Enterprise, BigDog, LS3 und WildCat. 318 ausgewählte Felder: 98 dokumentiert,
218 unbekannt, zwei Quellenkonflikte. Ein Firmenfokus ergänzt, insgesamt 93.
Die 2059 anderen bisherigen Katalogzeilen, alle 821 früheren Feldprüfungen,
92 früheren Firmenfokusse, Profile/Aliasse und 1961 Quellenidentitäten unverändert.
Vorherige Atlas-/Spot-Produktbelege bleiben im Manifest erhalten.

Atlas: Die aktuelle Karte beschreibt die am 5. Januar 2026 angekündigte
Produktionsversion. Hersteller-Article-datePublished und explizite Ankündigung
belegen diesen Versionsstart, nicht den Beginn des Atlas-Gesamtprogramms.
1,9 m, 90 kg, 56 DOF und IP67 laut aktueller Seite/Datenblattrevision 15. Oktober
2026. Traglasten: 50 kg momentan, 30 kg dauerhaft, 20 kg einhändig. Vier Stunden
typische Laufzeit, zwei Stunden bei schwerem Heben. Ungefähr drei Minuten autonomer
Akkuwechsel sind getrennt von 1,5 Stunden Laden; kein 24-Stunden-Akku daraus.
2,3 m allgemeiner Reach-Wert wird nicht ohne Armbezug als mechanische Armreichweite
eingetragen. Unbelegten früheren 39000-USD-Preis, hydraulischen DOF-/Geschwindigkeits-
und alten Laufzeitbezug entfernt. Vorhandene Bild-/Videozuordnung bei Atlas/E-Atlas
geleert, weil die Zuordnung zur jeweils präzisen Generation nicht verifiziert ist;
keine Assetdateien gelöscht und keine Ersatzbilder erfunden.

E-Atlas bleibt als Katalogbezeichnung für die am 17. April 2024 vorgestellte
elektrische Entwicklungsplattform erhalten. Der Hersteller nennt sie Electric Atlas,
nicht ein eigenständiges offizielles E-Atlas-Produkt. Ihre exakten technischen Werte
werden nicht aus der 2026-Karte zurückübertragen. Hydraulic Atlas/HD Atlas als
historische Plattform separat ergänzt; aktuelle Elektrodaten nicht übernommen.
PETMAN ist in der Hersteller-Retrospektive als Schutzkleidungs-Testroboter benannt,
ohne daraus ein vollständiges Datenblatt zu erfinden.

Spot: aktive HTML-Seite nennt 33,8 kg mit Akku; verlinktes Datenblatt vom 22. Mai
2024 nennt 32,7 kg. Keine Hardware-/Revisionszuordnung löst den Unterschied auf.
PDF-Länge 1100 mm; HTML druckt 110 mm neben 43,3 Zoll. Beide Abweichungen sichtbar
als Konflikt, ohne stillschweigende Korrektur. 500 mm Breite, 610 mm Standard-Gehhöhe
bleiben Posenangaben; 520–700 mm Gehbereich und 191 mm Sitzhöhe nicht vermischt.
14 kg montierte Nutzlast, 1,6 m/s, ±30° Steigung, 300-mm-Stufe und IP54 behalten
ihren jeweiligen Umfang. Betriebsbereich −20°C bis 55°C; Einschalten laut PDF erst
ab 0°C. SDK nennt zwei Hüftgelenke plus ein Knie je Bein: zwölf an vier Beinen,
kein zusätzlich eingeschlossener Arm daraus abgeleitet.

564-Wh-Akku: durchschnittlich 90 Minuten, abhängig von Nutzlast und Umgebung;
180 Minuten Standby sind kein aktiver Betrieb. 60 Minuten generische Akku-Recharge-
Angabe bleibt getrennt von Docktabellen: bei 25°C 50 Minuten bis 80 Prozent/zwei
Stunden bis 100 Prozent; bei 35°C 2,5/3,5 Stunden. Optionaler Spot Arm: sechs DOF
plus Greifer, 8 kg Masse; 11 kg maximales Heben, 5 kg dauerhaft bei 0,5 m Ausladung,
25 kg Ziehen auf Teppich, jeweils mit 22°C-Laborbedingung. Keine pauschale 25-kg-
Traglast oder zusätzliche Armmasse außerhalb des Nutzlastbudgets zugesichert.

Spot Enterprise: Ankündigung vom 2. Februar 2021 belegt selbstladende Ausführung
mit Dock und geänderter Kommunikations-/Remote-Hardware. Damalige Basisrobotik,
CAM+IR-Komplettangebot und aktueller Bare-Spot-Bestand behalten ihren Umfang.
Das gesonderte Enterprise Asset Management Kit ist eine dokumentierte komplette
Sensor-/Software-/Dockkonfiguration, kein zusätzlicher Basis-Chassis-Typ.
Kitmasse mit Akku 43,8 kg ohne bzw. 47,5 kg mit optionalem Fluke SV600; Geh-Standardhöhe
mit Aufbauten 967 mm. IP54 und durchschnittlich 90 Minuten sind Roboterwerte;
IP65 und acht Stunden gehören zum Tablet. Kit-Umgebung −20°C bis 45°C.
EAP-2-LiDAR-100-m-Reichweite/±3-cm-Sensorgenauigkeit ist keine Roboternavigations-
genauigkeit. Kein verbleibender Nutzlastspielraum aus unvollständigen Angaben errechnet.

Stretch: Trailerentladung und Case Pick sind dokumentierte Komplettkonfigurationen
mit eigenen Tabellen. Entladung: 1300 kg Robotermasse, 40×48-Zoll-Footprint,
bis 16 Stunden Laufzeit, 50 lb/Herstelleräquivalent 23 kg Kistenlast,
600–800 Kisten/h als Herstellerangabe für diese Aufgabe. Vakuumgreifer,
Onboard-Beleuchtung, selbständige Bergung heruntergefallener Kisten und Multipick
werden genannt. Nominal ungefähr zwei Stunden bis 90 Prozent am Fast Charger;
unter-zwei-Stunden-Marketing bleibt keine bedingungslose Vollladegarantie.

Case Pick: 1500 kg Robotermasse, bis 1300 kg ziehbare Palette, 23 kg Kisten,
bis 2 m/s, gebaute Paletten bis 1,8 m. Eigenes Armdesign mit zusätzlichem Gelenk,
ohne vollständige DOF-Zahl daraus. Bis 16 Stunden Laufzeit; 90 Prozent in einer
Stunde 45 Minuten am Fast Charger. Mindestens zehn Fuß/Herstelleräquivalent drei
Meter breite Gänge und zunächst Umgebungslagerung im Regal. Engere Gänge,
offene Palettenfelder und Kühllager bleiben Entwicklungsperspektive. Keine
600–800-Kisten-Entladeleistung als Case-Pick-Durchsatz übernommen. Gemeinsame
3,2 m vertikale/1,95 m horizontale Arbeitsräume sind weder Stapelhöhe noch ein
eindeutig belegtes mechanisches Armlängenmaß. WMS-/Orbit-Integration ersetzt keine
unabhängig gemessene Facility-Produktivität.

Herstellerhistorie: Hydraulic Atlas, Handle, Spot Classic, WildCat, Sandflea,
LS3, RHex, RiSE und BigDog getrennt geprüft. Zeitleistenknoten sind Meilensteine,
keine automatisch verifizierten Erstjahre. LS3: 400 lb Last und 20 Meilen vor
Nachtanken, keine 24-Stunden-Akkulaufzeit. WildCat: 19 mph auf ebener Fläche,
keine belastete Geländegarantie. Sandflea: 11 lb und 30 Fuß vertikales Springen;
RHex: 30 lb, sechs Beine, ferngesteuert und kopfüber beweglich; RiSE: ungefähr
50 Haken je Fuß und 5 cm/s Klettergeschwindigkeit. Sechs Beine sind keine belegte
Sechs-DOF-Angabe. Nicht dokumentierte frühere Preise und Spezifikationen bleiben
unbekannt statt durch Werte aktueller Plattformen ersetzt zu werden.

27 gespeicherte Collector-Versuche: 25 HTTP200-Bodies einschließlich sechs PDFs,
zwei vermutete Pfade mit404, keine 403/429. Öffentliche Herstellerlinks, WP-Such-/
Media-API und SDK-Navigation genutzt; API-Suchergebnisse dienen zur Dokument-
auffindung, nicht als technische Produktbelege. Alle Body-Hashes geprüft.
PDFs als extrahierten Text geprüft; keine visuelle Bild-/Zeichnungs-/Videosichtung
behauptet. Keine Formulare oder Warenkorbaktionen, keine zuvor blockierten Hosts
erneut abgerufen. Die frühere separate Inspektionskorrektur bleibt dokumentiert.

Aktuell 2076 Modelle/Konfigurationen, 988 Produktmerkmal-Datensätze, 4304 Aussagen,
1909 Produktquellenverweise. Ausgewählte Prüfungen: 14087 Felder auf 838 Modellen;
6070 dokumentiert, 7698 unbekannt, 256 widersprüchlich/ungeklärt und 63 Roadmap.
Ursprüngliche 518 Ziele: 389 mit Feldprüfungen, 129 offen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Keine Vollständigkeit,
exklusiven USPs oder erreichte Marktführerschaft allein aus diesen Beständen abgeleitet.

793 Unit-Tests/64 Dateien, 16 ausgewählte Desktop-/Mobilfälle einschließlich vier
Axe-Läufen bestanden. Alle 838 gerenderten Prüfseiten/14087 Felder, 17 ausgewählte
Seiten/318 Felder, Firmenfokus, Exporte, Suche und Vergleichs-Payload abgeglichen.
Build 3126 Seiten/ca. 484 MB. Audit null Fehler/980 Warnungen: alle 14 zusätzlichen
Warnungen sind ausdrücklich unbekannte Erstjahre. Import-Trockenlauf null Ergänzungen,
Offline-Refresh und Lint/Format der geänderten Testdatei bestanden. Keine Anwendungscode-
Änderung; frühere vollständige App-Browser-/Python-Ergebnisse bleiben historische
Ergebnisse. Eigene Prozesse beendet und Port4321 frei; andere Aufgaben unberührt.
Dauerhafter Beleg: `reports/competitor-batch-99-evidence.json`.


## Ergänzung vom 2. November 2026 – Nexaro Modellunterschiede (Batch 100)

Die zwei bestehenden Nexaro-Einträge NR 1500 und NR 1700 haben jetzt 40 ausgewählte
Feldprüfungen: 19 dokumentiert, 20 unbekannt, ein Quellenkonflikt. Keine neue
Roboterkarte, CSV-Spalte oder Anwendungscodeänderung. Ein Firmenfokus ergänzt;
insgesamt 94. Alle 838 früheren Feldprüfungen, 93 Firmenfokusse, 2074 anderen
Katalogzeilen, Profile/Aliasse und 1961 Quellenidentitäten unverändert. Frühere
Produktbelege beider Modelle sind im Manifest erhalten.

Reinigungsrate beider Modelle maximal 100 m²/h, abhängig von Grundriss, Einrichtung,
Bodenbelag und Verschmutzung. NR 1500: maximal 400 m² Reinigungsfläche und
300 m²/h Kartierung. NR 1700: maximal 1000 m² und 600 m²/h Kartierung. Kartierung
ist keine Reinigungsleistung. Flächenangaben gelten mit maximal 35 m Dock-Abstand
und höchstens 6 × 6 m beziehungsweise 12 × 12 m freien Bereichen ohne
charakteristische Objekte; daraus wird keine Mindestgangbreite abgeleitet.

Beide Datenblätter: 6,5 kg Robotermasse, 280 mm Reinigungsbreite, 1,4-Liter
Staubbehälter und waschbarer HEPA-H13-Filter. Der separate Dock wiegt 1,5 kg und
misst 410 × 360 × 200 mm. Staubvolumen ist kein Wassertank oder Traglastwert.
Hartboden-Laufzeiten: 250 Minuten Eco, 110 Balanced, 105 Performance. Die gleichen
Fußnotenzeichen neben den Werten und „Measured on hard floor“ wurden im
extrahierten Text abgeglichen. Ladezeiten etwa 95 Minuten für 15–85 % und
120 Minuten für 15–95 %, keine behauptete vollständige 0–100-%-Ladung.

NR-1700-Größe widersprüchlich: englisches und deutsches Datenblatt, Stand
Februar 2025, nennen 346 × 344 × 173 mm. Der erfolgreiche Shop-Abruf über die
alte NR-1500-Weiterleitung nennt 343 × 343 × 175 mm. Beide Werte bleiben sichtbar.
NR 1500 hat ein eigenes Datenblatt, Stand August 2025; die Weiterleitung beweist
keine Modellgleichheit. Datenblattstände sind keine belegten Erscheinungsjahre.

HUB Pro.Multi unterstützt koordinierte Flotten; Pro.Single ist auf Einzelgeräte
oder Drop & Go eingegrenzt. Verwaltung mehrerer Stockwerke ist kein Beleg für
autonome Treppen-/Aufzugnutzung. Der NR-1700-Shop nennt eine 36-monatige
Pro.Multi-Lizenz im Lieferumfang; der angezeigte Preis mit erst im Checkout
berechneten Steuern/Versand wird nicht als eindeutiger Gesamtpreis übernommen.
Trolley, Dock, Verbrauchsmaterial, Software und Monitoring sind keine weiteren
Roboter. Zertifizierungs-, Luftqualitäts-, Datenschutz- und Effizienzpositionierung
bleibt dem Hersteller zugeschrieben und wurde nicht unabhängig auditiert.

Zehn gespeicherte HTTP-Antworten: neun erfolgreich, darunter vier deutsch/englische
PDFs; ein HTTP 429 beim direkten Shop-Aufruf. Der erste Collector lief danach
fälschlich für bereits eingereihte URLs weiter: Downloadindex, HUB und die alte
NR-1500-Weiterleitung waren erfolgreich. Seitdem keine weiteren nexaro.com-Aufrufe;
der Collector verweigert nun weitere Aufrufe eines zuvor begrenzten Hosts.
Die offiziellen öffentlichen Download-Unterlagen auf downloads.nexaro.com waren
zugänglich. Alle Antwortkörper per SHA-256 geprüft. Vier PDFs ausschließlich als
extrahierter Text geprüft, keine visuelle Prüfung, Bild-, Zeichnungs- oder
Videointerpretation. Das anfänglich fehlende pdftotext wurde durch vorhandenes
PyMuPDF ersetzt; das bereits gespeicherte erste PDF wurde nicht erneut geladen.

Prüfungen: 796 Unit-Tests in 64 Dateien, Build mit 3126 Seiten, Datenaudit ohne
Fehler und unverändert 980 Hinweisen. Geänderte Tests formatiert und gelintet;
ein erster Formatcheck erforderte Zeilenumbrüche. Zwölf verschiedene Browserfälle
für Desktop/Mobil inklusive vier Axe-Läufen bestanden. Erster Lauf 10/12: Die zwei
Suchtests verlangten fälschlich einen ausschließlichen Merkmalskontext für eine
auch in der Beschreibung enthaltene Phrase. Nach Wechsel auf eine nur in den
Merkmalen vorkommende Ladephrase bestanden genau diese zwei Wiederholungen;
keine Anwendungskorrektur nötig. Beide gerenderten Modellseiten und 40 Felder,
12 Merkmalsaussagen, Firmenfokus, strukturierte Eigenschaften und Exporte geprüft.
Vorherige 838 Seitenprüfungen bleiben historische Batch-99-Ergebnisse; ihre
unveränderten Belegdatensätze und 2074 anderen Katalogzeilen wurden nachgewiesen.
Der aktuelle Vergleichsexport wurde vollständig gegen alle 988 Produktbelege,
4310 Merkmalsaussagen, 1914 Quellenreferenzen und 840 Feldprüfungen mit
14127 Feldern abgeglichen. Erneuter Import: null Ergänzungen.
Eigene Browser-, Server- und Testprozesse beendet; kein Deployment.

Aktueller Katalog weiterhin 2076 Modelle/Konfigurationen. Die ursprünglichen
518 Quellen-Katalogziele haben alle Merkmalsbelege: 391 mit ausgewählten
Datenfeldprüfungen, 127 ohne. Drei Modellidentitäten, neun Listingidentitäten,
862 Buy-Detailinhalte und vollständige Portfolio-/Leistungsprüfung bleiben offen.
Kein Nachweis exklusiver USPs oder einer Markt-/Suchführerschaft.
Datencommit: `eceb6b8b42f866ae54842b3ef0267fdf14585857`. Dauerhafter Nachweis:
`reports/competitor-batch-100-evidence.json`.


## Ergänzung vom 2. November 2026 – Makeblock Plattformen und Bausatzgrenzen (Batch 101)

Alle sieben vorhandenen Makeblock-Katalogeinträge geprüft: mBot, mBot Neo,
mBot Ultimate 2.0, Codey Rocky, mTiny, mBot Ranger und mBot2 Rover Robotics Kit.
119 ausgewählte Felder: 22 dokumentiert, 97 unbekannt. Sechs neue Feldprüfungen;
Neo hatte zuvor zwei Energiefelder und wurde erweitert, also 117 zusätzliche Felder
netto. Keine neue Roboterkarte, CSV-Spalte, Kategorie- oder Anwendungscodeänderung.
Ein Firmenfokus ergänzt, insgesamt 95. Alle 839 anderen früheren Feldprüfungen,
94 Firmenfokusse, 2069 anderen Katalogzeilen, Profile/Aliasse und 1961
Quellenidentitäten unverändert. Frühere Produktbelege und die ersetzte Neo-
Zweifeldprüfung im Manifest erhalten. Vorhandene Tags/Bilder bleiben bestehen,
ohne dass dadurch jeder Tag oder die Bildidentität neu verifiziert wäre.

Originaler mBot und die historische mBot-v1.1-Spalte mit mCore bleiben vom
CyberPi-basierten mBot2/Neo getrennt. Der Bildungskatalog Frühjahr 2022 nennt
Blockprogrammierung/Arduino C für mBot, Ranger und Ultimate; Wi-Fi/Python und
Basis-mBot2-Laufzeit werden nicht pauschal übertragen. Batterieausschluss beim
historischen mBot-v1.1-Paket ist keine Aussage über jedes heutige Paket. Motor-RPM,
Encoderauflösung, sechsachsiger Bewegungssensor und Anzahl möglicher Bauformen
sind keine Fahrgeschwindigkeit oder mechanischen Roboterfreiheitsgrade.

Beim Basis-mBot2 nennen Broschüre und gespeicherte Produktseite etwa eine Stunde
Laden für bis zu fünf Stunden Nutzung; Aktivität/Belastung sowie Anfangs-/Endladezustand
sind nicht angegeben. Die am 1. November gespeicherte Seite nennt bis 20 cm/s und
90 × 180 × 130 mm mit Achsenbeschriftung h*l*L. Numerische Reihenfolge bleibt
bestehen, die uneindeutigen horizontalen Achsennamen werden nicht als gesichertes
Länge/Breite-Schema umgeschrieben. Die Angaben gelten nicht automatisch für den
umgebauten Rover. Klassenpakete mit sechs Basisrobotern, Aufbewahrung und Zubehör
sind keine sechs zusätzlichen Hardwaremodelle. Auffällige vertauschte Ultraschall- /
Quad-RGB-Funktionsbeschriftungen in der Broschüre wurden nicht übernommen.

Ultimate 2.0: 10-in-1-Kit, historische SKU 90040; Makeblock-App-Steuerung, mBlock
und Arduino C im Herstellerhandbuch. Arduino-/Raspberry-Pi-Kompatibilität beweist
weder beiliegende Boards noch Mega2560 als Controller. Ein bestimmter Standardgreifer
oder feste Greiflast ist aus diesen Textquellen nicht belegt. Ranger: 3-in-1-Kit,
SKU 90092; katalogseitig Block-/Arduino-C-Unterstützung in mBlock 5 belegt,
exakte Controller-/Sensorlieferung und einzelne Antriebsformen offen.

Codey Rocky: Codey mit mehr als zehn programmierbaren Elektronikmodulen plus
mobile Rocky-Basis; Linienfolge-/Hindernisübungen und Block-/Python-Programmierung
laut Handbuch. Altersangabe sechs Jahre oder älter mit Erwachsenenbegleitung.
5 V/1 A ist die Ladeadapteranforderung, keine Ladedauer. Der sechsachsige Gyrosensor
ist keine sechsachsige Robotermechanik; eine zweistündige Laufzeit ist hier unbelegt.

mTiny: Tap-Pen, Karten, Themenpläne und bildschirmfreie Programmieraktivitäten im
historischen Discover-Kontext, SKU P1030157. Karten-/Marker-/Map-Erweiterungen sind
separat gelistet. Keine Verallgemeinerung identischer Inhalte für jedes mTiny-Paket;
Frühbildung ist keine exakte Altersfreigabe. Laufzeit 150 Minuten und alter ungefährer
Preis wurden mangels Beleg entfernt. Pädagogische Entwicklungsversprechen sind
Herstellerpositionierung, keine unabhängig nachgewiesenen Lern-/Gesundheitswirkungen.

Kompletter Rover und Rover Robotics Add-on Pack sind ausdrücklich verschiedene
Angebotstypen. Greif-/Ausdrucksprojekte und Outdoor-Erkundungspositionierung sind
belegt; genaue Mechanik, Traglast, Kamera-Inklusion, Laufzeit, Geschwindigkeit,
Neigung und IP-Klasse nicht. Basiswerte werden nicht übertragen. Smart World, AI-
Kamera, Neuron, Aufbewahrungsteile oder Software sind nicht automatisch
im Grundroboter enthalten oder zusätzliche vollständige Robotermodelle.

Fünf neue HTTP-Antworten: vier erfolgreiche Hersteller-PDFs, eine erratene
Docs-Stammadresse mit HTTP 404. PDF-Autorschaft und Hosting sind getrennt benannt:
mBot2-Broschüre auf Herstellerhost, Ultimate-/Codey-Handbücher auf Amazon und
Herstellerkatalog auf Manuals.plus. Vier PDFs mit insgesamt 39 Seiten als Text extrahiert; die relevanten Modell-,
Vergleichs- und Plattformabschnitte textlich geprüft. Keine vollständige zeilenweise
Prüfung jeder Katalogseite und keine visuelle Bild-/Zeichnungs-/Videoprüfung.
Der Herstellerkatalog ist Frühjahr 2022 und kein aktueller Lieferfähigkeitsnachweis.
Zusätzlich wurde die erfolgreiche Makeblock-mBot2-Textaufnahme vom 1. November
lokal erneut geprüft; keine neue Anfrage an zuvor gesperrte Haupt-/Supporthosts.
Der Archiv-SHA-256 bezieht sich auf die gespeicherte Recherche-JSON, da der
ursprüngliche HTTP-Rohkörper nicht vorliegt. Alle gespeicherten Dateien per Hash
geprüft; kein behaupteter frischer HTTP-Erfolg für die archivierte Seite.

Prüfungen: 799 Unit-Tests in 64 Dateien, Build mit 3126 Seiten, Audit ohne Fehler
und 985 Hinweisen. Fünf zusätzliche Hinweise betreffen entfernte unbelegte
Erscheinungsjahre; alle anderen Hinweise unverändert. Testdatei formatiert und
gelintet. Vierzehn verschiedene Desktop-/Mobilfälle inklusive vier Axe-Läufen
bestanden. Erster Browserlauf 12/14: Zwei neue Assertions verlangten fälschlich ein
nicht vorhandenes time-Element im Merkmalsabschnitt. Das tatsächliche Prüfdatum
wird dort als Text gerendert; die zwei korrigierten Fälle bestanden gezielt erneut.
Keine Anwendungskorrektur nötig. Der erste Daten-Apply-Guard fing die vorhandene
Neo-Zweifeldprüfung ab; nur eigene partielle CSV-Änderungen wurden gegen die
vorbereiteten Entscheidungen geprüft, zurückgesetzt und vollständig neu angewandt.
Der dazwischen gestartete Refresh hatte die vorübergehend veraltete Neo-Ladeprüfung
korrekt abgewiesen; abschließender Import/Refresh und alle Prüfungen bestanden.

Alle sieben gerenderten Seiten/119 Felder, 29 Merkmalsaussagen, Firmenfokus,
strukturierte Eigenschaften sowie Modell-, Firmen- und Rechercheexporte geprüft.
Vorherige globale Seitenprüfungen bleiben historische Ergebnisse; 839 andere
Belegdatensätze sind unverändert. Aktueller Vergleichsexport vollständig gegen
988 Produktbelege, 4318 Aussagen, 1915 Quellenreferenzen und 846 Feldprüfungen mit
14244 Feldern abgeglichen. Erneuter Import: null Ergänzungen. Eigene Test-/Browser-
und Serverprozesse beendet, kein Deployment.

Katalog weiterhin 2076 Modelle/Konfigurationen; insgesamt 95 Firmenfokusse. Die
518 ursprünglichen Quellen-Katalogziele haben alle Merkmalsbelege: 397 mit
Datenfeldprüfungen, 121 ohne. Drei Modellidentitäten, neun Listingidentitäten,
862 Buy-Detailinhalte sowie vollständige aktuelle/historische Portfolio-,
Lieferfähigkeits-, App- und Leistungsprüfung bleiben offen. Keine exklusiven
USPs oder Markt-/Suchführerschaft unabhängig nachgewiesen.
Datencommit: `d3c2a110d91466afb522f92077ec0ca21b1c7b9d`. Dauerhafter Nachweis:
`reports/competitor-batch-101-evidence.json`.


## Ergänzung vom 2. November 2026 – FarmBot Generationen und Entwurfsstatus (Batch 102)

20 ausgewählte FarmBot-Identitäten geprüft: zwei vorhandene Genesis-v1.8-Einträge
und 18 ergänzte Versionen/Konfigurationen. Genesis v1.2/v1.3, Genesis/XL v1.4–v1.9,
Genesis MAX v1.5, Express/XL/MAX v1.0 und Express/XL v1.1 behalten ihre Generation.
360 Felder: 80 dokumentiert, 274 unbekannt und sechs Roadmap-Werte. 20 neue
Feldprüfungen, ein Firmenfokus; keine neuen CSV-Spalten, Kategorieübertragungen
oder Änderungen am Anwendungscode. Alle 2074 anderen vorherigen CSV-Zeilen,
846 früheren Feldprüfungen, 95 Firmenfokusse und 1961 Quellenidentitäten unverändert.
Neue Entdeckungen verweisen auf tatsächliche Herstellerquellen, nicht auf ein
Verzeichnis, das diese zusätzlichen Versionen nicht nannte.

Genesis v1.9/XL v1.9 werden als Vorbestellungen geführt; sechs Angaben zu Größe,
Werkzeug und Montageumgebung tragen Roadmap-Status. Die aktuelle Genesis-Seite
mischt v1.8-Abschnitte mit ausdrücklich als v1.9 beschrifteter Spezifikationstabelle;
Tabellenzellen und Spaltenüberschriften einschließlich colspan wurden geprüft.
Permanent montierte Bewässerung aus v1.9 wird nicht auf die abnehmbare v1.8-Düse
übertragen. Temperatur-Sensorhardware ist kein Nachweis bereits verfügbarer
Temperatursoftware; dort steht weiterhin coming soon.

Genesis: nominell 1,5×3 m / XL 3×6 m; Express 1,2×3 m / XL 2,4×6 m.
Diese Flächen sind keine Stundenleistung, effektive Netto-Servicefläche oder
vollständige Außenabmessungen. Für frühe v1.2/v1.3 bleibt die Größe ohne eindeutige
exakte Maßzuordnung leer; variable nominelle Flächen und aufwendige Erweiterungen
bis ungefähr 50 m² werden nur qualifiziert beschrieben. Versandgewichte 19,5/24 kg
bei Genesis und 17/18 kg bei Express sind keine montierten Robotermassen.
IP67-Angaben einzelner Kameras/Netzteile sind kein Schutzgrad des Gesamtsystems.
Netzteil-, Montage- und Motordaten werden nicht als Akku-Laufzeit oder vier
mechanische Freiheitsgrade übernommen. XYZ-Positionierachsen nur dort eingetragen,
wo die jeweilige Generation textlich belegt ist; Werkzeugspindeln separat.

Bei v1.8 nennt die Einführung 0,5 m Pflanzenhöhe und die gleichnamige Übersicht
1 m. Der Widerspruch bleibt in Beschreibung/Merkmalen stehen; daraus wird kein
erfundener Höhenwert abgeleitet. Der alte XL-Preis 7995 USD und Erscheinungsjahr
2025 wurden mangels passendem Beleg zurückgenommen. Dokumentations-Defaultdaten,
Verkaufszeiträume, Fertigstellung und erste Versandmeldungen bleiben getrennt;
alle exakten Releasejahr-Felder dieser Auswahl sind leer. Frühere Belege der zwei
Bestandseinträge bleiben im Manifest erhalten. Bestehende Tags/Bilder werden
dadurch nicht insgesamt neu zertifiziert.

Generationsmerkmale: v1.2 Arduino MEGA/RAMPS; v1.3 Farmduino; v1.4 erste XL;
v1.5 TMC2130/RTC/Temperaturhardware; v1.6 Rotationswerkzeug und H-Bridge mit
unterschiedlichen Pi-Rechnern je Fertigungslauf; v1.7 überarbeitete Montage und
passiver Weeder entfernt; v1.8 Einzelkarton, leichtere Teile und Pumpenversatz.
Express bewegt sich auf hölzernen Beeträndern statt Genesis-Aluschienen.
Express v1.1: fester 3-in-1-Kopf und zusammengehörige Pi-Zero-2-W/Farmduino-
Express-v1.1-Revisionen; einzelne Boards sind nicht unabhängig rückwärtskompatibel.

Genesis MAX v1.5 (3×18 m) ist in der alten Einführung on hold, in der späteren
Historie ausdrücklich cancelled. Express MAX v1.0 (2,4×18 m) ebenfalls abgesagt.
Beide bleiben benannte historische Entwürfe ohne Liefernachweis und werden nicht
als aktuell erhältliche Roboter ausgegeben. Frühere Genesis v0.0–v1.1 bleiben
offene Recherchehinweise; fehlende Einträge in ausgewählten Fertigungstabellen
beweisen weder, dass jede Version nur Prototyp war, noch dass keine ausgeliefert
wurde. Kein Anspruch auf vollständige historische oder aktuelle Herstellerpalette.

26 HTTP-Antworten gespeichert: 25 erfolgreich, eine HTTP 429 beim Hauptshop.
Danach keine weiteren Anfragen an diesen Host. Separate offizielle Genesis-/
Express-Dokumentationshosts waren erreichbar. Alle Rohkörper-Hashes geprüft;
HTML-Text und 19 Tabellen einschließlich Versionsgrenzen ausgewertet. Keine PDF-,
Bild-, CAD- oder Videoinspektion. Keine Formulare oder Warenkörbe benutzt.

802 Unit-Tests/64 Dateien, Build 3144 Seiten, Audit null Fehler/1004 Hinweise.
19 zusätzliche Hinweise betreffen 18 neue unbekannte Releasejahre und die
zurückgenommene alte XL-Jahreszahl; alle anderen Hinweise unverändert. Lint,
Format, Refresh und Wiederimport ohne neue Ergänzungen bestanden. 18 verschiedene
Desktop-/Mobilfälle inklusive vier Axe-Prüfungen bestanden: erster Lauf 15/18,
zwei Navigationen mit Chromium ERR_INSUFFICIENT_RESOURCES und ein Quellen-Ladefehler
im Desktopvergleich. Die drei betroffenen Fälle mit einem Worker und unveränderten
Assertions erneut bestanden. Ein Skriptabruf meldete auch dann Ressourcenmangel;
die separate Vergleichsinteraktion lud Quellen und bestand. Ursache des ersten
Vergleichsfehlers nicht erfasst; keine globale Fehlerfreiheit behauptet.

20 gerenderte Seiten/360 Felder/82 Merkmalsaussagen, 46 Quellenmarkierungen,
274 ausgelassene Leerfelder und 36 strukturierte Eigenschaften geprüft.
FarmBot steht über Listing-/Beschreibungsreferenzen in der kombinierten Queue:
zwei Ziele/36 Felder, aber keine Zeilen in Modell- oder Firmenprodukt-Exporten.
Eine kopierte Prüfannahme verlangte dort zunächst fälschlich Einträge; korrigierte
Prüfung bestätigt ausdrücklich diese Grenze und den Firmenexport. Alle übrigen
846 Feldprüfungen blieben unverändert; keine erneute globale Seitenprüfung
behauptet. Aktueller Vergleich vollständig gegen 1006 Produktbelege, 4394 Aussagen,
1970 Quellenverweise und 866 Feldprüfungen/14604 Felder abgeglichen.
173 eigene Testprozesse nachverfolgt, anschließend keine eigenen Browser-/Server-
oder Hilfsprozesse aktiv, Port 4321 frei. Andere Aufgabenressourcen erhalten.

Gesamt: 2094 Katalogeinträge, 840 Ergänzungen und 166 vorhandene Modelle mit
Merkmalsanreicherung; 96 Firmenfokusse. Von 518 ursprünglichen Quellenzielen haben
399 ausgewählte Datenfeldprüfungen, 119 stehen aus. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Exklusive USPs,
unabhängige Agrar-/Wirtschaftlichkeitsresultate und Markt-/Suchführerschaft unbewiesen.
Datencommit `ac2cac580c87f56b284e50686d78cc0f35ef4dd6` auf dem Arbeitsbranch gepusht, Main unverändert, kein
Deployment. Dauerhafter Nachweis: `reports/competitor-batch-102-evidence.json`.


## Ergänzung vom 2. November 2026 – Magazino Behälter- und Systemgrenzen (Batch 103)

SOTO und TORU, beide vorhandene Modelle, mit 50 ausgewählten Feldern geprüft:
17 dokumentiert, 30 unbekannt und drei Quellenkonflikte. Zwei neue Feldprüfungen,
ein Firmenfokus; keine neue Katalogidentität, CSV-Spalte, Kategorieübertragung oder
Anwendungscodeänderung. Alle 2092 anderen CSV-Zeilen, 866 vorherigen Feldprüfungen,
96 Firmenfokusse sowie 1961 Quellenidentitäten unverändert. Frühere Produktbelege
beider Einträge im Manifest erhalten; bestehende Tags/Bilder dadurch nicht neu
zertifiziert. Der aktuelle Firmenauftritt nennt Magazino als Jungheinrich-Unternehmen;
das führt nicht automatisch getrennte Katalogmarken zusammen.

SOTO: 20 kg je gehandhabtem KLT getrennt von Gesamttransportlast. Magazino nennt
250 kg insgesamt, Jungheinrich UK 240 kg. Das deutsche technische Datenblatt mit
Kennung 7777.DE.12.2023.r nennt 200–249 kg nach Rucksack, 240 kg Standard sowie
240 kg in der Ladungsträgerzeile. Der Konflikt bleibt im separaten Transportlastfeld
sichtbar. 8–24 Behälter je Größe sind kein Nachweis 24×20 kg gleichzeitiger Last.
UK-Ladezeit 1,5 h versus Datenblatt 1,6 h ebenfalls widersprüchlich; Verhältnis
Fahrt/Laden 5:1 und unbekannte Anfangs-/Endladezustände bleiben ausdrücklich stehen.
Bis acht Stunden Laufzeit zwischen Ladungen ist Herstellerangabe, keine eigene
Messung oder garantierte Schichtverfügbarkeit.

Höchstgeschwindigkeit 1,5 m/s unter Gangbreitenbedingung: Magazino 2,5 m,
Datenblatt 2,510 m. Dritter sichtbarer Konflikt. 1650 mm Mindestgangbreite gehört
zu 0,3 m/s. Mindestwendekreis 3100 mm ist kein Radiuswert und wird nicht halbiert.
Datenblattmasse 686–735 kg nach Rucksack, 695 kg Standard; L×B×H
2230×1060×2160 mm mit zusätzlich 80 mm Scannerhöhe im Betrieb. IP20 und ebener
Industrieboden mit 5 mm überfahrbarer Unebenheit bleiben dem Dezember-2023-Blatt
zugeordnet. Keine unqualifizierte aktuelle Generation oder Outdoor-Eignung.
Greifen 0,4–1,7 m auf der Seite; Datenblatt mindestens 0,5 m frontal/0,4 m seitlich.
Diese Höhen sind weder Gabelhub, mechanischer Hubweg noch radialer Armreach.

TORU: bis 5,8 kg pro gegriffenem Karton/Spezialbehälter, Objektmaß
390×280×145 mm, bis 16 Objekte im Rucksack, Aktionshöhe 0,08–2,5 m laut
Produktseite. Weder Objektmaße als Roboterdimensionen noch 16×5,8 kg als belegte
Gesamttraglast übernommen. NEO-Anwendungsartikel vom 6. Februar 2025: geladener
KLT maximal 5 kg, Inhalt 380×240×140 mm, Greifhöhe bis 2,2 m. Engere
Anwendungsbedingungen bleiben vom allgemeinen TORU-Produktbereich getrennt.
NEO-Puffer, separater Cobot, Software, 350+ Picks/Stunde und Pay-per-pick gehören
zum Gesamtsystem und sind keine einzelne TORU-Leistung, Kaufpreis oder Garantie.
Bis 20 Stunden Betrieb pro Tag, 24/7-Positionierung und Fernbetreuung 24 Stunden an
sechs Wochentagen sind getrennte Zeitangaben und keine Akku-/Ladedauer.

Sechs HTTP-200-Antworten: fünf HTML-Seiten und ein dreiseitiges technisches PDF.
Alle Körper-Hashes geprüft. HTML sowie alle drei PDF-Seiten als Text extrahiert,
relevante Datenzeilen textlich geprüft. Keine visuelle PDF-, Bild-, Zeichnungs-
oder Videoprüfung. Kein Formular oder Warenkorb. Datenblattrevision Dezember 2023
ist keine Modellankündigung oder exaktes Erstverkaufsdatum. NEO-Marketing zu
Arbeit, Kosten und Sicherheit sowie behauptete Einzigartigkeit nicht unabhängig
verifiziert; keine vollständige aktuelle/historische Portfolio-Prüfung.

804 Unit-Tests in 64 Dateien, Build 3144 Seiten, Daten-Audit null Fehler und
unverändert 1004 Hinweise. Lint/Format und Import/Refresh bestanden; Wiederimport
null Ergänzungen. Zunächst falsch geschriebener Audit-Befehl data:audit hatte
keine Prüfung ausgeführt; korrekter audit:data danach bestanden. Zwölf verschiedene
Desktop-/Mobilfälle mit einem Worker inklusive vier Axe-Läufen bestanden.
Erster Lauf 10/12: Zwei neue Suchprüfungen verlangten bei einem Beschreibungs-
treffer fälschlich die nur bei reinen Merkmalstreffern vorgesehene Kennzeichnung.
Suchbegriff zu reinem Merkmalsbegriff geändert; zwei betroffene Fälle gezielt
erneut bestanden. Keine Anwendungskorrektur. Google-Fonts-Anfragen während der
Axe-Fälle durch CSP blockiert; alle vier Axe-Prüfungen dennoch bestanden.
Zwei gerenderte Seiten/50 Felder, elf Merkmalsaussagen, Firmenfokus, strukturierte
Eigenschaften und Modell-/Firmen-/Rechercheexporte geprüft. Keine erneute globale
Seitenprüfung behauptet; alte 866 Feldprüfungen unverändert. Gesamter aktueller
Vergleichsexport: 1006 Produktbelege, 4399 Aussagen, 1973 Quellenverweise sowie
868 Feldprüfungen mit 14654 Feldern exakt abgeglichen. Eigene Browser-/Server-
und Hilfsprozesse nach Abschluss freigegeben, Port 4321 frei.

Gesamt 2094 Katalogeinträge, 840 Ergänzungen, 166 vorhandene Modelle mit
Merkmalsanreicherung und 97 Firmenfokusse. Von 518 ursprünglichen Quellenzielen
haben 401 ausgewählte Feldprüfungen, 117 stehen aus. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Keine behauptete
exklusive USP- oder Markt-/Suchführerschaft. Datencommit `f3be5f912b6bc2941b7c937d17838ce2050426cb` gepusht;
Main unverändert, kein Deployment. Nachweis:
`reports/competitor-batch-103-evidence.json`.


## Ergänzung vom 2. November 2026 – Neuromeka Armvarianten und Kataloggrenzen (Batch 104)

23 ausgewählte Roboteridentitäten mit 414 Feldern geprüft: 152 dokumentiert,
259 unbekannt, zwei Quellenabweichungen und ein vorläufiger Roadmap-Wert.
21 neue Identitäten, zwei bestehende Indy-Einträge überarbeitet; 23 neue Feldprüfungen
und ein Firmenfokus. Alle 2092 anderen vorherigen CSV-Zeilen, 868 Feldprüfungen,
97 Firmenfokusse und 1961 Quellenidentitäten unverändert. Neue Entdeckungen nutzen
tatsächliche Primärquellen. Keine neuen CSV-Spalten, Kategorieübertragungen oder
Änderungen am Anwendungscode. Frühere Belege beider Bestandseinträge erhalten;
deren Tags/Bilder dadurch nicht insgesamt neu zertifiziert.

Bestand Indy7/Indy12: explizite historische Veröffentlichung 2017/2019 und 7/12 kg
Familiennennung. Detailtabellen des gelesenen Katalogs heißen V3 beziehungsweise
Pro, ihre Werte werden nicht auf die ursprünglichen Arme übertragen. Indy7s
Produktionsstart Juli 2018 ist eine andere Zeitangabe. Ergänzt: Indy7/12 V3,
Indy7/12 Pro mit IndyEye, aktuelles Indy7-K-Label und ausdrücklich siebenachsiger
Forschungsarm Indy-RP2. Indy-K-Familienstart Oktober 2024 ist kein belegtes
exaktes Indy7-K-Veröffentlichungsdatum. Historische Indy3/5/10 (2017) und Indy-RP
(2016) sind eigene Namensbelege; keine Traglast allein aus Modellnummern abgeleitet
und RP-Jahr nicht auf RP2 übertragen. Aktueller Bestand/Lieferung der historischen
Modelle bleibt offen.

V3/Pro: sechs Drehachsen, 7/12 kg, maximal 1210/1700 mm Reichweite gegenüber
separat beschriftetem Workspace 800/1200 mm, 34/57 kg, 0,1 mm Wiederholgenauigkeit,
1 m/s maximale Werkzeuggeschwindigkeit und IP54. Werkzeug-/Kameragewichtsbasis
nicht pauschal angenommen. IndyEye gehört laut Katalog zur Pro-Serie; eine
Kamerakonfiguration beweist keinen beiliegenden Greifer. Einzelachsige °/s sind
keine lineare Geschwindigkeit oder Zykluszeitgarantie.

OPTi3/5: sechs Achsen, 3/5 kg, maximale Reichweite 940/1350 mm gegenüber
Workspace 630/900 mm, 0,1 mm, 1 m/s, IP54. OPTi3-Masse ausdrücklich 11 kg(TBD)
als vorläufiges Feld, nicht finale ausgelieferte Masse; benannter Start Oktober
2025. OPTi5-Masse 34 kg. Brenner, Zelle, Einhausung und Schweißresultate nicht
automatisch Bestandteil oder unabhängig nachgewiesen.

NURI C: 7c/12c/18c/20c, sechs Achsen, 7/12/18/20 kg; Reichweite
1220/1710/1340/2160 mm, Masse einschließlich eingebautem Schaltschrank
25/41/38/71 kg, IP67. NURI S: 3s/5s, sechs Achsen, 3/5 kg,
Reichweite 1000/1230 mm, 14/17 kg einschließlich eingebautem Schaltschrank,
IP54. Modellbezogene Werkzeuggeschwindigkeiten und Workspace-Werte getrennt.
NURI30: 30 kg, sechs Achsen, ungefähr 93 kg einschließlich Schaltschrank,
IP54, 2,5 m/s. Katalog nennt maximal 1990 mm Reichweite und 1800 mm Workspace;
aktuelle Seite nennt an anderer Stelle 1800 mm reach. Abweichung bleibt sichtbar.
NURI20c-Tabelle druckt 0,5 mm Wiederholgenauigkeit, aktuelle C-Familienwerbung
allgemein weniger als ±0,03 mm. Geltungsbereich ungeklärt; nicht heimlich in
0,05 mm korrigiert oder Familienwerbung zum neuen exakten Modellwert gemacht.

D3/D6: vierachsige Delta-Roboter, 3/6 kg Last, 60/80 kg Masse, 0,1 mm
Wiederholgenauigkeit. Katalogkapitel KOREA ONLY, keine universelle aktuelle
Verfügbarkeitsbehauptung. Reichweitenabschnitt wiederholt XY Axis für
800/300 beziehungsweise 1300/500 mm. Zweite Zeile ohne Zeichnungsprüfung nicht
als Z umbenannt; Werte sind keine Außenmaße oder serielle Armreichweite.
Beispielzyklen 0,55 s bei 3 kg beziehungsweise 0,45 s bei 6 kg für Pfad
25×305×25 werden nicht in pauschale Picks/Stunde oder m/s umgerechnet.

13 erfolgreiche Dokumentantworten plus fünf Rasterdatei-Downloads, alle HTTP200
und gespeicherten Körper per SHA-256 geprüft. Separater HTTPS-Dokumentationsversuch
scheiterte beim TLS-Handshake mit Connection reset by peer, ohne HTTP-Antwort
oder Wiederholung. Bilddateien besitzen drei unterschiedliche Körper; kein Bild
wurde erfolgreich visuell geöffnet. Drei erste parallele Aufrufe lieferten keine
Bildausgabe; expliziter Folgeaufruf wurde wegen fehlender Bildinput-Unterstützung
abgewiesen. Keine visuelle Bild-, PDF-, CAD-, Video- oder Zertifikatsinspektion.
PDF mit 36 Seiten zu Text extrahiert, relevante Titel-/Historien-/Armtabellen und
15 namensbezogene Textausschnitte samt Wortkoordinaten geprüft. Nicht jede andere
Katalogseite vollständig zeilenweise ausgewertet. Englisch-Downloadlabel
V20260903 passt nicht zu verlinktem Dateinamen und PDF-Cover V20251205;
PDF-Metadaten ebenfalls Dezember 2025. Dieses Quelldatum bleibt erhalten.

807 Unit-Tests/64 Dateien, Build 3165 Seiten, Audit null Fehler/1018 Hinweise.
16 neue unbekannte Releasejahre und zwei aufgehobene alte Hinweise ergeben netto
14 zusätzliche Hinweise; alle anderen unverändert. Erster Refresh erkannte eine
fehlende datierte Quelle für die Firmenhomepage; bereits geholte Homepagequelle
ergänzt, alle vorbereiteten Roboterprodukte dabei per Hash unverändert. Erste
Unit-Runde 806/807: bestehender globaler Guard erkannte eine generische Fehlwertnotiz
an dokumentiertem RP2-Feld. Alle positiven Felder erneut geprüft, 78 übernommene
Fehlwertnotizen korrigiert; Zahlen/Status unverändert. Vollständige Unit-Suite und
Build danach erneut bestanden. Lint/Format, endgültiger Refresh und Wiederimport
ohne Ergänzungen bestanden.

16 verschiedene Desktop-/Mobilfälle mit einem Worker inklusive vier Axe-Läufen
bestanden. 23 gerenderte Seiten/414 Felder/82 Merkmalsaussagen, Firmenfokus,
strukturierte Eigenschaften und aktuelle Exporte geprüft. Zwei kombinierte
Rechercheziele/36 Felder; keine Neuromeka-Zeilen im separaten Namensmodell- oder
Firmenprodukt-Export. Frühere 868 Feldprüfungen unverändert statt erneuter globaler
Seitenprüfung. Vergleich vollständig gegen 1027 Produktbelege, 4475 Aussagen,
2017 Quellenverweise und 891 Prüfungen/15068 Felder abgeglichen. Eigene Browser-,
Server- und Hilfsprozesse freigegeben, Port 4321 frei; kein Deployment.

Gesamt 2115 Katalogeinträge, 861 Ergänzungen und 166 bestehende Modelle mit
Merkmalsanreicherung, 98 Firmenfokusse. Von 518 ursprünglichen Quellenzielen haben
403 ausgewählte Feldprüfungen, 115 stehen aus. Drei Modellidentitäten, neun
Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Neuromeka-Leads ZEN,
NAMY, EIR, RAXIS, Moby-RP(V3.3), Moby-Agri sowie K-/NURI30h-Namensbeziehungen
bedürfen weiterer Prüfung. Keine vollständige aktuelle/historische Herstellerpalette,
unabhängige Sicherheits-/Wirtschaftlichkeits-/Leistungs-, exklusive USP- oder
Markt-/Suchführerschaft nachgewiesen. Datencommit `a908d4ebe5654982f1d218c73dd496118c499148` gepusht,
Main unverändert. Nachweis: `reports/competitor-batch-104-evidence.json`.


## Ergänzung vom 2. November 2026 – Neuromeka mobile und humanoide Plattformen (Batch 105)

Sieben neue benannte Plattformen/Konfigurationen, 179 ausgewählte Felder:
41 dokumentiert und 138 nicht dokumentiert. 43 Merkmalsaussagen mit 18 Quellenverweisen.
Firmenfokus erweitert, alle bisherigen Aussagen/Quellen erhalten. Alle 2115 vorherigen
CSV-Zeilen, 891 bisherigen Feldprüfungen, 1027 Produktbelege, 97 anderen Firmenfokusse
und 1961 Wettbewerber-Quellenidentitäten unverändert. Keine neue Spalte oder Änderung
an Anwendungslogik. Konfigurationen zählen nicht zwingend verschiedene Hardwaregenerationen.

ZEN: klappbare Höhe 1,46–1,86 m; 21 Körper-DOF ausdrücklich ohne Hände
(19 Gelenke plus zwei Antriebsräder). Pro Hand vier Finger und 13 aktive DOF;
keine stillschweigende Summierung. 5 kg horizontale Last je Arm einschließlich Hand,
96,5 cm maximale Arm-/Handlänge nicht pauschal als konventionelle Reichweite eingesetzt.
0,5 mm Arm-Wiederholpositionierung und 1,5 cm Punkt-zu-Punkt-Chassiswiederholung
sind unterschiedliche Metriken; letzteres kein Dockingversprechen. Herstellerwerte:
0,6 m/s, 2 cm Hindernis, 7° Steigung, 40 Ah, acht Stunden Betrieb, sechs Stunden
Laden; Spannung und vollständige Testbedingungen fehlen. Fünf RGB-Kameras,
2280 duale Hand-ITPU, 6840 Kanäle sind Architekturangaben, kein unabhängiger Sensortest.

NAMI ist auf der aktuellen Plattformseite explizit benannt. Ältere Historie nennt
NAMY; Bild-Alttext NAMY.png beweist weder Gleichheit noch unterschiedliche Hardware.
Aktuellen Namen einmal gezählt, historischen NAMY-Namenslead erhalten. RAXIS ist in
der Historie ausdrücklich mit September-2025-Vorstellung benannt, technische Daten
und heutige Lieferung offen. Unbenannte Service-/Fabrik-/Chirurgie-Spalten des Katalogs
werden keinem NAMI/EIR/RAXIS nach Bildreihenfolge, Einsatzzweck oder Achsenzahl zugeordnet.

EIR: ausdrücklich 18 unabhängig angetriebene Oberkörperachsen (sieben pro Arm,
vier Hals/Taille), kein belegter Gesamtwert einschließlich Basis/Händen. Mobiler
Wagen belegt weder zweibeiniges Gehen noch autonome AMR-Navigation. VisionX/MimicX
sind Herstellerpositionierung; 100-µm-Regelpräzision ist keine belegte Wiederholgenauigkeit.
Neuromekas gehosteter Artikel trägt Metadatum 29. Dezember 2025 und nennt Pinpointnews
als Quelle. CES-2026-Debüt und stufenweise Produktion ab März 2026 waren damalige
Pläne; tatsächliche Produktion, Verkauf, Lieferung und finale Daten daraus nicht
bewiesen. September-2025-Vorstellung ist eine separate Historiennennung, kein
Erstverkaufsnachweis. Keine chirurgische Zulassung aus unbenannter Tabelle abgeleitet.

Moby-RP V3.3: 180 kg Basis beziehungsweise 210 kg mit Indy; 40 kg Plattformlast,
660×960×600 mm ohne explizite Achsenreihenfolge, 2D-LiDAR/SLAM, Quad Drive, maximal
1 m/s. Vier zweiachsige Lenkradmodule sind keine Armachsen. 75 kg je Antriebsrad
nicht zu 300 kg Plattformlast addiert; Indy7-Last 7 kg getrennt. Akku 48 VDC/4624 Wh,
2500-W-Lader ist keine Ladezeit. Optionaler Sensor-/Sicherheitsblock bleibt paketabhängig.

Moby-Agri 600/650 Type: 1400×805×491 mm/254 kg beziehungsweise
1400×855×491 mm/255 kg. Zusätzliche unklare Dimension-Zeile 1400×1900×450 mm bleibt
als Zuordnungsunsicherheit sichtbar. Keine zusätzliche generische Dublette.
Gemeinsame Tabelle: Differenzialantrieb Boden/Schiene, 2D-LiDAR/SLAM, maximal
1 m/s Boden oder 0,4 m/s Schiene, 48 VDC/9250 Wh, maximal zehn Stunden Fahrzeit
mit ungenannten Last-/Modusbedingungen. 150 kg je Lenkrolle ist keine Plattformlast.
Kameramodul zwei DOF, Hubgrenzen 2000–4100 mm, ±5 mm und 200 mm/s sind keine
Körper-DOF, Außenhöhe, Transporthub-, Navigations-/Docking- oder Fahrgeschwindigkeitswerte.
10.000 m² Gewächshausfläche keine Stundenleistung oder bewiesene Ertragssteigerung.
Beide mobilen Katalogkapitel ausdrücklich KOREA ONLY, keine globale Verfügbarkeitszusage.

Drei neue HTTP200-HTML-Antworten plus drei gespeicherte Batch104-Antworten mit
ursprünglichen Zeitstempeln und SHA-256 geprüft, keine erneuten Abrufe der Archive.
PDF 36 Seiten zu Text extrahiert; Seiten 4/14/15 anhand Text und Koordinaten geprüft,
keine visuelle Bild-/PDF-/Zeichnungs-/Videoprüfung. Downloadlabel V20260903 gegenüber
tatsächlichem PDF-Cover V20251205 bleibt erhalten. Kein Bilddownload in diesem Batch.

807 Unit-Tests/64 Dateien, Build 3172 Seiten, Audit null Fehler/1025 Hinweise.
Sieben neue unbekannte Erstveröffentlichungsjahre erklären sämtliche zusätzlichen
Hinweise. Erste Unit-Runde 805/807 erkannte fehlendes Subkategorie-Tag und alte
Gesamtzahl-Erwartung. Liefer-Tag anhand Moby-Familientext ergänzt, Zähler auf
898 Modelle/15247 Felder aktualisiert; volle Suite und Build anschließend bestanden.
16 Desktop-/Mobilfälle einschließlich vier Axe-Läufe mit einem Worker bestanden.
Sieben Seiten/179 Felder/43 Aussagen, erweiterter Firmenfokus, strukturierte Daten
und Exportgrenzen geprüft. Die sieben Neuzugänge sind keine zusätzlichen Original-
Quellenziele. Vergleich vollständig für 1034 Produkte/4518 Aussagen/2035 Verweise
und 898 Prüfungen/15247 Felder kontrolliert. Lint/Format und Wiederimport ohne
Ergänzungen bestanden. Eigene Browser-/Server-/Hilfsprozesse beendet, Port 4321 frei.

Gesamt 2122 Einträge, 868 Ergänzungen und 166 bestehende Modelle mit Merkmalsanreicherung,
98 Firmenfokusse. Originale Zielmenge unverändert 403 geprüft/115 ausstehend von 518.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte weiter offen.
NAMY-Beziehung, unbenannte Matrix und weitere historische/revidierte Modelle offen;
keine vollständige Herstellerpalette, unabhängige Leistungs-/Sicherheitsbestätigung,
exklusive USP- oder Markt-/Suchführerschaft bewiesen. Datencommit `ac52c1051eabf9f763e9debf5058c2b0a3973ddc` gepusht;
Main unverändert, kein Deployment. Nachweis: `reports/competitor-batch-105-evidence.json`.


## Ergänzung vom 2. November 2026 – Originale Anki-Roboter und SDK-/Dienstgrenzen (Batch 106)

Vector und Cozmo als zwei bestehende ursprüngliche Anki-Identitäten überprüft:
33 ausgewählte Felder, sieben dokumentiert und 26 nicht dokumentiert. Keine neuen
Katalogmodelle. Zwei Produktbelege erweitert, alle vier früheren schmalen SDK-
Merkmalsbelege erhalten; zehn zusätzliche Aussagen, netto neun zusätzliche Verweise.
Ein Firmenfokus zum historischen SDK-/Roboterumfang, keine neu bewiesene heutige
DDL-Gesellschafts-/Eigentümer-/Dienst-/Produktionsidentität. Die vorhandene
Quellen-Firmengruppe Anki (Digital Dream Labs) bleibt unverändert.

Vector: historische SDK-Alpha-Dokumentation nennt direkten Entwicklerzugang vom
Rechner im selben Netzwerk bei getrennter Companion-App. Kamera, Touch/Nähe,
Gesichtserkennung/-enrollment und Ausdrucksanimationen sind APIs, keine unabhängigen
Genauigkeitsmessungen. Charger-Verhalten sucht visuelle Ladestationsmarkierung und
versucht bei Erfolg anzudocken, keine Erfolgsgarantie. Lift-Höhen 32–92 mm sind
Software-/Mechanismusgrenzen, keine Außenmaße, Nutzlast oder vollständigen DOF.

Cozmo: historischer SDK-Pfad verlangt Telefon-App mit WLAN-Verbindung zum Roboter
und USB-Verbindung vom Telefon zum Rechner sowie aktivierten SDK-Modus. Bluetooth
wird dafür nicht eingesetzt. Gesichtserkennung/-enrollment, Objekt-/Würfelaktionen,
Anzeige/Animation und separate linke/rechte Radansteuerung sind dokumentiert.
Vorgegebener Sprachausgabetext beweist kein autonomes Gespräch oder Sprachsteuerung.
Lift 32–92 mm, Armlänge 66 mm, Drehpunkthöhe 45 mm sind Geometrie, keine Gesamtgröße
oder Traglast. Die Rückwärtsfahrt zur Ladestation setzt diese direkt hinter dem
Roboter voraus und stoppt bei Kontakt oder Timeout; kein gleichwertiger Nachweis
der Vector-Markierungssuche. Beispielgeschwindigkeiten sind keine Fahrleistungswerte.

Frühere geschätzte Gewichte 0,2/0,3 kg, qualitative very-small-Größe,
45/30-Minuten-Akku-/Maximalzeiten, Alter 0–99/6–99, alter Preis beziehungsweise
Discontinued-Preistext und Erstveröffentlichungsjahre 2018/2016 sind in den gewählten
Herstellerquellen nicht explizit belegt und stehen deshalb nicht als dokumentierte
Datenfelder. Quellen-/Copyright-/SDK-Gerüstzeitstempel sind keine Produktstarts.
Vorhandene Bilder/Videos bleiben erhalten, ohne Identität oder sichtbaren Inhalt
neu zu zertifizieren. Vector2-Bilddateiname beweist keine spätere Modellkonfiguration.
Vector-Sprachsteuerungs-Tag entfernt, weil TTS allein diese Funktion nicht belegt;
Cozmo-Bluetooth-Tag durch dokumentierten WLAN-Pfad ersetzt. Kein neuer Vergleichs-
oder CSV-Feldtyp und keine Änderung an der Anwendung.

Zwölf offizielle Anki-GitHub-Rohdokumente erfolgreich mit HTTP200 abgerufen,
Text/RST/Python-Code und gespeicherte SHA-256 geprüft. Code nicht ausgeführt.
DDL-Hauptseite HTTP429, weitere Hostabrufe sofort gestoppt. Support scheiterte
separat an abgelaufenem TLS-Zertifikat, ohne HTTP-Antwort; keine Wiederholung oder
abgeschaltete Zertifikatsprüfung. Bei der Quellenrecherche kein separater Bild-/PDF-/Videoabruf und keine visuelle Inspektion.
Spätere Vector2.0-/Cozmo2.0-Hardware, aktuelle App-/Betriebssystemunterstützung,
Cloud/Abonnement, Verkauf, Auslieferung und vollständige Portfolioprüfung bleiben offen.

Alle 2120 anderen CSV-Zeilen, 898 vorigen Feldprüfungen, 98 bisherigen Firmenfokusse,
1032 anderen Produktbelege und 1961 Wettbewerber-Quellenidentitäten unverändert.
807 Unit-Tests/64 Dateien bestanden. Build 3172 Seiten, Audit null Fehler/1027 Hinweise;
zwei zusätzliche unbekannte Erstveröffentlichungsjahre erklären die gesamte Änderung.
Lint/Format, Refresh und Wiederimport ohne Ergänzungen bestanden. 16 Desktop-/Mobil-
Fälle mit einem Worker einschließlich vier Axe-Läufe mit festem YouTube-Testframe
bestanden. Erster Durchlauf mit echtem Player: 14 bestanden, zwei Vector-Axe-Fälle
fehlgeschlagen. YouTube-Link mit unzulässigem aria-level und Player-Div mit
aria-label ohne zulässige Rolle; beide Befunde ausschließlich im fremden Frame.
Nicht behoben und keine vollständige Live-Player-Barrierefreiheit behauptet.
Nach bestehender page-quality-Testpraxis festen Videoframe eingesetzt und eigene
iframe-src/title/loading-Attribute ausdrücklich geprüft. Erster Testframe führte
zu vier landmark-unique-Befunden wegen eines zusätzlich unbenannten main-Landmarks
im Frame. Fixture-main mit eigenem aria-label versehen; Produktions-HTML unverändert,
vollständige 16 Fälle danach erneut ausgeführt. Zwei gerenderte
Seiten/33 Felder/14 Aussagen, Firmenfokus, strukturierte Daten, zwei Modell-Exportzeilen
und zwei Queue-Ziele geprüft. Vergleich vollständig gegen 1034 Produktbelege,
4528 Aussagen, 2044 Quellenverweise und 900 Prüfungen/15280 Felder abgeglichen.
Eigene Browser-/Server-/Hilfsprozesse beendet, Port 4321 frei, kein Deployment.

Gesamt 2122 Modelle/Konfigurationen, 868 Ergänzungen und 166 bestehende Modelle mit
Merkmalsanreicherung; 99 Firmenfokusse. Ursprüngliche Quellenzielmenge: 405 geprüft
und 113 ausstehend von 518, 6755 ausgewählte Felder (3012 dokumentiert,
3568 nicht dokumentiert, 164 Quellenabweichungen, elf Roadmap). Firmenfokus für
95 von 591 Quellengruppen. Drei Modellidentitäten, neun Listingidentitäten und
862 Buy-Detailinhalte bleiben offen; keine Vollständigkeit oder Markt-/Suchführung
bewiesen. Datencommit `375ba3e4c5d334e06f7cf0726d6384a9cbb9b092` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-106-evidence.json`.


## Ergänzung vom 2. November 2026 – Asylon-Systeme und Betriebsgrenzen (Batch 107)

DroneDog und Guardian als zwei bestehende Systeme mit 53 ausgewählten Feldern geprüft:
acht dokumentiert und 45 nicht dokumentiert. Elf zusätzliche Merkmalsaussagen,
netto vier zusätzliche Produktquellenverweise. Alle sechs bisherigen schmalen
Merkmalsbelege erhalten. Ein neuer Firmenfokus; keine zusätzliche Modellidentität.

DroneDog ist die ausdrücklich benannte Integration aus Boston Dynamics Spot und
Asylon PupPack. Keine Übernahme der numerischen Masse, freien Nutzlast, Geschwindigkeit,
IP-Werte, DOF oder Batteriedauer des nackten Spot als Gesamtsystemwerte. Hersteller
beschreibt Treppen, unebene Flächen und enge Räume, ohne exakte Steigungs-/Umwelttests.
EO-/Thermalkameras, Livevideo, programmierte/angeforderte Patrouillen und menschliche
RSOC-Überwachung bleiben eigene Funktionsbelege. DogHouse ist ein separater Schutz-/
Ladehub mit Umweltregelung. Dessen wettergeschütztes Gehäuse ist keine Roboter-IP-Angabe,
rapid charging keine bestimmte Ladezeit und 24/7-Dienst keine 24-Stunden-Akkulaufzeit.
LTE/Mesh, AES-256 und redundante Uplinks sind Herstellerfunktionen, kein unabhängiger
Cybersicherheitsnachweis oder garantierte Konnektivität.

Guardian nennt 35 mph Flug-Höchstgeschwindigkeit, separat 25 mph Windwiderstand und
IP45 als Herstellerwetterrating. Flugzeit ausdrücklich up to 30+ minutes per mission;
ungeklärte Test-/Lastbedingungen und Formulierungsgrenze bleiben sichtbar, kein
Mindestflugzeitversprechen. DroneHome für Start/Landung und automatischen Akkuwechsel
unter drei Minuten ist Infrastruktur; Wechselzeit ist keine Ladezeit und wiederholte
Einsätze keine unbegrenzte Einzelflugdauer. LTE mit optionaler Starlink-Integration,
nicht pauschal serienmäßiges Starlink. Flugaufsicht durch menschliche RSOC-Bediener;
allgemeine Lizenz-/Compliancewerbung beweist keine universelle standortspezifische
Flugerlaubnis. Mehr als 45.000 Missionen und most widely used sind undatierte
Herstellerbehauptungen, keine unabhängig bewiesene Marktquote, pro-Fluggerät-
Stundenleistung oder Verfügbarkeitsgarantie. Unternehmensgründung 2015 kein Modellstart.

PupPack, DogHouse, DroneHome, DroneIQ, RSOC und das gebündelte RaaS-Angebot sind
Payload, Infrastruktur, Software oder Dienstleistung; keine weiteren ganzen Roboter.
Gelesene aktuelle Navigation/Produktseiten benennen DroneDog/Guardian, beweisen aber
keine vollständige historische/revidierte Palette oder jeden heutigen Lieferumfang.
Sechs aktuelle HTTP200-HTML-Quellen mit SHA-256 geprüft, Textinspektion, keine visuelle
Bild-/PDF-/Video-/Zertifikatsprüfung und keine Formular-/Demoanfrage.

Alle 2120 anderen CSV-Zeilen, 900 bisherigen Feldprüfungen, 99 bisherigen Firmenfokusse,
1032 anderen Produktbelege und 1961 Wettbewerber-Quellenidentitäten unverändert.
Keine neue CSV-/Vergleichsspalte oder Anwendungscodeänderung. 807 Unit-Tests/64 Dateien,
Build 3172 Seiten, Audit null Fehler/1027 unveränderte Hinweise. Lint/Format,
Refresh und Wiederimport ohne Ergänzungen bestanden. 16 verschiedene Desktop-/Mobil-
Fälle einschließlich vier Axe-Läufen mit einem Worker bestanden; beide Asylon-Seiten
ohne Videoiframe. Frühere externe YouTube-Befunde aus Batch106 bleiben ungelöst und
werden dadurch nicht nachträglich als behoben erklärt. Zwei Seiten/53 Felder/17 Aussagen,
Firmenfokus, strukturierte Eigenschaften, zwei Modell-Exportzeilen und Queue-Ziele
geprüft. Gesamter Vergleich 1034 Produktbelege, 4539 Aussagen, 2048 Quellenverweise
und 902 Prüfungen/15333 Felder. Eigene Browser-/Server-/Hilfsprozesse beendet,
Port 4321 frei; kein Deployment.

Gesamt 2122 Modelle/Konfigurationen, 868 Ergänzungen und 166 bestehende Modelle mit
Merkmalsanreicherung, 100 Firmenfokusse. Ursprüngliche Quellenzielmenge: 407 geprüft,
111 ausstehend von 518, 6808 Felder (3020 dokumentiert, 3613 nicht dokumentiert,
164 Quellenabweichungen, elf Roadmap); Firmenfokus für 96 von 591 Quellengruppen.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen.
Keine vollständige Quellen-/Herstellerpalette oder Markt-/Suchführerschaft nachgewiesen.
Datencommit `9446a4f7fb8f599c8192ca71402ccd55b1dd42c6` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-107-evidence.json`.


## Ergänzung vom 2. November 2026 – Awabot-Telepräsenz und Quellenkonflikt (Batch 108)

Awabot One und Pro als zwei bestehende Modelle mit 74 ausgewählten Feldern geprüft:
15 dokumentiert, 58 nicht dokumentiert und eine Quellenabweichung. Zehn zusätzliche
Merkmalsaussagen, netto zwei zusätzliche Produktquellenverweise; sechs bisherige
Merkmalsbelege und Entdeckungsprovenienz erhalten. Ein neuer Firmenfokus, keine neuen Modelle.

One: 17,7 kg, Höhe 1,35 m, Breite 32 cm und Länge 41,7 cm. Hersteller nennt bis zu
acht Stunden ohne Nachladen und sechs Stunden Vollladung, ohne vollständige Testbedingungen.
Dies steht als Batteriedauer, nicht als unabhängige Dauerbetriebs-Garantie. Dieselbe
Produktseite nennt im Mobilitätstext maximal 3 km/h und an der Basis 3,2 km/h: beide
Angaben bleiben als conflicting sichtbar. Ungefähr 2 cm Schwellenüberfahrt und getrennte
45°-Kippstabilität ergeben keine 45°-Steigfähigkeit. Vier Mikrofone, zwei HDR-Kameras,
X1-Digitalzoom und Bildschirmfreigabe als Herstellerfunktionen.

Pro: 50 kg, Höhe 1,58 m, Breite 38 cm, Länge 63,5 cm, acht Stunden ohne Nachladen und
maximal 3,2 km/h. 17-Zoll-Bildschirm, dreistufiger Digitalzoom und sechs Mikrofone.
Zwei WLAN-Karten und USB-Port für einen 4G-Stick belegen keinen serienmäßigen Mobilfunk-
Stick oder Datentarif. Keine Übertragung der One-Ladezeit, Schwellen- oder Kippangaben.
Beide Modelle werden ferngesteuert; vom Nutzer ausgelöstes automatisches Parken ist
keine allgemeine autonome Navigation oder vermessene Dockinggenauigkeit.

Aktuelle Produktseiten nennen One ausdrücklich formerly Beam und Pro formerly BeamPro;
keine pauschale Übertragung heutiger Werte auf jede historische Beam-Revision.
Produktbeitrag vom 3. Oktober 2018, Bearbeitung vom 14. Oktober 2026, Gründung und
Produktionsverlagerung sind keine exakten Modellstarts. Firmenangabe zur Verlagerung
von Palo Alto nach Vénissieux nach France Relance 2021 bleibt Herstellerattribution,
kein unabhängig geprüfter Ursprung sämtlicher Komponenten.

Flexi’ Beam ist ein Mietpaket: Beitrag vom 30. September 2024, aktualisiert am
10. April 2025, ab 449 EUR/Monat mit Robotik-, Konnektivitäts- und Servicebestandteilen.
Kein aktueller Geräte-Kaufpreis; heutiger Umfang, Steuer- und Laufzeitbasis ungeprüft.
HIKU ist ein Kunst-/Performanceprojekt, Smile Manager Software, TED-i ein Programm;
keine zusätzlichen ganzen Robotermodelle. Führerschaft, installierte Basis,
Latenzfreiheit, Sicherheitsversprechen und klinische Vorteile nicht unabhängig geprüft.
Acht erfolgreiche HTTP200-HTML-Quellen mit SHA-256 und Text geprüft, keine visuelle
Bild-/PDF-/Videoinspektion oder Formular-/Miet-/Demoanfrage.

Alle 2120 anderen CSV-Zeilen, 902 bisherigen Feldprüfungen, 100 bisherigen Firmenfokusse,
1032 anderen Produktbelege und 1961 Quellenidentitäten unverändert. Keine neue CSV-/
Vergleichsspalte oder Anwendungscodeänderung. 807 Unit-Tests/64 Dateien bestanden;
erster Lauf 806 bestanden/ein veralteter Konfliktzähler, Erwartung 262 auf 263 aktualisiert,
anschließend alle bestanden. Build 3172 Seiten, Audit null Fehler/1027 unveränderte Hinweise.
Lint/Format, Refresh und Wiederimport ohne Ergänzungen bestanden. 16 verschiedene Desktop-/
Mobilfälle mit vier Axe-Läufen bestanden. Keine Videoiframes auf den zwei ausgewählten
Seiten; frühere externe YouTube-Befunde aus Batch106 bleiben ungelöst.
Zwei Seiten/74 Felder/16 Aussagen, Firmenfokus, strukturierte Eigenschaften, eine
BEAM-Familien-Exportzeile mit zwei getrennten Modellzielen und Queue-Ziele geprüft.
Gesamter Vergleich 1034 Produktbelege, 4549 Aussagen,
2050 Quellenverweise und 904 Prüfungen/15407 Felder. Eigene Browser-/Server-/Hilfsprozesse
beendet, Port 4321 frei; kein Deployment.

Gesamt 2122 Modelle/Konfigurationen, 868 Ergänzungen und 166 bestehende Modelle mit
Merkmalsanreicherung, 101 Firmenfokusse. Ursprüngliche Quellenziele: 409 geprüft,
109 ausstehend von 518, 6882 Felder (3035 dokumentiert, 3671 nicht dokumentiert,
165 Quellenabweichungen, elf Roadmap), Firmenfokus für 97 von 591 Quellengruppen.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen.
Vollständige Quellen-/Herstellerpalette und Markt-/Suchführerschaft bleiben unbewiesen.
Datencommit `bac134113a25f1fe7bc99b837c49d267b871cf70` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-108-evidence.json`.


## Ergänzung vom 2. November 2026 – Badger-Plattform und historische Roboter (Batch 109)

Digital Teammate und PatrolBot als bestehende Einträge erweitert; drei ausdrücklich
benannte historische Roboter ergänzt: Retail inSight, Retail inSpect und UV Disinfect Robot.
Fünf Prüfungen mit 168 ausgewählten Feldern: 22 dokumentiert und 146 unbekannt.
23 zusätzliche Merkmalsaussagen, netto 13 Quellenverweise; sechs bisherige Aussagen
und Entdeckungsprovenienz erhalten. Ein neuer Firmenfokus, keine neuen CSV-Spalten.

Digital Teammate: aktuelle Plattformankündigung vom 8. Mai 2025 mit angekündigter
Sommerverfügbarkeit, keine pauschale Datierung aller älteren Badger-Chassis.
Hersteller nennt 16 Stunden Batteriebetrieb; Text des 2025-Datenblatts ungefähr
16 Stunden Lithiumbatterie, ohne vollständige Testbedingungen. Autonome Bewegung,
Hindernisreaktion und Rückkehr zur Ladestation, keine bestimmte Vollladedauer oder
vermessene Navigations-/Dockingtoleranz. RFID setzt Tags und passende Ausstattung
voraus; Ablaufdaten erfordern entsprechende Taginformationen. Überkopfkameras,
Tablet/Media, Mobilaufgaben und APIs bleiben konfigurationsabhängig. Alarmdaten sind
keine physische Regalauffüllung, Nassreinigung oder garantierte Wirtschaftlichkeit.

PatrolBot: Einführung vom 29. Juni 2020 und Museumspilot vom 9. November 2021 nennen
zwölf Stunden je Ladung, nicht die 16 Stunden der anderen Plattform. Rundgänge durch
Geschäfte, Lager und Bürogebäude, Hindernisumfahrung, Livevideo und Bilddokumentation;
keine Türverriegelung, Brandbekämpfung oder bestätigte Temperaturmessung. TrackTik-
API und Sicherheitssoftware-Integration als datierte Funktionsbelege. Deborah ist der
Name des Museumspiloten, kein weiteres Modell; 24/7-Team kein Roboter-Dauerbetrieb.

Retail inSight und inSpect werden in Herstellerlineups 2020/2021 ausdrücklich als
Regal- bzw. Bodenprüfroboter benannt. Exakter ursprünglicher Modellstart ungeklärt;
keine Übernahme heutiger Batterien, Maße oder Generationen. Woodman’s-spezifische
historische Aussagen über >95% Bestandslücken- und >90% Fehlartikel/Preiserkennung
sind keine unabhängig geprüfte universelle Visionstoleranz. Die Vier-Fuß-Regalsektion
beschreibt Artikellokalisation, nicht Fahrzeugnavigation. inSpect erkennt/berichtet
Flüssigkeiten und Abfälle, ist dadurch kein Mop oder Sauger. Aktuelles Badger-Inspect-
Lösungsbranding beweist keine identische historische Hardware. Marty ist eine
Händler-Einsatzbenennung mit dokumentiertem Upgrade 2023, keine erzwungene SKU-Aliasregel.

UV Disinfect: Einführung vom 2. Februar 2021 mit UVDI-254-nm-Technik. Frühe Hersteller-
Tests nennen 40.000 Quadratfuß in etwa zwei Stunden und mindestens 99% Inaktivierung
bestimmter Testkeime, ohne universelle Dosis-/Layoutgarantie. Weitere Mikrowirksamkeits-
Tests und Ladenpiloten wurden für Q1 2021 angekündigt; keine Bestätigung abgeschlossener
Versuche, breiter Auslieferung oder heutiger Verfügbarkeit. Separate Laborergebnisse
zu UVDI-Technologie sind keine Ganzroboter-/Ganzladen-/klinische Zertifizierung.
Sicherheitsinterlocks, sichere Personennähe, UV-Dosis und Infektionsschutz bleiben
ungeprüft. UV-Test-Areal/Zeit bleibt qualifiziert im areaRate-Feld, keine beliebige
Hochrechnung oder mechanische Reinigungsbreite.

20 erfolgreiche öffentliche Herstellerantworten mit Hashnachweis, darunter ein
sechsseitiges PDF und eine XML-Sitemap. Zwei geschätzte alte Artikelpfade lieferten
404 und wurden nicht als Inhaltsbeleg verwendet; anschließend echte Archivlinks
geprüft. Nur Text und PDF-Wortkoordinaten inspiziert, keine visuelle Bild-/PDF-/
Videoinspektion, keine Formular-/Demo-/Bestellanfragen. Vollständige historische
Palette und unabhängig einzigartige USPs/Marktführerschaft nicht bewiesen.

Alle 2120 übrigen vorherigen CSV-Zeilen, 904 bisherigen Feldprüfungen, 101 bisherigen
Firmenfokusse, 1032 anderen Produktbelege und 1961 Quellenidentitäten unverändert.
Keine Anwendungscodeänderung. 807 Unit-Tests/64 Dateien, 20 Desktop-/Mobilfälle mit
vier Axe-Läufen, Build 3175 Seiten, Lint/Format, Refresh und Wiederimport ohne
Ergänzungen bestanden. Audit null Fehler/1027 Hinweise: zwei fehlende Jahresangaben
für Digital Teammate/PatrolBot aufgelöst und zwei neue für inSight/inSpect ergänzt;
übrige Hinweiszeilen unverändert. Fünf Seiten/168 Felder/29 Aussagen, Firmenfokus,
strukturierte Eigenschaften, eine Modell-Exportzeile, ein Firmenproduktziel und
zwei ursprüngliche Queue-Ziele geprüft. Vergleich insgesamt 1037 Produktbelege,
4572 Aussagen, 2063 Quellenverweise sowie 909 Prüfungen/15575 Felder. Eigene Browser-,
Server- und Hilfsprozesse beendet, Port 4321 frei, kein Deployment. Frühere externe
YouTube-Frame-Befunde aus Batch106 bleiben ungelöst.

Gesamt 2125 Modelle/Konfigurationen, 871 Ergänzungen und 166 bestehende Modelle mit
Merkmalsanreicherung, 102 Firmenfokusse. Ursprüngliche Quellenziele: 411 geprüft,
107 ausstehend von 518, 6956 Felder (3047 dokumentiert, 3733 unbekannt, 165 Konflikte,
elf Roadmap), Firmenfokus für 98 von 591 Quellengruppen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte offen. Keine vollständige Quellen-/
Herstellerabdeckung oder Markt-/Suchführerschaft nachgewiesen.
Datencommit `4e3f9ee77a55ac867dd11b01e3117dbd2fa4304a` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-109-evidence.json`.


## Ergänzung vom 2. November 2026 – Cyngn-Integrationen und Konfigurationsgrenzen (Batch 110)

DriveMod Tugger und Forklift erweitert, historisch belegten DriveMod Stockchaser ergänzt.
Drei Prüfungen mit 111 ausgewählten Feldern: 21 dokumentiert und 90 unbekannt.
17 zusätzliche Merkmalsaussagen, netto 13 Produktquellenverweise; sechs bisherige
Aussagen und Entdeckungsprovenienz erhalten. Ein neuer Firmenfokus. Cyngn ist der
Autonomieentwickler/Integrator; Motrec, BYD und Columbia sind verschiedene Fahrzeugplattformen.

Aktueller autonomer Motrec MT-160: 65 × 30 × 55 Zoll, 1250 ± 100 lb je Ausstattung,
12000 lb Zuglast und davon getrennte 500 lb Decklast. 4 mph autonom und 6 mph manuell.
12,4-kWh-Lithium-Ionen-Akku mit 48 V, bis zwölf Stunden abhängig von Geschwindigkeit,
Last und Nutzung; fünf Stunden
Ladung ohne vollständiges Ladestands-/Testprotokoll. 53 Zoll Wenderadius, 59 Zoll Mindest-
gangbreite, 2,5 Prozent Steigung, nicht Grad. Inbetriebnahme und Anhängerzug-Abstände
bleiben standortabhängig. Das aktuelle Datenblatt nennt Auto-Unhitch/Blau-Licht und
LTE optional, WLAN 5/802.11ac, 3D-/2D-LiDAR, IMU und Radencoder als Herstellerfunktionen.
Die ältere Vorschau im Oktober 2023 nennt 6000 lb/54 Zoll; Mitteilung
vom September 2024 erklärt die Verdoppelung auf 12000 lb. Keine erzwungene Quellen-
abweichung identischer Revisionen und keine Datierung jedes heutigen Pakets auf 2023.
Pneumatik- gegenüber Voll-/Non-Marking-Reifentext in den zwei PDFs nicht als universelle
Reifenausstattung ausgewählt. Komponentenwortlaut B56.5-compliant bei Virtual Bumper
ist keine unabhängig geprüfte Gesamtfahrzeug-/Standortzertifizierung; dreifache Reaktions-
geschwindigkeit, ROI und Implementierungsdauer sind Entwicklerwerbung.

DriveMod Forklift: aktueller Katalog-Fließtext nennt 11000 lb für die BYD-Integration,
ohne bestätigtes Basis-Chassis, Lastschwerpunkt oder Mast. 2023-Entwicklung nennt
10000 lb, erster bezahlter Einsatz am 21. Oktober 2024 über 10000 lb; zeitliche und
Konfigurationsgrenzen bleiben sichtbar. Branchen-Einsätze vom 19. Februar 2025 sind
Anbieterberichte, keine aktuelle Lieferbestätigung oder exakte Erstveröffentlichung.
Manueller/autonomer Modus und Indoor-/Outdoor-Kontext sind belegt. Seite 15 nahe dem
Forklift-Abschnitt liefert nur ihre Seitenzahl als extrahierbaren Text. Ihr genauer
Inhalt und die Art einer möglichen Darstellung wurden nicht bestätigt. Keine
visuelle Prüfung/OCR und keine Übernahme dort vermuteter Masse, Maße, Geschwindigkeit,
Hubhöhe oder Batteriedaten. Früherer Forklift-Pfad führt auf Spaghetti-Map-Ressource,
deren Inhalt kein Gabelstaplerdatenblatt ist.

DriveMod Stockchaser: Columbia-Partnerschaft 2021, Flottenproduktion Januar 2022 und
Vorführung Februar 2023 mit Neubau/kompatiblem Retrofit sind belegt. Keine Übernahme
der Motrec-Tugger-Nutzdaten oder exakter Erststart aus Produktions-/Einsatzdaten.
Die aktuelle U.S.-Continental-Landingpage nennt Stockchaser, deren PDF hingegen
DriveMod Tugger. Keine erzwungene Aliasregel; historische Konfiguration bleibt getrennt.
Vierfache Effizienz ist kundenspezifische Entwicklerforschung, keine universelle
Aufgabenrate. DriveMod Kit, EAS, Insight, EasyLaunch/RaaS sind Komponenten, Software
oder Dienstleistung. Anonymer Mining-OEM-Entwicklungsauftrag identifiziert kein
zusätzliches benanntes Robotermodell.

22 erfolgreiche öffentliche Antworten mit SHA-256, darunter vier PDFs und eine
XML-Sitemap; HTML/PDF-Text und Wortkoordinaten geprüft. Tugger-Tabellenwerte stimmen
in den aktuellen verlinkten Spezifikationen überein. Seite 15 bleibt inhaltlich
unbestätigt, keine visuelle Bild-/PDF-/Videoinspektion. Öffentliche Download-
GET-Weiterleitungen ohne Formulare, Anmeldung, Kontakt-/Demo-/Bestellanfrage.
Vollständige historische Palette, heutige Pakete, unabhängige Sicherheit, einzigartige
USPs, Wirtschaftlichkeit oder Marktführerschaft bleiben unbewiesen.

Alle 2123 anderen vorherigen CSV-Zeilen, 909 bisherigen Feldprüfungen, 102 Firmenfokusse,
1035 anderen Produktbelege und 1961 Quellenidentitäten unverändert. Keine neuen CSV-/
Vergleichsspalten oder Anwendungscodeänderung. 807 Unit-Tests/64 Dateien, 20 Desktop-/
Mobilfälle mit vier Axe-Läufen, Build 3176 Seiten, Lint/Format, Refresh und Wiederimport
bestanden. Audit null Fehler/1028 Hinweise: genau ein zusätzlicher Hinweis zum unbekannten
Erststart des Stockchaser, übrige Texte unverändert. Drei Seiten/111 Felder/23 Aussagen,
Firmenfokus, strukturierte Eigenschaften, zwei Firmenproduktreferenzen und zwei
ursprüngliche Queue-Ziele geprüft; keine Cyngn-Ziele im benannten Modell-CSV-Export.
Gesamtvergleich 1038 Produktbelege, 4589 Aussagen, 2076 Quellenverweise und 912 Prüfungen/
15686 Felder. Eigene Browser-/Server-/Hilfsprozesse beendet, Port 4321 frei; kein Deployment.
Frühere externe YouTube-Frame-Befunde aus Batch106 bleiben ungelöst.

Gesamt 2126 Modelle/Konfigurationen, 872 Ergänzungen und 166 bestehende Modelle mit
Merkmalsanreicherung, 103 Firmenfokusse. Ursprüngliche Quellenziele: 413 geprüft,
105 ausstehend von 518, 7030 Felder (3065 dokumentiert, 3789 unbekannt, 165 Konflikte,
elf Roadmap), Firmenfokus für 99 von 591 Quellengruppen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte offen. Keine vollständige Quellen-/
Herstellerabdeckung oder Markt-/Suchführerschaft nachgewiesen.
Datencommit `3ee7dfacc450b7a8732685d9f2f81d8bab32cb11` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-110-evidence.json`.


## Ergänzung vom 2. November 2026 – Ekso-Plattformen, Dokumentrevisionen und Firmenrollen (Batch 111)

EksoNR und Indego Personal vertieft; Indego Therapy, EksoGT, eLEGS, HULC und
Ekso Nomad ergänzt. Sieben benannte angetriebene Plattformen mit 259 ausgewählten
Feldern: 35 dokumentiert, 223 unbekannt und eine offene Quellen-/Revisionsabweichung.
29 zusätzliche Merkmalsaussagen, netto 19 Produktquellenverweise, sechs bisherige
Aussagen und Entdeckungsprovenienz erhalten; ein neuer Firmenfokus.

EksoNR: GaitCoach-Rückmeldung und therapeutenkontrollierte Swing-/Stance-Unterstützung,
Pregait-Aktivitäten und Sitzungsdaten sind verschiedene Funktionen. Sicherheitsinformation
109751 im verlinkten ZIP nennt zwei gemeinsam verwendete Akkus, je 48,1 VDC/2000 mAh,
und ungefähr 60 Minuten Ladezeit pro Akku. Zwei Sätze und Dauerbetriebswerbung liefern
keine gemessene Akkulaufzeit. Altersangabe ab 18 Jahren aus Anbieter-FAQ; 220 lb/100 kg,
Körpergröße und Hüftbreite betreffen die Patientenpassung, nicht Gerätemasse, Außenmaße
oder Fracht. Vier Jahre/1,25 Millionen Schritte sind Nutzlebensdauer. US-/EU-Text behält
klinische Aufsicht und den jeweiligen Geltungsbereich; keine individuelle Eignungsprüfung.

Indego Personal: aktuelle Produktseite 31 lb/14 kg gegenüber 29 lb/13 kg in verlinkter
US-Sicherheitsinformation 043-015-001.A. Hardware-/Revisionsbasis ungeklärt, kein stiller
universeller Sieger. Dasselbe Personal-Dokument nennt 73 × 46 × 58 cm ohne geklärte
Messhaltung, 159 Wh/4,9 Ah, typisch 90 Minuten/2500 Schritte mit Motion+ und vier Stunden
Laden ohne vollständiges Ladezustandsprotokoll. Laufzeit hängt von Einstellungen,
Nutzer und Standby ab; typische Spanne 1500–4000 Schritte. Gehhilfe, Vorbeuge-Steuerung,
App und selbstständiges Anlegen bedeuten keine selbstbalancierende Nutzung ohne die
vorgeschriebene geschulte Begleitperson. Studien-Gehgeschwindigkeiten sind kein
universelles Geschwindigkeitslimit. Sport und Treppen bleiben ausgeschlossen.

Indego Therapy: separat benannte Klinikplattform; aktueller Webauftritt führt sie unter
Past Products, Emittentenbericht vom 23. Februar 2026 hingegen noch als Produktumsatz.
Beides beweist weder heutige Neulieferung noch vollständiges Supportende. Klinische
US-Sicherheitsinformation 043-016-001.A nennt 39 lbf/17,7 kgf als Original-Geräteangabe,
72,8 × 46,3 × 57,6 cm, vier Stunden Betrieb und vier Stunden Laden ohne vollständiges
Testprotokoll. Keine Übernahme von Personal-Masse oder Motion+-Laufzeit. Kein Heim-/
Community-Gebrauch, Sport oder Treppen laut klinischem Text. Fünf-Minuten-Anpassungs-
werbung ist keine standardisierte Therapieproduktivität.

Historischer EksoGT-Start 2013 ist im Herstellerarchiv ausdrücklich belegt;
VariableAssist, spätere SmartAssist-/EksoPulse-Updates und heutiger EksoNR bleiben
verschiedene Produkt-/Softwarestände. eLEGS ist als frühere elektromechanische Reha-
Plattform mit Stehen/Geradeausgehen belegt, ohne übertragene heutige Zahlen.
HULC ist ein historisches hydraulisches, akkugestütztes Lasttrage-Exoskelett, an Lockheed
Martin exklusiv lizenziert. Anbieterarchiv nennt bis 200 lb Ausrüstung und 10 mph, ohne
Last-/Gelände-/Laufzeitprotokoll oder universellen gleichzeitigen Maximalbetrieb. Kein
aktuelles Kaufangebot oder übernommene Reha-Eignung. Bestehender Funktionsfilter
workplace-support macht die dokumentierte körpergetragene Lastunterstützung auffindbar;
ein anfänglicher fehlender Unterkategorie-Treffer wurde damit behoben, Tests unverändert.

Nomad: Emittentenbericht, unterzeichnet am 23. Februar 2026, nennt eine angetriebene
Knie-Knöchel-Fuß-Orthese und begrenzte Verkäufe für eine einzelne externe klinische
Studie. Allgemeine Kommerzialisierung Ende 2026 war von Studien-/Patientenrückmeldung
abhängig. Kein Nachweis allgemeiner Lieferbarkeit am 2. November 2026 oder exakter
Erstveröffentlichung. Parker-IP-Erwerb am 5. Dezember 2022 ist kein Produktstart;
aktuelle regulatorische/payerbezogene Aussage daraus nicht abgeleitet.

Wandercraft meldete Unterzeichnung und Vollzug der Ekso-Übernahme am 1. Oktober 2026.
Supportabsicht für EksoNR/Indego Personal neben Atalante X/Eve schafft keine Aliasse.
Ekso-/DynaWear-Seiten belegen separate Industriegeschäftszuordnung von EVO und ZeroG;
passive federunterstützte EVO/EksoVest und Werkzeugstützen werden nicht als neue
angetriebene Gangroboter gezählt. BalanceTutor ist von MediTouch entwickelt, Ekso nennt
US-Vertrieb. HandTutor/ArmTutor/LegTutor/3DTutor sind dadurch weder Ekso-Herstellungen
noch automatisch zusätzliche angetriebene Roboter. Software, EksoCare, Training,
Versicherung/Erstattung und Zubehör bleiben getrennt von Modellen und Kaufpreisen.

22 öffentliche Antworten mit SHA-256: 20 erfolgreich, zwei 404-Entdeckungslinks
nicht als Belege verwendet. Zwei direkte PDFs, zwei ZIPs mit DOCX-/PDF-Mitgliedern,
HTML und ein datierter Emittentenbericht. Englischen NR-DOCX-Text und Tabellen sowie
Personal-/Clinical-US-PDF-Text und ausgewählte Wortkoordinaten geprüft. Weitere
Sprachdateien extrahiert, keine vollständige inhaltliche Prüfung behauptet; macOS-
Ressourcenmetadaten sind keine PDFs. FDA K173530 vom 31. Januar 2018 als historischer
Regulatorbeleg geprüft, nicht als Herstellerquelle öffentlich etikettiert und kein
Nachweis vollständiger heutiger Zulassung oder Produktstart. Keine visuelle Bild-/
PDF-/Videoinspektion, keine Formulare, Kontakt-, Bestell- oder Warenkorbaktion.
Öffentlicher Bericht enthält Prüfstellen/Hashes statt vollständiger Handbuchseiten.

2124 andere vorherige CSV-Zeilen, 912 bisherige Feldprüfungen, 103 Firmenfokusse,
1036 andere Produktbelege und 1961 Quellenidentitäten unverändert. Keine neuen CSV-/
Vergleichsspalten oder Anwendungscodeänderung. 807 Unit-Tests/64 Dateien, 20 Desktop-/
Mobilfälle mit vier Axe-Läufen, Build 3181 Seiten, Lint/Format, Refresh und Wiederimport
bestanden. Audit null Fehler/1032 Hinweise: vier zusätzliche unbekannte Startjahre,
sonst identische Hinweise. Sieben Seiten/259 Felder/35 Aussagen, Firmenfokus,
strukturierte Eigenschaften, zwei Modell-CSV-Ziele/74 Feldvorkommen, eine Firmenprodukt-
referenz und zwei ursprüngliche Queue-Ziele/74 Felder geprüft. Vergleich enthält
1043 Produktbelege, 4618 Aussagen, 2095 Quellenverweise und 919 Prüfungen/15945 Felder.
Eigene Browser-/Server-/Hilfsprozesse beendet, Port 4321 frei; kein Deployment.
Frühere externe YouTube-Frame-Befunde aus Batch106 bleiben ungelöst.

Gesamt 2131 Modelle/Konfigurationen, 877 Ergänzungen, 166 bestehende Modelle mit
Merkmalsanreicherung und 104 Firmenfokusse. Ursprüngliche Quellenziele: 415 geprüft,
103 ausstehend von 518, 7104 Felder (3078 dokumentiert, 3849 unbekannt, 166 Konflikte,
elf Roadmap), Firmenfokus für 100 von 591 Quellengruppen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte offen. Vollständige Quellen-/
Herstellerabdeckung, klinische Wirksamkeit, einzigartige USPs oder Markt-/Suchführerschaft
bleiben unbewiesen. Datencommit `01ad401dfcb2b458f673e6188287da38ae87412c` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-111-evidence.json`.


## Ergänzung vom 2. November 2026 – Inspired Flight: Flugplattformen, Revisionen und Preisvarianten (Batch 112)

IF800 TOMCAT und IF1200 vertieft; historischen IF750 ergänzt. Drei Plattformen mit
111 ausgewählten Feldern: 22 dokumentiert, 85 unbekannt und vier ausdrücklich
festgehaltene Quellen-/Revisionskonflikte. 17 neue Merkmalsaussagen, netto 20 weitere
Produktquellenverweise, sechs bisherige Aussagen und Entdeckungsprovenienz erhalten.
Ein neuer Firmenfokus. Herstellerchronik belegt IF750-Start 2018 getrennt von Gründung
2017; heutige Plattformzahlen nicht auf das historische Modell übertragen.

IF800: aktuelle Dokumentation nennt 8,5 kg mit Akkus, 4,2 kg leer und 11,5 kg maximale
Startmasse. Das verlinkte Handbuch nennt 8,6/4,5/11,6 kg. Dateiname enthält Rev 1.1,
gedruckter Inhalt hingegen Dokument 103691, Rev 1.0, März 2024. Aktuelle Windwerte
10 m/s mit 12 m/s Böen und -20 bis 45°C unterscheiden sich vom Handbuch mit L6/25 mph,
31 mph Böen und -10 bis 45°C. Diese drei Felder bleiben als Konflikte erkennbar.
Aktueller Cube Orange+, dualer Here4 und 12-V-/2-A-Payloadanschluss stehen getrennt
von älterem Cube Blue H7 und 18-V-Schiene. IP43 ist Herstellerangabe aus Shop/Handbuch,
kein selbst geprüfter unabhängiger Regenversuch. Bis 54 Minuten Flugzeit und 3 kg
Nutzlast sind keine belegte gleichzeitige Maximalleistung. Radioangaben trennen ideale
6 km Sichtverbindung vom Herstellerfeldtest 1,5–2,3 km in wechselnder urbaner Umgebung;
keine Positionsgenauigkeit oder Aussage zur Flugerlaubnis.

IB388-Werte 387,6 Wh, 17 Ah, 22,8 V, 2,08 kg und 150–300 Zyklen gelten pro Akku und sind
keine Flugzeit. Ladeanleitung empfiehlt einen Akku pro IMARS D300+ ohne vollständige
Ladedauer. Hot Swap erfolgt gelandet und entschärft, mit einem angeschlossenen Akku;
anschließender Software-Neustart verbindet neue Akkus ohne Payload-Stromunterbrechung.
Das ist keine unterbrechungsfreie Flugzeit oder Akkuwechsel in der Luft.

IF1200: 7,8 kg leer, 16,3 kg mit Akkus und 24,9 kg Startmasse getrennt. Nutzlastfeld
bleibt Konflikt: Tabelle 8,6 kg/19 lb, Überschrift 19,1 lb, Flughöhenbeispiel 8,7 kg.
Shop nennt 28,7 lb nur mit entsprechender Zertifizierung; keine universelle zusätzliche
Standardnutzlast oder eigenständige Genehmigungsprüfung. Bis 43 Minuten sind keine
Maximallastgarantie; die technische Seite verlangt Gimbal plus Sensormasse zur
Flugzeitabschätzung. Universelle Shop-Behauptung zur lastunabhängigen Dauer nicht
übernommen. Aktueller Cube Orange+/Here3 steht getrennt von Blue-H7-Konfigurationen
im IF1200A-Handbuch Rev 2.0GB 2023 und Complianceblatt Januar 2023. Letzteres hält fest,
dass Blue Herelink trotz NDAA-Konformitätsangabe von DIU nicht für DoD-UAS-Betrieb
freigegeben war. Heutige Blue-UAS-/NDAA-Werbung nicht unabhängig bestätigt. Kein
IF800-IP43 auf IF1200 übertragen. Alter IF1200A-Shoplink leitet zum aktuellen IF1200;
Dokument-/Interfacenamen begründen keine zusätzliche heute separat angebotene Variante.

Tattu-Daten 12S1P, 16 Ah, 44,4 V, 710,4 Wh und 4,25 kg ±0,10 kg gelten pro Akku.
TA3200 lädt beide auf unabhängigen A/B-Kanälen gleichzeitig; 3200 W, bis 60 A und
ungefähr 6 kg sind Ladegerätwerte. Anleitung empfiehlt 16 A/1C, ohne vollständige
Ladedauer. Aus Ah/A keine verifizierte Ein-Stunden-Ladung abgeleitet.

Shop-JSON und JSON-LD stimmen bei USD und acht Controller-/Care-Varianten pro Familie
überein: IF800 23.000–34.500 USD, IF1200 33.500–46.000 USD; jeweiliger Startwert für
Herelink/Foundation. Optionen, Steuer/Versand und aktuelle Verfügbarkeit gesondert.
Strukturierte Verfügbarkeitsflags widersprechen Sold-out/Unavailable-HTML-Fallback;
kein bestätigter Lagerbestand oder exaktes universelles strukturiertes Kaufangebot.
Jährliche Care-Gebühren, Mehrjahrespakete, GS-ONE-Controllerlaufzeit/-masse, Payloads,
Akkus, Ladegeräte und Inspired-Suite-Software behalten Zubehör-/Software-/Servicerollen.

34 öffentliche Antworten mit SHA-256: 33 HTTP 200, ein ungenutzter 404-Link. Drei PDFs,
HTML, öffentliches Varianten-JSON und JSON-LD. PDF-Text und ausgewählte Wortkoordinaten
geprüft; IF800 physische Seite 12 liefert nur Überschriften/Fußzeile, keine visuell
bestätigten Graphwerte oder Bild-/Rastertypbehauptung. Öffentlicher Nachweis enthält
Prüfstellen und Hashes statt vollständiger Handbuchseiten. Keine visuelle PDF-/Bild-/
Video-/CAD-Prüfung, Formulare, Kontakt-, Bestell- oder Warenkorbaktion.

2129 andere bisherige CSV-Zeilen, 919 vorhandene Feldprüfungen, 104 Firmenfokusse,
1041 andere Produktbelege und 1961 Quellenidentitäten erhalten. Keine neuen Spalten
oder Anwendungscodeänderung. 807 Unit-Tests/64 Dateien, 20 Desktop-/Mobilfälle mit
vier Axe-Läufen, Build 3182 Seiten, Lint/Format, Refresh und Wiederimport bestanden.
Audit null Fehler/1032 unveränderte Hinweise. Drei Seiten/111 Felder/23 Aussagen,
Firmenfokus und strukturierte Eigenschaften geprüft; zwei Modell-CSV-Ziele/74 Felder,
null Firmenbeschreibungs-Produktziele, zwei ursprüngliche Queue-Ziele/74 Felder.
Anfängliche Prüfskriptannahmen zum Header außerhalb main und zu einer zusätzlichen
Firmenproduktreferenz korrigiert; keine App-/Datenänderung zur Umgehung eines Fehlers.
Öffentlicher Vergleich: 1044 Produktbelege, 4635 Aussagen, 2115 Quellenverweise und
922 Prüfungen/16056 Felder. Eigene Browser-/Server-/Hilfsprozesse beendet, Port 4321 frei.
Kein Deployment. Externe YouTube-Frame-Befunde aus Batch106 bleiben ungelöst.

Gesamt 2132 Modelle/Konfigurationen, 878 Ergänzungen, 166 bestehende Modelle mit
Merkmalsanreicherung und 105 Firmenfokusse. Ursprüngliche Quellenziele: 417 geprüft,
101 ausstehend von 518; 7178 Felder (3097 dokumentiert, 3900 unbekannt, 170 Konflikte,
elf Roadmap). Firmenfokus für 101 von 591 Quellengruppen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte offen. Vollständige Quellen-/
Herstellerabdeckung, unabhängige exklusive USPs oder Markt-/Suchführerschaft bleiben
unbewiesen. Datencommit `28235cc78d1f7db99efe2c6cab95a5f66be79521` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-112-evidence.json`.


## Ergänzung vom 2. November 2026 – Percepto: Generationen, Dockwerte und Software-Rollen (Batch 113)

Air Max, Air Max OGI, Ranger und Ranger OGI vertieft; Air Mobile und Sparrow als
historische Plattformen ergänzt. Sechs Modelle mit 222 ausgewählten Feldern:
28 dokumentiert, 193 unbekannt und ein Quellenkonflikt. 24 zusätzliche Aussagen,
netto 25 Produktquellenverweise; 13 vorhandene Aussagen und Entdeckungsprovenienz
bewahrt. Ein neuer Firmenfokus. Unbekannte Flug-/Akku-/Ladezeiten bleiben leer.

Herstellerankündigung vom 17. November 2021 nennt Air Mobile ausdrücklich als neues
kompaktes Modell neben AIM 2022. Die Softwarebezeichnung und April-2022-Datenblatt-
revision verschieben den Modellstart nicht auf 2022. Dieselbe Meldung nennt Air Max
als nächste Generation von Sparrow; ein Januar-2022-Refineriebericht beschreibt
Air Max als neueste Sparrow-Konfiguration. Belegter Generationszusammenhang bedeutet
keine identischen technischen Stände oder Gleichsetzung mit heutigen Ranger-Modellen.
Exakter erster Sparrow-/Air-Max-/Ranger-Start nicht aus Firmen-/Software- oder
Regulierungsdaten abgeleitet; November 2020 betrifft AIM-Software.

Air Max: 9,5 kg, 157 cm Propellerspitzen-Diagonale und IP55 beim Fluggerät; 350 kg,
166 × 162 × 168 cm und IP56 gehören zur Basis. Akku-/Payload-Einschluss der Masse
nicht geklärt, Diagonale keine Verpackungsmaße. Standardkonfiguration 24 MP RGB plus
Thermal, gegenüber eigenem Air-Max-OGI-Blatt mit 10,7 kg, 157 cm, 16 MP RGB und
Sierra Olympic Ventus. OGI-Spektralband 3,2–3,42 Mikrometer, Gasbeispiele und historische
kamerabezogene EPA-Aussage sind weder Frachtlast noch universelle Nachweisgrenze oder
unabhängige heutige Systemfreigabe. IP55 des Standardmodells nicht auf OGI übertragen.

Air Mobile: 4,2 kg, 68 cm Propellerspitzen-Diagonale, IP55, 16 MP RGB plus Thermal und
LTE in Herstellerdaten. Basis separat 100 kg, 100 × 100 × 75 cm und IP56. Einsatz an
kleineren/temporären Standorten und linearen Anlagen, verlagerbare Basis auf normalem
Truck: kein belegter Start während der Fahrt, keine exakte Rüst-/Ladedauer oder
unbegrenzte Funkreichweite. Sparrow bleibt ohne übernommene Air-Max-/Ranger-Zahlen.

Aktueller Ranger: Produktseite nennt 61 MP Vollformat-RGB und radiometrische Thermal-
bildgebung, Portfolioseite hingegen 1 MP Vollformat-RGB plus Boson. Roh-HTML bestätigt
abweichenden Text. Beschreibung als conflicting markiert, beide Aussagen sichtbar;
kein stilles Beheben eines angenommenen Tippfehlers. Kamera-MP sind keine metrische
Bildverarbeitungspräzision. Core erkennt Anlagen, vermeidet Hindernisse und steuert
Inspektionsmanöver; AIMs bis zu 30 Drohnen betreffen Flottenparallelität, keine
Flugzeit oder standardisierte Inspektionsleistung.

Ranger OGI: aktuelle Seite nennt AI Emission Detector, automatische Aufnahme und
AIM-Fernbetrieb. Meldung vom 16. Juni 2025 beschreibt 100 g/h bei 90 Prozent confidence;
Meldung vom 1. Oktober 2025 nennt 100 g/h bei 90 Prozent reliability im Testkontext und
300 g/h bei höherem Wind im Permian-Einsatz. Bedingungen und Wortlaut getrennt,
keine universelle Empfindlichkeit, Geschwindigkeit oder Inspektionen/Stunde daraus.
Herstellerbericht zur EPA-Alternativmethode unter benannten Subparts nicht unabhängig
als heutige allgemeine Freigabe geprüft. Historische Kameraaussage und ältere
Pending-Approval-Verweise nicht zu pauschalem aktuellem Status zusammengezogen.

Harbor und historische Percepto Bases sind Dock, Ladegerät, Schutz und Datenübertragung.
Hurrikan-Kategorie-5-Testwerbung betrifft den Schutzraum, keine Flugwindgrenze;
24/7-Verfügbarkeit ist keine durchgehende Flugzeit. Exakte Ranger-Massen, Maße,
IP-Werte, Flug- und Ladedauern nicht aus älteren Air-Modellen übernommen.

Herstellerankündigung und Strategietext vom 27. Oktober 2026 führen Axion als neue
hardwareunabhängige SaaS mit unterstützten Drittanbieterdrohnen/-sensoren und Archiven.
160-plus AI-Modelle und 100.000-plus Trainingsstunden sind Softwareentwicklungsangaben,
keine Drohnenzahlen oder bewiesene Einsatzgenauigkeit. Ranger-/Harbor-Hardware bleibt
laut Strategie Bestandteil des Geschäfts. Zusammenlegung von Engineering, Herstellung
und Montage in den USA war im Gange, nicht als vollständig beendet verifiziert.
AIM, AIM 2022, Insight Manager, Axion und Detector bleiben Software-/Feature-Rollen;
Kameras, fremde Datenquellen, Remote-Services und Demoanfragen keine neuen Fluggeräte
oder Hardwarekaufpreise. Sicherheits-, ROI-, Only-/Most-Advanced- und Führerschafts-
werbung keine unabhängig bewiesenen exklusiven USPs.

22 öffentliche Antworten mit SHA-256: 21 HTTP 200, ein ungenutzter 404-Link. Drei
historische PDFs plus aktuelle/datierte Hersteller-HTML-Texte. Interne Suchseiten
16/17 nur Entdeckung; verlinkte Artikel separat abgerufen. PDF-Text und ausgewählte
Wortkoordinaten geprüft, Zweispalten- und Fluggerät-/Basis-Zeilen getrennt zugeordnet.
Keine visuelle PDF-/Bild-/Video-/CAD-Prüfung, Formulare, Demos, Kontakte, Login oder
Warenkorbaktionen. Nachweis enthält Hashes/Prüfstellen statt vollständiger Handbuchseiten.

2128 andere bisherige CSV-Zeilen, 922 bisherige Feldprüfungen, 105 Firmenfokusse,
1040 andere Produktbelege und 1961 Quellenidentitäten erhalten. Keine neuen Spalten
oder Anwendungscodeänderung. 807 Unit-Tests/64 Dateien, 20 Desktop-/Mobilfälle mit
vier Axe-Läufen, Build 3184 Seiten, Lint/Format, Refresh und Wiederimport bestanden.
Audit null Fehler/1033 Hinweise: ein neuer Hinweis zum unbekannten ersten Sparrow-
Startjahr, andere identisch. Sechs Seiten/222 Felder/37 Aussagen, Firmenfokus,
strukturierte Eigenschaften, zwei Modell-Exportziele/74 Felder und zwei ursprüngliche
Queue-Ziele/74 Felder geprüft; keine Firmenbeschreibungs-Produktreferenz für diese
Gruppe. Vergleich enthält 1046 Produktbelege, 4659 Aussagen, 2140 Quellenverweise und
928 Prüfungen/16278 Felder. Eigene Browser-/Server-/Hilfsprozesse beendet, Port 4321 frei.
Kein Deployment. Externe YouTube-Frame-Befunde aus Batch106 bleiben ungelöst.

Gesamt 2134 Modelle/Konfigurationen, 880 Ergänzungen, 166 bestehende Modelle mit
Merkmalsanreicherung und 106 Firmenfokusse. Ursprüngliche Ziele: 419 geprüft, 99 offen
von 518; 7252 Felder (3110 dokumentiert, 3961 unbekannt, 170 Konflikte, elf Roadmap).
Firmenfokus für 102 von 591 Quellengruppen. Drei Modellidentitäten, neun Listing-
identitäten und 862 Buy-Detailinhalte offen; vollständige Herstellerabdeckung,
unabhängig exklusive USPs oder Markt-/Suchführerschaft bleiben unbewiesen.
Datencommit `5cabb6e47375f25946b19a1b278426d5f4899db5` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-113-evidence.json`.


## Ergänzung vom 2. November 2026 – Running Brains/Simbe: Ankündigungen, Tally-Generationen und RFID-Konflikt (Batch 114)

GR100, GR200, Tally und Tally RFID vertieft; fünf ausdrücklich benannte Tally-
Generationen 1.0, 2.0, 2.6, 3.0 und 4.0 ergänzt. Neun Modelle mit 333 ausgewählten
Feldern: 37 dokumentiert, 290 unbekannt, ein Quellenkonflikt und fünf Roadmap-Felder.
29 zusätzliche Aussagen und netto 15 Produktquellenverweise; zwölf alte Aussagen
und Entdeckungsprovenienz bewahrt. Zwei neue Firmenfokusse.

GR100: Firmengeschichte belegt Start 2021. Produktseite nennt 157 kg, maximal
1,5 m/s, 4,5 Stunden Autonomie, −10 bis 40 °C sowie 1,5 Stunden Schnellladen bei
1000 W. Ladefenster und Massen-/Ausrüstungseinschluss nicht geklärt. Fünf Kameras
enthalten eine thermografische Kamera. RaaS umfasst Roboter/Dock, 25 einfache
POI/TOI, RBOC, Software/AI, zwei 4G-SIMs, Hotline und Wartung, Preis auf Anfrage.
Premiumstation separat: 2 m Höhe, virtuelle 50-m-Barriere, PTZ/LiDAR und Überwachung;
keine Robotermaße oder nachgewiesene zertifizierte Personenschutzfelder daraus.

GR200: Milipol-Präsentation 2025, Vermietung laut Hersteller für 2027 geplant,
am Prüfdatum 2. November 2026 weiterhin zukünftig. Angekündigte 350 kg, maximal
8–10 km/h, 8–10 Stunden, 25° Steigung und autonome RBOC-Patrouille als Roadmap
markiert; sieben Kameras einschließlich Thermal und sechs Solid-State-LiDARs.
Präsentations-/Mietplanjahr kein bestätigtes erstes Auslieferungsdatum. Kein
übernommener GR100-Lade-, Stations- oder IP-Wert, keine heutige Mietzusage.

Tally: vollständige Herstellermeldung vom 10. November 2015 belegt erste öffentliche
Vorstellung und damalige Händlertests. Rund 30 lb und 38 in mit variablem Sensormast
betreffen den damaligen generischen Entwurf, keine heutigen Maße/Masse oder
automatische Tally-1.0-Zuordnung. Chronik nennt 1.0 interne Nutzung 2016 und 2.0
Kundeneinsatz 2017, ohne exaktes erstes öffentliches Erscheinungsjahr zu belegen.
2.6 ausdrücklich 2019 eingeführt: höher, zusätzliche Kameras, mehr als 50 Schnuck-
Einheiten aufgerüstet; keine erfundene Höhe/Kamerazahl oder weltweite Flottenzahl.
3.0 ausdrücklich 2020 gestartet: Bildverarbeitung, Haltbarkeit, Manövrierfähigkeit
und eingebettete Verarbeitung. TIME-Reprint-Stummel vom Oktober 2023 kein Modellstart
oder gelesener technischer Vollartikel.

Tally 4.0: vollständige Herstellermeldung vom 12. Januar 2026, damals Kundenverfügbarkeit
ab Mitte 2026 geplant. Aktuelle Familienseite nennt 4.0, ohne heutigen Lager-/Bestell-
status zu belegen. Bis zwölf Stunden je Ladung; kürzeres/schnelleres Laden ohne
exakte Dauer. Hochauflösende/Spezialkameras, 3D-Tiefe, duale Fisheye-360°-Sicht,
NVIDIA-Edge/CUDA/TensorRT/DOCA-Argus und RealSense bleiben Integrationen/Funktionen,
keine neuen Roboter. Aktuelle Familienseite nennt Lokalisierung auf 1–2 in in einem
150.000-sq-ft-Geschäft und 99 Prozent Regaletiketten-Erkennung; verschiedene Messgrößen,
keine unabhängige metrische Bildpräzision. Aktuelle Werte nicht auf alte Versionen
oder jede RFID-Konfiguration übertragen.

Tally RFID: vollständiger Herstellerstart vom 18. Juli 2018. Damals über 700 Tags/s
und Submeter-Warenlokalisierung als datierte Aussagen. Aktuelle Seite bis 120.000
Artikel/3 Stunden und 750 Tag-Leseereignisse/s: Artikelzahlen und rohe Lesungen nicht
gleichgesetzt. Dieselbe Seite widerspricht sich mit bis 35 ft in der Kennzahl und
bis 40 ft im Fließtext; Familienseite ebenfalls 40 ft. Beschreibung conflicting,
beide Texte sichtbar, keine Auswahl eines vermuteten Tippfehlers. Keine Übertragung
auf Roboterpositionierung oder universellen Erfassungsradius. RAIN/GS1-Positionierung
bleibt Herstellerangabe; RFID-Konfiguration kein nachgewiesener neuer Fahrwerksentwurf.

Tally Spot ist ein festes Kamerasystem, kein zusätzliches mobiles Robotermodell.
RBOC, Vision, Mobile App, Virtual Tour, Brand Insights, APIs/Dashboards und RaaS/ROI
behalten Software-/Dienstrollen. Herstellerbericht vom 4. März 2026 zu UL 3300 für
Tally und Dock ohne unabhängige Registerprüfung oder Übertragung auf alle historischen
Versionen; SOC 2 Type II Plattform und ISO 27001 Management andere Geltungsbereiche.
Meldung vom 21. September 2026 nennt über 3.000 autonome Einheiten unter Vertrag,
keine bewiesenen Auslieferungen oder unabhängig nachgewiesene Marktführerschaft.

21 öffentliche HTTP-200-Antworten mit SHA-256, aktuelle/datierte Hersteller-HTML-Texte.
Zwei abgerufene Formular-Landingpages sind keine erhaltenen PDF-Datenblätter; keine
Formulare, Demos, Kontakte, Login oder Transaktionen. Sitemap/Newsroom nur Entdeckung,
TIME-Stummel kein technischer Volltext. Keine visuelle PDF-/Bild-/Video-/CAD-Prüfung.

2130 andere alte CSV-Zeilen, alle 928 alten Feldprüfungen, 106 alten Firmenfokusse,
1042 andere Produktbelege und 1961 Quellenidentitäten unverändert. Keine neuen
Spalten oder Anwendungscodeänderung. 807 Unit-Tests/64 Dateien, 20 Desktop-/Mobilfälle
mit vier Axe-Läufen, Build 3189 Seiten, Lint/Format, Refresh und Wiederimport bestanden.
Audit null Fehler/1032 Hinweise: drei Startjahre ergänzt, zwei neue historische
Versionen ohne aus interner Nutzung/Kundeneinsatz abgeleitetes Startjahr.
Neun Seiten/333 Felder/41 Aussagen, zwei Firmenfokusse, strukturierte Eigenschaften,
drei Modell-Exportziele/111 Feldvorkommen, eine Firmenbeschreibungs-Produktreferenz und
vier ursprüngliche Queue-Ziele/148 Felder geprüft. Vergleich enthält 1051 Produktbelege,
4688 Aussagen, 2155 Quellenverweise und 937 Prüfungen/16611 Felder. Eigene Browser-,
Server- und Hilfsprozesse beendet, Port 4321 frei. Kein Deployment. Externe YouTube-
Frame-Befunde aus Batch106 bleiben ungelöst.

Gesamt 2139 Modelle/Konfigurationen, 885 Ergänzungen, 166 bestehende Modelle mit
Merkmalsanreicherung und 108 Firmenfokusse. Ursprüngliche Ziele: 423 geprüft, 95 offen
von 518; 7400 Felder (3132 dokumentiert, 4081 unbekannt, 171 Konflikte, 16 Roadmap).
Firmenfokus für 104 von 591 Quellengruppen. Drei Modellidentitäten, neun Listing-
identitäten und 862 Buy-Detailinhalte offen. Vollständige Herstellerabdeckung,
unabhängig exklusive USPs und Markt-/Suchführerschaft bleiben unbewiesen.
Datencommit `67d7b0041be2427046d4cd57771efb08dafb017e` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-114-evidence.json`.


## Ergänzung vom 2. November 2026 – Skydio: Flug-/Ladefenster, Konfigurationen und F10-Roadmap (Batch 115)

R10 und X10 vertieft, X10D und angekündigten F10 Lightrunner ergänzt. Vier Modelle
mit 148 ausgewählten Feldern: 37 dokumentiert, 103 unbekannt, acht Roadmap. 18 neue
Aussagen, netto zwölf Produktquellenverweise und ein neuer Firmenfokus; sechs alte
Aussagen und Entdeckungsprovenienz unverändert. Kein vollständiges historisches
Skydio-Portfolio behauptet; 2/2+/X2 und Vorgänger bleiben Rechercheansätze.

R10: 785 g mit Akku, 263,0 × 260,5 × 61,5 mm. Bis 20 Minuten Flug abhängig von
Licht/Manövern, bis drei Stunden Perch Mode ausdrücklich gelandet. Vorwärtige 180°-
Hindernissicht mit zwei Stereokameras; maximal 12 m/s, mit Vermeidung 8 m/s, im
integrierten sichtbaren NightSense-Modus 4 m/s. 20-m-Erfassungsweite keine Positions-
genauigkeit. Dual-Lader: je Akku 35 Minuten bei 230 W oder eine Stunde bei 100 W,
jeweils 0–100 Prozent. Kein übernommener X10-Ladewert. −20 bis +50 °C laut Daten,
keine Einstufung für dauerhafte Wassereinwirkung; FAQ nicht für Wind/Nässe gedacht.
Kein erfundener IP-Wert. Herstellerartikel vom 17. September 2025 führt R10 ein:
damals Frühzugang Herbst 2025, allgemeine Verfügbarkeit erstes Halbjahr 2026 geplant;
Planung kein heutiger Lager-/Bestellnachweis.

X10: Herstellerstart 20. September 2023. Akkuinklusive Masse Connect SL 2,11 kg,
SL+5G Gen 1 2,14 kg und Gen 2 2,16 kg, MTOW 2,49 kg. Differenzrechnung kein bewiesenes
Frachtlast-Rating. Ausgeklappt mit Propellern 79 × 65 × 14,5 cm, gefaltet ohne Akku
35,05 × 16,51 × 11,94 cm. Bis 40 Minuten Flug unter idealen Laborbedingungen versus
35 Minuten Schwebeflug. September-2025-Artikel nennt ungefähr 30–32 praktische
Flugminuten; Kontexte getrennt, keine universelle garantierte Mindestdauer.
Sechs Navigationskameras/360°, VIO-Schwebepräzision ±10 cm oder GNSS ±1 m im benannten
Windkontext. MP/thermische <30-mK-Empfindlichkeit und Rissbeispiele keine universelle
metrische Inspektionspräzision. Kamerapakete/Revisionsstände bleiben konfigurationsbezogen.

X10-Lader 230 W: rund eine Stunde 0–100 oder 35 Minuten 20–90 Prozent. Bei 100 W:
1 h 47 min beziehungsweise 1 h 12 min. X10D separat: 230 W eine Stunde/35 Minuten,
100 W 1 h 45 min/1 h 10 min für dieselben vollständigen/teilweisen Fenster. Kein
stilles Vereinheitlichen der zwei Modellseiten. Controller fünf Stunden/Controller 2
fünf Stunden 45 Minuten Laufzeit keine Flug- oder Ladezeit. Akku-, Lader-, Controller-
und Fluggerätedaten getrennt; IP55 Fluggerät, Controller IP54/Controller 2 IP55 und
ungeschützter Lader nicht vertauscht. X10-Spezifikation unterscheidet verschlüsselten
internen Speicher von unverschlüsselten SD-Karten.

X10D: eigene Hersteller-Spezifikation, SL 2,11 kg und MH 2,14 kg mit Akku, 2,49 kg
MTOW, IP55, 40 Minuten idealer Laborflug, 35 Minuten Schweben, 20 m/s maximal,
16 m/s mit Vermeidung. Keine übernommenen X10-Mobilfunkgenerationen oder berechnete
Frachtlast. Bereits im X10-Startartikel 2023 benannt; exakter erster öffentlicher
X10D-Start daraus nicht behauptet. Blue-UAS-/NDAA-/Sicherheitswerbung bleibt
Herstellerangabe ohne unabhängiges aktuelles Register-/Sicherheitsaudit oder
universelle Nutzer-, Standort- und Fluggenehmigung.

F10 Lightrunner: Herstellerartikel vom 24. September 2026 plant Kundeneinsätze 2027.
Artikel vom 17. September 2025 hatte F10 unter Entwicklung mit über 80 mph, mehr als
90 Minuten und Frühzugang erstes Halbjahr 2026 als Ziele beschrieben. Spätere Werte
100 mph/120 Minuten und 2027-Plan getrennt vom alten Ziel; keine bewiesene Erfüllung,
kein erfundenes unabhängig eigenständiges Prototyp-Produkt. Erscheinungsjahr nicht
mit geplantem erstem gelieferten Einsatz gefüllt. Aktuelle acht technische Felder
als Roadmap: 7 kg mit Akkus, 57,8 × 33,9 × 7,7 in, maximal 100 mph/44 m/s, 120 Minuten,
IP55, 45 Minuten Teilladen 10–90 Prozent, −20 bis +55 °C am MegaDock gemessen,
12 m/s Start-/Landewindlimit und autonome Flug-/RTOL-Funktionen. Kein vollständiges
0–100-Prozent-Ladefenster aus Teilzyklus abgeleitet.

MegaDock: bis fünf F10, beispielhaft drei in der Luft/zwei laden, automatische
Ablösung. Flottenzyklen kein 24-Stunden-Einzelflug. 6900 lb Gesamtstationsmasse,
IP54 im Betrieb/IP56 im Standby, 18,033 kW Spitzenleistung und Platz-/Anschlussbedarf
keine Fluggerätedaten. 30-Meilen-Radius/ungefähr 2800 Quadratmeilen Abdeckung keine
unbegrenzte Funkreichweite oder Fluggenehmigung. Vorwärtige 100 m/obere-untere 20 m
Sensorweite im Datenblatt versus 300 ft Wahrnehmungstext im Produktmarketing mit
Kontext bewahrt, nicht zur Positionspräzision erklärt. Aircraft-IP55 nicht mit
Stationsschutz verwechselt.

DFR/Asset/Security/ISR Command, Ops Center, Remote Flight Deck, Paraverse, Controller,
VT300, NightSense, NVIDIA und Anbauteile sind Software-/Integrations-/Zubehörrollen.
September-2026-Artikel unterscheidet bereits ausgelieferten VT300-Z Rev 2 von geplanten
Softwarefunktionen und allgemeiner Verfügbarkeit. Schutzfallschirm-/FAA-/NDAA-/Blue-UAS-,
Only-/Best- und Erfolgswerbung keine unabhängig geprüfte pauschale Zulassung,
Sicherheitsgarantie, exklusive USP oder Markt-/Suchführerschaft. Keine exakten
Komplettpreise oder aktuellen Lagerbestände nachgewiesen.

18 öffentliche Antworten mit SHA-256: 17 HTTP 200, ein ungenutzter Sitemap-404.
Aktuelle HTML-Spezifikationen/FAQ/Produkte und datierte Volltexte. Raw-HTML-time und
BlogPosting-datePublished stimmen für 20. September 2023, 17. September 2025 und
24. September 2026 überein; dateModified ist kein erster Modellstart. Extraktion
hat Artikelheader entfernt, daher Datumsprüfung im gespeicherten Roh-HTML.
Keine PDF-/Bild-/Video-/CAD-Sichtprüfung, Formulare, Demos, Kontakte oder Transaktionen.

2137 andere alte CSV-Zeilen, alle 937 alten Feldprüfungen, 108 alten Firmenfokusse,
1049 andere Produktbelege und 1961 Quellenidentitäten erhalten. Keine neuen Spalten
oder Anwendungscodeänderung. 807 Unit-Tests/64 Dateien, 20 Desktop-/Mobilfälle mit
vier Axe-Läufen, 3191 Buildseiten, Lint/Format, Refresh und Wiederimport bestanden.
Audit null Fehler/1032 Hinweise: R10/X10-Startjahre belegt; X10D/F10 ohne erfundenes
erstes Erscheinungsjahr. Vier Seiten/148 Felder/24 Aussagen, ein Firmenfokus,
strukturierte Eigenschaften, zwei Modell-Exportziele/74 Felder und zwei ursprüngliche
Queue-Ziele/74 Felder geprüft. Keine Firmenbeschreibungs-Produktreferenz dieser Gruppe.
Vergleich 1053 Produktbelege, 4706 Aussagen, 2167 Quellenverweise, 941 Prüfungen/16759
Felder. Eigene Browser-/Server-/Hilfsprozesse beendet, Port 4321 frei. Kein Deployment.
Externe YouTube-Frame-Befunde aus Batch106 bleiben ungelöst.

Gesamt 2141 Modelle/Konfigurationen, 887 Ergänzungen, 166 bestehende Modelle mit
Merkmalsanreicherung, 109 Firmenfokusse. Ursprüngliche Ziele: 425 geprüft, 93 offen
von 518; 7474 Felder (3155 dokumentiert, 4132 unbekannt, 171 Konflikte, 16 Roadmap).
Firmenfokus für 105 von 591 Quellengruppen. Drei Modellidentitäten, neun Listing-
identitäten und 862 Buy-Detailinhalte offen. Vollständige Herstellerabdeckung,
unabhängig exklusive USPs und Markt-/Suchführerschaft bleiben unbewiesen.
Datencommit `fee20d543ad0c1af4961f590a9bf196975a05b32` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-115-evidence.json`.


## Ergänzung vom 2. November 2026 – Oceanbotics und ULC Technologies (Batch 116)

Vier vorhandene Einträge vertieft: SRV-8, SRV-8X OPTIMUS, CISBOT und AUSMOS.
18 benannte Modelle/Konfigurationen ergänzt: SRV-8C, SRV-8X OPTIMUS ATS, SRV-8X MDV;
12-inch CISBOT, RRES, Panel Carrier Robot, Panel Setting Robot, Circuit Breaker
Racking Robot, Large VGC, Small VGC, M1 Crawler, MCC, CIRRIS XI, CIRRIS XR,
Leak Detection and Repair Robot, Bombyx, H1000 und V3000. Benannte Konfigurationen
sind keine Behauptung 18 unabhängiger neuer Grundchassis. 814 ausgewählte Felder:
93 dokumentiert, 707 unbekannt, vier Konflikte, zehn Roadmap. 57 zusätzliche Aussagen
und netto 47 Produktquellenverweise. Oceanbotics-Firmenfokus erweitert, ULC neu;
zwölf alte Produktaussagen, zwei alte Oceanbotics-Firmenaussagen und Entdeckungs-
provenienz erhalten. ULC Technologies bleibt Hersteller, ULC Robotics Markenalias.

Oceanbotics: HTML-Spalten und Datenblatt-OCR trennen SRV-8 18,6 kg von 13,2 kg ohne
Akkus und SRV-8X 32 kg von 24 kg ohne Akkus. Maße 50×43×41 beziehungsweise
64×51×43 cm; bis acht Stunden mit zwei Wechselmodulen, optionale Oberflächen-
stromversorgung separat. Standard 350 m, SRV-8X 500/1200 m nur konfigurationsbezogen.
Herstellerhistorie: erster SRV-8-Kundenversand 13. Mai 2019; SRV-8X-Start 22. März
2023. Entwicklungsbeginn, Firmen-/Divisionsgründung und PDF-Upload keine universellen
Modellstarts. Widerspruch Seilbruchlast: HTML Kupfer 544/Faser 350 kg versus OCR
Kupfer 350/Faser 544 kg, mit separater 340-kg-Option. Ursache ungelöst; keine Frachtlast.

SRV-8C: eine Transportkiste, bis vier Stunden, ein Wechselmodul, acht Thruster,
4K und 3000 Lumen. OCR 46×37×39 cm, numerisch 13 als Gesamtmasse und 10 kg ohne Akku;
Gesamteinheit bei 300 dpi als kg, Alternativausschnitt bei 450 dpi als ks gelesen.
Diese Extraktionsunsicherheit bleibt ausdrücklich sichtbar; keine Sichtprüfung
behauptet. Tiefenwiderspruch Produktseite 305 m/1640 ft versus Blatt 350 m/1148 ft
und Auswahlhilfe vom 4. September 2026 mit 350 m. Keine stille Korrektur oder sichere
Einsatztiefe abgeleitet. ATS separat: verlinktes historisches Konfigurationsblatt
25 kg, 64×51×43 cm, 500 m, vier bis sechs Stunden, 1080p mit optional 4K; nicht mit
aktueller Standardplattform überschrieben. Sechs Bewegungsfreiheiten gehören dem
Fahrzeug. MDV nur allgemeine Identität/Rolle für spezialisierte Räumteams; laut
Hersteller Standardplattform mit Zubehör, keine vererbten konfigurierten Ratings
oder Zubehör-Betriebsverfahren. SubNav, TPS, Stationen, Ortung und Fremdwerkzeuge
bleiben Komponenten-/Softwarerollen.

ULC: CISBOT 12–48 Zoll ist Familien-/Serviceumfang, 12-inch CISBOT gesonderte
Entwicklung 2022–23 mit Projektberichten aus März/Juni 2025. Bis 110 Verbindungen
oder 1400 Fuß je Zugang keine Körpermaße oder garantierte Stundenleistung;
Projektkosten kein Roboterpreis. AUSMOS 108 lb ohne Akkus, 28,4×21,8×35,9 in,
3,5 Stunden je Wechselpack, −20 bis +35 °C. Bediener positioniert/programmiert,
danach autonomer LiDAR/GPR/EM-Scan. Zentimetergenaue Lokalisierung ohne exakten
Fehlerbereich keine garantierte Erkennung aller unterirdischen Leitungen.

RRES: Portfolio sagt entwickelt, Projektseite weiterhin in Entwicklung/zukünftig;
Reifegrad ungelöst, geplante Funktionen Roadmap. Solar-Carrier und Setting sind
getrennte Plattformen mit Rosendin; weniger als eine Minute je installiertem
Panel ist eine Aussage zur Gesamtlösung mit menschlicher Mitarbeit. Keine
Carrier-Transportleistung oder numerische Traglast daraus. Breaker Racking mit
Con Edison bleibt Entwicklung; 1200/3000 A sind elektrische Schalterklassen,
keine Kilogramm. M1 24–48, Large VGC 18–48 und Small VGC 12–16 Zoll beschreiben
Rohranwendungen. MCC ein Zoll hoch, sonstige Maße unbekannt; Type I/II Sensor-
konfigurationen kein erfundenes separates Chassis. CIRRIS XI Inspektion und XR
Reparatur bleiben getrennt; Reichweite/Verbindungen je Zugang keine Stundenrate.

Leak Detection and Repair: DOE-Phase-II-Prototypankündigung vom 14. Oktober 2019;
bis zwei Jahre Haltbarkeit einer geplanten Reparatur keine Akkulaufzeit. Bombyx:
Zusammenarbeit mit Facebook Connectivity, Entwicklungsartikel vom 12. Juli 2020
kein aktueller Liefernachweis oder exklusives Eigentum. H1000 nur benannte
Flugplattform ohne erfundene Daten. V3000 Hybrid-VTOL fünf-plus-Stunden-Flugziel
bleibt Roadmap, keine gemessene Akkudauer. Kameras PRX, X-ID/EMAT, AIM-Fahrzeuganalytik,
Druck-/Spülgeräte und Kabelvorbereitungsmaschine sind gesonderte Rollen. Alter
Splicing-Link leitet auf dasselbe Kabelgerät weiter, kein zusätzliches Robotermodell.

32 öffentliche HTTP-200-Antworten mit SHA-256, darunter eine doppelte Zielseite.
HTML-Tabellenüberschriften/Zellen und strukturierte Publikationsmetadaten geprüft.
Drei bildbasierte PDF-Seiten ohne nativen Text mit isoliertem lokalem OCR-Lauf;
Text, Konfidenz und Wortkoordinaten sowie unabhängige Ausschnitt-OCR geprüft.
Ein zweiseitiges ATS-PDF mit nativem Text/Wortkoordinaten. Bildanzeigewerkzeug war
nicht verfügbar; keine erfolgreiche visuelle PDF-/Bild-/Video-/CAD-Prüfung.
Keine globalen Paketänderungen, Formulare, Kontakte oder Transaktionen.

2137 andere alte CSV-Zeilen, alle 941 alten Feldprüfungen, 108 andere Firmenfokusse,
1049 andere Produktbelege und 1961 Quellenidentitäten unverändert. Ein bestehender
Integrationstest deckte nicht unterstützte Filtertags auf; passende Forschungs-
beziehungsweise Bauzuordnung ergänzt, keine Filterlogik/Testanforderung abgeschwächt.
807 Unit-Tests/64 Dateien, 24 Desktop-/Mobilfälle mit vier Axe-Läufen, 3209 Buildseiten,
Lint/Format, Refresh und Wiederimport bestanden. Audit null Fehler/1048 Hinweise:
18 neue unbekannte Erststarts minus zwei belegte bisherige Oceanbotics-Startjahre.
22 Modellseiten/814 Felder/69 Aussagen, zwei Firmenfokusse, strukturierte Daten,
drei Modell-Exportziele/111 Felder und vier ursprüngliche Queue-Ziele/148 Felder
geprüft. Vergleich: 1071 Produktbelege, 4763 Aussagen, 2214 Quellenverweise,
963 Prüfungen/17573 Felder. Eigene Browser-/Server-/Hilfsprozesse beendet,
Port 4321 frei. Kein Deployment. Externe YouTube-Frame-Befunde aus Batch106 ungelöst.

Gesamt 2159 Modelle/Konfigurationen, 905 Ergänzungen, 166 bestehende Modelle mit
Merkmalsanreicherung, 110 Firmenfokusse. Ursprüngliche Ziele: 429 geprüft, 89 offen
von 518; 7622 Felder (3183 dokumentiert, 4250 unbekannt, 173 Konflikte, 16 Roadmap).
Firmenfokus für 106 von 591 Quellengruppen. Drei Modellidentitäten, neun Listing-
identitäten und 862 Buy-Detailinhalte offen. Vollständige Herstellerabdeckung,
unabhängig exklusive USPs und Markt-/Suchführerschaft bleiben unbewiesen.
Datencommit `722b489d9675b39dbc45d38fa153f092de0b7d33` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-116-evidence.json`.


## Ergänzung vom 2. November 2026 – Intuitive: Systemgenerationen und Quellenrollen (Batch 117)

Sieben vorhandene da-Vinci-Generationen vertieft: Standard, S, Si, Xi, X, SP und 5.
Ion IF1000 und historisches da Vinci SP999 als zwei ausdrücklich benannte Systeme
ergänzt. Neun Einträge mit 333 ausgewählten Feldern: 42 dokumentiert, 291 unbekannt,
keine neuen Konflikt-/Roadmap-Felder. 37 zusätzliche Merkmalsaussagen und netto
23 Produktquellenverweise, ein neuer Firmenfokus. 21 alte Produktaussagen und
Entdeckungsprovenienz bleiben erhalten. Keine vollständige historische Varianten-
oder aktuelle weltweite Zulassungsabdeckung behauptet.

Frisch abgerufener eigener FY2025-Form-10-K-Bericht bei der SEC datiert die
Kommerzialisierung: Standard 1999, S 2006, Si 2009, Xi 2014, X 2017, SP 2018,
5 2024 und Ion 2019. Historische Generation und Kundenbestand kein aktueller
Neugeräte-/Lager-/Supportnachweis. Standardstart 1999 getrennt von erster US-
Freigabe 2000. FDA-Änderungs-/Software-/Kennzeichnungsdaten keine neuen Erststarts.

SP999: ausdrücklich benanntes historisches Modell in K131962, FDA-Entscheidung
17. April 2014. SP1098 aus K173906, FDA-Entscheidung 31. Mai 2018, nennt SP999
als separates Vorgängermodell. Kommerzialisierung SP1098 laut Firmenbericht 2018.
Für SP999 bleibt ein kommerzielles Erstjahr unbekannt; 2014 keine erfundene
Auslieferung oder aktuelle Verkaufsverfügbarkeit. Ein Arm mit vier Antrieben für
Kamera/Instrumente ist keine universelle Vier-DOF-Ganzsystemangabe.

Da Vinci 5 IS5000: erstes dokumentiertes US-Verfahren K232610 vom 14. März 2024;
kompatible Force-Feedback-Instrumente nicht pauschal alle Werkzeuge/Verfahren/
Länder oder frühere Generationen. Bericht nennt einstellbare Konsole, 3D-Bildgebung
und mehr als 10000-fache Xi-Rechenleistung als Herstellervergleich, ohne unabhängig
geprüften Benchmark oder daraus abgeleitete klinische Überlegenheit. K261823 vom
8. September 2026 betrifft Multi-arm Targeting als Softwareänderung bei unveränderter
Zweckbestimmung innerhalb dieser Einreichung. Kein neues Grundchassis, keine
Behauptung, alle installierten Systeme hätten diese Revision; FY2025-Restriktionen
kein vollständiges heutiges weltweites Zulassungsverzeichnis.

Xi IS4000 und X IS4200 bleiben getrennt. Die geprüften späteren K152578/K202834-
Einreichungen sind Kennzeichnungsänderungen ohne Änderung technischer Merkmale.
K171294 ist ein FDA-Entscheidungsschreiben zu X vom 26. Mai 2017, kein technisches
Maßblatt. Integrated Table Motion laut Firmenbericht Standard bei 5, Upgrade bei
Xi, kompatibler fremder Operationstisch separat. X übernimmt keine Xi-Tischfunktion
oder 5-Force-Feedback-Eigenschaften. Si IS3000 wird gegenüber S IS2000 abgegrenzt;
optionale zweite Konsole für Unterstützung/Ausbildung kein weiterer Grundroboter.

Ion IF1000: eigener Endoluminalroboter, Kommerzialisierung 2019 und FDA K182188
vom 14. Februar 2019 getrennte Meilensteine. PlanPoint-Laptop mit CT-basiertem
Modell, Systemwagen, ärztliche Steuerung, Katheter, Sichtsonde und Biopsiewerkzeuge
sind getrennte Rollen. Echtzeit-Formmessung und Leader-Follower-Steuerung keine
autonome Biopsie, genaue metrische Positionstoleranz oder garantierte Diagnose.
180 Grad Katheterartikulation kein Ganzsystem-DOF oder Außenmaß. K252045 von
September 2025 bleibt eine IF1000-Revision, kein neuer Erststart.

Konsolen, Patientenwagen, Sichtwagen, Instrumente, Endoskope, Firefly, Nadeln,
Zugangsports, Energie-/Insufflationstechnik und SimNow/My Intuitive/Hub/Learning/
Case Insights/Insights Engine/3D Models keine erfundenen zusätzlichen Robotermodelle.
Unternehmensweite Systempreisspanne 0,7–3,1 Millionen USD einschließlich bestimmter
Serviceleistungen, Prozedur-/Instrumentenumsätze und Service-/Leasingkosten keine
exakten Modellpreise. Klinische Fallzahlen/Studienzeiträume keine garantierte
Einzelroboterleistung. Komponentenmaße/Gewichte, Ports und Werkzeugkräfte werden
nicht in Ganzsystem-Größe, Masse, Frachtlast oder Präzision übertragen.

Quellenrolle `regulator` neu: datierte Behördenbelege werden als Regulatory authority
source beziehungsweise Quelle der Aufsichtsbehörde angezeigt. Hersteller-eigene
SEC-Berichte und bei FDA gehostete Herstellereinreichungen bleiben Manufacturer
source; FDA-Register und reines FDA-Entscheidungsschreiben sind Behördenquellen.
Keine SEC-/FDA-Empfehlung oder universelle aktuelle Sicherheits-/Verfahrenszulassung
abgeleitet. Neuer Unit-Test prüft die Trennung und verwirft undatierte Behördenbelege;
Browserprüfung prüft englische/deutsche Vergleichskennzeichnung und Linkrollen.

20 öffentliche HTTP-Antworten mit SHA-256: 18 HTTP200, zwei403. Davon ist ein
200er eine 212-Byte-Incapsula-Schutzseite ohne Produkttext; diese und beide403 sind
als Produktbeleg ausgeschlossen. Nach Sperre keine weiteren Abrufe desselben
Hosts, keine Umgehung. Erreichbare SEC-Datei, elf FDA-PDFs mit nativem Text/
Wortkoordinaten und fünf FDA-API-Antworten geprüft. API-Datenstand 19. Oktober 2026,
nicht Abruf-/Modellstartdatum. Vollständig abgerufene Abfragen: elf Ion-Treffer,
28 ausgewählte IS-Modelltreffer und 26 SP-Treffer; enthalten Werkzeuge/Updates,
keine entsprechenden Roboterzahlen und keine vollständige Weltzulassungsliste.
Da-Vinci-5-Freitextabfrage fand nur Kamera-/Firefly-Zubehör; Modellnummernabfrage
fand vollständige Systeme. Kein bloßer Suchworttreffer wird zum neuen Grundroboter.
Keine visuelle PDF-/Bild-/Video-/CAD-Prüfung, Formulare, Kontakte, Transaktionen oder
klinische Verfahrensempfehlungen.

2152 andere alte CSV-Zeilen, alle 963 alten Feldprüfungen, 110 Firmenfokusse,
1064 andere Produktbelege und 1961 Quellenidentitäten unverändert. Keine neuen
CSV-/Vergleichsfelder oder Markenabgleichsänderungen. Kleine Anwendungserweiterung
für Behörden-Quellenrolle und EN/DE-Texte sowie Korrektur der aktiven Vergleichssprache,
ohne neue Rollen für Sekundärpublikationen.
Zwei anfängliche Quellenrollentests prüften fälschlich nur den Link statt seines
Listeneintrags; Vergleichsspeicher wird jetzt vor Anwendungsinitialisierung gesetzt.
Danach deckte der URL-Sprachtest einen echten Fehler auf: Vergleich las gespeichertes
Englisch trotz aktiver deutscher URL-Sprache. Vergleich nutzt nun aktive UI-Sprache
vor Speicher-Fallback, einschließlich Schaltflächen. Dauerhafter Regressionstest
prüft deutsche URL bei englischem Speicher; bestehender Sprachwechseltest nutzt
das tatsächliche Auswahl-Änderungsereignis. Keine Anforderungen abgeschwächt.
808 Unit-Tests/64 Dateien, 44 Desktop-/Mobilfälle mit acht Axe-Läufen, 3211 Buildseiten,
Lint/Format, Refresh und Wiederimport bestanden. Audit null Fehler/1049 Hinweise;
ein neuer Hinweis für unbekannten kommerziellen SP999-Start. Neun Modellseiten,
333 Felder, 58 Aussagen, ein Firmenfokus, strukturierte Daten, ein gruppierter
Modell-Exportdatensatz mit sieben Zielen/259 Feldern und sieben ursprüngliche
Queue-Ziele geprüft. Vergleich: 1073 Produktbelege, 4800 Aussagen, 2237 Quellen-
verweise, 972 Feldprüfungen/17906 Felder. Eigene Browser-/Server-/Hilfsprozesse
beendet, Port4321 frei. Kein Deployment. Externe YouTube-Frame-Befunde aus Batch106
bleiben ungelöst.

Gesamt 2161 Modelle/Konfigurationen, 907 Ergänzungen, 166 bestehende Modelle mit
Merkmalsanreicherung, 111 Firmenfokusse. Ursprüngliche Ziele: 436 geprüft, 82 offen
von 518; 7881 Felder (3216 dokumentiert, 4476 unbekannt, 173 Konflikte, 16 Roadmap).
Firmenfokus für 107 von 591 Quellengruppen. Drei Modellidentitäten, neun Listing-
identitäten und 862 Buy-Detailinhalte offen. Vollständige Herstellerabdeckung,
unabhängig exklusive USPs und Markt-/Suchführerschaft bleiben unbewiesen.
Datencommit `2033ce908590a5eade00fafddd3638e8b88b839d` gepusht, Main unverändert.
Nachweis: `reports/competitor-batch-117-evidence.json`.

## Ergänzung vom 2. November 2026 – ABB: datierter Cobot-Bestand und Modellspalten (Batch 118)

Zwei vorhandene YuMi-Einträge vertieft, fünf ausdrücklich benannte Einträge ergänzt:
GoFa 5/10/12 CRB 15000 und SWIFTI CRB 1100/1300. Sieben Einträge mit 140
geprüften Feldern: 62 dokumentiert, 78 unbekannt. 28 neue Merkmalsaussagen,
netto fünf Produktquellenverweise und ein Firmenfokus. Sechs alte Aussagen und
Entdeckungsprovenienz bleiben erhalten. Die Quelle ist die frisch abgerufene
ABB-Cobot-Broschüre mit Copyright 2023; die Datierung bleibt bei den Zahlen sichtbar.
Kein vollständiger aktueller ABB-Industrie-/Mobil-/Delta-/Lackier-/Altbestand behauptet.

Die Auswahlmatrix auf physischer PDF-Seite 1 (gedruckt Seite 16) enthält sieben
beschriftete Modellspalten. Alle verwendeten Zahlen über native Text-/Wortkoordinaten
innerhalb der jeweiligen Spalte geprüft; keine visuelle PDF-/Bildprüfung. Die
Herstellerquelle und ihre SHA-256 sowie die Spaltenrechtecke und Wortbelege sind
im dauerhaften Bericht `reports/competitor-batch-118-evidence.json` festgehalten.

YuMi IRB 14000: 14 Gesamtachsen, 38 kg einschließlich IRC5, 0,5 kg und 0,56 m
je Arm, 1,5 m/s maximal, 0,02 mm Pose-Wiederholbarkeit, IP30, ISO Clean Room 5,
Tischmontage, Category B/PL b. IRB 14050: sieben Achsen, 9,6 kg, 0,5 kg/0,56 m,
1,5 m/s, 0,02 mm, IP30, ISO Clean Room 6, OmniCore, beliebige Montage,
Category 3/PL d. Keine Übertragung von integriertem Controller, Masse oder
Sicherheitsniveau zwischen den Modellen. Wizard im YuMi-Text ausdrücklich nur
für Single-arm YuMi; bei Dual-arm nicht als vorhandene Funktion angenommen.

GoFa 5/10/12: je sechs Achsen, 5/10/12 kg, 1,05/1,62 TCP/1,37 m und
28/51/48 kg in getrennten, benannten Spalten. Höchstgeschwindigkeiten 2,2/2/2 m/s,
Wiederholbarkeit jeweils 0,02 mm. GoFa 5 IP54, GoFa 10 IP67. GoFa 12 hat in
der Quelle wörtlich `IP567`; kein gültiger Zahlenwert erfunden, das IP-Feld bleibt
offen mit ausdrücklicher Feldnotiz. Integrierte Drehmomentsensoren, Wizard,
Handführung, Statuslicht und Arm-Bedienung als Herstellermerkmale paraphrasiert.

SWIFTI CRB 1100: 4 kg, 21 kg, Reichweiten 0,58/0,475 m, maximale TCP-Werte
5,05/4,32 m/s, 0,01 mm Wiederholbarkeit, IP40 Standard. CRB 1300: Lasten
7/10/11 kg, Reichweiten 0,9/1,15/1,4 m, Massen 75/77/79 kg, maximal 6,2 m/s,
0,02 mm Wiederholbarkeit, IP40 Standard/IP67 optional. Die Auswahlmatrix paart
diese Familienlisten nicht eindeutig zu exakten Varianten; daher keine Zuordnung
nach Textreihenfolge und keine daraus erfundenen zusätzlichen Einzelmodelle.
CRB 1100s 0,01 mm nicht aus allgemeiner SWIFTI-Werbung auf CRB 1300 übertragen.

SWIFTI nutzt SafeMove und Sicherheitssensorik zum Stoppen vor Kontakt; Handführung
mit externem Gerät. Maximale TCP-Geschwindigkeit ist keine pauschal sichere
Kollaborationsgeschwindigkeit. Die Quelle nennt niedrigere sichere Geschwindigkeit
und anwendungsbezogene Risikobeurteilung. Werkzeug-/Werkstückgefahren qualifizieren
Zaunfreiheit. Pose-Wiederholbarkeit ist keine absolute Positionier-/Prüfgenauigkeit;
Reinraumpositionierung und Roboterschutz keine vollständige Zellenzertifizierung.
IRC5/OmniCore, SmartGripper, Vakuum/Vision, Scanner, Lehrgerät und Wizard/RobotStudio
bleiben Steuerungs-, Werkzeug-, Sensor- oder Softwarerollen. AGV-Montage keine
mitgelieferte Mobilbasis; 24/7-Serviceüberwachung keine Roboterlaufzeit/Batteriedauer.
Copyright 2023 und ABB-Firmengeschichte ab 1974 keine Modell-Erststartdaten.

Eine erfolgreiche öffentliche PDF-Antwort HTTP200, ein zusätzliches Datenblatt
HTTP403 ohne Produktbeleg. Danach keine weiteren Abrufe von library.e.abb.com.
Produktseiten-Abrufe über new.abb.com ohne nutzbare Antwort beendet; www.abb.com
mit Read-Timeout, HTTP/2-Transportfehler und begrenzter HTTP/1.1-Probe ohne Antwort.
Ein Suchhinweis auf neuere GoFa-Traglasten ist kein gespeicherter Primärbeleg und
wurde nicht in die Spezifikationen übernommen. Aktuelle GoFa-Revisionen bleiben
ein offener Recherchepunkt. Keine Zugriffsumgehung, Formulare, Kontakte oder
Transaktionen. Keine visuelle PDF-/Bild-/Video-/CAD-Prüfung.

2159 andere alte Katalogzeilen, alle 972 alten Feldprüfungen, 111 alte Firmenfokusse,
1071 andere Produktbelege und 1961 Quellenidentitäten unverändert. Keine neuen
CSV-/Vergleichsfelder, Markenabgleichs- oder Anwendungslogikänderungen. Ein dauerhafter
Test aktualisiert ausschließlich die Bestandszahlen. Die 20 ausgewählten Desktop-/
Mobil-Browserfälle prüfen die ABB-Daten einschließlich vier Axe-Läufen.
808 Unit-Tests/64 Dateien, 3216 Buildseiten, Lint/Format, Refresh und Wiederimport
bestanden. Audit null Fehler/1054 Hinweise: fünf neue Hinweise nur für unbekannte
Erststartjahre, keine Copyright-Jahre als Releases eingesetzt. Sieben Modellseiten,
140 Felder, 34 Aussagen, ein Firmenfokus und strukturierte Daten geprüft. Ein gruppierter
Modell-Export mit zwei Zielen/40 Feldern und zwei ursprüngliche Queue-Ziele geprüft.
Vergleichsausgabe: 1078 Produktbelege, 4828 Aussagen, 2242 Quellenverweise,
979 Feldprüfungen/18046 Felder. Eigene Testbrowser, Server und Recherchehelfer beendet.
Die früheren externen YouTube-Frame-Befunde aus Batch 106 bleiben offen.

Katalog jetzt 2166 Einträge mit 912 Aufgabenergänzungen; insgesamt 18046 Felder:
6829 dokumentiert, 10850 unbekannt, 274 widersprüchlich, 93 Roadmap.
Die ursprüngliche Queue hat 438 geprüfte und 80 offene Ziele; 7921 Felder:
3234 dokumentiert, 4498 unbekannt, 173 widersprüchlich, 16 Roadmap.
112 Firmenfokusse insgesamt; Quellen-Firmengruppen mit eigenem Fokus 108/591.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte weiterhin
offen. Vollständigkeit, exklusive USPs, Suchrankings und Marktführerschaft unbewiesen.
Datencommit `894916c94d52a57d8f66dc91f138395a1ff73b19` gepusht; Dokumentationsnachweis folgt separat auf
`codex/competitor-directory-expansion`. Kein Deployment; `main` unverändert.

## Ergänzung vom 2. November 2026 – Ambi Robotics: Anlagen, Einheiten und Primärstarts (Batch 119)

AmbiSort A-Series und AmbiStack vertieft, AmbiSort B-Series und AmbiKit als zwei
benannte Gesamtsysteme ergänzt. Vier Modelle/Familien mit 148 ausgewählten Feldern:
21 dokumentiert, 127 unbekannt. 21 neue Merkmalsaussagen, netto 15 zusätzliche
Produktquellenverweise. Vorhandenen Firmenfokus um sieben Aussagen erweitert;
beide alten Firmenaussagen, sechs alte Produktaussagen und Entdeckungsprovenienz
bleiben erhalten. Keine vollständige historische Konfigurationsabdeckung behauptet.

Primäre Einführungsmeldungen durch sichtbares HTML-Seitendatum, Text und WebPage-
`datePublished` geprüft: AmbiKit 27. Juli 2021, B-Series 6. Juni 2023, AmbiStack
28. Januar 2025. AmbiKit-Mediennachricht vom 28. Juli ist keine Erstmeldung.
Generisches AmbiSort laut eigener Historie 2020 in Produktion; das ist kein belegter
Erststart der ausdrücklich benannten A-Series. Q3-2022-Firmendeck enthält
A-Series-Produktstartlabel und A-Series-v2-Schema, aber keine aus Textreihenfolge
oder unbestätigter Zeitachsen-Geometrie erfundene Jahreszuordnung. A-Series-
Erstjahr bleibt offen; das v2-Schema kein zusätzlich erfundenes Einzelmodell.

A-Series: Soft-touch-Greifer, vier Barcodescanner, zwei Qualitätskontrollzonen,
Puffer und Gantry-Übergabe, Sack-/Tote-Ausgänge und Bin-/Conveyor-Eingang.
Bediener verschließen und tauschen volle Säcke. Aktuell angezeigte 66 Ziele sind
laut Konfigurator ein Platzhalter; das ältere Deck nennt 66 Säcke für eine
bestimmte historische Pitney-Bowes-Installation. Keine pauschale Zielzahl übertragen.
Primärer Firmen-Fallbericht vom 22. November 2024: 355 Sortierungen/h und 99 Prozent
im Peak 2022, 410/h im Peak 2023, 500/h und 99,6 Prozent nach Updates für 2024.
Datiertes Kundenbeispiel, keine universelle heutige Mindestkapazität oder metrische
Prüfpräzision. Visuelle Doppelpick-Kontrolle, Material-/Dimensionsanalyse und
Benachrichtigungen als Herstellermerkmale, ohne ungenannte Zahlengenauigkeit.

B-Series: Einführung nennt über 1200 Pakete/h. Der verlinkte 2023-Leitfaden
kennzeichnet die Daten als Drei-Greifzellen-Konfiguration. Der aktuelle Konfigurator
nennt zusätzlich 500 Sortierungen/h je hinzugefügter Pickzelle. Unterschiedliche
Datums-/Konfigurationskontexte, kein 1200/h-Einarmversprechen oder errechnetes
universelles lineares Anlagenmodell. Mehrfach-Saug-Greifer, Puffer/Zentralförderer,
sechsseitiger Scantunnel, optionale WMS-Zielinformation und Füllstandsüberwachung
mit Bedienerhinweisen. Über 99,5 Prozent Genauigkeit in der Einführung getrennt
von Sortierbarkeit, richtigem Ausgang und gewünschter Verfügbarkeit im Leitfaden.
Keine Prozentzahl als Dimensionspräzision oder unabhängige Zertifizierung ausgegeben.

AmbiStack: FAQ nennt 50 lb je Karton und 52 × 32 × 32 in Kartonmaße.
Keine Maschinenmasse, Außenmaße, Gesamtpalettenlast oder durch Addition erfundene
100-lb-Multipick-Traglast. Zwei Kartons gleichzeitig ist kein absoluter Durchsatzwert.
Sechs/zwölf/mehr Ausgänge, Zwei-Maschinen-Aufbau und verschiedene Behältertypen
sind Konfigurationsoptionen. Keine daraus erfundenen Einzelmodelle oder pauschalen
Stapelhöhen. Lichtvorhang-Zonen erlauben Palettenwechsel in einer Hälfte bei
Stapeln in der anderen; Bediener und externe AMRs/AGVs bleiben separat.

Einführung vom Januar 2025 prognostizierte erste Einsätze ab Jahresmitte bis Herbst
und Kapazitätsausbau Anfang 2026; keine damalige Planangabe als heute garantierter
Lagerbestand interpretiert. Herstellerbericht vom 30. Juni 2026 bestätigt separat
eine Integration: Pickle Robot entlädt Trailer, Förderer führen Kartons AmbiStack
zum Identifizieren/Scannen/Stapeln zu. Partner-Entladung keine eigene AmbiStack-
Bordfunktion oder zusätzliches Ambi-gefertigtes Modell. Zählwerte der Sack-/
Palettenausgänge und Partnerfahrzeuge bleiben von Hardware-DOF und Mobilität getrennt.

AmbiKit: Primäre Einführung beschreibt eine bereits produktiv eingesetzte
Fünf-Roboter-Picklinie mit bis zu 60 Einzelartikeln/min. Aktuelle Produktseite
nennt 12 vollständige Kits/min und Auswahl von bis zu 15 SKUs. Keine Division zu
erfundener fester Fünf-Artikel-Kitlänge, keine fünf Gesamtachsen und keine 15
Robotermodelle. Bediener bereiten Produkte vor, füllen nach und verpacken Kits.
99 Prozent vollständige Kits und mehr als 99 Prozent Auftragsgenauigkeit sind
unterschiedliche Hersteller-Kennzahlen, keine garantierte universelle Quote.

AmbiOS, PRIME-1, Sim2Real, AI Skill Suite und AmbiAccess behalten Software-/AI-/
Analyse-/Service-Rollen. AmbiVision ist ein OCR-/Barcode-/Dimensions-Scantunnel mit
lokaler Verarbeitung und WMS-Anbindung, kein weiterer artikulierter Handhabungsroboter.
Künftige Wiege-/Schaden-/Label-/Kartonöffnungsfunktionen bleiben als Zukunftsoptionen
qualifiziert; kostenloser 30-Tage-Test keine Anlagen-Kaufpreisangabe. Flottenvolumen
über eine Million Pakete/Woche, 10.000-fache Trainingswerbung, Uptime-/ANSI-/
Sicherheitsclaims und 24/7-Service keine Einzelsystem-Kapazität, Batterie-/Laufzeit,
unabhängige Zellenzertifizierung oder exklusiver USP.

27 gespeicherte öffentliche HTTP-Antworten mit SHA-256: 26 HTTP200, eine ungenutzte
404. Zwei Lösungsleitfäden haben defekte native Unicode-Zuordnung. Elf Seiten mit
isoliertem Tesseract-5.5-Lauf und 220 dpi maschinell extrahiert, zusätzlich ausgewählte
Spezifikationsbereiche mit 450 dpi. Mehrere große Zahlenzeichen bleiben unklar;
keine stille O/0-Reparatur oder Ergänzung fehlender Uptime-Ziffern. 500/h nur aus
primärem HTML-Fallbericht, 1200/h aus primärer Einführung; Drei-Zellen-Fußnote aus
Leitfaden-OCR. Historisches Deck nativ mit Blockkoordinaten gelesen; OCR-Wortkoordinaten getrennt geprüft.
Keine visuelle PDF-/Bild-/Video-/CAD-Prüfung. Sekundäre Handelsmedien-Republikationen
nicht als primäre Hardwarebelege verwendet. Such-API nur als Fundstellenhilfe,
keine bibliografischen Suchtreffer als Produktbeweis. Fallstudien-Landingpage hat
keine vollständige öffentliche Studie geliefert; kein Formular abgesendet.
Ein separater Web-Abruf meldete 403, die zuvor gestartete gewöhnliche lokale
Sammlung lieferte öffentliche 200er ohne Anmeldung/Zugriffsumgehung. Keine Kontakte
oder Transaktionen, keine Änderung globaler OCR-Pakete.

2164 andere alte CSV-Zeilen, alle 979 alten Feldprüfungen, 111 andere Firmenfokusse,
1076 andere Produktbelege und 1961 Quellenidentitäten unverändert. Keine neuen
CSV-/Vergleichsfelder, Markenabgleichs- oder Anwendungslogikänderungen. Dauerhafter
Unit-Test ändert nur Bestandszahlen. Ein anfänglicher lokaler Bestandsprüfer hatte
versehentlich den Vorher-Zähler als Nachher-Zähler übernommen; anhand des gesicherten
Vorher-Bestands korrigiert. Firmenprodukt-Export tatsächlich zwei Zeilen/zwei Ziele,
nicht die Null-Zeilen-Annahme der vorherigen Herstellergruppe. B-Series erscheint bei
der generischen AmbiSort-Nennung zusätzlich nur als Suchkandidat; der vorhandene
familienbezogene Prüfstatus und seine Katalogzuordnung bleiben unverändert. Keine Anforderungen
abgeschwächt. Öffentliche Texte vor Endprüfung sprachlich bereinigt und technische
OCR-Details aus einer Merkmalsaussage in Feldnotizen/Nachweis verlagert; endgültiger
Build und Prüfungen verwenden den fertigen Datenstand.

808 Unit-Tests/64 Dateien, 20 Desktop-/Mobilfälle mit vier Axe-Läufen, 3218
Buildseiten, Lint/Format, Refresh und Wiederimport bestanden. Audit null Fehler/
1053 Hinweise; AmbiStack-Start nun belegt, ein alter Hinweis entfällt. Vier
Modellseiten, 148 Felder, 27 Aussagen und ein erweiterter Firmenfokus geprüft.
Modell-Export zwei Zeilen/zwei Ziele/74 Felder, Firmenprodukt-Export zwei Ziele,
ursprüngliche Queue zwei Ziele/74 Felder. Vergleichsausgabe: 1080 Produktbelege,
4849 Aussagen, 2257 Quellenverweise, 983 Feldprüfungen/18194 Felder.
Eigene Testbrowser, Server und Recherche-/OCR-Helfer beendet. Externe YouTube-
Frame-Befunde aus Batch 106 bleiben offen.

Katalog jetzt 2168 Einträge mit 914 Aufgabenergänzungen; insgesamt 18194 Felder:
6850 dokumentiert, 10977 unbekannt, 274 widersprüchlich, 93 Roadmap. Ursprüngliche
Queue: 440 geprüft, 78 offen; 7995 Felder mit 3244 dokumentierten, 4562 unbekannten,
173 widersprüchlichen und 16 Roadmap-Werten. 112 Firmenfokusse insgesamt, darunter
108/591 Quellen-Firmengruppen. Drei Modellidentitäten, neun Listingidentitäten und
862 Buy-Detailinhalte weiterhin offen. Vollständigkeit, unabhängige exklusive USPs,
Suchrankings und Marktführerschaft nicht nachgewiesen.
Datencommit `576d7ea3be324c226fd92165cec75cd901650046` gepusht; Dokumentationsnachweis folgt separat auf
`codex/competitor-directory-expansion`. Kein Deployment; `main` unverändert.

## Ergänzung vom 2. November 2026 – iRobot: Serienmodelle, historische Telepräsenz und Prototyp (Batch 120)

Elf ausgewählte Identitäten wurden anhand von Herstellerquellen geprüft. Sechs
Katalogmodelle kommen hinzu: Roomba Max 775 Combo, Max 715 Vacuum, Plus 575 Combo,
Plus 515 Combo, Plus 415 Combo und Mini. Ava 500, Max 705 Combo, Max 875 Combo,
Plus 678 Combo und Duo sind bestehende Katalogzeilen. Neun neue Produktbeleg-Datensätze
und zwei erweiterte vorhandene Belege ergeben 42 zusätzliche Merkmalsaussagen und elf
zusätzliche Quellenverweise. Die bisherigen Merkmalspräfixe, Herkunftsangaben und
Quellen-URLs bleiben erhalten. iRobot erhält eine Firmenfokus-Prüfung.

Die 237 ausgewählten Felder verteilen sich auf 45 dokumentierte, 189 nicht
belegte, zwei widersprüchliche und ein Roadmap-Feld. Unbekannte Werte bleiben leer;
Teilmaße werden als Teilmaße bezeichnet. Es gibt keine neuen CSV-Spalten oder
Änderungen an Anwendungsalgorithmen.

- Max 875: 35.000 Pa Saugleistung und 20 L/s Luftstrom; ThermaMist,
  300 U/min und 18 N Rollerkraft sowie DriLift. Die genannten 9,98 cm sind nur
  die Höhe. PerfectEdge-Auszug bis 45 mm ist keine belegte Arbeitsbreite.
- Plus 678: 30.000 Pa Saugleistung und 18 L/s; 40.000 Pa gehören zur SprayForce-
  Sprühvorbehandlung. 15 N Rollerkraft, 10 mm Moppanhebung und 9,95 cm Bauhöhe
  bleiben diesem Modell zugeordnet. Max-875-Merkmale werden nicht übertragen.
- Duo: ausdrücklich ein am 4. September 2026 vorgestellter Prototyp. Hauptgerät,
  Aussetzarm, Plus-575-Begleitroboter und mobiler gemeinsamer Dock bleiben getrennt.
  8,35 cm Höhe und 29,8 cm Breite gehören zum Begleitroboter, nicht zur Gesamtanlage.
  Die Hauptrolle mit 60 mm Durchmesser/46 N begründet keine Gesamtmasse, Arbeitsbreite,
  Traglast oder kommerzielle Freigabe. Erscheinungsdatum bleibt Roadmap ohne Wert.
- Plus 515: Die Primärmeldung nennt 295 Minuten und zugleich etwa zehn Stunden.
  Beide Laufzeitfelder bleiben leer mit Konfliktstatus. 2.000 sq ft je Ladung sind
  Flächenabdeckung und keine allgemeine Flächenleistung pro Stunde. 180 U/min
  der Pads sind keine Fahrgeschwindigkeit. Andere Modelle erhalten diese Werte nicht.
- Max 715 ist ausdrücklich ein reiner Sauger mit AutoEmpty. Die Combo-Geschwister
  haben andere Mopp-/AutoWash-Funktionen. Der in derselben Meldung vorgestellte
  Electro Plus ist ausdrücklich handgeführt und kein autonomer Roboter.
- Mini: Die UK-/Europa-Meldung vom 10. März 2026 nennt eine vorherige Einführung
  in Japan Mitte Februar. 399 EUR/379 GBP bleiben regionale Einführungspreise;
  vier Farben sind Varianten. Start per Gerätetaste ohne WLAN ist von vernetzten
  App-/Sprachfunktionen getrennt. Einwegpads begründen kein beheiztes AutoWash-System.
- Max 705: Die Meldung vom 22. Juli 2025 nennt 1.099 EUR europäische Vorbestellung.
  Der 175-fach-Saugvergleich gilt gegenüber der Roomba-600-Serie im Spot-Modus
  bei vollem Akku. Die alten Katalogwerte 13.000 Pa, 5,7 kg und 120 Minuten sind
  durch diese Primärquelle nicht belegt und werden nicht weiter als bestätigt geführt.
- Ava 500: Die Lieferung vom 17. März 2014 und Cisco EX60/Aironet-1600-Integration
  sind historisch. Das Datenblatt nennt bis 1080p30 Video, keine räumliche Messgenauigkeit.
  Die Aussagen werden nicht auf spätere Ava-Robotics-Produkte oder heutige
  Lieferbarkeit, Unterstützung oder Reinraumzertifikate übertragen.

Die regionalen Juli-/September-2026-Preise sind datierte Einführungs- oder
Vorbestellungsangaben. Dock-Wartungsintervalle bis 75/90 Tage oder drei Monate sind
keine Akkulaufzeiten. Relative Saug-/Reinigungsvergleiche behalten Modell, Betriebsmodus
und Vergleichsbasis; sie sind keine unabhängigen Testergebnisse oder exklusiven USPs.
Plus 675 und weitere 2025er Familien bleiben Recherchehinweise. Die geöffneten
Jahresarchive enthalten nur die erste Seite mit jeweils fünf Meldungslinks; daraus
wird keine vollständige historische Produktabdeckung abgeleitet.

Vierzehn öffentliche HTTP-200-Antworten wurden lokal gespeichert und gehasht.
Sechs Meldungen wurden anhand HTML-Titel, kanonischer URL und Meldungsdatumszeile
geprüft. Beim historischen Ava-PDF wurden nativer Text und Blockkoordinaten
kontrolliert. Es gab keine visuelle PDF-/Bild-/Videoinspektion und keine Formulare,
Kontakte oder Transaktionen. Eine Entwurfsformatierung mit beschädigten
Tausendertrennzeichen und EX60/1080p30-Schreibweisen wurde vor dem Commit korrigiert;
die folgenden Prüfwerte beziehen sich auf den korrigierten Datenstand.

Validierung: 808 Unit-Tests in 64 Dateien, 20 Browserfälle auf Desktop/Mobil einschließlich vier Axe-Prüfungen, Build mit 3224 Seiten, Datenaudit ohne Fehler und mit unverändert 1053 Warnungen bestanden. Elf Produktseiten/237 Felder, 23 Quellenbadges, 192 ausgelassene Leerfelder und 4 strukturierte Eigenschaften geprüft. Modell-Export und ursprüngliche Queue: je zwei Ziele/57 Felder; Firmenbeschreibungsexport: keine ausgewählten Ziele. Firmenfokus, Suche, Vergleich und vollständiger JSON-Belegexport geprüft; Reimport ohne Ergänzungen, geänderte Testdatei lint-/formatgeprüft.
Die Bestandsprüfung bestätigt alle 983 früheren Feldprüfungen und 112 früheren
Firmenfokus-Prüfungen unverändert sowie 1.961 erhaltene Quellenidentitäten. Eigene
Browser-, Testserver- und Hilfsprozesse wurden beendet und die Freigabe kontrolliert.
Die externen Live-YouTube-Befunde aus Batch 106 bleiben außerhalb dieser Auswahl offen.

Gesamtbestand: 2.174 Katalogeinträge, 920 Aufgabenergänzungen und 169 ursprüngliche
Modelle mit Merkmalsbelegen; 1.089 Produktbelege, 4.891 Aussagen, 2.268 Quellenverweise,
994 Feldprüfungen/18.431 Felder und 113 Firmenfokus-Prüfungen. Feldstatus:
6.895 dokumentiert, 11.166 unbekannt, 276 widersprüchlich, 94 Roadmap. Ursprüngliche
Queue: 442 geprüft und 76 offen von 518, mit 8.052 Feldern: 3.253 dokumentiert,
4.610 unbekannt, 173 widersprüchlich und 16 Roadmap. Weiterhin offen: drei
Modellidentitäten, neun Listingidentitäten und die Inhaltsvalidierung der 862
BuyAndRent-Detailseiten. Vollständige Herstellerportfolios sowie Markt-/Suchführerschaft
sind nicht nachgewiesen.

Datencommit `9fb7559438125cdfb5c57147f1a59923a2ec3cb2` wurde auf `codex/competitor-directory-expansion`
gepusht und remote geprüft. `main` bleibt bei
`20a2844346914d8d28958aa3b4e51897c4e9e6ff`; es wurde nicht deployt.
Dauerhafter Prüfbericht: `reports/competitor-batch-120-evidence.json`.

## Ergänzung vom 2. November 2026 – Kawasaki: vollständige benannte Katalogtabellen-Auswahl (Batch 121)

Alle 58 unterschiedlichen Roboter in den Parametertabellen des 2026er
Larraioz/Kawasaki-Iberian-Hub-Katalogs sind jetzt mit Produktbelegen und
Feldprüfungen erfasst. 56 Katalogmodelle kommen hinzu; YF002N und YF003N werden
angereichert. Die 60 Modellvorkommen in 13 Tabellen auf PDF-Seiten 14–25 enthalten
beide YF-Modelle jeweils zweimal; daraus entstehen keine Dubletten. Der übrige
Kawasaki-Bestand Bex, CORLEO, RHP Kaleido 9 und RHP Friends ist nicht Bestandteil
dieser Industriekatalogprüfung. Eine vollständige weltweite/historische
Kawasaki-Produktabdeckung wird daraus nicht abgeleitet.

Die Auswahl umfasst RS003N/007N/007L/010L/013N/015X/020N/025N/030N/050N/080N;
BX100N, BXP110S/110L/135X/165L/210L, BT200L, BX200X/250L/300L;
ZX130L/165U/200S/300S, MXP360L/410X/710L und MG15HL;
BA006N/006L/013N/013L, RA010L/020N;
RD080N und CP110L/180L/300L/500L/700L;
YF002N/003N, RF007L; CL103N/105N/108N/110N; duAro1/2;
KJ125/155/194/264; MC004N/004V/006V und MS005N.

1.160 Felder wurden geprüft: 505 dokumentiert und 655 nicht belegt. 290 neue
Merkmalsangaben und 56 zusätzliche Quellenverweise ergänzen den Bestand. Alle
994 bisherigen Feldprüfungen, 113 Firmenfokus-Prüfungen und 1.961 Quellenidentitäten
bleiben unverändert. Die zwei vorhandenen YF-Merkmalspräfixe, Herkunftsangaben
und Quellen-URLs bleiben erhalten. Es gibt keine neuen CSV-Spalten,
Kategorieverschiebungen oder Änderungen an Anwendungsalgorithmen.

Die Quelle bezeichnet Larraioz als offiziellen Partner und Kawasaki Robotics
Iberian Hub. Die Angaben bleiben Integratorbelege. Der globale Produkt-Host
antwortete HTTP 403; weitere Abrufe dort stoppten. Eine Konzern-News-Anfrage
leitete auf den News-Index um und ist kein Produktbeleg. Der alte Robotics-Host
lieferte nach 45 Sekunden keinen Verbindungsaufbau; er wurde nicht erneut abgerufen.
Drei gespeicherte HTTP-Antworten (zweimal 200, einmal 403) sind gehasht; nur das
32-seitige Partner-PDF liefert Produktspezifikationen. Titeljahr 2026, Druckrevision
Februar 2026 und PDF-Erzeugung im Mai 2026 sind Dokumentdaten, keine Produkteinführungen.

Die nativen Tabellenzellen, Modellüberschriften und Wortkoordinaten wurden geprüft.
Gemeinsame Werte werden nur auf Spalten übertragen, deren Mittelpunkt im selben
physischen Zellrechteck liegt. Mehrzeilig verbundene Beschriftungen werden bei der
Zeilenhöhe berücksichtigt. Die lokale Erstextraktion verfehlte MS005N nach einem
zusätzlichen Tabellenaufruf und traf bei MC-Zusatzangaben die Mitte einer über mehrere
Zeilen verbundenen Beschriftung. Beides wurde vor Änderungen an getrackten Daten
korrigiert. Alle 58 Tabellenidentitäten und die zwei übereinstimmenden YF-Wiederholungen
wurden anschließend geprüft. Es gab keine visuelle PDF-/Bild-/Videoinspektion oder OCR.

- YF002N/003N: vier Achsen, 2/3 kg Last, 60 kg und IP65. Die Arbeitsräume
  600 × 200 beziehungsweise 1300 × 500 mm sind Durchmesser/Höhe, keine Körpermaße
  oder skalaren Armreichweiten. 0,30 s bei 0,5 kg/0,36 s bei 2 kg beziehungsweise
  0,27 s bei 1 kg/0,45 s bei 3 kg behalten das 25/305/25-mm-Rundlaufprofil.
- RS-/Schwerlast-Spalten behalten Modellreichweiten, Massen, Steuerungen und
  Wiederholgenauigkeiten. ZX200S steht wörtlich mit ±0,3 mm in der Tabelle;
  daraus wird nicht stillschweigend ±0,03 mm. MG15HL behält beim 1500-kg-Tabellenwert
  den ausdrücklichen modellbezogenen Beratungsvorbehalt der Vergleichsseite.
- RD080N hat fünf Achsen, die CP-Modelle vier. Die modellbezogenen Palettierzyklen
  pro Stunde gelten für das 400/2000/400-mm-Rundlaufprofil; sie werden nicht zu
  Fahrgeschwindigkeit, Akkulaufzeit oder garantierter Anlagenleistung. Der kürzere
  Fototitel RD80N erzeugt keinen zusätzlichen Modell-Datensatz.
- duAro1/2: je zwei Arme mit vier Achsen, insgesamt acht Achsen und 2/3 kg je Arm.
  4/6 kg im Familientitel sind keine Einarm-Traglasten. 207/220 kg bleiben qualifizierte
  Baugruppenmassen ohne getrennte Trolley-/Steuerungsbilanz. Fehlende Reichweiten
  und IP-Werte werden nicht ergänzt. Kollaborative Positionierung ist keine
  universelle Freigabe für jede Anwendung oder Geschwindigkeit.
- KJ: 8/15 kg Handgelenklast bleiben von 10/25 kg Armlast getrennt. KJ264 hat
  sieben Achsen. ATEX-/Ex-Texte sind keine IP-Schutzarten; zusammengeführte
  IP54/65/67-Einträge anderer Familien behalten die ungeklärte Körper-/Handgelenk-/
  Standard-/Optionsgrenze.
- MC004N hat in der VHP-Zeile einen Strich; die Sterilisierbarkeit von MC004V/006V
  wird nicht übernommen. Epoxid-/polierte Aluminiumoberflächen und MS005N mit
  Edelstahl, sieben Achsen und IP69K bleiben getrennt. Fraunhofer-/Foodgrade-,
  Reinraum- und VHP-Angaben bleiben Partneraussagen ohne unabhängigen Zertifikatsnachweis.

Steuerungen, Teach-Pendants, Greifer, K-ROSET/AS-Software, Sicherheitsoptionen,
Servopositionierer und Lineartracks werden nicht als zusätzliche vollständige Roboter
gezählt. Aktuelle Preise/Lagerbestände, unabhängige Leistung, Exklusivität und
Markt-/Suchführerschaft sind nicht nachgewiesen.

Validierung: 808 Unit-Tests in 64 Dateien, 20 Browserfälle auf Desktop/Mobil einschließlich vier Axe-Prüfungen, Build mit 3280 Seiten, Datenaudit ohne Fehler und mit 1109 Warnungen bestanden. Die 56 zusätzlichen Warnungen betreffen ausschließlich fehlende Erscheinungsjahre der 56 neuen Modelle. 58 Produktseiten/1160 Felder, 389 Quellenbadges, 655 ausgelassene Leerfelder, 389 strukturierte Eigenschaften und 296 Merkmalsaussagen geprüft. Modell-Export: eine Familienzeile/zwei Ziele/40 Felder; ursprüngliche Queue: zwei Ziele/40 Felder; Firmenbeschreibungsexport: keine ausgewählten Ziele. Firmenfokus, beide Suchwege und Vergleich sowie vollständiger JSON-Belegexport geprüft; Reimport ohne Ergänzungen, geänderte Testdatei lint-/formatgeprüft. Beim ersten Browserlauf bestanden 18/20 Fälle; zwei Suchtest-Erwartungen wurden anhand des vorgesehenen Basistext-/Merkmals-Suchverhaltens korrigiert, anschließend bestanden alle 20 Fälle ohne Änderung an Anwendung oder Produktdaten.
Der erste Unit-Aufruf konnte wegen ENOSPC vor Ausführung der Tests nicht transformieren.
Der nachfolgende Lauf verwendet ein eigenes temporäres Verzeichnis auf dem
Workspace-Dateisystem. Es wurden keine fremden temporären Dateien oder
Recherchebelege gelöscht und keine globale Umgebung geändert. Alle folgenden
Prüfwerte beziehen sich auf den erfolgreichen Lauf. Eigene Browser, Testserver
und Hilfsprozesse wurden geschlossen und die Freigabe geprüft. Die externen
Live-YouTube-Befunde aus Batch 106 bleiben außerhalb dieser Auswahl offen.

Gesamt: 2.230 Katalogeinträge, 976 Aufgabenergänzungen, 169 ursprüngliche Modelle mit
Merkmalsbelegen, 1.145 Produktbelege, 5.181 Aussagen, 2.324 Quellenverweise und
114 Firmenfokus-Prüfungen. Insgesamt 1.052 Feldprüfungen/19.591 Felder:
7.400 dokumentiert, 11.821 unbekannt, 276 widersprüchlich, 94 Roadmap.
Ursprüngliche Queue: 444 geprüft/74 offen von 518, mit 8.092 Feldern:
3.269 dokumentiert, 4.634 unbekannt, 173 widersprüchlich, 16 Roadmap.
Weiterhin offen: drei Modellidentitäten, neun Listingidentitäten, Inhaltsvalidierung
der 862 BuyAndRent-Detailseiten und vollständige Herstellerportfolios.

Datencommit `fdabc6b0dfc3c374a253cee04e145e6c78432377` wurde auf `codex/competitor-directory-expansion`
gepusht und remote geprüft. `main` bleibt bei
`20a2844346914d8d28958aa3b4e51897c4e9e6ff`; es wurde nicht deployt.
Dauerhafter Prüfbericht: `reports/competitor-batch-121-evidence.json`.

## Ergänzung vom 2. November 2026 – Bildungsrobotik: Modular Robotics und Wonder Workshop (Batch 122)

Acht ausgewählte Einträge wurden anhand öffentlicher Hersteller-/Entwicklerquellen geprüft: Cubelets, GiggleBot, die generische GoPiGo-Familie, GoPiGo2, GoPiGo3, Dash, Dot und Cue. GoPiGo2, GoPiGo3 und Cue sind drei Ergänzungen; fünf vorhandene CSV-Zeilen wurden überarbeitet. Die Auswahl belegt keine vollständigen historischen Herstellerportfolios.

136 Datenfelder: 30 dokumentiert, 104 nicht dokumentiert und zwei widersprüchlich. Vier neue Merkmalsdatensätze und vier Erweiterungen ergeben 29 zusätzliche Aussagen und 20 zusätzliche Quellenreferenzen. Ein neuer Modular-Robotics-Firmenfokus und eine Erweiterung des bestehenden Wonder-Workshop-Fokus bewahren die alten Quellen und Merkmalspräfixe. Der Katalog umfasst damit 2.233 Einträge, 1.149 Merkmalsdatensätze mit 5.210 Aussagen/2.344 Quellenreferenzen sowie 1.060 Feldprüfungen mit 19.727 Feldern.

- Cubelets bleibt eine modulare Bauplattform. Sense-/Action-/Think-Blöcke und Console mit Blockly/C sind belegt; Masse, Abmessungen, Mobilität und Laufzeit hängen von der Konstruktion ab. Discovery/Curiosity/Boundless- und Educator-Sets sind Pakete, einzelne Cubelets und Hats Komponenten. Der 225-USD-Discovery-Set-Preis ist kein allgemeiner Plattformpreis; Moduljahre sind keine Familien-Erscheinungsjahre.
- GoPiGo2 und GoPiGo3 erhalten getrennte Zuordnungen: 65-mm-Räder/optische Encoder/18 Impulse gegenüber 66,5-mm-Rädern/magnetischen Encodern/720 Impulsen pro Radumdrehung bei 120:1-Untersetzung. Diese Werte sind keine Abmessungen des gesamten Roboters, lineare Fahrgeschwindigkeit oder Lokalisierungsgenauigkeit. Stromaufnahme mit Raspberry Pi B+ ist keine Akkulaufzeit.
- Das generische aktuelle GoPiGo-Paket für 199 USD enthält unter anderem Akku/Ladegerät, Sensor und Servo-Paket, jedoch keinen Raspberry Pi. Die historische 99-USD-GoPiGo3-Basis enthält einen Batteriehalter, aber weder Pi noch microSD oder acht AA-Batterien. Base/Starter sind Pakete; GoBox/PyBox/GiggleBox Lernangebote. GoPiGo Core wird im Aktualisierungshinweis genannt, seine eigenständige Hardwareidentität gegenüber der generischen Familie bleibt offen. GoPiGo1 ist als ältere Generation erwähnt und benötigt eine eigene Prüfung. BrickPi ist zunächst als Controllerrolle abgegrenzt.
- Die generische Kitseite schließt Pi 5 aus, während die offizielle GoPiGo3-README unter Raspberry Pi OS Pi 5 mit Energie-/Tasterhinweisen unterstützt. Betriebssystem und Generation bleiben Teil der Kompatibilitätsaussage; es entsteht keine pauschale Freigabe für sämtliche Pakete.
- GiggleBot: zwei Linien-/zwei Lichtsensoren, MakeCode-Motorsteuerung und zwei Servoanschlüsse sind aus dem offiziellen Entwicklerrepository belegt. Fünf Software-Geschwindigkeitsstufen sind kein m/s-Wert. Der Laserdistanzsensor ist optional. Die gespeicherte 60-USD-Basiskit-Angabe ohne micro:bit behält das Prüfdatum 1. November 2026. Die frische Anfrage scheiterte an TLS, der Dokumentationshost an der Verbindung; keine Zertifikatsprüfung umgangen, keine fehlgeschlagene Antwort als neuer Angebotsbeleg verwendet.
- Dash: ungefähr fünf Stunden aktives Spielen, drei Mikrofone, drei IR-Abstandssensoren, programmierbare Tasten, beweglicher Kopf und kamerafreies Design sind belegt. Die 300 Minuten sind lediglich die Umrechnung der ungefähr fünf Stunden. Installierte Mobil-Apps können den physischen Roboter offline programmieren; Downloads und Blockly im Browser haben eigene Internetanforderungen.
- Dash-Ladezeit bleibt leer/widersprüchlich: FAQ/Support „unter einer Stunde“ gegenüber dem Klassenzimmerleitfaden „etwa 60–90 Minuten“. Altersgruppe bleibt ebenfalls leer/widersprüchlich: FAQ 5–14 gegenüber Shop 6–11. Nicht belegte alte Masse, Größenklasse, eingeschlossene Hand und Erscheinungsjahr wurden entfernt. Der offizielle Shop führt zu MORAVIA Education und zeigt 189,99 USD; Vorlagenwörter zu Sale/Sold out sind kein gesicherter Lagerstatus. Der Herstellername bleibt für die Katalogkontinuität Wonder Workshop.
- Physischer Dot endete laut Hersteller im Frühjahr 2023; virtueller Dot in Blockly ist eine Softwarefigur im Make-Wonder-Abonnement. Cue ist als historische Produktion 2018–2022 und nicht mehr produziert beschrieben; App-Unterstützung und Übergang von Blöcken zu Zustandsmaschinen-/Textprogrammierung sind getrennte Aussagen. Beide erhalten die historische Ladezeit unter einer Stunde aus dem Supportartikel vom 27. Juni 2022. Dash-Laufzeit und Sensorwerte werden nicht vererbt. Sketch Kit, Gripper und Blaster bleiben optionale Zubehörrollen; Zubehörpreise sind keine Roboterpreise. Produktionszeiträume belegen keine exakten ersten Verkaufstage.

24 erfolgreiche öffentliche HTTP-200-Antworten wurden gespeichert und gehasht. Zusätzlich bleiben die beiden fehlgeschlagenen GiggleBot-Anfragen dokumentiert und ausgeschlossen. Geprüft wurden extrahierte HTML-Texte sowie nativer PDF-Text und Textblockkoordinaten des Dash-Leitfadens. Keine visuelle PDF-/Bildprüfung oder OCR; bildgebundene Spielzeitangaben auf der Supportseite wurden nicht übernommen. Keine Formulare, Käufe oder Kontakte.

808 Unit-Tests in 64 Dateien, 20 Browserfälle auf Desktop/Mobil einschließlich vier Axe-Prüfungen, Build mit 3283 Seiten und Datenaudit ohne Fehler bestanden. 1115 Warnungen: sechs zusätzliche Hinweise ausschließlich zu nicht belegten Erscheinungsjahren der drei Ergänzungen und der bestehenden Cubelets-/Dash-/Dot-Zeilen. Acht Produktseiten/136 Felder, 14 Quellenbadges, 106 ausgelassene Leerfelder, 9 strukturierte Eigenschaften und 40 Merkmalsaussagen geprüft. Modell-Export: 4 Zeilen/4 Ziele/68 Feldvorkommen; ursprüngliche Queue: vier Ziele/68 Felder. Beide Firmenfokus-Seiten, vorhandene Firmenexport-Zuordnungen, Suche, Vergleich und vollständiger JSON-Belegexport geprüft. Reimport ohne Ergänzungen; geänderte Testdatei lint-/formatgeprüft. Eigene Testprozesse einschließlich Browser und Vorschau beendet; Ressourcen anderer Aufgaben erhalten.

Die erste Unit-Prüfung bestand 807/808 Fälle und fand die fehlenden kanonischen Unterkategorie-Tags der neuen GoPiGo2-Zeile. Alle drei Ergänzungen wurden passend zur belegten Programmierfunktion mit `educational;programmable` eingeordnet; anschließend bestand die gesamte Suite. Der zwischenzeitliche Build mit den alten Tags wurde ausschließlich über seine selbst gestartete Prozessgruppe beendet und vollständig neu erstellt. Die Anwendung und die Filterlogik blieben unverändert.

Von den ursprünglichen 518 Recherche-Zielen haben jetzt 448 ausgewählte Feldprüfungen, 70 warten darauf. Drei Modellidentitäten, neun Listing-Identitäten und 862 BuyAndRent-Detailinhalte bleiben offen. Volle historische Portfolios, aktuelle weltweite Lieferbarkeit, unabhängige Leistung, exklusive USPs und Platz 1 im Markt oder in Suchmaschinen sind weiterhin nicht bewiesen. Die offenen externen YouTube-/Axe-Befunde aus Batch 106 bleiben bestehen.

Daten-Zwischencommit: `5f713633bede711db57b752ffade49a297b2c2ba`, auf `codex/competitor-directory-expansion` gepusht. `main` unverändert; keine Bereitstellung. Dauerhafter Prüfbericht: `reports/competitor-batch-122-evidence.json`.

## Ergänzung vom 2. November 2026 – SuperDroid: Katalog, Entwicklungsplattformen und historische Konfigurationen (Batch 123)

36 erfolgreiche öffentliche Herstellerantworten und alle 35 Karten der Übersicht wurden geprüft. 29 Katalogkarten sind ausgewählten Konfigurationen zugeordnet, sechs bleiben ausdrücklich ungeklärt. Jack Russell und Lynx ergänzen die Auswahl aus der aktuellen Navigation: insgesamt 31 geprüfte Einträge, davon 29 neue und zwei bestehende Gopher-/Bulldog-Erweiterungen. Das ist keine Bestätigung des gesamten historischen Portfolios oder gegenwärtiger Lieferbarkeit.

1.026 ausgewählte Datenfelder: 248 dokumentiert, 768 nicht dokumentiert, acht widersprüchlich und zwei Entwicklungs-/Roadmap-Felder. 88 zusätzliche Aussagen und 37 zusätzliche Quellenreferenzen sowie ein neuer Firmenfokus. Der Gesamtbestand umfasst damit 2.262 Einträge, 1.178 Merkmalsdatensätze mit 5.298 Aussagen/2.381 Quellenreferenzen sowie 1.091 Feldprüfungen mit 20.753 Feldern.

- Gopher ist ausdrücklich die umbenannte GPK-32-Tracked-Linie. 7,6 lb Robotergewicht und 12,5 × 10,25 × 5 in Körpermaße bleiben von Versandgewicht/-maßen getrennt; die Antenne erhöht die Höhe auf 11 in. Etwa vier Stunden sind lastabhängig. 2.480 USD für denselben Produktionsbatch und 3.600 USD für die Standardbestellung haben unterschiedliche Vorlaufbedingungen. Keine formale IP-Klassifikation laut FAQ. Drei ältere Wheel-/Zoom-Links führen jetzt zum generischen Gopher; das beweist keine technische Gleichheit sämtlicher historischer Varianten.
- Bulldog Lite/Standard/Pro bleiben Pakete auf einer Plattform: mehr als zwei, bis zu vier und ein Achtstunden-Akkupaket. OCU-Laufzeit und -Masse werden nicht als Roboterwerte verwendet. Der Arm hat getrennte Traglast-, Greifkraft- und Bezugspunktangaben für horizontale/vertikale Reichweite. Flipper-Ausstattung und pauschale Treppenprosa stimmen nicht vollständig überein. Jack Russell Pro ergänzt Flipper und Relaisfunktion; Jack-Russell-Roboterlaufzeit und -masse bleiben offen. Der aktuelle Überblick nennt Dalmatian ausdrücklich früher Bloodhound. Wiederholte Arm-/Lastlisten unter verschiedenen Robotern werden nicht als genaue Dalmatian-Spezifikation übernommen.
- Groundhog Standard und Pro werden über native HTML-Tabellenzellen getrennt. Standard: Vergleichsgewicht 20 lb gegenüber 45 lb im Zusatzblock; 60 in Höhe mit Mast gegenüber nicht zugeordneten 13,5 in im Zusatzblock. Gewicht bleibt leer/widersprüchlich, beide Maßangaben bleiben qualifiziert. Zwei bis vier Stunden und die zusätzliche Vierstundenangabe sind als Bereich/Obergrenze vereinbar. Pro: 27 lb, 16 × 14 × 60 in mit Mast, ungefähr vier Stunden sowie LiDAR/duales Stereo, Vorwärts-/Rückwärtsfahrt und mitgelieferte Basisstation. 3.500 USD sind eine Anzahlung; 45.000 USD ist der separat gelistete Gesamtpreis. DroneDeploy ist in Entwicklung; Sichtfeld/Sensortiefe sind keine Lokalisierungsgenauigkeit.
- Mastiff: sechs Achsen als Überschrift, fünfte/sechste zugleich optional – DOF bleibt widersprüchlich leer. 2 ft/s stimmen nicht mit den veröffentlichten ungefähren 110 ft/min/1,25 mph überein. Doberman hat ebenfalls uneinheitliche Geschwindigkeitsumrechnungen; seine Rollkäfig-/Kameraoptionen verändern den Umriss. Greifkraft wird nicht zur Nutzlast.
- Die Tether-Crawler MLT-JR V2, SST2 V2, MLT-42-W, LT2-F-W und SCT-32-W behalten eigene Maße, Roboter-/Paketmassen, Zusatzlasten und Laufzeiten. Tetherlängen, Controller und Kamerawerte sind getrennte Größen. „Watertight“ ist keine IP- oder Tauchtiefenklassifikation. Der Null-USD-Platzhalter von SCT-32-W wird nicht als kostenloser Roboter importiert. Squirrel (MLT) führt zur MLT-JR-Seite; daraus entsteht kein zusätzlich angenommenes Modell.
- HK1500-DM6-E und HK1000-V2 (DM4-E) unterscheiden sechs/vier Räder und Standardkonfigurationen. RC, grundlegende ROS-Steuerung und erweiterte Navigation sind keine austauschbaren Autonomiezusagen. Die vollständige V2-Bezeichnung wurde aus der Produktüberschrift vor Commit ergänzt; ein veralteter eigener Build wurde beendet und neu erstellt. VIPR/VIPR-L benötigen für die 200-lb-Transportlast eine zusätzliche Trageplattform; VIPR-D ist die kleinere Entwicklungsplattform. GNSS-Genauigkeit des GPS-4WD-Modells bleibt auf Here2 beziehungsweise die optionale RTK-Basisstation bezogen. SPAR ist eine eigene Integration auf HK1500-Basis; deren Gesamtwerte werden nicht aus dem nackten Chassis geerbt.
- Lynx ist ausdrücklich in Entwicklung. Zwölf Beinaktoren sind Entwurfsangaben; OCU-Achtstundenwerte liefern keine Vierbeinerlaufzeit. Rocky beschreibt 22 Körpergelenke, 1,58 m nominale Standhöhe und ungefähr 45 kg Klasse als Entwicklungshardware mit Integrationsbedarf. Lite-Rahmen und optionale 20-DOF-Handsysteme bleiben separate Rollen. Die verlinkte Browser-MuJoCo-Seite ist keine physische Live-Demonstration und belegt keine sofort einsatzfähige Gehfunktion.
- Fünf Outdoor-Konfigurationen trennen den eingestellten 66-in-Mäher, Gas-/Elektro-Umbauchassis, den beschriebenen 25-in-Hangmäher und den RC-Schneepflug. Die Umbaupakete enthalten standardmäßig weder Mäher noch Montage. Chassis- und vollständige Mähermasse, Decknennmaß und effektive Schnittbreite sind getrennt; Fläche pro Ladung ist keine Laufzeit oder Stundenleistung. Beim 66-in-Mäher und Schneepflug verhindern unterschiedliche Motorspezifikationen einen eindeutigen Geschwindigkeitswert; die Pflugmaße sind widersprüchlich beschriftet. Hersteller-Hangangaben werden nicht zu unabhängigen sicheren Betriebsgrenzen. Interaktive Schätzer und Videocontroller sind keine gemessenen Daten, Nullpreisangebote oder Live-Arbeit.

Sechs Katalogkarten bleiben offen: GPK-32 4WD, 4WD Zoom, Tracked Zoom, Drop Ceiling, Big Cat und generische alternative Rocky-Basen. Veraltete Weiterleitungen oder Homepage-/Raute-Platzhalter reichen nicht zur Gleichsetzung mit aktuellen Robotern. Die 35 Einzelentscheidungen und zwei zusätzlichen Navigationsmodelle sind im dauerhaften Bericht enthalten. Viele alte Produktseiten kennzeichnen die konkrete Version als nicht mehr verkauft; Warenkorb-/Vorlauftexte widerlegen diesen ausdrücklichen Status nicht. Preise bleiben datierte Konfigurations-/Historienangaben, keine garantierten aktiven Angebote.

Extrahierter Herstellertext, native HTML-Tabellen-/Zellzuordnung, Produktcodes, Statushinweise und tatsächliche Weiterleitungsziele wurden geprüft. Keine visuelle Bild-/PDF-Prüfung; keine Formulare, Kontaktaufnahmen oder Käufe. Zwei Sanbot-Startanfragen scheiterten an TLS und wurden ausgeschlossen, ohne die Zertifikatsprüfung zu umgehen.

808 Unit-Tests in 64 Dateien und 20 Browserfälle auf Desktop/Mobil einschließlich vier Axe-Prüfungen bestanden. Der Build erzeugt 3.312 Seiten. Das Datenaudit meldet keine Fehler und 1.144 Warnungen; die 29 zusätzlichen Warnungen betreffen ausschließlich nicht belegte Erscheinungsjahre der 29 Ergänzungen. Geprüft wurden 31 Produktseiten mit 1.026 Feldern, 189 Quellenbadges, 775 ausgelassenen Leerfeldern, 166 strukturierten Eigenschaften und 94 Merkmalsaussagen. Die Auswahl erzeugt keine Zeilen im Modell-Export oder Firmenprodukt-Export; die ursprüngliche Recherche-Queue enthält zwei passende Ziele mit 74 Feldern. Firmenfokus und Firmenexport, Suche, Vergleich und vollständiger JSON-Belegexport wurden geprüft. Der Reimport ergänzt keine Einträge. Die geänderte Testdatei besteht Lint- und Formatprüfung. Alle eigenen Testprozesse einschließlich Browser und Vorschau sind geschlossen; Ressourcen anderer Aufgaben blieben erhalten.

Von den ursprünglichen 518 Recherche-Zielen haben jetzt 450 ausgewählte Feldprüfungen, 68 warten darauf. Drei Modellidentitäten, neun Listing-Identitäten und 862 BuyAndRent-Detailinhalte bleiben offen. Die sechs SuperDroid-Konfigurationsfragen, vollständige historische Sortimente, unabhängige Leistungs-/Exklusivitätsbelege und Platz 1 sind weiterhin nicht bewiesen. Die offenen externen YouTube-/Axe-Befunde aus Batch 106 bleiben bestehen.

Daten-Zwischencommit: `7bea67e215bf8cf52158764c96898ba573e61ec6`, auf `codex/competitor-directory-expansion` gepusht. `main` unverändert; keine Bereitstellung. Dauerhafter Prüfbericht: `reports/competitor-batch-123-evidence.json`.

## Ergänzung vom 3. November 2026 – UBTECH: Modellzuordnung, Konfigurationen und Quellenkonflikte (Batch 124)

20 Plattformen wurden geprüft: acht neue Einträge und zwölf überarbeitete Bestandsmodelle. Die aktuelle UBTECH-Navigation enthält 19 eigene Produktidentitäten: 18 haben eine ausgewählte Prüfung, U1 PRO bleibt gegenüber den bestehenden UWORLD-Varianten ungeklärt. Die ältere Walker-Plattform und die ausdrücklich getrennt genannte Walker S Lite ergänzen die Auswahl. AIRROBO-Verknüpfungen sowie weitere Konzern- und historische Sortimente bleiben eigene Rechercheaufgaben.

360 ausgewählte Felder: 130 dokumentiert, 228 nicht dokumentiert und zwei widersprüchlich. 40 neue Merkmalsaussagen und 20 zusätzliche Quellenreferenzen; 18 neue Merkmalsdatensätze, zwei vorhandene erweitert, ein Firmenfokus ergänzt. Gesamtbestand: 2.270 Modelle/Konfigurationen, 1.196 Merkmalsdatensätze mit 5.338 Aussagen und 2.401 Quellenreferenzen; 1.111 Feldprüfungen mit 21.113 Feldern. Die 1.961 ursprünglichen Quellenidentitäten bleiben erhalten.

- Walker C hatte die Herstelleradresse der älteren Walker-Plattform. Die separate C-Seite belegt 163 cm, 43 kg und 20 DOF; Walking/Standing bleiben zwei/vier Stunden, Laden 1,5 Stunden. Die ältere Walker-Seite beschreibt 145 cm, 77 kg und 36 DOF. Der Link ist korrigiert, beide Modelle bleiben getrennt. 5 kg in der Walker-C-Armzeile ist als Armgewicht beschriftet und wird nicht zur Nutzlast; eine uneindeutige Spannweitenangabe wird nicht als präzise Armreichweite übernommen.
- Walker S und S Lite haben getrennte HTML-Konfigurationscontainer und herstellerseitig benannte Bildkarten. Die OCR-Texte nennen für S 170 cm, 65 kg, 41 DOF, 600 mm Einzelarmlänge und ungefähr 2,5 Stunden; für Lite 130 cm, 63 kg, 41 DOF, 600 mm und ungefähr zwei Stunden. Die Zuordnung wurde anhand nativer Container, Dateinamen und zweier OCR-Verfahren geprüft. Motordrehzahl ist keine Laufgeschwindigkeit, Batteriewechsel keine Ladezeit.
- Walker S2: Der Hersteller beschreibt einen autonomen Batteriewechsel innerhalb von drei Minuten mit Station und Doppelakkus. „24/7“ ist keine Laufzeit pro Ladung. 15 kg im 0–1,8-m-Arbeitsraum bleibt eine aufgabenbezogene Traglast; Arbeitsraumhöhe ist keine Armlänge. Die ausgewählten S1/S2-Spezifikationsbilder beschriften vor allem Anatomie/Sensorik. Nicht daraus belegte frühere Masse-, DOF-, Laufzeit-, Geschwindigkeits- und Preiswerte werden nicht weiter als geprüfte Zahlen geführt. Herstellerintegration und Videos ersetzen keine unabhängige Leistungsmessung.
- Walker Tienkung trennt Voice & Vision und Embodied Intelligence: ungefähr 61/73 kg, nicht funktionale Hände gegenüber zwei Sechs-DOF-Händen. Gemeinsame Tabellenzeilen nennen 172 cm, 7 km/h und drei Stunden. Für Embodied Intelligence bestätigen unterschiedliche OCR-Verfahren 42 DOF. Die letzte Ziffer der Voice-&-Vision-Gesamtzahl ist nicht eindeutig bestätigt; dafür wird keine Zahl freigegeben. Die abweichenden OCR-Kandidaten und Koordinaten bleiben im Bericht. Datensätze sind weiterhin zur schrittweisen Veröffentlichung angekündigt.
- Walker X und Panda Youyou behalten ihre eigenen Identitäten. 1,5 kg pro ausgestrecktem Arm und 600 mm Einzelarmspannweite sind getrennt von anders bedingten Trage-/Gehdemonstrationen. 20 cm Navigations-, 10 cm Lokalisierungs- und 1 cm Feinlokalisierungsangaben sind unterschiedliche Messgrößen. Kameraauflösung und diese Positionsangaben werden nicht zur visuellen Messgenauigkeit.
- Cruzr Y1, Cruzr S2 und Cruzr 1S haben unterschiedliche industrielle bzw. Service-Rollen. S2: 15 kg im 0–1,8-m-Arbeitsraum, 0–40 cm Hubbereich, 2 m/s; eine Manipulationspräzisionsbehauptung wird nicht zur Kamera-/Navigationsgenauigkeit. 1S: bis zu acht Stunden pro Ladung und separat Standby-/Nachladebetrieb. Y1-Komponentendiagramme belegen keine numerischen Gesamtlast- oder Hubwerte. C1-Hände sind optional; Branchen-/Szenariobeispiele beweisen keine allgemeine Zertifizierung.
- CADEBOT L100 ist über die Navigation der CADEBOT-Seite zugeordnet. Nettomasse 55 kg, Versandbrutto 85 kg, Gesamttransportlast 40 kg, zehn Kilogramm je Ablage. Die Spezifikation nennt sechs Stunden Arbeitsbetrieb in einem Block, acht in einem anderen und im HTML. Beide bleiben als Konflikt sichtbar; es gibt keinen ausgewählten gemeinsamen Maximalwert. Zwölf Stunden Standby und vier Stunden Laden lösen diesen Widerspruch nicht auf. 65-cm-Durchfahrt bleibt eine Herstellerangabe mit offenen Einsatzbedingungen.
- UGOT: vier Radmotoren und acht Gelenkservos sind eine Stückliste, keine universelle DOF-Zahl für alle sieben Aufbauten. uKit-AI-Visionstraining ohne Internet ist getrennt von cloudbezogener Sprache. Yanshee-Schulstufen ergeben keine exakte Altersgrenze. Alpha Mini: aktueller Herstellerwert 700 g einschließlich Akku statt zuvor unbelegter 0,78 kg; Kapazität begründet keine Zwei-Stunden-Laufzeit. uKit Explore: regionales 749,95-USD-Angebot, Grade 6+, 16 Servos/zwei Motoren und 38 Bauvorschläge; sichtbare Nachbestell-/Ausverkauft-Angaben sind keine bestätigte Verfügbarkeit. Strukturierte InStock-Angaben widersprechen dem sichtbaren Status. Paket und Region bleiben qualifiziert.

29 öffentliche Antworten gespeichert: 28 mit HTTP 200, eine alte JIMU-Familienadresse mit 404. 25 Herstellerbilder wurden als OCR-Text und Koordinaten geprüft; die Bildanzeige lehnte Bildinputs ausdrücklich ab. Keine visuelle Bild-/PDF-Prüfung wird behauptet. Drei über die Broschürenseite abgerufene PDFs liefern keine ausgewählten Produktbehauptungen. Quellen wurden am 2. November UTC gespeichert; die Prüfung wurde am 3. November in Europe/Berlin abgeschlossen. Keine Formulare, Konten, Kontakte oder Käufe.

808 Unit-Tests in 64 Dateien und 20 Browserfälle einschließlich vier Axe-Prüfungen bestanden. Der Build erzeugt 3.320 Seiten. Datenaudit: keine Fehler, 1.160 Warnungen; 16 zusätzliche Warnungen betreffen ausschließlich unbelegte Erscheinungsjahre bei acht Ergänzungen und acht zuvor nicht abgesicherten Jahresangaben. Geprüft: 20 Produktseiten, 360 Felder, 91 Quellenbadges, 229 ausgelassene Leerfelder und 46 Merkmalsaussagen. Modell-Export: 2 Zeilen/2 Ziele/34 Feldvorkommen; ursprüngliche Queue: zwei Ziele/34 Felder. Firmenfokus und Firmenexport, Suche, Vergleich, vollständiger JSON-Belegexport sowie wiederholbarer Import geprüft. Die geänderte Testdatei besteht Lint-/Formatprüfung. Alle eigenen Test- und OCR-Prozesse einschließlich Browser und Vorschau geschlossen; Ressourcen anderer Aufgaben erhalten.

Die erste Unit-Prüfung bestand 807 von 808 Fällen und fand den noch nicht erzeugten Merkmalsdatenbestand. Dieser wurde aus den geprüften Quelldaten neu erstellt; der vorher gestartete eigene Build wurde beendet und neu erstellt. Die abschließenden Prüfungen verwenden den konsistenten Datenstand. Der Import fügt beim Wiederholen keine Einträge hinzu.

Von 518 ursprünglichen Recherchezielen haben jetzt 452 ausgewählte technische Feldprüfungen, 66 warten darauf. Drei ursprüngliche Modellidentitäten, neun Listing-Identitäten und 862 BuyAndRent-Detailinhalte bleiben offen. Hinzu kommen die dokumentierten U1/UWORLD-, JIMU- und Tienkung-Konfigurationsfragen. Vollständige Konzern-/Historienportfolios, aktuelle weltweite Lieferbarkeit, unabhängige Leistung, exklusive USPs und Platz 1 bleiben unbewiesen. Die externen YouTube-/Axe-Befunde aus Batch 106 sind weiterhin offen.

Daten-Zwischencommit: `1a158a35e8218923a07714fd6050f9b405f9e557`, auf `codex/competitor-directory-expansion` gepusht. Dauerhafter Bericht: `reports/competitor-batch-124-evidence.json`.


## Ergänzung 125 – UVD-Konfigurationen, Pharma-Qualifizierung und Akara Violet (3. November 2026)

Drei vorhandene Modelle erhalten erstmals ausgewählte Datenfeldprüfungen: UVD Robot
Model C, UVD Robot Pharma und Akara Violet. 60 Felder unterscheiden acht belegte
und 52 nicht dokumentierte Angaben. Zehn zusätzliche Merkmalsaussagen, sechs neue
Produktquellenverweise und zwei Firmenfokus-Prüfungen ergänzen den Bestand.
Keine neuen Modellzeilen: 2.270 Einträge bleiben erhalten. Der Gesamtbestand hat
1.114 ausgewählte Modellprüfungen mit 21.173 Feldern: 7.816 dokumentiert,
12.973 nicht dokumentiert, 288 widersprüchlich und 96 Roadmap-Angaben. In der
ursprünglichen Queue sind 455 von 518 Zielen geprüft; 63 bleiben offen.

Model C ist laut Herstellerhistorie die 2020 eingeführte dritte Generation.
Aktuelle Flottenfunktionen und die generische Raumzyklus-Angabe belegen keine
historische Model-C-Konfiguration. Pharma nennt 25 m² in ungefähr zehn Minuten
oder weniger, abhängig von Layout und Zielorganismus. Dies ist ein bedingtes
Raumbeispiel, keine Akkulaufzeit und keine garantierte Leistung von 150 m²/h.
Herstellerangaben zu Authentifizierung, Audit-Trail und Datenprotokollierung bleiben
Softwareangaben. Das Paket mit acht Qualifizierungsdokumenten behält Betreiber-
und Standortanforderungen, raumspezifische Zyklusentwicklung und Requalifizierung.
Log-Ziele, allgemeine Wirksamkeitswerbung und klinische Ergebnisse bleiben getrennt.

Violet ist auf der Akara-Startseite ausdrücklich als UV-Roboter benannt.
UV-Simulation, autonome Neupositionierung und 3D-Dosisberichte unterstützen die
Erkennung unzureichend behandelter und verschatteter Flächen, die gezielt manuell
nachgereinigt werden können. Thermischer Raumsensor, Analyseplattform und Clara
sind keine zusätzlichen physischen Modelle. Allgemeine Werbeaussagen zur Nutzung
in belegten Räumen, CE, Datenschutzüberlegenheit und sechsfacher Geschwindigkeit
werden nicht als unabhängig geprüfte Zulassung oder Sicherheitsanweisung übernommen.

17 öffentliche Herstellerantworten mit HTTP 200 wurden als HTML-Text erfasst und
gegen gespeicherte SHA-256-Werte geprüft. Drei Broschüren-Landingpages enthalten
HubSpot-Formularkonfigurationen und keine direkten PDF-Links. Keine Formulare,
Kontakte oder privaten Downloads; keine visuelle Bild-/PDF-Prüfung. Abrufdatum:
2. November UTC; Review: 3. November Europe/Berlin. Quellen und Einzelfeldnotizen:
`reports/competitor-batch-125-evidence.json`.

808 Unit-Tests in 64 Dateien und 16 Browserfälle einschließlich vier Axe-Prüfungen
bestanden. Build: 3.320 Seiten. Datenaudit: null Fehler und unverändert 1.160
Warnungen. Geprüft: drei Produktseiten, 60 Felder, 2 Quellenbadges,
52 ausgelassene Leerfelder, 19 Merkmalsaussagen und zwei Firmenfokusse.
Modell-Export: drei Zeilen, vier Zielvorkommen, 80 Feldvorkommen; ursprüngliche
Queue: drei Ziele, 60 Felder. Suchtreffer, Vergleich, strukturierte Eigenschaften,
kompletter Belegexport und byteidentischer Reimport der 32 getrackten Datendateien
geprüft. Eigene Browser, Testserver und Hilfsprozesse sind beendet; fremde
Ressourcen erhalten.

Daten-Zwischencommit `d0ca415db391e9c6bbed45489095b9a83990fada` ist auf `codex/competitor-directory-expansion` gepusht und remote
geprüft. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment.
Drei ursprüngliche Modellidentitäten, neun Listingidentitäten und 862
Detailinhaltsprüfungen bleiben offen. Vollständige Herstellerportfolios,
Marktführerschaft und Suchrang Nr. 1 sind weiterhin nicht belegt.


## Ergänzung 126 – Shield AI: Nova-Modelle, V-BAT-Konfigurationen und X-BAT-Roadmap (3. November 2026)

Nova 1 und Nova 2 sind als zwei eigenständige Quadcoptermodelle ergänzt; V-BAT und
X-BAT erhalten erstmals ausgewählte Datenfeldprüfungen. Vier Plattformen umfassen
84 Felder: 15 dokumentiert, 67 nicht dokumentiert und zwei Roadmap-Werte.
Elf zusätzliche Merkmalsaussagen, neun neue Produktquellenverweise und ein
Firmenfokus ergänzen den Bestand. Gesamt: 2.272 Katalogeinträge, 1.198 datierte
Merkmalsdatensätze, 5.359 Merkmalsaussagen, 2.416 Quellenverweise und 120
Firmenfokus-Prüfungen. 1.118 Modelle haben 21.257 ausgewählte Feldprüfungen:
7.831 dokumentiert, 13.040 nicht dokumentiert, 288 widersprüchlich und 98 Roadmap.
Von 518 ursprünglichen Recherchezielen sind 457 geprüft; 61 bleiben offen.

V-BAT trennt 12-plus-Stunden Flugausdauer mit EO/IR von Batterielaufzeit,
75 kg maximalem Brutto-Abfluggewicht und 40 lb Nutzlast. Die metrischen 18,1 kg
im HTML und 18 kg im PDF sind bei gleichem 40-lb-Wert als Rundung benannt.
Maximale Nutzlast und maximale Ausdauer werden nicht gleichzeitig behauptet.
MPU5/C-Band im HTML und Mesh/Phased-Array im PDF bleiben getrennte Funkangaben;
das 648-NM-Einwegbeispiel gilt für 20 lb Nutzlast plus SATCOM. Optionale Pakete
bleiben optional. Für die nominelle Landezone von 15 × 15 ft nennt das HTML
4,6 × 4,6 m und das PDF 4,6 × 4,7 m. Diese Abweichung bleibt sichtbar, ohne
Mindestgangbreite oder Flugzeugabmessungen daraus abzuleiten.

X-BATs 39-ft-Spannweite und geplanter VTOL-Modus sind Roadmap-Felder. Die
Produktseite sowie Mitteilungen vom 30. September und 8. Oktober 2026 beschreiben
Flugtests und Produktion weiterhin als geplant. Das Interview vom 29. Oktober
beschreibt Entwicklung, ohne einen vollzogenen Erstflug zu bestätigen. 2026 als
Erstflugplan, 2028 als Missionsfähigkeit und 2029 als Produktionsplan sind keine
belegten Erscheinungsjahre. Finanzierung ist kein Flugzeugpreis; Entwurfsziele
sind keine ausgelieferten oder unabhängig gemessenen Leistungsdaten.

Der Hersteller benennt Nova 1 ausdrücklich als Vorgänger von Nova 2. Die ältere
Einzelkamera-/2D-LiDAR-Architektur bleibt getrennt von Nova 2 mit Xavier AGX,
15 Kameras, Infrarotbeleuchtung und 3D-Kartierung. Fünf Zentimeter Kartenauflösung
sind weder Navigationsfehler noch Sehpräzision. Die operative Erprobung laut
Schreiben vom 30. Dezember 2022 belegt kein erstes Verkaufsdatum und keinen
aktuellen Lagerbestand. Alle 16 nativen Hivemind-Showcase-Namen haben Entscheidungen
als eigene Plattformen oder Integrations-/Fremdherstellerbeispiele. Hivemind,
Aechelon und PC-Nova werden nicht als zusätzliche physische Roboter importiert;
iPRD bleibt hinsichtlich OEM und genauer Konfiguration offen. Die alten
Nova-Produktadressen leiten auf die Startseite um; der Identitätsbeleg stammt aus
der Fallstudie und der expliziten Modellliste, nicht aus der Weiterleitung.

18 öffentliche HTTP-200-Antworten plus ein über den verlinkten öffentlichen
Canto-Viewer ausgeliefertes einseitiges PDF sind mit SHA-256 gesichert. Das
Viewer-JavaScript und dessen öffentlicher Share-Aufruf wurden gelesen; kein
Login, keine Formulare und keine geänderten Berechtigungen. Der temporäre
Download-Link ist im getrackten Bericht ausgelassen. Native HTML- und
extrahierte PDF-Texte, keine visuelle Bild-/PDF-Prüfung. Abrufe am 2. November UTC;
Review am 3. November Europe/Berlin. Dauerhafter Bericht:
`reports/competitor-batch-126-evidence.json`.

808 Unit-Tests in 64 Dateien und 16 Browserfälle einschließlich vier Axe-Prüfungen
bestanden. Build: 3.322 Seiten. Datenaudit: null Fehler, 1.162 Warnungen; die zwei
zusätzlichen Warnungen betreffen ausschließlich unbelegte Nova-Erscheinungsjahre.
Geprüft: vier Produktseiten, 84 Felder, 9 Quellenbadges,
67 ausgelassene Leerfelder, 17 Merkmalsaussagen und ein Firmenfokus.
Modell-Export und ursprüngliche Queue: je zwei Ziele und 42 Felder. Suche,
Vergleich, strukturierte Eigenschaften, vollständiger Belegexport und
byteidentischer Reimport der 32 getrackten Datendateien geprüft. Eigene Browser,
Testserver und Recherchehelfer sind beendet; fremde Ressourcen erhalten.
Die externen YouTube-/Axe-Befunde aus Batch106 bleiben außerhalb dieser Prüfung offen.

Daten-Zwischencommit `fdf6296ad042f0b2019afb69eb30b79837948721` ist auf `codex/competitor-directory-expansion` gepusht und
remote geprüft. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment.
Drei ursprüngliche Modellidentitäten, neun Listingidentitäten und 862
Detailinhaltsprüfungen bleiben offen. Vollständige Herstellerportfolios,
unabhängige Leistung, exklusive USPs und Rang Nr. 1 sind weiterhin unbewiesen.


## Ergänzung 127 – ANYbotics-Generationen und Booster-Ausstattungen (3. November 2026)

Sieben neue Modelle/Konfigurationen: ANYmal B und C, K1 Geek Edition, Education und
Professional sowie Booster T2 Education und Professional. Sechs bestehende Einträge
sind überarbeitet: ANYmal, ANYmal D, ANYmal X, K1, Booster T1 und Booster T2.
13 ausgewählte Produkte umfassen 216 Felder: 81 dokumentiert und 135 unbekannt.
Elf neue Feldprüfungen und zwei Erweiterungen ersetzen acht vorherige Feldprüfungen;
der Nettozuwachs beträgt 208 Felder. Neun neue Merkmalsdatensätze, vier erweiterte
Merkmalsdatensätze, 29 zusätzliche Aussagen, 15 Quellenverweise und zwei Firmenfokus-
Prüfungen ergänzen den Bestand. Gesamt: 2.279 Katalogeinträge, 1.207 datierte
Merkmalsdatensätze, 5.388 Aussagen, 2.431 Quellenverweise und 122 Firmenfokus-Prüfungen.
1.129 Modelle haben 21.465 ausgewählte Feldprüfungen: 7.906 dokumentiert, 13.173
unbekannt, 288 widersprüchlich und 98 Roadmap. Von 518 ursprünglichen Recherchezielen
haben 459 ausgewählte Feldprüfungen; 59 bleiben offen. Sie umfassen jetzt 8.428 Felder.

Die nativen CSS-Grid-Spalten ordnen K1 Geek 48 TOPS dense, 2 Ah und 20 Minuten
Gehen bei 1,1 m/s zu. Education: 117 TOPS, 5 Ah und 70 Minuten; Professional:
200 TOPS, 5 Ah und 70 Minuten. Die 2 m/s Höchstgeschwindigkeit ist ein anderer
Betriebspunkt. Alle drei benannten Ausstattungen teilen etwa 95 cm, 19,5 kg und
22 DOF. Responsive Kopien werden nicht als weitere Ausstattungen importiert.
Optionale Magnetladung ist weder eine Ladezeit noch allgemein enthaltenes Zubehör.
Der bisherige K1-Preis von 5.999 USD und das Jahr 2025 sind nicht durch die gelesenen
Herstellerseiten belegt; die Store-Links führen zu Kooperationsanfragen ohne Zahlenpreis.

T2 Education listet 375 TOPS; Professional nennt Jetson Thor T5000 mit 2070 TFLOPS.
Diese Einheiten bleiben unverändert und werden nicht als direkter Leistungsfaktor
verglichen. 31 DOF, ungefähr 1,4 m, 48 V/10 Ah und zwei Stunden kontinuierliches
Gehen stehen getrennt von 3 m/s Höchstgeschwindigkeit. Die ungefähr 42 kg hängen
von Ausstattung und Version ab. Maximal 10 kg beziehen sich auf beide Arme zusammen
und hängen ausdrücklich stark von deren Haltung ab. Hände, Greifer, Handgelenkkameras
und LiDAR bleiben ausstattungsabhängig; kein allgemeiner Lieferumfang wird behauptet.

T1-Dokumentation trennt 23 DOF mit vier DOF je Arm von der gesondert erwähnten
Sieben-DOF-Armversion. Diese unterstützt Soccer, Teach und Dance Agents ausdrücklich
nicht. Basic nutzt einen AGX Orin für Bewegung und Wahrnehmung; Standard trennt i7
und AGX Orin. Zwei Stunden Batterielaufzeit und höchstens zwei Stunden Laden bleiben
getrennt. Der frühere T1-Produktlink leitet auf eine allgemeine Seite um und liefert
keinen Modellbeleg; die technischen Werte stammen aus der Dokumentation. Das
bisherige Erscheinungsjahr 2024 ist dort nicht belegt.

Herstellereigene GitHub-Repositories benennen ANYmal B, C und D als Generationen.
Die zwei öffentlichen API-Seiten liefern 102 Repositories; die drei verwendeten
Modell-Repositories gehören ANYbotics und sind keine Forks. Vereinfachte URDF-/ROS-
Beschreibungen ermöglichen Visualisierung; erweiterte Simulation und Steuerung sind
Mitgliedern von ANYmal Research vorbehalten. Die BSD-Lizenz gilt für publizierte
Software. Sie bestätigt keine vollständigen physischen Werte, installierte Sensorik,
freie Robotersteuerung oder heutige Lieferbarkeit. ANYmal bleibt eine generische
Familienreferenz, kein stiller Alias von C oder D. Frühere unbelegte Masse-, Laufzeit-,
Nutzlast-, Geschwindigkeits-, IP- und Erscheinungsjahrwerte werden ausgelassen.

Für ANYmal X wird ausschließlich der vom Hersteller verfasste LinkedIn-Posttext
verwendet: autonome Runden, thermische, visuelle, akustische und Gassensorik sowie
Wartungsabläufe. Transkript, Kommentare, verwandte Beiträge und Bilder sind nicht
Beleggrundlage. Der angekündigte 27. Oktober 2026 ist ein Launch-Meilenstein,
kein belegtes erstes Verkaufsjahr; die bestehende Begründung bleibt mit aktualisiertem
Prüfumfang erhalten. 12 DOF, 1 m/s und IP67 sind in den gewählten Quellen nicht
belegt. Marketing zu gefährdeten Umgebungen ist kein zonenspezifischer Zertifikatsnachweis.

16 Abrufdatensätze: 15 HTTP 200 und ein HTTP 403 von der ANYbotics-Hauptwebsite.
Weitere Anfragen an diesen Host wurden gestoppt; öffentliche Hersteller-Repositories
und Herstellerposts wurden ohne Umgehung genutzt. Alle gespeicherten Antwortkörper
haben geprüfte SHA-256-Werte. Native HTML-/README-/Posttexte und DOM-Spalten,
keine visuelle Bild- oder PDF-Prüfung, keine Formulare, Konten oder Transaktionen.
Abrufe am 2. November UTC; Review am 3. November Europe/Berlin. Dauerhafter Bericht:
`reports/competitor-batch-127-evidence.json`.

808 Unit-Tests in 64 Dateien und 18 Browserfälle einschließlich vier Axe-Prüfungen
bestanden. Build: 3.329 Seiten. Datenaudit: null Fehler, 1.174 Warnungen; zwölf
zusätzliche Warnungen betreffen ausschließlich unbekannte Erscheinungsjahre.
Geprüft: 13 Produktseiten, 216 Felder, 55 Quellenbadges,
135 ausgelassene Leerfelder, 40 Merkmalsaussagen und zwei Firmenfokus-Seiten.
Modell-Export: 4 Ziele mit 66 Feldvorkommen;
ursprüngliche Queue: vier Ziele mit 66 Feldern. Sechs Firmenbeschreibungsreferenzen
behalten ihre bisherigen Identitäts-/Konfigurationszuordnungen. Die neuen nativen
K1-Ausstattungen sind kein automatischer Beleg für identische historische Geek-/Pro-
Konfigurationen. Suche, Vergleich, strukturierte Daten,
vollständiger Belegexport und byteidentischer Reimport aller 32 getrackten Datendateien
geprüft. Eigene Browser, Testserver und Recherchehelfer sind beendet; fremde Ressourcen
erhalten. Externe YouTube-/Axe-Befunde aus Batch106 bleiben außerhalb dieser Prüfung offen.

Daten-Zwischencommit `637870abe72c168a2bb805a894f1c6ffcea6459e` ist auf `codex/competitor-directory-expansion` gepusht und
remote geprüft. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment.
Drei ursprüngliche Modellidentitäten, neun Listingidentitäten und 862
Detailinhaltsprüfungen bleiben offen. Vollständige Herstellerportfolios,
unabhängige Leistung, exklusive USPs und Rang Nr. 1 sind weiterhin unbewiesen.


## Ergänzung 128 – Agility: Digit-Generationen und historische Cassie-Konfigurationen (3. November 2026)

Fünf neue Modelle/Konfigurationen: Digit 4, Digit 5, Cassie, Cassie Gen. 1 und Gen. 2.
Der bestehende Digit-Familieneintrag erhält erstmals ausgewählte Datenfeldprüfungen.
Sechs Einträge umfassen 102 Felder: 14 dokumentiert, 81 unbekannt und sieben Roadmap.
16 zusätzliche Merkmalsaussagen, 21 Produktquellenverweise und ein Firmenfokus ergänzen
den Bestand. Gesamt: 2.284 Katalogeinträge, 1.212 datierte Merkmalsdatensätze,
5.404 Aussagen, 2.452 Quellenverweise und 123 Firmenfokus-Prüfungen. 1.135 Modelle
haben 21.567 ausgewählte Feldprüfungen: 7.920 dokumentiert, 13.254 unbekannt,
288 widersprüchlich und 105 Roadmap. Von 518 ursprünglichen Recherchezielen haben
460 ausgewählte Feldprüfungen; 58 bleiben offen. Diese Queue umfasst 8.445 Felder.

Die Mitteilung vom 3. Januar 2020 startet ausdrücklich den kommerziellen Verkauf
von Digit und benennt Ford als ersten Kunden für die ersten beiden Roboter.
Der im vorherigen Mai gezeigte Prototyp und das frühere Katalogjahr 2019 bleiben
vom ausgewählten kommerziellen Erscheinungsjahr 2020 getrennt. Der generische
Digit-Eintrag wird nicht still einem neueren Modell gleichgesetzt. Frühere
45.000 USD, ungefähr 40 kg, drei Stunden Laufzeit, 1,5 m/s und Handtyp none sind
nicht als universelle Familienwerte belegt und werden ausgelassen. Die allgemeine
Deployment-FAQ beschreibt weiter abgegrenzte Arbeitszellen und Fernsteuerung bei
Einrichtung oder Forschung; das bestätigt keine pauschal barrierefreie Nutzung
jeder Generation und keinen universellen Lieferumfang.

Digit 4 ist im Herstellertext ausdrücklich als eingesetzte Vorgängergeneration
benannt. Mehr als 65.000 Betriebsstunden sind eine kumulierte Flotten-/Standortangabe,
keine Einzelroboter-Batterielaufzeit. Die 100.000 Behälter und etwa 98 Prozent
Genauigkeit während der Aufgabe gelten für das genannte GXO-Standortbeispiel;
sie belegen weder Behälter pro Stunde noch Nutzlast oder numerische Sehpräzision.
Auch das Verhältnis von Lauf- zu Ladezeit von 2:1 liefert für sich keine Dauer.

Digit 5 wurde am 15. September 2026 vorgestellt. Zielwerte von 129 kg, 1,81 m
Standhöhe, 50 lb Nutzlast, 90 Minuten Laufzeit, neun Minuten Laden und wechselbaren
Greifern behalten Roadmap-Status. 50 lb erscheinen in der Mitteilung als 22,7 kg
und auf der Produktseite gerundet als 23 kg; dies ist kein anderer Lastfall.
Maximal 2,2 m erreichbare Höhe sind weder horizontale Armreichweite noch Armlänge.
Mehr als 20 Arbeitsstunden pro 24 Stunden umfassen wiederholtes Laden und sind
keine Einzelakku-Laufzeit. Ladezustands-Endpunkte und genaue Belastungsbedingungen
sind nicht angegeben. Die Mitteilungen vom 15. und 22. Oktober beschreiben die
Nyobolt-Batterie und IGX-Thor-/Halos-Architektur weiterhin als geplante Ausstattung.
Der Eintritt in ein Prüflabor ist kein abgeschlossenes Zertifikat. Früher Zugang
bleibt für das erste Halbjahr 2027 vorgesehen, breitere Verfügbarkeit für die
folgenden sechs bis neun Monate beziehungsweise bis Jahresende. 2026 wird deshalb
nicht als belegtes erstes Verkaufsjahr eingetragen. Erwartete Kennzeichnungen,
Auftragsvolumen und Fabrikkapazität sind keine erteilte globale Zulassung,
Roboter-Einzelpreise oder tatsächlich ausgelieferte Stückzahlen.

Cassie wurde nach Herstellerangabe von August 2017 bis Juli 2019 verkauft; 2017
ist der Beginn dieses ausdrücklich berichteten Verkaufszeitraums. Das offizielle
GitHub-Handbuch und README erklären das Produkt als nicht mehr unterstützt; das
Repository ist herstellereigen, nicht geforkt und archiviert. Der Betriebsabschnitt
unterscheidet Gen. 1 (Herbst 2017) und Gen. 2 (Frühjahr 2018) nach der Anordnung
von Entwicklungs- und Nutzerrechner. Diese Hardware-Epochen sind kein ausdrücklich
belegtes erstes Verkaufsdatum der jeweiligen Konfiguration und keine separaten
MATLAB-/Firmwareversionen. Laufzeit, Gesamtmasse, Nutzlast und vollständige DOF
bleiben unbekannt. Teilgelenkmodelle mit Federn und geschlossenen Ketten werden
nicht zu einer Zahl unabhängig angetriebener Gelenke aufsummiert; Prüfstand-
und Montagezeichnungen sind keine Gesamtroboterabmessungen. Lade-LED-Zustände und
Packspannungen liefern keine Ladezeit. Der dokumentierte 100-Meter-Lauf in
24,73 Sekunden umfasst Stehen am Anfang und Ende und bleibt ein konkretes
Forschungsergebnis statt allgemeiner Geh- oder Maximalgeschwindigkeit.

13 im ausgewählten Quellenpaket erfasste Namen/Referenzen haben Entscheidungen.
Arc bleibt Flottensoftware, RoboFab eine Fabrik, Nyobolt Batteriepartner und
IGX Thor/Halos eine geplante Rechen-/Sicherheitsplattform. Digit 3 wird nur in einer
eingereichten Frage erwähnt; die Herstellerantwort belegt die genaue benannte
Konfiguration nicht ausdrücklich. Dies bleibt ein zusätzlicher Recherchehinweis,
keine neue Roboterzeile und keine der drei ursprünglichen offenen Modellidentitäten.
Unbenannte Radroboter bleiben explorative Roadmap. Der 2023-Artikel beschreibt
neue Hände/Kopf für eine unnummerierte Digit-Generation; er wird nicht ohne weiteren
Beleg in eine zweite Digit-4-Zeile oder pauschale Digit-4-Spezifikationen umgewandelt.

22 öffentliche HTTP-200-Antworten mit geprüften SHA-256-Werten. Native HTML-
Artikelkörper, offizielle Wiki-/README-Texte und öffentliche Repository-Metadaten;
Navigation, globale Führungsbiografien und verwandte Beiträge sind von den
Artikelbelegen abgegrenzt. Die Product-Sheet-Seite ist ein Formular-Landing ohne
gefundenen direkten PDF-Link. Kein Formular übermittelt, kein Produktblatt-PDF,
kein Bild oder Video visuell geprüft, keine Konten oder Transaktionen. Abrufe am
2. November UTC; Review am 3. November Europe/Berlin. Dauerhafter Bericht:
`reports/competitor-batch-128-evidence.json`.

808 Unit-Tests in 64 Dateien und 18 Browserfälle einschließlich vier Axe-Prüfungen
bestanden. Build: 3.334 Seiten. Datenaudit: null Fehler, 1.178 Warnungen; vier
zusätzliche Warnungen betreffen ausschließlich unbekannte Erscheinungsjahre.
Geprüft: sechs Produktseiten, 102 Felder, 9 Quellenbadges,
81 ausgelassene Leerfelder, 19 Merkmalsaussagen und ein Firmenfokus.
Modell-Export: zwei Quellenvorkommen mit 34 Feldvorkommen; ursprüngliche Queue:
ein Ziel mit 17 Feldern. Eine Firmenbeschreibungsreferenz behält ihre bisherige
Identitätszuordnung. Suche, Vergleich, strukturierte Eigenschaften, vollständiger
Belegexport und byteidentischer Reimport aller 32 getrackten Datendateien geprüft.
Eigene Browser, Testserver und Recherchehelfer sind beendet; fremde Ressourcen
erhalten. Externe YouTube-/Axe-Befunde aus Batch106 bleiben außerhalb dieser Prüfung offen.

Daten-Zwischencommit `6e9fe3b2c9eea5c152375ddc0436fb309c08cb1d` ist auf `codex/competitor-directory-expansion` gepusht und
remote geprüft. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment.
Drei ursprüngliche Modellidentitäten, neun Listingidentitäten und 862
Detailinhaltsprüfungen bleiben offen. Vollständige historische/aktuelle Portfolios,
unabhängige Leistung, exklusive USPs und Rang Nr. 1 sind weiterhin unbewiesen.


## Ergänzung 129 – Apptronik-Portfolio, Apollo-Generationen und NASA Valkyrie (3. November 2026)

Zwölf neue Modelle/Konfigurationen: Apollo 1, Apollo 2, QDH, Astra, QDB, QDA,
Draco II, Draco III, Scorpio, Sagittarius, Apex und NASA Valkyrie (R5). Der bestehende
Apollo-Familieneintrag erhält erstmals ausgewählte Datenfeldprüfungen. 13 Einträge
umfassen 225 ausgewählte Felder: 37 dokumentiert und 188 unbekannt. Kommerzielle
Felder sind nach Manipulator-/Wearable-Relevanz ausgewählt; keine zusätzlichen
Flug-/Tauchfelder für Exoskelette. 29 neue Merkmalsaussagen, 17 Produktquellenverweise
und zwei Firmenfokus-Prüfungen ergänzen den Bestand. Gesamt: 2.296 Katalogeinträge,
1.224 datierte Merkmalsdatensätze, 5.433 Aussagen, 2.469 Quellenverweise und 125
Firmenfokus-Prüfungen. 1.148 Modelle haben 21.792 ausgewählte Feldprüfungen:
7.957 dokumentiert, 13.442 unbekannt, 288 widersprüchlich und 105 Roadmap.
Von 518 ursprünglichen Recherchezielen haben 461 ausgewählte Feldprüfungen;
57 bleiben offen. Diese Queue umfasst 8.462 Felder.

Alle zehn nativen Our-Work-Karten haben Modell-/Herstellerentscheidungen. Die
retrospektiv benannte Apollo-1-Plattform und die aktuelle Apollo-2-Seite bleiben
getrennt vom generischen Apollo-Familieneintrag. Die Mitteilung vom 23. August 2023
nennt 160 lb Masse, 5 ft 8 in Höhe, 55 lb Hubfähigkeit und vier Stunden pro
wechselbarem Akku. Diese Werte stehen ausdrücklich als historische angekündigte
Konfiguration auf der Familienzeile. Die Quelle nennt diese Ausführung nicht
explizit Apollo 1; die Zahlen werden daher weder dort noch bei Apollo 2 pauschal
eingetragen. Eine weitere IMTS-Seite wiederholt die Zahlen, ohne eine neue
Generationszuordnung zu belegen. 50.000 USD und 1,2 m/s bleiben unbelegt und werden
ausgelassen. Die Vorstellung 2023 wird nicht als erster belegter Verkauf behandelt.

Apollo 2 unterscheidet bipedale und rollende Basisoptionen, Kommunikationslichter,
Sprache und Brustdisplay. 7x22-Betrieb beruht auf Akkuwechsel, Zwischenladen und
Kabelbetrieb; es sind keine 22 Stunden mit einer Akkuladung. Über 90 Prozent
Effizienz beziehen sich auf die Aktuatorplattform, nicht Gesamtroboter-Laufzeit,
Geschwindigkeit oder Batterieeffizienz. Artemis und Fleet Connect sind Steuerungs-
beziehungsweise Flottensoftware. KI-Partnerschaften, Manipulationssprache und
konfigurierbare Sicherheitszonen belegen weder vollständige autonome Aufgaben,
Fingeranzahl, pauschalen Lieferumfang noch ein abgeschlossenes Ganzroboter-Zertifikat.

QDH, Astra und QDA sind obere Körperplattformen beziehungsweise Testbeds; QDB wird
als Quick Development Biped benannt. Rollen und Historie bleiben von vollständigen
numerischen Hardwarewerten getrennt. Die gemeinsame Draco-II/III-Karte nennt eine
flüssigkeitsgekühlte 10-DOF-Draco-Plattform und Echtzeit-Linux-/ROS-Unterstützung,
belegt diesen vollständigen Wert aber nicht getrennt für beide benannten Generationen.
Beide exakten DOF-Felder bleiben unbekannt; die gemeinsame Aussage ist als solche
im Text sichtbar. Niedrige Steuerungsebenen bedeuten keine aktuelle Unterstützung
oder serienreife autonome Anwendung.

Scorpio ist ein mobiler Manipulationsansatz mit passiver Feder-Schwerkraftkompensation
im elektrischen Arm. Mehr als das Arm-Eigengewicht zu heben liefert keine numerische
Roboter-Nutzlast oder Lastquote des gesamten mobilen Systems. Sagittarius und Apex
bleiben unterschiedliche Exoskelett-/Wearable-Projekte. Kraftableitung in den Boden,
Bewegungsfreiheit und effiziente Aktuation sind keine Zahlen für Unterstützungs-
kraft, sichere medizinische Nutzung, autonome Gehfähigkeit, DOF oder Batteriedauer.
Historische Portfolioerwähnung belegt keinen aktuellen Verkauf oder Support.

Valkyrie wird NASA zugeordnet, nicht als Apptronik-Produkt dupliziert. NASA benennt
Johnson Space Center als Konstrukteur und R5 als Alias. Apptronik beschreibt
Mitwirkung des Teams an Aktuatoren/Steuerung; das ist ein Entwicklungsbeitrag.
NASA-Artikel und zweiseitiges Factsheet stimmen bei 300 lb, 6 ft 2 in, 44 DOF,
vereinfachten Händen mit drei Fingern und Daumen sowie ungefähr einer Stunde
Batteriebetrieb überein. 1,8 kWh sind Energie, kein Zeitraum; Netzbetrieb ist eine
Alternative. Teilgelenklisten werden nicht zu einem abweichenden Gesamtwert addiert.
Der DRC-Auftritt 2013 und das Artikeldatum 2015 sind Forschungs-/Publikations-
meilensteine, kein belegter erster kommerzieller Verkauf. Spätere Hände-/Knöchel-
Änderungen, Sensorik und Ziele in beschädigten Umgebungen belegen weder jede
Folgeversion noch IP-Zulassung, Navigationsgenauigkeit oder Raumfahrteinsatz.
NASA erhält ein neues abgeleitetes Herstellerprofil mit offizieller überprüfter
Website; die Quellen-Marken-/Aliasdatei bleibt unverändert. Gesamt: 645 exakte
CSV-Herstellerbezeichnungen, 1.037 Profile, davon 634 mit Modellen und 403 reine
Quellenprofile. Die neue NASA-Fokusprüfung bestätigt kein vollständiges NASA-Portfolio;
Robonaut 2 bleibt ein außerhalb dieser Prüfung liegender Herkunftshinweis.

Zehn gespeicherte Abrufdatensätze: neun HTTP 200 einschließlich des NASA-PDFs und
ein HTTP 404 für die Sitemap. Die fehlgeschlagene Sitemap ist keine Belegquelle.
Alle Antwortkörper haben geprüfte SHA-256-Werte. Die zehn Portfolio-Karten und acht
Apollo-2-Produktabschnitte wurden nach nativer DOM-Zugehörigkeit extrahiert;
verborgene Webflow-Menü-/Agenturvorlagen und globale Navigation sind ausgeschlossen.
NASA-Artikel und PDF wurden als Text geprüft, ohne visuelle Bild-/PDF-Prüfung.
Keine Formulare, Konten, Transaktionen oder Umgehung. Abrufe am 2. November UTC;
Review am 3. November Europe/Berlin. Dauerhafter Bericht:
`reports/competitor-batch-129-evidence.json`.

808 Unit-Tests in 64 Dateien und 22 Browserfälle einschließlich vier Axe-Prüfungen
bestanden. Build: 3.347 Seiten. Datenaudit: null Fehler, 1.191 Warnungen; 13 zusätzliche
Warnungen betreffen ausschließlich unbekannte Erscheinungsjahre. Geprüft: 13
Produktseiten, 225 Felder, 11 Quellenbadges,
188 ausgelassene Leerfelder, 32 Merkmalsaussagen und zwei Firmenfokus-Seiten.
Modell-Export: zwei Quellenvorkommen mit 34 Feldvorkommen; ursprüngliche Queue:
ein Ziel mit 17 Feldern. Die Firmenbeschreibungsreferenz behält ihre Zuordnung.
NASA hat kein ursprüngliches Firmen-CSV-Quellenvorkommen; das neue Profil und dessen
Fokus werden dennoch gerendert. Suche, Vergleich, strukturierte Eigenschaften,
Pfund-/Laufzeitfilter, vollständiger Belegexport und byteidentischer Reimport der
32 getrackten Datendateien geprüft. Eigene Browser, Testserver und Recherchehelfer
beendet; fremde Ressourcen erhalten. Externe YouTube-/Axe-Befunde aus Batch106
bleiben außerhalb dieser Prüfung offen.

Daten-Zwischencommit `34a3eb141f6121bf79b0404337f901ba00d6f2d4` ist auf `codex/competitor-directory-expansion` gepusht und
remote geprüft. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche
Modellidentitäten, neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben
offen. Vollständige historische/aktuelle Portfolios, unabhängige Leistung,
exklusive USPs und Rang Nr. 1 sind weiterhin unbewiesen.


## Ergänzung 130 – Sanbot-Varianten, Herstellerrollen und historische Zollplattform (3. November 2026)

Neun neue Modell-/Konfigurationszeilen: Sanbot Max, Professional, Standard und
Economic; Sanbot Mini ELF, PRO, BASE und RETAIL; Sanbot Xiaohai 2.0. Nano und Elf
sind überarbeitet und erstmals mit ausgewählten Datenfeldprüfungen versehen.
Elf und Max haben je 20 ausgewählte Felder, Mini ELF und Nano je 16; Xiaohai 2.0
hat 20. Insgesamt elf Einträge und 200 Felder: 58 dokumentiert, 141 unbekannt,
eines widersprüchlich. 36 Merkmalsaussagen, 40 Produktquellenverweise und eine
Firmenfokus-Prüfung kommen hinzu. Gesamtbestand: 2.305 Modelle/Konfigurationen,
1.233 datierte Merkmalsdatensätze, 5.469 Aussagen, 2.509 Produktquellenverweise und
126 Firmenfokus-Prüfungen. 1.159 Modelle haben 21.992 ausgewählte Feldprüfungen:
8.015 dokumentiert, 13.583 unbekannt, 289 widersprüchlich und 105 Roadmap.
Von 518 ursprünglichen Zielen haben 463 ausgewählte Feldprüfungen; 55 bleiben
offen. Die ursprüngliche Queue umfasst 8.498 Felder: 3.380 dokumentiert,
4.924 unbekannt, 176 widersprüchlich und 18 Roadmap.

Alle vier Produktfamilien aus der nativen Navigation und die jeweils drei
explizit benannten Max-/Mini-Konfigurationen haben Zuordnungsentscheidungen.
QIHAN bleibt Herstellerbezeichnung auf den historischen Nano-/Elf-/Xiaohai-Zeilen;
die native Brand Story nennt Sanbot Innovation als Hersteller. Max und Mini ELF
nutzen diese Bezeichnung. Beide Herstellerlabels sind dem bestehenden Sanbot-
Produktmarkenprofil zugeordnet. Dies behauptet keine rechtlich geprüfte Umfirmierung
oder Firmenfusion. Nur der Sanbot-Markendatensatz erhält zusätzliches Mapping,
Alias und Primärquelle; andere Markendatensätze bleiben gleich. Das Dateidatum
ändert sich entsprechend; 591 Firmen-CSV-Zeilen erhalten dadurch ein neues
Verzeichnisdatum, nur die Sanbot-Zeile ändert weitere inhaltliche Felder.
Es bleiben 1.037 Marken-/Firmenprofile, davon 634 mit Modellen und 403 reine
Quellenprofile; der CSV-Bestand hat 646 exakte Herstellerbezeichnungen.

Nano nennt nativ 19 kg, 848,32 mm Höhe, 395,22 mm Tiefe, 420,59 mm Breite,
maximal 0,8 m/s, vier Stunden Betrieb und über zehn Stunden Standby. Die historische
Ankündigung nennt stattdessen 2,7 ft Höhe; der Unterschied bleibt als Widerspruch
sichtbar. 2.800 USD ist der angekündigte Preis vom August 2017; geplante Oktober-
Verfügbarkeit bestätigt weder tatsächlichen Erstverkauf noch ein aktuelles Angebot.
Alexa, Q-Link und Apps sind historische Integrationen ohne bestätigten heutigen
Support. 20 Ah/300 W ist ein uneindeutiges elektrisches Label, keine stillschweigend
berechnete Wh-Zahl oder Ladezeit. Die Grade-Zeile in Zentimetern belegt keinen
Steigungswinkel. Komponenten-DOF werden nicht zu einer Gesamtzahl addiert.

Elf nennt 19 kg, 902 x 421 x 331 mm nach den Quellenlabels Länge/Breite/Tiefe,
maximal 0,8 m/s und ungefähr zehn Stunden Betrieb; über 24 Stunden Standby sind
separat. Der falsche Suffix 41,9in neben 19 kg liefert keinen zweiten Massenwert.
Die spätere Ladepult-Sektion mit 1,35 kg, 250 x 118 x 248 mm, Wandmontage und
0–5 m/180° Signalabdeckung wird nicht zu Robotermasse, Körpergröße, Dockinggenauigkeit
oder Ladezeit. Projektor- und Displayangaben bleiben getrennt; 720p-/1920x720-/16:9-
Texte liefern keine konsistente native Projektorauflösung. Ein unzugeordnetes 98%-
Textelement belegt keine Erkennungsgenauigkeit oder Sicherheit.

Max Professional nennt 100 kg, etwa 18 Stunden Betrieb und 75 kg Fracht-/Anbau-
kapazität. Diese Last ist keine Arm-Nutzlast. Standard nennt etwa 90 kg und zehn
Stunden Betrieb; Economic etwa 60 kg, 300 Wh und ausdrücklich manuelles Schieben
statt motorisiertem Antrieb. Standard/Economic nennen keine Frachtfreigabe. Die
5-m/s-Angabe gehört zu den motorisierten Spalten, nicht Economic. Arm-/Hand-DOF
sind keine vollständigen Roboter-DOF. Kopf-Untertabellen widersprechen bei Standard
und Economic ihrer Motorzeile; daraus wird kein verifizierter Gesamtwert gebildet.
1,6 kWh beziehungsweise die 1548-Wh-Familienangabe sind Energie, keine Ladezeit.
50 Stunden Standby und werbliche 24/7-Nutzung mit Nachladen bleiben von einzelner
Akkulaufzeit getrennt. Die Ankündigung 2017 nennt ungefähr 4,8 ft und 165 lb Zuglast;
die CES-Mitteilung 2018 nennt 4,7 ft, 220 lb, 165 lb Anbau- und 881 lb Zuglast.
Datierte Konfigurationen und Lastarten bleiben getrennt. Keine dieser Angaben wird
pauschal allen benannten Versionen zugeordnet.

Mini ELF nennt in allen drei Versionsspalten 5 kg und zwei lageabhängige Umrisse:
30 x 53 x 28 cm in Standardstellung, 30 x 59 x 30 cm bei maximalem Winkel. Netz-
versorgung ist kein Akkuwert oder Beleg einer autonomen Fahrbasis. PRO führt eine
3D-Kamera; BASE/RETAIL führen diesen Eintrag nicht. PRO/BASE haben Mikrofon-/Kamera-
Sperrschalter; RETAIL vermerkt ausdrücklich nicht unterstützt. Die allgemeine
Datenschutzwerbung wird daher nicht auf jede Variante übertragen. Geteilte Zeilen
für Display und Gesichts-/Halsbewegung behalten ihren gemeinsamen Geltungsbereich;
keine künstlichen Einzelzellen oder aufsummierte Gesamt-DOF. Die separate Temperatur-
Anwendung bezeichnet die Infrarotmessung als ergänzend, ausdrücklich nicht als
medizinische Detektion. Keine Diagnosegenauigkeit, Zulassung oder Standardausstattung
aller Varianten wird daraus abgeleitet.

Xiaohai 2.0 ist laut Hersteller eine größere angepasste Zollplattform mit Armen,
Fingern und Thermalkamera, im August 2017 für Gongbei beschrieben. Vier Einsatz-
aufgaben und zehn Übersetzungssprachen sind historische Herstellerangaben. Frühere
Zusammenarbeit und tägliche Passagierzahlen sind Standortkontext, kein Roboter-
Durchsatz oder unabhängig belegter Sicherheits-/Medizinerfolg. Exakte Hardware-
werte und heutiger Betrieb bleiben unbestätigt. King Kong im Supporttext und
kingkong.html in der Max-Mitteilung sind Identitätshinweise; genaue ausgestattete
Gleichheit ist unbewiesen. Der unversionierte Sanbot-Text 2015 belegt kein weiteres
unterschiedliches Modell neben Elf. Donkey ist dort nur als proprietäre Lösung
benannt. MPS, Cloud, Apps und Temperatur-Anwendungen werden nicht als zusätzliche
Roboter importiert. Vollständige historische Portfolios bleiben unbewiesen.

27 gespeicherte Antworten: 24 HTTP 200 und drei HTTP 403. Zwei Transportfehler
(TLS und Verbindung) werden getrennt dokumentiert. Sperrantworten und fehlgeschlagene
Abrufe sind ausgeschlossen; betroffene gesperrte Hosts wurden nicht erneut angefragt.
TLS-Prüfung wurde nicht abgeschaltet. Öffentlich verlinkte HTTP-Produktseiten der
englischen Herstellerseite waren erreichbar. Zwei nicht passende alte Pfade
leiten auf die Startseite; diese Antworten sind keine Produktspezifikationen.
Alle Antwortkörper haben überprüfte SHA-256-Werte. Dreispaltige native DOM-Matrizen,
geteilte Einzelzellen, Ladepult-Sektionen und vier Hersteller-Nachrichtentexte sind
abgegrenzt. NTB zeigt eine QIHAN-Mitteilung, keine unabhängige NTB-Produktprüfung;
angehängte fremde Nachrichten werden ausgeschlossen. Keine visuelle Bild-/PDF-
Prüfung, Formulare, Konten oder Transaktionen. Dauerbeleg:
`reports/competitor-batch-130-evidence.json`.

808 Unit-Tests in 64 Dateien und 26 Browserfälle einschließlich vier Axe-Prüfungen
bestanden. Build: 3.356 Seiten. Audit: null Fehler und 1.201 Warnungen, davon zehn
zusätzliche ausschließlich für unbekannte Erscheinungsjahre. Ein erster Build
mit 3.355 Seiten war beendet, bevor die zusätzlich gefundenen Hersteller-Nachrichten
Xiaohai 2.0 und weitere Max-Abgrenzungen begründeten; danach Daten und abschließenden
Build erneut geprüft. Geprüft sind elf Produktseiten, 200 Felder,
37 Quellenbadges, 141 ausgelassene Leerfelder,
42 Merkmalsaussagen und eine Firmenfokus-Seite. Beide ursprünglichen Queue-Ziele
zeigen 36 ausgewählte Felder. Keine neuen Vorkommen im Modell-/Firmenbeschreibungsexport;
die Listingidentitäten bleiben erhalten. Suche, Vierervergleich, strukturierte
Eigenschaften, Laufzeit-/Massefilter, vollständiger Belegexport und byteidentischer
Reimport der 32 getrackten Datendateien geprüft. Offline-Refresh ist semantisch
idempotent. Die erste Browserrunde hatte zwei fehlerhafte Erwartungen im Suchtest: Die Abfrage
traf bereits die Produktbeschreibung, sodass kein zusätzlicher Nur-Merkmal-Auszug
erscheinen musste. Nach Umstellung auf eine ausschließlich im Merkmal vorkommende
Phrase wurde der volle Prüfumfang erneut ausgeführt; Anwendung und Daten blieben
dabei unverändert. Eigene Browser, Testserver und Recherchehelfer beendet. Externe
YouTube-/Axe-Befunde aus Batch106 bleiben außerhalb dieser Prüfung offen.

Daten-Zwischencommit `91aaa35418db43abb2e11771605a8477d2ef6ce2` ist auf `codex/competitor-directory-expansion` gepusht und remote
geprüft. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche Modellidentitäten,
neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben offen. Aktuelle
Verfügbarkeit, unabhängige Leistung, exklusive USPs und Rang Nr. 1 sind nicht belegt.


## Ergänzung 131 – KEENON-Historie, C25 und getrennte MiR-Konfigurationen (3. November 2026)

Neun neue Modelle/Konfigurationen: DINERBOT T1, T2, T5, T6 und T2 Pro, M1,
GUIDERBOT G1, Xiaolang und MiR250 Dynamic. Vier bestehende Einträge sind überarbeitet:
C25, M2, G2 und MiR100. 13 neue ausgewählte Feldprüfungen mit 260 Feldern:
104 dokumentiert, 151 unbekannt, vier widersprüchlich und eine Roadmap. Elf neue
Merkmalsdatensätze sowie zwei Erweiterungen liefern 46 zusätzliche Aussagen und
22 zusätzliche Produktquellenverweise; zwei vorhandene Firmenfokus-Prüfungen
sind erweitert. Gesamtbestand: 2.314 Modelle/Konfigurationen, 1.244 datierte
Merkmalsdatensätze, 5.515 Aussagen und 2.531 Produktquellenverweise. 1.172 Modelle
haben 22.252 ausgewählte Feldprüfungen: 8.119 dokumentiert, 13.734 unbekannt,
293 widersprüchlich und 106 Roadmap. Von 518 ursprünglichen Zielen haben nun 465
Feldprüfungen; 53 bleiben offen. Diese Queue umfasst 8.540 Felder: 3.399 dokumentiert,
4.943 unbekannt, 180 widersprüchlich und 18 Roadmap. Es bleiben 126 Firmenfokus-
Prüfungen und 1.037 Profile; Hersteller- und Marken-Mappings ändern sich nicht.

Die historische KEENON-Broschüre nennt T1 mit 58 kg/30 kg Transportlast, T2 mit
75 kg/40 kg, T5 mit 55 kg/40 kg und T6 mit 52 kg/35 kg. Einzellagen und bedingte
unterste/oberste Lagen behalten ihre Grenzen. 12–15 Stunden sind die historische
Akkuspanne; automatische Ladung liefert keine volle Ladedauer. T1 hat drei Trays,
Touchscreen und Rückkehr auf Tastendruck; T5 nennt Flottenkommunikation und regionale
Geschwindigkeitslimits; T6 nennt SLAM und Hindernisvermeidung. T2 hat eine geschlossene,
beidseitig zugängliche Kabine. Deren 160 L sind Volumen, keine Kilogramm. IPX5 ist
für innere Kabine und Hülle beschrieben, nicht pauschal für den ganzen Roboter.
T2 Pro ist auf der historischen Übersicht ausdrücklich COMING SOON; technische
T2-Werte und ein bestätigtes Lieferdatum werden nicht übertragen. Die Hersteller-
Historie nennt T1 2016, T2 2018, T5/T6 2019, M1/M2 2020 und den raupengetriebenen
Restaurant-Vorgänger Xiaolang 2013. Das sind benannte historische Meilensteine,
keine durch das PDF-Datum erfundenen Erscheinungsjahre. M1 ist ein medizinischer
Lieferroboter; M2-Desinfektionshardware wird nicht auf ihn übertragen.

G2 nennt 70 kg, 600 x 500 x 1450 mm, 1,2 m/s, ein doppelseitiges 21,5-Zoll-
1080p-Display und mindestens sieben Stunden Akkubetrieb. Die Untergrenze wird nicht
zum maximalen Laufzeitwert. G1 ist als eigener historischer Name belegt, erhält
aber keine G2-Hardwarewerte. Die Positionsdaten des nativen Broschürentexts ordnen
den G1/G2-Start dem Jahr 2016 zu; die Nachbarzahl 2017 ist ein anderer Meilenstein.
G2 wird aus Smart Home nach commercial verschoben, seine ID/Route und sein Bild
bleiben erhalten. Der neue G1 wird direkt gewerblich einsortiert. Die erste Unit-
Prüfung machte den zuvor unpassenden Unterfilter sichtbar; keine Wohnungsfunktion
wurde als künstlicher Tag ergänzt.

C25 nennt vier Reinigungsmodi, 4–6 Stunden Betrieb, 3–4 Stunden Laden, einen
400-m²/h-Reinigungsanspruch sowie getrennte 10-L-Frischwasser- und 8-L-Abwassertanks.
24-Stunden-Selbstladung ist keine Akkudauer; 5.000 m² Abdeckungswerbung ist keine
belegte Fläche pro Ladung. Der Herstellerbeitrag bestätigt Modell und Funktionen;
Fremdkommentare sind ausgeschlossen. Die zwei C25-PDF-Hosts haben identische Bytes
und bilden nur ein Dokument. Modellzuordnung stützt sich auf PDF-Titelmetadaten,
OCR des KEENON-Logos und den passenden Herstellerbeitrag. Die numerischen Tabellen
wurden nativ extrahiert, nicht aus unsicherer Zahlen-OCR übernommen. M2 nennt
60 kg, 500 x 500 x 1350 mm und 0,8 m/s. Mindestens zwölf Stunden sind ausdrücklich
Standby; die frühere unbelegte aktive 240-Minuten-Laufzeit ist entfernt. UV-
Bestrahlungsstärke, Sprühmenge, Tropfengröße und Desinfektionsflüssigkeit sind
keine Reinigungswasser-Tankkapazität oder unabhängig bestätigte medizinische Wirkung.

MiR100 hat vier Quellenkonflikte: Das Datenblatt vom Mai 2016 nennt 62,5 kg,
900 x 600 x 358 mm und zehn Stunden/20 km; die Broschüre 2022 nennt 77 kg,
890 x 580 x 352 mm und unbeladen bis neun Stunden Standard-/13 Stunden erweiterter
Akku. Beide historischen Geltungsbereiche bleiben sichtbar. 100 kg sind Plattform-
Transportlast, keine Arm-Nutzlast. Bis drei Stunden Vollladen, zwei Stunden bis 80%,
10-cm-Positionsradius und 0,55-m-Mittendrehradius stammen aus 2016. Der Hersteller
nennt erste Produktion und Verkäufe 2015; Gründung 2013 ist kein Modellstart.
Der Massenwert steht vor der Jahresangabe, damit der vorhandene Gewichtsfilter
62,5 kg statt 2016 als Zahl liest.

Die separate MiR250-Dynamic-Spalte von 2022 nennt 97 kg, 250 kg Transportlast,
800 x 580 x 300 mm und bis zwei m/s. Bis 13 Stunden gelten beladen, bis 17,5 Stunden
unbeladen. 1:16 Gelegenheitsladung und zehn Minuten Laden für zwei Stunden vierzig
Betrieb sind keine Vollladezeit. Positionsfahrt ±20 mm je X/Y-Achse bleibt von
VL-Marker-Docking ±3 mm je Achse getrennt. Standard/minimierte Korridore und Türen,
Steigungsbedingungen und optionale Reinraum-/ESD-Ausstattung bleiben getrennt.
Die Nachbarspalten werden weder auf MiR100 noch automatisch auf heutige MiR250-
Standardgeräte übertragen. Ein eigener Dynamic-Start und aktueller Lagerbestand
sind nicht belegt. Zubehör, Software und die zuvor offenen XMAN-L1/X101/M102-
Hinweise erzeugen keine zusätzlichen unbestätigten Roboterzeilen.

14 gespeicherte aktuelle Antworten: neun HTTP 200, fünf HTTP 404. Drei Transport-
fehler (ein Timeout, zwei DNS-Fehler) bleiben getrennt; sie sind keine erfolgreichen
Abrufe. Das schon am 1. November 2026 gesicherte MiR100-Datenblatt wird mit seinem
verifizierten SHA-256 und ursprünglichen Abrufdatum wiederverwendet. Der heutige
Timeout wird nicht als frischer HTTP-200-Beleg ausgegeben. Alle gespeicherten
Antwortkörper haben geprüfte Hashes. Native PDF-Seiten, Tabellen-Spalten und
Hersteller-HTML wurden abgegrenzt. Ein Versuch visueller PDF-Prüfung wurde von der
Umgebung wegen nicht unterstützter Bild-Eingabe abgewiesen; keine visuelle Prüfung
wird behauptet. Logo-OCR und native Textprüfung sind ausdrücklich dokumentiert.
Keine TLS-Umgehung, Formulare, Konten oder Transaktionen. Dauerbeleg:
`reports/competitor-batch-131-evidence.json`.

808 Unit-Tests in 64 Dateien, 26 Desktop-/Mobil-Browserfälle einschließlich vier
Axe-Prüfungen, Build mit 3.365 Seiten und Daten-Audit mit null Fehlern/1.201 Warnungen
bestanden. Zwei neue Warnungen für unbekannte Erscheinungsjahre werden durch zwei
neu belegte alte Jahre ausgeglichen; andere Warnungen bleiben gleich. 13 Produkt-
seiten, 260 Felder, 82 Quellenbadges,
152 ausgelassene Leerfelder, 52 Merkmalsaussagen, 72 strukturierte
Spezifikationseigenschaften und zwei Firmenfokus-Seiten sind abgeglichen. Zwei
Modell-Exportzeilen und zwei ursprüngliche Queue-Ziele enthalten je 42 ausgewählte
Felder. Frühere Firmenbeleg-Daten bleiben neben dem aktuellen Prüfdatum erhalten.
Die erste Exportprüfung erwartete fälschlich nur ein Datum statt der aggregierten
alten/neuen Quellen-Prüfdaten; die Prüfung wurde korrigiert. Die erste Browserrunde
hatte vier Fehler wegen fehlender Leerzeichen in zwei Traglastwerten. Danach wurden
die beiden Texte korrigiert und der komplette Build/Browserumfang erneut ausgeführt.
Der erste Build war nach der Kategorienkorrektur gezielt beendet worden; kein
abgebrochener oder veralteter Build gilt als Schlussprüfung.

Alle 2.301 nicht ausgewählten Bestandszeilen, alle 1.159 vorherigen Feldprüfungen,
124 nicht ausgewählte Firmenfokus-Prüfungen und alle 1.961 Quellenidentitäten bleiben
erhalten. Suche, Vierervergleich, Laufzeit-/Massefilter, vollständige Belegauslieferung
und byteidentischer Reimport aller 32 getrackten Datendateien sind geprüft. Der
Offline-Refresh ist semantisch idempotent. Eigene Browser, Testserver und Helfer
sind beendet; fremde Ressourcen bleiben erhalten. Die externen YouTube-/Axe-Befunde
aus Batch106 liegen weiterhin außerhalb dieses Prüfumfangs.

Daten-Zwischencommit `580ca907bc562ea068343ddb56d4d26fd764dc52` ist auf `codex/competitor-directory-expansion` gepusht und remote
geprüft. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche Modellidentitäten,
neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben offen. Vollständige
historische Portfolios, exklusive USPs und Rang Nr. 1 bleiben unbewiesen.


## Ergänzung 132 – Engineered-Arts-Generationen, Desktop-Revisionen und historische Exponate (3. November 2026)

Zwölf zusätzliche Modelle/Konfigurationen: Ameca Gen 1, Gen 2 und Gen 2.6;
Ameca Desktop, Ami Desktop und Azi Desktop jeweils Gen 2 und Gen 3; Mesmer;
SociBot Kiosk und Mini. Die vorhandenen Einträge Ameca und RoboThespian RT4
sind überarbeitet. Alle 14 ausgewählten Einträge haben je 17 geprüfte Felder:
90 dokumentiert, 143 unbekannt und fünf widersprüchlich. Die frühere Ameca-Prüfung
mit vier Feldern ist erweitert; damit kommen netto 234 Feldprüfungen hinzu,
13 neue Modellprüfungen und eine Erweiterung. Zwölf neue Merkmalsdatensätze und
zwei Erweiterungen liefern 65 zusätzliche Aussagen und 37 Produktquellenverweise.
Eine Firmenfokus-Prüfung kommt hinzu. Gesamt: 2.326 Modelle/Konfigurationen,
1.256 datierte Merkmalsdatensätze, 5.580 Aussagen, 2.568 Produktquellenverweise und
127 Firmenfokus-Prüfungen. 1.185 Modelle haben 22.486 ausgewählte Felder:
8.206 dokumentiert, 13.876 unbekannt, 298 widersprüchlich und 106 Roadmap.
Die ursprünglichen 518 Ziele haben 466 Feldprüfungen und 52 offene Ziele;
8.570 Felder dieser Queue verteilen sich auf 3.409 dokumentierte, 4.961 unbekannte,
182 widersprüchliche und 18 Roadmap-Werte. Hersteller-/Marken-Mappings ändern
sich nicht; 646 exakte Herstellerlabels und 1.037 Profile bleiben erhalten.

Die aktuelle Hersteller-Startseite leitet von engineeredarts.co.uk auf
engineeredarts.com um. Alle fünf aktuellen Produktkarten sind abgeglichen:
Ameca, Ameca Desktop, Ami Desktop, Azi Desktop und Mesmer. Auf den drei Desktop-
Spezifikationsseiten werden beide sichtbaren Generation-Tabs getrennt gelesen,
insgesamt sechs Tab-Inhalte. Die Gen-2-Snapshots dokumentieren den ausgewählten
Tab; die öffentliche URL bleibt dabei dieselbe. Ein Link auf diese Quelle allein
bedeutet daher nicht, dass die zunächst sichtbare Gen-3-Tabelle die historische
Gen-2-Spezifikation darstellt. Cookie-Banner, Demo-/Kauf-/Loginformulare und private
Dokumentation wurden nicht bedient. Die vier Recherche-Browser wurden nach der
DOM-/Text-Erfassung in finally-Blöcken geschlossen.

Ameca Gen 1 nennt 49 kg, 1.870 mm Höhe, 1.800 mm Armspannweite und 51 artikulierte
Bewegungen; die daneben stehenden 52 Motoren sind keine 52 DoF. Gen 2 nennt
62 kg und 61 Bewegungen. Die Wiki-Softwarezuordnung Tritium 2/3 ist kein Beweis
für eine weitere gleichnamige Vollkörper-Hardwaregeneration. Der aktuelle Ameca-
Familieneintrag nennt Release 2021; die Herstellerbroschüren bezeichnen Gen 1
mit Januar beziehungsweise Anfang 2022. Die abweichende Meilensteinbasis bleibt
als Widerspruch beim Familienjahr sichtbar. Gen 1 erhält das konkret belegte
2022; kein stillschweigendes Überschreiben auf Basis eines PDF-Erstellungsdatums.
Die allgemeine Wiki enthält keine vollständige historische Massentabelle;
Generationenwerte stammen aus ihren jeweiligen Broschüren.

Die aktuelle Vollkörper-Spezifikation nennt Ameca Gen 2.6 (2024), 62 kg,
61 Bewegungen und 1.870 x 470 x 850 mm H/B/T, dazu getrennt 1.800 mm Armspannweite
und 600 mm Basisdurchmesser. Das Versionslabel 2024, das Familienjahr 2021 und
die Setup-Anleitung vom August 2026 sind verschiedene Meilensteine; ein exaktes
Gen-2.6-Lieferdatum bleibt unbekannt. Die Gen-2.6-Tabellen enthalten auch Ethernet
und Wi-Fi coming soon. Die erste Gen-2-Broschüre und deren aktueller offizieller
Host besitzen identische Bytes; sie sind ein Dokument, keine unabhängigen Belege.
Die Bildmaße anderer Teile der Broschürengrafik werden ohne klare Achsenzuordnung
nicht als vollständiger Roboterumriss importiert. Eine nahezu bildbasierte weitere
Produkt-Kurzbroschüre liefert zu wenig nativen Text für numerische Behauptungen
und wird dafür nicht verwendet.

Ameca/Ami/Azi Desktop Gen 3 haben ausdrücklich das Release-Datum 22. Juni 2026,
8,5 kg, 525 x 420 x 260 mm und 32 Bewegungen, davon 27 im Gesicht/Kopf und fünf
im Hals. Zwei Augenkameras, zusätzliche Brust-Weitwinkelkamera, mmWave-Radar und
40-Watt-Audio gehören in die jeweilige aktuelle Konfiguration. Ethernet/Wi-Fi
stehen in den aktuellen Detailtabellen; die zusätzlichen Bluetooth-/Port-Angaben
von Azi werden nicht automatisch auf Ameca und Ami übertragen. Software-Agenten,
Sprachanzahl und Cloud-Steuerung sind Herstellerfunktionen, keine unabhängig
geprüfte Konversationsqualität oder weitere Hardwaremodelle.

Die Gen-2-Tabs nennen jeweils 2023 und eigene Tabellen. Ameca nennt
550 x 420 x 260 mm; Ami/Azi nennen 525 x 470 x 850 mm, jeweils mit separat
aufgeführter 600-mm-Basis. Diese Angaben bleiben ausdrücklich tabellen-/generations-
bezogen und werden nicht durch die aktuellen Gen-3-Maße ersetzt. Alle drei
Gen-2-Gewichtszeilen paaren 8,5 kg mit 17,6 lb, also umgerechnet etwa 7,98 kg.
Die Diskrepanz ist dreimal als Widerspruch erhalten; das Feld nutzt äquivalente
kg-Werte, damit der vorhandene Gewichtsfilter keinen gemischten Pfundtext falsch
umrechnet. Ameca/Ami Gen 2 nennen 20-Watt-Lautsprecher, Azi Gen 2 acht Watt,
Gen 3 jeweils 40 Watt. Unübersetzte Schulter-/Sicherheits-Schlüssel belegen keine
zusätzliche Ausstattung. Historisches Wi-Fi coming soon ist keine bestätigte
Lieferfähigkeit. Netzspannung und Netzteil-Wattwerte liefern keine Akkulaufzeit.
Die frühere Netzspannungsangabe im Ameca-Akkufeld wird in Beschreibung/Merkmalen
gehalten; das Akkufeld bleibt ohne belegte Betriebsdauer leer.

RT4 nennt 33 kg ohne Basis, 44 kg mit Basis, einen separaten 22-kg-Touchscreen-
Kiosk und eine 11,5-kg-Basiszeile. Versandgewichte und optionale Kompressoren
werden nicht zu Robotermasse oder -größe. Das Standardpaket nennt ausdrücklich
27 angetriebene Kopf-/Arm-/Körperachsen; 18 proportionale Regelachsen und einzelne
Aktuatorgruppen sind andere Zählweisen. Die Tabellen nennen 1.750 mm Höhe ohne,
1.775 mm mit Basis. Eine Basisbreitenzeile paart 480 mm mit 23,5 Zoll; die separate
Durchmesserzeile paart 480 mm mit 19 Zoll. Dieser Einheitenwiderspruch bleibt
sichtbar. 840 mm von Rücken bis Fingerspitzen und Armspannweite sind keine
konventionelle Schulter-/Werkzeugreichweite. RT4 benötigt 100–250 V AC und
gefilterte, ungeölte Druckluft bei sechs bar; maximal 30 L/min sind Luftverbrauch,
keine Akkudauer. Hard Face, Projected Face, adaptive Greifhände und kundenspezifische
aktive Knie sind Optionen. Auch bei aktiven Beinen bleiben die Füße fixiert;
kein Gehvermögen wird behauptet.

SociBot ist in der Hersteller-Wiki ausdrücklich seit 2019 eingestellt.
Dieses Datum wird nicht als Erscheinungsjahr verwendet. Kiosk und Mini teilen
laut Matrix Halsbewegungen um drei Achsen, Projektionsgesicht, Kamera/Depth-Sensorik
und Software. Nur Kiosk hat den 19-Zoll-Touchscreen und unbewegliche dekorative
Arme; ungefähr 42 kg, 1.708 mm Höhe und 569 mm Breite gehören zur Kiosk-Tabelle.
Mini ist kompakter und ohne Touchscreen; die Kioskmaße werden nicht übertragen.
Mesmer ist aktuell als anpassbarer Vollkörpercharakter mit 62 kg/61 Bewegungen
und Familienjahr 2017 belegt. Alfred, Cleo, Owen, Thoth und weitere historische
Charaktere sind Auftritts-/Gestaltungsbeispiele ohne separat belegte Verkaufs-SKU.
Tritium, Roles, Agents, Virtual Robot, InYaFace und TinMan sind Software, Dienste
oder Optionen. RT2/RT3 in der Installationshistorie bleiben offene historische
Versionshinweise. Die nicht erfolgreich auslesbare alte Unbounded-Route liefert
keine verwendbare Hardware-Spezifikation; daraus wird kein Nichtbestehen oder
Produktende abgeleitet.

15 native HTTP-200-Antworten und 17 erfolgreiche gerenderte Hauptinhalts-
Snapshots sind mit Hashes dokumentiert. Ein weiterer Rendering-Versuch auf der
alten Unbounded-Route endete ohne geeigneten Hauptinhalt im 30-Sekunden-Wartefenster
und ist ausgeschlossen. Das ist kein gesicherter HTTP-404-Status. Native Wiki-
Produktinhalte, Tabellen und PDF-Seiten wurden abgegrenzt; keine visuelle Bild-/
PDF-Prüfung, keine OCR, Medienübernahme, Anmeldung, Formulare, Konten, Transaktionen
oder TLS-Umgehung. Die fremde .tech-Seite wurde nicht als Herstellerquelle benutzt.
Dauerbeleg: `reports/competitor-batch-132-evidence.json`.

808 Unit-Tests in 64 Dateien und 28 Browserfälle einschließlich vier Axe-Prüfungen
bestanden. Build: 3.377 Seiten, Audit: null Fehler und 1.205 Warnungen. Die vier
zusätzlichen Warnungen betreffen ausschließlich unbekannte Erscheinungsjahre.
Die erste Firmenfokus-Struktur ließ Pflichtfelder name/role aus; die Validierung
und erste Unit-Runde erkannten das. Nach Ergänzung des exakten bestehenden
Markennamens und der recherchierten Rolle bestanden der erneute Refresh und alle
808 Unit-Tests. Kein Anwendungsschema wurde gelockert. Die erste Browserrunde las die gespeicherte
Ameca-Auswahl vor Abschluss der asynchronen ID-Migration; nach Umstellung auf
eine pollende Prüfung bestanden alle Fälle, einschließlich des angepassten
bestehenden Desktop-/Mobil-Regressionsfalls. Die Anwendung blieb unverändert. Der fertige Build ist
gegen die endgültigen Daten geprüft: 14 Seiten, 238 Felder,
67 Quellenbadges, 143 ausgelassene Leerfelder,
71 Merkmalsaussagen, 54 strukturierte Eigenschaften und eine Firmenfokus-Seite.
Vier Modell-Exportzeilen liefern 68 Feldvorkommen; zwei ursprüngliche Queue-Ziele
enthalten 34 ausgewählte Felder. Alle 2.312 nicht ausgewählten Bestandszeilen,
1.171 nicht ausgewählte Feldprüfungen, 126 frühere Firmenfokus-Prüfungen und
1.961 Quellenidentitäten bleiben erhalten. Die bisherige Ameca-Prüfung mit vier
Feldern ist als Vorzustand dokumentiert. Suche, Vierervergleich, alte Ameca-Links/
gespeicherte IDs, Masse-/Laufzeitfilter, vollständiger Belegexport und byteidentischer
Reimport aller 32 getrackten Datendateien geprüft. Offline-Refresh ist semantisch
idempotent. Eigene Recherche-/Testbrowser, Server und Helfer sind beendet;
fremde Ressourcen bleiben erhalten. Externe YouTube-/Axe-Befunde aus Batch106
bleiben außerhalb dieses Prüfumfangs offen.

Daten-Zwischencommit `73c920cc8f3af7e761319f29ea03589bfa09b849` ist auf `codex/competitor-directory-expansion` gepusht und remote
geprüft. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche Modellidentitäten,
neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben offen. Vollständige
historische Portfolios, exklusive USPs und Rang Nr. 1 bleiben unbewiesen.


## Ergänzung 133 – TyBOT und IronBOT: Arbeitsleistung, Konfigurationsgrenzen und betreuter Betrieb (3. November 2026)

Eine neue Zeile IronBOT V3.0 und die bestehende TyBOT-Zeile erhalten zusammen
38 ausgewählte Feldprüfungen: 19 dokumentiert, 17 nicht dokumentiert und zwei
widersprüchlich. Acht Merkmalsaussagen und vier zusätzliche Produktquellenverweise
ergänzen den Bestand; die bisherigen TyBOT-Merkmale und Quellen-URLs bleiben
bestehen. Hinzu kommt ein Herstellerfokus. Gesamt: 2.327 Katalogzeilen,
1.257 datierte Merkmalsdatensätze mit 5.588 Aussagen und 2.572 Quellenverweisen,
1.187 Feldprüfungen mit 22.524 Feldern sowie 128 Firmenfokus-Prüfungen. Von den
518 ursprünglichen Queue-Zielen haben 467 eine ausgewählte Feldprüfung; 51 bleiben
offen. Die Dokumentation ist in `reports/competitor-batch-133-evidence.json` abgelegt.

TyBOT erhält getrennte Angaben für aktive Bindeleistung, Schienenspannweite,
variable Fachwerklänge, Grundmasse, Längsfahrt und Generatorlaufzeit. Die aktive
Rate wird nicht als garantierte Schichtleistung verstanden. Die Batterieangabe
des Belly-Box-Bediengeräts ist keine Roboterlaufzeit; optionale Tragewinden liefern
keine Standardnutzlast. Base/Standard/Full sind hier Maßkonfigurationen und keine
zusätzlich belegten eigenständigen Modelle. Regenwerbung ist keine IP-Schutzart.

IronBOT ist in der technischen PDF ausdrücklich als V3.0 bezeichnet. Material-
Tragfähigkeit und pro Stunde platzierte Materialmasse sind verschiedene Größen;
Schienenspannweite und Stablänge bleiben getrennt. Die imperialen Angaben zur
unbeladenen Masse und Höhe stimmen nicht mit den danebenstehenden metrischen
Spannen überein. Beide Konflikte bleiben sichtbar. Der allgemeine aktuelle
Webseitenablauf verlangt eine betreuende Person für Erstpositionierung, Abstände
und Vereinzelung; anschließend nutzt das Gerät lokale Odometrie. Die Webseite
belegt Familienkontext, keine identische Konfiguration jeder Generation. Die
Copyright-Jahre 2025/2026 werden nicht als Erscheinungsjahre übernommen.

Acht gespeicherte HTTP-200-Antworten, darunter drei Hersteller-PDFs, sind mit Hashes
belegt. Eine anfängliche parallele Anfrage scheiterte an temporärer DNS-Auflösung;
Teilantworten daraus wurden nicht als Beleg verwendet. Alle acht endgültigen
Antworten wurden anschließend einzeln erfasst. Geprüft wurden nativer Text und
HTML; kein Recherchebrowser, keine Bild-/PDF-Sichtprüfung, OCR, Medienübernahme,
Anmeldung, Formulare oder Transaktionen. BOTs Reporting/Support sowie RaaS und
Certified Innovators bleiben Software-/Leistungsangebote.

808 Unit-Tests in 64 Dateien und zwölf Desktop-/Mobil-Browserfälle, darunter vier
Axe-Prüfungen, bestehen. Build: 3.378 Seiten; Audit: null Fehler, 1.206 Warnungen.
Die zusätzliche Warnung betrifft das nicht belegte Erscheinungsjahr von IronBOT.
Eine erste Filterprüfung erkannte, dass eine lb-Erwähnung hinter einer kg-Spanne
die bestehende Einheitenauswertung verfälschte. Im Massenfeld stehen daher beide
Spannen in kg; Originaleinheiten bleiben in Merkmalsbeleg und Prüfnotiz erhalten.
Der endgültige Build und die Prüfungen verwenden diesen korrigierten Wert.
Die erste Browserrunde hatte zehn bestandene und zwei fehlerhafte Fälle: Die
Suchprobe verwendete eine nur im Datenfeld stehende Umrechnung. Die korrigierte
Probe sucht eine tatsächlich belegte Merkmalsaussage und prüft deren Treffertext;
der Suchumfang der Anwendung wurde nicht verändert.
Beide Modellseiten, alle 38 ausgewählten Felder, Quellenbadges, Leerfelder,
strukturierte Produktdaten, Firmenfokus, Suche, Vergleich und CSV-Auslieferung
wurden geprüft. Alle 2.325 nicht ausgewählten alten Katalogzeilen, 1.185 vorherigen
Feldprüfungen und 127 bisherigen Firmenfokusse bleiben unverändert. Reimport:
null Ergänzungen und 32 getrackte Datendateien byteidentisch; der Offline-Refresh
ist semantisch idempotent. Eigene Testbrowser und Server sind beendet und ihre
Prozesse geprüft; fremde Ressourcen bleiben erhalten.

Daten-Zwischencommit `965d5f2bd9e60d705d390249c9c8247cb64007a6` ist auf `codex/competitor-directory-expansion` gepusht und
remote bestätigt. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment.
Drei ursprüngliche Modellidentitäten, neun Listingidentitäten und 862 Detail-
inhaltsprüfungen bleiben offen. Vollständige historische Portfolios, unabhängig
getestete Vorteile, exklusive USPs und Rang Nr. 1 sind weiterhin nicht belegt.


## Ergänzung 134 – Aethon: Cart-Tragfähigkeit, Zena-Zugriff und historische TUG-Abgrenzung (3. November 2026)

T3 und T3XL erhalten technische Prüfungen; Zena RX, Zena und der ausdrücklich
benannte historische Vorgänger T2 TUG kommen als drei neue Modelle hinzu.
95 ausgewählte Felder: 39 dokumentiert, 54 nicht dokumentiert, zwei widersprüchlich.
22 zusätzliche Merkmalsaussagen, sieben zusätzliche Produktquellenverweise und
ein Firmenfokus ergänzen den Bestand. Die sechs bisherigen T3/T3XL-Merkmale und
alle bisherigen Quellen-URLs bleiben erhalten. Gesamt: 2.330 Katalogzeilen,
1.260 datierte Merkmalsdatensätze mit 5.610 Aussagen und 2.579 Quellenverweisen,
1.192 technische Feldprüfungen mit 22.619 Feldern und 129 Firmenfokus-Prüfungen.
Von den 518 ursprünglichen Queue-Zielen haben 468 ausgewählte Feldprüfungen;
50 bleiben offen. Dauerbeleg: `reports/competitor-batch-134-evidence.json`.

T3 und T3XL haben eigene beschriftete Datenblätter. Cart-Tragfähigkeit steht jetzt
im Feld transportPayload; das bisherige allgemeine payload-Feld bleibt leer,
weil keine Arm-Werkzeuglast belegt ist. Körperbreite und vom Boden gemessene Höhe
bleiben von der Länge der Hubfläche, maximalen Cart-Abmessungen und Wendefläche
getrennt. Beide Datenblätter nennen neun effektive Batteriestunden, während die
gemeinsame Webseite zwölf Stunden ohne passende Betriebsbedingungen bewirbt.
Dieser Quellenkonflikt bleibt in batteryLife sichtbar; automatisches Nachladen
wird nicht als unterbrechungsfreie Batterielaufzeit verstanden. Ladezustand und
Zeitbedingungen bleiben modellspezifisch. Quadro/Quadro XL in doppelten Webseiten-
oder Tabellenüberschriften erzeugen keine zusätzlich belegten Modellidentitäten.

Zena RX für klinische Lieferungen und Zena für Hotels sind eigene Produktseiten
mit eigenen Datenblättern. Die klinische PIN/Fingerabdruck-Konfiguration und die
Hotelzustellung per QR/PIN bleiben getrennt. Kapazitäten von vier verschlossenen
Fächern, kombinierbaren größeren Fächern und optionalen Körben sind Konfigurationen,
keine zusätzlichen Robotermodelle. Nutzlast ist keine Roboter-Eigenmasse; Fachmaße
und Ladestationsmaße sind kein vollständiges äußeres Robotermaß. Die Tabellen
bezeichnen eine Wendefläche, während Zena-Zeichnungen denselben Wert als Radius
beschriften. Diese geometrische Unklarheit bleibt in den Merkmalen sichtbar;
ein unqualifizierter Radius wird nicht berechnet.

Die aktuelle Zena-RX-Seite nennt ausdrücklich T2 TUG als eigenen Vorgänger. Diese
Identität erhält keine übernommenen Kapazitäts-, Laufzeit-, Fahr- oder Maßwerte
der heutigen Modelle. Weder Einführungsjahr noch Einstellungsdatum sind daraus
belegt. T4H/T4E stehen lediglich in der Hersteller-Kompatibilitätsliste einer
Ladestation; ohne gesonderten Identitäts-/Aliasbeleg entstehen keine zusätzlichen
Katalogzeilen. Aufzugs-/Türanbindung, Cart-Umbau, Command-Center-Support und Dock
bleiben Integrations-, Dienstleistungs- oder Zubehörbefunde. Herstellerweite
Meilen-/Lieferzähler sind keine modellspezifisch geprüften Leistungskennzahlen.

Zwölf HTTP-200-Antworten, darunter fünf Hersteller-PDFs, sind mit Hashes gesichert.
Die Animation unter der /zena/-Weiterleitung ist kein Produktbeleg. Hauptinhalte,
explizite Beschriftungen und native PDF-Tabellen wurden geprüft. Vier lokale
Seitenbilder wurden zwar erzeugt, die Bildansicht wurde jedoch wegen fehlender
Bildunterstützung abgewiesen: keine tatsächliche Sichtprüfung. Nicht ausreichend
textlich belegte vollständige Zena-Außenmaße bleiben leer. Kein Recherchebrowser,
keine OCR, Medienübernahme, Formulare, Anmeldung, Konten oder Transaktionen.

808 Unit-Tests in 64 Dateien und 14 Browserfälle einschließlich vier Axe-Prüfungen
bestehen. Die erste Browserrunde hatte zwölf bestandene und zwei fehlerhafte
Prüfungen: Die Suchprobe traf auch die Beschreibung und durfte deshalb keinen
reinen Merkmaltreffer-Schnipsel erwarten. Nach Wahl einer ausschließlich im
Merkmal stehenden Phrase besteht die vollständige Browserrunde; die Anwendung
wurde nicht verändert. Build: 3.381 Seiten. Daten-Audit: null Fehler, 1.209 Warnungen; die drei
zusätzlichen Warnungen betreffen nicht belegte Erscheinungsjahre. Fünf Produktseiten,
95 ausgewählte Felder, Quellenbadges, Leerfelder, strukturierte Daten, Firmenfokus,
Suche, Vierervergleich und CSV-Auslieferung wurden geprüft. Alle 2.325 nicht
ausgewählten vorherigen Katalogzeilen, 1.187 früheren Feldprüfungen, 128 bisherigen
Firmenfokusse und die Quellenidentitäten bleiben erhalten. Reimport: null Ergänzungen,
32 getrackte Datendateien byteidentisch. Offline-Refresh semantisch idempotent.
Eigene Testbrowser und Server beendet, Prozesse geprüft; fremde Ressourcen erhalten.

Daten-Zwischencommit `9f59e93b6f975b2db3a78668eba1aeba25f5a7bc` ist auf `codex/competitor-directory-expansion` gepusht und remote
bestätigt. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche
Modellidentitäten, neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben
offen. Vollständige historische Portfolios, exklusive USPs und Rang Nr. 1 sind
weiterhin nicht belegt.


## Ergänzung 135 – Barrett: WAM-Konfigurationen, Gimbals und Burt-Zubehör (3. November 2026)

Elf WAM-Konfigurationszeilen und eine vertiefte Burt-Prüfung ergänzen den Bestand.
215 ausgewählte Felder: 97 dokumentiert, 118 nicht dokumentiert. 37 zusätzliche
Merkmalsaussagen, 34 zusätzliche Produktquellenverweise und ein Firmenfokus kommen
hinzu. Drei vorherige Burt-Merkmale und deren Quellen-URL bleiben erhalten.
Gesamt: 2.341 Modell-/Konfigurationszeilen, 1.271 datierte Merkmalsdatensätze,
5.647 Aussagen, 2.613 Produktquellenverweise, 1.204 technische Feldprüfungen mit
22.834 Feldern und 130 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen haben
469 ausgewählte Feldprüfungen; 49 bleiben offen. Dauerbeleg:
`reports/competitor-batch-135-evidence.json`.

Die aktuelle WAM-Tabelle unterscheidet Vier- und Sieben-Achs-Versionen für Standard,
High Speed, Ultra High Speed, High Payload und High Precision. High Speed/Ultra
High Speed teilen eine Spalte mit verschiedenen Spitzengeschwindigkeiten; diese
werden getrennt übernommen. Die expliziten 4-/7-Achs-Werte für Nutzlast und
Wiederholgenauigkeit behalten ihre Zuordnung. Es entstehen keine beliebigen
Kombinationen verschiedener Upgrades und keine Behauptung elf unabhängiger
Grundprodukte oder belegter Verkaufs-SKUs. Endpunkt-Spitzengeschwindigkeit,
Nutzlast und Wiederholgenauigkeit sind separate Herstellerwerte ohne belegten
gemeinsamen Volllast-Messpunkt. Mikrometer werden in Millimeter umgerechnet;
ISO-9283-Bedingungen und absolute Positioniergenauigkeit sind nicht belegt.
Armmasse ist ohne zusätzliche Werkzeuge abgegrenzt. Reichweite und Arbeitsraum
sind keine Außenmaße; 50 W aktive Leistung sind keine Batterielaufzeit.

Das eigene Gimbals/Master-Paket ist durch die historische Komponentenmatrix und
die verlinkte Familien-PDF belegt. Vier Armachsen plus drei aktive Gimbalachsen
sind ein anderer Aufbau als das gewöhnliche Sieben-Achs-WAM-Handgelenk. B3763
Gimbals und B2607 Handgelenk bleiben getrennt. Masse, Tragfähigkeit, Geschwindigkeit,
Endpunktreichweite und Wiederholgenauigkeit des Standardarms werden nicht auf
diesen Aufbau übertragen. BarrettHand/BH8-282, Puck, Kraft-/Moment- und taktile
Sensoren sind Komponenten, keine zusätzlichen eigenständigen Roboterzeilen.

Burt behält therapeutisch betreute Armgewicht-Unterstützung, Haptik und Assessments.
Drei Ebenen der Rücktreibbarkeit sind kein belegter Gelenk-/Motorenzähler. Die
Herstellerseite nennt weiterhin sowohl 18 als auch 20 Aktivitäten; kein eindeutiger
aktueller Bibliothekszähler wird erfunden. Etwa 60 Sekunden Basis-Setup und unter
90 Sekunden BurtWrist-Setup sind weder Betriebs- noch Ladezeit. BurtWrist ist eine
optionale Erweiterung für Unterarmrotation und Griffsensorik. BurtCare und
Aktivitätsnamen sind Service-/Softwareangebote. Patientenberichte, absolute
Sicherheitsaussagen, Hersteller-Regulierungssprache und historische Guinness-
Formulierungen belegen keine unabhängige klinische Wirkung, behördliche Zulassung,
Anwendungssicherheit oder heutige Marktführerschaft.

Zehn HTTP-200-Antworten und vier Hersteller-PDFs sind mit Hashes geprüft.
Produkt-Hauptinhalte und die aktuelle Konfigurationstabelle wurden abgegrenzt.
Die WAM-PDF enthält September-2023-Metadaten und eine entsprechende Updatezeile,
aber zugleich den extrahierten Copyright-Hinweis „©2034“. Aus diesem Widerspruch
entsteht weder Publikations- noch Erscheinungsjahr. Die Komponentenmatrix ist
vom 17. Januar 2019; die Hand-PDF von Oktober 2013. Aktuelle WAM-Zahlen stammen
aus der aktuellen Tabelle, historische Unterlagen aus ihrem jeweiligen Kontext.
Keine visuelle Prüfung, OCR, Medienübernahme, Anmeldung, Formulare, Konten oder
Transaktionen; kein Recherchebrowser.

808 Unit-Tests in 64 Dateien und 22 Browserfälle mit vier Axe-Prüfungen bestehen.
Build: 3.392 Seiten. Audit: null Fehler und 1.220 Warnungen; elf zusätzliche
Warnungen betreffen nicht belegte Erscheinungsjahre. Zwölf Produktseiten,
215 Felder, Quellenbadges, Leerfelder, strukturierte Daten, Firmenfokus, Suche,
Vergleich und CSV-Auslieferung sind geprüft. Alle 2.329 nicht ausgewählten alten
Katalogzeilen, 1.192 früheren Feldprüfungen und 129 Firmenfokusse bleiben erhalten.
Reimport: null Ergänzungen, 32 getrackte Datendateien byteidentisch; Offline-Refresh
semantisch idempotent. Eigene Testbrowser und Server sind beendet, Prozesse
geprüft; fremde Ressourcen bleiben erhalten.

Daten-Zwischencommit `b737bcd1cca1ffa28ee4fe06eb77d9e592bda394` ist auf `codex/competitor-directory-expansion` gepusht und remote
bestätigt. Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche
Modellidentitäten, neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben
offen. Vollständige historische Portfolios, exklusive USPs und Rang Nr. 1 bleiben
unbewiesen.


## Ergänzung 136 – Beatbot: Sora-Modelle, Stationsgrenzen und Forschungsprototyp (3. November 2026)

Sora 70, Sora 10 und Aquatic RoboTurtle ergänzen den Katalog; AquaSense X und
Sora 30 erhalten vertiefte Prüfungen. Fünf neue Feldprüfungen umfassen 89 Felder:
28 dokumentiert, 61 nicht dokumentiert. Zwölf zusätzliche Merkmalsaussagen,
acht zusätzliche Produktquellenverweise und ein Firmenfokus kommen hinzu.
Die vier bisherigen AquaSense-X-Merkmale, vorhandene Medien und Fund-URLs bleiben
erhalten. Die übrigen 2.339 Katalogzeilen, 1.204 früheren Feldprüfungen und
130 Firmenfokusse sind unverändert. Gesamt: 2.344 Katalogzeilen, 1.275 datierte
Merkmalsdatensätze, 5.659 Aussagen, 2.621 Produktquellenverweise, 1.209 Feldprüfungen
mit 22.923 Feldern und 131 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen haben
470 ausgewählte Feldprüfungen; 48 bleiben offen. Dauerbeleg:
`reports/competitor-batch-136-evidence.json`.

Sieben erfolgreiche Herstellerquellen sind geprüft: zwei aktuelle HTML-Seiten
und fünf datierte, vom Hersteller stammende PRNewswire-Mitteilungen. Die dritte
Beatbot-Anfrage antwortete mit HTTP 429. Weitere Anfragen an diesen Host wurden
gestoppt; keine Ausweichanfrage an regionale Hosts, keine Anmeldung oder Umgehung.
Auch die ausgeschlossene 429-Antwort hat einen archivierten Hash. Hauptinhalte
und PR-Mitteilungskörper sind abgegrenzt; Kundenberichte, Navigation, Formulare
und nur als Bild sichtbare Daten werden nicht zu technischen Belegen. Keine
visuelle Prüfung, OCR oder Medienübernahme.

AquaSense X wird laut Januar-Mitteilung vom Nutzer auf die separate AstroRinse-
Station gesetzt. Automatische dreiminütige Filterwäsche belegt keine selbständige
Fahrt aus dem Pool auf die Station und keine Ladezeit. Der 22-Liter-Abfallbehälter
und bis zu zwei Monate Leerungsintervall gehören zur Station, in der Mitteilung
unter der Bedingung zweier Reinigungszyklen pro Woche. Sie sind weder Roboterkorb
noch garantierte Wartungsfreiheit. Die aktuelle US-Seite begrenzt App-Steuerung
auf die Wasseroberfläche und nennt bis 5.000 ppm Salz; 35 cm sind Wassertiefe für
Plattformen, keine Roboterhöhe oder vollständige Tiefen-/Ingress-Zertifizierung.
Historische MSRP bleibt datiert; Januar-Vorbestellung und April-„Open Sale“ mit
„presale“ im Körper belegen keinen heutigen Lagerbestand.

Sora 70 erhält nur seine eigenen Februar-Werte: 22,9 lb Robotergewicht,
17,09 × 16,93 × 11,22 Zoll, Hersteller-IP68 sowie bis fünf Stunden Bodenreinigung
im ECO-Modus bzw. sieben Stunden Oberflächenreinigung. JetPulse-Skimming und
SonicSense-Ultraschall behalten ihre Funktionsrollen. Acht Zoll sind minimale
Wassertiefe; 6.800 GPH sind Durchfluss, sechs Liter Schmutzspeicher und bis
3.230 Quadratfuß Poolfläche eine Reichweite pro Ladung. Daraus entstehen weder
Fahrgeschwindigkeit, Nutzlast, Arbeitsbreite noch Fläche pro Stunde. Der optionale
3-Mikrometer-Filter wird nicht als Serienumfang importiert; „800 Blätter“ wird
nicht zu standardisierter Masse oder garantierter Kapazität.

Die gemeinsame März-Mitteilung nennt Sora 30 und Sora 10 mit 5-Liter-Speicher,
150-Mikrometer-Filtration und 6.800-GPH-Durchfluss. Nur Sora 30 bekommt dort
10.000 mAh und bis fünf Stunden Bodenreinigung zugeordnet. Sein bisheriges
300-Minuten-Feld wird aus maxRuntime entfernt und mit Modusgrenze in batteryLife
geführt; keine Ladezeit wird daraus abgeleitet. Die unspezifische Größenangabe
„medium“ entfällt. Sora 10 erbt weder diese Laufzeit noch Sora-70-Masse, Maße,
Ingress-Rating oder Filteroption. Oberflächenparken belegt für beide kein aktives
Oberflächen-Skimming. MSRP von 999 bzw. 699 USD ist auf den 30. März 2026 datiert;
Aktions- und Bündelpreise werden nicht zu dauerhaften Einzelproduktpreisen.

Aquatic RoboTurtle bleibt ausdrücklich Forschungsprototyp. Die Januar-Mitteilung
unterscheidet den beweglichen 2026-Aufbau vom statischen CES-2025-Exponat und
beschreibt Kamerawahrnehmung, ausgewählte Gesten-/Zielreaktionen und bewegliche
Gliedmaßen. Das belegt weder verkaufte Konfiguration, exakte Gelenkzahl,
Feldbetrieb, wissenschaftliche Messgüte, Tiefe noch Laufzeit. Unbenannte Iterationen
werden nicht als getrennte Modellgenerationen erfunden. AstroRinse, Filter,
Klärer, Taschen, Abdeckungen und Mehrroboterpakete bleiben Zubehör/Bündel.
AquaSense Pro, AquaSense 2 Ultra, iSkim Ultra, AquaSense 2 und AquaSense 2 Pro
benötigen weitere eigene Feldprüfungen; die frühere iSkim-Prüfung mit zwei Feldern
bleibt erhalten und belegt noch keine vollständige technische Erschließung.

Nach Korrektur einer zunächst nicht aktualisierten generierten Merkmalsdatei
bestehen alle 808 Unit-Tests in 64 Dateien und 20 Browserfälle mit vier Axe-Checks.
Der überholte erste Build wurde nur in seiner eigenen markierten Prozessgruppe
beendet; der abschließende vollständige Build erzeugt 3.395 Seiten. Audit: null
Fehler, 1.221 Warnungen, davon eine neue für das unbekannte Erscheinungsjahr des
Prototyps. Fünf Seiten, 89 Felder, Quellenbadges, leere Felder, strukturierte Daten,
Firmenfokus, Suchtreffer, Vergleich und Exporte sind geprüft. Reimport: null
Ergänzungen, 32 getrackte Datendateien byteidentisch; Offline-Refresh semantisch
idempotent. Eigene Browser/Server und Hilfsprozesse beendet und geprüft.

Daten-Zwischencommit `620066fdffec05b04ae915305ae4b5c3029b957b` ist auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche
Modellidentitäten, neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben
offen. Vollständige historische Portfolios, exklusive USPs und Rang Nr. 1 bleiben
unbewiesen.


## Ergänzung 137 – Blue Frog Robotics: BUDDY-Paket und widersprüchliche Höhenangaben (3. November 2026)

Buddy Pro+ bleibt eine bestehende Modell-/Paketzeile. Eine neue Prüfung umfasst
16 Felder: sieben dokumentiert, acht nicht dokumentiert und ein Quellenkonflikt.
Vier Merkmalsaussagen, vier Produktquellenverweise und ein Firmenfokus kommen hinzu;
die drei bisherigen Merkmale, Fund-URLs, ID und Medien bleiben erhalten.
Die übrigen 2.343 Katalogzeilen, 1.209 früheren Feldprüfungen und 131 Firmenfokusse
sind unverändert. Gesamt: 2.344 Katalogzeilen, 1.275 datierte Merkmalsdatensätze,
5.663 Aussagen, 2.625 Produktquellenverweise, 1.210 Feldprüfungen mit 22.939 Feldern
und 132 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen haben 471 ausgewählte
Feldprüfungen; 47 bleiben offen. Dauerbeleg:
`reports/competitor-batch-137-evidence.json`.

Acht HTTP-200-Herstellerantworten einschließlich dreier PDFs sind per Hash geprüft.
Produkt-Hauptinhalte, Dokumentationsindex und das öffentlich ausgelieferte
Angebotsmuster sind getrennt abgegrenzt. Eingabefelder werden nicht als Produktbeleg
verwendet. Es gab nur lesende GET-Abrufe: kein Formularversand und keine Nachricht;
der im HTML vorbereitete Erfolgstext ist kein Versandbeleg. Keine visuelle Prüfung,
OCR oder Medienübernahme. Native PDF-Texte sind gegen die gespeicherten Bytes
geprüft; unbeschriftet extrahierte Diagrammmaße bleiben ausgeschlossen.

Bildungs- und Entwicklerdatenblatt sowie Spezifikationstabelle des Handbuchs
nennen 560 × 350 × 350 mm und acht Kilogramm für die BUDDY-Plattform. Die aktuelle
Übersichtsseite nennt 60 cm Höhe. Eine bestimmte Pro+-Hardwareversion oder eine
belegte Rundungsregel löst diesen Unterschied nicht auf; das Größenfeld behält
beide Angaben mit Konfliktstatus. Pro+ ist durch das Multi-Application-Angebot
belegt. Generisches BUDDY, Bildungs-/Entwicklerpakete, TeleBuddy, MyBuddyApp,
BuddyLab, Buddy Studio, SDK-Abos und Zubehör werden nicht zu weiteren Chassiszeilen.

Das Handbuch nennt bis sechs Stunden Betrieb abhängig von der Nutzung, vorwärts
höchstens 70 cm/s und rückwärts höchstens 35 cm/s. Die Werte sind ausdrücklich
Plattformangaben bei nicht festgelegter Pro+-Hardwareversion; weder universelle
Garantien noch Mission-Durchschnittswerte. Batterieenergie unter 100 Wh ergibt
keine zweite Laufzeit. Es ist keine numerische Ladezeit belegt. Manuelles
Anschließen und optionales Selbstparken sind getrennt; letzteres verlangt eine
fixierte Station und Sichtnähe. Rollender Betrieb, fehlende Treppen-/Türfähigkeit,
Blindzonen und die im Handbuch deaktivierte Hinderniserkennung bei Fernsteuerung
bleiben erhalten. Sensorverhalten ist keine Garantie kollisionsfreier oder
fehlersicherer Navigation. Motoren, Kopfdrehungen, zwei Zubehöranschlüsse und
Sensor-Nummern begründen keine exakte Gelenkzahl oder serienmäßige Hand.

TeleBuddy auf dem Roboter und MyBuddyApp auf Telefon/Tablet belegen die
Fernpräsenz-Architektur. Das Angebotsmuster ist weiterhin auf den 28. März 2025
datiert, einen Monat gültig und nennt EU-Bedingungen ohne Steuer und Versand.
Seine 2.500-/480-Euro-Zahlen werden nicht als aktuelles vollständiges Angebot
importiert; Preis bleibt auf Anfrage mit explizitem Ablaufhinweis. Optionen,
SDK und jährliche Dienste behalten ihre Grenzen. Kindergartenbezug ist keine
numerische Altersfreigabe; Bildungs-, Therapie-, Emotions- und Notfallbegriffe,
Referenzberichte und Auszeichnungen belegen weder Bewusstsein, unabhängige
klinische Wirkung, Notfallüberwachungs-Zulassung noch allgemeine Kindersicherheit.
Dokument-, Preis- und Award-Daten sind kein Pro+-Erscheinungsjahr.

808 Unit-Tests in 64 Dateien und 18 Browserfälle mit vier Axe-Prüfungen bestehen.
Build: unverändert 3.395 Seiten. Audit: null Fehler, unverändert 1.221 Warnungen.
Eine Produktseite, 16 Felder, Konfliktbadge, Quellen, Leerfelder, strukturierte
Daten, Firmenfokus, Suche und Vergleich sind geprüft. Zwei Modell-Exportzeilen
mit zusammen 32 Feldstatus-Vorkommen, eine Firmenprodukt-Zuordnung und das
Queue-Ziel mit 16 Feldern sind nachvollzogen. Reimport: null Ergänzungen,
32 getrackte Datendateien byteidentisch; Offline-Refresh semantisch idempotent.
Eigene Testbrowser, Server und Hilfsprozesse sind beendet und geprüft.

Daten-Zwischencommit `5860af50b68458158d4013b6dc4b9d2fa775ca3b` ist auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche
Modellidentitäten, neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben
offen. Pro+-Hardwareversion, vollständige historische Portfolios, exklusive USPs
und Rang Nr. 1 bleiben unbewiesen.


## Ergänzung 138 – BotEyes: Pad-Quellenstände und Mini-Kamerakonfiguration (3. November 2026)

BotEyes-Mini kommt als explizit benannte Kamerakonfiguration hinzu; BotEyes-Pad
wird vertieft geprüft. Zwei Feldprüfungen umfassen 34 Felder: zwölf dokumentiert,
20 nicht dokumentiert und zwei Quellenkonflikte. Sechs zusätzliche Merkmalsaussagen,
fünf Produktquellenverweise und ein Firmenfokus kommen hinzu. Drei vorherige
Pad-Merkmale, ID, Medien und Fund-URLs bleiben erhalten. Die übrigen 2.343 alten
Katalogzeilen, 1.210 bisherigen Feldprüfungen und 132 Firmenfokusse sind unverändert.
Gesamt: 2.345 Katalogzeilen, 1.276 datierte Merkmalsdatensätze, 5.669 Aussagen,
2.630 Produktquellenverweise, 1.212 Feldprüfungen mit 22.973 Feldern und
133 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen haben 472 ausgewählte
Feldprüfungen; 46 bleiben offen. Dauerbeleg:
`reports/competitor-batch-138-evidence.json`.

Neun HTTP-200-Herstellerantworten einschließlich einer achtseitigen PDF sind
mit Hashes geprüft. Technische HTML-Zellen und die eigene BotEyes-Pad-Spalte der
nativen PDF-Tabelle auf Seite sieben behalten ihre Zuordnung. Die PDF-Metadaten
tragen den 16. März 2019; das ist kein gesicherter Publikations-, Versions- oder
Erscheinungstermin. Es gab keine visuelle Prüfung, OCR, Anmeldung, Testfahrt,
Fernsteuerung echter Hardware, Formularübermittlung, Nachricht, Transaktion oder
Medienübernahme. Vorbereitete Anmelde-/Kontaktseiten sind keine tatsächlich
benutzten Konten oder Versandbelege.

Die aktuelle Webtabelle nennt 13,4 kg Robotergewicht, 142,5 cm Höhe mit Tablet
und 29 × 39 cm Grundfläche. Die historische, weiterhin herstellergehostete
Vergleichstabelle nennt unter demselben Pad-Namen zehn Kilogramm und 125 cm.
Eine Zuordnung zu konkreten Hardwareversionen ist nicht belegt; Masse und Größe
behalten beide Quellenstände mit Konfliktstatus. Aus einer unbenannten früheren
Ausführung entsteht keine erfundene zusätzliche Modellgeneration. 25 kg und
75 × 38 × 35 cm gehören zum Versandpaket. Die widersprüchlichen Dock-Maße mit
problematischen Einheiten werden nicht als Roboter- oder Dock-Hüllmaß importiert.

Zehn Betriebsstunden und zehn Stunden für vollständiges Laden sind zwei getrennte
Zeilen der aktuellen Tabelle. Das zusätzliche „10+“ auf der Startseite behält
seine unklaren Testbedingungen; Batterieenergie und USB-Tabletversorgung ergeben
keine weitere Laufzeit. Variable Fahrt ist mit 0–2,5 km/h und zusätzlich
0–1,5 mph beschriftet; die gerundeten Herstellerangaben werden nicht zu einer
exakten Umrechnung oder unabhängig gemessenen Missionsgeschwindigkeit.
Der Hersteller nennt bis 1,5 cm Türschwellen. Für Mini werden diese Zahlen nicht
übernommen.

Pad-Autodocking verlangt ein waagerechtes Tablet mit Orientierungssensor; mögliche
iPad-Dockprobleme und Mikrofonverlust beim Kamerawechsel bleiben sichtbar.
Aufzeichnung und Bildschirmteilen behalten Geräte-/OS-Grenzen. Kopfbewegung ist
als 160 Grad nach oben plus 180 nach unten in der Liste, 160 Grad in der Tabelle
und 120 Grad in der älteren PDF angegeben; die unterschiedlichen Geltungsbereiche
werden nicht zu einer garantierten universellen Spanne oder Gelenkzahl erklärt.
Absolute Stabilitäts-/Batteriesicherheitsformulierungen, Watchdog- und
Verschlüsselungsetiketten sowie alte Browser-/Betriebssystemnamen belegen keine
unabhängige Sicherheit, aktuelle Softwareunterstützung oder exklusive Überlegenheit.

Der offizielle Supportindex verlinkt Mini als eigene benannte Kamerakonfiguration.
CamHi/HiP2P bedient die Überwachungskamera, ein eigener Browser die Bewegung.
Beide Ansichten müssen gleichzeitig sichtbar sein; die Anleitung nennt Desktop
oder passenden geteilten Bildschirm. Historische iOS-9-Gerätebeispiele sind kein
aktueller universeller Kompatibilitätsnachweis. Die Kameraausführung erbt weder
Pad-Tabletmerkmale, Körpermaße, Masse, Laufzeit noch Autodocking. Aktueller Verkauf
und exakte Mini-Hardwaregeneration bleiben unbewiesen. Pad+ und Pad++ unterscheiden
Tablet-Pakete und werden nicht als weitere Chassis angelegt. Die Kontaktseite
nennt US- und Georgia-Adressen; das ist keine unabhängige Registerprüfung.

808 Unit-Tests in 64 Dateien und 18 Browserfälle mit vier Axe-Prüfungen bestehen.
Build: 3.396 Seiten. Audit: null Fehler, 1.222 Warnungen; eine neue Warnung betrifft
das unbekannte Mini-Erscheinungsjahr. Zwei Produktseiten, 34 Felder, zwei
Konfliktbadges, Quellen, Leerfelder, strukturierte Daten, Firmenfokus, Suche,
Vergleich und Exporte sind geprüft. Eine Modell-Exportzeile und das ursprüngliche
Pad-Queueziel enthalten je 17 Feldstatus-Einträge. Reimport: null Ergänzungen,
32 getrackte Datendateien byteidentisch; Offline-Refresh semantisch idempotent.
Eigene Testbrowser, Server und Hilfsprozesse sind beendet und geprüft.

Daten-Zwischencommit `9b87e2cea69b258882205cc6bf3dcc37ad77489b` ist auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche
Modellidentitäten, neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben
offen. Vollständige historische Portfolios, unabhängige USPs und Rang Nr. 1
bleiben unbewiesen.


## Ergänzung 139 – CMR Surgical: Versius und Plus mit getrennten Komponenten- und Zulassungsständen (3. November 2026)

Versius Plus wird als ausdrücklich benanntes System ergänzt; das vorhandene Versius
wird vertieft geprüft. Zwei Feldprüfungen enthalten 34 Felder: zehn dokumentiert,
24 nicht dokumentiert. Neun neue Merkmalsaussagen, neun Produktquellenverweise und
ein Firmenfokus kommen hinzu. Die drei alten Versius-Merkmalsformulierungen,
Fund-URL, ID und Medien bleiben erhalten. 2.344 andere Altzeilen, 1.212 bisherige
Feldprüfungen und 133 Firmenfokusse sind unverändert. Gesamt: 2.346 Katalogzeilen,
1.277 datierte Merkmalsdatensätze, 5.678 Aussagen, 2.639 Produktquellenverweise,
1.214 Feldprüfungen mit 23.007 Feldern und 134 Firmenfokusse. Von den 518
ursprünglichen Queue-Zielen haben 473 ausgewählte Feldprüfungen; 45 sind offen.
Dauerbeleg: `reports/competitor-batch-139-evidence.json`.

16 öffentliche Antworten wurden mit Hashes gesichert: 15 HTTP 200 und eine
ungenutzte HTTP-404-Antwort für die vermutete K261252-Zusammenfassung. Drei
US-Adressen für Nachricht, Sicherheitsinformation und Startseite leiten auf die
globale Startseite um. Der HTTP-200-Status dieser Startseite belegt die angefragten
Artikelinhalte nicht. Vorhandene Textschichten aus drei PDFs mit zusammen 551
Seiten wurden extrahiert und auf Integrität geprüft; inhaltliche Prüfung betraf
gezielt die relevanten Abschnitte und Tabellen. Es gab keine visuelle Prüfung,
keinen selbst gestarteten OCR-Lauf, keine Anmeldung, Kontaktaufnahme,
Formularübermittlung, Transaktion, Patientenberatung oder Medienübernahme.

Das alte UK-Handbuch Version 15.0 enthält auf PDF-Seite 32, gedruckter Seite vier,
eine ausdrücklich zweispaltige Maßtabelle. Konsole: 1.325–2.085 mm Höhe,
840 mm Breite, 1.040 mm Tiefe, ungefähr 180 kg. Einzelne Bedside Unit:
1.425 × 380 × 380 mm und ungefähr 100 kg. Diese Angaben werden nicht zu einer
Gesamtmasse, einem festen OP-Grundriss oder Plus-Maßen addiert beziehungsweise
übertragen. Die nachfolgende 25-kg-Zeile betrifft sichere Lasten an Handcontroller
und Griffen, keine Roboternutzlast. Die Komponenten-REFs V-SS-1000, V-SS-2000 und
V-SS-3000 werden nicht als weitere unabhängige Roboter angelegt. Dokumentmetadaten
von 2021/2022 belegen weder Marktstart noch aktuelle Plus-Hardwareversion.

Kapitel zehn trennt die Netzversorgung der Konsole ohne eigene Batterie von einer
mindestens 20-minütigen Batteriestützung einzelner Arme. Im Batteriebetrieb ist
unter anderem der chirurgische Modus nicht verfügbar. Daraus entstehen weder
OP-Laufzeit, vollständige Ladedauer noch Plus-Ausdauer. Die ursprüngliche
FDA-Übersicht nennt bis zu drei Instrumenten-Bedside-Units, elf bewegliche Gelenke
je Instrumentenarm und J1–8 am Visualisierungsarm; das ist keine aggregierte Zahl
unabhängiger Aufgabenfreiheitsgrade. Modulare, manuell gerollte Wagen und
chirurgische Konsolensteuerung sind keine autonome Navigation oder OP-Autonomie.

Plus besitzt laut Produktseite einen 26-Zoll-3D-HD-Bildschirm und vLimeLite als
integriertes Nahinfrarot-ICG-Bildwerkzeug. Overlay-/Graustufenansicht, grüne/cyanfarbene
Darstellung und Thumbstick-Steuerung bleiben der Bildfunktion zugeordnet.
Automatischer Videoupload verlangt laut Hersteller eine Datenfreigabevereinbarung.
Software-Updates und Leistungs-/Betriebsdaten-Apps sind keine belegte autonome
klinische Entscheidungsfunktion oder Garantie besserer Patientenergebnisse.
Der Ultrasonic Dissector bleibt ein Instrument: bis fünf Millimeter Gefäßdurchmesser,
250 Minuten Transducer-Aktivierungszeit und höchstens 25 Wiederaufbereitungen sind
Herstellerangaben mit genau diesem Geltungsbereich, keine Roboterlaufzeit oder
Nutzlast. Der Hersteller schließt US-Verkauf dieses Instruments ausdrücklich aus;
vLimeLite und andere Komponenten behalten lokale Freigaben und Verfügbarkeit.

Die FDA-Primärrollen werden korrekt als Aufsichtsbehörde beschriftet. DEN230078
wurde am 11. Oktober 2024 gewährt; die ursprüngliche US-Indikation betrifft
Cholezystektomie bei geeigneten Erwachsenen ab 22 Jahren. K252111 für Plus wurde
am 16. Dezember 2025 entschieden; die am 27. Juni 2025 vorbereitete Zusammenfassung
ist kein Freigabedatum. Sie dokumentiert NIR-Bildgebung, Software- und
Instrumentänderungen bei damals gleicher Indikation. Der neue Datensatz K261252
nennt Eingang am 16. April 2026 und eine weitere SE-Entscheidung am 21. Oktober
2026 für Versius Plus, aber keine Detailindikation. Suchindextexte zu einer
Gynäkologie-Erweiterung dienen nur als Recherchehinweis: Die genaue neue
Indikations-/Kontraindikationsliste wird aus den umgeleiteten nativen Abrufen
nicht als geprüft übernommen. Die ältere Cholezystektomie-Indikation wird nicht
als abschließende aktuelle Liste dargestellt. Internationale Fachgebietswerbung,
Patientenalter und Zulassungsdatum werden nicht zu weltweiter Freigabe,
allgemeinem Nutzeralter oder ursprünglichem Erscheinungsjahr.

Zusätzlich wurde der tatsächlich abrufbare FDA-Korrektureintrag Z-2717-2026
abgegrenzt: initiiert 9. Juni 2026, veröffentlicht 9. Juli 2026, als offen und
klassifiziert angezeigt. Betroffen sind genau zwei US-Konsolen V-SS-1020,
Pratchett 1 Version 62.1, Seriennummern 66495 und 66496, mit Vertrieb in Kalifornien.
Secure Boot war bei der Herstellung nicht aktiviert; die beschriebene Maßnahme
ist eine Konfigurationskorrektur mit ergänzendem Schreiben vom 8. Juli.
Dieser Befund wird nicht auf alle Versius-/Plus-Geräte verallgemeinert und ist
keine vollständige Überwachung sämtlicher Rückrufe oder Ereignisse.

808 Unit-Tests in 64 Dateien und 18 Browserfälle mit vier Axe-Prüfungen bestehen.
Build: 3.397 Seiten. Audit: null Fehler, 1.223 Warnungen; eine neue Warnung betrifft
das unbekannte Plus-Erscheinungsjahr. Beide Modellseiten mit 34 Feldern,
Leerfeldern, Quellenrollen, strukturierten Daten, Firmenfokus, Merkmalssuche,
Vergleich und CSV-Exporten sind geprüft. Ein ursprüngliches Modell-Exportziel
und das Versius-Queueziel haben je 17 Status-Einträge. Reimport: null Ergänzungen,
32 getrackte Datendateien byteidentisch; Offline-Refresh semantisch idempotent.
Eigene Browser, Server und Hilfsprozesse sind beendet und geprüft.

Daten-Zwischencommit `af7dc21e5c19ac1d7063e84170a3ef58d9ff2243` wurde auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche
Modellidentitäten, neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben
offen. Vollständige Portfolios, alle USPs und Rang Nr. 1 sind weiterhin unbewiesen.


## Ergänzung 140 – Coco Robotics: Coco 2 mit Reichweiten-, Autonomie- und Generationengrenzen (3. November 2026)

Das vorhandene Coco-2-Modell erhält eine Prüfung von 16 Feldern: sechs dokumentiert,
zehn nicht dokumentiert. Vier Merkmalsaussagen, drei zusätzliche Produktquellenverweise
und ein Firmenfokus kommen hinzu; es gibt keinen neuen Modelleintrag. Alle drei alten
Merkmalsformulierungen, Fund-URL, ID und Medien bleiben erhalten. 2.345 andere
Katalogzeilen, 1.214 vorherige Feldprüfungen und 134 Firmenfokusse sind unverändert.
Gesamt: 2.346 Katalogzeilen, 1.277 datierte Merkmalsdatensätze, 5.682 Aussagen,
2.642 Produktquellenverweise, 1.215 Feldprüfungen mit 23.023 Feldern und
135 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen haben 474 ausgewählte
Feldprüfungen; 44 sind noch offen. Dauerbeleg:
`reports/competitor-batch-140-evidence.json`.

Sieben Herstellerantworten mit HTTP 200 sind gesichert und mit SHA-256 geprüft.
Die technische Seite wiederholt Inhalte für Animationen und responsive Ansichten.
Die einzelnen Buchstaben wurden über die tatsächlichen DOM-Textknoten unter
Beibehaltung nativer Leerzeichen und geschützter Leerzeichen zusammengesetzt;
die Prüfung nutzt keine OCR, Bilder oder Videoansicht. Die acht numerischen
Headline-Container sind mit ihrem eigenen Geschwindigkeits-/Reichweitenlabel
abgeglichen. Es gab keine Anmeldung, Kontaktaufnahme, Formularübermittlung,
Nachricht, Preisverhandlung, Transaktion oder Medienübernahme.

Die Herstellerseite nennt 21 km/h technischen Geschwindigkeitswert und 32 km
Reichweite. Die bisherige gerundete Angabe 5,8 m/s wird durch die Originaleinheit
mit Einschränkung ersetzt. Das ist keine pauschal erlaubte Gehweggeschwindigkeit.
32 km sind eine Distanz mit nicht ausgewiesenen Last-, Strecken- und
Wetterbedingungen, keine Stundenlaufzeit. Die animierten Labels nennen 30 %
maximale Steigung, Drehung auf der Stelle, wechselbare Batterien und Reifen sowie
Platz für vier 18-Zoll-Pizzen. 30 % werden nicht zu 30 Grad; Pizzaverpackung wird
nicht zu Kilogramm-Nutzlast, Litern oder Außenmaßen. Die alte unbelegte Größenklasse
„medium“ wird entfernt. Eine 3.000-lb-Pkw-Vergleichsformulierung der Community-Seite
liefert kein Robotergewicht. Es entstehen keine erfundenen Schutzarten oder
Ladedauern aus Wetter- und Wechselakkuwerbung.

Die offizielle Mitteilung trägt ausdrücklich den 26. Februar 2026 und bezeichnet
Coco 2 als an diesem Tag eingeführt; das bereits eingetragene Jahr 2026 bleibt
nun mit genau diesem Beleg erhalten. Jetson Orin NX ist Onboard-Rechnerhardware;
NVIDIA Isaac Sim/Isaac Lab, Omniverse und Cosmos betreffen Simulation und Training,
keine zusätzlichen Roboter. Die aktuelle Modellseite nennt Karten,
Neuronetz-Navigation, Kameras, LiDAR, GPS und menschliche Aufsicht. Ein Pilot Terminal
liefert ETA, Navigation, Hindernisalarme, Fehlerhilfe und Kartenanmerkungen bei
notwendigem Eingriff. Die undatierte allgemeine Community-Seite spricht weiterhin
von Fernpiloten; eine exakte Zuordnung zu historischen Hardwaregenerationen bleibt
offen. Aus „full autonomy“ im Launchtext wird keine Garantie unbesetzter Operation
in jeder Umgebung. Die Aussage zu Straßen und Radwegen behält „where permitted“.

Bis zu dreifache Uptime im Launchtext hat keine angegebene Vergleichsbasis und
ist kein Akku-Laufzeitwert. Unter-25-Minuten-Lieferwerbung betrifft die Dienstleistung,
Gebühren-/Investitionswerbung keinen Roboterkaufpreis. Liefer- und Werbedienst,
Urban Robotics Platform und Pilot Terminal bleiben von Hardwaremodellen getrennt.
Der alte Produktpfad `/coco` führt zu `/coco2` und begründet keinen zweiten
historischen „Coco 1“-Eintrag. Die Gründung 2020 ist kein Coco-2-Erscheinungsjahr.
„World’s largest“, Flotten-/Lieferzahlen, Kosten-, Zuverlässigkeits-,
Sicherheits- und Null-Emissionsaussagen sind Herstellerwerbung mit ihrem jeweiligen
Geltungsbereich, keine unabhängige Marktführung, Lebenszyklusbilanz oder
exklusive Überlegenheit. Vollständige historische Generationen und alle regionalen
Betriebsgenehmigungen bleiben ungeprüft.

808 Unit-Tests in 64 Dateien sowie 18 Browserfälle mit vier Axe-Prüfungen bestehen.
Build: 3.397 Seiten. Audit: null Fehler und unverändert 1.223 Warnungen. Die
Produktseite mit 16 Feldern, Leerfeldern, Quellen, strukturierten Daten,
Firmenfokus, Merkmalssuche und Vergleich sowie Modell-/Firmen-/Queue-Exporte sind
geprüft. Das ursprüngliche Modell-Exportziel und das Queueziel enthalten jeweils
16 Feldstatus-Einträge. Reimport ergänzt null Modelle und lässt 32 getrackte
Datendateien byteidentisch; der Offline-Refresh bleibt semantisch idempotent.
Eigene Browser, Testserver und Hilfsprozesse sind beendet und geprüft.

Daten-Zwischencommit `6e09fac28879b34960b1aff5f3f2cd2266514a39` wurde auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche
Modellidentitäten, neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben
offen. Vollständige Portfolios, alle USPs und Rang Nr. 1 sind weiterhin unbewiesen.


## Ergänzung 141 – Construction Robotics: historisches SAM100 und heutige MULE-Hebehilfen (3. November 2026)

Das vorhandene SAM100 erhält eine Prüfung von 18 Feldern: sechs dokumentiert,
zwölf nicht dokumentiert. Vier Merkmalsaussagen, ein zusätzlicher Produktquellenverweis
und ein Firmenfokus kommen hinzu; es gibt keinen neuen Roboterkatalogeintrag.
Drei alte SAM100-Merkmalsformulierungen, ID, Fund-URL und Medien bleiben erhalten.
2.345 andere Katalogzeilen, 1.215 vorherige Feldprüfungen und 135 Firmenfokusse sind
unverändert. Gesamt: 2.346 Einträge, 1.277 datierte Merkmalsdatensätze, 5.686 Aussagen,
2.643 Produktquellenverweise, 1.216 Feldprüfungen mit 23.041 Feldern und
136 Firmenfokusse. Von den 518 ursprünglichen Queue-Zielen haben 475 ausgewählte
Feldprüfungen; 43 bleiben offen. Dauerbeleg:
`reports/competitor-batch-141-evidence.json`.

13 öffentliche Antworten sind mit Hashes gesichert: zwölf HTTP 200 und eine
ungenutzte HTTP-404-Antwort für den alten SAM100-Pfad. Drei PDFs enthalten zusammen
20 Seiten; vorhandene native Textschichten wurden extrahiert und relevante
Abschnitte und Tabellen gezielt geprüft. Die 13-seitige Clark-Ausgabe Winter 2015
enthält auf PDF-Seite vier eine Doppelseite. Nur die linke Hälfte, gedruckte Seite
04, und die drei zugehörigen Artikelspalten gehören zum SAM-Bericht. Das rechts
stehende allgemeine Safety Leadership Development Program wird nicht zu einer
SAM-Funktion oder Zertifizierung. Es gab keine visuelle Prüfung, OCR, Videoansicht,
Anmeldung, Kontaktaufnahme, Formularübermittlung, Nachricht, Transaktion oder
Medienübernahme. Hersteller-Supporteinträge mit Dropbox-Handbuchlinks sind gelesen;
deren Handbuchdateien wurden nicht abgerufen oder als inhaltlich geprüft ausgegeben.

Clark berichtet aus seinem eigenen Baustellen-/Forschungsteam über SAM100 am
Lab School of Washington: ungefähr 12.000 gesetzte Steine, Förderer mit Pickstation,
Höhen-/Breitenprüfung und Zurückweisung ungeeigneter Steine, Mörtelauftrag und
laserbezogene Platzierung. Das ist ein historischer Ersthand-Einsatzbericht eines
beteiligten Bauunternehmens, kein unabhängiger universeller Test oder aktuelles
Herstellerdatenblatt. Die University of Nevada, Reno beschreibt als Bauherr am
22. August 2018 das spätere Arts-Building-Projekt. Beide Quellen behalten ihre
Einsatzrolle; sie werden nicht zu Herstellerquellen umetikettiert.

Der Nevada-Bericht nennt 200–250 Steine pro Stunde und separat die Beobachtung
„etwa ein Stein alle acht Sekunden“. Aus letzterer wird kein dauerhafter Wert von
450 Steinen pro Stunde abgeleitet. Der dokumentierte stündliche Wert bleibt
historisch und projektbezogen; er ist weder Fahrgeschwindigkeit noch garantierte
Schichtleistung. Crews erledigen Aufbau, Programmierung, Materialzufuhr,
Reihenausrichtung, Fugen und Fertigstellung. Laut Bericht bleiben erste fünf Fuß,
Ecken und Fenster-/Türunterbrechungen Handarbeit. Aussagen über ersetzte Maurer,
Zeitersparnis oder Bauzeiten sind keine allgemeine Personalersatzgarantie.
35,5 Millionen USD Gebäudekosten, Gebäudefläche, Gesamtsteinzahl und Projektmonate
sind keine Roboterpreise, -maße oder ununterbrochene Betriebsdauer. Ein Einsatz
2015 belegt auch nicht das genaue ursprüngliche Erscheinungsjahr.

Die heutige Herstellerübersicht nennt MULE MZ100 und ML150 als Hebehilfen, bei
denen Menschen die Platzierung direkt mit den Händen führen. Der Support nennt
zusätzlich ML150S – Solar MULE; die genaue unabhängige Konfiguration bleibt ein
Prüfhinweis. Die sechs bestehenden Listing-Entscheidungen zu manuellen
MULE-Anwendungen bleiben unverändert; Anwendungsüberschriften für Mauerwerk,
Fertigung, Solar, Stützwände, Schalung und Refractory werden nicht zu neuen
autonomen Robotern. Der leere alte SAM-Pfad und das heutige Portfolio belegen
weder Einstellung noch aktuellen Verkauf beziehungsweise Support für SAM100.
Construction Robotics ist nicht Advanced Construction Robotics; TyBOT/IronBOT
werden nicht in diese Firma verschoben.

Die native MZ100-PDF-Tabelle trennt drei Glieder mit 367 kg/zwölf Fuß Reichradius
von zwei Gliedern mit 340 kg/acht Fuß. Beide Spalten nennen 100 lb/45 kg Hubkapazität.
Das sind MULE-Konfigurationen, keine SAM100-Spezifikationen. „1 ft 10 in / 0,81 m“
ist ein ungelöster Einheitenwiderspruch: ein Fuß zehn Zoll entspricht 0,5588 m.
Der Herstellerwert wird nicht still korrigiert. Die Übersicht nennt bis 30 Stunden
Betrieb und drei Stunden Laden; MZ100-Seite und PDFs bis 32 Stunden sowie volle
Ladung in „as little as 3.5 hours“. Eine genaue Versions-/Testbedingungenzuordnung
ist nicht belegt. Bis zehn Jahre bedingte Batterie-Nutzungsdauer und 5.000-plus
Zyklen pro Ladung sind keine Stundenlaufzeit. Die Bandgeschwindigkeit 0,7 m/s
ist keine autonome Fahrzeuggeschwindigkeit. Auch Wetterfestigkeitswerbung
belegt keine numerische IP-Schutzart.

1.465 USD monatlich ist ein angezeigtes Finanzierungsbeispiel für den MULE-Arm
über fünf Jahre bei sieben Prozent, mit Kundengenehmigung und variablen Zinssätzen;
kein Gesamtkaufpreis und kein SAM100-Angebot. IoT-Abonnements, Sondergreifer und
kundenspezifische Anwendungen behalten ihre Bedingungen. Der Firmenhinweis auf
NSF-SBIR-Förderung enthält einen eigenen Nicht-Endorsement-Hinweis; er belegt keine
unabhängige Sicherheitszertifizierung, garantierte Profitabilität oder exklusive
Überlegenheit. Vollständige historische SAM-Generationen, heutige Verkaufs-/
Supportlage und alle manuellen MULE-Konfigurationen bleiben nicht abschließend geprüft.

808 Unit-Tests in 64 Dateien und 18 Browserfälle mit vier Axe-Prüfungen bestehen.
Build: 3.397 Seiten. Audit: null Fehler und unverändert 1.223 Warnungen. SAM-Seite
mit 18 Feldern, Quellenrollen, Leerfeldern, strukturierten Daten, Firmenfokus,
Merkmalssuche und Vergleich sowie Modell-/Firmen-/Queue-Exporte sind geprüft.
Das ursprüngliche Modell-Exportziel und Queueziel enthalten jeweils 18
Feldstatus-Einträge. Reimport ergänzt null Modelle und lässt 32 getrackte
Datendateien byteidentisch; Offline-Refresh bleibt semantisch idempotent.
Eigene Browser, Testserver und Hilfsprozesse sind beendet und geprüft.

Daten-Zwischencommit `594285fbe69690747a180d3193644552efaa6a5b` wurde auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei ursprüngliche
Modellidentitäten, neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben
offen. Vollständige Portfolios, alle USPs und Rang Nr. 1 sind weiterhin unbewiesen.


## Ergänzung 142 – Daifuku: SOTR, regionale AGVs, Reinraum und Flughafen (3. November 2026)

20 neue benannte Modelle beziehungsweise Konfigurationen ergänzen das vorhandene
SOTR-M. Alle 21 erhalten ausgewählte technische Prüfungen: 367 Felder, davon 150
dokumentiert, 209 nicht dokumentiert und acht widersprüchlich. 45 Merkmalsaussagen,
48 zusätzliche Produktquellenverweise und ein Firmenfokus kommen hinzu. Die drei
alten wörtlichen SOTR-M-Merkmale, ID, Fund-URL und Medien bleiben erhalten. 2.345
andere Ausgangszeilen, 1.216 vorhandene Feldprüfungen und 136 Firmenfokusse bleiben
unverändert. Gesamtbestand: 2.366 Katalogeinträge, 1.297 datierte Merkmalssätze,
5.731 Aussagen, 2.691 Produktquellenverweise, 1.237 Feldprüfungen mit 23.408 Feldern
und 137 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen sind 476 technisch
teilgeprüft, 42 noch offen. Dauerbeleg: `reports/competitor-batch-142-evidence.json`.

Die 40 gesicherten öffentlichen Antworten umfassen 37 HTTP 200 und drei ungenutzte
HTTP 404 für zunächst vermutete Pfade. 20 PDFs mit insgesamt 82 Seiten sind gesichert. SHA256 und vorhandene native PDF-Textschichten
sind geprüft. Rotierte technische PDF-Seiten wurden zusätzlich in gespeicherter
Textreihenfolge gelesen, um Feldbezeichnungen und Werte richtig zuzuordnen. Es gab
keine visuelle Prüfung, OCR, Anmeldung, Kontaktaufnahme, Nachricht, Transaktion,
Formularübermittlung oder Medienübernahme. Der Hersteller verlinkt öffentliche
PDFs direkt; das Formular auf smarthandling.com wurde nicht ausgefüllt. Ein global
eingeblendeter Investor-Dialog wurde nicht bestätigt und nicht als Produktinhalt
oder regionale Vertriebsbedingung übernommen.

SOTR-M trägt Kisten/Behälter auf mobilen Förderern. „Ohne Förderer“ im Profil
beschreibt den Verzicht auf feste Förderstrecken; es widerlegt nicht den Förderer
auf jedem Fahrzeug. SOTR-L erhält bis 1.000 kg Palettenlast. SOTR-S erhält
180 m/min Fahrzeuggeschwindigkeit und getrennt bis 10.000 Zeilen/Stunde für die
gesamte Sortieranlage mit Induktion, Liftern und Rutschen; dieser Anlagenwert ist
keine Leistung jedes einzelnen Fahrzeugs. Matrixcode-Führung und Bedieneraufgaben
bleiben genannt. SOTR-F ist im Profil 2026 als Gabeltransportroboter belegt, ohne
Lastübernahme vom SOTR-L. STV ist eine schienengeführte Familie mit 200 m/min Fahrt
und separaten 30 m/min Lasttransfer. Die -30°C-Angabe gilt der Kältevariante;
Wartung im laufenden Betrieb gilt nicht für die Single-Shuttle-Konfiguration.

Neu sind die regional benannten M100-TT, M100-ST, M300-TT, M300-CF, M300-SC,
M500-U, U2200, M3K-CF, M8K-PJ, M10K-T und M40K-T. Smart Handling gehört laut
aktueller Herstellerseite zu Daifuku Airport America innerhalb Daifuku North
America; die Montagebroschüre nennt den früheren Namen Jervis B. Webb Company.
Andere Wettbewerber-Firmenidentitäten werden dadurch nicht automatisch verbunden.
M500-U und U2200 bleiben benannte regionale Einträge mit ungeklärter Hardware-/
Umbenennungsbeziehung. Ähnliche 2.268-kg-Plattformen sind weder Beweis für zwei
verschiedene Konstruktionen noch hinreichender Beleg für eine exakte Aliasauflösung.
907 kg/1.995 mm beim M500-U und gedruckte 909 kg/1.996 mm beim U2200 bleiben getrennt.
Optionale Förder-/Hubdecks reduzieren bei beiden die Last auf 1.814 kg.

Schlepplast steht in `transportPayload`, getragene Plattform-/Gabelmasse in
`payload`. M100-TT/ST nennen 885 kg bei 30,5 m/min oder 476 kg bei 48,8 m/min,
mit zwei Prozent Anhängerradreibung und zehn Prozent Rückwärts-Derating.
Steigung, Fahrmodus und Zusatzmasse behalten ihre Bedingungen. M300-TT nennt
2.041 kg bei 48,8 m/min; höhere Inertialgeschwindigkeit wird nicht automatisch mit
voller Last kombiniert. M300-CF trennt 635 kg bei 508 mm von 558 kg bei 610 mm
Lastschwerpunkt. M3K-CF trennt Körpermaße ohne Gabeln, zwei Hubhöhen mit
unterschiedlicher Fahrzeughöhe und Batteriegewicht. M8K-PJ erreicht 3.628 kg nur
mit verstärkten Gabeln; Standard sind 2.041 kg. Vorwärts 109 m/min und rückwärts
27,5 m/min bleiben getrennt. Bei M40K-T stehen 2 m/s beladen neben 2,5 m/s leer.
Ah, kumulative Ah-Lebensdauer, Ladestrom, Tastverhältnis und 24/7-Flottenbetrieb
belegen keine Einzelakku-Laufzeit oder Voll-Ladezeit. Numerische IP-Schutzarten
und ursprüngliche Erscheinungsjahre bleiben unbelegt.

Acht Feldkonflikte sind sichtbar: M100-TT hat regionale Massendifferenzen,
UK-Länge „1473 m“, US-Längenpaar „58 in / 1595 mm“ und 855-kg-Tow-Pin-Beschriftung
gegenüber 885-kg-Tabelle/Überschrift. M100-ST behält abweichende regionale Maße und
UK 499 kg gegenüber US 830 lb am Ein-Prozent-Gefälle. M300-CF hat UK 1.173 kg
gegenüber intern widersprüchlichem US-Paar 2.585 lb / 1.084 kg sowie abweichende
Zuordnung des reduzierten Tempos zu Laser beziehungsweise Magnetband.
M10K-T nennt widersprüchliche 89 in / 2.134 mm Höhe. Diese Werte werden weder
still korrigiert noch in eine einzige scheinbar sichere Zahl überführt. Der
M40K-T-Batterieaufdruck „6830 Ah“ bleibt als ungeklärte Quellenschreibweise erhalten;
er wird nicht als 630 Ah interpretiert oder für eine Laufzeitrechnung verwendet.

Profil 2026 belegt zusätzlich XY-Picking Robot und Cleanway CLW-A7. Drei-Achs-
Handhabung ist keine geprüfte Summe unabhängiger mechanischer Gelenke. Die generische
Piece-Picking-Seite belegt keinen exakten Tool-/Modellgleichstand mit XY-Picking.
CLW-A7 nennt bis 100 kg; dieser Wert gilt nicht für CLW-08K oder alle Cleanway-
Fahrzeuge. Der Herstellerbericht vom 15. November 2024 nennt CLW-08K, TRVS und MIT.
TRVS zieht laut Quelle bis 6,5 „tons“, mit verbundenen Einheiten mehr als zehn;
die Textquelle definiert metrische gegenüber US-short tons nicht ausdrücklich.
Deshalb wird keine Kilogrammumrechnung erfunden und die Mehrfachlast nicht pro
Fahrzeug gewertet. Die dortige Zukunftsvision bis 2030 ist kein heutiges Lieferprogramm.

MIT ist ein AGV-Inspektionstisch für Gepäck. Der Bericht vom 15. Dezember 2023
beschreibt Magnetbandführung, Bodenladepunkte, verstellbaren Edelstahltisch,
Kipp-Rückgabe und menschliche Sicherheitsinspektion. Die Plattform transportiert;
TSA-Personal untersucht und gibt Gepäck frei. Beispielhafte Gepäckmasse über 20 kg
belegt keine Nenntraglast. Mehr als 500 Systeme an zehn US-Flughäfen ist eine
datierte Herstellerangabe von 2024, keine unabhängige aktuelle Flottenzählung.

Case-Picking-, Piece-Picking- und Layer-Picker-Seiten sagen ausdrücklich, dass der
Roboter nicht einzeln verkauft wird. 600 beziehungsweise 2.000 Kisten/Stunde
gehören ihren jeweiligen Integrationen und werden keinem anderen Modell vererbt.
Allgemeine Anlagen-/Anwendungsüberschriften, ASRS-/Shuttle-/Lagerfamilien,
Engine-Marriage-Anwendungen, SmartCart-Familienname, SAM/CartTools/AGVTools,
Sensoren, Ladegeräte und Stickstoffspülung erzeugen in diesem Batch keine weiteren
Roboterkarten. Vollständige historische und regionale Portfolios, aktuelle
Lieferbarkeit und exklusive USPs bleiben weiter zu prüfen.

808 Unit-Tests in 64 Dateien und 20 Browserfälle einschließlich vier Axe-Prüfungen
bestehen. Build: 3.417 Seiten. Audit: null Fehler, 1.243 Warnungen, davon 20 neue
Warnungen für unbelegte Erscheinungsjahre der Ergänzungen. 21 Detailseiten mit
367 Feldern, Quellenstatus, Leerwerten, strukturierten Daten und Firmenfokus sind
geprüft; ebenso Merkmalsuche und Vierermodellevergleich. Das ursprüngliche Modell-
und Queueziel enthält 17 Feldstatus-Einträge. Zusätzlich sind alle elf metrischen
AGV-Massewerte gegen die numerische Gewichtsfilterung geprüft. Imperiale
Quellenpaare stehen in Hinweisen/Merkmalen, damit der bestehende Parser eine
metrische Zahl nicht wegen eines späteren lb-Hinweises als Pfund interpretiert. Reimport ergänzt null Modelle und
lässt 32 getrackte Datendateien byteidentisch; Offline-Refresh ist semantisch
idempotent. Nach Datenkorrekturen wurden relevante Prüfungen erneut ausgeführt.
Eigene Browser, Testserver und Hilfsprozesse sind beendet und geprüft.

Daten-Zwischencommit `34c326d6834047457bbb8c435b276f896952faac` wurde auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei Modellidentitäten,
neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben offen. Eine
vollständige Prüfung aller Marken/Modelle/USPs und Rang Nr. 1 sind nicht belegt.


## Ergänzung 143 – Diligent Robotics: Moxi, Moxi 2.0 und Forschungsvorläufer Poli (3. November 2026)

Moxi 2.0 und der historische, nicht kommerzielle Forschungsvorläufer Poli sind neu.
Das ursprüngliche Moxi erhält eine technische Teilprüfung. Alle drei umfassen
51 Felder: 19 dokumentiert, 32 nicht dokumentiert. 14 Merkmalsaussagen, 13 zusätzliche
Produktquellenverweise und ein Firmenfokus kommen hinzu. Die drei alten wörtlichen
Moxi-Merkmale, Modell-ID, Fund-URLs und Medien bleiben erhalten. Die unbelegten
136 kg und „large“ entfallen. 2.365 andere Ausgangszeilen behalten alle Werte;
`driveMode` wird der Humanoid-CSV als bestehendes unterstütztes Vergleichsfeld
angehängt und bleibt bei anderen bisherigen Zeilen leer. Es gibt keine Änderung
an Anwendungscode. 1.237 vorherige Feldprüfungen und 137 Firmenfokusse bleiben
unverändert. Gesamt: 2.368 Einträge, 1.299 datierte Merkmalssätze, 5.745 Aussagen,
2.704 Produktquellenverweise, 1.240 Feldprüfungen mit 23.459 Feldern und
138 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen haben 477 ausgewählte
Feldprüfungen; 41 stehen aus. Dauerbeleg: `reports/competitor-batch-143-evidence.json`.

20 öffentliche Antworten sind gehasht gesichert: 18 HTTP 200, zwei HTTP 403 von
investors.serverobotics.com und ir.serverobotics.com. Nach jeder Sperrantwort
wurden weitere Anfragen an den jeweiligen Host eingestellt. Die gesperrten
Investor-Inhalte und Suchcache-PDF-Ausschnitte werden nicht als gelesen oder
inhaltlich belegt behandelt. Drei native PDFs mit 17 Seiten sind gesichert:
zwei vierseitige Hersteller-Fallstudien und das neunseitige Universitätspapier.
Vorhandene Textschichten und die relevanten Abschnitte sind geprüft, keine
visuelle Prüfung oder OCR. Providence-Inhalte sind auf den Artikelkörper begrenzt;
angrenzende aktuelle Nachrichten sind keine Modellmerkmale. Keine Anmeldung,
Kontaktaufnahme, Nachricht, Transaktion, Formularübermittlung, Medienübernahme
oder Umgehung von Downloadsperren. Das FAQ nennt einen passwortgeschützten
Kundenbereich; dieser wurde nicht geöffnet oder als geprüft ausgegeben.

Das Original Moxi unterstützt nicht patientenseitige Logistik für Proben,
Medikamente, Material und PPE. Das FAQ belegt verriegelte Fächer, selbstständiges
Anfahren einer Ladestation und Robot-as-a-Service ohne festen öffentlichen Preis.
Die Providence-Vorabmeldung vom 12. Februar 2024 beschreibt drei verriegelte
Schubladen und etwa dreitägige, mit Controller geführte Kartierung durch Diligent.
Die Meldung vom 14. März bestätigt zwei eingesetzte Roboter. Beide behalten die
Rolle Einsatzbetreiber; daraus wird keine Herstellerquelle oder völlig
menschenfreie Einführung. Beschäftigte be- und entladen und leisten die Versorgung.
Transport, Verriegelung und Hinderniserkennung belegen keine Diagnose, Behandlung,
Sterilität, Infektionsvermeidung oder garantierte Unfallfreiheit.

Der Hersteller datiert Moxis Debüt/Beta in seinem Bericht von 2022 auf 2018.
Die eigene Mitteilung vom 1. Oktober 2019 kündigt einen Markteintritt und Rollout
ab 2. Oktober an; der Rückblick 2022 nennt erste kommerzielle Einsätze 2020.
Diese unterschiedlichen historischen Meilensteine bleiben mit Datum benannt.
2018 bleibt als belegtes Debütjahr, ohne daraus kommerzielle Auslieferung 2018
oder eine lautlos harmonisierte Vertriebstimeline zu machen. Auf der
Herstellerseite reproduzierte eigene PR ist als Hersteller-Mitteilung bezeichnet;
andere übernommene Medienberichte werden nicht allein wegen des Hosts zu Primärbelegen.

Die Moxi-2.0-Planankündigung vom 28. Oktober 2025 nennt Thor/IGX Thor und noch
in Entwicklung befindliche Foundation-Model-Funktionen. Der Rollout-Bericht vom
17. August 2026 nennt tatsächlich A2000-Compute, zehnfaches Onboard-Compute,
zehn- bis fünfzehnfach schnellere Wahrnehmung, zusätzliche Sensoren/Kameras,
neugestaltete Schubladen und Griffe sowie das World Model. Die aktuelle
Rollout-Beschreibung übernimmt A2000; Thor wird nicht als gesichert in jedem
2026 ausgelieferten Gerät geführt. Zukunfts-Compute und Pläne für 15-plus-Geräte
pro Klinik sind keine aktuell universell vorhandene Ausstattung.

Der Rollout unterscheidet ausdrücklich bis neun Stunden am Stück von bis
18 Betriebsstunden pro Tag. Der Tageswert einschließlich Nachladen ist keine
18-Stunden-Einzelakku-Garantie. Beide Dauerfilter lesen den qualifizierten
Neun-Stunden-Wert. „30 Prozent schnelleres Laden“ ohne absolute Dauer und
Testbasis wird nicht in Minuten umgerechnet; das Feld Ladezeit bleibt leer.
Compute-/Wahrnehmungsfaktoren sind keine Fahrgeschwindigkeit oder garantierte
Lieferleistung. Für Original-Moxi werden keine 2.0-Laufzeiten, Maße, Gewichte,
Werkzeuge oder Lasten übernommen. 2026 ist als tatsächliches Rolloutjahr für
Moxi 2.0 belegt; 2025 bleibt die frühere Planankündigung.

Laut Rollout laufen Sicherheit und Autonomie onboard, mit verfügbarem Mobilfunk-
Fallback bei WLAN-Lücken. Gleichzeitig werden World-Model-Training und
Flottenlernen über AWS beschrieben. Das ist keine Behauptung vollständiger
Netz-/Cloud-Unabhängigkeit für jeden Workflow. Private 5G-Kliniknetze bleiben
geplant. Als Rollout-Kunden nennt der Hersteller Endeavor Health Edward Hospital,
Providence Saint John’s Health Center und Children’s Hospital Los Angeles und
meldet Bestellannahme. Dies ist kein unabhängiger Wirksamkeitsnachweis oder
Beleg weltweiter Lieferbarkeit. World Model, Cloud-Software und Compute-Module
sind keine zusätzlichen Hardwaremodelle.

Die UTMB-Fallstudie ist mit September 2026 aktualisiert: ungefähr 70.000 Lieferungen,
22.000 Lieferstunden, 22.000 Meilen und drei Geräte, etwa 25 Lieferungen je Gerät/Tag.
Shannon nennt über 100.000 Lieferungen, ungefähr 30.000 Lieferstunden und
31.000 Meilen mit zwei Geräten, etwa 27 Lieferungen je Gerät/Tag. Diese
herstellerpublizierten Standort-/Flottenwerte sind keine unabhängigen Studien,
Einzelakku-Laufzeiten, universelle Stundenleistung oder Belege einer erfolgten
2.0-Umrüstung. „Nearly four years“ seit März 2023 bleibt ungefähre Formulierung,
keine errechnete exakte Expositionszeit. Der künftige UTMB-Apothekenworkflow mit
zusätzlicher Zugriffsprüfung ist keine pauschale aktuelle Arzneimittel-Freigabe.
Die kleineren Website-Teaserzahlen werden nicht mit dem datierten PDF-Stand
vermischt. Sicherheits-, Personal- und Ergebnisaussagen bleiben Anbieterbehauptungen.

Poli ist im Gründerinnenbeitrag ausdrücklich ein früherer, nicht kommerzieller
Krankenhausassistent. Das UT-Austin-Villa-Team-Papier von 2018 verknüpft auf
Seite sieben Thomaz’ Forschungsplattform und Software mit Diligent; die
universitäre Beschreibung nennt einen Arm, der an einer Säule auf und ab fährt.
Dieser Forschungsaufbau ist keine aktuelle Kaufoption und keine Spezifikation
von Moxi. Ein Arm und eine Säule ergeben keine sichere Gesamt-Gelenkzahl.
Andere im Lebenslauf genannte PR2-, Meka- und Kinova-Jaco2-Plattformen und weitere
Universitäts-Teamroboter werden keine Diligent-Varianten. Poli steht in der
gewerblichen Dienstleistungs-/Forschungs-Kategorie mit ausdrücklichem
Nicht-Verkaufsstatus; eine bipedale/humanoide Bauform wird nicht erfunden.

Diligent bezeichnet sich im August-2026-Bericht als Serve-Unternehmen. Die
Übernahmebeziehung rechtfertigt keine Markenverschmelzung oder Übertragung von
Gehwegroboter-Spezifikationen. Ein genauer juristischer Abschlusszeitpunkt wird
aus widersprüchlicher Ankündigungs-/Blog-Datierung oder gesperrten Investor-Dateien
nicht behauptet. Embodied und Moxie bleiben unabhängig von Diligent und Moxi.
Vollständige historische Hardwarestände, aktuelle regionale Verfügbarkeit,
alle USPs und Marktführerschaft bleiben unbewiesen.

808 Unit-Tests in 64 Dateien sowie 22 Browserfälle einschließlich vier Axe-Prüfungen
bestehen. Build: 3.419 Seiten. Audit: null Fehler, 1.244 Warnungen; eine neue
Warnung betrifft Polis unbelegtes ursprüngliches Erscheinungsjahr. Drei Detailseiten
mit 51 Feldern, Quellenrollen, strukturierten Daten, Firmenfokus, Merkmalsuche und
Vergleich sind geprüft. Zwei ursprüngliche Modell-Exportzeilen enthalten insgesamt
34 Feldstatus-Einträge; das Queueziel enthält 17. Reimport ergänzt null Modelle und
lässt 32 getrackte Datendateien byteidentisch. Offline-Refresh bleibt semantisch
idempotent. Eigene Browser, Testserver und Hilfsprozesse sind beendet und geprüft.

Daten-Zwischencommit `909a5ec8c570ca3c1e6cfeb38d3ab36efe84449f` wurde auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei Modellidentitäten,
neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben offen.


## Ergänzung 144 – Double Robotics: drei Generationen und Kamera-Dolly-Konfiguration (3. November 2026)

Original Double, Double 2 und das benannte Paket 360 Camera Dolly sind ergänzt;
Double 3 erhält eine technische Teilprüfung. Vier Prüfungen umfassen 68 Felder:
26 dokumentiert und 42 nicht dokumentiert. Hinzu kommen 19 Merkmalsaussagen,
19 Produktquellenverweise und ein Firmenfokus. Die drei alten Double-3-Merkmale,
Modell-ID, Fund-URLs und Medien bleiben erhalten. Unbelegte 1,0 m/s und „medium“
entfallen. 2.367 andere Ausgangszeilen, 1.240 vorherige Feldprüfungen und
138 Firmenfokusse behalten ihre Werte. Es gibt keine Anwendungscode- oder
CSV-Schemaänderung. Bestand: 2.371 Einträge, 1.302 datierte Merkmalssätze,
5.764 Aussagen, 2.723 Produktquellenverweise sowie 1.244 Feldprüfungen mit
23.527 Feldern. 139 Firmenfokusse; von 518 ursprünglichen Queue-Zielen sind
478 technisch teilgeprüft, 40 stehen aus. Dauerbeleg:
`reports/competitor-batch-144-evidence.json`.

23 Antworten sind gehasht gesichert. 19 liefern HTTP 200, davon ist eine lediglich
die private Posthaven-Passwortseite nach Redirect des alten Blogs und ausgeschlossen.
18 erfolgreiche öffentliche Inhalte bleiben; zwei Support-Redirects liefern HTTP 502,
zwei vermutete Presse-PDF-Adressen HTTP 404. Diese Fehlerinhalte begründen keine
Produkteigenschaften. Zwei native PDFs enthalten zusammen drei Seiten: die
zweiseitige generische iPad-Anleitung Revision 13 und die einseitige eigene
Apple-Store-Mitteilung. Nur bestehende Textschichten und native HTML-/Markdown-
Texte sind geprüft, keine visuelle Prüfung oder OCR. Keine Passwort-, Konto-,
Formular-, Nachrichten-, Kontakt- oder Transaktionsaktion und keine Medienübernahme.
Der öffentliche SDK-Text wird gelesen; keine Geräte-, Privatnetz- oder Fleet-API
aufgerufen und keine Schlüssel angefordert.

Die eigene Mitteilung vom 12. November 2013 bestätigt erste Double-Auslieferungen
im Mai 2013 und nennt damals 2.499,95 USD im Apple Store. Kompatible iPads und
kommende iPad-Air-Unterstützung bleiben historischer Stand. Double 2 hat laut
Produktseite Lateral Stability Control und vom Fahrer zugeschalteten Power Drive.
„Bis 80 Prozent schneller“ ergibt ohne Grundgeschwindigkeit keine absolute
Geschwindigkeitsangabe. Die optionale Camera Kit mit fünf Megapixeln, 150 Grad
Bildwinkel, dauerhaftem Bodenbild und Lightning-Stromdurchleitung wird nicht
jedem nackten Double 2 oder Original Double als Grundausstattung zugeschrieben.
Die Seite bestätigt ausdrücklich ihre Kompatibilität mit der ersten Generation.
Die generische Revision-13-Anleitung enthält Power Drive, iPad-Aufbau und ungefähr
zwei bis drei Stunden Laden, ist aber nicht generationstituliert; ihre Zahlen
werden keiner der älteren Generationen als exakte Spezifikation zugeordnet.
2016 in einer Upgrade-Rückschau ersetzt keine ausdrückliche Double-2-Startdatierung.

Double 3 hat laut eigener FAQ ungefähr 7,3 kg beziehungsweise 16 lb, bis vier Stunden
normale Nutzung und ungefähr zwei Stunden bis voll. Das metrische Feld enthält
keinen zusätzlichen lb-Token, der den Filter zur erneuten Umrechnung veranlassen
würde. Beide Dauerfilter lesen vier Stunden. Die 47–60 Zoll verstellbare Höhe
mit ungefähr 120–150 cm Hersteller-Rundung ist kein vollständiges Längen-/Breiten-
/Höhenmaß. Doppelkameras mit je 13 Megapixeln, sechs Beamforming-Mikrofone,
RealSense-D430-Module, Ultraschallsensoren und Jetson TX2-4GB sind genannt;
neun DoF gehören zum Inertialsensor, nicht zur mechanischen Gelenkzahl.

Click-to-Drive bedeutet vom Fahrer gewähltes sichtbares Ziel mit lokaler
Hindernisassistenz. Das SDK beschreibt auch das Anklicken des Ladestationssymbols.
Gebäudeweite automatische Kartierung und Pfadplanung bleiben auf der Übersicht
zukünftig; mögliche ROS-Konnektoren sind keine installierte ROS-Unterstützung.
Das FAQ nennt WLAN für die Internetverbindung. Vorhandenes Bluetooth beweist kein
natives Mobilfunkmodem. Das iPhone-vermittelte LTE-/4G-/WLAN-/Bluetooth-Szenario
der Kamera-Dolly gehört zu deren Konfiguration. Keine unabhängige Prüfung
unfallfreier Navigation, heutiger Browserkompatibilität oder sicherer Cloud-Dienste.

Der Gründer-Interviewtext vom 10. September 2019 wird ausschließlich für namentlich
zugeordnete Antworten von David Cann und Marc DeVidts als Primärbeleg genutzt.
Deren 3.999-USD-Bestellankündigung und geplante erste Auslieferungen Ende September
belegen das Ankündigungsjahr 2019, keinen tatsächlichen ersten Liefertag oder
heutigen Preis. Redaktionelle Einleitung und weltweite Marktführerbehauptung
werden nicht zu Herstellerdaten. Die aktuelle Startseite sagt „Sold Out“; daraus
folgt weder ein exakter Einstellungszeitpunkt noch bewiesene Firmenschließung,
globale Verfügbarkeit oder funktionierender Anrufdienst. Ein Double-3-Kopf kann
laut Hersteller Double-2-Basen aufrüsten und wird nicht als weiterer kompletter
Roboter gezählt. Gehäusefarben, Kamera-, Audio-, Dock- und Kopfzubehör bleiben
Zubehör beziehungsweise Optionen. Öffentliche SDK-/Release-Notizen und
Performance-Modi begründen keine zugesicherte heutige Pflege oder Supportdauer.

Die 360 Camera Dolly ist ausdrücklich ein Paket aus Double 2, Universal 360 Camera
Mount und Pelican-Koffer. Die undatierte Herstellerseite listet 3.000 USD für das
Paket und 249 USD für die Halterung allein; aktuelle Kasse, Bestand und Preis sind
nicht verifiziert. Die Halterung allein ist kein Roboter. Kameras und Steuergerät
werden aus dem Paketumfang nicht erfunden. Die Fünf-Pfund-Grenze oben entspricht
rund 2,27 kg und ist keine gesamte Fahrwerkslast. Einige zusätzliche Pfund nahe
der Basis bleiben mangels exakter Zahl unsummiert. Gezeigte Sechs-GoPro-Aufnahmen
sind externe Beispiel-Rigs, keine zugesicherte Kamera-Lieferung. Leise ist ohne
dB-Prüfung Anbieterprosa, keine unabhängige Messung; eine autonome Filmfahrt wird
nicht behauptet. Ein exaktes Erstverkaufsjahr wird aus sekundären Nachrichten
nicht übernommen.

Fleet Management listet Basic kostenlos und Professional mit 79,20 USD pro
Roboter/Monat bei Jahreszahlung oder 99 USD monatlich. Diese Softwarepreise sind
kein Roboter-Kaufpreis und keine bestätigte aktuelle Buchbarkeit. SSO, Kalender,
Zugangsrechte und Verbindungsqualitätsprotokolle sind beschriebene Dienste.
Kontogebundene REST-Dokumentation und API-Schlüssel werden nicht geöffnet.
Historische Verschlüsselungsangaben beweisen keine aktuelle Zertifizierung oder
vollständige heutige Sicherheitsprüfung.

808 Unit-Tests in 64 Dateien und 22 Browserfälle einschließlich vier Axe-Prüfungen
bestehen. Build: 3.422 Seiten. Audit: null Fehler und 1.246 Warnungen; zwei neue
betreffen unbelegte Erscheinungsjahre von Double 2 und der Kamera-Dolly.
Vier Detailseiten mit 68 Feldern, Quellen, strukturierten Daten, Markenfokus,
Merkmalsuche und Vierer-Vergleich sind geprüft. Eine ursprüngliche Modell-
Exportzeile und ein Queueziel liefern jeweils 17 Feldstatus-Einträge. Der
bestehende Firmenbeschreibungs-Identitätsexport bleibt byteidentisch. Reimport:
null Ergänzungen, 32 getrackte Datendateien byteidentisch. Offline-Refresh bleibt
semantisch idempotent. Eigene Browser, Testserver und Hilfsprozesse sind beendet.

Daten-Zwischencommit `9702b183a1af41b5f0e8973290cf2ad8e08fc93e` ist auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei Modellidentitäten,
neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben offen. Vollständige
Portfolios, alle historischen Hardwarestände und USPs sowie Marktführerschaft
bleiben unbewiesen.


## Ergänzung 145 – Dusty Robotics: FieldPrinter-Generationen, Vermessungsworkflow und Entwicklungsidentitäten (3. November 2026)

FieldPrinter 1 ist ergänzt und FieldPrinter 2 technisch teilgeprüft. Zwei Prüfungen
umfassen 34 Felder: 13 dokumentiert und 21 nicht dokumentiert. Zwölf neue
Merkmalsaussagen, zehn zusätzliche Produktquellenverweise und ein Firmenfokus
kommen hinzu. Drei alte wörtliche FP2-Merkmale, Fund-URLs, ID und Medien bleiben
erhalten. 2.370 andere Ausgangszeilen, 1.244 frühere Feldprüfungen und 139 bisherige
Firmenfokusse sind unverändert. Kein Anwendungs- oder CSV-Schemawechsel.
Gesamt: 2.372 Einträge, 1.303 datierte Merkmalssätze, 5.776 Aussagen,
2.733 Produktquellenverweise, 1.246 Feldprüfungen mit 23.561 Feldern und
140 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen sind 479 technisch
teilgeprüft; 39 bleiben offen. Dauerbeleg: `reports/competitor-batch-145-evidence.json`.

18 Antworten sind gehasht gesichert: 14 HTTP 200, darunter zwei bytegleiche
Antworten, weil die alte Produktadresse zur Plattformseite weiterleitet.
Drei Hosts liefern HTTP 403: technische Supportseite, Manual-Mirror und verlinkte
Construction-Dive-Mitteilung. Ein Einsatzbetreiber-Artikel bei JE Dunn liefert
eine ausdrückliche Wordfence-Sperre mit HTTP 503. Nach jeder Ablehnung enden
Anfragen an den Host. Diese Inhalte und Support-Suchvorschauen werden nicht als
nativ gelesen ausgegeben oder als aktuelle Zahlenbelege importiert. Keine
Challenge-, Proxy-, API-, Login- oder Formularumgehung, Kontakt-/Nachrichtenaktion,
Transaktion oder Medienübernahme. Zwei native PDFs mit sieben Seiten sind über
bestehende Textschichten geprüft; keine visuelle Prüfung oder OCR.

Die Mitteilung vom 15. Juni 2021 datiert den ersten kommerziellen Rollout des
ursprünglichen FieldPrinter auf Herbst 2020. Die November-2020-Produktionserzählung
und der Juli-2020-Entwicklungsbericht bleiben getrennte Meilensteine. Der öffentliche
Hersteller-Post mit nativem Veröffentlichungsdatum 18. Mai 2026 nennt ausdrücklich
FieldPrinter 1 und kündigt dessen Ablösung durch FP2 an; ein genauer letzter
Liefertag oder Supportablauf folgt daraus nicht. „Amber“ ist im Juli-2020-Beitrag
der Codename einer internen zweiten Entwicklungsplattform, keine sichere Identität
mit dem kommerziellen FieldPrinter 2 von 2024. Auch eine vollständige Gleichheit
mit dem später FieldPrinter 1 genannten Serienstand ist nicht belegt. Der Hinweis
bleibt als offene historische Hardware-Identität erhalten, ohne zusätzliche
kommerzielle Modellkarte oder behauptete Dublettenauflösung.

Die öffentliche Hersteller-CDN-Unterlage zum Arbeitsablauf trägt gemischte
April-/Juni-2021-Revisionsfußzeilen und einen Confidential-Vermerk. Sie wird nicht
weiterverteilt; wenige historische Fakten sind qualifiziert paraphrasiert. Externe
Vermessungspunkte, vorbereitete CAD-/CSV-Dateien und menschliche Ergänzung in nicht
erreichbaren Bereichen sind Teil dieses damaligen Workflows. Kontrollpunktgenauigkeit
und Druckplatzierung sind unterschiedliche Größen; die 1/16-Zoll-Merkmalsangabe
ist keine unbegrenzte absolute Gebäudegenauigkeit oder reine Fahrzeugpositions-
/Sichtsystemgenauigkeit. Historische Wetterbedingungen werden nicht zu heutigen
FP2-Grenzen. Die Gründerin berichtet selbst über Hindernisse, Fehlfunktionen,
Ersatzgerät und geänderte Arbeitsabläufe; ihre Kontextangaben sind keine garantierte
Flächenleistung oder Zusicherung völliger Fehlerfreiheit.

Die eigene Ankündigung vom 23. Januar 2024 nennt FieldPrinter 2, 23 lb einschließlich
Batterie und einen ein Zoll breiten Druckkopf bei 300 dpi. Für das Massefeld sind
23×0,45359237 = 10,43262451 kg auf 10,43 kg gerundet; ohne zusätzlichen lb-Token
bleibt die Filterauswertung korrekt. Es ist der datierte Einführungsspezifikations-
Wert, keine aktuelle unabhängige Wägung oder Transportkoffer-Masse. Nicht gelesene
Support-Vorschauen mit anderen Rundungen/Auflösungen ersetzen diesen Stand nicht.
Power Hold bei Akkutausch beweist keine Lauf- oder Ladezeit. Edge Print, Shadow
Print, Kurven- und Hindernisfunktionen liefern ohne genaue Spezifikation keine
exakten Randabstände, Wetter-/IP-Zulassung oder Absturz-/Unfallfreiheit.

Der vierseitige PMD-Zulieferbericht dokumentiert zwei aktive Vorderradantriebe,
ein passives Hinterrad, IMU-/Encoder-Unterstützung bei verdeckter Tracker-Sicht,
elektrisches Bremsen und Kommunikations-Watchdog. Die Rolle bleibt Integrationspartner,
kein Hersteller- oder unabhängiger Sicherheitstest. Einachsige Motorregler ergeben
keine Gesamt-Gelenkzahl. Controller-Maße, elektrische Bauteil-Leistungsgrenzen und
Ingenieur-Anekdoten zu Wetter oder Verdeckungszeiten werden nicht zu Robotermaßen,
Gesamtleistungsaufnahme, Temperaturzulassung oder universeller Blindfluggarantie.

Der nativ datierte Beitrag vom 19. Oktober 2026 beschreibt Floor Elevation jetzt
als enthaltene Funktion mit vorhandenem Roboter und Tracker, Live-Heatmaps,
Punktmessungen, PDF-/CSV-Ausgabe und Zusammenführung mehrerer Stationierungen in
der Cloud. Ein ASTM-E1155-Bericht wird dem Text zufolge vom Team oder Prüfpartner
aus den Daten erstellt; das ist keine automatisch zertifizierte Ausgabe oder
unabhängige Normkonformitätsbestätigung. Eine ältere Oktober-2024-GA-Überschrift
im Presseindex wird wegen gesperrtem Zielinhalt nicht still mit diesem 2026-Stand
harmonisiert. Floor Elevation, Portal, Plugins und Mess-/Funkzubehör sind keine
zusätzlichen vollständigen Hardwaremodelle.

Die aktuelle Preisseite beschreibt Nutzungstage, Plattformzugang und Einführung,
inklusive Robotik, Tracker, iPad/Joystick und Schulung. Kein genauer öffentlicher
Betrag ist belegt; Finanzierungsrunden sind kein Kaufpreis. Verfügbarkeit wird auf
Nordamerika begrenzt. Aussagen wie zehnfache Produktivität, höchste Genauigkeit,
Sicherheit oder vermiedene Nacharbeit bleiben Anbieterbehauptungen statt
unabhängig bewiesener Einzigartigkeit oder Marktführerschaft.

808 Unit-Tests in 64 Dateien und 22 Browserfälle einschließlich vier Axe-Prüfungen
bestehen. Build: 3.423 Seiten. Audit: null Fehler, 1.245 Warnungen; eine Warnung
weniger durch das nun belegte FP2-Einführungsjahr. Zwei Detailseiten mit 34 Feldern,
Quellenrollen, strukturierten Daten, Firmenfokus, Merkmalsuche und Vergleich sind
geprüft. Eine ursprüngliche Modell-Exportzeile und ein Queueziel liefern je
17 Feldstatus-Einträge. Bestehende Identitätsdateien und Firmenprodukt-Exporte
bleiben byteidentisch. Reimport: null Ergänzungen und 32 getrackte Datendateien
byteidentisch; Offline-Refresh semantisch idempotent. Eigene Browser, Testserver
und Hilfsprozesse sind beendet und geprüft.

Daten-Zwischencommit `2a3b6fff4f704f43bcd828916de2b9b678598bbb` ist auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei Modellidentitäten,
neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben offen. Amber und
vollständige historische/regionale Portfolios, sämtliche USPs sowie Marktführerschaft
bleiben unbewiesen.


## Ergänzung 146 – Enactic: OpenArm-Generationen, passive Lehreinheit, Versuchszelle und Ena-Beta (3. November 2026)

OpenArm 1.0, KER, Cell und Ena sind als vier benannte Plattformen/Konfigurationen
ergänzt; OpenArm 2.0 ist erweitert. KER bleibt ausdrücklich passiv, Cell eine
integrierte Versuchszelle und Ena ein Programm mit geplanter Beta. Fünf Prüfungen
umfassen 90 Felder: 38 dokumentiert, 50 nicht dokumentiert, eines widersprüchlich
und eines Roadmap. Hinzu kommen 24 Merkmalsaussagen, 29 Produktquellenverweise und
ein Firmenfokus. Drei alte OpenArm-2.0-Merkmale, Fund-URL, ID und Medien bleiben
erhalten. 2.371 andere Ausgangszeilen, 1.246 frühere Feldprüfungen und 140 bisherige
Firmenfokusse sind unverändert. Kein CSV-Schemawechsel. Der Vergleich zeigt jetzt Erscheinungsjahre sowie
Roadmap-/Konfliktstatus auch ohne Zahlenwert; Deutsch und Englisch sind beschriftet.
Gesamt: 2.376 Einträge, 1.307 datierte Merkmalssätze, 5.800 Aussagen,
2.762 Produktquellenverweise, 1.251 Feldprüfungen mit 23.651 Feldern und
141 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen sind 480 technisch
teilgeprüft; 38 bleiben offen. Dauerbeleg: `reports/competitor-batch-146-evidence.json`.

27 HTTP-Antworten sind gehasht gesichert: 25 HTTP 200, darunter drei öffentliche
Seitenassets und zwei leere Antworten ohne verwertbaren Text. Eine falsch vermutete
Archivroute liefert 404. WowRobos Produktseite liefert 429; danach erfolgen keine
weiteren Anfragen an diesen Host. Der ungelesene Lieferanteninhalt und seine
Suchvorschau werden nicht als nativ geprüfte Bestands- oder Preisquelle ausgegeben.
Die Preise im offiziellen Projektverzeichnis bleiben dessen attribuierte Angebote.
Ein eigener, geschlossener Browserkontext liest nach normalem Scrollen die animierten
Homepage-Zähler; HTML und Text sind gehasht. Er beobachtet 18 native Antworten,
einschließlich Preloads. Bilder werden nicht ausgewertet oder weiterverwendet;
keine visuelle Prüfung, PDF-Prüfung oder OCR. Keine Formulare, Konten, Kontakt-
/Nachrichtenaktion, Transaktion oder Umgehung einer Sperre.

OpenArm 2.0 ist auf der Firmenseite mit Mai 2026 bezeichnet. Ankündigung und
Cell-Demo im März bleiben davon getrennt. Die Homepage liefert nach Animation
633 mm Reichweite und 5,5 kg Masse pro Arm sowie 1 kHz CAN-FD, keine Nullwerte aus
dem statischen HTML und keine Gesamtmasse der beidarmigen Installation. 6.500 USD
Stücklistenkosten sind keine unabhängige Bestätigung eines kompletten Kaufpreises.
Der Projekteintrag für WowRobo V2 nennt ebenfalls einen Einstiegspreis, dessen
Konfiguration, Versand, Lieferzeit und aktueller Bestand getrennt bleiben.

Beide Versionsdokumentationen definieren 4,1 kg nominal für eine Minute bei voller
Streckung und 6 kg Spitze für drei Sekunden Bewegung und eine Sekunde Halten.
Greifer beziehungsweise Werkzeug sind eingeschlossen: 1,5 kg Werkzeug lassen
2,6 kg nominal beziehungsweise 4,5 kg für das Objekt. Das ist keine uneingeschränkte
Dauerlast. Kameramodul-Auflösung und Sichtwinkel werden nicht zu Greifgenauigkeit;
das effektive Sichtfeld zwischen Fingern ist ausdrücklich undokumentiert. Die
Motorseite nennt die DM4340-Serie ausdrücklich nicht QDD und qualifiziert damit
allgemeinere QDD-Werbung. Motor-RPM, Drehmoment und Spannung sind keine kartesische
Armgeschwindigkeit oder unabhängige Sicherheitszertifizierung.

Die historische 1.0/01-Version ist mit Juli 2025 belegt; unterschiedliche Tageslabels
werden nicht zu einem exakten Liefertag vereinheitlicht. Das Archiv ist nicht mehr
aktiv gepflegt. Sein Parallelgreifer hat 88 mm Öffnung und 60 Grad Rotorbewegung.
Die offizielle Umrüstung ändert Greifer, J5-Halterung und Abdeckungen bei gleichen
Armstrukturen, Motoren und Elektronik. Der Archivleitfaden warnt bei Stromverlust
vor fallender Last. Aktuelle 2.0-Masse und Reichweite gelten nicht automatisch für
jedes alte Werkzeug. V1.1 bleibt eine belegte Anbieterbezeichnung mit offener
Hardwaregrenze, ohne erfundene weitere Enactic-Generation oder behauptete Dublette.

KER ist eine motorlose, schultergetragene Eingabeeinheit mit Encodern und Lagern,
gleicher Achsstruktur und auf 70 Prozent skalierten Gliedern. Die Projektangaben
1,7 kg, faltbarer Rückenteil und schnelles Anlegen sind keine unabhängigen
Ergonomie-Ergebnisse. 16 Encoderkanäle sind keine 16 angetriebenen Armgelenke.
Homepage „forthcoming“ und Bestellangaben des Herstellerverzeichnisses widersprechen
sich; der Release-Status bleibt widersprüchlich und ohne erfundenes Datum.

Cell ist durch eigene Montage-, Stücklisten-, Verdrahtungs- und Integrationsunterlagen
als vollständige Versuchszell-Konfiguration abgegrenzt. Die ungefähr 100 kg und
480 W zuzüglich PC sind ausstattungsabhängig. Sensoren stoppen bei Eingriff durch
Stromabschaltung; ein zertifiziertes Sicherheitsniveau folgt daraus nicht. Stabile
Beleuchtung, Kameras, Hintergrund und Z-Achse sollen reproduzierbare Versuche
ermöglichen. Der Preis und die Maße eines separaten Rahmen-/Modulkits sind weder
Gesamtsystempreis noch geprüfte äußere Roboterabmessungen. Werbung mit Dauerbetrieb
beweist keine Batterielaufzeit. Encoder, Kameras, Greifer, Umrüstsätze und Software
sind keine zusätzlichen vollständigen Roboter.

Hardware steht unter der stark reziproken CERN-OHL-S-2.0-Lizenz; Software hat je
Repository eigene Lizenzen. Die pauschale Firmenformulierung zu permissiven Lizenzen
wird nicht auf alle Komponenten ausgedehnt. Das Herstellerverzeichnis kennzeichnet
Prüfstatus und warnt vor nicht kompatiblen Nachbauten, einschließlich fehlender
aktueller Verbindung/Kompatibilität von OpenArmX Pro Max. Daraus entsteht keine
automatische Modell- oder Firmenidentität.

Ena wird mit geplanter Beta Ende 2026 geführt. Das schemakonforme Jahr 2026 bleibt
als Roadmap markiert und im Text erläutert; es behauptet keine erfolgte allgemeine
Auslieferung. Das erste Audit beanstandete den erklärenden Text im reinen Jahr-Feld;
dieser Formatfehler ist korrigiert und die Prüfungen sind wiederholt. Pflegeaufgaben
sind Herstellerziele ohne unabhängige Erfolgsquoten oder klinische Wirksamkeitsbelege.
Die japanische Partnerseite erklärt ausdrücklich die kostenlose Unterstützung der
Entwicklung: Partnerzahlen sind keine installierte Flotte. Die Mitteilung vom
2. Juni 2026 beschreibt Validierung mit NVIDIA-Modellen, nicht die unveränderte
Hardware oder bewiesene Autonomie jedes Ena-Exemplars. OpenArm-/Cell-Massen,
Gelenkzahlen, Nutzlast oder Rechenhardware werden nicht auf Ena übertragen.

808 Unit-Tests in 64 Dateien und 52 Browserfälle einschließlich acht Axe-Prüfungen
bestehen. Build: 3.427 Seiten. Audit: null Fehler, 1.246 Warnungen. Fünf Detailseiten
mit 90 Feldern, Quellenrollen, strukturierten Daten, Firmenfokus, Merkmalsuche und
Vergleich sind geprüft. Enactic ist ein Katalogprofil aus einer geprüften Reseller-
Familienreferenz; die ursprünglichen Firmen-/Modell-Exporte enthalten deshalb keine
Enactic-Zeile. Der Queue-Export enthält 18 Feldstatus-Einträge. Bestehende
Identitätsdateien und diese Exporte sind unverändert. Reimport: null Ergänzungen,
32 getrackte Datendateien byteidentisch; Offline-Refresh semantisch idempotent.
Geänderte Quell- und Testdateien: ESLint/Prettier bestanden. Daten behalten die kanonische Serialisierung
der Import-/Refresh-Skripte; keine globale Formatierung historischer Datensätze.
Eigene Browser, Testserver und Hilfsprozesse sind beendet und geprüft.

Daten-Zwischencommit `36867fc377ec5a3c68a9cbb80dc7ba65331a53c4` ist auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei Modellidentitäten,
neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben offen. V1.1-Abgrenzung,
vollständige Portfolios, alle USPs und Marktführerschaft bleiben unbewiesen.


## Ergänzung 147 – Exotec: Skypod-Generation, Skypicker und Systemgrenzen (3. November 2026)

Der bestehende Skypod-Familieneintrag ist vertieft; der ausdrücklich neu konstruierte
kompakte Next-Generation-Roboter und der Skypicker-Arm sind ergänzt. Drei Prüfungen
umfassen 54 Felder: 24 dokumentiert, 29 nicht dokumentiert und eines widersprüchlich.
Hinzu kommen 18 Merkmalsaussagen, 13 Produktquellenverweise und ein Firmenfokus.
Die drei ursprünglichen Skypod-Merkmale, Fund-URL, ID und Medien bleiben erhalten;
2.375 andere Ausgangszeilen, 1.251 frühere Feldprüfungen und 141 Firmenfokusse sind
unverändert. Gesamt: 2.378 Katalogeinträge, 1.309 datierte Merkmalssätze,
5.818 Aussagen, 2.775 Produktquellenverweise und 1.254 Feldprüfungen mit 23.705
Feldern. Die 142 Firmenfokusse sind getrennt von den 1.037 Marken-/Firmenprofilen
gezählt. Von 518 ursprünglichen Queue-Zielen sind 481 technisch teilgeprüft;
37 bleiben offen. Dauerbeleg: `reports/competitor-batch-147-evidence.json`.
Familien und explizite Generationen sind Katalogeinträge mit erläutertem Umfang;
die Gesamtzahl behauptet keine überschneidungsfreie Anzahl eigenständiger Produkte.

16 gespeicherte HTTP-Antworten sind SHA-256-geprüft: zwölf HTTP 200, darunter ein
Hersteller-PDF mit 3 Seiten. Vier vermutete/veraltete Pfade lieferten 404 und
sind ausgeschlossen. Keine Zugriffs- oder Ratenblockade in diesem Exotec-Batch.
HTML, native Template-Inhalte und PDF sind als Text gelesen; keine visuelle Prüfung,
OCR oder Medienübernahme. Die native Zeitleiste und FAQs liegen in HTML-Templates,
die ausdrücklich dekodiert wurden; deren Inhalt wird nicht als Browserbeobachtung
ausgegeben. Kein Recherchebrowser, keine Formulare, Konten, Kontaktaufnahme,
Nachrichten oder Transaktionen.

Die japanische Hersteller-Zeitleiste nennt 2017 für das erste kommerzielle System.
Das bleibt ein Familienmeilenstein ohne erfundenen exakten Liefertag. Die Mitteilung
vom 6. Februar 2025 führt ausdrücklich einen neuen kompakteren Skypod sowie neue
Stationen, Exchanger und dichtere Lagerung ein. Sie berichtet über vorherige
Stealth-Projekte: öffentlicher Marktstart ist nicht erste Installation. Andere
historische Generationsbezeichnungen sind nicht ohne mechanische Abgrenzung als
weitere Modelle angelegt. Die jetzige Familienseite nennt 30 kg Inventarlast,
4 m/s, vier angetriebene Räder, bis 14 m Kletterhöhe und 0 bis +40 Grad Celsius.
Diese aktuellen Angaben sind für die Generation zusammen mit der Einführung
referenziert; die Quellen sind kein unabhängiger generationenspezifischer Lasttest.
Die 12 m im PDF von 2022 bleiben historisch abgegrenzt. Kletterhöhe wird weder zu
Roboterabmessungen noch 4 m/s pauschal zu einer separat belegten Vertikalgeschwindigkeit.

Bis zu 600 Behälter pro Stunde sind eine Stationsangabe. Die beworbene Verbesserung
um 50 Prozent an der Station und bis zu 30 Prozent bei der Lagerdichte vergleicht
Systemgenerationen; daraus entstehen weder 50 Prozent schnellere Roboterfahrt noch
exakte Fahrzeugmaße. Integrierter Puffer, Sequenzierung, Einzelstück-/Kartonkommissionierung
und Pick-and-Pack bleiben Systemfunktionen. Mehr als 20 Projekte und 400 Millionen
USD Projektwert laut Einführung sind weder Roboterzahl noch Roboterpreis. Die 20 cm
Höhenverstellung der Station sind kein Hubweg des mobilen Roboters.

Die native Lade-FAQ nennt etwa fünf Minuten Zwischenladen pro Betriebsstunde sowie
Energierückgewinnung beim Bremsen und Absteigen. Vollladezeit, Akkukapazität oder
55 Minuten belegte Laufzeit folgen daraus nicht. Deepsky-Orchestrierung und
Liniennavigation sind belegt, exakte Ortungs-/Andockgenauigkeit bleibt unbekannt.
Spitzenlastmiete, Wartung und 24/7-Support ergeben weder einen numerischen Mietpreis
noch Batterielaufzeit. Historische Astar-Steuerung und heutige Deepsky-WES-Texte
beweisen kein Retrofit jeder alten Anlage.

Skypicker ist in französischen und englischen Mitteilungen vom 25. Januar 2021
als neuer artikulierter Pickarm eingeführt. Französisch nennt starre greifbare
Objekte unter 2 kg, mindestens 2 × 2 cm Greiffläche und 2 m/s Objekttransfer. PDF
und niederländische Herstellerseite von 2022 nennen dagegen bis 2 kg. Der Unterschied
an der strengen Obergrenze bleibt als Konflikt erhalten. Die Greiffläche sind keine
Armabmessungen; vier parallele Aufträge sind keine vier Gelenke. Bis 600 Artikel
pro Stunde sind von 600 Behältern pro Stunde der Skypod-Station getrennt. Getestete
Klauengreifer werden nicht als später ausgelieferte Standardausstattung ausgegeben.
Aktuelle Lieferbarkeit, Achszahl, Reichweite, Wiederholgenauigkeit, Masse und
IP-Schutz bleiben offen. Die geschlossene Umgebung ist kein unabhängiger
Sicherheitszertifizierungsbeleg. Software, Fördertechnik, Stationen, Exchanger und
Regale werden nicht automatisch zu zusätzlichen Roboter-Modellen.

808 Unit-Tests in 64 Dateien und 18 Browserfälle einschließlich vier Axe-Prüfungen
bestehen. Build: 3.429 Seiten. Datenaudit: null Fehler und 1245 Warnungen.
Der erste Suchtest erwartete eine reine Merkmalstreffer-Vorschau für einen Begriff,
der bereits in der normalen Beschreibung steht. Die Vorschau wird dort korrekt
nicht gezeigt. Der Test verwendet nun einen ausschließlich in Merkmalen genannten
Projektwert; der Anwendungscode bleibt unverändert.
Drei Detailseiten mit 54 Feldern, strukturierte Daten ohne erfundene Preisangebote,
Firmenfokus, Merkmalsuche und Vergleich sind geprüft. Zwei ursprüngliche Modell-
Exportzeilen enthalten 36 Feldvorkommen für denselben Skypod; eine Firmenzeile und
die Queue-Zeile sind geprüft. Die Firmenbeschreibungs-Familienreferenz bleibt
byteidentisch und wird nicht zu einer exakten Next-Generation-Identität erweitert.
Reimport ergänzt null Zeilen; 32 getrackte Datendateien bleiben byteidentisch.
Offline-Refresh ist bis auf Zeitstempel und deren Digest semantisch idempotent.
Geänderte Testdatei besteht ESLint/Prettier; kanonische Datenserialisierung ist
geprüft. Keine Änderung am Anwendungscode oder CSV-Schema. Eigene Testbrowser,
Server und Hilfsprozesse sind beendet und ihre Freigabe ist geprüft.

Daten-Zwischencommit `e4abc70a2a9ad1ef35556a69b8d1ad5d1599dc34` ist auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei Modellidentitäten,
neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben offen. Vollständige
historische Portfolios, aktuelle Lieferbarkeit, alle USPs und Marktführerschaft
sind weiterhin unbewiesen.


## Ergänzung 148 – FarmDroid: FD20-Konfigurationen, Solarbetrieb und geplante FD60-Lieferung (3. November 2026)

FD20 und FD60 sind vertieft, ohne weitere Katalogzeilen aus Zubehör oder
Revisionsbezeichnungen zu erzeugen. Zwei Prüfungen umfassen 40 Felder: 21 dokumentiert,
17 nicht dokumentiert, eines widersprüchlich und eines Roadmap. Hinzu kommen 16
Merkmalsaussagen, 17 Produktquellenverweise und ein Firmenfokus. Alle sechs bisherigen
Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.376 andere Katalogzeilen,
1.254 frühere Feldprüfungen und 142 Firmenfokusse sind unverändert. Gesamt: 2.378
Katalogeinträge, 1.309 datierte Merkmalssätze, 5.834 Aussagen, 2.792 Produktquellenverweise,
1.256 Feldprüfungen mit 23.745 Feldern und 143 Firmenfokusse. Von 518 ursprünglichen
Queue-Zielen sind 482 technisch teilgeprüft; 36 bleiben offen. Dauerbeleg:
`reports/competitor-batch-148-evidence.json`.

17 HTTP-Antworten sind gehasht gesichert und geprüft; alle liefern HTTP 200.
Darunter sind drei Hersteller-Datenblätter mit insgesamt sechs Seiten. HTML und PDF
sind als Text gelesen; kein Recherchebrowser, keine visuelle Prüfung, OCR oder
Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen.

Die Herstellerhistorie und die Mitteilung vom 30. März 2023 belegen erste kommerzielle
FD20-Verkäufe 2019. Die aktuelle v2.6-Tabelle nennt 1.250 kg Standardmasse und 1.800 kg
mit Extras, bis 3,5 m Arbeitsbreite und 950 m/h hochautomatisiert beziehungsweise
1.100 m/h manuell. Das ältere Blatt von 2023 nennt 900 kg und 3 m. Werte werden nicht
versionsübergreifend vermischt; 2025 v2.5/v2.6 sind keine behaupteten ersten Marktstarts.
Ohne Active Front Wheel nennt das aktuelle Blatt 8 Prozent Längs-/5 Prozent Querneigung,
mit der Option 10 Prozent auf beiden Achsen, abhängig vom Boden. Prozent sind keine Grad.
Arbeitsbreite und Radabstand sind keine vollständigen Außenabmessungen.

FD20-Detailseite und v2.6-Blatt nennen bis 6 ha pro Tag, die weiterhin erreichbare
Produktübersicht bis 6,5 ha. Dieser Unterschied bleibt widersprüchlich. Historische
5 ha im v2.5-Blatt und 6,5 ha im Blatt von 2023 behalten ihre Quelle. Rund 20 ha je
Kultur und Saison sind eine andere Planungsgröße mit wiederholten Arbeitsgängen.
Die 8 mm sind herstellerbehauptete GPS-Saatpositionspräzision, kein unabhängiger
allgemeiner RMS-Navigationstest. Die FAQ beschreibt ausdrücklich eine Kamera zur
Fernansicht: Verzicht auf visuelle Pflanzenerkennung bedeutet nicht völlige Kamerafreiheit.

Die bisherige FD20-Angabe 18–24 Stunden wechselt aus Batterielaufzeit in den erklärten
täglichen Betriebszeitraum mit laufendem Solareintrag. Eine Akkuladung allein ist
damit nicht belegt. Optionaler Power Bank: bis zwölf Zusatzstunden und 10–12 Stunden
am eigenen Ladegerät; diese Angaben sind keine generelle Roboter-Ladezeit oder
36-Stunden-Laufzeit. Die Texte enthalten dimensionsunklare Angaben „1.6 kWh output“
und „kW per hour“; sie werden nicht still korrigiert oder zu Ladezeiten verrechnet.
Die Vorteilsseite nennt separat 1,6 kWp Solarleistung, das aktuelle Blatt 6 kWh
Kapazität. Stromleistung, gespeicherte Energie und täglicher Ertrag bleiben getrennt.

+Seed 6 mm und 14 mm haben unterschiedliche Saatgutgrößen und Konfigurationen;
die 14-mm-Seite beschreibt acht Kundenroboter im Testjahr 2025. +Spray ist optional
für FD20 und laut Hersteller für 2.4/2.5/2.6 nachrüstbar. 7 × 7 cm Mikroflecken,
24 Stunden täglicher Spot- beziehungsweise zwölf Stunden Bandbetrieb sowie 5/2,5 ha
je Tankfüllung sind Aufgaben-/Herstellerangaben, keine unabhängigen Laufzeit- oder
Einsparnachweise. Die schwarze Sonderedition vom Juli 2024 ergänzt Service,
Garantie und Werkzeug, ohne belegte weitere mechanische Plattform. Module, Power Bank,
Werkzeuge, Transporthilfen, App und Odin werden nicht zu neuen Roboter-Modellen.

FD60 ist im Herbst 2026 eingeführt; die aktuelle Seite nimmt Bestellungen an und
kündigt Lieferungen ab Januar 2027 an. Das Jahr 2027 bleibt Roadmap. Die Mitteilung
vom 18. Juni 2026 erwartete für eine damals unbenannte größere Plattform Frühjahr
2027; der abweichende Monat wird nicht versteckt. Bestellungen und gemeinsame
Plattformhistorie belegen keine ausgelieferte FD60-Flotte. Angekündigt sind bis
20 Reihen, 6,75 m Arbeitsbreite, bis 18 ha pro Tag und rund 60 ha je Kultur/Saison.
Nur das größere 14-mm-Saatsystem ist vorgesehen, +Spray ausdrücklich nicht kompatibel.
FD20-Gewicht, Geschwindigkeit und Hanggrenzen werden nicht übernommen.

Die FD60-Seite nennt acht Solarmodule mit 3,7 kW und bis 24 kWh Tagesertrag,
23,5 kWh Batterie mit bis zehn Betriebsstunden sowie einen 3-kW-Benzingenerator mit
zwölf Litern Tank. Der Generator lädt die Batterie und treibt die Räder nicht direkt.
Bis 24 Stunden täglicher Betrieb enthalten weitere Energiezufuhr und sind weder
24 Stunden allein aus Akku noch kraftstofffreier Betrieb. Herstellerangaben zu
Amortisation, Ertrag, Chemikalienbedarf und Marktführerschaft bleiben attribuiert.

808 Unit-Tests in 64 Dateien und 22 Browserfälle einschließlich vier Axe-Prüfungen
bestehen. Build: 3.429 Seiten. Datenaudit: null Fehler und 1243 Warnungen.
Zwei Detailseiten mit 40 Feldern, Quellenstatus, strukturierte Daten ohne erfundene
Preisangebote, Firmenfokus, Merkmalsuche und Vergleich sind geprüft. Die ursprünglichen
Modell- und Firmenbeschreibungs-Exporte enthalten keinen FarmDroid-Modellnamen;
der FD20 kam aus einer getrennten Listingauflösung. Firmen- und Queue-Export sind
geprüft; die Queue enthält 20 Feldstatus-Einträge. Identitätsdateien bleiben unverändert.
Reimport: null Ergänzungen und 32 getrackte Datendateien byteidentisch. Offline-Refresh
ist bis auf Zeitstempel und deren Digest semantisch idempotent. Geänderte Testdatei:
ESLint/Prettier bestanden. Kanonische JSON-Serialisierung geprüft. Keine Änderung am
Anwendungscode oder CSV-Schema. Eigene Browser, Testserver und Hilfsprozesse sind
beendet und ihre Freigabe ist geprüft.

Daten-Zwischencommit `bd0dbe4d5aac45a9bfd893d672e1735bd8858e25` ist auf `codex/competitor-directory-expansion` gepusht und remote bestätigt.
Main bleibt `20a2844346914d8d28958aa3b4e51897c4e9e6ff`; kein Deployment. Drei Modellidentitäten,
neun Listingidentitäten und 862 Detailinhaltsprüfungen bleiben offen. Revisionsgeschichte,
vollständige Portfolios, alle USPs und Marktführerschaft sind weiterhin unbewiesen.


## Ergänzung 149 – Figure: Generationsabgrenzung, Produktions- und BMW-Einsatzdaten (3. November 2026)

Figure 01, Figure 02 und Figure 03 sind vertieft, ohne neue Roboterzeilen aus KI-Systemen
(Helix, Helix 02, Helix 2.5) oder Bauteilen abzuleiten. Drei Prüfungen umfassen 54 Felder:
21 dokumentiert und 33 nicht dokumentiert (darunter entfernte unbelegte Katalogpreise und -werte).
Hinzu kommen 16 Merkmalsaussagen, zwölf zusätzliche Produktquellenverweise und eine Vertiefung
des bestehenden Figure-Firmenfokus. Alle drei bisherigen Merkmale von Figure 03, Fund-URLs, IDs
und Medien bleiben erhalten. 2.375 andere Katalogzeilen, 1.256 frühere Feldprüfungen und 142
andere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.311 datierte Merkmalssätze,
5.850 Aussagen, 2.804 Produktquellenverweise, 1.259 Feldprüfungen mit 23.799 Feldern und 143
Firmenfokusse. Von 518 ursprünglichen Queue-Zielen sind 483 technisch teilgeprüft; 35 bleiben offen.
Dauerbeleg: `reports/competitor-batch-149-evidence.json`.

17 HTTP-Antworten sind gehasht gesichert und geprüft: 14 mit HTTP 200 (Herstellerseiten,
Nachrichtenartikel und PRNewswire-Erstmitteilungen) sowie drei dokumentierte 404-Pfade für alte
Einführungsseiten, die ausgeschlossen wurden. Alle Quellen sind als Text gelesen; kein
Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten,
Kontaktaufnahme, Nachrichten oder Transaktionen.

Die Herstellerhistorie grenzt drei Generationen klar ab: Figure 01 wurde am 2. März 2023 enthüllt
und machte laut Firmenzeitleiste im Mai 2023 erste Schritte. Die Batterie saß in einem externen
Rucksack; Masse, Nutzlast, Geschwindigkeit und Laufzeit wurden im Erstmaterial nicht beziffert.
Frühere Katalogwerte (60 kg, 20 kg, 1,2 m/s, 41 DOF, 300 min, 150.000 USD) hatten keine geprüfte
Herstellergrundlage und wurden entfernt.

Figure 02 wurde am 6. August 2024 vorgestellt. Die Mitteilung belegt einen 2,25-kWh-Rumpfakku,
sechs RGB-Kameras, Hände der vierten Generation mit 16 Freiheitsgraden je Hand und dreifache
Bordrechenleistung gegenüber Figure 01. Der elfmonatige BMW-Einsatz in Spartanburg lief im
Zehnstundenschichtbetrieb, belud über 90.000 Blechteile, sammelte über 1.250 Laufzeitstunden und
begleitete über 30.000 BMW X3. Die 5 mm Platziergenauigkeit in zwei Sekunden, über 99 Prozent
Schichterfolg und null Interventionen waren gestellte Anforderungen und Zielwerte, keine unabhängig
nachgewiesenen Dauermessungen. Die kumulierten 1.250 Stunden sind keine MTBF. Figure kündigte die
Stilllegung am 19. November 2025 an; bis zum 30. September 2026 wurden fast alle Einheiten stillgelegt
und in Finnland eingeschmolzen. Figure 02 ist eine historische, nicht mehr lieferbare Generation.
Frühere Katalogwerte (70 kg, 20 kg, 1,2 m/s, ~6 h, 130.000 USD) wurden bereinigt.

Figure 03 wurde am 9. Oktober 2025 vorgestellt und ist für Haushalt und Industrie konzipiert.
Die aktuelle Herstellerseite nennt 5 ft 8 in Körpergröße (etwa 173 cm; die alte 168-cm-Katalogangabe
war ungenau und ist abgelöst), 61 kg Masse, 20 kg Nutzlast, 1,2 m/s Geschwindigkeit und fünf
Stunden Laufzeit bei Spitzenleistung aus einem 2,3-kWh-Akku. Induktive Fußspulen laden mit 2 kW;
die Laderate ist keine Vollladedauer. Greifkraftsensoren erfassen Kräfte ab drei Gramm; Handballen-
kameras und nachgiebige Fingerspitzen unterstützen das Greifen. UN38.3 wird als erreicht beschrieben,
während UL2271 in Bearbeitung bleibt. Am 29. April 2026 meldete Figure über 350 produzierte Figure 03
aus der Fabrik BotQ bei einer Rate von einem Roboter pro Stunde und über 80 Endprüfungen je Einheit.
Produzierte Einheiten sind keine Kundenauslieferungen. Der am 30. Juni 2026 gemeldete Einsatz in Halle 52
des BMW-Werks Spartanburg ist eine erste Ablauf-Demonstration (Sequencing), kein Nachweis einer breiten
Flottenautonomie. Helix, Helix 02 und Helix 2.5 sind KI-Modelle, keine Robotergenerationen.


## Ergänzung 150 – General Atomics Aeronautical Systems: Avenger ER, Nutzlastkapazität und Autonomieflüge (3. November 2026)

General Atomics Avenger ER ist technisch vertieft; keine neuen Katalogzeilen aus Erprobungszellen
(MQ-20) oder Partnerangeboten (Shield AI) erzeugt. Eine Feldprüfung umfasst 20 Felder: neun
dokumentiert und elf nicht dokumentiert (darunter unanwendbare Batteriewerte, unbezifferte
Leermasse und angebotsabhängige Preise). Hinzu kommen sechs Merkmalsaussagen, drei zusätzliche
Produktquellenverweise und ein neuer Firmenfokus für General Atomics Aeronautical Systems.
Alle drei bisherigen Merkmale von Avenger ER, Fund-URLs, IDs und Medien bleiben erhalten.
2.377 andere Katalogzeilen, 1.259 frühere Feldprüfungen und 143 andere Firmenfokusse sind unverändert.
Gesamt: 2.378 Katalogeinträge, 1.311 datierte Merkmalssätze, 5.856 Aussagen, 2.807 Produktquellenverweise,
1.260 Feldprüfungen mit 23.819 Feldern und 144 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen
sind 484 technisch teilgeprüft; 34 bleiben offen. Dauerbeleg: `reports/competitor-batch-150-evidence.json`.

Neun HTTP-Antworten sind gehasht gesichert: acht mit HTTP 200 (Herstellerseiten, News, Datenblatt-PDF
mit zwei Seiten und Partnerreferenzen) sowie eine dokumentierte 404-Weiterleitung auf 404.php, die
ausgeschlossen wurde. HTML und PDF sind als Text gelesen; kein Recherchebrowser, keine visuelle Prüfung,
OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen.

Die Herstellerzeitleiste grenzt den Erstflug der ursprünglichen Predator C Avenger im April 2009
vom Erstflug der Avenger ER im Oktober 2016 und dem erweiterten Flugtestprogramm 2017 ab. Die Katalogzeile
repräsentiert die ER-Konfiguration. Das Datenblatt nennt 76 ft (23 m) Spannweite, 44 ft (13 m) Länge,
18.900 lb (8.573 kg) maximales Abfluggewicht (MTOW), 9.500 lb (4.309 kg) Treibstoffkapazität und 9.000 lb
(4.082 kg) Nutzlastkapazität, aufgeteilt in 3.000 lb intern und 6.000 lb an sechs Außenstationen sowie
eine 860 lb Bugbucht. MTOW und Treibstoff sind keine Leermasse; die Nutzlastaufteilung ist eine
Kapazitätsgrenze, keine garantierte simultane Missionszuladung.

Als Antrieb dient ein Pratt & Whitney PW545B Turbofan mit über 5.000 lb Schub; die Startbahnvorgabe
liegt unter 5.000 ft. Die maximale Fluggeschwindigkeit beträgt 400 KTAS, die Dienstgipfelhöhe über 50.000 ft
und die maximale Flugdauer 20 Stunden. Da es sich um ein strahlgetriebenes Flugzeug handelt, sind
Batterielaufzeit und Ladezeit nicht anwendbar; die 20 Stunden sind in flightTime dokumentiert.
Die Autonomiedemonstrationen der MQ-20 Avenger (passive Sensorfusion im Verband, digitale Zwillinge,
Bemannte-Unbemannte-Kollaboration) sind unternehmensinterne Erprobungsmeilensteine, keine unabhängige
Zertifizierung einer Einsatzreife. Der buyandrentrobots-Eintrag führt Avenger als verfügbaren Dienst von
Shield AI mit anfragebasiertem Preis („Request a quote“) und MQ-20-Zelle; er belegt weder einen Kaufpreis
noch die Äquivalenz zu jeder GA-ASI-Serienkonfiguration.


## Ergänzung 151 – Greenfield BOTONY, Groove X LOVOT und HaiPick A42T-E2: Feldfläche, Versionsmassen und Tote-Kapazität (3. November 2026)

Drei bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus System-, Familien- oder
Partnerbezeichnungen erzeugt. Die Prüfung umfasst 63 Felder: 24 dokumentiert und 39 nicht dokumentiert.
Hinzu kommen 15 Merkmalsaussagen, sieben zusätzliche Produktquellenverweise und drei neue
Firmenfokusse. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten.
2.375 andere Katalogzeilen, 1.260 frühere Feldprüfungen und 144 andere Firmenfokusse sind unverändert.
Gesamt: 2.378 Katalogeinträge, 1.311 datierte Merkmalssätze, 5.871 Aussagen, 2.814 Produktquellenverweise,
1.263 Feldprüfungen mit 23.882 Feldern und 147 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen
sind 487 technisch teilgeprüft; 31 bleiben offen. Dauerbeleg: `reports/competitor-batch-151-evidence.json`.

Elf HTTP-Antworten sind gehasht gesichert und als Text gelesen; kein Recherchebrowser, keine visuelle
Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder
Transaktionen. BOTONY bleibt eine Herstellerschätzung unter optimalen Bedingungen: etwa 7 Acres pro Tag,
Schnitt bei 3–5 Zoll Unkraut, 60-Zoll-Wendespur, GreenTRIP-RTK mit 15 km Radius und
zentimetergenauer Feldnavigation. Wheeled und tracked sind alternative Konfigurationen; die 2025er Flotte
von 23 Robotern, 70 Bestellungen für 2026 und 60 ausgelieferte Roboter sind Unternehmensangaben,
keine unabhängige Leistungsprüfung.

LOVOT bleibt der Familienname; die Herstellerseite trennt LOVOT 3.0 und 2.0 ausdrücklich. Die
Katalogzeile führt deshalb versionsbezogene Werte: rund 4,6 kg gegen 4,3 kg, 280 × 450 × 290 mm
gegen 300 mm Fahrttiefe, 599.500 JPY gegen 449.900 JPY, jeweils Grundfarbe inklusive Steuer, sowie
etwa 30–45 Minuten Betrieb und 15–30 Minuten Laden pro Normalzyklus. Diese Werte sind keine
Dauerbetriebsgarantie und keine unabhängige therapeutische oder Sicherheitszertifizierung.

Der HaiPick A42T-E2 ist als ACR der zweiten Generation mit einem einzelnen Greifhaken und Chain-Pick
dokumentiert: 30 kg (66,1 lb) pro Tote, bis zu drei ineinandergreifende Toten gleichzeitig, acht Toten im
Bordturm, 12 m maximale Entnahmehöhe, 0,93 m/s Hubgeschwindigkeit, 2,7 s Toten-Handling, 63 Toten pro
Stunde, 40 mm Totenabstand, 3-fach tiefe Regale, 89 % Lagerraumoptimierung, LFP-62-Akku, 39 Minuten
Schnellladung und mindestens 6,6 Stunden Vollladungsleben. 63 Toten pro Stunde und 89 % sind
Systemaussagen des Anbieters, keine unabhängigen Benchmarks; CE/NRTL ist Produktkonformität, keine
standortspezifische Sicherheitszertifizierung. Reisegeschwindigkeit, Gesamtmaße und Preis bleiben offen.


## Ergänzung 152 – Tesla Optimus, Misty II und ElliQ 3: Fabrikplanung, dokumentierte Hardware und Softwaregeneration (3. November 2026)

Drei bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus System-, Familien- oder
Partnerbezeichnungen erzeugt. Die Prüfung umfasst 49 Felder: 14 dokumentiert und 35 nicht dokumentiert.
Hinzu kommen 15 Merkmalsaussagen, drei zusätzliche Produktquellenverweise und drei neue
Firmenfokusse. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten.
2.375 andere Katalogzeilen, 1.263 frühere Feldprüfungen und 147 andere Firmenfokusse sind unverändert.
Gesamt: 2.378 Katalogeinträge, 1.311 datierte Merkmalssätze, 5.886 Aussagen, 2.817 Produktquellenverweise,
1.266 Feldprüfungen mit 23.931 Feldern und 150 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen
sind 490 technisch teilgeprüft; 28 bleiben offen. Dauerbeleg: `reports/competitor-batch-152-evidence.json`.

Zehn HTTP-Antworten sind gehasht gesichert und als Text gelesen; ein PDF umfasst 35 Seiten. Drei
Antworten waren blockiert (HTTP 403/429) und eine Seite fehlte (HTTP 404); kein Recherchebrowser,
keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme,
Nachrichten oder Transaktionen. Tesla Optimus bleibt ein Humanoid-Programm: Der Investorenbericht vom
April 2026 nennt den Beginn der Vorbereitung für die erste Großserienfabrik im zweiten Quartal, eine
erste Generation für 1 Million Roboter pro Jahr in Fremont und eine zweite Texas-Linie für langfristig
10 Millionen Roboter pro Jahr. Das ist Bautätigkeit und Produktionsplanung, keine Kundenverfügbarkeit,
keine ausgelieferte Flotte und keine unabhängige Leistungsprüfung; Preis, Masse, Nutzlast, Geschwindigkeit
und Laufzeit bleiben offen. Die alten Werte 57 kg, 28 DOF, 20 kg, 5 km/h und 10–12 Stunden sind entfernt.

Misty II ist als programmierbarer Sozialroboter für Bildung und Forschung dokumentiert: 35,56 cm Höhe,
25,4 cm Tiefe, 20,32 cm Breite und 2,7 kg Masse, Snapdragon 820/410, Occipital Structure Core,
4K-Kamera, acht IR-ToF- und zehn Bump-Sensoren, 4-Zoll-LCD, 3-DOF-Hals, bewegliche Arme, Raupenantrieb
und Anhängerkupplung. Das Gefahrensystem erkennt Abstürze ab 60 mm und begrenzt die Geschwindigkeit auf
etwa 450 mm/s; USB/UART und ein optionaler Arduino-Rucksack erweitern die Hardware. Laufzeit, Nutzlast,
IP-Schutz und aktuelle Verfügbarkeit sind nicht belegt; der alte Preis von etwa 3.000 USD ist entfernt.

ElliQ 3 ist die am 9. Januar 2024 vorgestellte Hardwaregeneration mit 36 % kleinerer Stellfläche,
integriertem Bildschirm und MediaTek-Oktakern-plus-KI-SoC. Die generative KI-Software soll mit allen
ElliQ-Hardwareversionen kompatibel sein; die Hardware war für Frühjahr 2024 angekündigt. ElliQ wird als
geleastes Mitgliedschaftsangebot beschrieben. Die vom Unternehmen berichteten Werte zu Einsamkeit, Gesundheit
und sozialer Verbundenheit sind keine unabhängigen klinischen Studien; numerischer Preis, Masse, Maße,
Laufzeit und unabhängige Zertifizierung bleiben offen.


## Ergänzung 153 – Hugo RAS, Naïo Oz und Starship Robot: modulare Chirurgie, Feldtechnik und Lieferflotte (3. November 2026)

Drei bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus Komponenten-, Werkzeug- oder
Flottenbezeichnungen erzeugt. Die Prüfung umfasst 50 Felder: 20 dokumentiert und 30 nicht dokumentiert.
Hinzu kommen 16 Merkmalsaussagen, drei zusätzliche Produktquellenverweise und drei neue
Firmenfokusse. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten.
2.375 andere Katalogzeilen, 1.266 frühere Feldprüfungen und 150 andere Firmenfokusse sind unverändert.
Gesamt: 2.378 Katalogeinträge, 1.311 datierte Merkmalssätze, 5.902 Aussagen, 2.820 Produktquellenverweise,
1.269 Feldprüfungen mit 23.981 Feldern und 153 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen
sind 493 technisch teilgeprüft; 25 bleiben offen. Dauerbeleg: `reports/competitor-batch-153-evidence.json`.

Elf HTTP-Antworten sind gehasht gesichert und als Text gelesen; eine Antwort war blockiert (HTTP 403),
zwei Seiten fehlten (HTTP 404). Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme.
Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Hugo RAS bleibt ein
modulares chirurgisches System: unabhängig positionierbare Armwagen mit mehreren Freiheitsgraden und
Schwenkgelenk, offene Chirurgenkonsole, zentrale Systemturm-Einheit, 3D-HD-Endoskop und neun kompatible
Instrumente mit Gelenk. Die Arme, Konsole, Turm, Instrumente und das Endoskop sind Komponenten, keine
zusätzlichen Robotermodelle. Medtronic nennt mehr als 35 Länder nach über vier Jahren Nutzung; Preis,
Masse, Maße, Nutzlast, Geschwindigkeit und Ausdauer bleiben offen.

Naïo Oz ist ein autonomer Träger für Marktgarten- und Sonderkulturen: bis zu 8 Stunden Betrieb,
60 kg Hubkapazität, maximal 100 cm Arbeitsbreite je Werkzeug, GNSS-RTK-Lenkung und über 35 kompatible
Werkzeuge zum Säen, Reihenmarkieren und Jäten. Die Werkzeuge sind keine zusätzlichen Robotermodelle.
Naïo nennt 40 zertifizierte Partner in über 20 Ländern und Fertigung in Frankreich; numerischer Preis,
Masse, Maße, Fahrgeschwindigkeit und IP-Schutz bleiben offen.

Starship Robot ist eine sechsrädrige autonome Lieferplattform für Gehwege: Level 4 mit menschlicher
Fernunterstützung, bis zu drei Einkaufstaschen in einem isolierten Innenraum, 18 Stunden Betrieb pro Ladung,
12 Kameras einschließlich Time-of-Flight sowie Radar, Ultraschall und neuronale Netze. Das Unternehmen nennt
3.000+ Roboter, über 10 Millionen Lieferungen, acht Länder und 125.000 Straßen- und Einfahrtsquerungen pro Tag
sowie den Titel „undisputed #1 leader“; das sind Unternehmensangaben und -behauptungen, keine unabhängige
Flottenprüfung oder gemessene Marktführerschaft. Preis, Masse, Maße und IP-Schutz bleiben offen.

## Ergänzung 154 – ANAFI UKR, Bee-Bot und temi V3: Flugkonfigurationen, Befehlsspeicher und Innenraumassistenz (3. November 2026)

Drei bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus Akku-, Zubehör- oder
Variantenbezeichnungen erzeugt. Die Prüfung umfasst 53 Felder: 26 dokumentiert, 26 nicht dokumentiert
und ein Widerspruch. Hinzu kommen 16 Merkmalsaussagen, sechs zusätzliche Produktquellenverweise und drei
neue Firmenfokusse. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten.
2.375 andere Katalogzeilen, 1.269 frühere Feldprüfungen und 153 andere Firmenfokusse sind unverändert.
Gesamt: 2.378 Katalogeinträge, 1.311 datierte Merkmalssätze, 5.918 Aussagen, 2.826 Produktquellenverweise,
1.272 Feldprüfungen mit 24.034 Feldern und 156 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen
sind 496 technisch teilgeprüft; 22 bleiben offen. Dauerbeleg: `reports/competitor-batch-154-evidence.json`.

Zwölf HTTP-Antworten sind gehasht gesichert und als Text gelesen, darunter ein PDF mit drei Seiten.
Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten,
Kontaktaufnahme, Nachrichten oder Transaktionen. ANAFI UKR ist eine zusammenklappbare Micro-UAV:
245 x 160 x 116 mm gefaltet, 350 x 665 x 116 mm entfaltet, unter 1.033 g mit Standard- und unter
1.365 g mit XLR-Akku, 1.450 g MTOM, 38 Minuten Flugzeit mit Standard- oder 70 Minuten mit XLR-Akku,
17 m/s Höchstgeschwindigkeit, IP53, 640-Thermalsensor und optische Navigation bei GNSS-Verlust.
Standard- und XLR-Akku sind Konfigurationen, keine zusätzlichen Modelle. Preis und Nutzlast bleiben offen.

Bee-Bot ist ein bildschirmfreier programmierbarer Bodenroboter für die frühe Grundschule. TTS nennt
67,99 £ netto beziehungsweise 81,59 £ brutto unter Produktcode IT10380, vor allem für Kinder von vier bis
sieben Jahren und geeignet ab drei Jahren unter Aufsicht. Die Produktseite nennt einen 256-Schritt-Speicher, die
Hersteller-FAQ bis zu 200 Befehle; beide Angaben bleiben als Widerspruch sichtbar. Masse, Maße, Laufzeit,
Geschwindigkeit und IP-Schutz bleiben offen.

temi V3 ist ein 12 kg schwerer, 100 x 35 x 45 cm großer Innenraumassistent mit 13,3-Zoll-Display,
360-Grad-LiDAR, zwei Tiefenkameras, RGB-Kamera, IMU und sechs Time-of-Flight-Sensoren. Die Navigation
ist mit 5 cm / 2 Zoll angegeben, der Akku hält bis zu acht Stunden, die Geschwindigkeit beträgt bis zu 1 m/s
und die Ablage trägt bis zu 3 kg je nach Aufbau. Die Ablage ist keine Gesamtnutzlast; Preis und IP-Schutz bleiben offen.
Die vorhandene Größenangabe ohne Achsenbezug und das nicht belegte Erscheinungsjahr 2023 sind korrigiert beziehungsweise entfernt.

Der Model-Review-CSV-Export enthält Bee-Bot nicht, weil die Zeile aus einer Firmenbeschreibungs-Identität und
nicht aus einem Verzeichnis-Modellhinweis stammt; der TTS-Firmenfokus erscheint daher auch nicht im Firmen-Review-CSV,
wohl die Markenseite ihn rendert. temi V3 ist im Model-Review-CSV doppelt als „Temi Robot“ und „temi V3“ vertreten.
Diese Exportlücken bleiben offen; Produktseiten, Suche, Vergleich und Queue sind geprüft.

808 Unit-Tests in 64 Dateien, 30 Browserfälle mit zwölf Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler
und 1.245 Hinweise. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.
## Ergänzung 155 – Sanctuary Phoenix, Relay und Ocado Chuck/Chuck+: Hardwarestatus, Liefervolumen und verteilte Traglast (3. November 2026)

Vier bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus Hardware-, Zubehör- oder
Variantenbezeichnungen erzeugt. Die Prüfung umfasst 70 Felder: 27 dokumentiert und 43 nicht dokumentiert.
Hinzu kommen 19 Merkmalsaussagen, fünf zusätzliche Produktquellenverweise sowie zwei neue und ein
aktualisierter Firmenfokus. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten.
2.374 andere Katalogzeilen und 1.272 frühere Feldprüfungen sind unverändert; von 156 früheren
Firmenfokussen wurde einer aktualisiert, 155 blieben unverändert. Gesamt: 2.378 Katalogeinträge,
1.311 datierte Merkmalssätze, 5.937 Aussagen, 2.831 Produktquellenverweise, 1.276 Feldprüfungen mit
24.104 Feldern und 158 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen sind 499 technisch teilgeprüft;
19 bleiben offen. Dauerbeleg: `reports/competitor-batch-155-evidence.json`.

Elf HTTP-Antworten sind gehasht gesichert und als Text gelesen; acht waren nutzbar, zwei Seiten fehlten
(HTTP 404) und eine blockierte Antwort leitete auf atom.com um. Kein PDF, kein Recherchebrowser, keine visuelle
Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen.
Sanctuary AI beschreibt Phoenix auf den aktuellen Herstellerseiten nicht mehr als dokumentierte Humanoid-Konfiguration.
Das Unternehmen nennt stattdessen hardware-agnostische Physical AI für Industrieroboterarme von FANUC und Universal
Robots, eigene Endeffektoren und Low-DOF-Greifer, hydraulische Hände als künftige Konfiguration sowie Humanoid-
Embodiment auf der Roadmap. Die früheren Werte 40.000 USD, 70 kg, 25 kg, 1,3 m/s, 3–4 Stunden, 2023 und „large“
sind entfernt. Die genannten 99,5 Prozent Modellleistung, 2,54 Sekunden pro Stecker und 5,5 Stunden Teleoperation
bleiben Unternehmensangaben; Preis, Masse, Maße, Nutzlast, Geschwindigkeit, Ausdauer, Erscheinungsjahr und IP-Schutz
bleiben offen.

Relay ist ein autonomer Innenraum-Lieferroboter für Krankenhäuser und Hotels. Das Fach fasst 41 l beziehungsweise
10 Gallonen und nimmt mehrere Einsätze auf; die Temperatur bleibt laut Hersteller innerhalb eines Grads der Umgebung.
Relay nennt autonome Navigation durch Menschenmengen, Sicherheitstüren und Aufzüge, autonomes Laden an einer Station
sowie Kettennachverfolgung. Das Unternehmen berichtet 1,5 Millionen Lieferungen insgesamt, 25.000 pro Monat, 10.000 Meilen
pro Jahr und 99,8 Prozent erfolgreiche Lieferungen. Diese Zahlen sind Unternehmensangaben. Numerischer Preis, Masse, Maße,
Geschwindigkeit, Laufzeit, IP-Schutz und Navigationsgenauigkeit bleiben offen; das 41-l-Fach ist Volumen, keine Nutzlastmasse.

Chuck ist ein kollaborativer Lager-AMR: 69,9 kg mit Akku beziehungsweise 57,6 kg ohne, 160 cm Gesamthöhe, 61 cm
Basisbreite und 106,7 cm Basistiefe. Der Basiswagen trägt bis zu 97,5 kg, jedes Regal bis 45,4 kg; die Laufzeit beträgt
bis zu 12 Stunden je nach Nutzlast. AI-Navigation, LiDAR, Kameras, Cloud-Orchestrierung und systemgesteuerte Hinweise führen
das Personal; die Artikel werden weiterhin von Menschen entnommen. Chuck+ ist die breitere Lastkonfiguration auf derselben Basis:
5,4 kg Breitenverlängerung, 8,8 kg pro Chuck+-Regal und 75 x 91 cm Regalfläche. Die gemeinsame Basis trägt bis zu 97,5 kg;
das Gesamtgewicht von Chuck+ bleibt offen. Ocado nennt über 100 Standorte und mehr als eine Milliarde entnommene Einheiten;
das sind Unternehmensangaben, keine unabhängigen Audits. Preis, Geschwindigkeit, IP-Schutz und Navigationsgenauigkeit
bleiben offen.

Der Model-Review-CSV-Export enthält Chuck+ nicht, weil die Zeile aus einer Herstellerkonfiguration und nicht aus einem
separaten Verzeichnis-Modellhinweis stammt; die Markenseite rendert den Firmenfokus dennoch. Die Queue führt Chuck+ daher
nicht als eigenes Verzeichnisziel. Diese Exportlücke bleibt offen; Produktseiten, Suche, Vergleich und Queue sind geprüft.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit sechs Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler
und 1.246 Hinweise. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.
## Ergänzung 156 – IAM Swift, inVia Picker, MONARCH QUEST 3 und MQM-178 Firejet: Rückzug, Tote-Handling und Softwarestatus (3. November 2026)

Vier bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus Software-, Payload- oder
Variantenbezeichnungen erzeugt. Die Prüfung umfasst 72 Felder: 27 dokumentiert und 45 nicht dokumentiert.
Hinzu kommen 20 Merkmalsaussagen, zwei zusätzliche Produktquellenverweise und vier neue Firmenfokusse.
Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.276 frühere
Feldprüfungen und 158 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge,
1.311 datierte Merkmalssätze, 5.957 Aussagen, 2.833 Produktquellenverweise, 1.280 Feldprüfungen mit
24.176 Feldern und 162 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen sind 503 technisch teilgeprüft;
15 bleiben offen. Dauerbeleg: `reports/competitor-batch-156-evidence.json`.

Sechs HTTP-Antworten sind gehasht gesichert und als Text gelesen; alle waren nutzbar, keine Seite fehlte,
keine war blockiert und es gab kein PDF. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme.
Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. IAM Swift bleibt als historische
Mobile-Manipulation- und Goods-to-Person-Plattform dokumentiert. Die unternehmenseigene Historie nennt die
Umstrukturierung Ende 2021, den Rückzug der gesamten Swift-Flotte vom Markt und den späteren Person-to-Goods-Start
2023 mit Bolt-AMR-Basis, Meet-Me-Software und Lumabot. Diese aktuellen Produkte werden nicht zu Swift umgedeutet;
Preis, Masse, Maße, Nutzlast, Geschwindigkeit, Laufzeit, Erscheinungsjahr, IP-Schutz und Navigationsgenauigkeit
bleiben offen.

inVia Picker ist ein kompakter autonomer Goods-to-Person-AMR mit 136 lb beziehungsweise 61,7 kg Masse,
25,5 Zoll Höhe und 26,1 Zoll Breite ohne veröffentlichte Tiefe, bis zu 40 lb beziehungsweise 18 kg Nutzlast,
einem Nutzlastraum von 14 x 15 x 24 Zoll, bis zu 8 ft Reichweite und 5 mph beziehungsweise 8 km/h
Höchstgeschwindigkeit. Ein ausfahrbarer Lift und industrielle Saugnäpfe bewegen Totes; Maschinensicht mit
Fiducial-Aufklebern lokalisiert den Bestand. Ein wechselbarer 10-Stunden-Akku und optionales Selbstladen stützen
den Betrieb. inVia verkauft die Automatisierung als RaaS und nennt 5x Produktivität sowie 1.000 UPH PickerWall;
das sind Unternehmensangaben. PickerWall ist ein eigener Workflow, kein weiteres Picker-Modell. Numerischer Preis,
Tiefe, Ladedauer, IP-Schutz und Navigationsgenauigkeit bleiben offen.

MONARCH Platform ist eine kliniker-kontrollierte roboterassistierte Bronchoskopieplattform. Die Ankündigung vom
17. August 2026 beschreibt MONARCH QUEST 3 als Software-Update mit KI-gestützter Nodulsegmentierung, verbesserter
Registrierung und Navigation, 3D-Compass-Overlay, kontinuierlicher Visualisierung, Navigation und Biopsie unter direkter
Sicht sowie Korrektur der CT-zu-Körper-Verschiebung. QUEST 3 ist kein neues physisches Robotermodell; die Steuerung
bleibt beim Kliniker. Numerischer Preis, Masse, Maße, Nutzlast, Geschwindigkeit, Laufzeit, Ladedauer, Erscheinungsjahr
und IP-Schutz der Plattform bleiben offen; unabhängige klinische Ergebnisse werden nicht behauptet.

MQM-178 Firejet ist ein strahlgetriebenes Luftziel für Boden-Luft- und Luft-Luft-Waffentraining. Kratos nennt
0,69 Mach Höchstgeschwindigkeit, 35.000 ft beziehungsweise 10.670 m Dienstgipfelhöhe, 20 ft beziehungsweise 6 m
Tiefflug, -2g bis 9g Kurven, 70 lb beziehungsweise 32 kg interne Nutzlast, 20 lb beziehungsweise 9 kg je
Flügelspitze und 35 lb beziehungsweise 15,9 kg je Flügelstation. Die Zelle ist 10,8 ft beziehungsweise 3,3 m lang,
2 ft beziehungsweise 0,6 m hoch und 6,2 ft beziehungsweise 1,9 m breit; Trockenmasse 130 lb beziehungsweise 59 kg,
maximales Startgewicht 320 lb beziehungsweise 145 kg. Pneumatischer Start von Land oder Schiff, manueller oder
vorprogrammierter Flug und Fallschirmbergung sind dokumentiert; erste Vorstellung 2011. Numerischer Preis,
Batterieausdauer, IP-Schutz und Navigationsgenauigkeit bleiben offen.

Der Model-Review-CSV-Export enthält inVia Picker nicht, weil die Zeile aus einer Listing-Auflösung und nicht aus einem
Verzeichnis-Modellhinweis stammt. Die Firmenfokusse von Johnson & Johnson MedTech und Kratos erscheinen nicht im
Firmen-Review-CSV, weil ihre Marken synthetische Katalogmarken ohne eigenen Verzeichniseintrag sind; die Markenseiten
rendern sie dennoch. Diese Exportlücken bleiben offen; Produktseiten, Suche, Vergleich und Queue sind geprüft.

808 Unit-Tests in 64 Dateien, 38 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler
und 1.246 Hinweise. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

## Ergänzung 157 – X-62A VISTA, Loop SAM, Lucid/Nuro/Uber Robotaxi und Miso Flippy: Umbenennung, Reinraum-Fläche und geplante Flotte (3. November 2026)

Vier bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus Software-, Komponenten- oder Programmbezeichnungen erzeugt. Die Prüfung umfasst 71 Felder: 19 dokumentiert und 52 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen, vier zusätzliche Produktquellenverweise und vier neue Firmenfokusse. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.280 frühere Feldprüfungen und 162 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.311 datierte Merkmalssätze, 5.957 Aussagen, 2.837 Produktquellenverweise, 1.284 Feldprüfungen mit 24.247 Feldern und 166 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen sind 507 technisch teilgeprüft; 11 bleiben offen. Dauerbeleg: `reports/competitor-batch-157-evidence.json`.

Zehn HTTP-Antworten sind gehasht gesichert; sieben waren nutzbar, eine Seite fehlte (404) und eine war blockiert (403). Kein PDF, kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. X-62A VISTA ist ein einzigartiges bemanntes Testflugzeug zur variablen In-Flight-Simulation, entwickelt von Lockheed Martin Skunk Works mit Calspan für die U.S. Air Force Test Pilot School auf der Edwards Air Force Base. Früher als NF-16D bezeichnet, wurde es im Juni 2021 formell in X-62A VISTA umbenannt. Die offene Systemarchitektur, der Model Following Algorithm und das System for Autonomous Control of the Simulation ermöglichen Nachbildungen anderer Flugzeuge sowie Tests von KI- und Autonomiekomponenten Dritter. Calspan betreibt das Flugzeug und nennt es den leistungsfähigsten In-Flight-Simulator der Welt. Diese Aussagen sind Unternehmensbeschreibungen, keine unabhängige Leistungszertifizierung. Das Jahr 2021 bezeichnet die Umbenennung, nicht den Erstflug. Numerischer Preis, Masse, Maße, Nutzlast, Geschwindigkeit, Ausdauer, IP-Schutz und Navigationsgenauigkeit bleiben offen.

Loop SAM ist ein mobiler UV-C-Raumdesinfektionsroboter. Er desinfiziert einen Raum einschließlich des Badezimmers in einem einzigen autonomen Durchlauf ohne Kartierung oder manuelles Umsetzen; Mitarbeitende schieben ihn zwischen Räumen und starten Zyklen über ein Tablet in fünf Schritten. Berichte werden automatisch in ein Portal hochgeladen. Loop Robots gibt an, dass ein typischer cGMP-Reinraum der Klasse B, C oder D mit 25 m² in 15 Minuten dekontaminiert wird; die UV-C-Behandlung ist chemikalienfrei, trocken und rückstandsfrei. SAM ist kein Medizinprodukt und nicht von der FDA für die Keimreduzierung im gesamten Raum zugelassen. Numerischer Preis, Masse, Maße, Akku-Ausdauer, Laufzeit, Geschwindigkeit, IP-Schutz und Navigationsgenauigkeit bleiben offen. Die 25-m²-Angabe ist eine Unternehmensangabe für einen typischen Reinraum und keine Laufzeit- oder Wirksamkeitszertifizierung.

Der Lucid Gravity Robotaxi ist ein eigens entwickeltes autonomes Ride-Hailing-Fahrzeug von Lucid, Nuro und Uber auf Basis des Gravity-SUV. Er nutzt den Nuro Driver mit einer 360-Grad-Kamera-, Lidar- und Radar-Anordnung, einem Dach-Halo-Modul und NVIDIA DRIVE AGX Thor. Ein Halo-LED-Display zeigt Passagierinitialen und Status; interaktive Bildschirme steuern Sitze, Klima und Musik. Die Konfiguration bietet bis zu sechs Passagieren Platz und Gepäckraum. Die Partner kündigten auf der CES 2026 autonome Straßentests, einen Start 2026 in einer großen US-Stadt, einen Service in Houston 2027, 20.000 oder mehr geplante Fahrzeuge und bis zu 450 Meilen Reichweite an. Das sind Planungen und Herstellerangaben, kein aktueller öffentlicher Betrieb und keine unabhängige Prüfung. Die 450 Meilen sind Fahrzeugreichweite, keine Akku-Lebensdauer. Numerischer Preis, Masse, Maße, Akku-Ausdauer, Laufzeit, Geschwindigkeit, IP-Schutz und Navigationsgenauigkeit bleiben offen.

Miso Flippy ist eine wandbetriebene KI-Frittierstation für gewerbliche Küchen. Sie arbeitet mit vorhandenen Frymaster-, Henny-Penny- und Pitco-Fritteusen, beginnt bei 9,5 ft Wandfläche und wird unter einer vorhandenen Haube und Ansul-Anlage installiert. Miso gibt 100 Körbe pro Stunde gegenüber 50 bei menschlichen Arbeitskräften, automatische Lebensmittelerkennung, Echtzeit-Garüberwachung und Anpassung des Garzustands, Verwaltung mehrerer Körbe und Korb-Bewegung an. Neue Menüpunkte sollen in fünf bis sieben Tagen erlernbar sein; Installationen dauern laut Unternehmen typischerweise über Nacht und sind innerhalb von 90 Tagen abgeschlossen. Flippy ist NSF-zertifiziert und nach UL 763 geprüft. Numerischer Preis, Masse, Maße, Geschwindigkeit, Akku-Laufzeit, IP-Schutz und Navigationsgenauigkeit bleiben offen. Die Katalogwerte rund 30.000 USD, rund 80 kg und das Jahr 2017 sind durch die geprüften Seiten nicht gedeckt und werden entfernt. Zignyl/Zippy ist eine separate Softwareplattform, kein weiteres Flippy-Modell.

Der Model-Review-CSV-Export enthält diesmal alle vier Zeilen, auch SAM und X-62A VISTA. Die Firmenfokusse von Lockheed Martin und Lucid erscheinen nicht im Firmen-Review-CSV, weil ihre Marken synthetische Katalogmarken ohne eigenen Verzeichniseintrag sind; die Markenseiten rendern sie dennoch. Diese Exportlücke bleibt offen; Produktseiten, Suche, Vergleich und Queue sind geprüft.

808 Unit-Tests in 64 Dateien, 38 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.245 Hinweise. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

## Ergänzung 158 – Thymio II, RAD ROAMEO, Rapid 3PRO und Refraction REV-1: EPFL-Bildungsroboter, 1.800-lb-Patrouille und Austin-Lieferpilot (3. November 2026)

Vier bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus Software-, Komponenten- oder Flottenbezeichnungen erzeugt. Die Prüfung umfasst 70 Felder: 30 dokumentiert und 40 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen, drei zusätzliche Produktquellenverweise und vier neue Firmenfokusse (darunter Thymio by Mobsya). Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.284 frühere Feldprüfungen und 166 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.311 datierte Merkmalssätze, 5.997 Aussagen, 2.840 Produktquellenverweise, 1.288 Feldprüfungen mit 24.317 Feldern und 170 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen sind 511 technisch teilgeprüft; 7 bleiben offen. Dauerbeleg: `reports/competitor-batch-158-evidence.json`.

Zehn HTTP-Antworten sind gehasht gesichert; sechs waren nutzbar, zwei Seiten fehlten (404: refraction.ai), eine war blockiert (403: rapidrobotics.com), und ein Bild-Download (PNG) blieb als Beleg ungenutzt. Kein PDF, kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Thymio II ist ein Open-Source-Bildungsroboter, entwickelt von EPFL-Forschenden mit ECAL und produziert von Mobsya. Die Herstellerseite belegt 11 x 11,2 x 5,3 cm, 270 g Masse, einen 3,7-V-Li-Po-Akku mit 1.500 mAh und über 2 Stunden Autonomie, maximal 14 cm/s, neun Infrarotsensoren, fünf kapazitive Touch-Tasten, Beschleunigungsmesser, Thermometer, Mikrofon, Infrarotempfänger, 39 ansteuerbare LEDs, zwei Radmotoren und Lautsprecher. Unterstützt werden VPL, VPL3, Scratch, Blockly, Aseba Studio und Python. Die bisherigen Katalogwerte 100 EUR, 180 min, Alter 4–99 und 2011 waren durch die geprüften Seiten nicht belegt und wurden bereinigt; die Kaufseite verweist auf Händler. Thymio 2+ und Thymio 3 sind separate Folgeprodukte.

RAD ROAMEO ist ein autonomes Sicherheits-Patrouillenfahrzeug mit 1.800 lb (816 kg) Masse, L 71,2 in x B 47,6 in x H 80 in, bis zu 16 Stunden Dauerbetrieb und 80 Meilen Reichweite pro Ladung, bis zu 10 mph Geschwindigkeit, 15° Steigfähigkeit, -4 °F bis 113 °F Betriebstemperatur und fünf Solid-State-3D-LiDAR-Sensoren. SARA und RADSOC sind Softwareebenen zur Ereignis- und Flottenverwaltung, keine eigenen Robotermodelle. Der Dienst wird monatlich nach standortspezifischem Angebot berechnet; numerischer Preis, Nutzlast, IP-Schutz, Navigationsgenauigkeit und Erscheinungsjahr bleiben offen.

Rapid Robotics 3PRO ist eine zweiarmige industrielle Humanoidplattform auf stabiler, umpositionierbarer Basis mit MoveIt-Pro-Integration; eine mobile Basis befindet sich in der Entwicklung. Die Herstellerseite war nicht erreichbar; der geprüfte Integrator-Fallbericht von PickNik belegt die Zweiarmkonfiguration und Bahnplanung. Numerischer Preis, Masse, Maße, Nutzlast, Geschwindigkeit, Laufzeit, Freiheitsgrade, IP-Schutz, Navigationsgenauigkeit und Erscheinungsjahr bleiben offen.

Refraction AI REV-1 ist ein dreirädriger autonomer Lieferroboter für Fahrradwege, Fahrbahnen und Gehwege mit rund 150 lb Masse, 4,5 ft Länge x 30 in Breite x 4,5 ft Höhe, bis zu 15 mph und einem 16-Kubikfuß-Ladeabteil (~sechs Einkaufstaschen). Ein Pilotbetrieb mit zehn Robotern in Austin wurde am 14. Juni 2021 angekündigt; das Unternehmen startete im Juli 2019 (releaseDate 2019). Numerischer Preis, Akku-Ausdauer, Laufzeit, Nutzlastgewicht, IP-Schutz und Navigationsgenauigkeit bleiben offen.

Der Model-Review-CSV-Export enthält Thymio II und 3PRO nicht, weil ihre Zeilen aus Listing-Auflösungen ohne direkte Verzeichnis-Modellnennung stammen; ihre Produktseiten und Queue-Einträge rendern vollständig. Alle vier Firmenfokusse verfügen über Zeilen im Firmen-Review-CSV.

808 Unit-Tests in 64 Dateien, 38 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.245 Hinweise. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

## Ergänzung 159 – Guardian XO, Ozmo, Mako 4, SY-HR08E, Rosie, Shelfobot und ROSA Knee: vollständige Feldabdeckung aller 518 Queue-Ziele (3. November 2026)

Sieben bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus Anwendungen, Softwareebenen, Batterien oder Implantatmarken erzeugt. Die Prüfung umfasst 127 Felder: 40 dokumentiert, 86 nicht dokumentiert und ein strittiger Wert. Hinzu kommen 35 Merkmalsaussagen, neun zusätzliche Produktquellenverweise und sieben neue Firmenfokusse. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.371 andere Katalogzeilen, 1.288 frühere Feldprüfungen und 170 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.311 datierte Merkmalssätze, 6.032 Aussagen, 2.849 Produktquellenverweise, 1.295 Feldprüfungen mit 24.444 Feldern und 177 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen sind jetzt alle 518 technisch teilgeprüft; kein Feldprüfungsziel bleibt offen. Drei Modellidentitäten und neun Listing-Identitäten bleiben als Identitätsfragen offen. Dauerbeleg: `reports/competitor-batch-159-evidence.json`.

Zwanzig HTTP-Antworten sind gehasht gesichert; 18 waren erfolgreich, 16 als Beleg nutzbar (15 native HTML-Seiten und ein PDF mit extrahierbarem Text). Zwei PDFs wurden gespeichert, davon eine rein bildbasierte Syrebo-Broschüre ohne Textschicht; eine Seite war blockiert (403), eine weitere antwortete mit Ratenbegrenzung (429), zwei Seiten wurden über archivierte Fassungen gelesen und keine Seite fehlte mit 404. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Guardian XO ist ein tragbarer Ganzkörper-Exoskelett mit bis zu 200 lb (90 kg) Hub- und Manipulationskapazität, 24 Freiheitsgraden, bis zu 20-facher Kraftverstärkung, 100 lb pro Arm, heißwechselbaren Akkus und einem XO-Pod; Sarcos stellte am 14. November 2023 die weitere Kommerzialisierung von Hardware-Robotern ein und benannte sich im März 2024 in Palladyne AI um. Numerischer Preis, Anzugmasse, Maße, Gehgeschwindigkeit, Laufzeit und IP-Schutz bleiben offen. Guardian XT ist ein separates teleoperiertes System; seine 200-lb-Angabe wird nicht auf den XO übertragen.

Ozmo ist ein Fassadenreinigungsroboter für Glasflächen. Lidar lokalisiert ihn entlang der Fassade, Kraftsensoren regeln den Reinigungskontakt und der Roboter berechnet seinen Pfad laufend neu; Bediener überwachen ihn von der Gebäudewartungseinheit aus und können ihn jederzeit stoppen. Skyline gibt an, dass Ozmo mit vorhandenen Wartungseinheiten arbeitet und etwa dreimal schneller als traditionelle Fensterreinigung ist. Im August 2024 wurde Ozmo in New York City vollzeitlich eingesetzt. Numerischer Preis, Masse, Maße, Akkulaufzeit, Geschwindigkeit, IP-Schutz, Reinigungsbreite und Wassertankkapazität bleiben offen; die Geschwindigkeitsangabe ist eine relative Unternehmensaussage.

Mako 4 ist Strykers vierte Mako-SmartRobotics-Generation für roboterassistierte Orthopädie. Ein System unterstützt Total Hip, Total Knee, Partial Knee, Spine und Shoulder und integriert das Q Guidance System. 3D-CT-Planung und AccuStop-Haptik sind dokumentiert; Mako Spine ergänzt Copilot-Tiefenstopp und Lock-and-Hold in Spine Guidance 5. Stryker nennt mehr als 2,5 Millionen Mako-Eingriffe in 47 Ländern, 20 Jahre Erfahrung, mehr als 800 wissenschaftliche Beiträge und mehr als 2.000 Patente und Anmeldungen. Numerischer Preis, Systemmasse, Maße, Armreichweite, Freiheitsgrade, Geschwindigkeit, Laufzeit, IP-Schutz und Navigationsgenauigkeit bleiben offen.

Syrebo SY-HR08E ist ein weiches robotisches Handrehabilitationssystem für die Klinik. Der Hersteller dokumentiert passive, assistierte, bilateral-spiegelbildliche, resistive, spielbasierte und verfeinerte Trainingsmodi sowie Kraft- und Koordinationsberichte und Nutzerverwaltung. Zitiert werden das zentral-periphere-zentrale Closed-Loop-Modell und eine Referenz aus Front Cell Neurosci 2022. Syrebo nennt 2014 als Beginn der weichen Handroboter, 2017 als Markteintritt sowie mehr als 80 Länder, 4.000 Krankenhäuser und 60.000 Familien. Numerischer Preis, Masse, Maße, Akkulaufzeit, Freiheitsgrade, IP-Schutz und Erscheinungsdatum bleiben offen; die verlinkte Broschüre ist ein bildbasierendes PDF ohne extrahierbaren Text.

Rosie ist Tailos' gewerblicher Saugroboter für Hotelflure und öffentliche Bereiche. Der Hersteller nennt 12,7 x 20,7 x 8,5 in Maße, 24 lb Masse, eine 11-in-/28-cm-Bürste, etwa 88 CFM Saugleistung, einen 1,7-l-Staubbeutel, bis zu 2.000 sq ft pro Stunde, 62 dB, 15.000 sq ft pro Achtstundenschicht sowie 90/135/180 Minuten Akkulaufzeit in Boost-/Balanced-/Eco-Modus mit einem 12-V-Akku und 188,7 Wh. Lidar und eine 3D-Tiefenkamera arbeiten ohne Vorabkartierung; das Kit enthält drei Akkus und ein Ladegerät. Die Kaufoption beginnt bei 7.999,99 USD mit zwei Jahren Garantie und 1.249 USD Jahresverlängerung. Die Katalogmasse von 18 lb widerspricht den 24 lb des Herstellers und bleibt sichtbar.

Shelfobot ist Tokinomos Regal-Werberoboter. Ein Bewegungssensor erkennt Kundschaft, ein motorisierter Schwenkarm bewegt das ausgestellte Produkt, LED-Licht und individuelles Audio unterstützen die Interaktion. Jedes Gerät verbindet sich per WLAN mit eingebetteter SIM und wird über eine Cloud-Kampagnenplattform und eine Mobile App verwaltet; Audio, Lautstärke und Bewegungsmuster lassen sich remote ändern. Der Hersteller nennt bis zu 1,5 kg Traglast (1,2 kg empfohlen), etwa sieben Tage Laufzeit auf einem speziellen Akku und zwölf Stunden Ladezeit. Das System ist für Regale und offene oder geschlossene Kühlregale ausgelegt. Numerischer Preis, Masse, Maße, Geschwindigkeit, IP-Schutz und Erscheinungsdatum bleiben offen.

ROSA Knee with OptimiZe ist Zimmer Biomets robotisches Kniearthroplastik-System. OptimiZe Planning, Landmarking, Tracking, Kinematic Alignment und Experience unterstützen die personalisierte Implantatplatzierung; das System verarbeitet bildbasierte und bildfreie Workflows und integriert ZBEdge Analytics. Das Persona-Knie einschließlich der Persona-OsseoTi-Keel-Tibia wird unterstützt. Numerischer Preis, Masse, Maße, Armreichweite, Freiheitsgrade, Geschwindigkeit, Laufzeit, IP-Schutz, Navigationsgenauigkeit und Erscheinungsdatum bleiben offen.

Der Model-Review-CSV-Export enthält diesmal vier der sieben Zeilen (Guardian XO, Ozmo, Mako 4 und ROSA Knee); SY-HR08E, Rosie und Shelfobot stammen aus Listing- beziehungsweise Firmenbeschreibungs-Auflösungen und fehlen dort. Ihre Produktseiten und Queue-Einträge rendern vollständig. Alle sieben Firmenfokusse besitzen Zeilen im Firmen-Review-CSV; drei Firmen-Produkt-Zeilen sind vorhanden. Diese Exportlücken bleiben offen.

808 Unit-Tests in 64 Dateien, 62 Browserfälle mit 14 Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.245 Hinweise. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

## Ergänzung 160 – Go2, NEO, A700, Kx und CHUCK DV7: alle zwölf Identitätsfragen aufgelöst, keine neuen Modelle (3. November 2026)

Zwölf zuletzt offene Identitätsfragen sind bearbeitet: neun unklare Source-Listings und drei Modellnennungen. Fünf Listings nennen nur einen Robotertyp (Delivery Bot, DeliveryDrone, EduBot, SecurityGuard, ServiceBot) und sind als generische Produktfamilien ohne Katalogmodell erfasst; ihre Firmenprofile veröffentlichen weder Produktnamen noch Modellseite oder offizielle Produkt-URL. Vier Listings namens Go2 oder NEO sind den Modellen Unitree Go2 und 1X NEO zugeordnet; die Firmenzuordnung des Verzeichnisses (TGW Logistics, Pilz GmbH) bleibt als Quellangabe erhalten und wird nicht als Hersteller- oder Reseller-Aussage gewertet. Kawasaki A700 und Kawasaki Kx sind als generische Bezeichnungen erfasst, weil Kawasaki weder ein A700-Sicherheitsrobotermodell noch ein Kx-Humanoid veröffentlicht; Parrot CHUCK DV7 ist ebenfalls eine generische Bezeichnung, weil Parrot CHUCK 3.0, aber kein DV7 führt. Es wurde keine Katalogzeile ergänzt und kein Modell aus einer Anwendung, einem Robotertyp oder einer unveröffentlichten Variante abgeleitet. Die Queue steht bei 518 von 518 Zielen; 0 Modell- und 0 Listing-Identitäten bleiben offen. Gesamt unverändert: 2.378 Katalogeinträge, 1.311 datierte Merkmalssätze, 6.032 Aussagen, 2.849 Produktquellenverweise, 1.295 Feldprüfungen mit 24.444 Feldern und 177 Firmenfokusse. Dauerbeleg: `reports/competitor-batch-160-evidence.json`.

Einundzwanzig HTTP-Antworten sind gehasht gesichert; 19 waren erfolgreich und 19 als Beleg nutzbar, ausschließlich native HTML-Seiten. Eine Herstellerseite antwortete mit 403 und wurde nicht als Beleg verwendet; ein Firmenprofil fehlte mit 404. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Die fünf generischen Listings und die drei generischen Modellnennungen erhalten keine erfundenen technischen Werte; die vier Modellauflösungen verweisen auf die bereits geprüften Herstellerseiten von Unitree und 1X Technologies. Neue Produktdetailprüfungen entstehen in diesem Batch nicht, weil keine Katalogzeile geändert wurde; 838 Produktdetailprüfungen bleiben offen.

808 Unit-Tests in 64 Dateien, 62 Browserfälle mit 14 Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.245 Hinweise. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

## Ergänzung 161 – LionsBot R5, R3 Scrub Pro, R3 Vac und R12 Rex CS: vier bestehende Zeilen technisch vertieft (3. November 2026)

Vier bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus Varianten, Akkus oder Anwendungsbezeichnungen erzeugt. Die Prüfung umfasst 80 Felder: 42 dokumentiert und 38 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen, sieben zusätzliche Produktquellenverweise und ein neuer Firmenfokus. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.295 frühere Feldprüfungen und 177 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.315 datierte Merkmalssätze, 6.052 Aussagen, 2.856 Produktquellenverweise, 1.299 Feldprüfungen mit 24.524 Feldern und 178 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-161-evidence.json`.

Sieben HTTP-Antworten sind gehasht gesichert und alle sieben als Beleg nutzbar, ausschließlich native HTML-Seiten. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. LionsBot führt derzeit drei Reinigungsmaschinen: R5, R3 Scrub Pro und R3 Vac; sie sind keine Ausstattungsstufen einer Maschine. Der R5 wiegt 200 kg, misst 690 x 690 x 1.125 mm, fährt 1,1 m/s und reinigt 520 mm breit mit 50 l Frisch- und 40 l Schmutzwasser, 1.300 m²/h im Mittel, 4 h 20 min Laufzeit und 3 h 30 min Ladezeit. Der R3 Scrub Pro wiegt 85,5 kg, misst 635 x 570 x 828 mm, reinigt 366 mm breit (682 mm mit Seitenbürste) und schafft 800 bis 1.200 m²/h bei 71 dB. Der R3 Vac wiegt 53 kg, misst 521 x 482 x 655 mm, reinigt 350 mm breit (550 mm mit Seitenbürste), läuft bis zu 3 h und erreicht 61,7 dB. Der R12 Rex CS ist ein separater Sweeper-Scrubber von 2023 mit 1.270 mm Reinigungsbreite, bis zu 95 kg Bürstendruck, 200 m 3D-LiDAR-Abdeckung und bis zu 100.000 Quadratfuß pro Ladung. Nicht belegte Katalogpreise von etwa 75.750 USD und etwa 140 USD pro Monat sowie nicht belegte Laufzeiten von 420, 600 und 300 Minuten sind entfernt. Kein numerischer Preis und keine IP-Schutzart ist veröffentlicht; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 830 Produktdetailprüfungen bleiben offen.

## Ergänzung 162 – Mammotion LUBA 3 AWD, LUBA mini AWD, YUKA mini 2 und YUKA 2000: vier bestehende Zeilen technisch vertieft (3. November 2026)

Vier bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus Varianten, Akkus oder Anwendungsbezeichnungen erzeugt. Die Prüfung umfasst 44 Felder: 23 dokumentiert und 21 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen, 14 zusätzliche Produktquellenverweise und ein neuer Firmenfokus. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.299 frühere Feldprüfungen und 178 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.319 datierte Merkmalssätze, 6.072 Aussagen, 2.870 Produktquellenverweise, 1.303 Feldprüfungen mit 24.568 Feldern und 179 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-162-evidence.json`.

Zehn HTTP-Antworten sind gehasht gesichert und alle zehn als Beleg nutzbar, ausschließlich native HTML-Seiten; eine erste Anfrage wurde vorübergehend gedrosselt und nach Wartezeit erneut geladen, eine alte YUKA-URL leitet mit 301 auf die YUKA-mini-2-Seite um und ist kein YUKA-2000-Beleg. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Mammotion führt LUBA 3 AWD, LUBA mini AWD, LUBA mini 2 AWD, YUKA mini 2, YUKA mini und YUKA 2000 als getrennte Modelle. Der LUBA 3 AWD 1500 kostet 2.399 USD, wiegt 41 lbs (18,6 kg), schafft 215 min pro Ladung mit 15-Ah-Akku, ist IPX6, läuft mit höchstens 70 dB und ist für 80 % (38,6°) Steigung ausgelegt; der LUBA mini AWD 1500H kostet 1.999 USD, schafft 160 min mit 6,1-Ah-Akku und 8 cm Hindernisfreiheit. Der YUKA mini 2 1000H kostet 1.399 USD, nutzt einen 360°-LiDAR mit 2.362 in (60 m) Reichweite und 2.690 sq ft pro Ladung bei 45 % (24°) Steigung. Der YUKA 2000 kostet 1.699 EUR, ist im EU-Shop ausverkauft und für 45 % (24°) Steigung sowie 2.000 m² ausgelegt. Nicht belegte Katalogmassen von etwa 25 kg, 11 kg und etwa 22 kg, Laufzeiten von 480 und etwa 90 Minuten sowie der Preis von 1.799 USD sind entfernt. Keine Ladezeit, Schnittbreite, Flächenleistung oder IP-Schutzart ist für die geprüften Modelle veröffentlicht; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 822 Produktdetailprüfungen bleiben offen.

## Ergänzung 163 – ECOVACS DEEBOT T80 OMNI, X9 PRO OMNI, X8 PRO OMNI und X11 OmniCyclone: vier bestehende Zeilen technisch vertieft (3. November 2026)

Vier bestehende Katalogzeilen sind technisch vertieft; keine neuen Modelle aus Varianten, Akkus oder Stationsbezeichnungen erzeugt. Die Prüfung umfasst 72 Felder: 39 dokumentiert und 33 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen, vier zusätzliche Produktquellenverweise und ein aktualisierter Firmenfokus. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.303 frühere Feldprüfungen und 178 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.323 datierte Merkmalssätze, 6.092 Aussagen, 2.874 Produktquellenverweise, 1.307 Feldprüfungen mit 24.640 Feldern und 179 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-163-evidence.json`.

Acht HTTP-Antworten sind gehasht gesichert, fünf erfolgreich und vier als Beleg nutzbar, ausschließlich native HTML-Seiten; drei Locale-URLs leiten mit 301 auf die kanonischen `/us/shop/`-Seiten um, und die erfolgreiche X5-PRO-OMNI-Seite bleibt außerhalb dieses Batches. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. ECOVACS führt T80 OMNI, X9 PRO OMNI, X8 PRO OMNI und X11 OmniCyclone als getrennte aktuelle Modelle. Der T80 OMNI kostet 549,99 USD, wiegt 4,95 kg, misst 353 x 351,5 x 98 mm, schafft 297 min im Silent-Sweep-Modus mit 6.400-mAh-Akku und lädt in 4 h 37 min; der X9 PRO OMNI kostet 799,99 USD, schafft 252 min und lädt in 3 h 6 min; der X8 PRO OMNI kostet 1.099,99 USD, wiegt 5,3 ± 0,1 kg, schafft 291 min und lädt in 4 h 37 min; der X11 OmniCyclone kostet 1.099,99 USD, wiegt 5,3 ± 0,1 kg, schafft 254 min im Silent-Sweep- und 207 min im Standard-Sweep-Modus, 206 min im Standard-Sweep-und-Wisch-Modus mit ausgeschaltetem PowerBoost und 369 min mit eingeschaltetem PowerBoost, und lädt in 3 h 10 min. Die X9-PRO-OMNI-Seite nennt nur 12,89 kg Netto ohne Trennung von Roboter und Station; die Katalogmasse von 5,3 kg ist damit nicht als Robotermasse bestätigt und wird entfernt. Katalogpreise von 1.200, 1.300, 1.100 und etwa 1.100 USD sowie Laufzeiten von 220, 200 und 180 Minuten sind durch die geprüften Werte ersetzt. Keine der geprüften Seiten veröffentlicht Nutzlast, Fahrgeschwindigkeit oder IP-Schutzart; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 814 Produktdetailprüfungen bleiben offen.

## Ergänzung 164 – Dreame X50 Ultra, L40 Ultra, Matrix10 Ultra und Aqua10 Ultra Roller: vier bisher ungeprüfte Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle US-Herstellerseiten geprüft; keine neuen Modelle aus Varianten, Akkus oder Stationsbezeichnungen erzeugt. Die Prüfung umfasst 72 Felder: 32 dokumentiert und 40 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen, vier zusätzliche Produktquellenverweise und ein neuer Firmenfokus. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.307 frühere Feldprüfungen und 179 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.327 datierte Merkmalssätze, 6.112 Aussagen, 2.878 Produktquellenverweise, 1.311 Feldprüfungen mit 24.712 Feldern und 180 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-164-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; eine erste Anfrage an die Matrix10-Seite wurde mit 429 gedrosselt und nach Wartezeit erneut geladen. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Dreame führt X50 Ultra, L40 Ultra, Matrix10 Ultra und Aqua10 Ultra Roller als getrennte aktuelle Modelle. Der X50 Ultra kostet 999,99 USD im Sale gegen 1.599,99 USD regulär, wiegt 4,53 kg, misst 350 x 350 x 89 mm bei eingefahrenem Sensor und schafft bis 220 min im Quiet-Modus mit 6.400-mAh-Akku und bis 205 m² pro Ladung. Der L40 Ultra kostet 799,99 USD, misst 350 x 350 x 103,8 mm und schafft bis 194 min mit 5.200-mAh-Akku. Der Matrix10 Ultra kostet 1.799,99 USD im Sale gegen 1.999,99 USD regulär, wiegt 4,7 kg, misst 13,78 x 13,82 x 3,50 in bei eingefahrenem Sensor und nutzt 6.400 mAh, 5,5 l Frisch- und 4,0 l Schmutzwasser sowie eine 3,2-l-Staubtasche. Der Aqua10 Ultra Roller kostet 899,99 USD im Sale gegen 1.599,99 USD regulär, wiegt 5,8 kg (12,79 lbs), misst 350 x 350 x 97,5 mm bei eingefahrenem LDS und nutzt 6.400 mAh, 4 l Frisch- und 3,5 l Schmutzwasser. Katalogpreise von 1.700, 1.200, 2.000 und 1.600 USD sowie die L40-Masse von etwa 4 kg und die X50-Laufzeit von 210 Minuten sind durch die geprüften Werte ersetzt. Matrix10 und Aqua10 veröffentlichen keine volle Laufzeit; Aqua10 nennt nur Nachfüll-Läufe von etwa 48, 37 und 20 Minuten. Keine der geprüften Seiten veröffentlicht eine dB-Lautstärke, eine absolute Ladezeit, Nutzlast, Fahrgeschwindigkeit oder IP-Schutzart; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 806 Produktdetailprüfungen bleiben offen.

## Ergänzung 165 – Roborock Saros 10, Qrevo Edge, Qrevo Slim und Saros 10R: vier bisher ungeprüfte Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle US-Herstellerseiten geprüft; keine neuen Modelle aus Varianten, Akkus oder Stationsbezeichnungen erzeugt. Die Prüfung umfasst 72 Felder: 29 dokumentiert, zwei widersprüchlich und 41 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen, vier zusätzliche Produktquellenverweise und ein neuer Firmenfokus. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.311 frühere Feldprüfungen und 180 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.331 datierte Merkmalssätze, 6.132 Aussagen, 2.882 Produktquellenverweise, 1.315 Feldprüfungen mit 24.784 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-165-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; die Saros-Z70-Seite antwortete zweimal mit 429 und wurde nicht verwendet, und eine www-URL leitet mit 301 auf die US-Seite um. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Roborock führt Saros 10, Qrevo Edge, Qrevo Slim und Saros 10R als getrennte aktuelle Modelle. Der Saros 10 kostet 1.299,99 USD gegen 1.599,99 USD Listenpreis, schafft 22.000 Pa, misst 350 x 353 x 79,8 mm, lädt in 2,5 h und läuft mit 52 dB(A) im Quiet-Mopping; der Qrevo Edge kostet 1.599,99 USD, wiegt 3,9 kg (8,6 lbs), misst 353 x 348 x 104 mm, schafft 18.500 Pa und läuft mit 55 dB; der Qrevo Slim kostet 1.399,99 USD, ist 82 mm hoch, wiegt laut Seite 9,04 lbs und nutzt 5.200 mAh sowie 11.000 Pa; der Saros 10R kostet 1.099,99 USD gegen 1.599,99 USD Listenpreis, wiegt 4,1 kg (9,04 lbs), nutzt 6.400 mAh und lädt in 2,5 h. Die veröffentlichte Roboter-Masse des Saros 10 (36,38 ± 0,66 lbs) und des Qrevo Slim (9,04 lbs) widerspricht den Katalogwerten 4,1 kg und 5 kg und bleibt sichtbar; die Saros-10R-Maßangabe 10,40 x 9,38 x 43,63 in ist in sich widersprüchlich und wird nicht übernommen. Katalogpreise von 1.600, 1.599, 1.400 und 1.600 USD sowie die Qrevo-Edge-Laufzeit von 240 Minuten sind durch die geprüften Werte ersetzt. Keine geprüfte Seite veröffentlicht eine volle Laufzeit in Minuten, Nutzlast, Fahrgeschwindigkeit, Wassertankkapazität oder IP-Schutzart; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 798 Produktdetailprüfungen bleiben offen.

## Ergänzung 166 – Roborock S8 MaxV Ultra, Qrevo MaxV und F25 Ultra: drei bisher ungeprüfte Katalogzeilen mit Herstellerbelegen (3. November 2026)

Drei bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle US-Herstellerseiten geprüft; keine neuen Modelle aus Varianten, Akkus oder Stationsbezeichnungen erzeugt. Die Prüfung umfasst 54 Felder: 18 dokumentiert, ein widersprüchlich und 35 nicht dokumentiert. Hinzu kommen 15 Merkmalsaussagen und drei zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil der Roborock-Fokus bereits aus der vorigen Runde stammt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.375 andere Katalogzeilen, 1.315 frühere Feldprüfungen und 181 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.334 datierte Merkmalssätze, 6.147 Aussagen, 2.885 Produktquellenverweise, 1.318 Feldprüfungen mit 24.838 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-166-evidence.json`.

Drei HTTP-Antworten sind gehasht gesichert und alle drei als Beleg nutzbar, ausschließlich native HTML-Seiten; die Saros-Z70-Seite antwortete erneut mit 429 und wurde nicht verwendet, Qrevo Master und S8 Pro Ultra leiten mit 301 auf Seiten ohne lesbare Spezifikationstabelle um, und Q8 Max+, Qrevo S sowie die Qrevo-Curv-Seite lieferten keine Spezifikationstabelle. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Roborock führt S8 MaxV Ultra, Qrevo MaxV und F25 Ultra als getrennte aktuelle Modelle; der F25 Ultra ist ein Nass-Trocken-Staubsauger und kein Bodenroboter. Der S8 MaxV Ultra kostet 799,99 USD gegen 1.799,99 USD Listenpreis, schafft 10.000 Pa, misst 350 x 353 x 103 mm, wiegt laut Seite 32,19 lbs und nutzt 5.200 mAh; der Qrevo MaxV kostet 699,99 USD gegen 1.399,99 USD Listenpreis, wiegt 12,3 kg (27,14 lbs), misst 350 x 353 x 102 mm, schafft 7.000 Pa, nutzt 5.200 mAh und lädt laut Seite 30 Prozent schneller ohne absolute Zeit; der F25 Ultra kostet 469,99 USD gegen 699,99 USD Listenpreis, schafft 22.000 Pa, misst 265 x 246 x 1.096 mm und veröffentlicht nur ein Bruttogewicht von 21,38 ± 0,66 lbs. Die veröffentlichte Roboter-Masse des S8 MaxV Ultra (32,19 lbs) widerspricht dem Katalogwert 4,2 kg und bleibt sichtbar; für den F25 Ultra wird keine Robotermasse übernommen. Katalogpreise von 1.800, rund 700 und 800 USD sowie die Katalog-Laufzeiten von 180, 180 und 60 Minuten sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht eine volle Laufzeit in Minuten, Ladezeit, Nutzlast, Fahrgeschwindigkeit, Wassertankkapazität oder IP-Schutzart; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 26 Browserfälle mit sechs Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 795 Produktdetailprüfungen bleiben offen.

## Ergänzung 167 – ECOVACS Deebot X2 Omni, X5 Pro Omni, T50 Pro Omni und X12 OmniCyclone: vier bisher ungeprüfte Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle US-Shopseiten von ECOVACS geprüft; keine neuen Modelle aus Varianten, Akkus oder Stationsbezeichnungen erzeugt. Die Prüfung umfasst 72 Felder: 28 dokumentiert, eines widersprüchlich und 43 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil der ECOVACS-Fokus bereits vorliegt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.318 frühere Feldprüfungen und 181 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.338 datierte Merkmalssätze, 6.167 Aussagen, 2.889 Produktquellenverweise, 1.322 Feldprüfungen mit 24.910 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-167-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; die alten Pfade ohne /shop/ leiten mit 301 auf die geprüften Shopseiten um, und die Seiten zu T50 Omni, N30 Pro Omni, N20 Pro Plus sowie Winbot W3 Omni antworteten mit 404 und wurden nicht verwendet. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. ECOVACS führt X2 Omni, X5 Pro Omni, T50 Pro Omni und X12 OmniCyclone als getrennte aktuelle Modelle. Der X2 Omni schafft 8.000 Pa, misst 320 x 353 x 95 mm, wiegt laut Seite etwa 5 kg, nutzt 6.400 mAh und läuft 212 Minuten im Silent-Sweep über 435 m²; der X5 Pro Omni schafft 12.800 Pa, misst 313 x 346 x 95 mm, nutzt 6.400 mAh, lädt in etwa 4 h 19 min und läuft 224 Minuten im Silent-Sweep über 320 m²; der T50 Pro Omni schafft 15.000 Pa, misst 352,7 x 351,6 x 81 mm, wiegt 3,7 kg, nutzt 6.400 mAh, lädt in etwa 3,7 h und läuft 255 Minuten im Silent-Sweep; der X12 OmniCyclone schafft laut Seite bis zu 22.000 Pa, misst 353 x 351 x 98 mm, wiegt 5,5 kg, nutzt 4.000 mAh und lädt in 2 h 25 min. Die veröffentlichte Roboter-Masse des X2 Omni (etwa 5 kg) widerspricht dem Katalogwert rund 4,5 kg und bleibt sichtbar; beim X5 Pro Omni veröffentlicht die Spezifikationstabelle keine Robotermasse. Die X2-Omni-Angabe zur Ladedauer ist nur relativ (45 Prozent schneller als X1 von 1 auf 90 Prozent), und die X12-Angabe von 5.461 Minuten über 5.236 m² ist für einen 4.000-mAh-Akku unplausibel und wird nicht als Laufzeit übernommen. Katalogpreise von 1.500, 1.299, 399 und 1.499 USD, die X2-Akkuangabe von rund 4 Stunden, die X5-Laufzeit von 350 Minuten sowie die T50-Maße 35 x 35 x 8 cm und die 215-Minuten-Angabe sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht einen Roboterpreis, eine Nutzlast, Fahrgeschwindigkeit, Wassertankkapazität oder IP-Schutzart; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 791 Produktdetailprüfungen bleiben offen.

## Ergänzung 168 – ECOVACS Deebot T20 Omni, X2 Combo, T30S Combo und T90 Pro Omni: vier bisher ungeprüfte Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle US-Shopseiten von ECOVACS geprüft; keine neuen Modelle aus Varianten, Akkus oder Stationsbezeichnungen erzeugt. Die Prüfung umfasst 72 Felder: 30 dokumentiert und 42 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil der ECOVACS-Fokus bereits vorliegt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.322 frühere Feldprüfungen und 181 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.342 datierte Merkmalssätze, 6.187 Aussagen, 2.893 Produktquellenverweise, 1.326 Feldprüfungen mit 24.982 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-168-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; der alte X2-Combo-Pfad leitet mit 301 auf die geprüfte Shopseite um, weitere Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. ECOVACS führt T20 Omni, X2 Combo, T30S Combo und T90 Pro Omni als getrennte aktuelle Modelle. Der T20 Omni schafft 6.000 Pa, misst 362 x 362 x 103,5 mm, wiegt 4,4 kg, nutzt 5.200 mAh, lädt in 6,5 h und läuft 260 Minuten im Silent-Sweep; der X2 Combo schafft 8.700 Pa, misst 353 x 313 x 95 mm, nutzt 6.400 mAh, lädt in etwa 5,5 h und läuft 212 Minuten im Silent-Sweep über 435 m²; der T30S Combo schafft 11.000 Pa, misst 353 x 351 x 104 mm, nutzt 5.200 mAh, lädt in etwa 3,1 h und läuft 290 Minuten im Silent-Sweep; der T90 Pro Omni schafft laut Seite bis zu 30.000 Pa, misst 353 x 351 x 95 mm, wiegt 5,3 kg, nutzt einen 4.000-mAh-SuperBoost-Akku und lädt in 2,5 h. Das X2-Combo- und das T30S-Combo-Datenblatt veröffentlichen keine Robotermasse; das T30S-Paketgewicht von 45,19 kg enthält die Station und wird nicht als Robotermasse übernommen. Katalogpreise von 1.099, 1.599, 1.199 und 2.299 USD, die T20-Maße 36 x 36 x 10 cm, die T20-Akkuangabe 260 Minuten, die X2-Combo-Maße 35 x 31 x 10 cm und 212 Minuten, die T30S-Maße 35,3 x 35,1 x 10,4 cm mit 200–290 Minuten sowie die T90-Größenklasse „medium“ sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht einen Roboterpreis, eine Nutzlast, Fahrgeschwindigkeit, Wassertankkapazität oder IP-Schutzart; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 787 Produktdetailprüfungen bleiben offen.

## Ergänzung 169 – ECOVACS Deebot T10 Plus, N8 Pro, Winbot Mini und X11 Pro Omni: vier bisher ungeprüfte Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle US- und globale Shopseiten von ECOVACS geprüft; keine neuen Modelle aus Varianten, Akkus oder Stationsbezeichnungen erzeugt. Die Prüfung umfasst 72 Felder: 25 dokumentiert und 47 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil der ECOVACS-Fokus bereits vorliegt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.326 frühere Feldprüfungen und 181 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.346 datierte Merkmalssätze, 6.207 Aussagen, 2.897 Produktquellenverweise, 1.330 Feldprüfungen mit 25.054 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-169-evidence.json`.

Vier nutzbare HTTP-Antworten sind gehasht gesichert, ausschließlich native HTML-Seiten; die Winbot-W2-Omni-Seite antwortete mit 301 ohne nutzbaren Inhalt und wurde nicht verwendet. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. ECOVACS führt T10 Plus, N8 Pro, Winbot Mini und X11 Pro Omni als getrennte aktuelle Modelle; der Winbot Mini ist ein Fensterreinigungsroboter und der X11 Pro Omni ein Bodenroboter. Der T10 Plus schafft 3.000 Pa, misst 353 x 353 x 103,3 mm, nutzt 5.200 mAh, lädt in 6,5 h und läuft 260 Minuten im Silent-Sweep, 195 Minuten im Standard-Sweep, 240 Minuten im Silent-Sweep mit Wischen und 180 Minuten im Standard-Sweep mit Wischen; der N8 Pro misst 353 x 353 x 94 mm, nutzt 3.200 mAh, lädt in 4 h und läuft 110 Minuten; der Winbot Mini schafft 7.500 Pa maximale Saugkraft und 3.200 Pa in Bewegung, misst 215 x 215 x 55 mm, wiegt 1,3 ± 0,1 kg, nutzt 3.000 mAh und lädt in etwa 3 h; der X11 Pro Omni schafft laut Seite 19.500 Pa, nutzt 6.400 mAh und stellt in 3 Minuten per PowerBoost 6 Prozent Akku wieder her, was keine volle Laufzeit in Minuten ist. Die Winbot-Mini-Seite nennt eine unbegrenzte Akkulaufzeit in Minuten, sodass keine volle Laufzeit erfasst wird; die X11-Pro-Omni-Seite veröffentlicht keine Maße, Masse, Ladezeit oder einen Roboterpreis. Katalogpreise von rund 750, rund 500 und 239 USD sowie der X11-Eintrag „Not disclosed“, die T10-Masse 4,0 kg mit Größenklasse „large“ und die Akku- und Laufzeitangabe 195 Minuten, die N8-Masse 3,6 kg, die Maße 35 x 35 x 9,3 cm und die 2.600-Pa-Angabe, die Winbot-Maße 21,5 x 21,5 x 5,5 cm und die Masse 1,3 kg sowie die X11-Größenklasse „medium“ und die nicht offengelegten Werte sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht einen Roboterpreis, eine Nutzlast, Fahrgeschwindigkeit, Wassertankkapazität oder IP-Schutzart; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 783 Produktdetailprüfungen bleiben offen.

## Ergänzung 170 – Dreame X30 Ultra, L40s Ultra, L50 Ultra und X40 Master: vier bisher ungeprüfte Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle US-Shopseiten von Dreame geprüft; keine neuen Modelle aus Varianten, Akkus oder Stationsbezeichnungen erzeugt. Die Prüfung umfasst 72 Felder: 33 dokumentiert, 38 nicht dokumentiert und ein Konflikt. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil der Dreame-Fokus bereits vorliegt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.330 frühere Feldprüfungen und 181 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.350 datierte Merkmalssätze, 6.227 Aussagen, 2.901 Produktquellenverweise, 1.334 Feldprüfungen mit 25.126 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-170-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; weitere Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Dreame führt X30 Ultra, L40s Ultra, L50 Ultra und X40 Master als getrennte aktuelle Modelle; die in der Vergleichstabelle genannten L40s-Ultra-AE- und -CE-Varianten werden nicht in die geprüfte Ultra-Zeile gemischt. Der X30 Ultra schafft 8.300 Pa, misst 350 x 350 x 97 mm, nutzt 6.400 mAh und kostet 899,99 USD; die Spezifikationstabelle nennt 180 Minuten Laufzeit, während der Seitentext bis zu 260 Minuten behauptet, und eine absolute Ladezeit wird nicht veröffentlicht. Der L40s Ultra schafft 19.000 Pa, misst 350 x 350 x 97 mm, wiegt 4,1 kg (9,04 lbs), nutzt 5.200 mAh und kostet 499,99 USD gegen 1.399,99 USD Listenpreis; Laufzeit in Minuten und absolute Ladezeit veröffentlicht die Seite nicht. Der L50 Ultra schafft 19.500 Pa, misst 348 x 352 x 97 mm, wiegt 4,44 kg, nutzt 6.400 mAh, läuft bis zu 200 Minuten im Quiet-Mode über 186 m² und kostet 899,99 USD gegen 1.399,99 USD Listenpreis. Der X40 Master schafft 12.000 Pa, misst 350 x 350 x 103,8 mm, wiegt 4,07 kg, nutzt 6.400 mAh, läuft 198 Minuten im Standard-Modus über 308 m² und kostet 1.299,99 USD; seine Station misst 485 x 426 x 280 mm, wiegt 12,03 kg und hält 4,5 L Frisch- und 4,0 L Schmutzwasser, der Roboter 300 ml Staubbox, 4,2 L Staubbeutel und mindestens 80 ml Wassertank. Katalogpreise von rund 900, rund 600 und rund 950 USD sowie 1299 USD, die Größenklasse „small“ und die L40s-Laufzeit von 180 Minuten sowie die X40-Laufzeit von 200 Minuten sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht eine Roboter-Nettomasse für den X30 Ultra, eine Nutzlast, Fahrgeschwindigkeit oder IP-Schutzart; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 779 Produktdetailprüfungen bleiben offen.

## Ergänzung 171 – Roborock Saros Z70, Q5 Max+, Q10 S5+ und S7 Max Ultra: vier bisher ungeprüfte Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle US-Shopseiten von Roborock geprüft; keine neuen Modelle aus Varianten, Akkus oder Stationsbezeichnungen erzeugt. Die Prüfung umfasst 72 Felder: 31 dokumentiert und 41 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil der Roborock-Fokus bereits vorliegt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.334 frühere Feldprüfungen und 181 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.354 datierte Merkmalssätze, 6.247 Aussagen, 2.905 Produktquellenverweise, 1.338 Feldprüfungen mit 25.198 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-171-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; die Qrevo-Master-Seite antwortete mit 429 und leitet auf ein anderes Qrevo-S5V-Modell um, und die Q8-Max+-Seite nennt das Produkt noch nicht gestartet, daher wurden beide ausgeschlossen. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Roborock führt Saros Z70, Q5 Max+, Q10 S5+ und S7 Max Ultra als getrennte aktuelle Modelle. Der Saros Z70 schafft 22.000 Pa, misst 350 x 353 x 80 mm, nutzt 6.400 mAh, lädt in 2,5 h und läuft etwa 135 Minuten mit deaktiviertem Roboterarm über etwa 180 m²; die Seite druckt bei der zweiten Maßangabe 133,89 Zoll, einen offensichtlichen Tippfehler für 13,89 Zoll. Der Q5 Max+ schafft 5.500 Pa, misst 353 x 351 x 97 mm, wiegt 7,3 kg (16 lbs), nutzt 5.200 mAh, läuft bis zu 240 Minuten und kostet 329,99 USD. Der Q10 S5+ schafft 10.000 Pa, misst 353 x 353 x 99 mm, wiegt 6,7 kg (14,8 lbs), nutzt 5.200 mAh, läuft bis zu 150 Minuten und kostet 329,99 USD. Der S7 Max Ultra schafft 5.500 Pa, misst 353 x 351 x 97 mm, wiegt 4,5 kg (10 lbs), nutzt 5.200 mAh und kostet 1.299,99 USD; seine Seite veröffentlicht keine volle Laufzeit in Minuten und nennt nur 30 Prozent schnelleres Laden. Katalogpreise von 2599, rund 330, rund 280 und 1299 USD, die Größenklasse „small“, die Saros-Masse von rund 4,5 kg, der Saros-Akku von rund 3 Stunden, die Saros-Laufzeit von 180 Minuten, die Q10-Akku- und Laufzeitangabe von 350 Minuten sowie die S7-Akku- und Laufzeitangabe von 180 Minuten sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht eine Roboter-Nettomasse für den Saros Z70, eine Nutzlast, Fahrgeschwindigkeit, Wassertankkapazität oder IP-Schutzart; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 775 Produktdetailprüfungen bleiben offen.

## Ergänzung 172 – Hiwonder TonyPi, JetAuto, AiNova und PuppyPi: vier bisher ungeprüfte Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Shopseiten von Hiwonder geprüft; keine neuen Modelle aus Bausätzen oder Varianten erzeugt. Die Prüfung umfasst 56 Felder: 32 dokumentiert und 24 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil Hiwonder keine Quellfirma mit firmeneigenem Fokus ist. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.338 frühere Feldprüfungen und 181 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.358 datierte Merkmalssätze, 6.267 Aussagen, 2.909 Produktquellenverweise, 1.342 Feldprüfungen mit 25.254 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-172-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; die MasterPi-Seite antwortete mit 429 und wurde ausgeschlossen, weitere Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Hiwonder führt TonyPi, JetAuto, AiNova und PuppyPi als getrennte aktuelle Modelle; der TonyPi-Pro-Bausatz ist eine 20-DOF-Variante desselben Modells und wird im DOF-Feld statt als eigene Zeile geführt. Der TonyPi ist ein 18-DOF-Humanoide auf Raspberry Pi 5, misst 373 x 186 x 106 mm, wiegt etwa 1,8 kg und läuft mit einem 11,1-V-2.000-mAh-Akku etwa 60 Minuten; der Pro-Bausatz bietet 20 DOF und bewegliche Hände mit 66 mm Öffnung. Der JetAuto ist ein ROS-Roboterauto mit SLAMTEC-A1-Lidar, 3D-Tiefenkamera und 7-Zoll-Display, misst 302 x 260 x 256 mm, wiegt 3,5 kg und läuft mit 11,1 V 6.000 mAh 60 Minuten. Der AiNova ist ein ESP32-Vision-Car mit WonderCam-Modul, misst 172 x 140 x 146 mm, wiegt etwa 0,5 kg und nutzt einen 1.200-mAh-18650-Akku. Der PuppyPi ist ein 8-DOF-Quadruped mit 3-DOF-Roboterarm, misst 226 x 149 x 190 mm, wiegt 720 g und nutzt einen 7,4-V-2.200-mAh-LiPo-Akku. Katalogpreise von 590, 440, 86 und 700 USD, die Größenklasse „small“, die PuppyPi-Masse von rund 1,5 kg, der PuppyPi-Akku von rund 2 Stunden und die PuppyPi-Laufzeit von 120 Minuten sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht eine Nutzlast, Fahrgeschwindigkeit, IP-Schutzart oder absolute Ladezeit; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 36 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 771 Produktdetailprüfungen bleiben offen.

## Ergänzung 173 – Eufy Robot Vacuum Omni S2, E28, Omni E25 und Omni C20: vier bestehende Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle US-Shopseiten von Eufy geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 30 dokumentiert und 42 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil Eufy keine Quellfirma mit firmeneigenem Fokus ist. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.342 frühere Feldprüfungen und 181 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.362 datierte Merkmalssätze, 6.287 Aussagen, 2.913 Produktquellenverweise, 1.346 Feldprüfungen mit 25.326 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-173-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Eufy führt Omni S2, E28, Omni E25 und Omni C20 als getrennte aktuelle Modelle, jedes mit eigener Produktseite und eigener Station. Der Omni S2 leistet 30.000 Pa, misst 325 x 347 x 96 mm bei 15,08 x 18,39 x 26,38 in Stationsmaß, läuft 150 Minuten im Saug-Wisch-Standardmodus und 179 Minuten im Saug-Standardmodus und hält 3 L Frisch- und 2 L Schmutzwasser. Der E28 leistet 20.000 Pa, misst 326 x 348 x 112 mm, läuft 125 beziehungsweise 216 Minuten und kombiniert eine abnehmbare FlexiOne-Tiefenreinigung mit dem CornerRover-Arm. Die Omni E25 teilt Maße und Laufzeiten des E28 und ergänzt DuoSpiral-Entwirrungsbürsten. Die Omni C20 ist mit 85 mm besonders flach, leistet 7.000 Pa, nutzt einen 3.200-mAh-Akku, läuft 101 Minuten im Standardmodus (bis 121 Minuten im Leisemodus) und lädt in 5,5 Stunden; ihre Station fasst 2,5 L Frisch- und 2,4 L Schmutzwasser sowie einen 3,1-L-Staubbeutel. Katalogpreise von 1600, 1000 und 699 USD sowie der Preis „Not disclosed“ der Omni E25, die Größenklasse „medium“, das S2-Akkulabel von 180 Minuten, die E28-Laufzeit von 218 Minuten und die C20-Laufzeit von 132 Minuten sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht ein Roboter-Nettogewicht, eine Akkukapazität in mAh für S2, E28 und E25, eine Fahrgeschwindigkeit oder eine IP-Schutzart; eine absolute Ladezeit nennt nur die C20-Seite mit 5,5 Stunden. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 767 Produktdetailprüfungen bleiben offen.

## Ergänzung 174 – SwitchBot S20, K10+ Pro, K11+ und K20+ Pro: vier bestehende Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle SwitchBot-Shopseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 30 dokumentiert und 42 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil SwitchBot keine Quellfirma mit firmeneigenem Fokus ist. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.346 frühere Feldprüfungen und 181 frühere Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.366 datierte Merkmalssätze, 6.307 Aussagen, 2.917 Produktquellenverweise, 1.350 Feldprüfungen mit 25.398 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-174-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. SwitchBot führt S20, K10+ Pro, K11+ und K20+ Pro als getrennte aktuelle Modelle. Der S20 leistet 10 kPa (10.000 Pa), misst 365 x 365 x 115 mm, wiegt als Hauptgerät 5,5 kg bei 5,2 kg Station, nutzt einen 4.000-mAh-Akku aus sechs 21700-Zellen und lädt in unter vier Stunden an der Station; die Station übernimmt Wasserzu- und -ablauf, Wischreinigung, Staubentleerung alle 90 Tage und Heißluft-Wischtrocknung. Der K10+ Pro misst 248 x 248 x 92 mm, wiegt rund 2,3 kg mit Bürsten und Wischplatte, arbeitet mit 45 dB, fasst einen 4-L-Staubbeutel und speichert Staub bis zu 90 Tage; sein Datenblatt nennt weder Saugleistung in Pa noch Akkukapazität, Laufzeit in Minuten oder absolute Ladezeit. Der K11+ leistet 6.000 Pa, misst 248 x 248 x 98,5 mm, wiegt 2,3 kg bei 4,2 kg Station, nutzt einen 3.200-mAh-Akku mit unter fünf Stunden Ladezeit und navigiert per LDS-Laser und SLAM mit Infrarot- und PSD-Kantenerkennung. Der K20+ Pro ist ein Multitasking-Haushaltsroboter mit 4.000-Pa-Saugmodul auf einer 4 kg schweren mobilen Basis, misst 248 x 248 x 92 mm, wiegt netto 2,3 kg, nutzt einen 3.500-mAh-Akku mit etwa vier Stunden Ladezeit, überwindet bis zu 20 mm und läuft mit höchstens 80 dB. Katalogpreise von 800, 599, 399 und 700 USD, die Größenklasse „medium“, das S20-Akkulabel von 180 Minuten, die K10+ Pro-Akkulabels und die K10+ Pro-Laufzeit von 150 Minuten sowie das K20+ Pro-Akkulabel von 150 Minuten sind durch die geprüften Werte ersetzt oder geleert; die K20+ Pro-Nutzlast von 8 kg ist geleert, weil die geprüfte Seite keine Nutzlast nennt. Keine geprüfte Seite veröffentlicht eine Laufzeit in Minuten oder ein Frisch- und Schmutzwassertankvolumen; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 763 Produktdetailprüfungen bleiben offen.

## Ergänzung 175 – Dreame L10s Ultra Gen 2, L40 Ultra Gen 2, Aqua10 Roller und D10 Plus Gen 2: vier bestehende Katalogzeilen mit Herstellerbelegen (3. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Dreame-Shopseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 34 dokumentiert und 38 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil der bestehende Dreame-Firmenfokus unverändert bleibt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.350 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.370 datierte Merkmalssätze, 6.327 Aussagen, 2.921 Produktquellenverweise, 1.354 Feldprüfungen mit 25.470 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-175-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Dreame führt L10s Ultra Gen 2, L40 Ultra Gen 2, Aqua10 Roller und D10 Plus Gen 2 als getrennte aktuelle Modelle. Der L10s Ultra Gen 2 leistet bis zu 10.000 Pa, misst 350 x 350 x 97,2 mm, wiegt 4 kg, nutzt einen 5.200-mAh-Akku mit bis zu 240 Minuten reiner Sauglaufzeit im Leisemodus und lädt laut Herstellerlabor 30 Prozent schneller als frühere Modelle; seine Station misst 457 x 340 x 590,5 mm, wiegt 8,5 kg und fasst 3,2 L Staub, der Roboter hat 300 ml Staubbox und die Station wäscht die Wischer automatisch und trocknet sie heiß. Der L40 Ultra Gen 2 leistet 25.000 Pa, misst 350 x 350 x 97 mm, wiegt 4,01 kg, nutzt einen 5.200-mAh-Akku mit bis zu 231 Minuten reiner Sauglaufzeit im Leisemodus, hat 250 ml Staubbox und eine Station mit 457 x 340 x 590 mm, 8,86 kg, 3,2 L Staubbeutel sowie 4,5 L Frisch- und 4,0 L Schmutzwasser. Der Aqua10 Roller leistet bis zu 30.000 Pa, misst 13,78 x 13,78 x 4,72 in, wiegt 12,13 lbs, nutzt einen 6.400-mAh-Akku, hat 220 ml Staubbox und 100/140 ml Frisch-/Schmutzwasserboxen sowie eine Station mit 4 L Frisch- und 3,5 L Schmutzwasser, Heißwasser-Wischwäsche bis 212 °F, Heißlufttrocknung, Lösungsmittelnachfüllung und Auto-Entleerung. Der D10 Plus Gen 2 leistet 6.000 Pa, misst 350 x 350 x 96,3 mm, wiegt 3,23 kg, nutzt einen 5.200-mAh-Akku, hat 400 ml Staubbox und 150 ml Wassertank und sammelt mit einem 4-L-Staubbeutel 90 Tage automatisch Staub. Katalogpreise von rund 590, rund 570, 1399 und rund 300 USD, die Größenklasse „small“ beziehungsweise „medium“, die Akkulabels von rund 180 Minuten sowie die Laufzeiten von 180 Minuten sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht eine Fahrgeschwindigkeit, eine IP-Schutzart, eine absolute Ladezeit, eine Reinigungsbreite oder eine Nutzlast; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 759 Produktdetailprüfungen bleiben offen.

## Ergänzung 176 – ECOVACS Winbot W2 Omni, Deebot N30 Pro Omni, Deebot N20 Pro Plus und Winbot W3 Omni: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle ECOVACS-US-Shopseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 24 dokumentiert und 48 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil der bestehende ECOVACS-Firmenfokus unverändert bleibt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.354 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.374 datierte Merkmalssätze, 6.347 Aussagen, 2.925 Produktquellenverweise, 1.358 Feldprüfungen mit 25.542 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-176-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. ECOVACS führt Winbot W2 Omni, Deebot N30 Pro Omni, Deebot N20 Pro Plus und Winbot W3 Omni als getrennte aktuelle Modelle. Der Winbot W2 Omni leistet 5.500 Pa, arbeitet mit einem zwölfstufigen Anti-Fall-System und einer tragbaren Station mit automatischem Aufwickeln, Ein- und Ausschalten, Start und Pause, Moduswahl, Rückkehr zum Startpunkt, Saugnapf-Lösung und Zubehörfach; Robotermaße, Robotergewicht, Akkukapazität, Laufzeit in Minuten und Ladezeit veröffentlicht die geprüfte Seite nicht. Der Deebot N30 Pro Omni leistet 10.000 Pa, misst 353 x 353 x 104 mm bei einer Station von 340 x 485 x 540 mm samt abnehmbarer Basis, nutzt einen 5.200-mAh-Akku mit etwa 6,5 Stunden Ladezeit und 320 Minuten Sauglaufzeit im Leisemodus auf Hartboden; die Geräuschentwicklung liegt bei 65,3 dBA im Standard-Saug-Wischbetrieb, 60 dBA beim Wischwaschen und 83 dBA beim Staubabsaugen. Der Deebot N20 Pro Plus leistet 8.000 Pa, misst 353 x 351 x 96 mm bei einer Station von 358 x 451 x 388 mm, nutzt einen 5.200-mAh-Akku mit etwa 6,5 Stunden Ladezeit und 300 Minuten Sauglaufzeit im Leisemodus, 190 Minuten im Standard-Saugbetrieb und 245 Minuten im leisem Saug-Wischbetrieb auf Hartboden; er hat eine 400-ml-Staubbox und OZMO-Pro-2.0-Wischtechnik. Der Winbot W3 Omni arbeitet mit 3.300 ± 100 Pa während der Fahrt, unterstützt 3 mm Glasdicke, nutzt WIN-SLAM 5.0 und eine Station mit Vortex-Wash-Wischpad-Reinigung, Heißlufttrocknung und Aufbewahrungsfach; das Paket wiegt netto 12,22 kg und misst 418 x 398 x 510 mm, Robotermaße und Robotergewicht veröffentlicht die Seite nicht. Katalogpreise von rund 500, 349, rund 400 und 700 USD, die Größenklasse „small“ beziehungsweise „medium“ sowie die Akku- und Laufzeitlabels von 180 Minuten sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht eine Fahrgeschwindigkeit, eine IP-Schutzart, eine Reinigungsbreite, eine stündliche Flächenleistung oder eine Nutzlast; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 755 Produktdetailprüfungen bleiben offen.

## Ergänzung 177 – ECOVACS Winbot Mini 2, GOAT O1000 RTK, GOAT GX-600 und Winbot W2S Omni: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle ECOVACS-US-Shop- und Produktseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 40 dokumentiert und 28 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil der bestehende ECOVACS-Firmenfokus unverändert bleibt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.358 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.378 datierte Merkmalssätze, 6.367 Aussagen, 2.929 Produktquellenverweise, 1.362 Feldprüfungen mit 25.610 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-177-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. ECOVACS führt Winbot Mini 2, GOAT O1000 RTK, GOAT GX-600 und Winbot W2S Omni als getrennte aktuelle Modelle. Der Winbot Mini 2 misst 215 x 215 x 55 mm, wiegt 1,3 ± 0,1 kg, leistet 8.000 Pa maximal und 3.400 Pa während der Fahrt, nutzt einen 50-±-5-ml-Wassertank und einen 3.000-mAh-Akku mit etwa 3 Stunden Ladezeit; die Seite nennt 2 Minuten 30 Sekunden ± 10 Sekunden Reinigung pro 1 m² im Fast-Modus, ein Mindestfenster von 25 x 25 cm und 3 mm Mindestglasdicke. Der GOAT O1000 RTK misst 23,62 x 15,75 x 10,35 in, wiegt 24,25 lb, schneidet 8,66 in breit, überwindet 45 % (24°) Steigung, nutzt einen 4.000-mAh-18-V-Akku, lädt in etwa 100 Minuten, mäht etwa 65 Minuten pro Ladung und läuft mit 57 dBA; die Herstellerlabor-Flächenleistung liegt bei etwa 1.507–1.938 ft²/h, die Fahrgeschwindigkeit bei 1,15 ft/s im Delicate- und 1,64 ft/s im Efficient-Modus, und Mäher, Station und RTK-Antenne sind IPX6. Der GOAT GX-600 nutzt eine 22-cm-Messerscheibe mit 2.300 U/min, überwindet 40 % (21°) Steigung, ist IPX6 und läuft mit höchstens 59 dB; die Seite nennt 600 m² in 2 Tagen und etwa 70–100 m² pro Akkuladung, aber keinen Preis, keine Maße, kein Gewicht, keine Akkukapazität, keine Ladezeit und keine Laufzeit in Minuten. Der Winbot W2S Omni misst 270 x 270 x 76 mm, wiegt 1,95 ± 0,1 kg, nutzt einen 4.500-mAh-Akku mit bis zu 3 Stunden Ladezeit und 110 ± 10 Minuten Laufzeit, während die Station 5,2 ± 0,2 kg wiegt; die Saugleistung liegt bei 3.000 ± 100 Pa während der Fahrt und 8.000 Pa maximal, der Wassertank fasst 80 ± 5 ml und der Betrieb erreicht 68 dB. Katalogpreise von rund 200, 1000, 1300 und 600 USD, die Größenklassen „small“ und „medium“, die Massen 1,3 kg, rund 10 kg und 20 kg, die Akkulabels von rund 2 Stunden, 85 Minuten und 110 Minuten sowie die Laufzeitlabels von 180 Minuten sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht eine Nutzlast, eine Fahrgeschwindigkeit oder einen Mindestgang; die WINBOT-Seiten nennen zudem keine Reinigungsbreite. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 751 Produktdetailprüfungen bleiben offen.

## Ergänzung 178 – iRobot Roomba Combo Essential, Roomba 694, Roomba i3+ und Roomba Combo j5+: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle iRobot-US-Produktseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 27 dokumentiert und 45 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil der bestehende iRobot-Firmenfokus unverändert bleibt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.362 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.382 datierte Merkmalssätze, 6.387 Aussagen, 2.933 Produktquellenverweise, 1.366 Feldprüfungen mit 25.682 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-178-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. iRobot führt Roomba Combo Essential, Roomba 694, Roomba i3+ und Roomba Combo j5+ als getrennte aktuelle Modelle. Der Roomba Combo Essential misst 12,99 x 12,99 x 3,15 in, wiegt 6,17 lb, nutzt einen Lithium-Ionen-Akku und reinigt bis zu 120 Minuten pro Ladung, bevor er zur Station zurückkehrt; die Seite nennt drei Saug- und drei Wasserstufen sowie eine Punktreinigung von bis zu 2 Minuten, aber keine Akkukapazität in mAh und keine Ladezeit. Der Roomba 694 misst 13,4 in Breite x 3,54 in Höhe, wiegt 6,77 lb und nutzt einen Lithium-Ionen-Akku mit 3-Stufen-Reinigungssystem, Kantenbürste und iRobot-Genius-Planung; Akkukapazität, Laufzeit in Minuten und Ladezeit veröffentlicht die Seite nicht. Der Roomba i3+ EVO misst 13,26 in Breite x 3,63 in Höhe, wiegt 7,44 lb, leistet 10-fach Power-Lifting-Saugkraft mit 3-Stufen-Reinigungssystem und Imprint-Link, und die Clean Base entleert den Behälter in einen Beutel für bis zu 60 Tage Schmutz; Preis, Laufzeit in Minuten und Ladezeit nennt die Seite nicht. Der Roomba Combo j5+ misst 3,4 x 13,3 x 13,3 in, wiegt 7,5 lb, nutzt PrecisionVision-Navigation und No-Mop-Zonen, und seine Clean Base misst 15,8 x 12,2 x 13,3 in, wiegt 8,7 lb und hält einen Beutel für bis zu 60 Tage Schmutz. Katalogpreise von 275, rund 275 und rund 599 USD, die Größenklasse „small“, die Massen 3,2 kg, 3,07 kg und 3,4 kg, die Maße 34 x 34 x 9 cm und 34 x 34 x 9,2 cm, die Akkulabels von 2 Stunden, 90 Minuten und 75 Minuten sowie die Laufzeitlabels von 120, 90 und 75 Minuten sind durch die geprüften Werte ersetzt oder geleert. Die Seiten zum Roomba 694 und i3+ veröffentlichen keinen Preis, keine Laufzeit in Minuten und keine Ladezeit; keine geprüfte Seite nennt eine Nutzlast, eine Fahrgeschwindigkeit, eine IP-Schutzart, eine Reinigungsbreite, eine stündliche Flächenleistung, ein Wassertankvolumen oder einen Mindestgang. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 747 Produktdetailprüfungen bleiben offen.

## Ergänzung 179 – Aiper Scuba S1 Pro, Scuba S1, EcoSurfer S2 und Surfer S1: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Aiper-US-Produktseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 23 dokumentiert und 41 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil Aiper weiterhin keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.366 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.386 datierte Merkmalssätze, 6.407 Aussagen, 2.937 Produktquellenverweise, 1.370 Feldprüfungen mit 25.746 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-179-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Aiper führt Scuba S1 Pro, Scuba S1, EcoSurfer S2 und Surfer S1 als getrennte aktuelle Modelle. Der Scuba S1 Pro reinigt Becken bis 2.150 sq.ft (200 m²) und 66 ft (20 m) Länge mit 6.000 GPH (22.740 LPH) Durchfluss, einem 5-L-Debris-Korb mit 180-µm- und 3-µm-MicroMesh-Filter, vier bürstenlosen Motoren, bis zu 180 Minuten Laufzeit und 4 Stunden Ladezeit; die Seite nennt WaveLine-Wasserlinienreinigung, WavePath-2.0-Navigation und eine drahtlose Ladestation. Der Scuba S1 reinigt Becken bis 1.600 sq.ft (150 m²) und 50 ft (15 m) Länge mit 4.200 GPH (15.900 LPH) Durchfluss, einem 5-L-Debris-Korb, bis zu 180 Minuten Laufzeit und 3-4 Stunden Ladezeit; WavePath 2.0, erweiterte 12-Zoll-Flachwasserreinigung und 1,6-Zoll-Hindernisüberwindung ergänzen die Reinigung. Der EcoSurfer S2 ist ein Pool-Skimmer mit 4-L-Top-Load-Debris-Korb, 150-µm-Filtration, 35 Stunden Akkulaufzeit mit Adapterladung und 4-6 Stunden Ladezeit; zwei bürstenlose Propeller, ein bürstenloses Impeller, DebrisGuard, ein integrierter Chlorspender, SolarSeeker, optische Hindernissensoren sowie Hitz- und UV-Beständigkeit kommen hinzu. Der Aiper Surfer S1 ist ein Pool-Skimmer mit 20 Stunden Akkulaufzeit pro Ladung, zwei bürstenlosen Propellern und einem bürstenlosen Impeller, einem geschlossenen 5-L-Filterkorb mit 200-µm-Filter und Eignung für jede Beckengröße und jedes Beckenmaterial. Katalogpreise von rund 1.099, 799 und rund 400 USD, die Größenklassen „medium“ und „small“, die Massen 7,3 kg und 3,4 kg sowie die Akkulabels von 180 Minuten, 35 Stunden und bis zu 12 Stunden sind durch die geprüften Werte ersetzt oder geleert. Keine geprüfte Seite veröffentlicht Robotermaße oder Robotergewicht, eine IP-Schutzart, eine Nutzlast, eine Fahrgeschwindigkeit, eine Reinigungsbreite, eine stündliche Flächenleistung, ein Wassertankvolumen oder einen Mindestgang; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 743 Produktdetailprüfungen bleiben offen.

## Ergänzung 180 – Eufy Omni E35, Omni C30 Edge, Omni C30 und Omni S2 Pro: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Eufy-US-Produktseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 24 dokumentiert und 48 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil Eufy weiterhin keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.370 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.390 datierte Merkmalssätze, 6.427 Aussagen, 2.941 Produktquellenverweise, 1.374 Feldprüfungen mit 25.818 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-180-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Eufy führt Omni E35, Omni C30 Edge, Omni C30 und Omni S2 Pro als getrennte aktuelle Modelle. Der Omni E35 kostet 1.299,99 USD und arbeitet mit 35.000 Pa, AeroTurbo-2.0-Mehrzyklonfilter, HydroJet-2.0-Rollenmop, DuoSpiral-Entwirrungsbürsten und CornerRover-Arm; er misst 12,83 × 14,17 × 4,58 Zoll, die ThermoFresh-Station 14,57 × 17,60 × 16,18 Zoll, und läuft 188 Minuten im Saugmodus beziehungsweise 134 Minuten im Saug- und Wischmodus. Die Station fasst einen 3-L-Staubbeutel sowie 2,5 L Frisch- und 1,8 L Schmutzwasser. Der Omni C30 Edge kostet 899,99 USD und nutzt MopMaster 3.0 mit ausfahrbaren Doppelrotationspads, eine verstellbare Antiverhedderungsbürste und 12 mm Teppichanhebung; er misst 12,95 × 14,08 × 4,43 Zoll, die Station 12,99 × 19,69 × 12,38 Zoll, und läuft 195 Minuten im Saugmodus beziehungsweise 105 Minuten im Saug- und Wischmodus. Der Omni C30 kostet 799,99 USD und teilt diese Maße und Laufzeiten, nutzt aber MopMaster 2.0. Der Omni S2 Pro kostet 1.699,99 USD und bietet 40.000 Pa, UV-C-Bodendesinfektion, elektrolysiertes Wasser, einen HydroJet-3.0-Heißwasser-Rollenmop mit 240 U/min und 16 N Anpressdruck sowie AI-See-3.0-Erkennung von über 360 Hindernistypen; er misst 12,83 × 14,09 × 3,86 Zoll, die Station 15,24 × 18,74 × 26,38 Zoll. Die geprüften Seiten veröffentlichen weder Robotermasse noch Akkukapazität, Ladezeit, IP-Schutzart, Nutzlast, Fahrgeschwindigkeit, Reinigungsbreite, stündliche Flächenleistung, Tankvolumen der Station oder Mindestgang; die Kataloggrößen, der S2-Pro-Preis von rund 1.599 USD und die S2-Pro-Laufzeit „Not disclosed“ sind durch die geprüften Werte ersetzt oder geleert. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 739 Produktdetailprüfungen bleiben offen.

## Ergänzung 181 – Roborock S8 Max Ultra, Q8 Max+, Qrevo Curv und Saros 20: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Roborock-US-Produktseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 16 dokumentiert und 56 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; der bestehende Roborock-Firmenfokus bleibt unverändert, ein neuer war nicht nötig. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.374 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.394 datierte Merkmalssätze, 6.447 Aussagen, 2.945 Produktquellenverweise, 1.378 Feldprüfungen mit 25.890 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-181-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Roborock führt S8 Max Ultra, Q8 Max+, Qrevo Curv und Saros 20 als getrennte aktuelle Modelle. Der S8 Max Ultra kostet 1.599,99 USD und kombiniert 8.000 Pa Saugleistung mit einer DuoRoller-Riser-Bürste, VibraRise 3.0, einem FlexiArm-Seitenarm, einer zusätzlichen Randwischfunktion, reaktiver 3D-Hindernisvermeidung und PreciSense-LiDAR; das 8-in-1-RockDock-Ultra wäscht den Mop mit Heißwasser, trocknet ihn mit Heißluft, erkennt Schmutz, dosiert Reiniger, entleert den Staub und reinigt sich selbst. Der Q8 Max+ kostet 819,99 USD und bietet 5.500 Pa, eine DuoRoller-Bürste und Reactive-Tech-Hindernisvermeidung. Der Qrevo Curv kostet aktuell 849,99 USD (ursprünglich 1.599,99 USD) und bietet 18.500 Pa HyperForce, DuoDivide-Hauptbürste, ein Dual-Anti-Tangle-System, ein AdaptiLift-Chassis, einen FlexiArm-Seitenarm mit Randwischfunktion, abhebbare Bürsten und Mops sowie ein Multifunktions-Dock 3.0 mit 75-Grad-Heißwasser-Mopwäsche, Warmlufttrocknung, Schmutzerkennung, Staubentleerung und Tankbefüllung. Der Saros 20 kostet 1.599,99 USD und bietet 36.000 Pa HyperForce, ein AdaptiLift-Chassis 3.0 mit 3,46 Zoll Doppelhub, das StarSight-Autonomiesystem 2.0, FlexiArm-Rand- und Eckenreinigung, ein RockDock mit Heißwasser-Selbstreinigung, SmartPlan 3.0, dynamische Teppichreinigung bis 1,18 Zoll Florhöhe, Navigation bis 3,13 Zoll Bodenfreiheit, Reinigung hinter Vorhängen, DirTect-Ki-Flecken­erkennung, adaptive Druckwischfunktion, den Hello-Rocky-Sprachassistenten, Haustiererkennung mit Video sowie Matter-Kompatibilität. Keine geprüfte Seite veröffentlicht Robotermasse, Robotermaße, Akkukapazität, Laufzeit, Ladezeit, IP-Schutzart, Nutzlast, Fahrgeschwindigkeit, Reinigungsbreite, stündliche Flächenleistung, Tankvolumen oder Mindestgang; die Kataloggrößen, das Q8-Max+-Preislabel von rund 600 USD, der Qrevo-Curv-Preis von 1.600 USD sowie die Akku- und Laufzeitlabels von 180, 240 und 180 Minuten sind durch die geprüften Werte ersetzt oder geleert. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 735 Produktdetailprüfungen bleiben offen.

## Ergänzung 182 – iRobot Roomba j7+, Roomba j9+, Braava jet m6 und Roomba Combo 10 Max: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle iRobot-US-Produktseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 26 dokumentiert und 46 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; der bestehende iRobot-Firmenfokus bleibt unverändert. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.378 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.398 datierte Merkmalssätze, 6.467 Aussagen, 2.949 Produktquellenverweise, 1.382 Feldprüfungen mit 25.962 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-182-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. iRobot führt Roomba j7+, Roomba j9+, Braava jet m6 und Roomba Combo 10 Max als getrennte aktuelle Modelle. Der Roomba j7+ kostet 799,99 USD, wiegt 7,49 Pfund und misst 13,3 Zoll Breite bei 3,4 Zoll Höhe; die Seite nennt einen Lithium-Ionen-Akku, aber keine Kapazität, Laufzeit in Minuten oder Ladezeit. Der Roomba j9+ wiegt 8,98 Pfund, misst 13,7 × 13,7 × 3,4 Zoll und nennt einen Lithium-Ionen-Akku; die Seite verweist für den Preis auf ausgewählte Händler. Der Braava jet m6 ist ein Wi-Fi-verbundener Wischroboter mit Imprint Smart Mapping, Nass- und Trockenwischmodus, Smart Charge and Resume, 4,85 Pfund Gewicht und 10,6 Zoll Breite bei 3,5 Zoll Höhe; auch diese Seite nennt keinen Preis. Der Roomba Combo 10 Max kostet 1.299,99 USD, wiegt 11 Pfund, misst 13,3 × 13,3 × 3,4 Zoll und nutzt einen 4.200-mAh-LFP-Akku; sein AutoWash-Dock entleert den Behälter und wäscht und trocknet den Wischmopp, während ein 4-Stufen-Reinigungssystem, eine Edge-Sweeping-Bürste, Dual-Rubber-Bürsten und SmartScrub den Boden bearbeiten. Kataloggrößen und -gewichte sind durch die geprüften Werte ersetzt; die Katalogpreise von 999 und 499 USD sowie die Laufzeiten von 105, 120, 150 und 90 Minuten sind geleert, weil die Seiten keine Preise beziehungsweise keine Laufzeiten in Minuten veröffentlichen. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 731 Produktdetailprüfungen bleiben offen.

## Ergänzung 183 – Dreame L20 Ultra, X40 Ultra, D20 Plus und D20 Pro Plus: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Dreame-US-Produktseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 29 dokumentiert und 43 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil Dreame keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.374 andere Katalogzeilen, 1.382 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.378 Katalogeinträge, 1.402 datierte Merkmalssätze, 6.487 Aussagen, 2.953 Produktquellenverweise, 1.386 Feldprüfungen mit 26.034 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-183-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Dreame führt L20 Ultra, X40 Ultra, D20 Plus und D20 Pro Plus als getrennte aktuelle Modelle. Der L20 Ultra kostet 899,99 USD und bietet 7.000 Pa Vormax-Saugleistung, eine abhebbare Gummibürste, Ultraschall-Teppicherkennung, Mop-Entfernung und einen ausfahrbaren Mop; er misst 350 × 350 × 103,8 mm, wiegt 4,3 kg, nutzt einen 6.400-mAh-Akku und einen 80-ml-Wassertank und läuft bis zu 210 Minuten im reinen Saug- oder Wischmodus beziehungsweise 180 Minuten im Saug- und Wischmodus im Quiet-Modus. Die Basisstation misst 606,5 × 426 × 499 mm und fasst einen 3,2-l-Staubbeutel sowie 4,5 l Frischwasser. Der X40 Ultra kostet aktuell 539,99 USD (regulär 1.199,99 USD) und bietet 12.000 Pa Vormax-Saugleistung, eine ausfahr- und abhebbare Seitenbürste, eine Anti-Tangle-Seitenbürste, MopExtend-RoboSwing-Technik und eine Basisstation mit 158-Grad-Heißwasser-Mopwäsche; der 6.400-mAh-Akku lädt an der Station nach, und die Station fasst 4,5 l Frisch- und 4,0 l Schmutzwasser. Der D20 Plus kostet aktuell 309,99 USD (regulär 369,99 USD), wiegt 7,7 Pfund, misst 13,8 × 13,8 × 3,8 Zoll, nutzt einen 5.200-mAh-Akku, einen 350-ml-Wassertank und einen 500-ml-Staubbehälter und bietet 13.000 Pa Vormax-Saugleistung, eine HyperStream-Entwirrungs-DuoBrush, eine ausfahrbare Seitenbürste und einen 5-l-Staubbeutel für bis zu 150 Tage. Der D20 Pro Plus kostet aktuell 359,99 USD (regulär 365,99 USD) und ergänzt Ultraschall-Teppicherkennung bei gleichen Maßen, Gewicht, Akku und Staubbeutel. Katalogpreise, -größen, -gewichte, Akku- und Laufzeitlabels sind durch die geprüften Werte ersetzt oder geleert, wo die Seiten schweigen; keine geprüfte Seite veröffentlicht Ladezeit, IP-Schutzart, Nutzlast, Fahrgeschwindigkeit, Reinigungsbreite, stündliche Flächenleistung oder Mindestgang. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.429 Build-Seiten, null Audit-Fehler und 1.248 Hinweise. 727 Produktdetailprüfungen bleiben offen.

## Ergänzung 184 – Wybot S2, C2 Vision, C2 und F1 Solar Skimmer: zwei bestehende Katalogzeilen und zwei neue Modelle mit Herstellerbelegen (4. November 2026)

Vier Poolroboter sind gegen aktuelle Wybot-US-Produktseiten geprüft: die bestehenden Katalogzeilen C2 Vision und F1 Solar Skimmer sowie die neuen Zeilen S2 und C2. Die Prüfung umfasst 64 Felder: 25 dokumentiert und 39 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil Wybot keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.376 andere Katalogzeilen, 1.386 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.380 Katalogeinträge, 1.406 datierte Merkmalssätze, 6.507 Aussagen, 2.957 Produktquellenverweise, 1.390 Feldprüfungen mit 26.098 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-184-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Wybot führt S2, C2 Vision, C2 und F1 als getrennte aktuelle Modelle. Der S2 kostet 759,99 USD (regulär 999,99 USD), läuft bis zu 210 Minuten, deckt bis zu 3.229 Quadratfuß ab und lädt in drei Stunden; die App bietet 6 Reinigungspfade und 7 Modi, der manuelle Schalter drei Modi, ein Zyklustimer plant bis zu vier Läufe über sieben Tage, Self-Parking bringt den Roboter an den Beckenrand, und es gelten 30 Tage Rückgabe und zwei Jahre Garantie. Der C2 Vision kostet 629,99 USD (regulär 899,99 USD), reinigt Böden, Wände und Wasserlinie auf 2.152 Quadratfuß mit 180 Minuten Laufzeit im Eco-Modus, fördert 3.883 GPH, filtert mit 180 µm und 10 µm, bietet 8 Modi und 7 Pfade in der App, vier Reinigungen pro Woche, Self-Parking und zwei Jahre Garantie. Der C2 kostet 499,99 USD (regulär 699,99 USD), bietet 3.592 GPH, einen 3-l-Korb, 180 µm plus 10 µm Filter, 7 Modi und 6 Pfade, vier Reinigungen pro Woche, Auto-Parking und zwei Jahre Garantie. Der F1 kostet 299,98 USD (regulär 399,99 USD), arbeitet mit 33 W Solarleistung, einem 7-l-Korb und Feinfilter, im Smart-Modus mit 24-Stunden-Zyklus aus zehn Minuten Arbeit und zehn Minuten Pause beziehungsweise im Standardmodus acht Stunden durchgehend und hat ein Jahr Garantie. Die S2-Zeile ist neu, weil die bestehende S2-Pro-Zeile einen anderen Roboter beschreibt und ihre Produkt-URL 404 liefert; die C2-Zeile ist neu, weil der Katalog nur die C2-Vision-Variante führt. Katalogpreise, -größen, -gewichte, Akku- und Laufzeitlabels sind durch die geprüften Werte ersetzt oder geleert, wo die Seiten schweigen; keine geprüfte Seite veröffentlicht Masse, Maße oder Akkukapazität, und außer der S2-Ladezeit von drei Stunden keine Ladezeit, IP-Schutzart, Nutzlast, Fahrgeschwindigkeit, Reinigungsbreite, stündliche Flächenleistung oder Wassertankkapazität. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 723 Produktdetailprüfungen bleiben offen.

## Ergänzung 185 – Husqvarna Automower 450X EPOS, 440 iQ, 415X und 310 Mark II: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Husqvarna-Produkt- und Supportseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 68 Felder: 44 dokumentiert und 24 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil Husqvarna keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.376 andere Katalogzeilen, 1.390 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.380 Katalogeinträge, 1.410 datierte Merkmalssätze, 6.527 Aussagen, 2.961 Produktquellenverweise, 1.394 Feldprüfungen mit 26.166 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-185-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Husqvarna führt 450X EPOS, 440 iQ, 415X und 310 Mark II als getrennte Modelle. Der 450X EPOS deckt bis zu 2,5 Acres ab, schneidet 9,45 Zoll breit mit drei drehenden Klingen, schafft 15 Prozent Steigung an der Grenze und 45 Prozent im Inneren, läuft bis zu 24 Stunden aktiv und mäht etwa 210 Minuten pro Ladung; er wiegt 31,7 Pfund, misst 28,3 × 22 × 12,6 Zoll, ist IPX4 geschützt, emittiert 65 dB(A) und bietet GPS-Diebstahlschutz, PIN, Hub- und Neigesensoren. Der 440 iQ kostet 4.299,99 USD, bietet EPOS-Satellitenpositionierung ohne Begrenzungsdraht, 45 Prozent Steigung im Inneren, 9,4 Zoll Schnittbreite, 1 bis 4 Zoll Schnitthöhe, einen 7,5-Ah-Akku, 138 Minuten Laufzeit, 54 Minuten Ladezeit bei 7 A, 39 Pfund Gewicht, 29,6 × 21,4 × 11,1 Zoll, IPX5, 62 dB(A), Mobilfunk, WLAN und Bluetooth, Radar, Geofence und vier Jahre Garantie. Der 415X deckt 0,37 Acres ab, schneidet 8,7 Zoll breit, schafft 15 Prozent Steigung an der Grenze und 40 Prozent im Inneren, läuft etwa 50 Minuten, wiegt 21,4 Pfund, misst 24 × 17,7 × 9,4 Zoll und ist IPX5 geschützt. Der 310 Mark II kostet 1.014,30 GBP (regulär 1.449,00 GBP), deckt 1.000 Quadratmeter ab, schneidet 22 Zentimeter breit, schafft 15 Prozent Steigung an der Grenze und 40 Prozent im Inneren, läuft 16 Stunden aktiv und etwa 60 Minuten pro Ladung, lädt in 60 Minuten, wiegt 9,4 Kilogramm, misst 57 × 43 × 25 Zentimeter und ist IPX5 geschützt. Katalogpreise, -größen, -gewichte, Akku- und Laufzeitlabels sind durch die geprüften Werte ersetzt oder geleert, wo die Seiten schweigen; keine geprüfte Seite veröffentlicht Nutzlast, Fahrgeschwindigkeit, stündliche Flächenleistung oder Wassertankkapazität, und nur der 310 Mark II nennt eine Ladezeit. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt; die Seite nennt Husqvarna selbst den weltweit führenden Anbieter für Robotermäher, was hier nicht als unabhängiger Beleg gewertet wird.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 719 Produktdetailprüfungen bleiben offen.

## Ergänzung 186 – Narwal Freo X10 Pro, Freo X Plus, Freo Z10 Turbo und Flow: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Narwal-US-Produktseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 27 dokumentiert und 45 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil Narwal keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.376 andere Katalogzeilen, 1.394 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.380 Katalogeinträge, 1.414 datierte Merkmalssätze, 6.547 Aussagen, 2.965 Produktquellenverweise, 1.398 Feldprüfungen mit 26.238 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-186-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Narwal führt Freo X10 Pro, Freo X Plus, Freo Z10 Turbo und Flow als getrennte Modelle. Der X10 Pro kostet 449,99 USD (regulär 699,99 USD), bietet 11.000 Pa Saugleistung, ausfahrbare Wischmopps, eine 120-Tage-Staubbox, 2,4-GHz-WLAN und eine 1-Jahres-Garantie; er misst 355 × 350 × 107,7 Millimeter, wiegt 3.700 ±100 Gramm, nutzt einen 5.000-mAh-Akku, ist 4,24 Zoll hoch, und die Basisstation misst 431 × 403,5 × 461,5 Millimeter bei 8.400 ±100 Gramm und 45 Watt. Der X Plus kostet 339,99 USD (regulär 399,99 USD, derzeit ausverkauft), wiegt 4.250 ±100 Gramm, misst 35,0 × 35,5 × 10,7 Zentimeter, komprimiert Staub für bis zu sieben Wochen, nutzt einen HEPA-Beutel, einen Tri-Laser-Verbund und LiDAR mit 360 Grad und eine Basisstation von 27,5 × 11,8 × 13,7 Zentimetern bei 860 ±100 Gramm. Der Z10 Turbo kostet 549,99 USD (regulär 899,99 USD), bietet 25.000 Pa, einen DualFlow-Entwirrungsverbund, zwei Reuleaux-Dreiecksmopps mit 12 Newton Anpressdruck und EdgeReach-Ausfahrtechnik, wiegt 4,5 Kilogramm, misst 13,98 × 13,78 × 4,24 Zoll, nutzt einen 5.200-mAh-Akku, hebt die Mopps 12 Millimeter an, erkennt über 100 Objekte, wäscht mit Wasser bis 161,6 Grad Fahrenheit und trocknet heißluft; die adaptive Station wiegt 10,6 Kilogramm bei 16,97 × 15,88 × 18,17 Zoll. Der Flow kostet 1.499,99 USD, bietet 22.000 Pa, eine FlowWash-Walzenmopp-Reinigung mit 113 Grad Fahrenheit, 16 Düsen, 110 Reinigungszügen pro Minute und 12 Newton Druck, einen 2,5-Liter-Staubbeutel für bis zu 120 Tage, Dual-RGB-Kameras mit AI-Chip, 95 Millimeter Bauhöhe, 40 Millimeter Schwellenüberwindung, einen 6.400-mAh-Akku bei 14,4 Volt und eine Basisstation von 431 × 426,8 × 461,5 Millimetern bei 11,3 Kilogramm und 45 Watt. Katalogpreise, -größen, -gewichte, Akku- und Laufzeitlabels sind durch die geprüften Werte ersetzt oder geleert, wo die Seiten schweigen; keine geprüfte Seite veröffentlicht Laufzeit in Minuten, Ladezeit, IP-Schutzart, Nutzlast, Fahrgeschwindigkeit, Reinigungsbreite, stündliche Flächenleistung, Wassertankkapazität oder Mindestgang. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 715 Produktdetailprüfungen bleiben offen.

## Ergänzung 187 – Eufy X10 Pro Omni, Omni S1 Pro, L60 und Robot Lawn Mower E15: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Eufy-Produkt- und Vergleichsseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 71 Felder: 29 dokumentiert und 42 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil Eufy keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.376 andere Katalogzeilen, 1.398 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.380 Katalogeinträge, 1.418 datierte Merkmalssätze, 6.567 Aussagen, 2.969 Produktquellenverweise, 1.402 Feldprüfungen mit 26.309 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-187-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Eufy führt X10 Pro Omni, Omni S1 Pro, L60 und E15 als getrennte Modelle. Der X10 Pro Omni kostet 899,99 USD, bietet 8.000 Pa, zwei drehende Wischmopps mit 1 Kilogramm Anpressdruck und 180 Umdrehungen pro Minute, einen Pro-Detangle-Kamm, eine RGB-Kamera mit LED, 0,83 Zoll Hindernisüberwindung und eine All-in-One-Station; er misst 13,90 × 12,87 × 4,47 Zoll, die Station 14,41 × 18,11 × 18,90 Zoll, läuft 173 Minuten im Saugmodus beziehungsweise 136 Minuten im Saug-Wisch-Modus und führt einen 80-Milliliter-Wassertank; die Seite markiert das Modell als nicht mehr verfügbar, und die Vergleichstabelle nennt abweichende Roboter-Maße. Der Omni S1 Pro kostet 1.499,99 USD, bietet 8.000 Pa, einen HydroJet-Walzenmopp mit Echtzeit- Selbstreinigung, Eco-Clean-Ozone-Bodendesinfektion, 3D-MatrixEye und eine 10-in-1-UniClean- Station, und gilt als eingestellt. Der L60 bietet 5.000 Pa, iPath-Lasernavigation, 3,9 Zoll Bauhöhe, 120 Minuten Laufzeit, App- und Sprachsteuerung sowie einen 3-Liter-Staubbeutel und gilt als eingestellt. Der E15 kostet 1.799,99 USD, deckt 0,2 Acres ab, schneidet 8 Zoll breit und 1 bis 3 Zoll hoch, schafft 18 Grad Steigung, wiegt 12,5 Kilogramm, misst 60,3 × 39,4 × 31,8 Zentimeter, ist IPX6 geschützt, nutzt einen 93,24-Wh-Akku mit 90 bis 110 Minuten Mäh- und Ladezeit und bietet GPS, 4G, Diebstahlschutz sowie Regen- und Lichtrückruf. Katalogpreise, -größen, -gewichte, Akku- und Laufzeitlabels sind durch die geprüften Werte ersetzt oder geleert, wo die Seiten schweigen; keine geprüfte Seite veröffentlicht Nutzlast, Fahrgeschwindigkeit, stündliche Flächenleistung oder Wassertankkapazität, und der X10 Pro Omni veröffentlicht weder Robotermasse noch Akkukapazität oder Ladezeit. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 711 Produktdetailprüfungen bleiben offen.

## Ergänzung 188 – Aiper Scuba X1 Pro Max, Scuba V3, Scuba X1 und Scuba E1: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen der Kategorie Outdoor, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Aiper-Produktseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 68 Felder: 24 dokumentiert und 44 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier zusätzliche Produktquellenverweise; ein neuer Firmenfokus war nicht nötig, weil Aiper keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.376 andere Katalogzeilen, 1.402 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.380 Katalogeinträge, 1.422 datierte Merkmalssätze, 6.587 Aussagen, 2.973 Produktquellenverweise, 1.406 Feldprüfungen mit 26.377 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: .

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Aiper führt Scuba X1 Pro Max, Scuba V3, Scuba X1 und Scuba E1 als eigenständige Poolreinigungsmodelle. Der Scuba X1 Pro Max deckt In-Ground-Pools bis 3.230 sq.ft (300 m2) und 100 ft (30 m) Länge ab, liefert 8.500 GPH (32.000 LPH) Durchfluss mit neun bürstenlosen Motoren und 40 Sensoren, läuft bis zu 300 Minuten bei Bodenreinigung beziehungsweise 600 Minuten beim Skimmen, lädt in 4 Stunden über ein kabelloses Ladedock und ist nach IPX8 wasserdicht; die Seite nennt keinen Preis und keine Maße, sodass der Katalogpreis von 2.299 USD und das Small-Größenlabel geleert wurden. Der Scuba V3 liefert 4.800 GPH Saugleistung mit Doppelbürsten, VisionPath-Navigation (KI-Vision und dToF zur Erkennung von 20+ Hindernistypen auf 2 Meter Distanz mit Doppel-LEDs für Nachteinsätze), JetAssist-Wasserlinienpflege und wiegt 18,1 lbs (8,2 kg), womit das Kataloggewicht von 7,5 kg korrigiert wird; die Seite nennt keinen Preis und keine genaue Akkulaufzeit in Minuten. Der Scuba X1 deckt In-Ground-Pools bis 2.150 sq.ft (200 m2) mit 6.600 GPH (25.200 LPH), vier bürstenlosen Motoren, 14 Sensoren und WavePath-Ultraschallnavigation ab, läuft bis zu 180 Minuten, lädt in 4 Stunden und ist nach IPX8 zertifiziert; Katalogpreis von 1.499 USD und Medium-Label sind geleert. Der Scuba E1 reinigt ebene Aufstellpool-Böden bis 1.100 sq.ft (100 m2) mit einem Dreimotorensystem (zwei Fahr-, ein Pumpenmotor), 3.600 GPH (13.600 LPH) und zweistufigem Filter (180 um Korb + 3 um Ultrafeinfilter), läuft bis zu 100 Minuten und lädt in 3 Stunden; der Katalogpreis von ~599 USD und das Medium-Label sind geleert. Aipers eigener Euromonitor-Absatzbeleg wird nicht als unabhängige Marktführerschaft anerkannt. Alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 707 Produktdetailprüfungen bleiben offen.

## Ergänzung 189 – Xiaomi Robot Vacuum 5 Pro, X20 Max, X20 Pro und S20: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen der Kategorie Cleaning, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Xiaomi-Produkt- und Spezifikationsseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 31 dokumentiert und 41 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und acht Produktquellenverweise (je eine Übersichts- und eine Spezifikationsseite pro Modell); ein neuer Firmenfokus war nicht nötig, weil Xiaomi keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.376 andere Katalogzeilen, 1.406 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.380 Katalogeinträge, 1.426 datierte Merkmalssätze, 6.607 Aussagen, 2.981 Produktquellenverweise, 1.410 Feldprüfungen mit 26.449 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-189-evidence.json`.

Acht HTTP-Antworten sind gehasht gesichert und alle acht als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Xiaomi führt Robot Vacuum 5 Pro, X20 Max, X20 Pro und S20 als eigenständige Modelle. Der 5 Pro (Modell OV21GL) bietet 20.000 Pa Saugleistung, ein absenkbares dToF-Radar für Lücken ab 9,5 cm Höhe, eine RGB-Kamera plus zwei Infrarotkameras und einen Infrarot-3D-Punktprojektor zur Erkennung von über 200 Objekten und 47 Schmutzarten, eine ausfahrbare Wisch- und Seitenbürste sowie eine All-in-One-Station mit 2,5-Liter-Staubbeutel (bis 75 Tage), Mop-Wäsche und 2 Stunden Heißlufttrocknung; er misst 350 mm Durchmesser bei 88 mm Höhe, wiegt 3,97 kg, führt einen 5.200-mAh-Nominalakku für bis zu 140 Minuten Saugen und Wischen im Standardmodus und einen 4-Liter-Frischwassertank für bis zu 400 m²; die Station misst 470 × 360 × 572 mm mit Rampenverlängerung. Der X20 Max (D109GL) bietet 8.000 Pa, einen ausfahrbaren Wischarm bis 2 mm an Kanten und rund 40 mm Ausfahrweg, eine haarschneidende Hauptbürste, strukturlicht- und kantenlasergestützte Hindernisvermeidung, Ultraschall-Teppicherkennung mit 10 mm Mopp-Anhebung sowie eine Station mit 2,5-Liter-Beutel (75 Tage) und 3 Stunden Trocknung; er misst 350 mm bei 97 mm, wiegt 3,9 kg, läuft mit 5.200 mAh bis zu 120 Minuten und deckt mit 4 Litern bis 200 m² ab; die Station misst 340 × 420 × 563 mm. Der X20 Pro (D102GL) bietet 7.000 Pa, zwei rotierende Wischmopps, vier Reinigungsmodi, 10 mm Mopp-Anhebung und eine Station mit 2,5-Liter-Beutel und 3 Stunden Trocknung; er misst 350 mm bei 97 mm, wiegt 3,7 kg, läuft mit 5.200 mAh bis zu 160 Minuten und führt 4 Liter Frisch- plus 3,8 Liter Schmutzwasser für bis zu 120 m². Der S20 (D106) bietet 5.000 Pa, drei Leistungsstufen, einen 2-in-1-Behälter mit 400 ml Staub und 270 ml Wasser, Zickzack- und Y-Reinigung sowie LDS-Lasernavigation; er misst 325 mm bei 98 mm, wiegt 3,5 kg, führt einen 3.200-mAh-Nominalakku und eine Ladestation von 146 × 122 × 98 mm. Katalogpreise sind geleert, weil keine geprüfte Seite einen Preis nennt; das Kataloggewicht des X20 Max (3,6 kg) und seine Laufzeit (160 min) sind durch 3,9 kg und 120 Minuten ersetzt, und die S20-Laufzeit von 150 Minuten ist geleert, weil die Seiten keine Minutenangabe veröffentlichen. Keine geprüfte Seite nennt Ladezeit, IP-Schutzart, Nutzlast, Fahrgeschwindigkeit, Reinigungsbreite, stündliche Flächenleistung oder Mindestdurchfahrt; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 703 Produktdetailprüfungen bleiben offen.

## Ergänzung 190 – Xiaomi Robot Vacuum X20+, S40, S40 Pro und S40C: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen der Kategorie Cleaning, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Xiaomi-Produkt- und Spezifikationsseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 30 dokumentiert und 42 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und acht Produktquellenverweise (je eine Übersichts- und eine Spezifikationsseite pro Modell); ein neuer Firmenfokus war nicht nötig, weil Xiaomi keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.376 andere Katalogzeilen, 1.410 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.380 Katalogeinträge, 1.430 datierte Merkmalssätze, 6.627 Aussagen, 2.989 Produktquellenverweise, 1.414 Feldprüfungen mit 26.521 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-190-evidence.json`.

Acht HTTP-Antworten sind gehasht gesichert und alle acht als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Xiaomi führt X20+, S40, S40 Pro und S40C als eigenständige Modelle. Der X20+ bietet 6.000 Pa, hochdrehende Wischreinigung mit 180 Umdrehungen pro Minute und automatischer Mopp-Anhebung, ein S-Cross-Weitwinkel-Strukturlicht zur Hindernisvermeidung, LDS-Lasernavigation sowie eine All-in-One- Station mit 10-Sekunden-Staubentleerung, automatischer Mop-Wäsche, Lufttrocknung und 4-Liter-Tank; er misst 350 × 350 × 97 mm, wiegt 3,67 kg, führt einen 5.200-mAh-Nominalakku für bis zu 140 Minuten Saugen und Wischen im Standardmodus, deckt mit einer Tankfüllung bis zu 280 m² ab und nutzt einen 75-Tage-Staubbeutel; die Station misst 586 × 427 × 340 mm. Der S40 (OV81) bietet 10.000 Pa, mehrdimensionale Haar-Anti-Tangle-Technik mit Kammzähnen und goldener V-förmiger Hauptbürste, integriertes Saugen und Wischen mit drei Wasserstufen sowie LDS-Lasernavigation; er misst 340 × 340 × 98 mm, wiegt 4,12 kg, läuft mit 5.200 mAh bis zu 180 Minuten und führt 520 ml Staubbehälter plus 270 ml Wassertank; die Ladestation misst 130 × 121 × 95 mm. Der S40 Pro (OV71GL) bietet 15.000 Pa aus einem Hochgeschwindigkeitslüfter mit Aluminium-Magnesium-Legierungsflügeln, zwei ausfahrbare Arme für 0 mm Ecken- und 1 mm Wandabstand, ein 129-Grad-Ultraweitwinkel-Strukturlicht, 360-Grad-Scanning, intelligente Teppichreinigung und Anti-Tangle- Bürsten; er misst 355 × 350 × 99 mm, wiegt 4,2 kg, führt einen 5.200-mAh-Nominalakku für bis zu 180 m² pro Ladung sowie 430 ml Staubbehälter und 310 ml Wassertank; die Ladestation misst 146 × 122 × 98,5 mm. Der S40C (E101) bietet 5.000 Pa mit vier Leistungsstufen, LDS-Lasernavigation mit mehreren Sensoren, intelligente Wasserflussregelung mit drei Stufen sowie App-, Alexa- und Google-Assistant-Steuerung; er misst 340 × 340 × 97 mm, wiegt 3,44 kg, führt einen 2.600-mAh-Nominalakku sowie 520 ml Staubbehälter und 260 ml Wassertank; die Ladestation misst 130 × 121 × 95 mm. Katalogpreise sind geleert, weil keine geprüfte Seite einen Preis nennt; das S40-Katalogbatterielabel (180 min) ist durch die Nominalkapazität ersetzt. Keine geprüfte Seite nennt Laufzeit in Minuten für S40 Pro und S40C, Ladezeit, IP-Schutzart, Nutzlast, Fahrgeschwindigkeit, Reinigungsbreite, stündliche Flächenleistung oder Mindestdurchfahrt; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 699 Produktdetailprüfungen bleiben offen.

## Ergänzung 191 – Xiaomi Robot Vacuum S10+, E10, E5 und Robot Vacuum 5: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen der Kategorie Cleaning, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Xiaomi-Produkt- und Spezifikationsseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 30 dokumentiert und 42 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und acht Produktquellenverweise (je eine Übersichts- und eine Spezifikationsseite pro Modell); ein neuer Firmenfokus war nicht nötig, weil Xiaomi keinen firmeneigenen Fokusbericht hat. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.376 andere Katalogzeilen, 1.414 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.380 Katalogeinträge, 1.434 datierte Merkmalssätze, 6.647 Aussagen, 2.997 Produktquellenverweise, 1.418 Feldprüfungen mit 26.593 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-191-evidence.json`.

Acht HTTP-Antworten sind gehasht gesichert und alle acht als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Xiaomi führt S10+, E10, E5 und Robot Vacuum 5 als eigenständige Modelle. Der S10+ (B105) bietet 4.000 Pa Saugleistung mit vier Stufen, doppelte Druck-Wischmopps mit konstanter Feuchte aus einem 200-ml-Tank, 3D-Hindernisvermeidung, LDS-Lasernavigation und einen 450-ml-Staubbehälter; er misst 350 × 350 × 97 mm, wiegt 3,8 kg (4,4 kg mit Zubehör), führt einen 5.200-mAh-Nominalakku für bis zu 120 Minuten im Standardmodus, deckt in einem Durchgang über 200 m² ab, schafft bis zu 80 Minuten konstante Feuchtwischreinigung und lädt in etwa 6 Stunden; die Ladestation misst 130 × 126 × 93 mm. Der E10 (B112) bietet 4.000 Pa mit vier Saugstufen, Zickzack-Routenplanung, einen 2-in-1-Wasser- und Staubbehälter, mehrere Sensoren sowie Sprachhinweise und Mi-Home/Xiaomi-Home-App-Steuerung; er misst 325 mm bei 80 mm, führt einen 2.600-mAh-Nominalakku für 110 Minuten und eine Ladestation von 146 × 122 × 87,5 mm. Der E5 bietet bis zu 2.000 Pa, Doppel-Seitenbürsten, eine gegen Haare ausgelegte Düse, einen 400-ml-Staubbehälter und eine feststehende Wischplatte; er misst 300 mm bei 70 mm, wiegt 2,3 kg, führt einen 2.600-mAh-Nominalakku für 110 Minuten im Standardgang und eine Ladestation von 170 × 134 × 82,5 mm. Der Robot Vacuum 5 (OV31GL) bietet 20.000 Pa, ein absenkbares dToF-Radar für Lücken ab 9,5 cm, ausfahrbare Seitenbürste und Wischmopp bis 0 mm an Ecken, S-Cross-Strukturlicht mit dreifachem Laser-Scanning, eine selbstschneidende Hauptbürste sowie eine All-in-One-Station mit 80-Grad-Heißwasserwäsche, 2 Stunden Heißlufttrocknung, zwei rotierenden Abstreifern und einem 2,5-Liter-Staubbeutel für 75 Tage; er misst 350 mm bei 88 mm, wiegt 3,75 kg, führt einen 5.200-mAh-Nominalakku für bis zu 140 Minuten Saugen und Wischen im Standardmodus sowie einen 4-Liter-Frischwassertank; die Station misst 470 × 360 × 572 mm mit Rampenverlängerung. Katalogpreise sind geleert, weil keine geprüfte Seite einen Preis nennt. Keine geprüfte Seite nennt für E10 und E5 eine Wassertankkapazität oder Robotermasse, und keine Seite nennt Ladezeit außer den etwa 6 Stunden des S10+, IP-Schutzart, Nutzlast, Fahrgeschwindigkeit, Reinigungsbreite, stündliche Flächenleistung oder Mindestdurchfahrt; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 695 Produktdetailprüfungen bleiben offen.

## Ergänzung 192 – Dreame Aqua10 Ultra Roller Complete, Matrix10 Pro, W10 Pro und X60 Ultra: vier bestehende Katalogzeilen mit Herstellerbelegen (4. November 2026)

Vier bestehende Katalogzeilen der Kategorie Cleaning, die zuvor keine Feldprüfung hatten, sind gegen aktuelle Dreame-Produktseiten geprüft; keine neuen Modelle erzeugt. Die Prüfung umfasst 72 Felder: 32 dokumentiert und 40 nicht dokumentiert. Hinzu kommen 20 Merkmalsaussagen und vier Produktquellenverweise (je eine Produktseite pro Modell); ein neuer Firmenfokus war nicht nötig, weil bereits ein Dreame-Firmenfokus vom 3. November 2026 vorliegt. Alle bisherigen Merkmale, Fund-URLs, IDs und Medien bleiben erhalten. 2.376 andere Katalogzeilen, 1.418 frühere Feldprüfungen und 181 Firmenfokusse sind unverändert. Gesamt: 2.380 Katalogeinträge, 1.438 datierte Merkmalssätze, 6.667 Aussagen, 3.001 Produktquellenverweise, 1.422 Feldprüfungen mit 26.665 Feldern und 181 Firmenfokusse. Von 518 ursprünglichen Queue-Zielen bleiben alle 518 technisch teilgeprüft; kein Feldprüfungsziel und keine Identitätsfrage ist offen. Dauerbeleg: `reports/competitor-batch-192-evidence.json`.

Vier HTTP-Antworten sind gehasht gesichert und alle vier als Beleg nutzbar, ausschließlich native HTML-Seiten; Fehlseiten traten in dieser Runde nicht auf. Kein Recherchebrowser, keine visuelle Prüfung, OCR oder Medienübernahme. Keine Formulare, Konten, Kontaktaufnahme, Nachrichten oder Transaktionen. Dreame führt Aqua10 Ultra Roller Complete, Matrix10 Pro, W10 Pro und X60 Ultra als eigenständige Katalogzeilen. Der Aqua10 Ultra Roller Complete ist die Complete-Variante des bereits geprüften Aqua10 Ultra Roller und teilt dessen Produktseite: 30.000 Pa, ein kontinuierlich frischwassergespülter FluffRoll-Roller, AutoSeal-Rollenschutz mit 0,55 in Anhebung, ProLeap-Trittstufen bis 3,15 in und OmniSight 2.0 für 240+ Objekte; 6.400 mAh, 220 ml Staubbox, 100/140 ml Wasserboxen, 4 L/3,5 L Stationstanks, 100-Grad-Rollerwäsche, etwa vier Stunden Trocknung und ein 3,2-L-Beutel für 100 Tage; Roboter 350 × 350 × 97,5 mm eingefahren und 120 mm ausgefahren bei 5,8 kg, Station 16,54 × 17,32 × 19,88 in bei 11,1 kg; die Seite nennt 899,99 USD gegen 1.599,99 USD regulär und nur Nachfüllläufe von etwa 48, 37 und 20 Minuten auf niedriger, mittlerer und hoher Wasserstufe. Der Matrix10 Pro bietet 30.000 Pa, ein Multi-Mopp-Dock mit drei spezialisierten Mopp-Paaren, ein Drei-Lösungs-Fach, Dual-Flex-Arme, einen HyperStream-DuoBrush, 100-Grad-ThermoHub-Wäsche, 10,5 mm Mopp-Anhebung, 40/22 mm Hindernisüberwindung und 280+ Objekttypen; Roboter 350 × 350 × 104 mm bei 4,1 kg, Station 416 × 457 × 590 mm bei 16,1 kg, 6.400 mAh, 250 ml Staubbox, 3,2-L-Beutel und 5,5/4,0 L Tanks für 100 Tage; die Seite nennt 1.499,99 USD gegen 1.624,99 USD regulär, aber keine Laufzeit. Der W10 Pro ist ein D-förmiger Saug- und Wischroboter mit 4.000 Pa, 180 U/min, 19,2-cm-Roller, Ultraschall-Teppicherkennung, LiDAR und Heißlufttrocknung in etwa zwei Stunden; Roboter 334 × 314 × 105,5 mm mit 450 ml Staubbox, Station 375 × 400 × 430 mm mit 4,5/4,0 L Wasser, 6.400 mAh für 160 Minuten und 200 m² sowie drei Etagenpläne; die Seite nennt weder Preis noch Robotermasse. Der X60 Ultra bietet 35.000 Pa, ein VersaLift-DToF auf 3,13 in (79,5 mm), zwei Omni-Scrub-Mopps mit 40 Grad, 230 U/min und 15 N, 100-Grad-Mopp-Wäsche, 8,8/4,5 cm Hindernisüberwindung und 280+ Objekttypen; Roboter 350 × 350 × 79,5 mm eingefahren und 103 mm ausgefahren bei 4,7 kg, Station 390 × 423 × 499 mm bei 10,6 kg, 235 ml Staubbox, 3,2-L-Beutel, 4,2/3,0 L Tanks und 100 Tage Auto-Empty; 6.400 mAh laden von 9 auf 80 Prozent in etwa 80 Minuten; die Seite nennt 1.349,99 USD gegen 1.499,99 USD regulär, aber keine volle Laufzeit. Keine geprüfte Seite nennt Ladezeit außer der des X60 Ultra, eine IP-Schutzart, Nutzlast, Fahrgeschwindigkeit, Reinigungsbreite, stündliche Flächenleistung oder Mindestdurchfahrt; alle USPs, vollständigen Portfolios und eine Marktführerschaft bleiben unbelegt.

808 Unit-Tests in 64 Dateien, 34 Browserfälle mit acht Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 691 Produktdetailprüfungen bleiben offen.

## Ergänzung 193 – Roborock-Produktseiten, Variantenabgrenzung und Dreame-Korrekturen (4. November 2026)

Zwei erstmals geprüfte Katalogzeilen (Qrevo Master und Qrevo Pro) und vier überarbeitete Feldprüfungen (Q8 Max+, Q5 Max+, Aqua10 Ultra Roller Complete und W10 Pro) umfassen 108 Felder: 30 dokumentiert, 77 nicht dokumentiert und eines widersprüchlich. Keine neuen Modelle. Gesamt: 2.380 Katalogzeilen, 1.424 Feldprüfungen mit 26.701 Feldern, 1.440 datierte Merkmalssätze mit 6.675 Aussagen und 3.005 Produktquellenverweisen. 181 Firmenfokusse bleiben unverändert. Die gespeicherte Coverage-Datei und ihre abgeleiteten Prüfsummen sind auf diese tatsächlichen Daten aktualisiert; zuvor enthielt sie veraltete Summen. Die ursprünglichen 518 Queue-Ziele bleiben teilgeprüft; 956 Katalogzeilen haben weiterhin keine ausgewählte Feldprüfung. Dauerbeleg: `reports/competitor-batch-193-evidence.json`.

Qrevo Master erhält die passende US-Übersicht statt der Shop-URL, die auf Qrevo S5V weiterleitet: Herstellerangaben sind 10.000 Pa, DuoRoller Riser, ausfahrbare Seitenbürste und Randmopp, bis 200 U/min, 30 Wasserstufen, 10 mm Mopp-Anhebung, 60-Grad-Wäsche, 45-Grad-Trocknung und 62 Objekttypen in 20 Kategorien. Maße: 350 × 353 × 103 mm; Dock: 340 × 487 × 521 mm. Qrevo Pro: 7.000 Pa, ausfahrbarer Randmopp, bis 200 U/min, 30 Wasserstufen, 10 mm Anhebung und 350 × 353 × 96,5 mm; die regionale Zu-/Abwasser-Variante samt Reinigungsmitteltank und Installationsfreiraum ist ausdrücklich getrennt. Für beide sind unbelegte Preis-, Akku- und Laufzeitangaben geleert; beim Pro auch die Masse. Keine Laufzeit wird aus Akkuangaben oder anderen Modellen berechnet.

Die globale Q8-Max-Seite ordnet RockDock Plus ausdrücklich dem Q8 Max+ zu und belegt 350 × 353 × 96,5 mm, 5.200 mAh sowie bis 240 Minuten und 300 m² im Quiet-Modus auf Hartboden. Sowohl die frühere als auch die aktuelle Shop-Seite tragen jedoch den Zusatz TT; der Preis von 819,99 USD wird deshalb nicht weiter pauschal der generischen Katalogzeile zugeordnet. Beim Q5 Max+ sind der kompatible 180-ml-Tank und Mopp ausdrücklich separat verkauft; keine enthaltene Wasserbehälterkapazität wird eingetragen. Maße: 353 × 350 × 96,5 mm, Dock: 305 × 440 × 425 mm; bis 240 Minuten und 350 m² gelten im Hersteller-Testmodus. Die archivierte US-Quelle vom 3. November nennt ausdrücklich 16 lbs Robotermasse und 329,99 USD; diese Belege behalten ihr Datum.

Diese Ergänzung korrigiert Batch 192: Die verlinkte Aqua10-Seite nennt Aqua10 Ultra Roller, belegt aber weder die Complete-Identität noch deren Zubehörpaket. Preis, Masse, Maße, Akku und Tanks werden aus der Complete-Zeile zurückgenommen; die ID bleibt zur weiteren Identitätsklärung bestehen. Beim W10 Pro widersprechen sich 334 mm und 13,74 in (etwa 349 mm) für die erste Abmessung. Beide Angaben und ihr Widerspruch werden sichtbar gemacht. Die Quellen-Dateiverweise für Matrix10 Pro und X60 Ultra zeigen jetzt auf die tatsächlich zugehörigen Dateien. Frühere Aussagen bleiben in den historischen Berichten nachvollziehbar und werden für diese Punkte durch die vorliegende Korrektur ersetzt.

Zwölf native HTML-Antworten sind gehasht geprüft, darunter vier wiederverwendete Herstellerbelege aus früheren Batches. Zwei Pfade führen zur globalen Startseite und wurden als Modellbeleg verworfen; zwei aktuelle Shop-Antworten dienen nur der Gegenprüfung. Acht Belegantworten tragen die ausgewählten Prüfungen. Kein Recherchebrowser, keine OCR oder Medienübernahme. Hersteller-Leistungsangaben sind keine unabhängigen Tests; vollständige Marktdeckung, sämtliche USPs und Marktführerschaft sind nicht nachgewiesen.

808 Unit-Tests in 64 Dateien, 32 Browserfälle einschließlich 24 Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 689 Produktdetailprüfungen bleiben offen.

## Ergänzung 194 – Fünf Roborock-Modelle mit expliziten Testbedingungen und sauberer Variantenabgrenzung (4. November 2026)

S5 Max, S7, Q7 Max, Qrevo Curv 2 Flow und Qrevo Edge 3 Pro erhalten erstmals ausgewählte Feldprüfungen: 90 Felder, davon 24 dokumentiert und 66 nicht dokumentiert. Hinzu kommen 25 Merkmalsaussagen und fünf Herstellerquellenverweise. Keine neuen Katalogmodelle oder Firmenfokusse. Gesamt: 2.380 Katalogeinträge, 1.429 Feldprüfungen mit 26.791 Feldern, 1.445 datierte Merkmalssätze, 6.700 Aussagen und 3.010 Produktquellenverweise; 181 Firmenfokusse bleiben unverändert. Die übrigen 2.375 Katalogzeilen und sämtliche früheren Reviews bleiben erhalten. Die gespeicherten Coverage-Summen und ihre abgeleiteten Prüfsummen sind aktualisiert. 951 Katalogmodelle haben weiterhin keine Feldprüfung; die ursprünglichen 518 Queue-Ziele bleiben technisch teilgeprüft. Dauerbeleg: `reports/competitor-batch-194-evidence.json`.

S5 Max: Herstellerangaben sind 2.000 Pa, 290 ml elektronisch geregeltes Wasser, eine peristaltische Pumpe, 300 g Moppdruck und ein mit 300 U/min rotierender Laser-Entfernungsmesser. Bis drei Stunden Laufzeit gelten im Quiet-Modus mit vollem Akku ohne angebrachtes Wischsystem. Der Überblick nennt weder Akkukapazität noch Maße, Masse oder Preis; bisherige Katalogschätzungen werden geleert. Die 300 g sind Moppdruck, keine Nutzlast; 2.000 Pa sind keine Fahrgeschwindigkeit. S7: 2.500 Pa, bis 3.000 Wischbewegungen pro Minute, 5 mm Mopp-Anhebung für Teppiche bis 4 mm Florhöhe, 5.200 mAh, 470 ml Staubbehälter und 300 ml Wassertank. Bis drei Stunden gelten im Quiet-Modus auf Hartboden ohne angebrachtes Wischsystem; 200 m² Wischfläche sind ein separater Herstellertest mit niedrigem Wasserdurchfluss. Der S7+-Absaugdock wird dem Standard-S7 nicht als enthalten zugeordnet.

Q7 Max: Die exakte US-Shop-Seite belegt 4.200 Pa, gleichzeitiges Saugen/Wischen, App-Wasserkontrolle, PreciSense LiDAR, 3D-Karten und einen waschbaren E11-Filter. Auto-Empty Dock Pure ist als kompatibel bezeichnet; das belegt keine Lieferung im Basispaket. Der gelistete Preis beträgt 159,99 USD gegenüber 599,99 USD regulär, die Seite ist zum Prüfzeitpunkt ausverkauft. Akku, Laufzeit und Tankangaben des Q7 Max+ aus der gemischten Serienübersicht werden dem Basismodell nicht übertragen. In allen drei älteren Katalogzeilen sind die fälschlich als Geschwindigkeit eingetragenen Pa-Werte entfernt; die belegte Saugleistung bleibt in Beschreibung und Merkmalen erhalten.

Qrevo Curv 2 Flow: 20.000 Pa, SpiraFlow-Roller bis 220 U/min, acht Frischwasser-Zufuhrpunkte, 270 mm Rollenbreite, Abstreifer mit Schmutzwassertrennung, bis 15 mm Anhebung und physischer Teppichschutz. Die Rollenbreite wird ausdrücklich als solche dokumentiert, ohne eine Gesamt-Reinigungsbreite oder Flächenleistung daraus abzuleiten. Die Station wäscht bis 75 Grad, trocknet mit 55 Grad und nennt bis 65 Tage zwischen manuellen Staubentleerungen. Robotermasse, Akku, Laufzeit und Tanks bleiben unbelegt; Maße: 353 × 353 × 119 mm, Dock 450 × 450 × 450 mm. Qrevo Edge 3 Pro: beworbene 36.000 Pa, AdaptiLift Chassis 3.0 mit Kletterarm, 1,77 plus 1,69 in Doppelstufenüberwindung, versenkbares RetractSense-LDS, bis 14 N Moppdruck und 200 U/min. Die 7,95-cm-Freiraumangabe ist von den veröffentlichten Robotermaßen 13,86 × 13,78 × 3,14 in getrennt. Reactive AI und VertiBeam nennen über 300 Objekttypen; der Dock nennt bis 100-Grad-Wäsche, 55-Grad-Lufttrocknung, Reinigungsmitteldosierung und Warmwasser-Nachfüllung. Preis, Masse, Akku, Laufzeit und Tankkapazität werden im Überblick nicht publiziert.

21 Antwortkörper sind gehasht gesichert, fünf passende native HTML-Seiten tragen die Produktprüfungen. 16 Antworten bleiben ausgeschlossen: generische oder fremde Modellziele, nicht aufgelöste Serienzuordnung, fehlende Übersetzungen, 404 oder 429. Ein weiterer Versuch endete in einer protokollierten Weiterleitungsschleife. Besonders relevant: Die S8-Pro-Ultra-Shop-URL führt jetzt zu Saros 10R; deren Daten werden nicht übernommen. S6 MaxV und E5 bleiben mangels brauchbarer exakter Texte in dieser Runde ungeprüft. Kein Recherchebrowser, keine OCR oder Medienübernahme. Herstellerangaben ersetzen keine unabhängigen Leistungstests; vollständige Marktdeckung, alle USPs und Marktführerschaft bleiben unbewiesen.

808 Unit-Tests in 64 Dateien, 32 Browserfälle einschließlich 20 Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.250 Hinweise. 684 Produktdetailprüfungen bleiben offen.

## Ergänzung 195 – Sechs Hiwonder-Bildungs- und Manipulationssysteme mit Kit- und Variantenabgrenzung (4. November 2026)

ROSPug, MaxArm, MasterPi, xArm 2.0, ArmPi FPV und LeArm AI erhalten erstmals ausgewählte Feldprüfungen: 110 Felder, davon 46 dokumentiert und 64 nicht dokumentiert. Hinzu kommen 30 Merkmalsaussagen und sechs Herstellerquellenverweise. Keine neuen Katalogmodelle oder Firmenfokusse. Gesamt: 2.380 Katalogeinträge, 1.435 Feldprüfungen mit 26.901 Feldern, 1.451 datierte Merkmalssätze, 6.730 Aussagen und 3.016 Produktquellenverweise; 181 Firmenfokusse bleiben unverändert. Die übrigen 2.374 Katalogzeilen und sämtliche früheren Reviews bleiben erhalten. Die gespeicherten Coverage-Summen und ihre abgeleiteten Prüfsummen sind aktualisiert. 945 Katalogmodelle haben weiterhin keine Feldprüfung; die ursprünglichen 518 Queue-Ziele bleiben technisch teilgeprüft. Dauerbeleg: `reports/competitor-batch-195-evidence.json`.

ROSPug: Die Produktseite belegt 12 angetriebene Beingelenke, Jetson Nano plus separaten MCU, 334 × 211 × 210 mm, etwa 1,65 kg Robotermasse und 3.500 mAh bei 11,1 V. Die 3,1 kg Paketmasse sind davon getrennt. TOF-LiDAR, IMU, 8-Megapixel-Kamera, OpenCV-Anwendungen, ROS/Gazebo und inverse Kinematik für Ripple- und Trot-Gang sind beschrieben. Der Preis von 1.129,99 USD gilt zum Prüfzeitpunkt. Laufzeit, Nutzlast, Fahrgeschwindigkeit, Ladezeit, Altersempfehlung und IP-Schutz sind in den geprüften Produkt- und Spezifikationsabschnitten nicht publiziert; Kundenfragen und -antworten wurden nicht als Produktbeleg verwendet. Gelenkmoment und Akkukapazität werden nicht in Nutzlast beziehungsweise Laufzeit umgerechnet. MaxArm: Die Herstellerspezifikation nennt 4 DOF und einen Sauggreifer statt der bisherigen Katalogangabe von 3 DOF und mechanischem Greifer. 158 × 160 × 260 mm, 1,3 kg und ein 12-V-5-A-Netzteil sind belegt. Starter, Standard, Advanced und Developer unterscheiden sich bei Sensoren, WonderCam, Funksteuerung und Schiene; Preise: 199,99, 249,99, 299,99 und 879,99 USD. Vision und Schiene werden nicht als Grundausstattung generalisiert.

MasterPi: Vier Mecanum-Räder und ein Arm mit 4 DOF plus Greifer sind spezifiziert; die bisherige Katalogangabe von 5 DOF wird damit präzisiert. 185 × 162 × 343 mm und 1.100 g sind Roboterdaten, nicht das 1,6-kg-Paket. Der 18650-Akku ist ohne Kapazität gelistet; 60 Minuten Dauerbetrieb gelten ohne definierte Last oder Board-Konfiguration. Einstiegspreise sind 189,99 USD ohne Raspberry Pi 4B und 219,99 USD ohne Raspberry Pi 5; die sechs Varianten reichen bis 509,99 USD. xArm 2.0: 6 DOF werden ausdrücklich als fünf Armachsen plus Greifer gezählt, bei 277 × 155 × 426 mm, etwa 1,2 kg und 329,99 USD. Scratch 3.0, Python, PC/App-Programmierung und Offline-Handsteuerung sind beschrieben; quantifizierte Nutzlast, Reichweite, Wiederholgenauigkeit und Bewegungsgeschwindigkeit bleiben offen. ArmPi FPV: Raspberry Pi 4B/5, ROS, OpenCV, inverse Kinematik und ROS MoveIt sind belegt. Die Greiflast beträgt maximal 1.500 g im gebeugten und mehr als 500 g im gestreckten Zustand; daraus wird keine universelle Nutzlast abgeleitet. Das Standard-Kit ohne Raspberry Pi kostet 299,99 USD, mit Raspberry Pi 5 (2 GB) 429,99 USD. Das separat beschriebene ArmPi-Pro-Mecanum-Chassis mit 12.000-mAh-Akku wird dem Standard-ArmPi-FPV nicht als Serienausstattung zugeordnet.

LeArm AI: Die Seite beschreibt sechs Servos und listet getrennt PWM- und Bus-Servo-Versionen; eine Servo-Konfiguration wird nicht über alle Kits verallgemeinert. 283 × 130 × 461 mm, 1,24 kg für das Standard-Kit und ein 7,5-V-6-A-Netzteil sind spezifiziert. Vision-, Sprach- und Sensoranwendungen hängen von Erweiterungsmodulen ab; das Advanced-Kit nennt Sensormodule ausdrücklich. Preise: 199,99 USD Standard, 249,99 USD Intermediate und 319,99 USD Advanced. Maße und Massen der WonderMV- und WonderEcho-Module sind keine Gesamtarmdaten. Quantifizierte Nutzlast, Reichweite, Wiederholgenauigkeit, Bewegungsgeschwindigkeit, Akku/Laufzeit, Ladezeit, Altersempfehlung, IP-Schutz und Erstveröffentlichungsjahr bleiben in den geprüften Abschnitten offen.

Neun Antwortkörper sind gehasht gesichert, sechs exakte native Produktseiten tragen die Prüfungen. Drei Antworten mit HTTP 429 bleiben ausgeschlossen: die Sammlungsseite, xArm 1S und ein erster LeArm-AI-Abruf; der zweite LeArm-Abruf war erfolgreich. xArm 1S bleibt daher ohne Feldprüfung. Leere Warenkorb-Elemente wurden nicht als Produktinhalt gewertet; Cross-Sell-, Modul- und Chassis-Angaben wurden nicht übertragen. Kein Recherchebrowser, keine OCR oder Medienübernahme. Herstellerangaben ersetzen keine unabhängigen Leistungstests; vollständige Marktdeckung, alle USPs und Marktführerschaft bleiben unbewiesen.

808 Unit-Tests in 64 Dateien, 38 Browserfälle einschließlich 24 Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.252 Hinweise. 684 Produktdetailprüfungen bleiben offen.

## Ergänzung 196 – Neun MOVA-Modelle mit Dock-, Schwellen- und Testbedingungsabgrenzung (4. November 2026)

V50 Ultra Complete, P50 Pro Ultra, Z60 Ultra Roller Complete, P10 Pro Ultra, P10 Pro Ultra Gen2, E30 Pro+, E40 Ultra, Mobius 60 und P50 Ultra erhalten erstmals ausgewählte Feldprüfungen: 162 Felder, davon 54 dokumentiert und 108 nicht dokumentiert. Hinzu kommen 45 Merkmalsaussagen und neun Herstellerquellenverweise. Keine neuen Katalogmodelle oder Firmenfokusse. Gesamt: 2.380 Katalogeinträge, 1.444 Feldprüfungen mit 27.063 Feldern, 1.460 datierte Merkmalssätze, 6.775 Aussagen und 3.025 Produktquellenverweise; 181 Firmenfokusse bleiben unverändert. Die übrigen 2.371 Katalogzeilen und sämtliche früheren Reviews bleiben erhalten. Die gespeicherten Coverage-Summen und ihre abgeleiteten Prüfsummen sind aktualisiert. 936 Katalogmodelle haben weiterhin keine Feldprüfung; die ursprünglichen 518 Queue-Ziele bleiben technisch teilgeprüft. Dauerbeleg: `reports/competitor-batch-196-evidence.json`.

V50 Ultra Complete: 24.000 Pa, Dual-Rotationsmopp mit 260 U/min, 20 Wasser nozzles und StepMaster für Hindernisse bis 6 cm. Der 6.400-mAh-Akku wird nicht in Laufzeit umgerechnet. Die Station nennt einen 3,2-L-Staubbeutel mit bis zu 100 Tagen, 60-Grad-Lufttrocknung und zwei Reinigungslösungsbehälter mit 400 ml und 200 ml. Der Preis von 799 USD ist gelistet, beide eingebetteten Varianten sind ausverkauft. P50 Pro Ultra: 19.000 Pa, 350 × 350 × 103,8 mm bei 4 kg Robotermasse, Dock 420 × 458 × 470 mm bei 9 kg. Der Dock nennt 4 L Frisch- und 3,5 L Schmutzwasser, 75-Grad-Moppwäsche und 45-Grad-Trocknung; der Roboterschmutzbehälter fasst 300 ml. 5.200 mAh, 22 mm Hindernisüberwindung, ausfahrbare Seitenbürste und Mopp sowie RGB-Schmutzerkennung sind beschrieben. Preis: 449 USD; eine Variante ist vorrätig, eine ausverkauft. Dock-Tanks werden nicht als Robotertank dokumentiert.

Z60 Ultra Roller Complete: 28.000 Pa, 4.100 Pa Moppandruck, 3,15 in beziehungsweise 8 cm Hindernisüberwindung und 96 mm Bauhöhe. Die Rollenmoppbreite beträgt 10,08 in und lässt sich um 1,61 in erweitern; das ist keine Gesamt-Reinigungsbreite oder Flächenleistung. AutoShield schützt erkannte Teppiche, FlexScope versenkt den Sensor, Binocular AI erkennt laut Hersteller über 200 Hindernistypen. Der Dock nennt 80-Grad-Wäsche, Dual-Solution, automatisches Entleeren und einen 3,2-L-Beutel für bis zu 100 Tage. Preis: 1.199 USD, vorrätig. Robotermasse, vollständige Maße, Akku, Laufzeit, Ladezeit, IP-Schutz und Nutzlast bleiben offen; 96 mm sind keine vollständige Hülle.

P10 Pro Ultra: 13.000 Pa, 350 × 350 × 97 mm, 4,05 kg, Dock 350 × 457 × 590 mm bei 8,83 kg, 5.200 mAh, 22 mm Hindernisüberwindung, 300 ml Staubbehälter, 3,2-L-Dockbeutel sowie 4,5 L Frisch- und 4 L Schmutzwasser. Preis: 399 USD, vorrätig. P10 Pro Ultra Gen2: 26.000 Pa, 12 N Moppandruck, 260 U/min, 0,41 in Mopp-Anhebung, 212 °F beziehungsweise 100 Grad Wäsche, einstündige Trocknung, 3,2-L-Beutel, 300 ml Staubbehälter und 4,5/4 L Docktanks. Maße: 13,78 × 13,78 × 4,09 in; Preis: 499 USD, vorrätig. Beide Dock-Tankangaben werden nicht als Robotertank geführt.

E30 Pro+: 19.000 Pa, 350 × 350 × 97,6 mm, Dock 288 × 414,7 × 440,2 mm, 5.200 mAh, 20 mm Hindernisüberwindung, 500 ml Staubbehälter, 5-L-Beutel und 350 ml Robotertank. Der 5-L-Beutel trägt die Herstellerangabe bis 90 Tage. Preis: 299 USD, vorrätig. E40 Ultra: 19.000 Pa, 80 ml Robotertank, 5.200 mAh und bis 260 Minuten leises Saugen beziehungsweise 220 m² im Hersteller-Intern-Test. Die 10,5-mm-Moppanhebung wird mit 22 mm Höhenunterschied vor und nach dem Anheben erklärt; dieser Wert ist keine Schwellen- oder Hindernisangabe. Der Mopp fährt bis 4 cm aus, der 3,2-L-Beutel trägt eine 75-Tage-Angabe. Preis: 449 USD, vorrätig.

Mobius 60: 30.000 Pa, 3,14 in beziehungsweise 8 cm Hindernisüberwindung, 100-Grad-Wäsche, über 240 Hindernistypen, 4 cm Mopp-Ausfahren, MopSwap mit drei Mopppads und zwei Staubbeutel. Preis: 849 USD gegenüber 1.299 USD Vergleichspreis, vorrätig. Akku, Laufzeit, Maße, Masse, Robotertank, Reinigungsbreite und Ladezeit bleiben offen. P50 Ultra: 19.000 Pa, 5.200 mAh, 80 ml Robotertank, 22 mm Hindernisüberwindung, 10,5 mm Mopp-Anhebung, 300 ml Staubbehälter, 3,2-L-Dockbeutel, 75-Grad-Wäsche und 45-Grad-Trocknung. Preis: 599 USD, vorrätig. Maße, Masse, Laufzeit, Reinigungsbreite und Ladezeit werden nicht publiziert.

Elf Antwortkörper sind gehasht gesichert, neun exakte native Produktseiten tragen die Prüfungen. Zwei Antworten bleiben ausgeschlossen: S20 Ultra mit HTTP 404 und der erste P50-Ultra-Abruf mit HTTP 429; der wiederholte P50-Abruf war erfolgreich. Keine generische Sammlung, kein fremdes Modell und keine Zubehörseite wurde ersetzt. Kundenbewertungen, Cross-Sell-Produkte und Zubehörangaben wurden nicht übertragen. Kein Recherchebrowser, keine OCR oder Medienübernahme. Herstellerangaben ersetzen keine unabhängigen Leistungstests; vollständige Marktdeckung, alle USPs und Marktführerschaft bleiben unbewiesen.

808 Unit-Tests in 64 Dateien, 56 Browserfälle einschließlich 36 Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.252 Hinweise. 684 Produktdetailprüfungen bleiben offen.

## Ergänzung 199 – Fünf HOBOT-Fensterputzroboter mit Sicherheitslast-, USV- und Hubfrequenzabgrenzung (4. November 2026)

S7 Pro, HOBOT-SP10, HOBOT-2S, HOBOT-R3 und HOBOT-388 erhalten erstmals ausgewählte Feldprüfungen: 95 Felder, davon 24 dokumentiert und 71 nicht dokumentiert. Hinzu kommen 25 Merkmalsaussagen und fünf Herstellerquellenverweise. Keine neuen Katalogmodelle oder Firmenfokusse. Gesamt: 2.380 Katalogeinträge, 1.449 Feldprüfungen mit 27.158 Feldern, 1.465 datierte Merkmalssätze, 6.800 Aussagen und 3.030 Produktquellenverweise; 181 Firmenfokusse bleiben unverändert. Die übrigen 2.375 Katalogzeilen und sämtliche früheren Reviews bleiben erhalten. Die gespeicherten Coverage-Summen und ihre abgeleiteten Prüfsummen sind aktualisiert. 931 Katalogmodelle haben weiterhin keine Feldprüfung; die ursprünglichen 518 Queue-Ziele bleiben technisch teilgeprüft. Dauerbeleg: `reports/competitor-batch-199-evidence.json`.

S7 Pro: Duale oszillierende Mopptücher mit 600 Hüben pro Minute bei 4 mm Hubweg, zwei Ultraschall-Sprühdüsen und dynamischer Unterdruck für vertikale Glasflächen. Die Notstrom-USV hält den Roboter bei Stromausfall laut Hersteller 20 Minuten an der Scheibe; das 4,5 m Sicherheitsseil ist für 230 kgf ausgelegt und das Stromkabel misst 4,5 m. Die Hubfrequenz von 600 Hüben/min ist keine Fahrgeschwindigkeit; die Seilfestigkeit ist keine Nutzlast und die USV-Pufferzeit keine Reinigungslaufzeit. Preis, Robotermasse, Abmessungen, Akku, Reinigungsbreite und Stundenflächenleistung werden nicht publiziert.

HOBOT-SP10: Spray-Sweep-Scrape-Verfahren mit dualen Sprühdüsen, Mikrofaserbezug und dualen Abstreifern. 6.000 Pa statischer Unterdruck, Betrieb auf Fenstern mit 7 bis 100 Grad Neigung, 4,5 m Sicherheitsseil mit 230 kgf Zugkraft, 4 m Netzkabel und 20 Minuten USV-Haltezeit. Rahmensensoren erkennen Dichtungsspalten unter 5 mm und Rahmen unter 2 mm auf über 50 Rahmentypen. Statischer Unterdruck ist keine Fahrgeschwindigkeit; Seilzugkraft und USV-Zeit sind weder Nutzlast noch Reinigungsdauer. Preis, Robotermasse, Abmessungen, Akku, Reinigungsbreite und Stundenflächenleistung bleiben offen.

HOBOT-2S: Duale Ultraschall-Sprühdüsen zerstäuben Wasser in 15-Mikrometer-Tröpfchen. Der Hersteller nennt 7 kg Steigkraft, 12 cm/s Fahrgeschwindigkeit und 1 m² in 2,4 Minuten mit einem 24 × 24 cm Tuch. Das 4,5 m Sicherheitsseil ist für 200 kg spezifiziert, das Netzkabel misst 5 m und die USV hält 20 Minuten. 7 kg Steigkraft sind keine Nutzlast; 12 cm/s Fahrgeschwindigkeit und 2,4 min/m² sind Herstellerangaben zur Flächenrate, keine Vollflächengarantie. Preis, Robotermasse, Abmessungen, Akku, Reinigungsbreite und IP-Schutz bleiben ungenannt.

HOBOT-R3: Duale Ultraschall-Sprühdüsen mit 15 Mikrometer Tröpfchen und zwei rotierende Reinigungsscheiben. 1,3 ml Wasserverbrauch pro m², 4,5 m Sicherheitsseil (200 kg), 4 m Netzkabel und 20 Minuten USV-Notstrom. Wasserverbrauch pro m² ist kein Tankvolumen; Seilfestigkeit und USV-Zeit sind weder Nutzlast noch Reinigungsdauer. Preis, Robotermasse, Abmessungen, Akku, Reinigungsbreite und Stundenflächenleistung werden nicht publiziert.

HOBOT-388: Ultraschall-Wasserzerstäubung auf 15 Mikrometer, zwei mit bis zu 70 U/min rotierende Reinigungsscheiben, Flächenleistung von 4 min pro m², 4,5 m Sicherheitsseil (200 kg), 4 m Stromkabel und 20 Minuten USV-Haltezeit. 70 U/min und 4 min/m² sind Wischparameter, keine lineare Fahrgeschwindigkeit oder Deckungsgarantie. Preis, Robotermasse, Abmessungen, Akku, Reinigungsbreite und IP-Schutz werden nicht publiziert.

Sechs Antwortkörper sind gehasht gesichert, fünf exakte native Produktseiten tragen die Prüfungen. Ein HTTP-429-Abruf für HOBOT-298 bleibt sauber ausgeschlossen; kein Ersatzmodell oder Händler wurde substituiert. Kein Recherchebrowser, keine OCR oder Medienübernahme. Herstellerangaben ersetzen keine unabhängigen Leistungstests; vollständige Marktdeckung, alle USPs und Marktführerschaft bleiben unbewiesen.

808 Unit-Tests in 64 Dateien, 32 Browserfälle einschließlich 20 Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.252 Hinweise. 684 Produktdetailprüfungen bleiben offen.

## Ergänzung 200 – ECOVACS DEEBOT mini und fünf GOAT Mähroboter mit Stations-, Spannungs- und Drehzahl-Abgrenzung (4. November 2026)

DEEBOT mini, GOAT G1, GOAT G1-800, GOAT O500 Panorama, GOAT A1600 RTK und GOAT O800 RTK erhalten erstmals ausgewählte Feldprüfungen: 104 Felder, davon 43 dokumentiert und 61 nicht dokumentiert. Hinzu kommen 30 Merkmalsaussagen und sechs Herstellerquellenverweise. Keine neuen Katalogmodelle oder Firmenfokusse. Gesamt: 2.380 Katalogeinträge, 1.455 Feldprüfungen mit 27.262 Feldern, 1.471 datierte Merkmalssätze, 6.830 Aussagen und 3.036 Produktquellenverweise; 181 Firmenfokusse bleiben unverändert. Die übrigen 2.374 Katalogzeilen und sämtliche früheren Reviews bleiben erhalten. Die gespeicherten Coverage-Summen und ihre abgeleiteten Prüfsummen sind aktualisiert. 925 Katalogmodelle haben weiterhin keine Feldprüfung; die ursprünglichen 518 Queue-Ziele bleiben technisch teilgeprüft. Dauerbeleg: `reports/competitor-batch-200-evidence.json`.

DEEBOT mini: Kompakter Saug- und Wischroboter mit passender OMNI-Station. 28,6 cm Roboterbreite, 89 % Reinigungsabdeckung laut Hersteller, OZMO Turbo 2.0 rotierende Doppel-Wischmopps, 9.000 Pa Saugleistung, bis zu 150 Minuten Laufzeit pro Ladung, 17 mm Schwellenüberwindung und 55 dB Betriebsgeräusch (70 dB bei Staubabsaugung). TrueMapping 2.0 kartiert 100 m² in 6 Minuten über LDS-Radar und Lasersensor; die OMNI-Station ist 38,5 cm hoch mit 45 °C Heißlufttrocknung. 28,6 cm Breite und 38,5 cm Stationshöhe sind keine Vollabmessungen des Roboters; 150 Minuten Laufzeit sind keine Akkukapazität. Preis, Masse, Akku, Ladezeit, Reinigungsbreite, Stundenflächenleistung, Wassertank und IP-Schutz bleiben ungenannt.

GOAT G1: Kabelloser Mähroboter mit zwei Funkbaken und Navigations-Hilfsstange, TrueMapping Multi-Fusion Lokalisierung und AIVI 3D RGBD-Hindernisvermeidung. 22 cm Schnittbreite, 30–60 mm Schnitthöhe, 5.200 mAh Lithium-Ionen-Akku mit 3 A Ladestrom, 59 dBA Betriebsgeräusch, IPX6 am Mähroboter (IPX4 an der Station, IPX6 an den Baken). Robotergewicht 23,4 kg und Maße 650 × 432 × 420 mm. Bis zu 1.600 m² Rasenfläche und 600 m² Tagesmähleistung. 600 m²/Tag ist eine Tagesangabe, keine Stundenflächenrate; Stationsmaße sind keine Roboterabmessungen. Preis, Laufzeit, Fahrgeschwindigkeit, Ladezeit und Steigfähigkeit bleiben offen.

GOAT G1-800: Kabelloser Mähroboter mit VSLAM/UWB-Navigation, AIVI 3D RGBD-Hinderniserkennung und bis zu 16 Mähzonen. 100–150 m²/h Flächenleistung bei 800 m² Nennrasenfläche, 22 cm Schnittbreite, 3–6 cm Schnitthöhe, 4.000 mAh Lithium-Ionen-Akku, 59 dBA, IPX6 (Station IPX4, Baken IPX6), 650 × 432 × 420 mm Maße und 23,19 kg Nettogewicht. Das Modell ist auf der Herstellerseite als ausverkauft markiert. Preis, Laufzeit, Fahrgeschwindigkeit, Ladezeit und Neigungswinkel bleiben ungenannt.

GOAT O500 Panorama: LiDAR-Mähroboter mit LELS Panorama (LiDAR und Dualkameras), der nach Einrichtung ohne RTK-Referenzstation auskommt. 500 m² Mähfläche, 120 m²/h Flächenleistung, 22 cm Schnittbreite, 3–8 cm Schnitthöhe in 0,5 cm Stufen, 4.000 mAh Akku, 58 dBA, IPX6 an Mähroboter und Station, 600 × 400 × 276 mm Maße, 706 × 430 × 327 mm Stationsmaße und 11 kg Gewicht. Steigungen bis 50 % (24 Grad), 3 cm Hindernisse, 0,7 m Engstellen und automatische Kartierung in 5 Minuten. Preis, Laufzeit, Fahrgeschwindigkeit und Ladezeit bleiben ungenannt.

GOAT A1600 RTK: Mähroboter auf 32 V Plattform mit zwei Messertellern. 0,7 m/s Fahrgeschwindigkeit, 3.000 U/min Messerdrehzahl, 400 m²/h Flächenleistung (500 m² in 2 h im Labortest), 45 Minuten Ladezeit bei 180 W, 3–9 cm Schnitthöhe in 1 cm Stufen, 2 cm RTK-Positionierungsgenauigkeit, 50 % (27 Grad) Steigfähigkeit, 4 cm Hindernisüberwindung und IPX6. 32 V ist Plattformspannung, keine Akkukapazität; Messerdrehzahl ist keine Fahrgeschwindigkeit. Preis, Robotermasse, Abmessungen, Akku, Laufzeit und Schnittbreite bleiben offen.

GOAT O800 RTK: LiDAR-gestützter RTK-Mähroboter mit 2 cm Positionierungsgenauigkeit, bis zu 45 Satelliten über 80 % mehr Signalbänder und 15 Minuten kabellose Einrichtung. IPX6, 0,7 m Engstellen-Passierbarkeit, 45 % (24 Grad) Steigung, 3 cm Barrieren und 3–8 cm Schnitthöhe in 0,5 cm Stufen. Preis, Robotermasse, Maße, Akku, Laufzeit, Fahrgeschwindigkeit, Ladezeit, Schnittbreite und Stundenflächenleistung bleiben ungenannt.

Acht Antwortkörper sind gehasht gesichert, sechs exakte native Produktseiten tragen die Prüfungen. Zwei HTTP-404-Abrufe (T50 Omni, Y1 Pro Plus) bleiben sauber ausgeschlossen; kein Ersatzmodell oder Händler wurde substituiert. Kein Recherchebrowser, keine OCR oder Medienübernahme. Herstellerangaben ersetzen keine unabhängigen Leistungstests; vollständige Marktdeckung, alle USPs und Marktführerschaft bleiben unbewiesen.

808 Unit-Tests in 64 Dateien, 38 Browserfälle einschließlich 24 Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.252 Hinweise. 684 Produktdetailprüfungen bleiben offen.

## Ergänzung 201 – Dreame D10s Plus, L10 Pro, A1 Pro, A2, Roborock QV 35S und RockMow Z1 mit Stations-, Box- und Drehzahl-Abgrenzung (4. November 2026)

Sechs Modelle von Dreame und Roborock erhalten erstmals ausgewählte Feldprüfungen: 108 Felder, davon 52 dokumentiert und 56 nicht dokumentiert. Hinzu kommen 30 Merkmalsaussagen und sechs Herstellerquellenverweise. Keine neuen Katalogmodelle oder Firmenfokusse. Gesamt: 2.380 Katalogeinträge, 1.461 Feldprüfungen mit 27.370 Feldern, 1.477 datierte Merkmalssätze, 6.860 Aussagen und 3.042 Produktquellenverweise; 181 Firmenfokusse bleiben unverändert. Die übrigen 2.374 Katalogzeilen und sämtliche früheren Reviews bleiben erhalten. Die gespeicherten Coverage-Summen und ihre abgeleiteten Prüfsummen sind aktualisiert. 919 Katalogmodelle haben weiterhin keine Feldprüfung; die ursprünglichen 518 Queue-Ziele bleiben technisch teilgeprüft. Dauerbeleg: reports/competitor-batch-201-evidence.json.

Dreame D10s Plus: Saug- und Wischroboter mit selbstentleerender Basisstation. 350 × 350 × 96,8 mm Robotermaße, Station 403 × 403 × 483 mm, 3,24 kg Robotergewicht und 4,35 kg Stationsgewicht, 5.200 mAh Akku, 280 Minuten maximale Laufzeit für Saugen und Wischen im Quiet-Modus, 5.000 Pa Maximalsaugleistung, 63 dB(A) Mindestgeräusch, 400 ml Staubbox, 140 ml Roboter-Wassertank und 4-L-Staubbeutel mit E12-Filter an der Station. Die geprüfte Seite veröffentlicht keine Ladezeit, Reinigungsbreite, Stundenflächenleistung, IP-Schutzart oder Fahrgeschwindigkeit. Der 4-L-Staubbeutel ist kein Robotertank; Stationsmaße sind keine Robotermaße.

Dreame L10 Pro: Saug- und Wischroboter mit Dual-Laser-LiDAR und selbst entwickelten SLAM-Algorithmen. Der Herstellerbeitrag nennt 5.200 mAh Akkukapazität, bis zu 60 Minuten Reinigungszeit, bis zu 2,5 Stunden Ladezeit, 4.000 Pa Saugleistung in vier Stufen, einen 270-ml-Wassertank, eine 570-ml-Staubbox und 65 dBA Geräusch. Der Beitrag ist ein Hersteller-Blogartikel zum genannten Modell und keine Produktspezifikationstabelle; Masse, Maße, Reinigungsbreite, Stundenflächenleistung, IP-Schutz und Fahrgeschwindigkeit bleiben ungenannt. Die frühere 150-Minuten-Akkuangabe wird bereinigt, weil der Beitrag 5.200 mAh Kapazität und 60 Minuten Laufzeit trennt.

Dreame Roboticmower A1 Pro: kabelloser Mähroboter mit OmniSense-3D-Ultra-Sensorik, 3D-LiDAR und omnidirektionaler Hindernisvermeidung. 643 × 437 × 261 mm Robotermaße, Station 778 × 490 × 309 mm, 12 kg Robotergewicht und 3,3 kg Stationsgewicht, 2.000 m² Arbeitsfläche, 1.000 m² pro 24 h im Standard- und 2.000 m² pro 24 h im Effizienzmodus, 3–7 cm Schnitthöhe, 22 cm Schnittbreite, 45 % (24 Grad) Steigung, 5-Ah-Akku, 3 A Ladestrom, 65 Minuten Ladezeit und IPX6. LiDAR wird mit bis zu 70 m Erkennungsdistanz, 360 × 59 Grad Sichtfeld und 1 cm Kartierungspräzision im Dreame-Labor angegeben. Laufzeit, Fahrgeschwindigkeit und Stundenflächenleistung bleiben ungenannt; die 24-Stunden-Angaben sind keine Stundenraten, und Stationsmaße sind keine Robotermaße.

Dreame A2: kabelloser Mähroboter mit OmniSense 2.0, 3D-Ultra-Sensorik mit AI-Kamera, 3D-LiDAR und AI-Vision-Hindernisvermeidung sowie EdgeMaster-Schnitt. 666 × 444 × 273 mm Robotermaße, Station 778 × 490 × 309 mm, 16,3 kg Robotergewicht und 3,3 kg Stationsgewicht, 3.000 m² Mähfläche, 3–7 cm Schnitthöhe, 22 cm Schnittbreite, 1.000 m² pro 24 h Standard und 2.000 m² pro 24 h Effizienz, 50 % (26,5 Grad) Steigung, 5-Ah-Akku, 3 A Ladestrom, höchstens 55 dB und IPX6. Laufzeit, Fahrgeschwindigkeit, Ladezeit und Stundenflächenleistung bleiben ungenannt; die 24-Stunden-Werte sind Laborangaben, keine Stundenraten.

Roborock QV 35S: Saug- und Wischroboter mit Multifunktionsdock. 10.000 Pa HyperForce-Saugleistung, zwei rotierende Wischpads mit bis zu 200 U/min, Anti-Tangle-Seitenbürste, anhebbarer Mopp, 5.200 mAh Lithium-Ionen-Akku, 13,78 × 13,9 × 3,80 Zoll Robotermaße, 25,57 ± 0,66 lb Robotergewicht sowie 549,99 USD Preis bei 749,99 USD Streichpreis. Die geprüfte Seite veröffentlicht keine Laufzeit, Ladezeit, Reinigungsbreite, Stundenflächenleistung, IP-Schutzart oder Fahrgeschwindigkeit. Kartonmaße und Kartongewicht sind keine Robotermaße oder Robotergewicht; 200 U/min Wischpad-Drehung ist keine Fahrgeschwindigkeit.

Roborock RockMow Z1: Allrad-Mähroboter mit aktiver Lenkung, dynamischem Fahrwerk und Sentisphere-Umgebungswahrnehmung, die Netzwerk-RTK mit VSLAM ohne Basisstation fusioniert. 80 % (38,7 Grad) Steigung, 8 cm Hindernisse, 0,8 m Engstellen, 20–70 mm Schnitthöhe, Sechs-Klingen-Doppelschneidblatt, IPX6 und bis zu 5.000 m² pro Tag in einem 24-Stunden-Internentest einschließlich Ladezeit. Preis, Masse, Maße, Akkukapazität, Laufzeit, Fahrgeschwindigkeit, Schnittbreite und Stundenflächenleistung bleiben ungenannt, weil der Spezifikationsreiter der abgerufenen Seite keine Werte rendert. Die frühere 140-Minuten-Akkuangabe wird bereinigt, und die Tagesangabe wird nicht in eine Stundenrate umgerechnet.

Dreizehn Antwortkörper sind gehasht gesichert, sechs exakte Herstellerseiten tragen die Prüfungen. Ausgeschlossen bleiben eine Weiterleitung auf das Dreame A3 AWD Pro, zwei HTTP-429-Abrufe, drei Seiten ohne gerenderte Spezifikationswerte und ein bereits in Batch 190 geprüftes Modell; kein Ersatzmodell oder Händler wurde substituiert. Kein Recherchebrowser, keine OCR oder Medienübernahme. Herstellerangaben ersetzen keine unabhängigen Leistungstests; vollständige Marktdeckung, alle USPs und Marktführerschaft bleiben unbewiesen.

808 Unit-Tests in 64 Dateien, 38 Browserfälle einschließlich 24 Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.252 Hinweise. 684 Produktdetailprüfungen bleiben offen.

## Ergänzung 202 – Eureka, Segway Navimow, Worx und Shark mit Varianten- und OTA-Abgrenzung (5. November 2026)

Sieben bestehende Modelle erhalten erstmals ausgewählte Feldprüfungen: Eureka J15 Max Ultra und J12 Ultra, Segway Navimow i110N, H210 und i2 LiDAR (i215), Worx Landroid Vision M600 (WR206E) sowie Shark PowerDetect NeverTouch Pro (RV2820ZE). 125 Felder sind geprüft, davon 48 dokumentiert und 77 auf den geprüften Seiten nicht dokumentiert; hinzu kommen 35 Merkmalsaussagen und sieben Herstellerquellenverweise. Die sieben HTML-Antworten wurden am 4. November 2026 abgerufen und per SHA-256 geprüft. Abschluss und Veröffentlichung auf dem Arbeitsbranch erfolgen am 5. November. Dauerbeleg: reports/competitor-batch-202-evidence.json.

Gesamt: 2.380 Katalogmodelle, 1.468 Feldprüfungen mit 27.495 Feldern, 1.484 datierte Merkmalssätze, 6.895 Aussagen und 3.049 Produktquellenverweise. Keine neuen Katalogmodelle oder Firmenfokusse; 181 Firmenfokusse bleiben unverändert. Die übrigen 2.373 Katalogzeilen und frühere Reviews bleiben erhalten. 912 Katalogmodelle haben noch keine Feldprüfung. Die ursprünglichen 518 Queue-Ziele bleiben technisch teilgeprüft; die gespeicherte Coverage und ihre abgeleiteten Prüfsummen sind aktualisiert.

Eureka J15 Max Ultra: SweepExtend und ScrubExtend, IntelliView AI 2.0 mit Infrarot- und FHD-Sicht, 6.400 mAh, bis zu 360 Minuten und 13,94 × 13,98 × 4,33 Zoll Robotermaße. Die Seite widerspricht sich mit 22.000 Pa im Werbe-/Vergleichsinhalt und 21.600 Pa im Spec-Block; beide Werte bleiben mit Konflikthinweis sichtbar. Adaptive Teppichstrategien, Pet Area Deep Cleaning und Pet Search sind als künftige OTA-Funktionen gekennzeichnet; Intelligent Strategizing ist Beta und setzt über 1,5 mm dicke Flüssigkeitspfützen voraus. 14,63 kg einschließlich Station sowie 3-L-Staubbeutel und 4/3,4-L-Stationstanks sind keine Roboterwerte. 400 FlexiRazor-Hübe pro Minute sind keine Fahrgeschwindigkeit. Der angezeigte Preis beträgt 1.199,99 USD vor einem separaten Checkout-Rabatt.

Eureka J12 Ultra: Duo Detect AI 3D, LiDAR, App-Zeitpläne und Sperrzonen, 350 × 342,5 × 107,5 mm Robotermaße, 5.200 mAh und bis zu 150 Minuten im Quiet-Modus. Die Station wäscht Mopps, trocknet sie mit 55 °C und wirbt mit 75 Tagen Staubentleerungsintervall. FAQ: bis zu 18 mm Schwellen und Möbelabstände über 350 mm. 16,5 kg einschließlich Station sind kein Robotergewicht. Der modellgenaue Analytics-/Metadatenpreis ist 1.599 AUD; extrahierter Produkttext enthält keinen eigenen Preisblock. Die Tiererkennungszeile nennt E10s und wird J12 Ultra nicht zugeschrieben. Die zuvor behaupteten 5.000 Pa werden mangels Wert auf der geprüften Seite entfernt.

Segway Navimow i110N: bestehende Katalogidentität mit US-i110-Produktseite, deren Name das N-Suffix nicht nennt. Der Kaufblock belegt 1.099 USD, 0,25 acre, EFLS 2.0 aus RTK und Sicht, AI-Kartierung, VisionFence, Mehrzonen-App, 30 % (17 Grad), 58 dB(A) und manuelle 2–3,6 Zoll Schnitthöhe. IP66 und Wi-Fi/Bluetooth sind genannt; 4G-Diebstahlschutz benötigt Access+. Die Vergleichstabelle beginnt bei 0,125 acre und die FAQ nennt i105. Deren Maße, Gewicht, Laufzeit, Ladezeit, Schnittbreite und Stundenleistung werden nicht auf i110N übertragen.

Segway Navimow H210: 0,25-acre-Variante mit 1.799 USD auf der H2-Seite. Serieninhalt: Solid-State-LiDAR + Network RTK + Sicht, GeoSketch, Terrain Adapt und ESC, 45 % (24 Grad), 200+ Hindernistypen, 0,4 Zoll Erkennungspräzision, 100 W Spitzen-Mähmotor, sechs Klingen, bis zu 30 Zonen, IP66 und 60 dB(A) ohne Schneiden. Network RTK setzt Netzabdeckung voraus; Connect+ ist ein separater Dienst mit einem Gratisjahr und 32,90 USD Jahresverlängerung. Die beworbene Tagesleistung von 0,93 acre und Ladevergleiche beruhen ausdrücklich auf H220 und bleiben für H210 ausgeschlossen. Zubehör-Akkukapazitäten und Labor-Fahrgeschwindigkeiten ersetzen keine H210-Spezifikation.

Segway Navimow i2 LiDAR (i215): EFLS aus Solid-State-LiDAR und Sicht, GeoSketch und automatische Kartierung ohne Draht oder Antenne. Die i215-FAQ belegt 25,0 × 17,5 × 11,3 Zoll Robotermaße und 0,37 acre empfohlene Fläche; der bedingte 0,44-acre-Kartenhöchstwert ist keine Stundenrate. Genannt sind 200+ Hindernistypen, 45 % (24 Grad), ESC, 100 W Spitzenleistung, sechs Klingen, bis zu 20 Zonen, IP66 und 59 dB(A) ohne Schneiden. Verkaufspreis 1.399 USD statt 1.599 USD regulär. Gewicht, Akkukapazität, Laufzeit, Ladezeit und Schnittbreite bleiben nicht dokumentiert. Das gemeinsame X430/X450-4G-Popup ist keine i215-Dienstzusage.

Worx WR206E: Vision-only-Mäher mit Full-HD-HDR-Kamera ohne Begrenzungsdraht, RTK-Antenne oder Vorabkarte. 600 m², 626 × 460 × 265 mm, 2 Ah Li-Ion, 18 cm Schnittbreite, manuelle 30–60 mm Schnitthöhe, 30 % Steigung, 59 dB und IPX5. Wetteradaptive Planung, Regensensor, RFID-Mehrzonen, Bluetooth/Wi-Fi und OTA/USB sind beschrieben. Nachtlicht und GPS-Ortung sind optional. Die exakte technische Tabelle zur manuellen Schnitthöhe hat Vorrang vor allgemeiner Smartphone-Werbung. 20 V Max und 1,5 A begründen weder Akkulaufzeit noch Ladezeit; 0,05 Sekunden Bildverarbeitung sind keine Fahrgeschwindigkeit. Preis, Gewicht und Stundenflächenleistung bleiben ungenannt.

Shark RV2820ZE: fünf PowerDetect-Technologien, 360-Grad-LiDAR und 3D-Sensor-Kartierung, NeverStuck, EdgeDetect mit Luftstoß und bis zu einem Zoll ausfahrendem Mopp. Die Station wirbt mit 60 Tagen Staub- und 30 Tagen Wasserversorgung sowie Moppwäsche und -trocknung. Der modellgenaue Vergleichsblock belegt bis zu zwei Stunden Laufzeit im Trockenmodus auf Hartböden; die Tabelle nennt vier Stunden Ladezeit und 5,7 Zoll Reinigungspfad. Verkaufspreis 549,99 USD bei 999,99 USD Streichpreis. Ungetrennte 24,82 lb und 17,52 × 17,32 × 21,38 Zoll werden nicht als reine Roboterwerte geführt. 0,3 qt Staubbehälter sind kein Wassertank; 120 V / 650 W sind keine Akkukapazität. Die 99,97-%-Filteraussage betrifft nichtlebende Allergene ab 0,3 Mikrometern an der Basis.

808 Unit-Tests in 64 Dateien, 44 Browserfälle einschließlich 28 Axe-Prüfungen, 3.431 Build-Seiten, null Audit-Fehler und 1.252 Hinweise. Render- und Vergleichsdatenprüfung sowie erneuter Import ohne zusätzliche Datensätze sind erfolgreich. Eigene Browser, Testserver und Hilfsprozesse sind beendet; Ressourcen anderer Aufgaben bleiben erhalten. Herstellerbehauptungen sind keine unabhängigen Tests oder exklusiven USPs; vollständige Live-Marktdeckung und Marktführerschaft bleiben unbewiesen. 684 Produktdetailprüfungen bleiben offen.

## Ergänzung 203 – 30 Wettbewerber-Detailinhalte mit URL-Prüfregister und korrigiertem Reststand (5. November 2026)

30 konkrete BuyAndRentRobots-Detailseiten sind am 5. November 2026 mit HTTP 200 abgerufen und inhaltlich geprüft: 21 Einträge von Pudu Robotics, zwei von DMA Events, sechs von Fdata Robot und einer von Kawasaki Robotics. Jede Entscheidung bindet die genaue Listing-ID, URL, sichtbaren Modell-/Anbieternamen, Anbieterlink, Antwortkörper-Hash, Inhalts-Hashes, einen kurzen sachlichen Claim und datierte Primärquellen aneinander. Alle 30 normalisierten Beschreibungen stimmen mit dem gespeicherten API-Inventar vom 1. November überein; das beweist Quellenkonsistenz, keine unabhängige Produkteigenschaft. Vollständige fremde Werbetexte und Bilder werden nicht veröffentlicht. Dauerbeleg: reports/competitor-batch-203-evidence.json; maßgebliches Register: data/competitors/detail-content-reviews.json.

Die frühere fortgeschriebene Zahl „684 offene Produktdetailprüfungen“ lässt sich nicht durch eine vollständige Liste von URL-bezogenen Inhaltsentscheidungen belegen. Sie wird für diesen Prüfgegenstand durch den nachvollziehbaren Registerstand ersetzt: 30 von 862 gespeicherten Listings mit Inhaltsentscheidung, 832 noch nicht im aktuellen URL-Register abgedeckt. Frühere, noch nicht in dieses Register überführte Untersuchungen werden dabei weder als neue Prüfung gezählt noch als nie erfolgt bezeichnet. Diese Zählung ist unabhängig von den weiterhin 912 Katalogmodellen ohne Feldprüfung. Sie bescheinigt auch keine vollständige Prüfung des heutigen Live-Inventars.

Zwei Quellenabweichungen bleiben ausdrücklich sichtbar. A011 wird im Verzeichnis mit 100 kg Traglast beschrieben; die erneut abgerufene exakte Herstellerseite nennt 50 kg. Der Katalog behält seinen belegten 50-kg-Wert. Für Pixel nennt das Verzeichnis ein ausdrucksstarkes LED-Gesicht; der Anbieter beschreibt aktuell Pixel Photo Bot als umherfahrendes DSLR-Fotografieangebot. Der LED-Claim ist damit nicht durch den geprüften Anbieterinhalt belegt, aber auch keine ausschließende Hardwarezuordnung bewiesen. Das Kawasaki-A700-Listing wiederholt generische Sicherheits-/Überwachungsaussagen ohne exakte offizielle Produktseite oder Spezifikation; es bleibt als generischer Name mit weiterem Primärquellenbedarf erhalten. Eine fehlende Erwähnung in einem geprüften Portfolio beweist keine Nichtexistenz.

HALO und Pixel behalten ihre quellenbelegte Einordnung als Veranstaltungsangebote von DMA Events ohne erfundenen OEM. PUDU SH1 bleibt ein handgeführtes Reinigungsgerät und wird nicht als autonomer Roboter importiert. D5/D5-W, T150/T300, T600/Underride und A012/A025 behalten ihre Familien-/Variantengrenzen; Familien-Maximalwerte werden keinem beliebigen Modell zugeschrieben. Vier Primärseiten – DMA Events, Fdata A011, Fdata A012 und der Pudu-SH1-Store – wurden ergänzend abgerufen. Frühere technische Reviews behalten ihre ursprünglichen Prüfdaten.

Das neue inkrementelle Skript scripts/collect-buyandrent-details.py prüft echte HTML-Inhalte statt versteckter JavaScript-Fallback-Texte. Leere Seiten, falsche Modelle/Anbieter, doppelte oder versteckte Identitätsfelder und Weiterleitungen zählen nicht als bestandene Inhaltsprüfung. Der Abruf stoppt bei HTTP 429. Antwortkörper werden mit SHA-256 im Dateinamen unveränderlich archiviert; geänderte Inhalte setzen eine frühere Entscheidung wieder auf offen. Die Coverage trennt Versuche, automatisch zugeordnete Inhalte, ausdrücklich geprüfte Inhalte, Quellenabweichungen und weitere Primärquellenarbeit. Ein Offline-Durchlauf reproduziert alle 30 Inhalte und Entscheidungen ohne Netzabrufe und bewahrt ältere Versuche.

815 JavaScript-Tests in 65 Dateien sowie 27 Python-Tests bestehen. Datenaudit: null Fehler und 1.252 Hinweise. Erneuter Import: null Ergänzungen und sämtliche 33 Datenpfade unverändert; die Offline-Coverage-Aktualisierung verändert nur Zeitstempel und deren Prüfsumme. Katalog-CSV, Produktmerkmale, technische Reviews und bestehende Identitätsentscheidungen bleiben bytegleich. Eigene Browser, Testserver und Hilfsprozesse sind freigegeben. Herstellerangaben und Verzeichnisbehauptungen belegen weder exklusive USPs noch Marktführerschaft. 832 Detailinhalte sind noch nicht im aktuellen URL-Register abgedeckt; ein bereits gelesenes A700-Listing benötigt zusätzlich exakte Primärbelege.

## Ergänzung 204 – 40 weitere Detailinhalte, gebundene Nichtmodell-Entscheidungen und neue Quellenkonflikte (5. November 2026)

40 weitere BuyAndRentRobots-Detailseiten wurden am 5. November 2026 mit HTTP 200 abgerufen; URL, sichtbarer Titel, Anbietername, Anbieterlink, Beschreibung und Antwortkörper-Hash stimmen jeweils mit dem gespeicherten Listing überein. Alle 40 normalisierten Beschreibungen entsprechen exakt dem API-Inventar vom 1. November. 37 Seiten erhielten eine datierte Entscheidung: 27 sind mit der belegten Primärquellen-Reichweite vereinbar, eine ist ein Produkttyp-Konflikt und neun benötigen weitere Primärbelege. Drei Seiten – zwei RobotAnno-Getränkeangebote und ein Atlas-Robotics-Platzhalter – bleiben ausdrücklich offen, weil die verlinkten Domains nicht auflösen, nur auf eine Landerseite umleiten oder eine historische Seite mit HTTP 404 antworten. Dauerbeleg: reports/competitor-batch-204-evidence.json; Register: data/competitors/detail-content-reviews.json.

Das Register umfasst damit 70 versuchte und 67 inhaltlich entschiedene von 862 gespeicherten Listings. 795 Einträge sind noch nicht durch eine aktuelle URL-Entscheidung abgedeckt, davon 792 noch nicht abgerufen und drei abgerufen, aber ohne belastbare Primärquelle nicht entschieden. Die 30 Entscheidungen der vorherigen Charge bleiben objektgleich erhalten. Diese Zählung ist unabhängig von den 912 Katalogmodellen ohne Feldprüfung.

Die Coverage-Prüfung akzeptiert nun neben Katalogmodellen und bestehenden Modellklassifikationen zwei weitere, strikt gebundene Provenienzformen: eine vorhandene Listing-Review für generische Produktfamilien oder Software und eine ausdrücklich firmenbezogene Entscheidung für gespeicherte Nichtprodukt-/Service-Einträge. Beide müssen Listing-ID, Name, Anbieter und – soweit einschlägig – Entry-Typ, Firmen-Slug und Quell-URL exakt treffen; Familien-/Modellauflösungen sind für die Listing-Review-Form ausgeschlossen. Neue Tests weisen ungebundene oder fremde Referenzen zurück. Damit werden Firmenslogans und Softwareangebote nicht als erfundene Robotermodelle gezählt.

AstroRinse wird im Verzeichnis als vielseitiger Outdoor-Reinigungsroboter beschrieben. Der Hersteller bezeichnet AstroRinse dagegen als separate Filterreinigungs- und Ladestation im AquaSense-X-Ökosystem, die nach dem Andocken arbeitet. Der Produkttyp-Konflikt wird festgehalten, ohne die Station als mobilen Roboter zu importieren. Aibo wird als menschenähnlicher Roboter für den Einzelhandel unter einem fremden Verlagslink geführt; Sony beschreibt aibo als Begleithund. Die genaue Verzeichnis-Hardware und Anbieterbeziehung bleiben unbelegt, eine automatische Sony-Zuordnung erfolgt nicht. ADAM erscheint unter TGW Logistics, Richtech Robotics und Pilz; die bestehende Namenszuordnung zu Richtech bleibt Kandidat, doch weder Anbieter- noch OEM- oder Bildungsbeziehung sind damit bewiesen.

Die Hannover-Messe-2026-Angabe zu Agile ONE ist jetzt durch eine Herstellerveröffentlichung vom 20. April 2026 belegt. Die Veranstaltungsnennung belegt weder unabhängige Leistung noch aktuelle Stückzahlen; Agile ONE S bleibt eine separate, kleinere Konfiguration. Aigen verlinkt im Verzeichnis eine Domain, die nur per Skript weiterleitet; die aktuelle Herstellerseite beschreibt Element und Alchemy, wählt für dieses generische Listing aber kein Modell aus. STEMbotix wurde nur über native Titel-/Beschreibungsmetadaten beurteilt, weil der Antwortkörper eine nicht gerenderte Skript-Hülle ist; daraus wird weder ein gerendertes Portfolio noch ein exaktes Roboterkit abgeleitet.

19 Primärquellen-Abrufe wurden protokolliert: 14 lieferten nutzbare HTTP-200-Inhalte, einer nur Metadaten, die übrigen Fehler, Landerseiten oder 404. Fehlgeschlagene und weitergeleitete Antworten belegen keine Produktaussage. Neun offene Primärprüfungen betreffen ACME, die beiden fremden ADAM-Anbieter, GrabaRobot, Aibo, Alice AI, die breiten ANYmal-Industrieaussagen, Brain-Corp-Abdeckung und den fehlerhaften BALYO-Firmeneintrag. Ein fehlendes Produkt in einem geprüften Portfolio beweist keine Nichtexistenz.

818 JavaScript-Tests in 65 Dateien sowie 27 Python-Tests bestehen. Datenaudit: null Fehler und 1.252 Hinweise. Erneuter Import: null Ergänzungen und alle 33 Datenpfade unverändert; die Offline-Coverage-Aktualisierung ändert nur Zeitstempel und deren Prüfsumme. Ein Offline-Durchlauf reproduziert die 40 neuen Antworten ohne Netzabruf und bewahrt alle 70 bisherigen Entscheidungen. Katalog-CSV, Produktmerkmale, technische Reviews und bestehende Identitätsentscheidungen bleiben bytegleich. Eigene Browser, Testserver und Hilfsprozesse sind freigegeben. Verzeichnisbehauptungen und Herstellerangaben belegen weder exklusive USPs noch Marktführerschaft. 795 Detailinhalte sind noch nicht im aktuellen URL-Register abgedeckt; hinzu kommen drei abgerufene, aber unbelegte Einträge und neun offene Primärprüfungen.

## Ergänzung 205 – 40 weitere Detailinhalte, BotEyes-Tablet-Bundles, Carti-AMR-Familie und BuddyBot-Quellenkonflikt (5. November 2026)

40 weitere BuyAndRentRobots-Detailseiten (Einträge 71 bis 110) wurden am 5. November 2026 mit HTTP 200 abgerufen; URL, sichtbarer Titel, Anbietername, Anbieterlink, Beschreibung und Antwortkörper-Hash stimmen jeweils mit dem gespeicherten Listing überein. Alle 40 normalisierten Beschreibungen entsprechen exakt dem API-Inventar vom 1. November. Alle 40 Seiten erhielten eine datierte Inhaltsentscheidung: 36 sind mit der belegten Primärquellen-Reichweite vereinbar, eine ist ein Quellenzuordnungs-Konflikt und drei erfordern weitere Primärbelege. Dauerbeleg: reports/competitor-batch-205-evidence.json; Register: data/competitors/detail-content-reviews.json.

Das Register umfasst damit 110 versuchte und 107 inhaltlich entschiedene von 862 gespeicherten Listings (zuzüglich der drei aus Charge 204 weiterhin offenen Fälle). 755 Einträge sind noch nicht durch eine aktuelle URL-Entscheidung abgedeckt, davon 752 noch nicht abgerufen und drei abgerufen, aber mangels belastbarer Primärquelle nicht entschieden. Die 70 Entscheidungen der vorherigen Chargen bleiben objektgleich erhalten. Diese Zählung ist unabhängig von den 912 Katalogmodellen ohne Feldprüfung.

Ein neuer Zuordnungskonflikt wurde bei BuddyBot festgestellt: Das Verzeichnis führt BuddyBot als interaktiven KI-Begleitroboter unter dem Anbieter XYZ Robotics und verlinkt auf MarketWatch. XYZ Robotics ist jedoch ein industrieller Logistikrobotik-Hersteller (Depalettierung, Kommissionierung) und stellt keine Begleitroboter her. Die Zuordnung und der Anbieterlink sind als Verzeichniskonflikt dokumentiert.

Die Herstellerpreise von BotEyes (boteyes.com) belegen, dass BotEyes-Pad ($1.999) die Roboterbasis ohne Tablet ist, während BotEyes-Pad+ ($2.499) und BotEyes-Pad++ ($2.999) kommerzielle Zubehörbündel mit Tablet und Ladestation darstellen. Sie wurden der Basis-Hardware BotEyes-Pad zugeordnet. Die historische Bezeichnung BEAM bei Awabot entspricht den heute vom Hersteller als Awabot One (ehemals Beam) und Awabot Pro (ehemals BeamPro) geführten Telepräsenzrobotern. Carti Low-Profile von Bear Robotics umfasst die fünf dokumentierten Konfigurationen mit 400, 600, 1.000s, 1.000 und 1.500 kg Traglast. Drei Primärprüfungen bleiben offen: Parrot CHUCK DV7 (keine Unterhaltungsdrohne im Herstellerprogramm belegt), Daifuku Cleaning Robot (unspezifizierte Reinigungsanwendung) und GrabaRobot Cleaning Robot (Sourcing-Kategorie).

818 JavaScript-Tests in 65 Dateien sowie 27 Python-Tests bestehen. Datenaudit: null Fehler und 1.252 Hinweise. Erneuter Import: null Ergänzungen und alle 33 Datenpfade unverändert; die Offline-Coverage-Aktualisierung ändert nur Zeitstempel und deren Prüfsumme. Ein Offline-Durchlauf reproduziert die 40 neuen Antworten ohne Netzabruf und bewahrt alle bisherigen Entscheidungen. Katalog-CSV, Produktmerkmale, technische Reviews und bestehende Identitätsentscheidungen bleiben bytegleich. Eigene Browser, Testserver und Hilfsprozesse sind freigegeben. Verzeichnisbehauptungen und Herstellerangaben belegen weder exklusive USPs noch Marktführerschaft. 755 Detailinhalte sind noch nicht im aktuellen URL-Register abgedeckt.

## Ergänzung 206 – 40 weitere Detailinhalte, DR01/DR02-Typkonflikte und Anbieterattributions-Konflikte (5. November 2026)

40 weitere BuyAndRentRobots-Detailseiten (Einträge 111 bis 150) wurden am 5. November 2026 mit HTTP 200 abgerufen; URL, sichtbarer Titel, Anbietername, Anbieterlink, Beschreibung und Antwortkörper-Hash stimmen jeweils mit dem gespeicherten Listing überein. Alle 40 normalisierten Beschreibungen entsprechen exakt dem API-Inventar vom 1. November. Alle 40 Seiten erhielten eine datierte Inhaltsentscheidung: 28 sind mit der belegten Primärquellen-Reichweite vereinbar, 5 sind Quellenkonflikte und 7 erfordern weitere Primärbelege. Dauerbeleg: reports/competitor-batch-206-evidence.json; Register: data/competitors/detail-content-reviews.json.

Das Register umfasst damit 150 versuchte und 147 inhaltlich entschiedene von 862 gespeicherten Listings (zuzüglich der drei aus Charge 204 weiterhin offenen Fälle). 715 Einträge sind noch nicht durch eine aktuelle URL-Entscheidung abgedeckt, davon 712 noch nicht abgerufen und drei abgerufen, aber mangels belastbarer Primärquelle nicht entschieden. Die 110 Entscheidungen der vorherigen Chargen bleiben objektgleich erhalten. Diese Zählung ist unabhängig von den 912 Katalogmodellen ohne Feldprüfung.

Zwei Produkttyp-Konflikte betreffen Deep Robotics: DR01 und DR02 werden im Verzeichnis als humanoide Roboter beschrieben, während der Hersteller beide als Fahrwerke mit Rädern auf vierbeiniger Plattform dokumentiert. Die Katalogidentität bleibt erhalten; die Verzeichnisbeschreibung wird als Typkonflikt festgehalten, ohne die Verzeichnisformulierung zu übernehmen.

Drei Anbieterattributions-Konflikte betreffen Links, die nicht zu Roboterherstellern führen: CleanMate (Global Times Robotics) verlinkt auf die chinesische Staatsmedien-Newsseite globaltimes.cn; DeliBot (AI Robotics Inc.) verlinkt auf den Technologie-Nachrichtenverlag techtarget.com; D:PLOY (OnRobot) ist die Software-Plattform für Robotik-Deployment des Greifer-Herstellers OnRobot, kein physischer Roboter. In allen Fällen bleibt die Herstelleridentität offen, ohne Phantom-Hardware oder -Modelle zu erzeugen.

Die verbleibenden sieben offenen Primärprüfungen betreffen CleanSweep und DeliBot (je Robot Innovations Inc., verknüpft mit einem Drittanbieter-Shop ohne sichtbares Roboterprodukt), CogniBot (Wellfound-Unternehmensseite ohne identifiziertes Produkt), Delivery Robot und Disinfection Robot (je GrabaRobot, breite Sourcing-Kategorien), Doctor (Ameca Robotics, verknüpfte Seite von Bot-Verifizierung blockiert) sowie DOK-ING Ltd. (generischer Robot-Eintrag ohne exaktes Produkt).

818 JavaScript-Tests in 65 Dateien sowie 27 Python-Tests bestehen. Datenaudit: null Fehler und 1.252 Hinweise. Erneuter Import: null Ergänzungen und alle 33 Datenpfade unverändert; die Offline-Coverage-Aktualisierung ändert nur Zeitstempel und deren Prüfsumme. Ein Offline-Durchlauf reproduziert die 40 neuen Antworten ohne Netzabruf und bewahrt alle bisherigen Entscheidungen. Katalog-CSV, Produktmerkmale, technische Reviews und bestehende Identitätsentscheidungen bleiben bytegleich. Eigene Browser, Testserver und Hilfsprozesse sind freigegeben. Verzeichnisbehauptungen und Herstellerangaben belegen weder exklusive USPs noch Marktführerschaft. 715 Detailinhalte sind noch nicht im aktuellen URL-Register abgedeckt.

## Ergänzung 207 – 40 weitere Detailinhalte, Anbieterstatus- und Markenkonflikte (5. November 2026)

40 weitere BuyAndRentRobots-Detailseiten (Einträge 151 bis 190) wurden am 5. November 2026 mit HTTP 200 abgerufen; URL, sichtbarer Titel, Anbietername, Anbieterlink, Beschreibung und Antwortkörper-Hash stimmen jeweils mit dem gespeicherten Listing überein. Alle 40 normalisierten Beschreibungen entsprechen exakt dem API-Inventar vom 1. November. Alle 40 Seiten erhielten eine datierte Inhaltsentscheidung: 28 sind mit der belegten Primärquellen-Reichweite vereinbar, 7 sind Quellenkonflikte und 5 erfordern weitere Primärbelege. Dauerbeleg: reports/competitor-batch-207-evidence.json; Register: data/competitors/detail-content-reviews.json.

Das Register umfasst damit 190 versuchte und 187 inhaltlich entschiedene von 862 gespeicherten Listings (zuzüglich der drei aus Charge 204 weiterhin offenen Fälle). 675 Einträge sind noch nicht durch eine aktuelle URL-Entscheidung abgedeckt, davon 672 noch nicht abgerufen und drei abgerufen, aber mangels belastbarer Primärquelle nicht entschieden. Die 150 Entscheidungen der vorherigen Chargen bleiben objektgleich erhalten. Diese Zählung ist unabhängig von den 912 Katalogmodellen ohne Feldprüfung.

Ein Anbieterstatus-Konflikt betrifft Furo-D: Robot-Rentals.com erklärt auf seiner Seite, den gesamten Roboterverleihbetrieb eingestellt zu haben und keine neuen Buchungen mehr anzunehmen, während das Verzeichnis den Anbieter als verfügbar führt. Der Eintrag bleibt als defektes Serviceangebot dokumentiert; eine aktuelle Vermietbarkeit wird nicht angenommen.

Ein Markenkonflikt betrifft Eve: Das Verzeichnis nennt Bots-4-Events als Marke für ein Roboterdog-Eventangebot, führt aber Exoskeleton Report, einen Medienanbieter, als Anbieter. Die Beschreibung eines selbstbalancierenden Exoskeletts passt nicht zum beworbenen Roboterdog-Verleih; die Anbieterseite war mit HTTP 403 nicht prüfbar. Hardwareidentität und Anbieterrolle bleiben offen.

Vier weitere Quellenkonflikte betreffen Produkttyp und Herstellerzuordnung: DUSt3R ist eine Software zur 3D-Rekonstruktion von NAVER LABS und kein Reinigungsroboter; FlightLine ist der ADS-B-Surveillance-Datendienst von uAvionix und kein Iris-Luftfahrzeug; Firejet ist die Kratos-MQM-178-Zieldrohne, die Shield AI in Autonomietests einsetzt, kein von Shield hergestelltes Fluggerät; die Titel von ECOVACS und DENSO sind Marketingslogans ohne Modellbezug. In allen Fällen bleiben Katalogidentitäten unverändert und es werden keine Rangfolge- oder Marktführerschaftsaussagen übernommen.

Die verbleibenden fünf offenen Primärprüfungen betreffen Ekso Bionics, Festo, Flytrex, EduBot und FX-2. Ekso Bionics, Festo und Flytrex sind generische Unternehmensüberschriften ohne benanntes Modell; bei Festo und Flytrex lieferte die offizielle Seite keinen extrahierbaren Text. EduBot verweist auf ein 36kr-Nachrichtenportal ohne Produktseite. Für FX-2 konnte die Rainbow-Robotics-Seite wegen eines TLS-Fehlers nicht erneut geprüft werden; die Katalogidentität bleibt auf dem datierten Belegstand.

Bestätigt wurden unter anderem der MiR250-Basis- und 17,5-kg-Arm-Aufbau des ER-FLEX, die GoPal-Nutzlasten von 500, 1000 und 1200 kg, die Realbotix-Series-1-Reservierungspreise von 11.950 und 59.950 US-Dollar für 2027, FarmWise Vulcan mit herstellerseitig bis zu 3 Acres pro Stunde, Miso Flippy als Frittierstation-Automatisierung sowie der Unitree-GO2-Verleih von Event Robot. Diese Angaben sind Hersteller- beziehungsweise Anbieterangaben und keine unabhängigen Tests.

818 JavaScript-Tests in 65 Dateien sowie 27 Python-Tests bestehen. Datenaudit: null Fehler und 1.252 Hinweise. Erneuter Import: null Ergänzungen und alle 33 Datenpfade unverändert; die Offline-Coverage-Aktualisierung ändert nur Zeitstempel und deren Prüfsumme. Ein Offline-Durchlauf reproduziert die 40 neuen Antworten ohne Netzabruf und bewahrt alle bisherigen Entscheidungen. Katalog-CSV, Produktmerkmale, technische Reviews und bestehende Identitätsentscheidungen bleiben bytegleich. Eigene Browser, Testserver und Hilfsprozesse sind freigegeben. Verzeichnisbehauptungen und Herstellerangaben belegen weder exklusive USPs noch Marktführerschaft. 675 Detailinhalte sind noch nicht im aktuellen URL-Register abgedeckt.

## Ergänzung 208 – 40 weitere Detailinhalte, Fehlleitungen und Server-Platzhalter (5. November 2026)

40 weitere BuyAndRentRobots-Detailseiten (Einträge 191 bis 230) wurden am 5. November 2026 mit HTTP 200 abgerufen; URL, sichtbarer Titel, Anbietername, Anbieterlink, Beschreibung und Antwortkörper-Hash stimmen jeweils mit dem gespeicherten Listing überein. Alle 40 normalisierten Beschreibungen entsprechen exakt dem API-Inventar vom 1. November. Alle 40 Seiten erhielten eine datierte Inhaltsentscheidung: 27 sind mit der belegten Primärquellen-Reichweite vereinbar, 7 sind Quellenkonflikte und 6 erfordern weitere Primärbelege. Dauerbeleg: reports/competitor-batch-208-evidence.json; Register: data/competitors/detail-content-reviews.json.

Das Register umfasst damit 230 versuchte und 227 inhaltlich entschiedene von 862 gespeicherten Listings (zuzüglich der drei aus Charge 204 weiterhin offenen Fälle). 635 Einträge sind noch nicht durch eine aktuelle URL-Entscheidung abgedeckt, davon 632 noch nicht abgerufen und drei abgerufen, aber mangels belastbarer Primärquelle nicht entschieden. Die 190 Entscheidungen der vorherigen Chargen bleiben objektgleich erhalten. Diese Zählung ist unabhängig von den 912 Katalogmodellen ohne Feldprüfung.

Ein bemerkenswerter Konflikt betrifft Hi K Robot (Hikrobot): Die verlinkte Seite hikrobot.com erklärt ausdrücklich, eine unabhängige Forschungs- und Analyseplattform zu sein, und betont explizit: „This website is not affiliated with Hikvision or Hikrobot.“ Das Verzeichnis führt den Eintrag fälschlich als Industrieroboter des Herstellers Hikrobot.

Ein Server-Platzhalter-Konflikt betrifft SoftServe Robotics: Der hinterlegte Link softserv.com liefert lediglich die Server-Standardmeldung „Impulse Internet Services (Virtual Domain/SSL Server)“ aus, keinen Roboterhersteller oder ein konkretes Produkt.

Ein Navigationsfehler betrifft yuneec: Der Eintrag lautet „Home page“ und bildet eine Navigationsüberschrift der Website ab, kein Modell. Bei HAL wird Exoskeleton Report (ein Medienportal, Seite lieferte HTTP 403) statt des Herstellers Cyberdyne als Anbieter genannt; die Katalogidentität bleibt auf die medizinische Cyberdyne-HAL-Reihe bezogen. GuardBot (Global Times Robotics) und HYPERBOT (Hyperion Robotics) verlinken auf mediale beziehungsweise Finanzportale (globaltimes.cn, fundediq.co) ohne Roboterbeleg. Alpha Robotics Alice Reception Robot verlinkt auf den E-Commerce-Shop unboxindustry.com mit Vermischung von Kategoriemeldungen.

Die verbleibenden sechs offenen Primärprüfungen betreffen Hanson Robotics (leerer Website-Text), Ameca Humanoid (Drittanbieter-Servicedomäne), Hyundai WIA (leerer Website-Text), RobotAnno Ice Cream Kiosk MINI (Verbindungsfehler), iDesign 365 (HTTP 520) und GrabaRobot Industrial Drone (breite Sourcing-Kategorie).

Bestätigt wurden unter anderem die Robotize-Plattform GoPal P35 (250 kg) sowie die Paletten-AMRs GoPal U22W (500 kg) und GoPal U24W (1200 kg), Modular Robotics GoPiGo als Raspberry-Pi-Lernroboter, Clearpath Husky UGV mit ROS-2-Integration (Husky A300), die Hypershell-Exoskelette X Max S und X Ultra S, Inspired Flight IF1200 und IF800 TOMCAT, GreyOrange IL Bots (Ranger-Intralogistics-AMRs RU-L, RF-E, RF-AP, RF-XXL), InDro Backpack/Commander-UGV-Konfigurationen sowie die Systemklassifizierungen der HaiPick-Systeme 1 bis 3 und HaiPick Climb.

818 JavaScript-Tests in 65 Dateien sowie 27 Python-Tests bestehen. Datenaudit: null Fehler und 1.252 Hinweise. Erneuter Import: null Ergänzungen und alle 33 Datenpfade unverändert; die Offline-Coverage-Aktualisierung ändert nur Zeitstempel und deren Prüfsumme. Ein Offline-Durchlauf reproduziert die 40 neuen Antworten ohne Netzabruf und bewahrt alle bisherigen Entscheidungen. Katalog-CSV, Produktmerkmale, technische Reviews und bestehende Identitätsentscheidungen bleiben bytegleich. Eigene Browser, Testserver und Hilfsprozesse sind freigegeben. Verzeichnisbehauptungen und Herstellerangaben belegen weder exklusive USPs noch Marktführerschaft. 635 Detailinhalte sind noch nicht im aktuellen URL-Register abgedeckt.

## Ergänzung 209 – 40 weitere Detailinhalte, Slogans und manuelle Geräte (5. November 2026)

40 weitere BuyAndRentRobots-Detailseiten (Einträge 231 bis 270) wurden am 5. November 2026 mit HTTP 200 abgerufen; URL, sichtbarer Titel, Anbietername, Anbieterlink, Beschreibung und Antwortkörper-Hash stimmen jeweils mit dem gespeicherten Listing überein. Alle 40 normalisierten Beschreibungen entsprechen exakt dem API-Inventar vom 1. November. Alle 40 Seiten erhielten eine datierte Inhaltsentscheidung: 35 sind mit der belegten Primärquellen-Reichweite vereinbar, 2 sind Quellenkonflikte und 3 erfordern weitere Primärbelege. Dauerbeleg: reports/competitor-batch-209-evidence.json; Register: data/competitors/detail-content-reviews.json.

Das Register umfasst damit 270 versuchte und 267 inhaltlich entschiedene von 862 gespeicherten Listings (zuzüglich der drei aus früheren Chargen weiterhin offenen Fälle). 595 Einträge sind noch nicht durch eine aktuelle URL-Entscheidung abgedeckt, davon 592 noch nicht abgerufen und drei abgerufen, aber mangels belastbarer Primärquelle nicht entschieden. Die 230 Entscheidungen der vorherigen Chargen bleiben objektgleich erhalten. Diese Zählung ist unabhängig von den 912 Katalogmodellen ohne Feldprüfung.

Zu den festgestellten Konflikten gehört Machina Labs („INTELLIGENT. AGILE. REAL METAL.“), ein Slogan für KI-gestützte Blechumformung (RoboCraftsman-Plattform) ohne eigenständigen Roboternamen. Bei Kärcher KB 5 handelt es sich laut Hersteller um einen handgeführten Akku-Besen; die Verzeichnisbehauptung einer autonomen Navigation im Haushalt widerspricht der Primärdokumentation und ist als manuelles Gerät qualifiziert.

Die drei offenen Primärprüfungen betreffen Intuitive Surgical (generischer Platzhalter, automatisierte Challenge im Primärabruf), Iron Ox (generischer Platzhalter, clientseitiger Redirect) sowie Kinova (generischer Platzhalter, leerer Text).

Bestätigt wurden unter anderem Clearpath Jackal UGV, Knightscope K1 Hemisphere, K5 und das Entwicklungsprogramm K7, Avidbots Kas, Kawasaki Delta Robot (aufgelöst auf die verifizierten Katalogmodelle YF002N und YF003N), KettyBot (Distributor PROVEN Robotics, zugeordnet zu pudu-robotics-kettybot), Macco Robotics Kime Bartender, Kime Chef und Kime Kiosk, Robot.com R-kiwi (Level-4-Liefer-AMR), Keenon KLEENBOT C20, C25, C30 und C40, Carbon Robotics LaserWeeder G2 (fünf Traktor-Anbaukonfigurationen), OMRON LD-Serie (LD-60, 90, 90x, 250) sowie Locus Array, Origin und Vector und die OrionStar LuckiBot-Serie (LuckiBot, LuckiBot Pro, LuckiBot Pro Autodoor).

818 JavaScript-Tests in 65 Dateien sowie 27 Python-Tests bestehen. Datenaudit: null Fehler und 1.252 Hinweise. Erneuter Import: null Ergänzungen und alle 33 Datenpfade unverändert; die Offline-Coverage-Aktualisierung ändert nur Zeitstempel und deren Prüfsumme. Ein Offline-Durchlauf reproduziert die 40 neuen Antworten ohne Netzabruf und bewahrt alle bisherigen Entscheidungen. Katalog-CSV, Produktmerkmale, technische Reviews und bestehende Identitätsentscheidungen bleiben bytegleich. Eigene Browser, Testserver und Hilfsprozesse sind freigegeben. Verzeichnisbehauptungen und Herstellerangaben belegen weder exklusive USPs noch Marktführerschaft. 595 Detailinhalte sind noch nicht im aktuellen URL-Register abgedeckt.

## Ergänzung 210 – 40 weitere Detailinhalte, MiR-Topmodule und Anbieter-Konflikte (5. November 2026)

40 weitere BuyAndRentRobots-Detailseiten (Einträge 271 bis 310) wurden am 5. November 2026 mit HTTP 200 abgerufen; URL, sichtbarer Titel, Anbietername, Anbieterlink, Beschreibung und Antwortkörper-Hash stimmen jeweils mit dem gespeicherten Listing überein. Alle 40 normalisierten Beschreibungen entsprechen exakt dem API-Inventar vom 1. November. Alle 40 Seiten erhielten eine datierte Inhaltsentscheidung: 36 sind mit der belegten Primärquellen-Reichweite vereinbar, 2 sind Quellenkonflikte und 2 erfordern weitere Primärbelege. Dauerbeleg: reports/competitor-batch-210-evidence.json; Register: data/competitors/detail-content-reviews.json.

Das Register umfasst damit 310 versuchte und 307 inhaltlich entschiedene von 862 gespeicherten Listings (zuzüglich der drei aus früheren Chargen weiterhin offenen Fälle). 555 Einträge sind noch nicht durch eine aktuelle URL-Entscheidung abgedeckt, davon 552 noch nicht abgerufen und drei abgerufen, aber mangels belastbarer Primärquelle nicht entschieden. Die 270 Entscheidungen der vorherigen Chargen bleiben objektgleich erhalten. Diese Zählung ist unabhängig von den 912 Katalogmodellen ohne Feldprüfung.

Zu den festgestellten Konflikten gehört MIR100: Das Verzeichnis ordnet diesen mobilen Roboter Kawasaki Robotics zu, obwohl Hersteller Mobile Industrial Robots (MiR) ist; der Eintrag ist als Anbieter-Zuordnungskonflikt unter Erhalt der Katalogidentität mir-mir100 erfasst. Bei ispace Missions handelt es sich um eine Navigationsüberschrift der Unternehmensseite ispace-inc.com, kein Modell.

Die beiden offenen Primärprüfungen betreffen RobotAnno (New AI Robot Coffee Bar und 24H Master Cafe), deren Primärwebsite annorobots.com während des Abrufs nicht erreichbar war.

Bestätigt wurden unter anderem IPLUSMOBOT LUNA (Outdoor-AMRs Luna 5T, 20T, 30T) und NERA-A (NERA-A12-JM, A12-UF, A20-TT), Realbotix M-Series, Elephant Robotics MarsCat, metaCat, myAGV, myCobot 320 und myCobot Pro 630, Richtech Matradee Plus, Makeblock mBot, mBot Ranger, mBot Ultimate 2.0, mBot Neo/mBot2, mTiny und das mBot2 Rover Robotics Kit, Mobile Industrial Robots MiR1200 Pallet Jack, MiR1350, MiR250, MiR600 sowie die MiR-Go-Fördermodule MC250 und MC600, Gausium Mira, Diligent Robotics Moxi, 1X Technologies NEO, Avidbots Neo 2 und Neo 2W, Aldebaran NAO 6 (über die Distributoren PROVEN Robotics, RobotLAB und Markeninhaber SoftBank Robotics) sowie Nexaro NR 1500 und NR 1700.

818 JavaScript-Tests in 65 Dateien sowie 27 Python-Tests bestehen. Datenaudit: null Fehler und 1.252 Hinweise. Erneuter Import: null Ergänzungen und alle 33 Datenpfade unverändert; die Offline-Coverage-Aktualisierung ändert nur Zeitstempel und deren Prüfsumme. Ein Offline-Durchlauf reproduziert die 40 neuen Antworten ohne Netzabruf und bewahrt alle bisherigen Entscheidungen. Katalog-CSV, Produktmerkmale, technische Reviews und bestehende Identitätsentscheidungen bleiben bytegleich. Eigene Browser, Testserver und Hilfsprozesse sind freigegeben. Verzeichnisbehauptungen und Herstellerangaben belegen weder exklusive USPs noch Marktführerschaft. 555 Detailinhalte sind noch nicht im aktuellen URL-Register abgedeckt.

## Ergänzung 211 – 40 weitere Detailinhalte, OTTO-AMRs und ein eingestellter Anbieter (5. November 2026)

40 weitere BuyAndRentRobots-Detailseiten (Einträge 311 bis 350) wurden am 5. November 2026 mit HTTP 200 abgerufen; URL, sichtbarer Titel, Anbietername, Anbieterlink, Beschreibung und Antwortkörper-Hash stimmen jeweils mit dem gespeicherten Listing überein. Alle 40 normalisierten Beschreibungen entsprechen exakt dem API-Inventar vom 1. November. Alle 40 Seiten erhielten eine datierte Inhaltsentscheidung: 38 sind mit der belegten Primärquellen-Reichweite vereinbar und 2 sind Quellenkonflikte. Dauerbeleg: reports/competitor-batch-211-evidence.json; Register: data/competitors/detail-content-reviews.json.

Das Register umfasst damit 350 versuchte und 347 inhaltlich entschiedene von 862 gespeicherten Listings (zuzüglich der drei aus früheren Chargen weiterhin offenen Fälle). 515 Einträge sind noch nicht durch eine aktuelle URL-Entscheidung abgedeckt, davon 512 noch nicht abgerufen und drei abgerufen, aber mangels belastbarer Primärquelle nicht entschieden. Die 310 Entscheidungen der vorherigen Chargen bleiben objektgleich erhalten. Diese Zählung ist unabhängig von den 912 Katalogmodellen ohne Feldprüfung.

Zu den festgestellten Konflikten gehört Orbit Robotics: Die verlinkte Domain orbitrobotics.com leitet clientseitig auf eine geparkte Landeseite weiter und liefert keinen Roboter-, Firmen- oder Herstellerbeleg. Bei Pepper (Robot Rentals) hat der Anbieter Robot-Rentals.com den Betrieb offiziell eingestellt und akzeptiert keine Buchungen mehr; das Verzeichnis führt Pepper dennoch als verfügbar.

Bestätigt wurden unter anderem Productive Robotics OB7 Max 8 und OB7 Max 12, OhmniLabs Ohmni Telepresence Robot, OhmniCare Robot und OhmniClean Robot sowie das vom Reseller Telepresence Robots angebotene Ohmni SuperCam, OMRON OL-450S, IPLUSMOBOT OMNI (1.5T, 2.5T, 3.5T, 5T), Gausium Omnie, Enactic OpenArm 2.0 (über den Reseller Robotics Center of Silicon Valley), OrionStar CarryBot (D100, D150) und GreetingBot Mini (über PROVEN Robotics), OTTO Motors OTTO 100, OTTO 600, OTTO 1200, OTTO 1500 und OTTO Lifter (jeweils auch unter der Clearpath-Robotics-Markenliste), Geek+ P1200R und P800R, Rapyuta Robotics PA-AMR und PA-AMR XL, Richtech Robotics Pallet Jack sowie Aldebaran/SoftBank Pepper (über die Distributoren PROVEN Robotics und RobotLAB).

818 JavaScript-Tests in 65 Dateien sowie 27 Python-Tests bestehen. Datenaudit: null Fehler und 1.252 Hinweise. Erneuter Import: null Ergänzungen und alle 33 Datenpfade unverändert; die Offline-Coverage-Aktualisierung ändert nur Zeitstempel und deren Prüfsumme. Ein Offline-Durchlauf reproduziert die 40 neuen Antworten ohne Netzabruf und bewahrt alle bisherigen Entscheidungen. Katalog-CSV, Produktmerkmale, technische Reviews und bestehende Identitätsentscheidungen bleiben bytegleich. Eigene Browser, Testserver und Hilfsprozesse sind freigegeben. Verzeichnisbehauptungen und Herstellerangaben belegen weder exklusive USPs noch Marktführerschaft. 515 Detailinhalte sind noch nicht im aktuellen URL-Register abgedeckt.

## Ergänzung 212 – 40 weitere Detailinhalte, Percepto AirMax, Gausium Phantas und Relay-AMRs (5. November 2026)

40 weitere BuyAndRentRobots-Detailseiten (Einträge 351 bis 390) wurden am 5. November 2026 mit HTTP 200 abgerufen; URL, sichtbarer Titel, Anbietername, Anbieterlink, Beschreibung und Antwortkörper-Hash stimmen jeweils mit dem gespeicherten Listing überein. Alle 40 normalisierten Beschreibungen entsprechen exakt dem API-Inventar vom 1. November. Alle 40 Seiten erhielten eine datierte Inhaltsentscheidung: 35 sind mit der belegten Primärquellen-Reichweite vereinbar, 3 sind Quellenkonflikte und 2 erfordern Primärquellen-Follow-up. Dauerbeleg: reports/competitor-batch-212-evidence.json; Register: data/competitors/detail-content-reviews.json.

Das Register umfasst damit 390 versuchte und 387 inhaltlich entschiedene von 862 gespeicherten Listings (zuzüglich der 5 aus allen Chargen weiterhin offenen Fälle). 475 Einträge sind noch nicht durch eine aktuelle URL-Entscheidung abgedeckt, davon 472 noch nicht abgerufen und 3 abgerufen, aber mangels belastbarer Primärquelle nicht entschieden. Die 350 Entscheidungen der vorherigen Chargen bleiben objektgleich erhalten. Diese Zählung ist unabhängig von den 912 Katalogmodellen ohne Feldprüfung.

Zu den festgestellten Konflikten gehört Product Search (NIDEC CORPORATION): Der Verzeichniseintrag erfasste einen Navigations-Such-Header des Industrieantriebsherstellers Nidec. RoboCleaner (AI Robotics Inc.) verlinkt auf TechTarget-Redaktionsinhalte statt auf eine Produktspezifikation. RoboHelper (Global Times Robotics) verlinkt auf eine Nachrichtenseite (globaltimes.cn) statt auf einen Roboterhersteller. Bei RoboHelp (Robot Innovations Inc., HTTP 429) und RoboHelper (Innovative Robotics Inc., HTTP 403) lieferten die verlinkten Händlerseiten temporäre Zugriffsfehler und bleiben als Nachprüfungen markiert.

Bestätigt wurden unter anderem Percepto AirMax (Autonome Inspektionsdrohne), Gausium Robotics Phantas (Gewerblicher 4-in-1-Bodenreinigungsroboter), Cleanfix Robotics RA660 Navi M (Pure/Connect) und RA660 Navi XL, Robotnik RB-ROBOUT/RB-ROBOUT+ und RB-WATCHER/RB-WATCHER XL, Rainbow Robotics RBQ-Serie (RBQ-3, RBQ-10, RBQ-10W), Fourier Robotics RehabHub (ArmMotus, ExoMotus), Relay Delivery Robots / Relay Robotics Relay (sowie über TGW Logistics und Pilz GmbH), Quantum Systems Reliant (eVTOL-UAS), Deep Trekker REVOLUTION (Unterwasser-ROV), Clearpath Robotics Ridgeback AGV, RAD Security ROAMEO (sowie RADCAM und RIO als Hardware-Komponenten), Robo Wunderkind Education Kit, Pudu Robotics Liefer- und Reinigungsroboter (über RobotLAB) sowie das Nuro Robotaxi (auf Lucid-Gravity-Basis mit Uber).

818 JavaScript-Tests in 65 Dateien sowie 27 Python-Tests bestehen. Datenaudit: null Fehler und 1.252 Hinweise. Erneuter Import: null Ergänzungen und alle 33 Datenpfade unverändert; die Offline-Coverage-Aktualisierung ändert nur Zeitstempel und deren Prüfsumme. Ein Offline-Durchlauf reproduziert die 40 neuen Antworten ohne Netzabruf und bewahrt alle bisherigen Entscheidungen. Katalog-CSV, Produktmerkmale, technische Reviews und bestehende Identitätsentscheidungen bleiben bytegleich. Eigene Browser, Testserver und Hilfsprozesse sind freigegeben. Verzeichnisbehauptungen und Herstellerangaben belegen weder exklusive USPs noch Marktführerschaft. 475 Detailinhalte sind noch nicht im aktuellen URL-Register abgedeckt.
