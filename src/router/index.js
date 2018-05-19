import Vue from 'vue'
import Router from 'vue-router'
import headerText from '@/components/headerText'
import splitScreen from '@/components/splitScreen'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Front page',
      component: headerText
    },
    {
      path: '/split',
      name: 'Split-screen',
      component: splitScreen
    }
  ]
})
