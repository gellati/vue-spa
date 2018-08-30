import Vue from 'vue'
import Router from 'vue-router'
import headerText from '@/components/headerText'
import splitScreen from '@/components/splitScreen'
import uiAnimation from '@/components/uiAnimation'
import imageChanger from '@/components/imageChanger'
import front from '@/components/frontPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Front page',
      component: front
    },
    {
      path: '/header',
      name: 'Header text',
      component: headerText
    },
    {
      path: '/split',
      name: 'Split-screen',
      component: splitScreen
    },
    {
      path: '/animation',
      name: 'UI Animation',
      component: uiAnimation
    },
    {
      path: '/image',
      name: 'Image changer',
      component: imageChanger
    }
  ]
})
