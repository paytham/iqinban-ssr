import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Sparring = () => import('../views/Sparring.vue')
const System = () => import('../views/System.vue')
const About = () => import('../views/About.vue')
const Help = () => import('../views/Help.vue')
const Corp = () => import('../views/Corp.vue')
const Privacy = () => import('../views/Privacy.vue')
const Home = () => import('../views/Home.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Home, meta: { isOpaque: false } },
      { path: '/sparring', component: Sparring, meta: { isOpaque: true } },
      { path: '/system', component: System, meta: { isOpaque: true } },
      { path: '/about', component: About, meta: { isOpaque: false } },
      { path: '/help', component: Help, meta: { isOpaque: false } },
      { path: '/corp', component: Corp, meta: { isOpaque: false } },
      { path: '/privacy', component: Privacy, meta: { isOpaque: false } }
    ]
  })
}
