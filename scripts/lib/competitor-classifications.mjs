const identity = (source, brand, model) => JSON.stringify([source, brand, model]);
const statuses = {
  component: 'reviewed-component',
  software: 'reviewed-software',
  service: 'reviewed-service',
  'manual-appliance': 'reviewed-manual-appliance',
  'robotic-system': 'reviewed-robotic-system',
  'named-unit': 'reviewed-named-unit',
  'generic-family': 'reviewed-generic-family',
};

/** Preserve reviewed entries that do not identify a distinct catalog model. */
export function indexEntryClassifications(decisions, sourceEntries) {
  const fail = (reason) => {
    throw new Error(`Invalid entry classification: ${reason}`);
  };
  if (!Array.isArray(decisions)) fail('expected an array');
  const known = new Set(
    sourceEntries.map((entry) => identity(entry.source, entry.brand, entry.model)),
  );
  const index = new Map();
  for (const decision of decisions) {
    const key = identity(decision.source, decision.brand, decision.model);
    if (!known.has(key)) fail('unknown source identity');
    if (index.has(key)) fail('duplicate decision');
    if (!Object.hasOwn(statuses, decision.kind)) fail('unknown kind');
    if (!decision.note?.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(decision.checkedAt || ''))
      fail('missing review note or date');
    if (!Array.isArray(decision.evidence) || !decision.evidence.length) fail('missing evidence');
    for (const evidence of decision.evidence) {
      const url = new URL(evidence.url);
      if (
        !evidence.publisher?.trim() ||
        !['https:', 'http:'].includes(url.protocol) ||
        url.username ||
        url.password
      )
        fail('unsafe or incomplete evidence');
    }
    if (decision.catalogIds?.length || decision.catalogModels?.length)
      fail('nonrobot decision cannot claim catalog coverage');
    index.set(key, decision);
  }
  return index;
}

export function applyEntryClassification(entry, source, index) {
  const decision = index.get(identity(source, entry.brand, entry.model));
  if (!decision) return entry;
  if (entry.identityReview)
    throw new Error('Conflicting identity and nonrobot classification reviews');
  return {
    ...entry,
    status: statuses[decision.kind],
    catalogIds: [],
    note: decision.note,
    classificationReview: decision,
  };
}
