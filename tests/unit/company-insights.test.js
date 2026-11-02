import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { buildCompanyInsights } from '../../src/utils/company-insights.js';
import { getCompanyInsights, validateCompanyEvidence } from '../../src/data/company-insights.js';
import { getAllBrands, getBrandSearchText } from '../../src/data/brands.js';

const read = (name) => JSON.parse(fs.readFileSync(`data/competitors/${name}.json`, 'utf8'));
const robotics = {
  fetchedAt: '2026-11-01T12:00:00Z',
  entries: [
    {
      name: 'Recorded Alias',
      positioning: 'Industrial',
      features: ['Force sensing'],
      modelMentions: ['Arm A'],
      sourceUrl: 'https://example.com/directory',
    },
    {
      name: 'Unrelated',
      positioning: 'Other',
      features: ['Unrelated feature'],
      modelMentions: [],
      sourceUrl: 'https://example.com/directory',
    },
  ],
};
const buy = {
  fetchedAt: '2026-11-02T00:00:00Z',
  listings: [
    {
      company: 'Example',
      features: ['Resold cleaning'],
      companyUrl: 'https://example.com/company',
    },
    { company: 'example', features: ['Wrong case'], companyUrl: 'https://example.com/company' },
  ],
  models: [{ companies: ['Recorded Alias'], model: 'Arm B' }],
};

describe('company themes preserve evidence scope', () => {
  it('joins only exact company names and explicit aliases, with separate source snapshots', () => {
    const result = buildCompanyInsights(
      { name: 'Example', aliases: ['Recorded Alias'] },
      robotics,
      buy,
    );
    expect(result.groups).toEqual([
      {
        name: 'RoboticsDir',
        themes: ['Force sensing', 'Industrial'],
        sources: ['https://example.com/directory'],
        checkedAt: '2026-11-01',
      },
      {
        name: 'BuyAndRentRobots',
        themes: ['Resold cleaning'],
        sources: ['https://example.com/company'],
        checkedAt: '2026-11-02',
      },
    ]);
    expect(result.namedModelCandidates).toEqual(['Arm A', 'Arm B']);
    expect(result.featureScope).toContain('not proven unique advantages');
  });

  it('does not infer identity from a website or catalog manufacturer mapping', () => {
    const result = buildCompanyInsights(
      {
        name: 'Unknown',
        aliases: [],
        website: 'https://example.com/company',
        catalogManufacturers: ['Example'],
      },
      robotics,
      buy,
    );
    expect(result.groups).toEqual([]);
    expect(result.namedModelCandidates).toEqual([]);
  });

  it('separates company descriptions and use cases from reseller listing themes', () => {
    const inventory = {
      ...buy,
      companies: [
        {
          name: 'Example',
          features: ['Ethernet communication'],
          useCases: ['research'],
          sourceUrl: 'https://example.com/company',
        },
        {
          name: 'Unrelated',
          features: ['Do not merge'],
          useCases: [],
          sourceUrl: 'https://example.com/company',
        },
      ],
    };
    const result = buildCompanyInsights({ name: 'Example', aliases: [] }, robotics, inventory);
    expect(result.buyandrentCompanyThemes).toEqual(['Ethernet communication']);
    expect(result.buyandrentCompanyUseCases).toEqual(['research']);
    expect(result.buyandrentListingThemes).toEqual(['Resold cleaning']);
    expect(
      result.groups.find((group) => group.name === 'BuyAndRentRobots company profile').themes,
    ).toEqual(['Ethernet communication', 'research']);
  });

  it('exposes every source theme on the exact profile retaining the source name', () => {
    const brands = getAllBrands();
    for (const entry of read('roboticsdir').entries) {
      const brand = brands.find((brand) => [brand.name, ...brand.aliases].includes(entry.name));
      const themes = getCompanyInsights(brand).roboticsdirFeatureThemes;
      for (const theme of entry.features) expect(themes, entry.name).toContain(theme);
    }
    for (const entry of read('buyandrentrobots').listings) {
      const brand = brands.find((brand) => [brand.name, ...brand.aliases].includes(entry.company));
      const themes = getCompanyInsights(brand).buyandrentListingThemes;
      for (const theme of entry.features) expect(themes, entry.company).toContain(theme);
    }
    for (const entry of read('buyandrentrobots').companies) {
      const brand = brands.find((brand) => [brand.name, ...brand.aliases].includes(entry.name));
      const insights = getCompanyInsights(brand);
      for (const theme of entry.features || [])
        expect(insights.buyandrentCompanyThemes, entry.name).toContain(theme);
      for (const useCase of entry.useCases || [])
        expect(insights.buyandrentCompanyUseCases, entry.name).toContain(useCase);
    }
  });

  it('requires dated HTTP sources and rejects duplicate company evidence', () => {
    const data = read('company-evidence');
    expect(validateCompanyEvidence(data)).toBe(data);
    const undated = structuredClone(data);
    undated.companies[0].sources[0].checkedAt = '';
    expect(() => validateCompanyEvidence(undated)).toThrow();
    const unsafe = structuredClone(data);
    unsafe.companies[0].sources[0].url = 'javascript:alert(1)';
    expect(() => validateCompanyEvidence(unsafe)).toThrow();
    const unsafeWebsite = structuredClone(data);
    unsafeWebsite.companies[0].website = 'javascript:alert(1)';
    expect(() => validateCompanyEvidence(unsafeWebsite)).toThrow();
    const unrelatedWebsite = structuredClone(data);
    unrelatedWebsite.companies[0].website = 'https://example.com/';
    expect(() => validateCompanyEvidence(unrelatedWebsite)).toThrow();
    const duplicate = structuredClone(data);
    duplicate.companies.push(duplicate.companies[0]);
    expect(() => validateCompanyEvidence(duplicate)).toThrow();
  });

  it('separates financing clients from manufacturers and makes company focus searchable', () => {
    const brand = getAllBrands().find((brand) => brand.id === 'dealmaker');
    expect(getCompanyInsights(brand).primary.role).toContain('Capital-raising');
    expect(getBrandSearchText(brand)).toContain('investor checkout');
    expect(getCompanyInsights({ ...brand, name: 'Unrelated', aliases: [] }).primary).toBeNull();
  });

  it('links the three named TGW systems without claiming the disputed Go2 or NEO identities', () => {
    const brand = getAllBrands().find((brand) => brand.id === 'tgw-logistics');
    expect(brand.robots.map((robot) => robot.model).sort()).toEqual([
      'DecantCenter RovoFlex',
      'InductCenter RovoFlex',
      'PickCenter RovoFlex',
    ]);
    expect(getCompanyInsights(brand).primary.role).toContain('systems integrator');
    expect(getBrandSearchText(brand)).toContain('carton decanting');
  });

  it('keeps the reviewed T-Chef website separate from the directory media URL', () => {
    const brand = getAllBrands().find((brand) => brand.id === 'zhigu-tianchu');
    expect(brand.website).toBe('https://eu.36kr.com');
    expect(getCompanyInsights(brand).primary.website).toBe('https://www.t-chef.com.cn/');
    expect(getBrandSearchText(brand)).toContain('t-chef');
    expect(brand.catalogManufacturers).toEqual(['T-Chef']);
    expect(brand.robots.map((robot) => robot.model).sort()).toEqual([
      'E10A',
      'TC-40EA-US',
      'TC-E20A',
      'TC-E40A',
      'TC-G1000',
      'TC-G300',
    ]);
    expect(brand.robots.some((robot) => ['Delivery Bot', 'EduBot'].includes(robot.model))).toBe(
      false,
    );
  });
});
