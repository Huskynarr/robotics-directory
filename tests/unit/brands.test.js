import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {
  buildBrands,
  getAllBrands,
  getBrandForManufacturer,
  getBrandSearchText,
  loadBrandDirectory,
  normalizeBrandSearch,
  validateBrandDirectory,
} from '../../src/data/brands.js';
import { getAllRobots } from '../../src/data/robots.js';

const brand = (overrides = {}) => ({
  id: 'example-robotics',
  name: 'Example Robotics',
  website: 'https://example.com/',
  categories: ['Industrial robots'],
  aliases: ['Exämple'],
  sources: [{ name: 'Example directory', url: 'https://directory.example/companies/example' }],
  catalogManufacturers: [],
  ...overrides,
});
const directory = (brands = [brand()]) => ({ updatedAt: '2026-11-01', brands });
const robot = (manufacturer, model = 'Existing model', category = 'humanoid') => ({
  id: `${manufacturer}-${model}`,
  manufacturer,
  model,
  category,
});

describe('brand directory validation', () => {
  it('accepts the documented schema and an explicitly unknown website', () => {
    const data = directory([brand({ website: '' })]);
    expect(validateBrandDirectory(data)).toBe(data);
    expect(validateBrandDirectory(directory([])).brands).toEqual([]);
  });

  it.each([
    ['null root', null],
    ['missing updatedAt', { brands: [] }],
    ['non-string updatedAt', { updatedAt: 2026, brands: [] }],
    ['invalid brands', { updatedAt: '2026-11-01', brands: {} }],
    ['unknown root field', { ...directory(), verified: true }],
    ['missing brand field', directory([{ id: 'incomplete', name: 'Incomplete' }])],
    ['unknown brand field', directory([brand({ verified: true })])],
    ['blank name', directory([brand({ name: ' ' })])],
    ['unsafe id', directory([brand({ id: '../unsafe' })])],
    ['uppercase id', directory([brand({ id: 'Example' })])],
    ['duplicate ids', directory([brand(), brand()])],
    ['non-array aliases', directory([brand({ aliases: 'Alias' })])],
    ['non-string category', directory([brand({ categories: [1] })])],
    ['blank alias', directory([brand({ aliases: [''] })])],
    ['duplicate categories', directory([brand({ categories: ['a', 'a'] })])],
    ['non-array mappings', directory([brand({ catalogManufacturers: null })])],
    ['duplicate mappings', directory([brand({ catalogManufacturers: ['Example', 'Example'] })])],
    ['padded mapping', directory([brand({ catalogManufacturers: [' Example'] })])],
    ['relative website', directory([brand({ website: '/example' })])],
    ['script website', directory([brand({ website: 'javascript:alert(1)' })])],
    ['credential website', directory([brand({ website: 'https://user:pass@example.com' })])],
    ['null website', directory([brand({ website: null })])],
    ['non-array sources', directory([brand({ sources: {} })])],
    ['incomplete source', directory([brand({ sources: [{ name: 'Directory' }] })])],
    [
      'unsafe source',
      directory([brand({ sources: [{ name: 'Directory', url: 'data:text/html,x' }] })]),
    ],
    [
      'source extra fields',
      directory([
        brand({ sources: [{ name: 'Directory', url: 'https://example.com', verified: true }] }),
      ]),
    ],
  ])('rejects %s', (_label, data) => {
    expect(() => validateBrandDirectory(data)).toThrow('[brands]');
  });

  it('rejects ambiguous ownership of one exact CSV manufacturer', () => {
    expect(() =>
      validateBrandDirectory(
        directory([
          brand({ catalogManufacturers: ['Exact Name'] }),
          brand({ id: 'other', catalogManufacturers: ['Exact Name'] }),
        ]),
      ),
    ).toThrow('assigned to more than one brand');
  });

  it('rejects duplicate source URLs', () => {
    const source = brand().sources[0];
    expect(() => validateBrandDirectory(directory([brand({ sources: [source, source] })]))).toThrow(
      'duplicate URLs',
    );
  });
});

describe('brand directory loading', () => {
  function withTemporaryDirectory(run) {
    const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'robotics-brands-'));
    try {
      run(path.join(temporary, 'brands.json'), temporary);
    } finally {
      fs.rmSync(temporary, { recursive: true, force: true });
    }
  }

  it('falls back only when the file is missing', () => {
    withTemporaryDirectory((file) => {
      expect(loadBrandDirectory(file)).toBeNull();
      fs.writeFileSync(file, JSON.stringify(directory()));
      expect(loadBrandDirectory(file)).toEqual(directory());
    });
  });

  it('does not hide malformed JSON, invalid schemas or read failures', () => {
    withTemporaryDirectory((file, temporary) => {
      fs.writeFileSync(file, '{ broken');
      expect(() => loadBrandDirectory(file)).toThrow('Invalid JSON');
      fs.writeFileSync(file, 'null');
      expect(() => loadBrandDirectory(file)).toThrow('directory must be an object');
      expect(() => loadBrandDirectory(temporary)).toThrow('Cannot read directory');
    });
  });
});

