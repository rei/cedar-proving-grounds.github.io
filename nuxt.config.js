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
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'docs/trees-left.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:400' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '@rei/cedar/dist/cedar.css',
    '@rei/cedar/dist/cdr-fonts.css',
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
    '@nuxtjs/axios'
  ],
  proxy: [
  ],
  axios: {
    // proxy: true
  },
  // buildDir: "docs",
  /*
  ** Build configuration
  */
  build: {
    vendor: [
    'babel-polyfill', 
    "eventsource-polyfill", 
    "es6-promise", 
    "isomorphic-fetch"
    ],
    babel: {
      presets: [
      ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"],
      plugins: ["transform-vue-jsx", "transform-runtime"]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config) {
      let cjs = 'cjs';
      // let esm = 'esm';
      console.log('>>>>>>>>>>>>> ' + renderMode);
      console.log('>>>>>>>>>>>>> ' + (renderMode.valueOf() === 'universal'));
      if (renderMode.valueOf() === 'universal') {
        cjs = 'cjs.ssr';
        // esm = 'esm.ssr';
      }
      
      config.resolve.alias['rei-cedar$'] = '@rei/cedar/dist/cedar.' + cjs + '.js'
    }
  },
  generate: {
    dir: "docs"
  },
  router: {
    base: routerBase
  }
}
