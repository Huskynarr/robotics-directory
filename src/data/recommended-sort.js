/**
 * Priority list for the "recommended" sort mode.
 * Robots matching an entry rank ahead of unmatched robots;
 * within a group, newest (releaseDate desc, then CSV insertion order) breaks ties.
 * Entries are matched by manufacturer (case-insensitive) and optionally by model.
 */
export const RECOMMENDED_PRIORITY = [
  // Latest high-tech humanoids (2025–2026)
  { manufacturer: 'UBTECH', model: 'Panda Robot (Youyou)' },
  { manufacturer: 'LimX Dynamics', model: 'Luna' },
  { manufacturer: 'VinRobotics', model: 'H3' },
  { manufacturer: 'VinRobotics', model: 'H5' },
  { manufacturer: 'DroidUp', model: 'Moya' },
  { manufacturer: 'Holiday Robotics', model: 'FRIDAY' },
  { manufacturer: 'ROBROS', model: 'IGRIS-C' },
  { manufacturer: 'Liaode Technology', model: 'E1 Yiyi' },
  { manufacturer: 'Dinghuo Bionic Technology', model: 'Xiaomei' },
  { manufacturer: 'Italian Institute of Technology', model: 'iRonCub3' },
  { manufacturer: 'Rainbow Robotics', model: 'HUBO' },
  { manufacturer: 'Rainbow Robotics', model: 'DRC-HUBO' },
  // UBTECH UWORLD U1 ultra-bionic series (2026 launch)
  { manufacturer: 'UBTECH', model: 'UWORLD U1 Ultra' },
  { manufacturer: 'UBTECH', model: 'UWORLD U1 Pro' },
  { manufacturer: 'UBTECH', model: 'UWORLD U1 Lite' },
  { manufacturer: 'UBTECH', model: 'U1 (U World)' },
  { manufacturer: 'Neura Robotics' },
  { manufacturer: '1X Technologies', model: 'NEO' },
  { manufacturer: 'Figure' },
  { manufacturer: 'Hugging Face', model: 'Reachy Mini' },
  { manufacturer: 'Pollen Robotics', model: 'Reachy Mini' },
  { manufacturer: 'Westwood Robotics', model: 'THEMIS V2' },
  { manufacturer: 'Ameca', model: 'Ameca' },
  { manufacturer: 'Faraday Future', model: 'FF Master' },
  { manufacturer: 'Faraday Future', model: 'FF Futurist' },
  { manufacturer: 'Faraday Future', model: 'FX Aegis' },
  { manufacturer: 'Faraday Future' },
  { manufacturer: 'SwitchBot', model: 'Onero H1' },
  { manufacturer: 'Weave Robotics', model: 'Isaac 1' },
];
