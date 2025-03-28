import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée pour les TP1",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Docu - Elisabeth", link: "/elisabeth-mercille" },
          { text: "Docu - Nicolas", link: "/nicolas-gourgues" },
        ],
      },
    ],
  },
});
