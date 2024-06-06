import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'; // Importujte vašu 404 stránku

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
        path: 'turnaje-servery',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'clanky',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'galeria',
        component: () => import('@/views/Tab4Page.vue')
      },
      {
        path: 'yocrew',
        component: () => import('@/views/Tab5Page.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*', // Tento route zachytí všetky neznáme cesty
    component: NotFoundPage // Nastaví NotFoundPage ako 404 stránku
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
