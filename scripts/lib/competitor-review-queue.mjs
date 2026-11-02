import { isPrimaryProductSource } from '../../src/utils/product-evidence.js';

const acceptedMentionStatuses = new Set([
  'exact',
  'verified-alias',
  'verified-attribution',
  'family-resolved',
]);
const fieldStatuses = ['documented', 'not-documented', 'conflicting', 'roadmap'];
const compareNames = (a, b) => a.localeCompare(b, 'en');

/** Aggregate existing decisions; never turn prefix candidates into identities. */
export function buildCompetitorReviewQueue({
  coverage,
  robots,
  brands,
  getInsights,
  getReview,
  getCompanyFocus,
  sourceSnapshots = {},
}) {
  const byId = new Map(robots.map((robot) => [robot.id, robot]));
  if (byId.size !== robots.length || coverage.catalog.models !== robots.length)
    throw new Error('Stale or duplicate catalog in competitor review queue');
  const owners = new Map();
  for (const brand of brands)
    for (const robot of brand.robots) {
      if (owners.has(robot.id)) throw new Error(`Ambiguous brand owner: ${robot.id}`);
      owners.set(robot.id, brand);
    }
  const references = new Map();
  const add = (ids, reference) => {
    for (const id of new Set(ids || [])) {
      if (!byId.has(id) || !owners.has(id))
        throw new Error(`Unknown reviewed catalog target: ${id}`);
      if (!references.has(id)) references.set(id, []);
      references.get(id).push(reference);
    }
  };
  for (const [source, entries] of [
    ['roboticsdir', coverage.roboticsdir.mentions],
    ['buyandrentrobots', coverage.buyandrentrobots.models],
  ])
    for (const entry of entries)
      if (acceptedMentionStatuses.has(entry.status))
        add(entry.catalogIds, {
          layer: 'model-mention',
          source,
          name: entry.model,
          company: entry.brand,
          urls: entry.sourceUrls,
          status: entry.status,
          note: entry.note || '',
        });
  const originalIds = new Set(references.keys());
  for (const entry of coverage.listingReviews.entries)
    if (['family-resolution', 'model-resolution'].includes(entry.kind))
      add(entry.catalogIds, {
        layer: 'listing-review',
        source: 'buyandrentrobots',
        listingId: entry.listingId,
        name: entry.name,
        company: entry.company,
        urls: [entry.sourceUrl],
        status: entry.kind,
        checkedAt: entry.checkedAt,
        note: entry.note,
      });
  const listingIds = new Set(references.keys());
  for (const entry of coverage.companyDescriptionProducts.mentions) {
    if (!entry.productReview) continue;
    add(entry.reviewedCatalogIds, {
      layer: 'company-description-review',
      source: 'buyandrentrobots',
      mentionId: entry.id,
      name: entry.name,
      company: entry.companyName,
      urls: [entry.sourceUrl],
      status: entry.productReview.kind,
      checkedAt: entry.productReview.checkedAt,
      note: entry.productReview.note,
      scope: entry.productReview.scope,
    });
  }
  const models = [...references]
    .map(([id, sourceReferences]) => {
      const robot = byId.get(id);
      const insights = getInsights(id);
      const review = getReview(id);
      const counts = Object.fromEntries(
        fieldStatuses.map((status) => [
          status,
          Object.values(review?.fields || {}).filter((field) => field.status === status).length,
        ]),
      );
      return {
        robotId: id,
        manufacturer: robot.manufacturer,
        model: robot.model,
        brandId: owners.get(id).id,
        category: robot.category,
        hasDatedHighlights: Boolean(
          insights?.highlights?.length && insights.sources.some(isPrimaryProductSource),
        ),
        highlightStatements: insights?.highlights?.length || 0,
        highlightSources: insights?.sources || [],
        hasSelectedFieldReview: Boolean(review),
        selectedFields: Object.keys(review?.fields || {}).length,
        selectedFieldStatuses: counts,
        specificationSources: review?.sources || [],
        sourceReferences,
      };
    })
    .sort((a, b) => compareNames(a.manufacturer, b.manufacturer) || compareNames(a.model, b.model));
  const company = (brand) => {
    const related = models.filter((model) => model.brandId === brand.id);
    const focus = getCompanyFocus(brand);
    return {
      brandId: brand.id,
      name: brand.name,
      aliases: brand.aliases,
      sourceUrls: brand.sources.map((source) => source.url),
      catalogModels: brand.modelCount,
      reviewedReferenceTargets: related.length,
      withDatedHighlights: related.filter((model) => model.hasDatedHighlights).length,
      withoutDatedHighlights: related.filter((model) => !model.hasDatedHighlights).length,
      withSelectedFieldReview: related.filter((model) => model.hasSelectedFieldReview).length,
      withoutSelectedFieldReview: related.filter((model) => !model.hasSelectedFieldReview).length,
      hasCompanyAuthoredFocus: Boolean(focus),
      companyFocusCheckedAt: focus?.checkedAt || '',
      robotIds: related.map((model) => model.robotId),
    };
  };
  const companies = brands
    .filter((brand) => brand.sources.length)
    .map(company)
    .sort((a, b) => compareNames(a.name, b.name));
  const manufacturerPriorities = brands
    .filter((brand) => models.some((model) => model.brandId === brand.id))
    .map(company)
    .sort(
      (a, b) =>
        b.withoutDatedHighlights - a.withoutDatedHighlights ||
        b.withoutSelectedFieldReview - a.withoutSelectedFieldReview ||
        b.reviewedReferenceTargets - a.reviewedReferenceTargets ||
        compareNames(a.name, b.name),
    );
  return {
    generatedAt: coverage.generatedAt,
    sourceSnapshots,
    networkRequests: 0,
    scope:
      'Current saved-source research queue. Explicit mentions, reviewed listing resolutions and reviewed company-description targets remain separate references. Family and context links are not exact-configuration identities. Dated manufacturer claims are not independent tests or exclusive USPs; selected fields are not full product certification. Candidate-only names and prefixes are excluded.',
    summary: {
      sourceCompanyGroups: companies.length,
      explicitModelMentionTargets: originalIds.size,
      targetsIncludingListingReviews: listingIds.size,
      allReviewedReferenceTargets: models.length,
      withDatedHighlights: models.filter((model) => model.hasDatedHighlights).length,
      withoutDatedHighlights: models.filter((model) => !model.hasDatedHighlights).length,
      withSelectedFieldReview: models.filter((model) => model.hasSelectedFieldReview).length,
      withoutSelectedFieldReview: models.filter((model) => !model.hasSelectedFieldReview).length,
      selectedFields: models.reduce((total, model) => total + model.selectedFields, 0),
      selectedFieldStatuses: Object.fromEntries(
        fieldStatuses.map((status) => [
          status,
          models.reduce((total, model) => total + model.selectedFieldStatuses[status], 0),
        ]),
      ),
      sourceGroupsWithCompanyAuthoredFocus: companies.filter(
        (brand) => brand.hasCompanyAuthoredFocus,
      ).length,
      remainingModelIdentities: coverage.remaining.length,
      remainingListingIdentities: coverage.listingReviews.unreviewedListings.length,
    },
    priorityMethod:
      'Missing dated highlights first, then number of referenced targets without a selected-field review. This prioritizes research and does not measure market share, model quality or whole-product verification.',
    unresolvedModels: coverage.remaining,
    unresolvedListings: coverage.listingReviews.unreviewedListings,
    manufacturerPriorities,
    companies,
    models,
  };
}

