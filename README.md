# Ayan Portfolio

This repository contains Ayan Shaikh's React portfolio and the standalone projects it showcases.

## Portfolio app

The application source is in [`portfolio`](./portfolio). See [`portfolio/README.md`](./portfolio/README.md) for local development and release instructions.

## Published structure

- `index.html` redirects visitors to the production portfolio build.
- `portfolio/dist` contains the verified production build.
- `Task_1` through `Task_15`, `3D`, and `Game` contain the standalone project demos linked from the portfolio.

Before publishing changes, run the portfolio checks:

```bash
cd portfolio
npm ci
npm run check
```
