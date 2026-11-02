import fs from 'node:fs';
import { getSpecificationReview } from '../src/data/specification-reviews.js';
import { buildCompanyInsights } from '../src/utils/company-insights.js';
import { getCompanyInsights } from '../src/data/company-insights.js';

const read = (name) => JSON.parse(fs.readFileSync(`data/competitors/${name}.json`, 'utf8'));
const robotics = read('roboticsdir');
const buy = read('buyandrentrobots');
const coverage = read('coverage');
const companies = read('brands');
const productInsights = new Map(
  read('product-insights').products.map((product) => [product.robotId, product]),
);
const highlightEvidence = (entry) => {
  const products = entry.catalogIds.map((id) => productInsights.get(id)).filter(Boolean);
  const specifications = entry.catalogIds.map(getSpecificationReview).filter(Boolean);
  return {
    primaryHighlightStatus: !entry.catalogIds.length
      ? 'unmapped'
      : products.length === entry.catalogIds.length
        ? 'complete'
        : products.length
          ? 'partial'
          : 'missing',
    primaryHighlightCatalogIds: products.map((product) => product.robotId),
    primaryHighlights: products.flatMap((product) =>
      product.highlights.map(
        (highlight) => `${product.manufacturer} ${product.model}: ${highlight}`,
      ),
    ),
    primaryHighlightSourceUrls: unique(
      products.flatMap((product) => product.sources.map((source) => source.url)),
    ),
    primaryHighlightCheckedAt: unique(
      products.flatMap((product) => product.sources.map((source) => source.checkedAt)),
    ),
    primaryHighlightScope:
      'Product highlights only; model identity and catalog specification tables require separate review.',
    specificationReviewStatus: !entry.catalogIds.length
      ? 'unmapped'
      : specifications.length
        ? 'selected-fields'
        : 'unreviewed',
    reviewedSpecificationFields: specifications.flatMap((review) =>
      Object.entries(review.fields).map(
        ([field, value]) =>
          `${review.robotId}.${field}: ${value.value || '(omitted)'} [${value.status}]${value.note ? ` — ${value.note}` : ''}`,
      ),
    ),
    specificationReviewSourceUrls: unique(
      specifications.flatMap((review) => review.sources.map((source) => source.url)),
    ),
    specificationReviewCheckedAt: unique(
      specifications.flatMap((review) => review.sources.map((source) => source.checkedAt)),
    ),
    specificationReviewScope:
      'Selected fields only; unmarked fields remain unverified. Manufacturer documentation is not independent testing.',
  };
};
const listingReviews = new Map(
  coverage.listingReviews.entries.map((review) => [review.listingId, review]),
);
const unique = (values) => [...new Set(values)].sort();
const companyFeatures = (company) => {
  const { primary, directoryProducts } = getCompanyInsights(company);
  return {
    ...buildCompanyInsights(company, robotics, buy),
    companyDescriptionProductNames: directoryProducts.map(
      (mention) => `${mention.name} [${mention.kind}]`,
    ),
    companyDescriptionProductSourceUrls: unique(
      directoryProducts.map((mention) => mention.sourceUrl),
    ),
    companyDescriptionProductDecisions: directoryProducts
      .filter((mention) => mention.productReview)
      .map((mention) => `${mention.name}: ${mention.productReview.kind}`),
    companyDescriptionProductEvidenceUrls: unique(
      directoryProducts.flatMap(
        (mention) => mention.productReview?.sources.map((source) => source.url) || [],
      ),
    ),
    companyDescriptionProductScope: directoryProducts.length
      ? coverage.companyDescriptionProducts.scope
      : '',
    primaryCompanyRole: primary?.role || '',
    primaryCompanyWebsite: primary?.website || '',
    primaryCompanyHighlights: primary?.highlights || [],
    primaryCompanySourceUrls: primary?.sources.map((source) => source.url) || [],
    primaryCompanyCheckedAt: unique(primary?.sources.map((source) => source.checkedAt) || []),
    primaryCompanyScope: primary
      ? 'Company-authored focus only; not proof of unique advantages, availability or all directory model attributions.'
      : '',
  };
};
const identityReview = (entry) => ({
  resolvedManufacturer: entry.identityReview?.catalogManufacturer || '',
  resolvedModels: entry.identityReview?.catalogModels || [],
  identityEvidenceUrls: entry.identityReview?.evidence.map((source) => source.url) || [],
  identityReviewNote: entry.identityReview ? entry.note : '',
  classificationEvidenceUrls:
    entry.classificationReview?.evidence.map((source) => source.url) || [],
  classificationReviewNote: entry.classificationReview?.note || '',
});

function writeCsv(name, columns, rows) {
  const cell = (value) => {
    let text = Array.isArray(value) ? value.join(' | ') : String(value ?? '');
    // Keep source text inert when a reviewer opens the export in a spreadsheet.
    if (/^[=+@-]/.test(text)) text = `'${text}`;
    return `"${text.replaceAll('"', '""')}"`;
  };
  const content = [columns, ...rows.map((row) => columns.map((column) => row[column]))]
    .map((row) => row.map(cell).join(','))
    .join('\r\n');
  fs.writeFileSync(`data/competitors/${name}.csv`, `${content}\r\n`);
  console.log(`${name}.csv: ${rows.length} rows`);
}