export function renderCompetitorResearchQueueCsv(queue) {
  const headers = [
    'robotId',
    'manufacturer',
    'model',
    'brandId',
    'category',
    'hasDatedHighlights',
    'highlightStatements',
    'hasSelectedFieldReview',
    'selectedFields',
    'documentedFields',
    'unknownFields',
    'conflictingFields',
    'roadmapFields',
    'sourceLayers',
    'sourceReferenceCount',
    'sourceUrls',
    'referenceStatuses',
    'highlightSourceUrls',
    'specificationSourceUrls',
    'referenceNotes',
  ];
  const quote = (value) => {
    const text = String(value);
    return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  };
  const joined = (values) => [...new Set(values)].join(' | ');
  const rows = queue.models.map((model) => [
    model.robotId,
    model.manufacturer,
    model.model,
    model.brandId,
    model.category,
    model.hasDatedHighlights,
    model.highlightStatements,
    model.hasSelectedFieldReview,
    model.selectedFields,
    ...fieldStatuses.map((status) => model.selectedFieldStatuses[status]),
    joined(model.sourceReferences.map((ref) => ref.layer)),
    model.sourceReferences.length,
    joined(model.sourceReferences.flatMap((ref) => ref.urls)),
    joined(model.sourceReferences.map((ref) => ref.status)),
    joined(model.highlightSources.map((source) => source.url)),
    joined(model.specificationSources.map((source) => source.url)),
    joined(model.sourceReferences.map((ref) => ref.note).filter(Boolean)),
  ]);
  return [headers, ...rows].map((row) => row.map(quote).join(',')).join('\n') + '\n';
}
