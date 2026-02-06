<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useCartStore } from '@/stores/cartStore'
import { MOCK_PRODUCTS } from '@/api/mockProducts'
import ProductsGrid from '@/components/ProductsGrid.vue'
import type { Product } from '@/types/product.types'

import { Button as AcaciaButton } from '@/components/ui/button'

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
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-10 space-y-6">
    <header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div class="space-y-1">
        <h1 class="text-3xl font-semibold tracking-tight">Tienda</h1>
        <p class="text-sm text-muted-foreground">Router + Pinia OK ✅</p>
        <p class="text-sm text-muted-foreground">
          Items en carrito: <span class="font-medium text-foreground">{{ cart.totalItems }}</span>
        </p>
      </div>

      <AcaciaButton v-if="cart.totalItems" class="w-full sm:w-auto" @click="goToCart">
        Ir al carrito
      </AcaciaButton>
    </header>

    <ProductsGrid :product="MOCK_PRODUCTS" @add="onAdd" @removeOne="onRemove" />
  </section>
</template>
