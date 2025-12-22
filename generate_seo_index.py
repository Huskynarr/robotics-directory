import csv
import json
import re

CANONICAL = "https://robodirectory.huskynarr.de/"


def _load_robots(path):
    with open(path, newline='', encoding='utf-8') as f:
        rows = list(csv.DictReader(f))
    robots = []
    for row in rows:
        manufacturer = (row.get('manufacturer') or '').strip()
        model = (row.get('model') or '').strip()
        if not manufacturer or not model:
            continue
        robots.append({
            'manufacturer': manufacturer,
            'model': model,
            'category': (row.get('category') or '').strip(),
            'website': (row.get('website') or '').strip(),
            'image': (row.get('image') or '').strip(),
        })
    return sorted(robots, key=lambda r: (r['category'], r['manufacturer'], r['model']))


def _build_robot_list(robots):
    items = []
    for r in robots:
        name = f"{r['manufacturer']} {r['model']}".strip()
        category = r['category']
        website = r['website']
        li = f"<li data-category=\"{category}\"><span class=\"robot-index-name\">{name}</span>"
        if category:
            li += f" <span class=\"robot-index-category\">{category}</span>"
        if website:
            li += f" <a class=\"robot-index-link\" href=\"{website}\" target=\"_blank\" rel=\"noopener\">Official site</a>"
        li += "</li>"
        items.append(li)
    joined = "\n            ".join(items)
    return f"<ul class=\"robot-index-list\">\n            {joined}\n            </ul>"


def _build_json_ld(robots):
    items = []
    for idx, r in enumerate(robots, start=1):
        name = f"{r['manufacturer']} {r['model']}".strip()
        item = {
            "@type": "Product",
            "name": name,
            "category": r['category'] or None,
            "brand": {"@type": "Organization", "name": r['manufacturer']}
        }
        if r['website']:
            item["url"] = r['website']
        if r['image'] and r['image'] != 'images/image-not-found.webp':
            item["image"] = CANONICAL.rstrip('/') + '/' + r['image'].lstrip('/')
        item = {k: v for k, v in item.items() if v is not None}
        items.append({"@type": "ListItem", "position": idx, "item": item})

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "name": "Robotics Directory",
                "url": CANONICAL,
                "description": "A searchable collection of robots across multiple categories."
            },
            {
                "@type": "Organization",
                "name": "Huskynarr",
                "url": "https://huskynarr.de",
                "logo": CANONICAL.rstrip('/') + "/images/logos/huskynarr.svg"
            },
            {
                "@type": "ItemList",
                "name": "Robotics Directory Robot Index",
                "itemListOrder": "https://schema.org/ItemListOrderAscending",
                "numberOfItems": len(items),
                "itemListElement": items
            }
        ]
    }


def main():
    robots = _load_robots('data.csv')
    list_html = _build_robot_list(robots)
    json_ld = _build_json_ld(robots)
    json_ld_str = json.dumps(json_ld, ensure_ascii=False, separators=(',', ':'))

    with open('index.html', encoding='utf-8') as f:
        html = f.read()

    html = re.sub(
        r'<!-- SEO_ROBOT_INDEX_START -->.*?<!-- SEO_ROBOT_INDEX_END -->',
        f'<!-- SEO_ROBOT_INDEX_START -->\n            {list_html}\n            <!-- SEO_ROBOT_INDEX_END -->',
        html,
        flags=re.S,
    )

    html = re.sub(
        r'<!-- SEO_JSON_LD_START -->.*?<!-- SEO_JSON_LD_END -->',
        f'<!-- SEO_JSON_LD_START -->\n    <script type="application/ld+json">{json_ld_str}</script>\n    <!-- SEO_JSON_LD_END -->',
        html,
        flags=re.S,
    )

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"Updated SEO index with {len(robots)} robots")


if __name__ == '__main__':
    main()
