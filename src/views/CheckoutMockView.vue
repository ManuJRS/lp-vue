<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const cart = useCartStore()

onMounted(() => {
  cart.hydrate()
})

function completePayment() {
  cart.clear()
  router.push('/thanks')
}
</script>

<template>
  <section class="mx-auto max-w-3xl p-6">
    <h1 class="text-2xl font-semibold text-zinc-900">Checkout mockeado</h1>
    <p class="mt-2 text-sm text-zinc-600">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, voluptates?
    </p>
  </section>
  <div class="mt-6">
    <div
      v-if="cart.items.length === 0"
      class="rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-600"
    >
      No hay items en el carrito.
      <router-link to="/" class="ml-1 font-medium text-zinc-900 underline">
        Volver al catálogo
      </router-link>
    </div>

    <div v-else class="space-y-3">
      <div class="rounded-2xl border border-zinc-200 bg-white p-4">
        <h2 class="text-base font-semibold text-zinc-900">Resumen</h2>

        <ul class="mt-3 space-y-2">
          <li
            v-for="it in cart.items"
            :key="it.variantId"
            class="flex items-center justify-between text-sm text-zinc-700"
          >
            <span class="truncate pr-3">
              {{ it.title }} <span class="text-zinc-500">x{{ it.quantity }}</span>
            </span>
            <span class="font-medium text-zinc-900"> ${{ it.price * it.quantity }} </span>
          </li>
        </ul>

        <div class="mt-4 flex items-center justify-between border-t border-zinc-200 pt-4">
          <span class="text-base font-medium text-zinc-900">Total</span>
          <span class="text-lg font-semibold text-zinc-900">${{ cart.subtotal }}</span>
        </div>
      </div>

      <div class="flex gap-3">
        <router-link
          to="/cart"
          class="flex-1 rounded-xl border border-zinc-200 px-4 py-3 text-center text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          Volver al carrito
        </router-link>

        <button
          class="flex-1 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          @click="completePayment"
        >
          Completar pago (simulado)
        </button>
      </div>
    </div>
  </div>
</template>
