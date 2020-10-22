import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'firstPage',
          redirect: { path: '/unimplemented1' }
        },
        {
          path: '/unimplemented1',
          name: 'unimplemented1',
          component: NotFound
        },
        {
          path: '/unimplemented2',
          name: 'unimplemented2',
          component: NotFound
        },
        {
          path: '/unimplemented3',
          name: 'unimplemented3',
          component: NotFound
        },
        {
          path: '/unimplemented4',
          name: 'unimplemented4',
          component: NotFound
        },
        {
          path: '/404',
          name: '404',
          component: NotFound
        }
      ]
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
})