describe('brand catalog integration', () => {
  it('includes every own manufacturer when JSON is absent, without inventing websites or sources', () => {
    const robots = [robot('B'), robot('A'), robot('A', 'Second model', 'companion')];
    const brands = buildBrands(null, robots);
    expect(brands.map((entry) => entry.name)).toEqual(['A', 'B']);
    expect(brands[0]).toMatchObject({
      modelCount: 2,
      website: '',
      sources: [],
      categories: [],
      catalogManufacturers: ['A'],
      catalogCategories: ['companion', 'humanoid'],
    });
    expect(brands[0].robots).toEqual(robots.slice(1));
    expect(buildBrands(null, [])).toEqual([]);
  });

  it('uses only exact explicit mappings, including multiple CSV spellings', () => {
    const robots = [
      robot('Exact Name'),
      robot('EXACT NAME'),
      robot('exact name'),
      robot('Exämple'),
    ];
    const brands = buildBrands(
      directory([
        brand({
          name: 'exact name',
          catalogManufacturers: ['Exact Name', 'EXACT NAME'],
        }),
      ]),
      robots,
    );
    const mapped = brands.find((entry) => entry.id === 'example-robotics');
    expect(mapped.robots).toEqual(robots.slice(0, 2));
    expect(mapped.modelCount).toBe(2);
    expect(brands).toHaveLength(3);
    expect(getBrandForManufacturer('Exact Name', brands)).toBe(mapped);
    expect(getBrandForManufacturer('Exämple', brands).id).not.toBe(mapped.id);
    expect(getBrandForManufacturer('Unknown', brands)).toBeNull();
    expect(getBrandForManufacturer('exact NAME', brands)).toBeNull();
  });

  it('reports mismatched CSV mapping spellings rather than guessing', () => {
    expect(() =>
      buildBrands(directory([brand({ catalogManufacturers: ['EXAMPLE'] })]), [robot('Example')]),
    ).toThrow('exact CSV spelling');
  });

  it('keeps source categories separate and company-only entries honestly empty', () => {
    const brands = buildBrands(directory(), [robot('Other manufacturer')]);
    const entry = brands.find((item) => item.id === 'example-robotics');
    expect(entry).toMatchObject({
      categories: ['Industrial robots'],
      catalogCategories: [],
      robots: [],
      modelCount: 0,
      directoryUpdatedAt: '2026-11-01',
    });
  });

  it('has stable unique fallback IDs for slug collisions, Unicode and changing input order', () => {
    const robots = ['A B', 'A-B', 'A+B', 'Ä', 'A', '机器人', 'ロボット'].map((name) => robot(name));
    const brands = buildBrands(null, robots);
    const ids = Object.fromEntries(brands.map((entry) => [entry.name, entry.id]));
    expect(new Set(Object.values(ids)).size).toBe(robots.length);
    expect(buildBrands(null, [...robots].reverse()).map((entry) => entry.id)).toEqual(
      brands.map((entry) => entry.id),
    );
    for (const entry of buildBrands(null, [robot('Unrelated'), ...robots])) {
      if (entry.name !== 'Unrelated') expect(entry.id).toBe(ids[entry.name]);
      expect(entry.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it('reserves explicit JSON IDs even if they collide with generated IDs', () => {
    const robots = [robot('Catalog name')];
    const fallbackId = buildBrands(null, robots)[0].id;
    const brands = buildBrands(directory([brand({ id: fallbackId })]), robots);
    expect(new Set(brands.map((entry) => entry.id)).size).toBe(2);
    expect(brands.find((entry) => entry.id === fallbackId).modelCount).toBe(0);
    expect(getBrandForManufacturer('Catalog name', brands).modelCount).toBe(1);
  });

  it('does not mutate the supplied directory or robot data', () => {
    const data = directory([brand({ catalogManufacturers: ['Exact Name'] })]);
    const robots = [robot('Exact Name')];
    const before = JSON.stringify({ data, robots });
    const brands = buildBrands(data, robots);
    brands[0].categories.push('Another category');
    brands[0].sources[0].name = 'Changed';
    brands[0].catalogManufacturers.push('Another name');
    expect(JSON.stringify({ data, robots })).toBe(before);
  });

  it('covers every real catalog robot exactly once and exposes exact manufacturer lookups', () => {
    const brands = getAllBrands();
    const { allRobots, manufacturers } = getAllRobots();
    expect(new Set(brands.map((entry) => entry.id)).size).toBe(brands.length);
    expect(
      brands
        .flatMap((entry) => entry.robots)
        .map((entry) => entry.id)
        .sort(),
    ).toEqual(allRobots.map((entry) => entry.id).sort());
    for (const manufacturer of manufacturers) {
      const entry = getBrandForManufacturer(manufacturer, brands);
      expect(entry.catalogManufacturers).toContain(manufacturer);
      expect(entry.robots.filter((item) => item.manufacturer === manufacturer)).toEqual(
        allRobots.filter((item) => item.manufacturer === manufacturer),
      );
    }
    expect(getBrandForManufacturer(manufacturers[0]).id).toBe(
      getBrandForManufacturer(manufacturers[0], brands).id,
    );
  });
});

describe('brand search', () => {
  it('indexes brand names, Unicode aliases, source/catalog categories, CSV names and actual models', () => {
    const [entry] = buildBrands(
      directory([
        brand({
          name: 'Brand',
          aliases: ['RÖBÖT Straße', '机器人'],
          catalogManufacturers: ['CSV Name'],
        }),
      ]),
      [robot('CSV Name', 'Existing Model', 'robotic-arm')],
    );
    const text = getBrandSearchText(entry);
    for (const query of [
      'BRAND',
      'ro\u0308bo\u0308t',
      'ROBOT STRASSE',
      '机器人',
      'Industrial robots',
      'robotic-arm',
      'Robotic Arm',
      'CSV Name',
      'Existing Model',
    ]) {
      expect(text).toContain(normalizeBrandSearch(query));
    }
    expect(text).not.toContain('invented model');
  });
});
