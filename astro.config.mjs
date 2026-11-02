import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { getAllBrands } from './src/data/brands.js';
import { ROBOT_ID_ALIASES } from './src/data/robot-id-aliases.js';

const sourceOnlyBrandPaths = new Set(
  getAllBrands()
    .filter((brand) => brand.modelCount === 0)
    .map((brand) => `/brands/${brand.id}/`),
);

export default defineConfig({
  site: 'https://robodirectory.huskynarr.de',
  output: 'static',
  redirects: {
    ...Object.fromEntries(
      Object.entries(ROBOT_ID_ALIASES).map(([oldId, newId]) => [
        `/robot/${oldId}`,
        `/robot/${newId}/`,
      ]),
    ),
    '/brands/gaussian-robotics': '/brands/gausium-robotics/',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return !sourceOnlyBrandPaths.has(pathname) && pathname !== '/brands/gaussian-robotics/';
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
