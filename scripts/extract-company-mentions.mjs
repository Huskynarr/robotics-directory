import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractCompanyMentions } from './lib/competitor-company-mentions.mjs';

export function main() {
  const argument = (flag, fallback) =>
    process.argv.includes(flag) ? process.argv[process.argv.indexOf(flag) + 1] : fallback;
  const read = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
  const source = read(argument('--input', 'data/competitors/company-descriptions.json'));
  const raw = Array.isArray(source) ? source : source.companies;
  const inventory = read('data/competitors/buyandrentrobots.json');
  if (!Array.isArray(source) && source.sourceSnapshotAt !== inventory.fetchedAt) {
    throw new Error('Source description snapshot differs from saved inventory');
  }
  if (
    raw.length !== inventory.completeness.apiCompanies ||
    raw.length !== inventory.companies.length ||
    !raw.length
  )
    throw new Error('Incomplete source company snapshot; preserving existing company mentions');
  const result = extractCompanyMentions(
    raw,
    read(argument('--reviews', 'data/competitors/company-description-reviews.json')),
    inventory.fetchedAt,
  );
  const sourceIdentities = new Set(
    inventory.companies.map((company) => JSON.stringify([company.name, company.slug])),
  );
  for (const review of result.reviews) {
    if (!sourceIdentities.has(JSON.stringify([review.companyName, review.companySlug])))
      throw new Error('Saved inventory differs from reviewed raw source identities');
  }
  // No file mutation until every record and snapshot check has passed.
  fs.writeFileSync(
    argument('--out', 'data/competitors/company-mentions.json'),
    `${JSON.stringify(result, null, 2)}\n`,
  );
  console.log(JSON.stringify(result.counts, null, 2));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
