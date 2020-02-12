// import Vue from 'vue'
// import Router from 'vue-router'
// import Index from '@/pages/Index'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Index',
//       component: Index
//     }
//   ]
// })
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/Index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      meta: {requireAuth: false}
    },
    {path: '*', redirect: '/Index'}
  ]
})
export default router
