import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import CartView from '@/views/CartView.vue'
import CheckoutMockView from '@/views/CheckoutMockView.vue'
import ThanksView from '@/views/ThanksView.vue'
import ShopView from '@/views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/check-out',
      name: 'check-out',
      component: CheckoutMockView,
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: ThanksView,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
    },
  ],
})

export default router
