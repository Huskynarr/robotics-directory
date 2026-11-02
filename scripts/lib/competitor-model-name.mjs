import { normalizeBrand } from '../reconcile-competitors.mjs';

/** Remove an optional company prefix without deleting the entire model name. */
export function normalizeCompetitorModel(value, brandName) {
  let model = value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]/g, '');
  const prefix = normalizeBrand(brandName);
  if (prefix && model.startsWith(prefix) && model.length > prefix.length)
    model = model.slice(prefix.length);
  return model;
}
