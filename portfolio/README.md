# Ayan Shaikh Portfolio

React and Vite power the portfolio UI. The site includes an experience timeline, skills, project filtering, project detail views, and links to the original project demos stored in the repository.

## Local development

Requirements: Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

## Release checks

```bash
npm run check
npm run preview
```

`npm run build` writes the production site to `portfolio/dist`. The repository's root `index.html` redirects GitHub Pages visitors to that directory. Because the published site references the project demos stored at repository root, keep the `dist` directory committed after a verified production build.

## Project structure

- `src/components`: portfolio sections and project detail UI
- `src/data/projects.js`: project metadata and demo locations
- `src/assets`: source images used by the React app
- `public`: static files copied into the production build
- `dist`: production build served by GitHub Pages
