const labels = {
  manufacturer: 'Manufacturer source',
  deployment: 'Deployment owner source',
  developer: 'Developer source',
  integrator: 'Integration partner source',
  regulator: 'Regulatory authority source',
};

export function isPrimaryProductSource(source) {
  return (
    Object.hasOwn(labels, source?.type || '') && /^\d{4}-\d{2}-\d{2}$/.test(source.checkedAt || '')
  );
}

export function productSourceLabel(source) {
  if (!isPrimaryProductSource(source)) throw new Error('Invalid primary product source');
  return labels[source.type];
}
