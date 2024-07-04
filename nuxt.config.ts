import { defineNuxtConfig } from "nuxt/config";
import path from "path";

export default defineNuxtConfig({
  app: {
    baseURL: "/",
    head: {
      title: "RonaldoCoelhoNutri - Nutricionista Exemplar",
      meta: [
        {
          name: "description",
          content:
            "Melhore sua saúde e bem-estar com Ronaldo Coelho, nutricionista exemplar. Serviços personalizados de nutrição para todas as suas necessidades.",
        },
        {
          name: "keywords",
          content:
            "RonaldoCoelhoNutri, nutricionista, saúde, bem-estar, dietas personalizadas, nutrição, alimentação saudável, emagrecimento, ganho de massa muscular",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "_nuxt/public/faviconLogo.ico",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      USER_ID: process.env.USER_ID,
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/eslint"],
  image: {
    quality: 100,
  },
  css: [
    "public/styles.css", // Add your global CSS file here
  ],
  vite: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
        public: path.resolve(__dirname, "public"),
      },
    },
  },
});