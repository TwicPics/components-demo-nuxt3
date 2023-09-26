// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'TwicPics x Nuxt3',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    }
  },
  css: ['@/assets/css/main.scss'],
  modules: [
    [
      `@twicpics/components/nuxt3`,
      {
        domain: process.env.NUXT_TWICPICS_DOMAIN || `https://demo.twic.pics`,
        anticipation: 0.5,
        step: 100
      },
    ],
  ],
})
