export const COMPANY_PRODUCT_KINDS = {
  model: 'Model name',
  family: 'Product family',
  software: 'Software',
  component: 'Component or accessory',
  'component-family': 'Component family',
  brand: 'Brand reference',
  system: 'Integrated system',
  'configuration-label': 'Configuration label',
  service: 'Service',
  'machine-family': 'Machine family',
  'unresolved-name': 'Unresolved name',
};

export function companyProductKindLabel(kind) {
  if (!Object.hasOwn(COMPANY_PRODUCT_KINDS, kind)) throw new Error('Unknown company product kind');
  return COMPANY_PRODUCT_KINDS[kind];
}
