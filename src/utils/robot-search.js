export function normalizeRobotSearch(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .replace(/ß/g, 'ss')
    .replace(/[‐‑–—-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getRobotSearchMatch(robot, query, product) {
  const normalized = normalizeRobotSearch(query);
  if (!normalized) return { kind: 'catalog' };
  const fields = [
    robot.model,
    robot.manufacturer,
    `${robot.manufacturer || ''} ${robot.model || ''}`,
    robot.description,
    ...(robot.tagsArray || []),
  ];
  if (fields.some((field) => normalizeRobotSearch(field).includes(normalized)))
    return { kind: 'catalog' };
  const highlights = Array.isArray(product?.highlights) ? product.highlights : [];
  const highlight = highlights.find((text) => normalizeRobotSearch(text).includes(normalized));
  return highlight ? { kind: 'highlight', highlight } : null;
}
