/**
 * Parse a single CSV line handling quoted fields.
 * @param {string} line
 * @returns {string[]}
 */
export function parseCSVLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  return values;
}

/**
 * Split CSV text into records, preserving newlines inside quoted fields.
 * @param {string} text
 * @returns {string[]}
 */
export function splitCSVRecords(text) {
  const records = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      if (inQuotes && text[i + 1] === '"') {
        current += '""';
        i++;
        continue;
      }
      inQuotes = !inQuotes;
      current += char;
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && text[i + 1] === '\n') i++;
      records.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  if (current.length > 0) records.push(current);
  return records;
}

/**
 * Parse CSV text into an array of objects.
 * @param {string} csvText
 * @returns {object[]}
 */
export function parseCSV(csvText) {
  const lines = splitCSVRecords(csvText);
  if (lines.length < 2) return [];
  const headers = parseCSVLine(lines[0]).map((h) => h.trim());
  return lines
    .slice(1)
    .filter((line) => line.trim() !== '')
    .map((line, index) => {
      const values = parseCSVLine(line);
      if (values.length !== headers.length) {
        throw new Error(
          `CSV record ${index + 2} has ${values.length} columns; expected ${headers.length}. ` +
            'Fields containing commas must be quoted.',
        );
      }
      const obj = {};
      headers.forEach((header, i) => {
        if (i < values.length) obj[header] = values[i];
      });
      return obj;
    });
}
