import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/01-flight/AboutView.vue')
    },
    {
      path: '/flight',
      name: 'flight',
      component: () => import('../views/01-flight/FlightForm.vue')
    },
    {
      path: '/process-exit',
      name: 'process-exit',
      component: () => import('../views/02-guide/ProcessExit.vue')
    },
    {
      path: '/process-entry',
      name: 'process-entry',
      component: () => import('../views/02-guide/ProcessEntry.vue')
    },
    {
      path: '/check-in',
      name: 'check-in',
      component: () => import('../views/02-guide/Check-in.vue')
    },
    {
      path: '/security-notice',
      name: 'security-notice',
      component: () => import('../views/02-guide/SecurityNotice.vue')
    },
    {
      path: '/concession-ticket',
      name: 'concession-ticket',
      component: () => import('../views/02-guide/ConcessionTicket.vue')
    },
    {
      path: '/relevant-regulation',
      name: 'relevant-regulation',
      component: () => import('../views/02-guide/RelevantRegulation.vue')
    },
    {
      path: '/google-map',
      name: 'google-map',
      component: () => import('../views/04-traffic/GoogleMap.vue')
    },
  ]
})

export default router
