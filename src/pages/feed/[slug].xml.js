import rss from '@astrojs/rss';
import { getAllRobots } from '../../data/robots.js';
import { CATEGORIES, CATEGORY_LABELS } from '../../data/categories.js';
import { SITE_URL, SITE_NAME } from '../../config/site.js';
import { buildRobotItems } from '../../utils/feed.js';

export function getStaticPaths() {
  return CATEGORIES.map((cat) => ({ params: { slug: cat.id }, props: { cat } }));
}

export function GET(context) {
  const { cat } = context.props;
  const { allRobots } = getAllRobots();
  const robots = allRobots.filter((r) => r.category === cat.id);
  const label = CATEGORY_LABELS[cat.id] || cat.id;
  const labelPlural = label.endsWith('s') ? label : `${label}s`;
  return rss({
    title: `${SITE_NAME} - ${labelPlural}`,
    description: `Browse ${robots.length} ${labelPlural.toLowerCase()} in the ${SITE_NAME}. Specs, prices, images and comparison.`,
    site: context.site ?? SITE_URL,
    items: buildRobotItems(robots, 50),
    customData: '<language>en</language>',
  });
}
