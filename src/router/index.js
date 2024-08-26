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
      path: '/announcement-information2',
      name: 'announcement-information2',
      component: () => import('../views/00-homepage/AnnouncementInformation2.vue')
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import('../views/00-homepage/SiteMap.vue')
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: () => import('../views/00-homepage/FAQ.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/01-flight/AboutView.vue')
    },
    {
      path: '/InternationalFlights',
      name: 'InternationalFlights',
      component: () => import('../views/01-flight/InternationalFlights.vue')
    },
    {
      path: '/InternationalScheduled',
      name: 'InternationalScheduled',
      component: () => import('../views/01-flight/InternationalScheduled.vue')
    },
    {
      path: '/DomesticFlights',
      name: 'DomesticFlights',
      component: () => import('../views/01-flight/DomesticFlights.vue')
    },
    {
      path: '/DomesticScheduled',
      name: 'DomesticScheduled',
      component: () => import('../views/01-flight/DomesticScheduled.vue')
    },
    {
      path: '/flight',
      name: 'flight',
      component: () => import('../views/01-flight/FlightForm.vue')
    },
    {
      path: '/airline',
      name: 'airline',
      component: () => import('../views/01-flight/Airline.vue')
    },
    {
      path: '/Flight-standby-information',
      name: 'Flight-standby-information',
      component: () => import('../views/01-flight/FlightStandbyInformation.vue')
    },
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
        }
      ]
    },
    {
      path: '/service-facilities',
      name: 'service-facilities',
      component: () => import('../views/03-service/ServiceFacilities.vue')
    },
    // 服務設施內頁
    {
      path: '/service-facilities',
      children: [
        {
          path: 'facility-information',
          name: 'facility-information',
          component: () => import('../views/03-service/FacilityInformation.vue')
        },
        {
          path: 'financial-service',
          name: 'financial-service',
          component: () => import('../views/03-service/FinancialService.vue')
        },
        {
          path: 'insurance-service',
          name: 'insurance-service',
          component: () => import('../views/03-service/InsuranceService.vue')
        },
        {
          path: 'telecommunication-network',
          name: 'telecommunication-network',
          component: () => import('../views/03-service/TelecommunicationNetwork.vue')
        },
        {
          path: 'cars-rental-service',
          name: 'cars-rental-service',
          component: () => import('../views/03-service/CarRentalService.vue')
        },
        {
          path: 'food-stores',
          name: 'food-stores',
          component: () => import('../views/03-service/FoodStores.vue')
        },
        {
          path: 'tourist-counter',
          name: 'tourist-counter',
          component: () => import('../views/03-service/TouristCounter.vue')
        },
        {
          path: 'baggage-packing',
          name: 'baggage-packing',
          component: () => import('../views/03-service/BaggagePacking.vue')
        },
        {
          path: 'storage-services',
          name: 'storage-services',
          component: () => import('../views/03-service/StorageServices.vue')
        },
        {
          path: 'medical-service',
          name: 'medical-service',
          component: () => import('../views/03-service/MedicalService.vue')
        }
      ]
    },
    //無障礙服務
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
    {
      path: '/baby-stroller',
      name: 'baby-stroller',
      component: () => import('../views/03-service/BabyStroller.vue')
    },
    {
      path: '/lost-property',
      name: 'lost-property',
      component: () => import('../views/03-service/LostProperty.vue')
    },
    //旅客申訴
    {
      path: '/passenger-complaints',
      name: 'passenger-complaints',
      component: () => import('../views/03-service/PassengerComplaints.vue')
    },
    {
      path: '/complaint-regulations',
      name: 'complaint-regulations',
      component: () => import('../views/03-service/ComplaintRegulations.vue')
    },
    // 機場交通
    {
      path: '/google-map',
      name: 'google-map',
      component: () => import('../views/04-traffic/GoogleMap.vue')
    },
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
})

export default router
