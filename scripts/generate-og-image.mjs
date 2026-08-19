import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { getAllRobots } from '../src/data/robots.js';
import { CATEGORIES } from '../src/data/categories.js';

const { allRobots } = getAllRobots();
const robotCount = allRobots.length;
const categoryCount = CATEGORIES.length;

const W = 1200;
const H = 630;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f172a"/>
      <stop offset="0.55" stop-color="#1e3a8a"/>
      <stop offset="1" stop-color="#1e40af"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#60a5fa"/>
      <stop offset="1" stop-color="#2563eb"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>

  <!-- Robot motif (scaled from favicon) -->
  <g transform="translate(96, 196) scale(4.2)">
    <circle cx="32" cy="8" r="4" fill="#60a5fa"/>
    <rect x="30" y="12" width="4" height="8" rx="2" fill="#60a5fa"/>
    <rect x="8" y="20" width="48" height="36" rx="8" fill="#3b82f6"/>
    <circle cx="24" cy="36" r="6" fill="white"/>
    <circle cx="40" cy="36" r="6" fill="white"/>
    <circle cx="24" cy="36" r="3" fill="#1e3a8a"/>
    <circle cx="40" cy="36" r="3" fill="#1e3a8a"/>
    <rect x="20" y="46" width="24" height="4" rx="2" fill="white" opacity="0.85"/>
  </g>

  <!-- Title -->
  <text x="430" y="262" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="78" font-weight="700" fill="#ffffff" letter-spacing="-1">Robotics Directory</text>

  <!-- Accent rule -->
  <rect x="432" y="296" width="220" height="6" rx="3" fill="url(#accent)"/>

  <!-- Subtitle -->
  <text x="432" y="356" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="40" font-weight="500" fill="#bfdbfe">${robotCount}+ robots &#183; ${categoryCount} categories &#183; 28 languages</text>

  <!-- Tagline -->
  <text x="432" y="406" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="400" fill="#93c5fd">Comprehensive Robot Database &amp; Comparison Tool</text>

  <!-- URL -->
  <text x="432" y="546" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="600" fill="#60a5fa">robodirectory.huskynarr.de</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync('public/images/og-default.png', png);
console.log(`Generated public/images/og-default.png (${robotCount} robots, ${categoryCount} categories)`);
