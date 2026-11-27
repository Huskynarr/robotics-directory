import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/unit/**/*.test.js'],
    environment: 'node',
    // The self-hosted runner shares its host; catalog-wide checks need headroom under load.
    testTimeout: 15000,
  },
});
