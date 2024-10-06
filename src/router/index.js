import { createRouter, createWebHistory } from '@ionic/vue-router';
import { Preferences } from '@capacitor/preferences';
import TabsPage from '../views/TabsPage.vue';
import ArticlePage from '@/views/ArticlePage.vue';
import TournamentPage from '@/views/TournamentPage.vue';

// Helper function to get access_token from Capacitor Preferences
const getAccessToken = async () => {
  const { value } = await Preferences.get({ key: 'access_token' });
  return value;
}

const routes = [
  {
    path: '/login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/auth/Register.vue')
  },
  {
    path: '/welcome',
    component: () => import('@/views/auth/Welcome.vue')
  },
  {
    path: '/',
    component: TabsPage,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'tab1',
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
        path: 'článok/:slug',
        name: 'Article',
        component: ArticlePage
      },
      {
        path: 'turnaj/:slug',
        name: 'Tournament',
        component: TournamentPage
      },
      {
        path: '/profil',
        name: 'Profil',
        component: () => import('@/views/Profil.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Add navigation guards using Capacitor Preferences for access token handling
router.beforeEach(async (to, from, next) => {
  const accessToken = await getAccessToken(); // Retrieve accessToken from Capacitor Preferences

  if (accessToken) {
    if (to.path === '/welcome' || to.path === '/login') {
      next('/'); // Redirect to main page (tab1) if authenticated and accessing welcome/login page
    } else {
      next(); // Proceed to the requested route
    }
  } else {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      next('/welcome'); // If the route requires auth and no token, redirect to welcome/login
    } else {
      next(); // If route doesn't require auth, proceed as usual
    }
  }
});

export default router;
