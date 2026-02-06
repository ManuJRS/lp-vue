<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ShoppingCart } from 'lucide-vue-next'

import { useCartStore } from '@/stores/cartStore'
import { Button } from '@/components/ui/button'

const cart = useCartStore()
const router = useRouter()

const TotalItems = computed(() => cart.totalItems)

function GoToCart() {
  router.push('/cart')
}

onMounted(() => {
  cart.hydrate()
})
</script>

<template>
  <Button variant="ghost" size="icon" class="relative" aria-label="Carrito" @click="GoToCart">
    <ShoppingCart class="h-5 w-5" />

    <span
      v-if="TotalItems > 0"
      class="absolute -top-1 -right-1 h-5 min-w-[1.25rem] rounded-full bg-green-600 px-1 text-xs text-white flex items-center justify-center"
    >
      {{ TotalItems }}
    </span>
  </Button>
</template>
