import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _342b3331 = () => import('..\\pages\\component\\list\\index.vue' /* webpackChunkName: "pages_component_list_index" */).then(m => m.default || m)
const _da2e6502 = () => import('..\\pages\\component\\card\\index.vue' /* webpackChunkName: "pages_component_card_index" */).then(m => m.default || m)
const _d4bde972 = () => import('..\\pages\\component\\media-object\\index.vue' /* webpackChunkName: "pages_component_media-object_index" */).then(m => m.default || m)
const _34757a46 = () => import('..\\pages\\component\\button\\index.vue' /* webpackChunkName: "pages_component_button_index" */).then(m => m.default || m)
const _d114c0ee = () => import('..\\pages\\component\\grid\\index.vue' /* webpackChunkName: "pages_component_grid_index" */).then(m => m.default || m)
const _78179792 = () => import('..\\pages\\component\\rating\\index.vue' /* webpackChunkName: "pages_component_rating_index" */).then(m => m.default || m)
const _6210b77f = () => import('..\\pages\\component\\caption\\index.vue' /* webpackChunkName: "pages_component_caption_index" */).then(m => m.default || m)
const _7eacb302 = () => import('..\\pages\\component\\img\\index.vue' /* webpackChunkName: "pages_component_img_index" */).then(m => m.default || m)
const _1d1a92d3 = () => import('..\\pages\\component\\select\\index.vue' /* webpackChunkName: "pages_component_select_index" */).then(m => m.default || m)
const _199f7f14 = () => import('..\\pages\\component\\icon\\index.vue' /* webpackChunkName: "pages_component_icon_index" */).then(m => m.default || m)
const _ea3572d6 = () => import('..\\pages\\component\\cta\\index.vue' /* webpackChunkName: "pages_component_cta_index" */).then(m => m.default || m)
const _241e7f42 = () => import('..\\pages\\component\\text\\index.vue' /* webpackChunkName: "pages_component_text_index" */).then(m => m.default || m)
const _15b32451 = () => import('..\\pages\\component\\tabs\\index.vue' /* webpackChunkName: "pages_component_tabs_index" */).then(m => m.default || m)
const _408b144a = () => import('..\\pages\\component\\input\\index.vue' /* webpackChunkName: "pages_component_input_index" */).then(m => m.default || m)
const _5001581d = () => import('..\\pages\\component\\accordion\\index.vue' /* webpackChunkName: "pages_component_accordion_index" */).then(m => m.default || m)
const _1d7fcbe9 = () => import('..\\pages\\component\\quote\\index.vue' /* webpackChunkName: "pages_component_quote_index" */).then(m => m.default || m)
const _52b4e10a = () => import('..\\pages\\component\\radio\\index.vue' /* webpackChunkName: "pages_component_radio_index" */).then(m => m.default || m)
const _03a782ec = () => import('..\\pages\\component\\breadcrumb\\index.vue' /* webpackChunkName: "pages_component_breadcrumb_index" */).then(m => m.default || m)
const _3fc6746c = () => import('..\\pages\\component\\checkbox\\index.vue' /* webpackChunkName: "pages_component_checkbox_index" */).then(m => m.default || m)
const _465d4255 = () => import('..\\pages\\component\\link\\index.vue' /* webpackChunkName: "pages_component_link_index" */).then(m => m.default || m)
const _8264c8b0 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/component/list",
			component: _342b3331,
			name: "component-list"
		},
		{
			path: "/component/card",
			component: _da2e6502,
			name: "component-card"
		},
		{
			path: "/component/media-object",
			component: _d4bde972,
			name: "component-media-object"
		},
		{
			path: "/component/button",
			component: _34757a46,
			name: "component-button"
		},
		{
			path: "/component/grid",
			component: _d114c0ee,
			name: "component-grid"
		},
		{
			path: "/component/rating",
			component: _78179792,
			name: "component-rating"
		},
		{
			path: "/component/caption",
			component: _6210b77f,
			name: "component-caption"
		},
		{
			path: "/component/img",
			component: _7eacb302,
			name: "component-img"
		},
		{
			path: "/component/select",
			component: _1d1a92d3,
			name: "component-select"
		},
		{
			path: "/component/icon",
			component: _199f7f14,
			name: "component-icon"
		},
		{
			path: "/component/cta",
			component: _ea3572d6,
			name: "component-cta"
		},
		{
			path: "/component/text",
			component: _241e7f42,
			name: "component-text"
		},
		{
			path: "/component/tabs",
			component: _15b32451,
			name: "component-tabs"
		},
		{
			path: "/component/input",
			component: _408b144a,
			name: "component-input"
		},
		{
			path: "/component/accordion",
			component: _5001581d,
			name: "component-accordion"
		},
		{
			path: "/component/quote",
			component: _1d7fcbe9,
			name: "component-quote"
		},
		{
			path: "/component/radio",
			component: _52b4e10a,
			name: "component-radio"
		},
		{
			path: "/component/breadcrumb",
			component: _03a782ec,
			name: "component-breadcrumb"
		},
		{
			path: "/component/checkbox",
			component: _3fc6746c,
			name: "component-checkbox"
		},
		{
			path: "/component/link",
			component: _465d4255,
			name: "component-link"
		},
		{
			path: "/",
			component: _8264c8b0,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
