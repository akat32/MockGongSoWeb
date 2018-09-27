import Vue from 'vue'
import Router from 'vue-router'
import inner from '@/components/inner'
import login from '@/components/login'
import register from '@/components/register'
import mainPage from '@/components/mainPage'
import mandal from '@/components/mandal'
import subMandal from '@/components/subMandal'
import shop from '@/components/shop'
import sett from '@/components/sett'
import mandalB from '@/components/mandalB'
import mandalC from '@/components/mandalC'
import makeA from '@/components/makeA'
import makeB from '@/components/makeB'
import makeC from '@/components/makeC'
import makeD from '@/components/makeD'
import terms from '@/components/terms'
import terms2 from '@/components/terms2'
import fixA from '@/components/fixA'
import fixB from '@/components/fixB'
import Storage from 'vue-web-storage'
Vue.use(Router)

Vue.use(Storage, {
  prefix: 'MockGongSo',
  drivers: ['session', 'local']
})

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
            footer: sett
          }
        },
        {
          path: '/',
          components: {
            footer: mainPage
          }
        },
        {
          path: '/mandalB',
          components: {
            footer: mandalB
          }
        },
        {
          path: '/mandalC',
          components: {
            footer: mandalC
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
    },
    {
      path: '/makeA',
      component: makeA
    },
    {
      path: '/makeB',
      component: makeB
    },
    {
      path: '/makeC',
      component: makeC
    },
    {
      path: '/makeD',
      component: makeD
    },
    {
      path: '/terms',
      component: terms
    },
    {
      path: '/terms2',
      component: terms2
    },
    {
      path: '/fixA',
      component: fixA
    },
    {
      path: '/fixB',
      component: fixB
    }
  ]
})
