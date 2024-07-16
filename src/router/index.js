import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';
import ArticlePage from '@/views/ArticlePage.vue';
import TournamentPage from '@/views/TournamentPage.vue';

const routes = [
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '/',
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
      },
      {
        path: 'článok/:slug',
        name: 'Article',
        component: ArticlePage
      },
      {
        path: 'turnaj/:slug',
        name: 'Tournament',
        component: TournamentPage
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;