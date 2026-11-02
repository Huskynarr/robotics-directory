import { describe, expect, it } from 'vitest';
import {
  indexEntryClassifications,
  applyEntryClassification,
} from '../../scripts/lib/competitor-classifications.mjs';

const source = 'buyandrentrobots';
const entry = {
  brand: 'Blue Robotics',
  model: 'M500 Motor',
  status: 'missing',
  catalogIds: [],
  sourceUrls: ['https://example.com/source'],
};
const decision = {
  source,
  brand: entry.brand,
  model: entry.model,
  kind: 'component',
  checkedAt: '2026-11-01',
  evidence: [{ publisher: 'Blue Robotics', url: 'https://bluerobotics.com/motor' }],
  note: 'Subsea motor component rather than a complete robot.',
};
const entries = [{ ...entry, source }];

describe('nonrobot competitor product classification', () => {
  it.each([
    ['named-unit', 'reviewed-named-unit'],
    ['generic-family', 'reviewed-generic-family'],
  ])('preserves %s entries without pretending to identify a catalog model', (kind, status) => {
    const review = { ...decision, kind };
    const result = applyEntryClassification(
      entry,
      source,
      indexEntryClassifications([review], entries),
    );
    expect(result.status).toBe(status);
    expect(result.catalogIds).toEqual([]);
    expect(result.model).toBe(entry.model);
    expect(result.sourceUrls).toEqual(entry.sourceUrls);
    expect(() =>
      indexEntryClassifications([{ ...review, catalogIds: ['invented'] }], entries),
    ).toThrow('cannot claim catalog coverage');
  });
  it('records integrated robotic systems without counting them as individual robot models', () => {
    const system = { ...entry, brand: 'Hai Robotics', model: 'HaiPick System 1' };
    const review = {
      ...decision,
      brand: system.brand,
      model: system.model,
      kind: 'robotic-system',
      note: 'An integrated ASRS with robots, workstations, racking and orchestration software.',
    };
    const result = applyEntryClassification(
      system,
      source,
      indexEntryClassifications([review], [{ ...system, source }]),
    );
    expect(result.status).toBe('reviewed-robotic-system');
    expect(result.catalogIds).toEqual([]);
    expect(result.sourceUrls).toEqual(system.sourceUrls);
    expect(system.status).toBe('missing');
    expect(() =>
      indexEntryClassifications(
        [{ ...review, catalogModels: ['Invented system robot'] }],
        [{ ...system, source }],
      ),
    ).toThrow('cannot claim catalog coverage');
  });
  it('keeps manually guided appliances separate from robot coverage and components', () => {
    const appliance = { ...entry, brand: 'Kärcher', model: 'KB 5' };
    const review = {
      ...decision,
      brand: appliance.brand,
      model: appliance.model,
      kind: 'manual-appliance',
      note: 'The operator pulls the handle and guides this cordless broom over the floor.',
    };
    const index = indexEntryClassifications([review], [{ ...appliance, source }]);
    const result = applyEntryClassification(appliance, source, index);
    expect(result.status).toBe('reviewed-manual-appliance');
    expect(result.catalogIds).toEqual([]);
    expect(result.sourceUrls).toEqual(appliance.sourceUrls);
    expect(result.classificationReview.kind).toBe('manual-appliance');
    expect(appliance.status).toBe('missing');
  });
  it('preserves the source entry and distinguishes a component from catalog coverage', () => {
    const index = indexEntryClassifications([decision], entries);
    const result = applyEntryClassification(entry, source, index);
    expect(result.status).toBe('reviewed-component');
    expect(result.sourceUrls).toEqual(entry.sourceUrls);
    expect(result.catalogIds).toEqual([]);
    expect(entry.status).toBe('missing');
    expect(applyEntryClassification(entry, 'roboticsdir', index)).toBe(entry);
  });
  it('rejects stale or duplicate decisions and missing primary evidence', () => {
    expect(() => indexEntryClassifications([decision], [])).toThrow('unknown source identity');
    expect(() => indexEntryClassifications([decision, decision], entries)).toThrow(
      'duplicate decision',
    );
    expect(() => indexEntryClassifications([{ ...decision, evidence: [] }], entries)).toThrow(
      'missing evidence',
    );
    expect(() =>
      indexEntryClassifications(
        [{ ...decision, evidence: [{ publisher: 'Example', url: 'javascript:alert(1)' }] }],
        entries,
      ),
    ).toThrow('unsafe or incomplete evidence');
  });
  it('cannot hide a conflicting model review or count a component as an imported robot', () => {
    expect(() =>
      indexEntryClassifications([{ ...decision, catalogIds: ['fake'] }], entries),
    ).toThrow('cannot claim catalog coverage');
    const index = indexEntryClassifications([decision], entries);
    expect(() => applyEntryClassification({ ...entry, identityReview: {} }, source, index)).toThrow(
      'Conflicting',
    );
  });
});
