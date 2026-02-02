<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { onMounted } from 'vue'
import { MOCK_PRODUCTS } from '@/api/mockProducts'
import ProductsGrid from '@/components/ProductsGrid.vue'
import type { Product } from '@/types/product.types'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

function onAdd(product: Product) {
  cart.add(
    {
      variantId: product.variantId,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    },
    1,
  )
}

function onRemove(product: Product) {
  cart.removeOne(product.variantId)
}

function goToCart() {
  router.push('/cart')
}

onMounted(() => {
  cart.hydrate()
})
</script>

<template>
  <div>
    <h1 class="text-3xl">Home</h1>
    <p>Router + Pinia OK ✅</p>
    <p>Items en carrito: {{ cart.totalItems }}</p>
    <button
      v-if="cart.totalItems"
      class="flex-1 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800 my-4 ml-2"
      @click="goToCart"
    >
      Ir al carrito
    </button>
  </div>
  <ProductsGrid :product="MOCK_PRODUCTS" @add="onAdd" @removeOne="onRemove" />
</template>
