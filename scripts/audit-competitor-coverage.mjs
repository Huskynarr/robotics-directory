import fs from 'node:fs';
import { getAllRobots } from '../src/data/robots.js';
import { getAllBrands } from '../src/data/brands.js';
import { getProductInsights } from '../src/data/product-insights.js';
import {
  getSpecificationReview,
  getSpecificationReviewCoverage,
} from '../src/data/specification-reviews.js';
import { getCompanyInsights } from '../src/data/company-insights.js';
import { getCompanyDescriptionInventory } from '../src/data/company-product-mentions.js';
import { getCompanyProductReviewIndex } from '../src/data/company-product-reviews.js';
import { COMPANY_PRODUCT_REVIEW_SCOPE } from '../src/utils/company-product-reviews.js';
import { normalizeBrand } from './reconcile-competitors.mjs';
import { normalizeCompetitorModel as normalizeModel } from './lib/competitor-model-name.mjs';
import { indexModelResolutions, applyModelResolution } from './lib/competitor-resolutions.mjs';
import { reviewUnclearListings } from './lib/competitor-listing-reviews.mjs';
import {
  buildCompetitorReviewQueue,
  renderCompetitorResearchQueueCsv,
} from './lib/competitor-review-queue.mjs';
import {
  indexEntryClassifications,
  applyEntryClassification,
} from './lib/competitor-classifications.mjs';

const read = (name) => JSON.parse(fs.readFileSync(`data/competitors/${name}.json`, 'utf8'));
const robotics = read('roboticsdir');
const buy = read('buyandrentrobots');
const verified = read('verified-products');
const brands = getAllBrands();
const { allRobots, manufacturers } = getAllRobots();
const resolutions = indexModelResolutions(
  read('model-resolutions').resolutions,
  allRobots,
  verified.products,
);
const listingReviews = reviewUnclearListings(
  buy.listings,
  read('listing-reviews').reviews,
  allRobots,
  verified.products,
);
const classifications = indexEntryClassifications(read('model-classifications').decisions, [
  ...robotics.entries.flatMap((entry) =>
    entry.modelMentions.map((model) => ({ source: 'roboticsdir', brand: entry.name, model })),
  ),
  ...buy.models.map((entry) => ({
    source: 'buyandrentrobots',
    brand: entry.brand,
    model: entry.model,
  })),
]);
const brandByName = new Map();
for (const brand of brands) {
  for (const name of [brand.name, ...brand.aliases, ...brand.catalogManufacturers]) {
    brandByName.set(normalizeBrand(name), brand);
  }
}
const classify = (name, model, urls, family = false) => {
  const brand = brandByName.get(normalizeBrand(name));
  const modelKey = normalizeModel(model, name).replace(/series$/, '');
  const matches = (brand?.robots || []).filter(
    (robot) => normalizeModel(robot.model, robot.manufacturer) === modelKey,
  );
  const familyMatches = matches.length
    ? []
    : (brand?.robots || []).filter((robot) => {
        const candidate = normalizeModel(robot.model, robot.manufacturer);
        return modelKey && candidate.startsWith(modelKey) && candidate.length > modelKey.length;
      });
  return {
    brand: name,
    model,
    sourceUrls: urls,
    status: matches.length
      ? family
        ? 'family-covered'
        : 'exact'
      : familyMatches.length
        ? 'family-or-variant-review'
        : 'missing',
    catalogIds: (matches.length ? matches : familyMatches).map((robot) => robot.id),
    note:
      family || familyMatches.length
        ? 'A product family or name prefix is not proof of the exact configuration.'
        : '',
  };
};
const roboticsMentions = robotics.entries
  .flatMap((entry) =>
    entry.modelMentions.map((model) =>
      applyModelResolution(
        classify(
          entry.name,
          model,
          [entry.sourceUrl],
          /series|mindstorms|spike|roomba/i.test(model),
        ),
        'roboticsdir',
        resolutions,
      ),
    ),
  )
  .map((entry) => applyEntryClassification(entry, 'roboticsdir', classifications));
const buyModels = buy.models
  .map((model) =>
    applyModelResolution(
      classify(model.brand, model.model, model.sourceUrls, model.entryType === 'series'),
      'buyandrentrobots',
      resolutions,
    ),
  )
  .map((entry) => applyEntryClassification(entry, 'buyandrentrobots', classifications));
const counts = (entries) =>
  Object.fromEntries(
    [
      'exact',
      'verified-alias',
      'verified-attribution',
      'family-resolved',
      'family-covered',
      'family-or-variant-review',
      'reviewed-component',
      'reviewed-software',
      'reviewed-service',
      'reviewed-manual-appliance',
      'reviewed-robotic-system',
      'reviewed-named-unit',
      'reviewed-generic-family',
      'missing',
    ].map((status) => [status, entries.filter((entry) => entry.status === status).length]),
  );
