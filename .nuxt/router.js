import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _305907d0 = () => import('..\\pages\\KitchenSink.vue' /* webpackChunkName: "pages_KitchenSink" */).then(m => m.default || m)
const _4f3701e2 = () => import('..\\pages\\App.vue' /* webpackChunkName: "pages_App" */).then(m => m.default || m)
const _952f9138 = () => import('..\\pages\\components\\Links.vue' /* webpackChunkName: "pages_components_Links" */).then(m => m.default || m)
const _675f4bf3 = () => import('..\\pages\\components\\Accordion.vue' /* webpackChunkName: "pages_components_Accordion" */).then(m => m.default || m)
const _40057368 = () => import('..\\pages\\components\\Breadcrumb.vue' /* webpackChunkName: "pages_components_Breadcrumb" */).then(m => m.default || m)
const _c90dec1a = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _92645906 = () => import('~/pages/KitchenSink.vue' /* webpackChunkName: "" */).then(m => m.default || m)



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
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/KitchenSink",
			component: _305907d0,
			name: "KitchenSink"
		},
		{
			path: "/App",
			component: _4f3701e2,
			name: "App"
		},
		{
			path: "/components/Links",
			component: _952f9138,
			name: "components-Links"
		},
		{
			path: "/components/Accordion",
			component: _675f4bf3,
			name: "components-Accordion"
		},
		{
			path: "/components/Breadcrumb",
			component: _40057368,
			name: "components-Breadcrumb"
		},
		{
			path: "/",
			component: _c90dec1a,
			name: "index"
		},
		{
			path: "/home",
			component: _92645906,
			name: "home"
		}
    ],
    
    
    fallback: false
  })
}
