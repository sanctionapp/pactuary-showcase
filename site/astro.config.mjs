// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Canli adres deploy sonrasi kesinlesir; SITE_URL ile ezilebilir.
const site = process.env.SITE_URL ?? "https://pactuary-showcase.vercel.app";

export default defineConfig({
  site,
  output: "static",
  // Tek CSS dosyasi (~31 KB) sayfaya gomulur: render'i bloklayan istek kalmaz.
  build: { inlineStylesheets: "always" },
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", tr: "tr" } },
    }),
  ],
  // Ekran goruntuleri repo kokundeki assets/ klasorunde (README ile ortak).
  vite: { server: { fs: { allow: [".."] } } },
});
