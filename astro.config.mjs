import { defineConfig } from 'astro/config';

// GitHub Pages serveix els projectes en https://<usuari>.github.io/<repo>/
// i els llocs d'usuari en https://<usuari>.github.io/.
// A GitHub Actions, GITHUB_REPOSITORY ja ve informada, així que no cal
// tocar res per publicar. En local, la base és sempre l'arrel.
const [owner = '', repo = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo !== '' && repo === `${owner}.github.io`;
const base = repo !== '' && !isUserSite ? `/${repo}/` : '/';
const site = owner !== '' ? `https://${owner}.github.io` : 'https://exemple.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  server: {
    port: 3000,
  },
});
