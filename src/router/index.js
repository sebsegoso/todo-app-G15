import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { currentUser } from '@/firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        authRequired: false,
      },
    },
    {
      path: '/tareas-pendientes',
      name: 'pending',
      component: () => import('../views/PendingView.vue'),
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/tareas-completadas',
      name: 'completed',
      component: () => import('../views/CompletedView.vue'),
      meta: {
        authRequired: true,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const user = currentUser()

  if (!user && to.meta.authRequired) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
