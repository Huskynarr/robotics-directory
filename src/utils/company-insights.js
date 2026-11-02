const unique = (values) => [...new Set(values.filter(Boolean))].sort();

/** Exact source names and explicitly recorded aliases only; a shared website proves no identity. */
export function buildCompanyInsights(company, robotics, buy) {
  const names = new Set([company.name, ...(company.aliases || [])]);
  const entries = robotics.entries.filter((entry) => names.has(entry.name));
  const companyEntries = (buy.companies || []).filter((entry) => names.has(entry.name));
  const listings = buy.listings.filter((listing) => names.has(listing.company));
  const roboticsdirPositioning = unique(entries.map((entry) => entry.positioning));
  const roboticsdirFeatureThemes = unique(entries.flatMap((entry) => entry.features));
  const buyandrentListingThemes = unique(listings.flatMap((listing) => listing.features));
  const buyandrentCompanyThemes = unique(companyEntries.flatMap((entry) => entry.features || []));
  const buyandrentCompanyUseCases = unique(companyEntries.flatMap((entry) => entry.useCases || []));
  const groups = [
    {
      name: 'RoboticsDir',
      themes: unique([...roboticsdirPositioning, ...roboticsdirFeatureThemes]),
      sources: unique(entries.map((entry) => entry.sourceUrl)),
      checkedAt: robotics.fetchedAt.slice(0, 10),
    },
    {
      name: 'BuyAndRentRobots company profile',
      themes: unique([...buyandrentCompanyThemes, ...buyandrentCompanyUseCases]),
      sources: unique(companyEntries.map((entry) => entry.sourceUrl)),
      checkedAt: buy.fetchedAt.slice(0, 10),
    },
    {
      name: 'BuyAndRentRobots',
      themes: buyandrentListingThemes,
      sources: unique(listings.map((listing) => listing.companyUrl || listing.sourceUrl)),
      checkedAt: buy.fetchedAt.slice(0, 10),
    },
  ].filter((group) => group.themes.length > 0);
  return {
    groups,
    roboticsdirPositioning,
    roboticsdirFeatureThemes,
    buyandrentListingThemes,
    buyandrentCompanyThemes,
    buyandrentCompanyUseCases,
    namedModelCandidates: unique([
      ...entries.flatMap((entry) => entry.modelMentions),
      ...buy.models
        .filter((model) => model.companies.some((name) => names.has(name)))
        .map((model) => model.model),
    ]),
    featureScope:
      'Directory themes, not proven unique advantages. Listing themes may concern resold products; company listing does not establish manufacturer identity.',
  };
}
