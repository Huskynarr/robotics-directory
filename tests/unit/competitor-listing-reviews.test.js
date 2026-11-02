import { describe, expect, it } from 'vitest';
import { reviewUnclearListings } from '../../scripts/lib/competitor-listing-reviews.mjs';

const listing = {
  listingId: 'component-1',
  name: 'Motor',
  company: 'Example',
  entryType: 'unclear',
  sourceUrl: 'https://example.com/listing',
};
const review = {
  listingId: listing.listingId,
  name: listing.name,
  company: listing.company,
  kind: 'non_robot_component',
  checkedAt: '2026-11-01',
  note: 'A motor is a component.',
  evidence: [{ publisher: 'Example', url: 'https://example.com/motor' }],
};

describe('review of unclear competitor listings', () => {
  it('keeps source classifications and all unresolved records intact', () => {
    const other = { ...listing, listingId: 'pending-2', name: 'Unresolved' };
    const result = reviewUnclearListings([listing, other], [review], [], []);
    expect(listing.entryType).toBe('unclear');
    expect(result).toMatchObject({
      sourceUnclearListings: 2,
      reviewed: 1,
      components: 1,
      unresolved: 1,
    });
    expect(result.unreviewedListings).toEqual([other]);
    expect(result.entries[0].sourceUrl).toBe(listing.sourceUrl);
  });

  it('rejects orphaned decisions, changed identities and duplicate decisions', () => {
    expect(() => reviewUnclearListings([], [review], [], [])).toThrow('unknown listing');
    expect(() =>
      reviewUnclearListings([listing], [{ ...review, name: 'Different' }], [], []),
    ).toThrow('identity changed');
    expect(() => reviewUnclearListings([listing], [review, review], [], [])).toThrow(
      'duplicate decision',
    );
  });

  it('cannot resolve a product family without manufacturer-supported catalog targets', () => {
    const family = {
      ...review,
      kind: 'family-resolution',
      catalogManufacturer: 'Example',
      catalogModels: ['Model A'],
    };
    expect(() => reviewUnclearListings([listing], [family], [], [])).toThrow(
      'missing catalog target',
    );
    const robot = { id: 'model-a', manufacturer: 'Example', model: 'Model A' };
    expect(() => reviewUnclearListings([listing], [family], [robot], [])).toThrow(
      'lacks primary evidence',
    );
    const result = reviewUnclearListings(
      [listing],
      [family],
      [robot],
      [{ row: robot, sources: [{ type: 'manufacturer', checkedAt: '2026-11-01' }] }],
    );
    expect(result.resolvedFamilies).toBe(1);
    expect(result.entries[0].catalogIds).toEqual(['model-a']);
  });

  it('rejects unsafe sources and prevents a component from counting as a catalog product', () => {
    expect(() =>
      reviewUnclearListings(
        [listing],
        [{ ...review, evidence: [{ publisher: 'Example', url: 'javascript:alert(1)' }] }],
        [],
        [],
      ),
    ).toThrow('unsafe evidence URL');
    expect(() =>
      reviewUnclearListings([listing], [{ ...review, catalogModels: ['Model A'] }], [], []),
    ).toThrow('cannot resolve a robot model');
  });

  it('requires a single primary-supported target for a resolved concrete model', () => {
    const robot = { id: 'model-a', manufacturer: 'Example', model: 'Model A' };
    const product = { row: robot, sources: [{ type: 'manufacturer', checkedAt: '2026-11-01' }] };
    const decision = {
      ...review,
      kind: 'model-resolution',
      catalogManufacturer: 'Example',
      catalogModels: ['Model A'],
    };
    const result = reviewUnclearListings([listing], [decision], [robot], [product]);
    expect(result.resolvedModels).toBe(1);
    expect(result.resolvedFamilies).toBe(0);
    expect(() =>
      reviewUnclearListings(
        [listing],
        [{ ...decision, catalogModels: ['Model A', 'Model B'] }],
        [robot],
        [product],
      ),
    ).toThrow('alias must identify one model');
  });

  it('records software and services without counting them as robot models', () => {
    const software = { ...listing, listingId: 'software-1', name: 'Control software' };
    const service = { ...listing, listingId: 'service-1', name: 'Managed monitoring' };
    const decisions = [software, service].map((entry, index) => ({
      ...review,
      listingId: entry.listingId,
      name: entry.name,
      kind: index === 0 ? 'non_robot_software' : 'non_robot_service',
    }));
    const result = reviewUnclearListings([software, service], decisions, [], []);
    expect(result).toMatchObject({ reviewed: 2, software: 1, otherServices: 1, unresolved: 0 });
    expect(result.entries.every((entry) => entry.catalogIds.length === 0)).toBe(true);
    expect(() =>
      reviewUnclearListings(
        [software],
        [{ ...decisions[0], catalogManufacturer: 'Example', catalogModels: ['Robot A'] }],
        [],
        [],
      ),
    ).toThrow('cannot resolve a robot model');
  });

  it('reviews an integrated system while preserving raw classification and excluding model coverage', () => {
    const system = { ...listing, name: 'Picker wall' };
    const decision = { ...review, name: system.name, kind: 'robotic_system' };
    const result = reviewUnclearListings([system], [decision], [], []);
    expect(system.entryType).toBe('unclear');
    expect(result).toMatchObject({
      reviewed: 1,
      roboticSystems: 1,
      components: 0,
      resolvedModels: 0,
      resolvedFamilies: 0,
      unresolved: 0,
    });
    expect(result.entries[0].catalogIds).toEqual([]);
    expect(result.entries[0].evidence).toEqual(decision.evidence);
    expect(() =>
      reviewUnclearListings([system], [{ ...decision, catalogModels: ['Picker'] }], [], []),
    ).toThrow('cannot resolve a robot model');
  });

  it('records a powered hand-guided lifting aid without counting an autonomous robot', () => {
    const aid = { ...listing, name: 'Masonry lifting aid' };
    const decision = { ...review, name: aid.name, kind: 'manual_appliance' };
    const result = reviewUnclearListings([aid], [decision], [], []);
    expect(aid.entryType).toBe('unclear');
    expect(result).toMatchObject({
      reviewed: 1,
      manualAppliances: 1,
      roboticSystems: 0,
      components: 0,
      resolvedModels: 0,
      resolvedFamilies: 0,
      unresolved: 0,
    });
    expect(result.entries[0].catalogIds).toEqual([]);
    expect(result.entries[0].note).toBe(decision.note);
    expect(() =>
      reviewUnclearListings([aid], [{ ...decision, catalogManufacturer: 'Example' }], [], []),
    ).toThrow('cannot resolve a robot model');
  });

  it('reviews a generic product range without claiming coverage of its unidentified models', () => {
    const range = { ...listing, name: 'Welding Robots' };
    const decision = { ...review, name: range.name, kind: 'generic_product_family' };
    const result = reviewUnclearListings([range], [decision], [], []);
    expect(range.entryType).toBe('unclear');
    expect(result).toMatchObject({
      reviewed: 1,
      genericProductFamilies: 1,
      resolvedFamilies: 0,
      resolvedModels: 0,
      unresolved: 0,
    });
    expect(result.entries[0].catalogIds).toEqual([]);
    expect(() =>
      reviewUnclearListings([range], [{ ...decision, catalogModels: ['Welder A'] }], [], []),
    ).toThrow('cannot resolve a robot model');
  });
});
