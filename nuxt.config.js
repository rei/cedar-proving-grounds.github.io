const path = require('path');
const pkg = require('./package')

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  /*
   ** Toggle for client side vs. server side rendering.
   */
  mode: 'universal',
  // mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],

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
  router: {
    extendRoutes(routes) {
      // Update
      routes.push({name: 'home', path: '/home', component: '~/pages/KitchenSink.vue'})
    }
  }
}
