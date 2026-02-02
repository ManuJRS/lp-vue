<script setup lang="ts">
import type { Product } from '@/types/product.types'
import ProductCart from '@/components/ProductCart.vue'

defineProps<{
  product: Product[]
}>()

const emit = defineEmits<{
  (e: 'add', product: Product): void
  (e: 'removeOne', product: Product): void
}>()
</script>

<template>
  <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <ProductCart
      v-for="p in product"
      :key="p.id"
      :product="p"
      @add="emit('add', $event)"
      @removeOne="emit('removeOne', $event)"
    />
  </section>
</template>
