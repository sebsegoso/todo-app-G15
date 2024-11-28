import HomeView from '@/views/HomeView.vue'
import { shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

describe('test router', () => {
  const routerPruebas = createRouter({
    history: createWebHistory(),
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

  it("navegación a name 'home' debe ser path '/'", async () => {
    routerPruebas.push({ name: 'home' })
    await routerPruebas.isReady()

    expect(routerPruebas.currentRoute.value.path).toBe('/')
  })

  it("navegación a name 'pending' debe ser path '/tareas-pendientes'", async () => {
    await routerPruebas.push({ name: 'pending' })
    await routerPruebas.isReady()

    expect(routerPruebas.currentRoute.value.path).toBe('/tareas-pendientes')
  })

  //   corregir!!
  //   it("navegación a name 'home' renderiza componente HomeView", async () => {
  //     routerPruebas.push({ name: 'home' })
  //     await routerPruebas.isReady()

  //     const wrapper = shallowMount(HomeView)
  //     expect(wrapper.exist()).toBe(true)
  //   })
})
