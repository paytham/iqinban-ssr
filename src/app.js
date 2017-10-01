import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store/index'
import { createRouter } from './router/index'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import * as filters from './util/filters'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})

// mixin for handling title
Vue.mixin(titleMixin)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is caled for each SSR request)
export function createApp () {
  // create store and router instances
  const store = createStore()
  const router = createRouter()
  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)
  // create the app instance
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  // expose the app, the router and the store
  return { app, router, store }
}
