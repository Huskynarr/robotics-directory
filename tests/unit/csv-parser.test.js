import { describe, it, expect } from 'vitest';
import { parseCSV, parseCSVLine } from '../../src/utils/csv-parser.js';

describe('parseCSVLine', () => {
  it('splits simple comma-separated values', () => {
    expect(parseCSVLine('a,b,c')).toEqual(['a', 'b', 'c']);
  });

  it('handles quoted fields with commas', () => {
    expect(parseCSVLine('a,"b,c",d')).toEqual(['a', 'b,c', 'd']);
  });

  it('handles escaped quotes', () => {
    expect(parseCSVLine('a,"b""c",d')).toEqual(['a', 'b"c', 'd']);
  });

  it('trims whitespace', () => {
    expect(parseCSVLine(' a , b , c ')).toEqual(['a', 'b', 'c']);
  });

  it('handles empty fields', () => {
    expect(parseCSVLine('a,,c')).toEqual(['a', '', 'c']);
  });
});

describe('parseCSV', () => {
  it('parses CSV text into objects', () => {
    const csv = 'name,age\nAlice,30\nBob,25';
    const result = parseCSV(csv);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({ name: 'Alice', age: '30' });
    expect(result[1]).toEqual({ name: 'Bob', age: '25' });
  });

  it('returns empty array for empty input', () => {
    expect(parseCSV('')).toEqual([]);
    expect(parseCSV('header')).toEqual([]);
  });

  it('skips empty lines', () => {
    const csv = 'name,age\nAlice,30\n\nBob,25\n';
    const result = parseCSV(csv);
    expect(result).toHaveLength(2);
  });

  it('handles CSV with quoted commas', () => {
    const csv = 'model,price\n"Robot A","~90,000 USD"';
    const result = parseCSV(csv);
    expect(result[0].price).toBe('~90,000 USD');
  });

  it('rejects malformed rows instead of silently shifting or dropping fields', () => {
    expect(() => parseCSV('model,description,year\nMoflin,touch, light,2024')).toThrow(
      /record 2 has 4 columns; expected 3/i,
    );
    expect(() => parseCSV('model,description,year\nMoflin,touch')).toThrow(
      /record 2 has 2 columns; expected 3/i,
    );
  });
});
