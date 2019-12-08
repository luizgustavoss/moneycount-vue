import Vue from 'vue'
import Router from 'vue-router'
import Blankslate from '@/components/Blankslate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blankslate',
      component: Blankslate
    }
  ]
})
