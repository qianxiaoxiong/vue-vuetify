import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Leisure from './views/Leisure.vue'
import Political from './views/Political.vue'
import Cooking from './views/Cooking.vue'
import Travel from './views/Travel.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/Travel',
      name: 'travel',
      component: Travel
    },
    {
      path: '/category/Leisure',
      name: 'leisure',
      component: Leisure
    },
    {
      path: '/category/Political',
      name: 'political',
      component: Political
    },
    {
      path: '/category/Cooking',
      name: 'cooking',
      component: Cooking
    }
    
  ]
})
