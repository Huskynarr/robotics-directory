import { isPrimaryProductSource } from './product-evidence.js';

export const COMPANY_PRODUCT_REVIEW_LABELS = {
  'model-identity': 'Reviewed model reference',
  'family-reference': 'Reviewed related product; configuration unspecified',
  'non-robot-device': 'Reviewed device; not included as a robot',
  'named-offering': 'Reviewed named offering; hardware model unverified',
  'system-reference': 'Reviewed system reference; no standalone robot target',
  'software-reference': 'Reviewed software reference; no standalone robot target',
  'component-reference': 'Reviewed component reference; no standalone robot target',
  'brand-reference': 'Reviewed brand or company reference; no model selected',
  'configuration-reference': 'Reviewed configuration reference; related catalog product',
  'service-reference': 'Reviewed service reference; no standalone robot target',
  'machine-family-reference': 'Reviewed machine family; no standalone robot target',
};
export const COMPANY_PRODUCT_REVIEW_SCOPE =
  'Product naming and classification only; no certification of unreviewed specifications, availability, provider relationships or unique advantages.';

const fail = (message) => {
  throw new Error(`Invalid company product review: ${message}`);
};
const validDate = (value) =>
  /^\d{4}-\d{2}-\d{2}$/.test(value || '') &&
  Number.isFinite(Date.parse(value)) &&
  new Date(value).toISOString().slice(0, 10) === value;
const validSource = (source, allowProgramme = false) => {
  const primary =
    isPrimaryProductSource(source) || (allowProgramme && source?.type === 'programme');
  if (!source?.name?.trim() || !primary || !validDate(source.checkedAt)) return false;
  try {
    const url = new URL(source.url);
    return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password;
  } catch {
    return false;
  }
};

/** Reviews bind to exact source text and separately evidenced catalog targets. */
export function indexCompanyProductReviews(data, mentions, robots, products) {
  if (!Array.isArray(data?.reviews) || !validDate(data.updatedAt))
    fail('missing reviews or update date');
  const byMention = new Map(mentions.map((mention) => [mention.id, mention]));
  const byRobot = new Map(robots.map((robot) => [robot.id, robot]));
  const evidenced = new Set(
    products
      .filter((product) => product.sources?.some((source) => validSource(source)))
      .map((product) => JSON.stringify([product.row.manufacturer, product.row.model])),
  );
  const index = new Map();
  for (const review of data.reviews) {
    const mention = byMention.get(review.mentionId);
    if (!mention || index.has(review.mentionId)) fail('unknown or duplicate mention ID');
    if (review.descriptionSha256 !== mention.descriptionSha256)
      fail('stale source description hash');
    if (!Object.hasOwn(COMPANY_PRODUCT_REVIEW_LABELS, review.kind)) fail('unknown review kind');
    if (!review.note?.trim() || !validDate(review.checkedAt) || review.checkedAt > data.updatedAt)
      fail('missing note or valid date');
    if (
      !Array.isArray(review.sources) ||
      !review.sources.length ||
      review.sources.some(
        (source) =>
          !validSource(source, review.kind === 'software-reference') ||
          source.checkedAt > review.checkedAt,
      )
    )
      fail('requires dated primary evidence');
    if (
      !Array.isArray(review.catalogIds) ||
      new Set(review.catalogIds).size !== review.catalogIds.length
    )
      fail('invalid target IDs');
    if (
      review.kind === 'model-identity' &&
      (mention.kind !== 'model' || review.catalogIds.length !== 1)
    )
      fail('model identity requires one model target');
    if (
      review.kind === 'family-reference' &&
      (!['model', 'family'].includes(mention.kind) || !review.catalogIds.length)
    )
      fail('family reference requires related products');
    if (review.kind === 'non-robot-device' && review.catalogIds.length)
      fail('non-robot device cannot claim catalog robot targets');
    if (review.kind === 'named-offering' && review.catalogIds.length)
      fail('named offering cannot claim catalog robot targets');
    if (
      review.kind === 'system-reference' &&
      (!['family', 'system', 'software'].includes(mention.kind) || review.catalogIds.length)
    )
      fail('system reference requires a family/system/software name without robot targets');
    const standaloneExcluded = {
      'software-reference': ['software'],
      'component-reference': ['component', 'component-family'],
      'brand-reference': ['brand', 'unresolved-name'],
      'service-reference': ['service'],
      'machine-family-reference': ['machine-family'],
    };
    if (
      Object.hasOwn(standaloneExcluded, review.kind) &&
      (!standaloneExcluded[review.kind].includes(mention.kind) || review.catalogIds.length)
    )
      fail('typed reference requires its source type without robot targets');
    if (
      review.kind === 'configuration-reference' &&
      (mention.kind !== 'configuration-label' || !review.catalogIds.length)
    )
      fail('configuration reference requires a configuration label and related products');
    const catalogTargets = review.catalogIds.map((id) => {
      const robot = byRobot.get(id);
      if (!robot) fail('unknown catalog target');
      if (!evidenced.has(JSON.stringify([robot.manufacturer, robot.model])))
        fail('catalog target lacks primary evidence');
      return { id: robot.id, manufacturer: robot.manufacturer, model: robot.model };
    });
    index.set(review.mentionId, {
      ...review,
      catalogTargets,
      label: COMPANY_PRODUCT_REVIEW_LABELS[review.kind],
      scope: COMPANY_PRODUCT_REVIEW_SCOPE,
    });
  }
  return index;
}
