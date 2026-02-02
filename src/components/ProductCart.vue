<script setup lang="ts">
import type { Product } from '@/types/product.types'
import { useCartStore } from '@/stores/cartStore'

const cart = useCartStore()

defineProps<{ product: Product }>()

const emit = defineEmits<{
  (e: 'add', product: Product): void
  (e: 'removeOne', product: Product): void
}>()
</script>

<template>
  <article
    class="group rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
  >
    <img :src="product.imageUrl" :alt="product.title" class="h-44 w-full rounded-xl object-cover" />

    <div class="mt-3 flex items-start justify-between gap-3">
      <div class="min-w-0">
        <h3 class="truncate text-base font-semibold text-zinc-900">
          {{ product.title }}
        </h3>
        <p class="mt-1 text-sm text-zinc-600">${{ product.price }} {{ product.currency }}</p>
      </div>

      <span
        class="shrink-0 rounded-full px-2 py-1 text-xs font-medium"
        :class="product.available ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-600'"
      >
        {{ product.available ? 'Disponible' : 'Agotado' }}
      </span>
    </div>

    <p class="mt-2 line-clamp-2 text-sm text-zinc-600">
      {{ product.description }}
    </p>

    <button
      class="mt-3 w-full rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300"
      :disabled="!product.available"
      @click="emit('add', product)"
    >
      {{ product.available ? 'Agregar al carrito' : 'No disponible' }}
    </button>
    <button
      class="mt-3 w-full rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition bg-red-200 disabled:cursor-not-allowed disabled:bg-zinc-300"
      v-if="cart.hasItem(product.variantId)"
      @click="emit('removeOne', product)"
    >
      borrar del carrito
    </button>
    <!-- <button v-if="!product.available" class="mt-2">Avisame cuando este disponible</button> -->
  </article>
</template>
