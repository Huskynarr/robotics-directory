import { isPrimaryProductSource } from '../../src/utils/product-evidence.js';

const statuses = {
  'model-alias': 'verified-alias',
  'manufacturer-correction': 'verified-attribution',
  'family-resolution': 'family-resolved',
};

const key = (source, brand, model) => JSON.stringify([source, brand, model]);
const productKey = (manufacturer, model) => JSON.stringify([manufacturer, model]);
const fail = (message) => {
  throw new Error(`Invalid model resolution: ${message}`);
};

/** A reviewed identity correction must point to existing, primary-sourced models. */
export function indexModelResolutions(resolutions, robots, verifiedProducts) {
  if (!Array.isArray(resolutions)) fail('expected an array');
  const byIdentity = new Map(
    robots.map((robot) => [productKey(robot.manufacturer, robot.model), robot]),
  );
  const primary = new Set(
    verifiedProducts
      .filter((product) => product.sources?.some(isPrimaryProductSource))
      .map((product) => productKey(product.row.manufacturer, product.row.model)),
  );
  const index = new Map();
  for (const resolution of resolutions) {
    if (!['roboticsdir', 'buyandrentrobots'].includes(resolution.source)) fail('unknown source');
    for (const field of ['brand', 'model', 'catalogManufacturer', 'note']) {
      if (typeof resolution[field] !== 'string' || !resolution[field].trim())
        fail(`missing ${field}`);
    }
    if (!Object.hasOwn(statuses, resolution.kind)) fail('unknown kind');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(resolution.checkedAt || '')) fail('missing check date');
    if (!Array.isArray(resolution.evidence) || !resolution.evidence.length)
      fail('missing primary evidence');
    for (const evidence of resolution.evidence) {
      if (!evidence.publisher?.trim()) fail('missing publisher');
      const url = new URL(evidence.url);
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password)
        fail('unsafe evidence URL');
    }
    if (!Array.isArray(resolution.catalogModels) || !resolution.catalogModels.length)
      fail('missing target models');
    if (new Set(resolution.catalogModels).size !== resolution.catalogModels.length)
      fail('duplicate target model');
    if (resolution.kind === 'model-alias' && resolution.catalogModels.length !== 1)
      fail('alias must identify one model');
    const targets = resolution.catalogModels.map((model) => {
      const identity = productKey(resolution.catalogManufacturer, model);
      const robot = byIdentity.get(identity);
      if (!robot) fail(`missing catalog target ${resolution.catalogManufacturer} ${model}`);
      if (!primary.has(identity)) fail(`target lacks primary evidence: ${model}`);
      return robot.id;
    });
    const identity = key(resolution.source, resolution.brand, resolution.model);
    if (index.has(identity)) fail('duplicate source identity');
    index.set(identity, { ...resolution, catalogIds: targets, status: statuses[resolution.kind] });
  }
  return index;
}

export function applyModelResolution(entry, source, index) {
  const resolution = index.get(key(source, entry.brand, entry.model));
  if (!resolution) return entry;
  return {
    ...entry,
    status: resolution.status,
    catalogIds: resolution.catalogIds,
    note: resolution.note,
    identityReview: {
      kind: resolution.kind,
      catalogManufacturer: resolution.catalogManufacturer,
      catalogModels: resolution.catalogModels,
      evidence: resolution.evidence,
      checkedAt: resolution.checkedAt,
    },
  };
}
