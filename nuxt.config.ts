// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", "nuxt-gtag"],
  css: ["~/assets/tailwind.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  gtag: {
    id: 'G-L7F0EXLNGS'
  }
})