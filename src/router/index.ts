import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/ledger'
  },
  {
    path: '/ledger/:extensionId?',
    name: 'Ledger',
    component: () => import(/* webpackChunkName: "ledger" */ '../views/Ledger.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
