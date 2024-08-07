import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    //homepage
    {
      path: '/announcement-information',
      name: 'announcement-information',
      component: () => import('../views/00-homepage/AnnouncementInformation.vue')
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
<<<<<<< Updated upstream
    {
      path: '/process-exit',
      name: 'process-exit',
      component: () => import('../views/02-guide/ProcessExit.vue')
    },
    {
      path: '/process-entry',
      name: 'process-entry',
      component: () => import('../views/02-guide/ProcessEntry.vue')
=======
    // 搭機指南
    {
      path: '/flight-process',
      children: [
        {
          path: 'exit',
          name: 'process-exit',
          component: () => import('../views/02-guide/ProcessExit.vue')
        },
        {
          path: 'entry',
          name: 'process-entry',
          component: () => import('../views/02-guide/ProcessEntry.vue')
        }
      ]
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
      path: '/tax-refund',
      name: 'tax-refund',
      component: () => import('../views/02-guide/TaxRefund.vue')
    },
    // 機場服務
    {
      path: '/floor-plan',
      children: [
        {
          path: '1f',
          name: 'floor-plan-1f',
          component: () => import('../views/03-service/FloorPlan01.vue')
        },
        {
          path: '2f',
          name: 'floor-plan-2f',
          component: () => import('../views/03-service/FloorPlan02.vue')
        },
        {
          path: '3f',
          name: 'floor-plan-3f',
          component: () => import('../views/03-service/FloorPlan03.vue')
        },
        {
          path: '4f',
          name: 'floor-plan-4f',
          component: () => import('../views/03-service/FloorPlan04.vue')
        },
        {
          path: 'b1',
          name: 'floor-plan-b1',
          component: () => import('../views/03-service/FloorPlan05.vue')
        }
      ]
    },
    {
      path: '/service-facilities',
      name: 'service-facilities',
      component: () => import('../views/03-service/ServiceFacilities.vue')
    },
    {
      path: '/facility-information',
      name: 'facility-information',
      component: () => import('../views/03-service/FacilityInformation.vue')
    },
    {
      path: '/accessible-service',
      children: [
        {
          path: 'transportation',
          name: 'accessible-transportation',
          component: () => import('../views/03-service/AccessibleTransportation.vue')
        },
        {
          path: 'service',
          name: 'accessible-service',
          component: () => import('../views/03-service/AccessibleService.vue')
        },
        {
          path: 'passengers',
          name: 'accessible-passengers',
          component: () => import('../views/03-service/AccessiblePassengers.vue')
        }
      ]
    },
    // 機場交通
    {
>>>>>>> Stashed changes
      path: '/google-map',
      name: 'google-map',
      component: () => import('../views/04-traffic/GoogleMap.vue')
    },
<<<<<<< Updated upstream
  ]
=======
    {
      path: '/parking-lot',
      name: 'parking-lot',
      component: () => import('../views/04-traffic/ParkingLot.vue')
    },
    {
      path: '/taxi-service',
      name: 'taxi-service',
      component: () => import('../views/04-traffic/TaxiService.vue')
    },
    {
      path: '/car-rental-service',
      name: 'car-rental-service',
      component: () => import('../views/04-traffic/CarRentalService.vue')
    },
    {
      path: '/bus-information',
      name: 'bus-information',
      component: () => import('../views/04-traffic/BusInformation.vue')
    },
    {
      path: '/sightseeing-guide',
      name: 'sightseeing-guide',
      component: () => import('../views/04-traffic/SightseeingGuide.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
>>>>>>> Stashed changes
})

export default router
