import { version } from '../../package.json'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Ledger from '../views/Ledger.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Ledger',
    component: Ledger
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? `/hw-web-bridge-app/dist/${version}` : '/'),
  routes
})

export default router
