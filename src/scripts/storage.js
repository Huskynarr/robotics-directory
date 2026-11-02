import { ROBOT_ID_ALIASES } from '../data/robot-id-aliases.js';

export function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, typeof data === 'boolean' ? data.toString() : JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

export function loadFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    if (data === 'true') return true;
    if (data === 'false') return false;
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Failed to load from localStorage:', e);
    return null;
  }
}

/**
 * Load a stored value, returning [] if it is not an array.
 */
export function loadArrayFromLocalStorage(key) {
  const value = loadFromLocalStorage(key);
  if (!Array.isArray(value)) return [];
  if (!['robotFavorites', 'compareRobots'].includes(key)) return value;
  const migrated = [
    ...new Set(
      value.map((id) => (Object.hasOwn(ROBOT_ID_ALIASES, id) ? ROBOT_ID_ALIASES[id] : id)),
    ),
  ];
  if (JSON.stringify(value) !== JSON.stringify(migrated)) saveToLocalStorage(key, migrated);
  return migrated;
}
