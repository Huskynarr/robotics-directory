# Robotics Directory

A comprehensive, interactive directory of robots with search, filtering and
side-by-side comparison. Built as a static site with [Astro](https://astro.build/)
and [Tailwind CSS](https://tailwindcss.com/).

🔗 **Live:** [robodirectory.huskynarr.de](https://robodirectory.huskynarr.de/)

![Robotics Directory - a searchable collection of robots](public/images/placeholder.svg)

## Features

- **Seven categories** - humanoids, quadrupeds, companions, cleaning, outdoor,
  educational and smart-home robots, each with subcategory filters.
- **Search & advanced filters** - by name, manufacturer, price, weight, battery
  life, use case and more, with shareable URL state.
- **Detail pages** for every robot with specifications, image gallery and video.
- **Compare** up to four robots side by side.
- **Favorites** persisted in the browser.
- **Dark mode** and a **share** function.
- **28 UI languages** with client-side switching.
- **Responsive** layout for all devices.

## Tech Stack

- **Astro** - static site generation
- **Tailwind CSS v4** - styling
- **pnpm** - package manager
- **Vitest** - unit tests
- **Playwright** - end-to-end tests
- **GitHub Actions** - CI and deployment to GitHub Pages

**Requirements:** Node.js 24 (see `.nvmrc`) and pnpm.

## Local Development

```bash
git clone https://github.com/Huskynarr/robotics-directory.git
cd robotics-directory
pnpm install
pnpm dev          # http://localhost:4321
```

### Scripts

| Command            | Description                                   |
|--------------------|-----------------------------------------------|
| `pnpm dev`         | Start the dev server                          |
| `pnpm build`       | Build the static site to `dist/`              |
| `pnpm preview`     | Preview the production build locally          |
| `pnpm lint`        | Run ESLint                                     |
| `pnpm format`      | Format `src/` with Prettier                   |
| `pnpm test:unit`   | Run unit tests (Vitest)                       |
| `pnpm test:e2e`    | Run end-to-end tests (Playwright)             |
| `pnpm test`        | Run unit and E2E tests                        |

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by the
[`deploy`](.github/workflows/deploy.yml) workflow: it runs lint, unit tests,
the build and E2E tests, then publishes `dist/` to the custom domain configured
via `CNAME`.

## Project Structure

```
data/                 Robot data - one CSV per category (source of truth)
public/               Static assets (images, robots.txt, CNAME, favicon)
src/
  components/         Astro UI components
  data/               Data loading, categories, subcategory filters, i18n
  layouts/            Base layout
  pages/              Routes (index + robot/[id])
  scripts/            Client-side behaviour (search, compare, favorites, ...)
  utils/              CSV parser and formatting helpers
tests/
  unit/               Vitest unit tests
  e2e/                Playwright end-to-end tests
```

## Data Model

The robot data lives in `data/`, with **one CSV per category** that the build
(`src/data/robots.js`) reads directly. There is no master file or generator
script - the category CSVs are the single source of truth.

Files: `humanoid.csv`, `quadruped.csv`, `companion.csv`, `cleaning.csv`,
`outdoor.csv`, `educational.csv`, `smarthome.csv`.

Every file shares the same 21-column header:

```
category,manufacturer,model,price,weight,size,batteryLife,maxRuntime,tags,handType,dof,payload,speed,terrain,ipRating,ageRange,website,image,video,gallery,description
```

- `category` must match the file's category id.
- `tags` is a `;`-separated list (e.g. `consumer;vacuum;mop`) and drives the
  subcategory filters in `src/data/subcategory-filters.js`.
- `image` is a path relative to `public/`, e.g. `images/cleaning/foo.webp`.
- `gallery` uses `path|label;path|label` entries.
- Wrap any field containing a comma in double quotes.

### Adding or Updating Robots

1. Add or edit a row in the matching `data/<category>.csv`. Leave unknown fields
   empty rather than inventing values.
2. Put any image in `public/images/<category>/` and reference it from the
   `image` column. Use only images you are licensed to use.
3. Add at least one `tags` value that matches a subcategory filter, otherwise
   the robot will not appear under any subcategory.
4. Run `pnpm build` and `pnpm test` to verify the site builds and stays
   consistent, then commit `data/` and `public/images/`.

## Contributing

Contributions are welcome - see [CONTRIBUTING.md](CONTRIBUTING.md).

<a href="https://github.com/Huskynarr/robotics-directory/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Huskynarr/robotics-directory" alt="Contributors" />
</a>

## License

Licensed under the MIT License - see [LICENSE](LICENSE).

## Contact

For feedback and inquiries, reach out via [@Huskynarr](https://x.com/Huskynarr) on X.
