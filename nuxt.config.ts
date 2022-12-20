// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'TwicPics x Nuxt3',
    }
  },
  css: ['@/assets/css/main.scss'],
  modules: [
    [
      `@twicpics/components/nuxt3`,
      {
        domain: `https://demo.twic.pics`,
        anticipation: 0.5,
        step: 100,
      },
    ],
  ],
})
