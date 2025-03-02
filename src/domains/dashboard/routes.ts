import Dashboard from '@/domains/dashboard/pages/Dashboard/Dashboard.vue'

export const DASHBOARD_ROUTES = {
  ROOT: 'dashboard',
  ANALYTICS: 'analytics',
  HOURS: 'hours',
}

export const dashboardRoutes = [
  {
    path: '/',
    name: DASHBOARD_ROUTES.ROOT,
    component: Dashboard,
    redirect: {
      name: DASHBOARD_ROUTES.HOURS,
    },
    children: [
      {
        path: '/hours',
        name: DASHBOARD_ROUTES.HOURS,
        component: () =>
          import('@/domains/dashboard/pages/DashboardHours/DashboardHours.vue'),
      },
      {
        path: '/analytics',
        name: DASHBOARD_ROUTES.ANALYTICS,
        component: () =>
          import(
            '@/domains/dashboard/pages/DashboardAnalytics/DashboardAnalytics.vue'
          ),
      },
    ],
  },
]
