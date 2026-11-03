import { defineConfig } from 'astro/config';

// Change `site` once the final address is known (custom domain or Firebase URL).
export default defineConfig({
  site: 'https://gayikomiselassi-b9f22.web.app',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
