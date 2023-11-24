// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },

  googleFonts: {
    families: {
      "Share+Tech+Mono": true,
    },
  },
});
