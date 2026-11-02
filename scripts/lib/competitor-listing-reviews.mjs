import { indexModelResolutions } from './competitor-resolutions.mjs';

/** Keep source classifications intact and record a separate, reproducible review. */
export function reviewUnclearListings(listings, reviews, robots, verifiedProducts) {
  const fail = (reason) => {
    throw new Error(`Invalid listing review: ${reason}`);
  };
  if (!Array.isArray(reviews)) fail('expected an array');
  const byId = new Map(listings.map((listing) => [listing.listingId, listing]));
  const reviewed = new Map();
  for (const review of reviews) {
    const listing = byId.get(review.listingId);
    if (!listing) fail('unknown listing');
    if (listing.entryType !== 'unclear') fail('listing is no longer classified as unclear');
    if (review.name !== listing.name || review.company !== listing.company)
      fail('source identity changed');
    if (reviewed.has(review.listingId)) fail('duplicate decision');
    if (
      ![
        'non_robot_component',
        'non_robot_software',
        'non_robot_service',
        'education_service',
        'robotic_system',
        'manual_appliance',
        'generic_product_family',
        'family-resolution',
        'model-resolution',
      ].includes(review.kind)
    )
      fail('unknown kind');
    if (!review.note?.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(review.checkedAt || ''))
      fail('missing review note or date');
    if (!Array.isArray(review.evidence) || !review.evidence.length) fail('missing evidence');
    for (const source of review.evidence) {
      if (!source.publisher?.trim()) fail('missing publisher');
      const url = new URL(source.url);
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password)
        fail('unsafe evidence URL');
    }
    let catalogIds = [];
    if (['family-resolution', 'model-resolution'].includes(review.kind)) {
      const index = indexModelResolutions(
        [
          {
            ...review,
            kind: review.kind === 'model-resolution' ? 'model-alias' : review.kind,
            source: 'buyandrentrobots',
            brand: review.company,
            model: review.name,
          },
        ],
        robots,
        verifiedProducts,
      );
      catalogIds = [...index.values()][0].catalogIds;
    } else if (review.catalogModels?.length || review.catalogManufacturer) {
      fail(
        'a component, system, manual appliance, generic family or service cannot resolve a robot model',
      );
    }
    reviewed.set(review.listingId, { ...review, sourceUrl: listing.sourceUrl, catalogIds });
  }
  const unresolved = listings.filter(
    (listing) => listing.entryType === 'unclear' && !reviewed.has(listing.listingId),
  );
  return {
    sourceUnclearListings: listings.filter((listing) => listing.entryType === 'unclear').length,
    reviewed: reviewed.size,
    components: [...reviewed.values()].filter((entry) => entry.kind === 'non_robot_component')
      .length,
    software: [...reviewed.values()].filter((entry) => entry.kind === 'non_robot_software').length,
    otherServices: [...reviewed.values()].filter((entry) => entry.kind === 'non_robot_service')
      .length,
    educationServices: [...reviewed.values()].filter((entry) => entry.kind === 'education_service')
      .length,
    roboticSystems: [...reviewed.values()].filter((entry) => entry.kind === 'robotic_system')
      .length,
    manualAppliances: [...reviewed.values()].filter((entry) => entry.kind === 'manual_appliance')
      .length,
    genericProductFamilies: [...reviewed.values()].filter(
      (entry) => entry.kind === 'generic_product_family',
    ).length,
    resolvedFamilies: [...reviewed.values()].filter((entry) => entry.kind === 'family-resolution')
      .length,
    resolvedModels: [...reviewed.values()].filter((entry) => entry.kind === 'model-resolution')
      .length,
    unresolved: unresolved.length,
    entries: [...reviewed.values()],
    unreviewedListings: unresolved,
  };
}
