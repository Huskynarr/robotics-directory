export function escapeHTML(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function fetchAllRobots() {
  return window.__ROBOTS_DATA__ || [];
}

/**
 * Slugify a string into a URL-friendly token.
 */
export function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\+/g, ' plus ')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Create a URL-friendly ID from a robot's manufacturer and model.
 */
export function createRobotId(robot) {
  if (!robot || !robot.manufacturer || !robot.model) return 'unknown-robot';
  return slugify(`${robot.manufacturer} ${robot.model}`);
}

/**
 * Resolve an image path to an absolute URL.
 */
export function resolveImagePath(imageValue) {
  if (!imageValue || imageValue.trim() === '') return '/images/placeholder.svg';
  const trimmed = imageValue.trim();
  if (/^(https?:)?\/\//.test(trimmed) || trimmed.startsWith('data:')) return trimmed;
  if (trimmed.startsWith('/')) return trimmed;
  if (trimmed.startsWith('images/')) return '/' + trimmed;
  return `/images/${trimmed}`;
}

/**
 * Format a price string with locale-aware number formatting.
 * @param {string} raw - Raw price string from CSV
 * @param {string} lang - Language code (en, de, fr, es, zh)
 * @param {function} t - Translation function
 */
export function formatPrice(raw, lang = 'en', t = (k, fb) => fb || k) {
  if (!raw || typeof raw !== 'string') return '\u2013';
  const s = raw.trim();
  const lower = s.toLowerCase();

  if (lower === 'on request' || lower === 'auf anfrage' || lower === 'sur demande')
    return t('price.onRequest', 'On request');
  if (lower.includes('not disclosed')) return t('price.notDisclosed', 'Not disclosed');
  if (lower.includes('prototype')) return t('price.prototype', 'Prototype');
  if (lower.includes('discontinued')) return t('price.discontinued', 'Discontinued');

  const match = s.match(/^(~?)[\s]*([\d,.\s]+)\s*(USD|EUR|usd|eur)?\s*(\(.*\))?$/i);
  if (!match) return s;

  const isApprox = match[1] === '~';
  const num = parseFloat(match[2].replace(/[,\s]/g, ''));
  if (isNaN(num)) return s;

  const currency = (match[3] || 'USD').toUpperCase();
  const suffix = match[4] || '';
  const locale = lang || 'en';

  let formatted;
  try {
    formatted = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  } catch {
    formatted = new Intl.NumberFormat(locale).format(num) + ' ' + currency;
  }

  let result = '';
  if (isApprox) result += t('price.approx', '~') + ' ';
  result += formatted;

  if (suffix) {
    if (suffix.toLowerCase().includes('estimated')) {
      result += ' (' + t('price.estimated', 'estimated') + ')';
    } else {
      result += ' ' + suffix;
    }
  }
  return result;
}

/**
 * Format a spec value with locale-aware decimal handling.
 */
export function formatSpec(raw, lang = 'en') {
  if (!raw || typeof raw !== 'string') return raw || '\u2013';
  let sep;
  try {
    const parts = new Intl.NumberFormat(lang).formatToParts(1.1);
    sep = parts.find((p) => p.type === 'decimal')?.value || '.';
  } catch {
    return raw;
  }
  if (sep === '.') return raw;
  return raw.replace(/(\d)\.(\d)/g, `$1${sep}$2`);
}

/**
 * Extract a numeric price value for sorting/filtering.
 */
export function getPriceValue(price) {
  if (!price || typeof price !== 'string') return Infinity;
  const numeric = parseFloat(price.replace(/[^\d.-]/g, ''));
  return isNaN(numeric) ? Infinity : numeric;
}

/**
 * Parse a gallery string into an array of { src, label } objects.
 * Format: "path1|label1;path2|label2" or just "path1;path2"
 */
export function parseGallery(raw) {
  if (!raw || typeof raw !== 'string' || !raw.trim()) return [];
  return raw
    .split(';')
    .map((entry) => {
      const parts = entry.trim().split('|');
      const src = parts[0]?.trim();
      const label = parts[1]?.trim() || '';
      if (!src) return null;
      return { src: resolveImagePath(src), label };
    })
    .filter(Boolean);
}

/**
 * Extract a YouTube video ID from various URL formats.
 */
export function extractYouTubeId(url) {
  if (!url) return null;
  const ID_LENGTH = 11;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&?/]+)/,
    new RegExp(`^([a-zA-Z0-9_-]{${ID_LENGTH}})$`),
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1] && match[1].length === ID_LENGTH && /^[a-zA-Z0-9_-]+$/.test(match[1])) {
      return match[1];
    }
  }
  return null;
}
