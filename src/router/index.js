import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import MamawariRegistration from '../components/MamawariRegistration.vue'
import CarwariRegistration from '../components/CarwariRegistration.vue'
import { ref } from 'vue'

// Create a reactive isLoading state
export const isRouteLoading = ref(false)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/register/mamawari',
    name: 'MamawariRegistration',
    component: MamawariRegistration,
    props: true,
    beforeEnter: async (to, from, next) => {
      isRouteLoading.value = true
      await new Promise(resolve => setTimeout(resolve, 1000)) // 1 second delay
      next()
    }
  },
  {
    path: '/carwari/register',
    name: 'CarwariRegistration',
    component: CarwariRegistration,
    meta: {
      title: 'カーわり登録 | 楽天マイデータ'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global navigation guards
router.beforeEach(() => {
  isRouteLoading.value = true
})

router.afterEach(() => {
  // Small delay to prevent flash
  setTimeout(() => {
    isRouteLoading.value = false
  }, 200)
})

// Add more detailed navigation debugging
router.beforeEach((to, from, next) => {
  console.log('Navigation started:', {
    from: from.path,
    to: to.path,
    fromRoute: from,
    toRoute: to
  })
  next()
})

router.afterEach((to, from) => {
  console.log('Navigation completed:', {
    from: from.path,
    to: to.path
  })
})

export default router 