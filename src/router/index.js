import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/add-product',
    name: 'add-product',
    component: () => import('@/views/AddProductView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductDetailView.vue')
  },
  {
    path: '/products/:id',
    name: 'product-details',
    component: () => import('@/components/ProductItem.vue'),
    props: true
  },
  {
    path: '/products/:id/edit', 
    name: 'edit-product',
    component: () => import('@/views/EditProductView.vue'),
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.user) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;