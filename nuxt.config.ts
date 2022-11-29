// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/supabase",
    ["@pinia/nuxt", { autoImports: ["dedfineStore"] }],
  ],
  css: ["@/assets/css/tailwindcss.css"],
  imports: {
    dirs: [
      "stores",
      "types",
      "composables",
      "components",
      "layouts",
      "middleware",
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "charset", content: "UTF-8" },
        { name: "og:site_name", content: "JTechClass" },
        { name: "og:type", content: "website" },
        {
          name: "description",
          content:
            "Invoice App created with Nuxt3 to create and track invoice status",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
