// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Cherry Moments",
      htmlAttrs: { lang: "nl" },
      script: [
        { src: "/js/jquery.min.js", tagPosition: "bodyClose" },
        { src: "/js/bootstrap.bundle.min.js", tagPosition: "bodyClose" },
        { src: "/js/modernizr.custom.js", tagPosition: "bodyClose" },
        { src: "/js/jquery.dlmenu.js", tagPosition: "bodyClose" },
        { src: "/js/jquery-plugin-collection.js", tagPosition: "bodyClose" },
        { src: "/js/script.js", tagPosition: "bodyClose" },
      ],
    },
  },
  css: [
    "~/assets/css/themify-icons.css",
    "~/assets/css/font-awesome.min.css",
    "~/assets/css/flaticon.css",
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/animate.css",
    "~/assets/css/owl.carousel.css",
    "~/assets/css/owl.theme.css",
    "~/assets/css/slick.css",
    "~/assets/css/slick-theme.css",
    "~/assets/css/swiper.min.css",
    "~/assets/css/nice-select.css",
    "~/assets/css/owl.transitions.css",
    "~/assets/css/jquery.fancybox.css",
    "~/assets/css/odometer-theme-default.css",
    "~/assets/css/jquery-ui.css",
    "~/assets/sass/style.scss",
  ],
  devtools: {
    enabled: true,
  },
  modules: ["@nuxt/image-edge"],
  runtimeConfig: {
    server: {
      sendgrid: {
        apiKey: "",
      },
    },
  },
});
