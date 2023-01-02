export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'XXXXXXXOOO',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
        'width=device-width, height=device-height, user-scalable=no, initial-scale=1',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'A knife-grinder music endeavor.',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'XXXXXXXOOO' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'A knife-grinder music endeavor.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://v3.xxxxxxx.ooo/images/share-xxxxxxxooo-v3.png',
      },
      { hid: 'og:url', property: 'og:url', content: 'https://v3.xxxxxxx.ooo' },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:title', name: 'twitter:title', content: 'XXXXXXXOOO' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'A knife-grinder music endeavor.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://v3.xxxxxxx.ooo/images/share-xxxxxxxooo-v3.png',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Redacted&family=Redacted+Script:wght@300;400&display=swap" rel="stylesheet',
      },
    ],
  },
  css: ['@/assets/application.css'],
  loading: {
    color: '#000000',
    height: '4px',
    failedColor: '#e02020',
    throttle: 0,
  },
  plugins: [
    {
      src: "~/plugins/ga.js",
      mode: "client"
    }
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
}
