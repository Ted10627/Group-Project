import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BMI from '../views/BMI.vue'
import GradeCalculation from '../views/GradeCalculation.vue'
import dice from '../views/DiceGame.vue'
import mora from '../views/MoraGame.vue'
import LoginPage from '../views/LoginPage.vue'
import TestPage from '../views/TestPage.vue'
import EnrollPage from '../views/EnrollPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/BMI',
      name: 'BMI',
      component: BMI
    },
    {
      path: '/score',
      name: 'score',
      component: GradeCalculation
    },
    {
      path: '/dice',
      name: 'dice',
      component: dice
    },
    {
      path: '/mora',
      name: 'mora',
      component: mora
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/enroll',
      name: 'enroll',
      component: EnrollPage
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
