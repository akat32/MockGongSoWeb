import Vue from 'vue'
import Router from 'vue-router'
import inner from '@/components/inner'
import login from '@/components/login'
import register from '@/components/register'
import mainPage from '@/components/mainPage'
import mandal from '@/components/mandal'
import subMandal from '@/components/subMandal'
import shop from '@/components/shop'
import set from '@/components/set'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: inner,
      children: [
        {
          path: '/mandalA',
          components: {
            footer: mandal
          },
          children: [

          ]
        },
        {
          path: '/mandalS',
          components: {
            footer: subMandal
          }
        },
        {
          path: '/shop',
          components: {
            footer: shop
          }
        },
        {
          path: '/setting',
          components: {
            footer: set
          }
        },
        {
          path: '/',
          components: {
            footer: mainPage
          }
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }
  ]
})
