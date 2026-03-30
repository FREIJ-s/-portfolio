// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Souhail Freij — Développeur Web & DevOps',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio de Souhail Freij — Développeur Web Fullstack (Vue.js, Nuxt 3, Node.js) en reconversion Cloud/DevOps. Ancien agent de piste, désormais passionné par le code et les infrastructures modernes.',
        },
        { name: 'keywords', content: 'développeur web, fullstack, Vue.js, Nuxt 3, Node.js, Docker, DevOps, portfolio, Souhail Freij' },
        { name: 'author', content: 'Souhail Freij' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Souhail Freij — Développeur Web & DevOps' },
        {
          property: 'og:description',
          content: 'Portfolio de Souhail Freij — Développeur Web Fullstack en reconversion Cloud/DevOps.',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Souhail Freij — Développeur Web & DevOps' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
