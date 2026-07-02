# Gemini Instructions: Robotics Directory

This directory contains the **Robotics Directory** project, a highly interactive, comprehensive static directory of robots with advanced search, category filtering, side-by-side comparison, i18n support, and dark mode. 

This document serves as the high-level instructional context and developer manual for any future interactions with this repository.

---

## 1. Project Overview

### Purpose
The Robotics Directory acts as an interactive catalog for various kinds of robots, categorizing them into seven core areas, allowing users to search, filter by specifications, add to favorites, compare up to four robots side-by-side, and share pre-filtered catalog views via URL state.

### Tech Stack & Architecture
- **Framework:** [Astro v6](https://astro.build/) (Static Site Generation / `output: "static"`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Package Manager:** [pnpm v10](https://pnpm.io/) (requires Node.js >= 24)
- **Unit Testing:** [Vitest](https://vitest.dev/)
- **End-to-End Testing:** [Playwright](https://playwright.dev/)
- **CI/CD:** GitHub Actions (lints, formats, runs unit and E2E tests, builds and deploys to GitHub Pages on pushes to `main`)

### Key Directories & Core Files
```
├── astro.config.mjs        # Astro configuration with Tailwind v4 & Sitemap integration
├── eslint.config.js        # ESLint configuration (ES2024, browser globals, Astro plugin)
├── package.json            # Scripts, dependency management, and Node requirements
├── playwright.config.js    # Playwright E2E configuration (desktop & mobile projects)
├── vitest.config.js        # Vitest unit test configuration
├── data/                   # Source of truth: robot data divided into 7 category CSVs
│   ├── cleaning.csv
│   ├── companion.csv
│   ├── educational.csv
│   ├── humanoid.csv
│   ├── outdoor.csv
│   ├── quadruped.csv
│   └── smarthome.csv
├── public/                 # Static assets, including CNAME, favicon, robots.txt, and image assets
│   └── images/             # Robot images structured by category (mostly WebP)
├── scripts/                # Python helper scripts for data merging and image ingestion
│   ├── import-images.py    # Converts downloaded images to WebP and references them in CSVs
│   └── merge-robots.py     # Merges newly researched JSON robot data into category CSVs
└── src/                    # Source files
    ├── components/         # Astro UI components (Header, Footer, Hero, SpecsTable, etc.)
    ├── layouts/            # Layout wraps (Base.astro)
    ├── pages/              # Astro routing pages (index.astro, finder.astro, robot/[id].astro)
    ├── data/               # Categories, translations, and robot loader
    ├── scripts/            # Client-side interactive vanilla JS scripts (i18n, dark-mode, etc.)
    ├── styles/             # Global CSS importing Tailwind v4
    └── utils/              # Helper utilities (CSV parser, formatters)
```

---

## 2. Building and Running

Ensure you have **Node.js 24** (enforced by `.nvmrc`) and **pnpm** installed.

### Key Commands

| Command | Description |
| :--- | :--- |
| `pnpm install` | Installs project dependencies. |
| `pnpm dev` | Starts the Astro development server at `http://localhost:4321`. |
| `pnpm build` | Compiles the production-ready static site to `dist/`. |
| `pnpm preview` | Launches a local server to preview the production build at `http://localhost:4321`. |
| `pnpm lint` | Runs ESLint analysis on files in the `src/` directory. |
| `pnpm format` | Rewrites code formatting in the `src/` directory using Prettier. |
| `pnpm format:check` | Checks formatting without rewriting files. |
| `pnpm test:unit` | Executes the Vitest unit tests once. |
| `pnpm test:unit:watch`| Executes unit tests in interactive watch mode. |
| `pnpm test:e2e` | Runs Playwright E2E tests against a production preview server. |
| `pnpm test` | Runs both unit and E2E test suites sequentially. |

---

## 3. Data Model & Management

### The Source of Truth (CSV)
Robot records live within individual files in `data/` by category. There is no master database.
All CSV files share a **22-column header**:
```
category,manufacturer,model,price,weight,size,batteryLife,maxRuntime,tags,handType,dof,payload,speed,terrain,ipRating,ageRange,website,image,video,gallery,description,releaseDate
```

#### Schema Guidelines:
- **`category`**: Must correspond to the file's category ID (e.g., `humanoid`).
- **`tags`**: A semicolon-separated list of keywords (e.g., `consumer;vacuum;mop`). These drive the subcategory filtering specified in `src/data/categories.js`.
- **`image`**: Relative path from `public/`, usually `images/<category>/<model-slug>.webp`.
- **`gallery`**: Semicolon-separated pairs of paths and labels, formatted as `path|label;path|label`.
- **Quoted Fields**: Any field containing commas must be wrapped in double quotes.

---

## 4. Internationalization (i18n)

The site features **client-side internationalization** supporting 28 UI languages.

- **Translations File:** `src/data/translations.js` (large key-value dictionary grouped by language code).
- **Client Implementation:** `src/scripts/i18n.js`.
- **HTML Attributes:** Elements to translate use special attributes:
  - `data-i18n="translation.key"`: Replaces element text content.
  - `data-i18n-placeholder="translation.key"`: Replaces input placeholder.
  - `data-i18n-aria="translation.key"`: Replaces element `aria-label`.
- **Default Fallback:** `en` (English) is used if a translation key or language code is unavailable.

---

## 5. Development Conventions

When developing or modifying this codebase, strictly follow these practices:

### Code Formatting and Linting
- **EditorConfig:** Adhere to `.editorconfig` rules (indent of 2 spaces, UTF-8, LF endings, trim trailing whitespaces).
- **ESLint:** Configured in `eslint.config.js`. No unused variables allowed (except those starting with an underscore, e.g., `_arg`). Avoid using `var`; always prefer `const` and `let`.
- **Prettier:** Formatting is configured in `.prettierrc` with `singleQuote: true` and the `prettier-plugin-astro` plugin. Run `pnpm format` before committing.

### Client-Side Vanilla JS
All interactivity (favorites, dark mode, sitemap/filters, comparators, and client-side page translation) is implemented in clean vanilla JS inside `src/scripts/`.
- Avoid adding third-party runtime frameworks (React, Vue, etc.) unless explicitly instructed.
- State management for compared items and favorites is persisted in browser local storage (`src/scripts/storage.js`).
- Use the translation engine (`src/scripts/i18n.js`) for rendering dynamic labels on the client side.

### Adding or Updating Robots
To add a new robot or modify existing data:
1. Edit the relevant category file in `data/<category>.csv`.
2. Place images under `public/images/<category>/` in WebP format. Ensure the reference in the `image` column is correct.
3. Ensure the robot has at least one tag corresponding to its subcategories defined in `src/data/categories.js` so it gets indexed properly.
4. Execute `pnpm build` and `pnpm test` locally to ensure static build paths generate correctly and E2E validations remain solid.

### Image Import Automation
You can ingest images automatically using the Python helper script:
```bash
python3 scripts/import-images.py <results.json> <download-dir>
```
- This script processes external images, converts them to high-efficiency WebP files (max width 800px), deposits them in the category subdirectory under `public/images/`, and updates the corresponding CSV rows.

### Data Merging Automation
To merge newly scraped or researched JSON payload data into the categories:
```bash
python3 scripts/merge-robots.py <research.json>
```
- The JSON format must adhere to `{"robots": [...], "updates": [...]}`. It appends new robots after slug-checking for duplicates, and completes missing specifications for existing ones without overriding non-empty values.
