import { describe, expect, it } from 'vitest';
import { normalizeCompetitorModel } from '../../scripts/lib/competitor-model-name.mjs';

describe('competitor model identity', () => {
  it('retains a model whose name equals its recorded manufacturer', () => {
    expect(normalizeCompetitorModel('Ameca', 'Ameca')).toBe('ameca');
    expect(normalizeCompetitorModel('Ameca', 'Engineered Arts')).toBe('ameca');
  });

  it('removes an optional company prefix and retains distinct configurations', () => {
    expect(normalizeCompetitorModel('PUDU SH1', 'Pudu Robotics')).toBe('sh1');
    expect(normalizeCompetitorModel('SH1', 'Pudu Robotics')).toBe('sh1');
    expect(normalizeCompetitorModel('RB-KAIROS+', 'Robotnik')).toBe('rbkairosplus');
    expect(normalizeCompetitorModel('Indy7 Pro', 'Neuromeka')).not.toBe(
      normalizeCompetitorModel('Indy7', 'Neuromeka'),
    );
  });
});
