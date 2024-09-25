import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';
import ArticlePage from '@/views/ArticlePage.vue';
import TournamentPage from '@/views/TournamentPage.vue';

// Helper function to get a cookie by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
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
        path: '/login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const accessToken = getCookie('access_token'); // Retrieve accessToken from cookies

  if (accessToken) {
    if (to.path === '/login') {
      next('/'); // Redirect to "tabs/tab1" if authenticated and accessing login page
    } else {
      next(); // Proceed to the requested route
    }
  } else {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      next('/login'); // If the route requires auth and no token, redirect to login
    } else {
      next(); // If route doesn't require auth, proceed as usual
    }
  }
});


export default router;