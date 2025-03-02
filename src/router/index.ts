import { createRouter, createWebHistory } from 'vue-router'
import { dashboardRoutes } from '../domains/dashboard/routes'
import { userRoutes } from '../domains/user/routes'

export const routes = [...dashboardRoutes, ...userRoutes]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
