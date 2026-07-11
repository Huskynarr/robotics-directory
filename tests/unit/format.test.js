import { describe, it, expect } from 'vitest';
import {
  createRobotId,
  resolveImagePath,
  formatPrice,
  formatSpec,
  getPriceValue,
  extractYouTubeId,
} from '../../src/utils/format.js';

describe('createRobotId', () => {
  it('creates kebab-case ID from manufacturer and model', () => {
    expect(createRobotId({ manufacturer: 'Boston Dynamics', model: 'Atlas' })).toBe(
      'boston-dynamics-atlas',
    );
  });

  it('handles single-word names', () => {
    expect(createRobotId({ manufacturer: 'Unitree', model: 'H1' })).toBe('unitree-h1');
  });

  it('returns unknown-robot for invalid input', () => {
    expect(createRobotId(null)).toBe('unknown-robot');
    expect(createRobotId({})).toBe('unknown-robot');
    expect(createRobotId({ manufacturer: 'Test' })).toBe('unknown-robot');
  });
});

describe('resolveImagePath', () => {
  it('returns placeholder for empty input', () => {
    expect(resolveImagePath('')).toBe('/images/placeholder.svg');
    expect(resolveImagePath(null)).toBe('/images/placeholder.svg');
    expect(resolveImagePath(undefined)).toBe('/images/placeholder.svg');
  });

  it('returns http URLs unchanged', () => {
    expect(resolveImagePath('https://example.com/img.jpg')).toBe('https://example.com/img.jpg');
  });

  it('returns data URIs unchanged', () => {
    expect(resolveImagePath('data:image/png;base64,abc')).toBe('data:image/png;base64,abc');
  });

  it('prepends slash to images/ paths', () => {
    expect(resolveImagePath('images/humanoid/atlas.webp')).toBe('/images/humanoid/atlas.webp');
  });

  it('keeps absolute paths unchanged', () => {
    expect(resolveImagePath('/images/test.webp')).toBe('/images/test.webp');
  });
});

describe('formatPrice', () => {
  it('formats USD prices in English', () => {
    const result = formatPrice('69800 USD', 'en');
    expect(result).toContain('69');
    expect(result).toContain('800');
    expect(result).toContain('USD');
  });

  it('formats USD prices in German with correct separator', () => {
    const result = formatPrice('69800 USD', 'de');
    expect(result).toContain('69');
    // German uses . as thousands separator
    expect(result).toMatch(/69[.\s]800/);
  });

  it('handles "On request"', () => {
    expect(formatPrice('On request', 'en')).toBe('On request');
  });

  it('handles "Auf Anfrage"', () => {
    expect(formatPrice('Auf Anfrage', 'de')).toBe('On request');
  });

  it('handles "Not disclosed"', () => {
    expect(formatPrice('Not disclosed', 'en')).toBe('Not disclosed');
  });

  it('handles "Prototype" prices', () => {
    expect(formatPrice('Prototype, not for sale', 'en')).toBe('Prototype');
  });

  it('handles "Discontinued"', () => {
    expect(formatPrice('Discontinued (non-commercial)', 'en')).toBe('Discontinued');
  });

  it('handles approximate prices with ~', () => {
    const result = formatPrice('~2700 USD', 'en');
    expect(result).toContain('~');
    expect(result).toContain('2,700');
  });

  it('returns dash for null/empty input', () => {
    expect(formatPrice(null)).toBe('\u2013');
    expect(formatPrice('')).toBe('\u2013');
  });

  it('handles EUR currency', () => {
    const result = formatPrice('5000 EUR', 'en');
    expect(result).toContain('5,000');
    expect(result).toContain('EUR');
  });

  it.each([
    ['$19,990', 'USD'],
    ['€5,000', 'EUR'],
  ])('normalizes a leading currency symbol in %s', (raw, currency) => {
    expect(formatPrice(raw, 'en')).toContain(currency);
  });

  it('handles estimated suffix', () => {
    const result = formatPrice('10000 USD (estimated)', 'en');
    expect(result).toContain('estimated');
  });
});

describe('formatSpec', () => {
  it('returns raw value for English', () => {
    expect(formatSpec('3.5 m/s', 'en')).toBe('3.5 m/s');
  });

  it('replaces decimal dots with commas for German', () => {
    expect(formatSpec('3.5 m/s', 'de')).toBe('3,5 m/s');
  });

  it('replaces decimal dots for French', () => {
    expect(formatSpec('12.5 kg', 'fr')).toBe('12,5 kg');
  });

  it('returns dash for null input', () => {
    expect(formatSpec(null)).toBe('\u2013');
  });

  it('keeps Chinese format same as English', () => {
    expect(formatSpec('3.5 m/s', 'zh')).toBe('3.5 m/s');
  });
});

describe('getPriceValue', () => {
  it('extracts numeric value from price string', () => {
    expect(getPriceValue('69800 USD')).toBe(69800);
  });

  it('returns Infinity for non-numeric prices', () => {
    expect(getPriceValue('On request')).toBe(Infinity);
    expect(getPriceValue(null)).toBe(Infinity);
  });

  it('handles approximate prices', () => {
    expect(getPriceValue('~2700 USD')).toBe(2700);
  });
});

describe('extractYouTubeId', () => {
  it('extracts ID from full URL', () => {
    expect(extractYouTubeId('https://www.youtube.com/watch?v=8hAt3ILlJrk')).toBe('8hAt3ILlJrk');
  });

  it('extracts ID from embed URL', () => {
    expect(extractYouTubeId('https://www.youtube.com/embed/8hAt3ILlJrk')).toBe('8hAt3ILlJrk');
  });

  it('extracts ID from short URL', () => {
    expect(extractYouTubeId('https://youtu.be/8hAt3ILlJrk')).toBe('8hAt3ILlJrk');
  });

  it('extracts raw 11-char ID', () => {
    expect(extractYouTubeId('8hAt3ILlJrk')).toBe('8hAt3ILlJrk');
  });

  it('returns null for invalid input', () => {
    expect(extractYouTubeId(null)).toBeNull();
    expect(extractYouTubeId('')).toBeNull();
    expect(extractYouTubeId('not-a-url')).toBeNull();
  });
});
