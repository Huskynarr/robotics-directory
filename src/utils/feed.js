import { SITE_URL } from '../config/site.js';

/**
 * Parse a release-date string (e.g. "2025", "2026-05", "2024-06-01", "Q1 2024")
 * into a Date, or null when it cannot be parsed.
 */
export function parseReleaseDate(raw) {
  if (!raw || typeof raw !== 'string') return null;
  const s = raw.trim();
  if (!s || /^n\/a$/i.test(s)) return null;
  const yearMatch = s.match(/(20\d{2}|19\d{2})/);
  if (!yearMatch) return null;
  const year = parseInt(yearMatch[1], 10);
  const monthMatch = s.match(/\b(0?[1-9]|1[0-2])\b/);
  const month = monthMatch && /\d{4}-\d{1,2}/.test(s) ? parseInt(monthMatch[1], 10) - 1 : 0;
  const dayMatch = s.match(/\b(\d{4})-(\d{1,2})-(\d{1,2})\b/);
  const day = dayMatch ? parseInt(dayMatch[3], 10) : 1;
  const d = new Date(Date.UTC(year, month, day));
  return isNaN(d.getTime()) ? null : d;
}

/**
 * Build RSS item objects for a list of robots, newest release first.
 */
export function buildRobotItems(robots, limit = 50) {
  const withDate = robots.map((r) => ({ robot: r, date: parseReleaseDate(r.releaseDate) }));
  withDate.sort((a, b) => {
    const ta = a.date ? a.date.getTime() : 0;
    const tb = b.date ? b.date.getTime() : 0;
    return tb - ta;
  });
  return withDate.slice(0, limit).map(({ robot, date }) => {
    const name = `${robot.manufacturer} ${robot.model}`;
    const link = `${SITE_URL}/robot/${robot.id}/`;
    const description =
      robot.description && robot.description.trim() && robot.description !== 'N/A'
        ? robot.description
        : `${name} - specifications, images and comparison in the Robotics Directory.`;
    const item = { title: name, link, description };
    if (date) item.pubDate = date;
    return item;
  });
}
