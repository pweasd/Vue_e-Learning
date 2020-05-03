import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import reservation from '../components/reservation.vue'
import reservationComplete from '../components/reservationComplete.vue'
import reservationConfirm from '../components/reservationConfirm.vue'
import Location from './../views/Location.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/location',
    name: 'Location',
    component: Location
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
