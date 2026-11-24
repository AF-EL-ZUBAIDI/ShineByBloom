// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Pure static site. Cloudflare serves the `dist/` output directly
// (build command: `npm run build`, output dir: `dist`) - see wrangler.jsonc.
export default defineConfig({
  site: "https://shinebybloom.com", // TODO: replace with the real domain if different
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false, // fr at "/", en at "/en/"
    },
  },
});
