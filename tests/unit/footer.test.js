import { describe, it, expect } from 'vitest';
import { translations, t } from '../../src/data/translations.js';

describe('footer.lastDeploy translation key', () => {
  it('exists in English with the expected label', () => {
    expect(translations.en['footer.lastDeploy']).toBe('Last deploy:');
  });

  it('exists in German with the expected label', () => {
    expect(translations.de['footer.lastDeploy']).toBe('Letzter Deploy:');
  });

  it('resolves the English label via t()', () => {
    expect(t('footer.lastDeploy', 'en')).toBe('Last deploy:');
  });

  it('resolves the German label via t()', () => {
    expect(t('footer.lastDeploy', 'de')).toBe('Letzter Deploy:');
  });

  it('falls back to English for a language without the key', () => {
    expect(t('footer.lastDeploy', '__missing__')).toBe('Last deploy:');
  });
});
