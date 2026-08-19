import rss from '@astrojs/rss';
import { getAllRobots } from '../data/robots.js';
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from '../config/site.js';
import { buildRobotItems } from '../utils/feed.js';

export function GET(context) {
  const { allRobots } = getAllRobots();
  return rss({
    title: `${SITE_NAME} - Latest Robots`,
    description: `Newest robots added to the ${SITE_NAME}: ${SITE_TAGLINE}. Humanoids, quadrupeds, companion, cleaning, outdoor, educational, smart home and robotic arms.`,
    site: context.site ?? SITE_URL,
    items: buildRobotItems(allRobots, 50),
    customData: '<language>en</language>',
  });
}
