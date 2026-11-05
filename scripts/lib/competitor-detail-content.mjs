import { createHash } from 'node:crypto';

/** Per-listing content coverage stays separate from catalog field evidence. */
export function summarizeDetailContentChecks(
  listings,
  ledger,
  catalogIds,
  classifications = [],
  listingReviews = [],
) {
  const inventory = new Map(listings.map((row) => [row.listingId, row]));
  const latest = new Map();
  for (const check of ledger.checks) {
    if (!inventory.has(check.listingId)) continue;
    latest.set(check.listingId, check);
  }
  let matched = 0;
  let reviewed = 0;
  let followUps = 0;
  let conflicts = 0;
  let stale = 0;
  let nonModels = 0;
  for (const [id, check] of latest) {
    const row = inventory.get(id);
    const current = ['name', 'company', 'companySlug', 'sourceUrl', 'fetchedAt'].every(
      (key) => check.inventory?.[key] === (row[key] || ''),
    );
    if (!current) {
      stale++;
      continue;
    }
    const valid =
      check.source?.status === 200 &&
      check.source.finalUrl === `https://buyandrentrobots.com/robot/${id}` &&
      /text\/html/i.test(check.source.contentType) &&
      /^[a-f0-9]{64}$/.test(check.source.bodySha256) &&
      check.source.bodyBytes > 0 &&
      check.identity?.status === 'matched-identity' &&
      ['url', 'title', 'company', 'companyLink', 'description', 'uniqueVisibleFields'].every(
        (key) => check.identity.fields?.[key] === true,
      ) &&
      (check.content?.title === row.name ||
        check.content?.title === row.name.replace(/\s+/g, ' ')) &&
      check.content.company === row.company &&
      check.content.companyPath === `/companies/${row.companySlug}` &&
      /^[a-f0-9]{64}$/.test(check.content.descriptionSha256) &&
      check.content.descriptionCharacters > 0;
    if (!valid) continue;
    matched++;
    const review = check.review;
    if (review?.status !== 'reviewed') continue;
    const comparison = check.savedApiComparison;
    if (comparison?.claim !== undefined) {
      const claim = comparison.claim;
      const claimHash =
        typeof claim === 'string'
          ? createHash('sha256').update(claim.trim().replace(/\s+/g, ' ')).digest('hex')
          : '';
      if (
        comparison.identicalToApiSnapshot !== true ||
        !/^[a-f0-9]{64}$/.test(comparison.apiSnapshotSha256 || '') ||
        claimHash !== check.content.descriptionSha256 ||
        !review.directoryClaims?.includes(claim)
      )
        throw new Error(`Invalid saved API claim: ${id}`);
    }
    const classified =
      review.classification &&
      review.classification.source === 'buyandrentrobots' &&
      review.classification.model === row.name &&
      [row.brand, row.company].includes(review.classification.brand) &&
      classifications.some((decision) =>
        ['source', 'brand', 'model', 'kind'].every(
          (key) => decision[key] === review.classification[key],
        ),
      );
    const listingReviewed =
      review.listingReview &&
      row.entryType === 'unclear' &&
      !['family-resolution', 'model-resolution'].includes(review.listingReview.kind) &&
      review.listingReview.listingId === id &&
      review.listingReview.name === row.name &&
      review.listingReview.company === row.company &&
      listingReviews.some((decision) =>
        ['listingId', 'name', 'company', 'kind'].every(
          (key) => decision[key] === review.listingReview[key],
        ),
      );
    // Company headings, brand references and service offers do not identify a robot model.
    const companyScoped =
      review.companyScope &&
      ['non_product', 'service', 'brand'].includes(row.entryType) &&
      ['listingId', 'name', 'company', 'companySlug', 'entryType', 'sourceUrl'].every(
        (key) => review.companyScope[key] === row[key],
      );
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(review.reviewedAt) ||
      !review.note?.trim() ||
      !Array.isArray(review.directoryClaims) ||
      !review.directoryClaims.length ||
      review.directoryClaims.some((claim) => typeof claim !== 'string' || !claim.trim()) ||
      !Array.isArray(review.catalogIds) ||
      (!review.catalogIds.length && !classified && !listingReviewed && !companyScoped) ||
      review.catalogIds.some((catalogId) => catalogIds && !catalogIds.has(catalogId)) ||
      ![
        'consistent-with-primary-scope',
        'directory-conflict-recorded',
        'primary-follow-up-required',
      ].includes(review.assessment) ||
      !review.primarySources?.length ||
      review.primarySources.some(
        (source) =>
          !/^https?:\/\//.test(source.url || '') ||
          !/^\d{4}-\d{2}-\d{2}$/.test(source.checkedAt || '') ||
          Boolean(source.error) ||
          (source.status !== undefined && source.status !== 200),
      )
    )
      throw new Error(`Invalid detail content decision: ${id}`);
    reviewed++;
    if (!review.catalogIds.length) nonModels++;
    if (review.assessment === 'primary-follow-up-required') followUps++;
    if (review.assessment === 'directory-conflict-recorded') conflicts++;
  }
  return {
    inventoryListings: inventory.size,
    attemptedListings: latest.size,
    unattemptedListings: inventory.size - latest.size,
    matchedIdentityResponses: matched,
    reviewedDetailContents: reviewed,
    remainingDetailContentReviews: inventory.size - reviewed,
    pendingPrimaryFollowUps: followUps,
    directoryConflicts: conflicts,
    reviewedNonModelListings: nonModels,
    staleInventoryReferences: stale,
    trackedAttempts: ledger.checks.length,
    scope:
      'Per-URL visible detail content and explicit decisions. HTTP success and automatic parsing are not content review. Directory claims are not exclusive USPs or manufacturer-verified specifications; primary-source dates remain separate.',
  };
}
