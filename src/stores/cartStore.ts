import { defineStore } from 'pinia'
import type { CartItem } from '@/types/cart.types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalItems: (s) => s.items.reduce((acc, it) => acc + it.quantity, 0),
  },
})
