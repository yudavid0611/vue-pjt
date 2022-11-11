import Vue from 'vue'
import VueRouter from 'vue-router'


import WatchListView from '@/views/WatchListView'
import RandomView from '@/views/RandomView'

Vue.use(VueRouter)

const routes = [
  // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  {
    path:'/movies',
    name:'movie',
    component: () => import(/* webpackChunkName: "movie" */ '../views/MovieView.vue')
  },
  {
    path: '/watch-list',
    name: 'watchList',
    component: WatchListView,
  },
  {
    path: '/random',
    name: 'random',
    component: RandomView,
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
