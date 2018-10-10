const path = require('path');
const pkg = require('./package')

const routerBase = process.env.NODE_ENV === 'production' ? '/rei-cedar-proving-grounds/' : '';
const renderMode = process.env.NODE_ENV === 'production' ? 'universal' : 'spa';

module.exports = {
  /*
   ** Toggle for client side vs. server side rendering.
   */
   mode: renderMode,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/trees-left.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:400' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '@rei/cdr-assets/dist/cdr-core.css',
    '@rei/cdr-assets/dist/cdr-fonts.css',
    '@rei/cdr-accordion/dist/cdr-accordion.css',
    '@rei/cdr-breadcrumb/dist/cdr-breadcrumb.css',
    '@rei/cdr-button/dist/cdr-button.css',
    '@rei/cdr-caption/dist/cdr-caption.css',
    '@rei/cdr-card/dist/cdr-card.css',
    '@rei/cdr-checkbox/dist/cdr-checkbox.css',
    '@rei/cdr-cta/dist/cdr-cta.css',
    '@rei/cdr-grid/dist/cdr-grid.css',
    '@rei/cdr-icon/dist/cdr-icon.css',
    '@rei/cdr-img/dist/cdr-img.css',
    '@rei/cdr-input/dist/cdr-input.css',
    '@rei/cdr-link/dist/cdr-link.css',
    '@rei/cdr-list/dist/cdr-list.css',
    '@rei/cdr-media-object/dist/cdr-media-object.css',
    '@rei/cdr-quote/dist/cdr-quote.css',
    '@rei/cdr-radio/dist/cdr-radio.css',
    '@rei/cdr-rating/dist/cdr-rating.css',
    '@rei/cdr-select/dist/cdr-select.css',
    '@rei/cdr-tabs/dist/cdr-tabs.css',
    '@rei/cdr-data-table/dist/cdr-data-table.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
  ],
  proxy: [
    ['/api/dog', { target: 'https://dog.ceo/', pathRewrite: { '^/api/dog': '/api/breeds/image/random' } }]
  ],
  axios: {
    proxy: true
  },
  // buildDir: "docs",
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  generate: {
    dir: "docs"
  },
  router: {
    base: routerBase
  }
}
