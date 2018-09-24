import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\node_modules\\@rei\\cdr-assets\\dist\\cdr-core.css'

import '..\\node_modules\\@rei\\cdr-assets\\dist\\cdr-fonts.css'

import '..\\node_modules\\@rei\\cdr-accordion\\dist\\cdr-accordion.css'

import '..\\node_modules\\@rei\\cdr-breadcrumb\\dist\\cdr-breadcrumb.css'

import '..\\node_modules\\@rei\\cdr-button\\dist\\cdr-button.css'

import '..\\node_modules\\@rei\\cdr-caption\\dist\\cdr-caption.css'

import '..\\node_modules\\@rei\\cdr-card\\dist\\cdr-card.css'

import '..\\node_modules\\@rei\\cdr-checkbox\\dist\\cdr-checkbox.css'

import '..\\node_modules\\@rei\\cdr-cta\\dist\\cdr-cta.css'

import '..\\node_modules\\@rei\\cdr-grid\\dist\\cdr-grid.css'

import '..\\node_modules\\@rei\\cdr-icon\\dist\\cdr-icon.css'

import '..\\node_modules\\@rei\\cdr-img\\dist\\cdr-img.css'

import '..\\node_modules\\@rei\\cdr-input\\dist\\cdr-input.css'

import '..\\node_modules\\@rei\\cdr-link\\dist\\cdr-link.css'

import '..\\node_modules\\@rei\\cdr-list\\dist\\cdr-list.css'

import '..\\node_modules\\@rei\\cdr-media-object\\dist\\cdr-media-object.css'

import '..\\node_modules\\@rei\\cdr-quote\\dist\\cdr-quote.css'

import '..\\node_modules\\@rei\\cdr-radio\\dist\\cdr-radio.css'

import '..\\node_modules\\@rei\\cdr-rating\\dist\\cdr-rating.css'

import '..\\node_modules\\@rei\\cdr-select\\dist\\cdr-select.css'

import '..\\node_modules\\@rei\\cdr-tabs\\dist\\cdr-tabs.css'


let layouts = {

  "_default": () => import('..\\layouts\\default.vue'  /* webpackChunkName: "layouts_default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"cdr-hw","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Cedar Proving Grounds"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto+Condensed:400|Roboto:400"}],"style":[],"script":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

