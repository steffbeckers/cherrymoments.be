// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/scss/reset.css", "@/assets/scss/main.scss"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: true,
          download: true,
          inject: true,
        },
        prefetch: true,
      },
    ],
  ],
  app: {
    head: {
      title: "Cherry Moments",
    },
  },
});
