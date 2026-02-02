import { defineStore } from 'pinia'
import type { CartItem } from '@/types/cart.types'

const STORAGE_KEY = 'lp_cart_v1'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItems: (s) => s.items.reduce((acc, it) => acc + it.quantity, 0),
    subtotal: (s) => s.items.reduce((acc, it) => acc + it.price * it.quantity, 0),
    hasItem: (s) => {
      return (variantId: string) => s.items.some((it) => it.variantId === variantId)
    },
  },

  actions: {
    hydrate() {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return

      try {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) this.items = parsed
      } catch {
        // ignore
      }
    },

    persist() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items))
    },

    add(item: Omit<CartItem, 'quantity'>, quantity = 1) {
      const found = this.items.find((x) => x.variantId === item.variantId)

      if (found) found.quantity += quantity
      else this.items.push({ ...item, quantity })

      this.persist()
    },

    updateQty(variantId: string, quantity: number) {
      const found = this.items.find((x) => x.variantId === variantId)
      if (!found) return

      found.quantity = Math.max(1, quantity)
      this.persist()
    },

    remove(variantId: string) {
      this.items = this.items.filter((x) => x.variantId !== variantId)
      this.persist()
    },

    removeOne(variantId: string) {
      const item = this.items.find((x) => x.variantId === variantId)
      if (!item) return

      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        this.items = this.items.filter((x) => x.variantId !== variantId)
      }

      this.persist()
    },

    clear() {
      this.items = []
      this.persist()
    },
  },
})