const names = new Set(brands.flatMap((brand) => [brand.name, ...brand.aliases]));
const absentCompanies = [
  ...robotics.entries.filter((entry) => !names.has(entry.name)).map((entry) => entry.name),
  ...buy.companies.filter((entry) => !names.has(entry.name)).map((entry) => entry.name),
];
const mentionedCatalogIds = new Set(
  [...roboticsMentions, ...buyModels].flatMap((entry) => entry.catalogIds),
);
const mentionedCatalogModels = allRobots.filter((robot) => mentionedCatalogIds.has(robot.id));
const missingHighlightEvidence = mentionedCatalogModels
  .filter((robot) => !getProductInsights(robot.id))
  .map(({ id, manufacturer, model }) => ({ id, manufacturer, model }));
const descriptionInventory = getCompanyDescriptionInventory(buy);
const descriptionReviewIndex = getCompanyProductReviewIndex(descriptionInventory);
// Candidate names are deliberately not promoted to manufacturer-verified model coverage.
const descriptionMentions = descriptionInventory.mentions.map((mention) => {
  const profiles = brands.filter((brand) =>
    [brand.name, ...brand.aliases].includes(mention.companyName),
  );
  const robots = profiles.flatMap((brand) => brand.robots);
  const exact =
    mention.kind === 'model'
      ? robots.filter(
          (robot) =>
            normalizeModel(mention.name, robot.manufacturer) ===
            normalizeModel(robot.model, robot.manufacturer),
        )
      : [];
  const prefixes =
    mention.kind === 'model' && !exact.length
      ? robots.filter((robot) => {
          const key = normalizeModel(mention.name, robot.manufacturer);
          return key && normalizeModel(robot.model, robot.manufacturer).startsWith(key);
        })
      : [];
  const review = descriptionReviewIndex.get(mention.id);
  return {
    ...mention,
    brandProfileIds: profiles.map((brand) => brand.id),
    candidateCatalogIds: [...new Set((exact.length ? exact : prefixes).map((robot) => robot.id))],
    productReview: review || null,
    reviewedCatalogIds: review?.catalogIds || [],
    identityStatus: review
      ? `reviewed-${review.kind}`
      : mention.kind !== 'model'
        ? 'typed-non-model'
        : exact.length
          ? 'catalog-name-candidate'
          : prefixes.length
            ? 'catalog-prefix-candidate'
            : 'identity-review-needed',
  };
});
const report = {
  generatedAt: new Date().toISOString(),
  companyDescriptionProducts: {
    ...descriptionInventory.counts,
    brandProfilesWithMentions: brands.filter(
      (brand) => getCompanyInsights(brand).directoryProducts.length,
    ).length,
    sourceSnapshotAt: descriptionInventory.sourceSnapshotAt,
    reviewedNames: descriptionReviewIndex.size,
    reviewScope: COMPANY_PRODUCT_REVIEW_SCOPE,
    reviewedModelCatalogIds: [
      ...new Set(
        descriptionMentions
          .filter((mention) => mention.productReview?.kind === 'model-identity')
          .flatMap((mention) => mention.reviewedCatalogIds),
      ),
    ].sort(),
    identityCounts: Object.fromEntries(
      [
        'reviewed-model-identity',
        'reviewed-family-reference',
        'reviewed-non-robot-device',
        'reviewed-named-offering',
        'reviewed-system-reference',
        'reviewed-software-reference',
        'reviewed-component-reference',
        'reviewed-brand-reference',
        'reviewed-configuration-reference',
        'reviewed-service-reference',
        'reviewed-machine-family-reference',
        'typed-non-model',
        'catalog-name-candidate',
        'catalog-prefix-candidate',
        'identity-review-needed',
      ].map((status) => [
        status,
        descriptionMentions.filter((mention) => mention.identityStatus === status).length,
      ]),
    ),
    scope:
      'Source-description name extraction only. Catalog name and prefix candidates require identity review; these counts are separate from original listing-model coverage and do not establish manufacturer, availability or unique advantages.',
    mentions: descriptionMentions,
  },
  sourceFeatureCoverage: {
    roboticsdirFeatureAssignments: robotics.entries.reduce(
      (sum, entry) => sum + entry.features.length,
      0,
    ),
    listingFeatureAssignments: buy.listings.reduce((sum, entry) => sum + entry.features.length, 0),
    modelFeatureAssignments: buy.models.reduce((sum, entry) => sum + entry.features.length, 0),
    companyDescriptionFeatureAssignments: buy.companies.reduce(
      (sum, entry) => sum + (entry.features?.length || 0),
      0,
    ),
    companyUseCaseAssignments: buy.companies.reduce(
      (sum, entry) => sum + (entry.useCases?.length || 0),
      0,
    ),
    sourceCompanyDescriptionsWithThemes: buy.companies.filter((entry) => entry.features?.length)
      .length,
    brandProfilesWithDirectoryThemes: brands.filter(
      (brand) => getCompanyInsights(brand).groups.length,
    ).length,
    companyAuthoredFocusReviews: brands.filter((brand) => getCompanyInsights(brand).primary).length,
    scope:
      'Controlled directory themes including category positioning; source descriptions can contain further unextracted information. Counts do not prove unique advantages, manufacturer identity or complete product verification.',
  },
  catalog: {
    models: allRobots.length,
    manufacturers: manufacturers.length,
    brandAndCompanyProfiles: brands.length,
    primarySourcedHighlightRecords: verified.products.length,
  },
  companyCoverage: {
    roboticsdirEntries: robotics.entries.length,
    buyandrentCompanies: buy.companies.length,
    unrepresentedNames: absentCompanies,
  },
  roboticsdir: { counts: counts(roboticsMentions), mentions: roboticsMentions },
  buyandrentrobots: { counts: counts(buyModels), models: buyModels },
  productEvidenceCoverage: {
    matchedCatalogModels: mentionedCatalogModels.length,
    withDatedHighlights: mentionedCatalogModels.length - missingHighlightEvidence.length,
    withoutDatedHighlights: missingHighlightEvidence.length,
    missingHighlightEvidence,
    scope:
      'Evidence for product highlights only. Existing specification tables are not certified by highlight enrichment. Model identity and family coverage are evaluated separately.',
  },
  listingReviews,
  specificationEvidenceCoverage: getSpecificationReviewCoverage(),
  remaining: [...roboticsMentions, ...buyModels].filter(
    (entry) =>
      ![
        'exact',
        'verified-alias',
        'verified-attribution',
        'family-resolved',
        'reviewed-component',
        'reviewed-software',
        'reviewed-service',
        'reviewed-manual-appliance',
        'reviewed-robotic-system',
        'reviewed-named-unit',
        'reviewed-generic-family',
      ].includes(entry.status),
  ),
  limitations: [
    'Directory entries may be historical, generic, duplicated, services or components.',
    'Family/prefix matches require human review; no fuzzy match is counted as an exact model.',
    'Complete source inventory does not mean every product has been checked against its manufacturer.',
    'Search ranking and market leadership have not been measured or established.',
  ],
};
const researchQueue = buildCompetitorReviewQueue({
  coverage: report,
  robots: allRobots,
  brands,
  getInsights: getProductInsights,
  getReview: getSpecificationReview,
  getCompanyFocus: (brand) => getCompanyInsights(brand).primary,
  sourceSnapshots: { roboticsdir: robotics.fetchedAt, buyandrentrobots: buy.fetchedAt },
});
report.allSourceProductEvidenceCoverage = {
  ...researchQueue.summary,
  scope: researchQueue.scope,
};
fs.writeFileSync('data/competitors/coverage.json', `${JSON.stringify(report, null, 2)}\n`);
fs.writeFileSync(
  'data/competitors/research-queue.json',
  `${JSON.stringify(researchQueue, null, 2)}\n`,
);
fs.writeFileSync(
  'data/competitors/robot-research-queue.csv',
  renderCompetitorResearchQueueCsv(researchQueue),
);
console.log(
  JSON.stringify(
    {
      catalog: report.catalog,
      companyCoverage: report.companyCoverage,
      roboticsdir: report.roboticsdir.counts,
      buyandrentrobots: report.buyandrentrobots.counts,
      remaining: report.remaining.length,
      productEvidenceCoverage: {
        matchedCatalogModels: report.productEvidenceCoverage.matchedCatalogModels,
        withDatedHighlights: report.productEvidenceCoverage.withDatedHighlights,
        withoutDatedHighlights: report.productEvidenceCoverage.withoutDatedHighlights,
      },
      listingReviews: {
        reviewed: listingReviews.reviewed,
        components: listingReviews.components,
        software: listingReviews.software,
        otherServices: listingReviews.otherServices,
        educationServices: listingReviews.educationServices,
        roboticSystems: listingReviews.roboticSystems,
        manualAppliances: listingReviews.manualAppliances,
        genericProductFamilies: listingReviews.genericProductFamilies,
        resolvedFamilies: listingReviews.resolvedFamilies,
        resolvedModels: listingReviews.resolvedModels,
        unresolved: listingReviews.unresolved,
      },
    },
    null,
    2,
  ),
);
if (absentCompanies.length) process.exitCode = 1;