const models = [
  ...coverage.roboticsdir.mentions.map((entry) => {
    const original = robotics.entries.find(
      (candidate) =>
        candidate.name === entry.brand && candidate.modelMentions.includes(entry.model),
    );
    return {
      source: 'RoboticsDir',
      brand: entry.brand,
      model: entry.model,
      classification: 'Named model or family; needs review',
      features: original?.features || [],
      manufacturerWebsiteCandidate: original?.website || '',
      fetchedAt: robotics.fetchedAt,
      catalogStatus: entry.status,
      catalogIds: entry.catalogIds,
      sourceUrls: entry.sourceUrls,
      evidenceStatus: 'Directory claims; not manufacturer verified',
      ...identityReview(entry),
      ...highlightEvidence(entry),
    };
  }),
  ...coverage.buyandrentrobots.models.map((entry, index) => {
    const original = buy.models[index];
    if (original.brand !== entry.brand || original.model !== entry.model)
      throw new Error('Coverage and inventory differ; run audit-competitor-coverage.mjs first');
    return {
      source: 'BuyAndRentRobots',
      brand: entry.brand,
      model: entry.model,
      classification: `${original.entryType}; ${original.classificationStatus}`,
      features: original.features,
      directoryFeatureEvidence: (original.featureSources || []).map(
        (claim) => `${claim.feature}: ${claim.sourceUrls.join(' ; ')}`,
      ),
      manufacturerWebsiteCandidate: original.officialProductUrl,
      fetchedAt: original.fetchedAt,
      catalogStatus: entry.status,
      catalogIds: entry.catalogIds,
      sourceUrls: entry.sourceUrls,
      evidenceStatus: 'Directory claims; not manufacturer verified',
      ...identityReview(entry),
      ...highlightEvidence(entry),
    };
  }),
];

writeCsv(
  'model-review',
  [
    'source',
    'brand',
    'model',
    'classification',
    'features',
    'directoryFeatureEvidence',
    'catalogStatus',
    'catalogIds',
    'manufacturerWebsiteCandidate',
    'sourceUrls',
    'fetchedAt',
    'evidenceStatus',
    'resolvedManufacturer',
    'resolvedModels',
    'identityEvidenceUrls',
    'identityReviewNote',
    'classificationEvidenceUrls',
    'classificationReviewNote',
    'primaryHighlightStatus',
    'primaryHighlightCatalogIds',
    'primaryHighlights',
    'primaryHighlightSourceUrls',
    'primaryHighlightCheckedAt',
    'primaryHighlightScope',
    'specificationReviewStatus',
    'reviewedSpecificationFields',
    'specificationReviewSourceUrls',
    'specificationReviewCheckedAt',
    'specificationReviewScope',
  ],
  models,
);

writeCsv(
  'company-review',
  [
    'name',
    'aliases',
    'categories',
    'websiteCandidate',
    'catalogManufacturers',
    'roboticsdirPositioning',
    'roboticsdirFeatureThemes',
    'buyandrentListingThemes',
    'buyandrentCompanyThemes',
    'buyandrentCompanyUseCases',
    'namedModelCandidates',
    'companyDescriptionProductNames',
    'companyDescriptionProductSourceUrls',
    'companyDescriptionProductDecisions',
    'companyDescriptionProductEvidenceUrls',
    'companyDescriptionProductScope',
    'featureScope',
    'primaryCompanyRole',
    'primaryCompanyWebsite',
    'primaryCompanyHighlights',
    'primaryCompanySourceUrls',
    'primaryCompanyCheckedAt',
    'primaryCompanyScope',
    'sourceUrls',
    'directoryUpdatedAt',
    'evidenceStatus',
  ],
  companies.brands.map((company) => ({
    ...company,
    ...companyFeatures(company),
    websiteCandidate: company.website,
    sourceUrls: company.sources.map((source) => source.url),
    directoryUpdatedAt: companies.updatedAt,
    evidenceStatus: 'Company directory listing; role and products require verification',
  })),
);

writeCsv(
  'company-product-review',
  [
    'id',
    'companyId',
    'companyName',
    'companySlug',
    'name',
    'kind',
    'context',
    'aliases',
    'brandProfileIds',
    'candidateCatalogIds',
    'reviewedCatalogIds',
    'reviewedKind',
    'reviewedAt',
    'reviewNote',
    'reviewEvidenceUrls',
    'reviewEvidenceDates',
    'reviewScope',
    'identityStatus',
    'sourceUrl',
    'sourceSnapshotAt',
    'checkedAt',
    'descriptionSha256',
    'note',
    'scope',
  ],
  coverage.companyDescriptionProducts.mentions.map((mention) => ({
    ...mention,
    reviewedKind: mention.productReview?.kind || '',
    reviewedAt: mention.productReview?.checkedAt || '',
    reviewNote: mention.productReview?.note || '',
    reviewEvidenceUrls: mention.productReview?.sources.map((source) => source.url) || [],
    reviewEvidenceDates: mention.productReview?.sources.map((source) => source.checkedAt) || [],
    reviewScope: mention.productReview?.scope || '',
    scope: coverage.companyDescriptionProducts.scope,
  })),
);

writeCsv(
  'buyandrent-listing-review',
  [
    'listingId',
    'name',
    'company',
    'brand',
    'category',
    'entryType',
    'classificationStatus',
    'features',
    'sourceUrl',
    'fetchedAt',
    'reviewedKind',
    'resolvedManufacturer',
    'resolvedModels',
    'reviewEvidenceUrls',
    'reviewNote',
    'reviewedAt',
  ],
  buy.listings.map((listing) => {
    const review = listingReviews.get(listing.listingId);
    return {
      ...listing,
      reviewedKind: review?.kind || '',
      resolvedManufacturer: review?.catalogManufacturer || '',
      resolvedModels: review?.catalogModels || [],
      reviewEvidenceUrls: review?.evidence.map((source) => source.url) || [],
      reviewNote: review?.note || '',
      reviewedAt: review?.checkedAt || '',
    };
  }),
);
