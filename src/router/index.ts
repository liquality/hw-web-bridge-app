import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/ledger'
  },
  {
    path: '/ledger',
    name: 'Ledger',
    component: () => import(/* webpackChunkName: "ledger" */ '../views/Ledger.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
