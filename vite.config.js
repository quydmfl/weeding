import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages project sites are served below /<repository>/, while a
  // <account>.github.io repository is served from the domain root.
  base: process.env.BASE_PATH || '/',
});
