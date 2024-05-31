import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/domov'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/domov'
      },
      {
        path: 'domov',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'turnaje',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'profil',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'servery',
        component: () => import('@/views/Tab4Page.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*', // Tento route zachytí všetky neznáme cesty
    redirect: '/domov'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
