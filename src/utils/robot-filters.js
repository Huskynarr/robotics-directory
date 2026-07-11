function firstNumber(value) {
  const match = String(value || '').match(/\d+(?:[.,]\d+)?/);
  return match ? Number.parseFloat(match[0].replace(',', '.')) : null;
}

export function parseWeightKg(value) {
  const amount = firstNumber(value);
  if (amount === null) return null;
  const normalized = String(value).toLowerCase();
  if (/\b(?:lb|lbs|pound|pounds)\b/.test(normalized)) return amount * 0.45359237;
  if (/\b(?:g|gram|grams)\b/.test(normalized) && !/\bkg\b/.test(normalized)) return amount / 1000;
  return amount;
}

export function parseDurationHours(value) {
  const amount = firstNumber(value);
  if (amount === null) return null;
  const normalized = String(value).toLowerCase();
  if (/\b(?:min|mins|minute|minutes)\b/.test(normalized)) return amount / 60;
  if (/\b(?:day|days)\b/.test(normalized)) return amount * 24;
  return amount;
}

export function applyAdvancedRobotFilters(robots, filters) {
  let result = robots;

  if (filters.weight) {
    result = result.filter((robot) => {
      const weight = parseWeightKg(robot.weight);
      if (weight === null) return false;
      if (filters.weight === 'light') return weight < 10;
      if (filters.weight === 'medium') return weight >= 10 && weight <= 50;
      if (filters.weight === 'heavy') return weight > 50;
      return true;
    });
  }

  if (filters.battery) {
    result = result.filter((robot) => {
      const hours = parseDurationHours(robot.batteryLife);
      if (hours === null) return false;
      if (filters.battery === 'short') return hours < 2;
      if (filters.battery === 'medium') return hours >= 2 && hours <= 5;
      if (filters.battery === 'long') return hours > 5;
      return true;
    });
  }

  if (filters.ipRating) {
    result = result.filter((robot) => {
      const rating = (robot.ipRating || '').trim().toLowerCase();
      return rating !== '' && rating !== 'n/a' && rating !== 'not disclosed';
    });
  }

  if (filters.video) {
    result = result.filter((robot) => {
      const video = (robot.video || '').trim().toLowerCase();
      return video !== '' && video !== 'n/a';
    });
  }

  return result;
}
