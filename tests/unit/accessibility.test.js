import fs from 'node:fs';
import { describe, expect, it } from 'vitest';

const css = fs.readFileSync('src/styles/global.css', 'utf8');

function colorFrom(block, token) {
  const match = block.match(new RegExp(`${token}:\\s*(#[0-9a-f]{6})`, 'i'));
  if (!match) throw new Error(`Missing color token ${token}`);
  return match[1];
}

function luminance(hex) {
  const channels = hex
    .slice(1)
    .match(/../g)
    .map((value) => Number.parseInt(value, 16) / 255)
    .map((value) => (value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4));
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(first, second) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

describe('AAA color tokens', () => {
  it('keeps normal light-mode text at or above 7:1', () => {
    const theme = css.match(/@theme\s*{([\s\S]*?)\n}/)[1];
    const background = colorFrom(theme, '--color-surface');

    for (const token of ['--color-text-base', '--color-text-secondary', '--color-text-muted']) {
      expect(contrast(colorFrom(theme, token), background), token).toBeGreaterThanOrEqual(7);
    }
    expect(contrast(colorFrom(theme, '--color-primary'), background)).toBeGreaterThanOrEqual(7);
  });

  it('keeps normal dark-mode text at or above 7:1', () => {
    const dark = css.match(/\.dark\s*{([\s\S]*?)\n}/)[1];
    const background = colorFrom(dark, '--color-bg');

    for (const token of ['--color-text-base', '--color-text-secondary', '--color-text-muted']) {
      expect(contrast(colorFrom(dark, token), background), token).toBeGreaterThanOrEqual(7);
    }
    expect(contrast('#a5b4fc', background), 'dark accent text').toBeGreaterThanOrEqual(7);
  });
});
