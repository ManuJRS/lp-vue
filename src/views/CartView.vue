<script lang="ts" setup>
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const cart = useCartStore()

function backToProds() {
  router.push('/')
}

onMounted(() => {
  cart.hydrate()
})
</script>
<template>
  <section class="mx-auto max-w-3xl p-6">
    <h1 class="text-2xl font-semibold">Carrito</h1>
    <p class="mt-2 text-sm text-zinc-600">
      items: <span class="font-medium text-zinc-900">{{ cart.totalItems }}</span>
    </p>
    <div class="mt-6">
      <div
        v-if="cart.items.length === 0"
        class="rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-600"
      >
        Tu carrito está vacío.
      </div>

      <div v-else class="space-y-3">
        <div
          v-for="it in cart.items"
          :key="it.variantId"
          class="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4"
        >
          <img
            v-if="it.imageUrl"
            :src="it.imageUrl"
            :alt="it.title"
            class="h-16 w-16 rounded-xl object-cover"
          />

          <div class="min-w-0 flex-1">
            <p class="truncate font-medium text-zinc-900">{{ it.title }}</p>
            <p class="text-sm text-zinc-600">${{ it.price }} c/u</p>
          </div>

          <div class="flex items-center gap-2">
            <label class="text-sm text-zinc-600">Qty</label>
            <input
              type="number"
              min="1"
              class="w-20 rounded-xl border border-zinc-200 px-3 py-2 text-sm"
              :value="it.quantity"
              @input="
                cart.updateQty(it.variantId, Number(($event.target as HTMLInputElement).value))
              "
            />
          </div>

          <button
            class="rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
            @click="cart.remove(it.variantId)"
          >
            Quitar
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="cart.items.length > 0"
      class="mt-6 flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-4"
    >
      <span class="text-base font-medium text-zinc-900">Subtotal</span>
      <span class="text-lg font-semibold text-zinc-900"> ${{ cart.subtotal }} </span>
    </div>
    <div v-if="cart.items.length > 0" class="mt-4 flex gap-3">
      <button
        class="flex-1 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        @click="cart.clear()"
      >
        Vaciar carrito
      </button>

      <button
        class="flex-1 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
        @click="$router.push('/check-out')"
      >
        Ir a pagar (mock)
      </button>
    </div>
    <button
      v-if="!cart.items.length"
      @click="backToProds"
      class="rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 mt-4"
    >
      Volver a productos
    </button>
  </section>
</template>
