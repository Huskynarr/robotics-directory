import { describe, expect, it } from 'vitest';
import { inventoryFromSnapshot } from '../../scripts/collect-roboticsdir.mjs';

describe('competitor inventory evidence', () => {
  const snapshot = {
    fetchedAt: '2026-11-01T18:00:00Z',
    companies: [{ name: 'ABB YuMi', url: 'https://new.abb.com/yumi', category: 'collaborative' }],
    categories: [{ id: 'collaborative', name: 'Collaborative robots' }],
    renderedCount: 1,
  };

  it('preserves source identity without presenting a family as a verified model', () => {
    const result = inventoryFromSnapshot(snapshot);
    expect(result.entries[0].modelMentions).toEqual(['YuMi']);
    expect(result.entries[0].sourceUrl).toBe('https://roboticsdir.com/');
    expect(result.entries[0].evidence).toContain('not independently verified');
    expect(result.completeness.complete).toBe(true);
  });

  it('detects missing rendered entries and missing categories', () => {
    expect(inventoryFromSnapshot({ ...snapshot, renderedCount: 2 }).completeness.complete).toBe(
      false,
    );
    expect(
      inventoryFromSnapshot({
        ...snapshot,
        categories: [...snapshot.categories, { id: 'medical', name: 'Medical' }],
      }).completeness.complete,
    ).toBe(false);
    expect(
      inventoryFromSnapshot({ ...snapshot, companies: [], renderedCount: 0 }).completeness.complete,
    ).toBe(false);
  });

  it('rejects unknown categories and unsafe vendor links', () => {
    expect(() =>
      inventoryFromSnapshot({
        ...snapshot,
        companies: [{ ...snapshot.companies[0], category: 'unknown' }],
      }),
    ).toThrow('Invalid entry');
    expect(() =>
      inventoryFromSnapshot({
        ...snapshot,
        companies: [{ ...snapshot.companies[0], url: 'javascript:alert(1)' }],
      }),
    ).toThrow('Unsafe website');
  });

  it('retains factual differentiators without treating marketing rank as evidence', () => {
    const result = inventoryFromSnapshot({
      ...snapshot,
      companies: [
        {
          name: 'Example',
          url: 'https://example.com',
          category: 'collaborative',
          desc: "World's largest provider of compact 7-axis cobots with built-in vision",
        },
      ],
    });
    expect(result.entries[0].features).toContain('Integrated machine vision');
    expect(result.entries[0].features).toContain('Seven-axis manipulation');
    expect(result.entries[0].features.join(' ')).not.toMatch(/largest|leader/i);
    expect(result.entries[0].featureStatus).toContain('not manufacturer verified');
    expect(result.entries[0].positioning).toBe('Collaborative robots');
  });

  it('retains explicit applications alongside broad category positioning', () => {
    const result = inventoryFromSnapshot({
      ...snapshot,
      companies: [
        {
          name: 'Example',
          url: 'https://example.com',
          category: 'collaborative',
          desc: 'AMRs for palletizing and CNC machine tending, with robotic gripping and welding',
        },
      ],
    });
    expect(result.entries[0].features).toEqual(
      expect.arrayContaining([
        'Autonomous mobile robot platform',
        'Palletizing',
        'Machine tending',
        'Robotic gripping',
        'Robotic welding',
      ]),
    );
  });
});
