<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const IsOpen = ref(false)
const Route = useRoute()

function Close() {
  IsOpen.value = false
}

watch(
  () => Route.fullPath,
  () => {
    IsOpen.value = false
  },
)

function LinkClass(path: string) {
  return Route.path === path ? 'font-semibold' : 'opacity-80'
}

function MobileLinkClass(path: string) {
  return Route.path === path ? 'bg-black/5 font-semibold' : 'opacity-90'
}
</script>
<template>
  <header class="sticky top-0 z-50 bg-white border-b">
    <nav class="mx-auto max-w-6xl px-4">
      <div class="h-14 flex items-center justify-between">
        <RouterLink to="/" class="font-semibold tracking-tight"> Florería </RouterLink>
        <div class="hidden md:flex items-center gap-6">
          <RouterLink to="/" class="text-sm hover:opacity-70" :class="LinkClass('/')">
            Home
          </RouterLink>

          <RouterLink to="/shop" class="text-sm hover:opacity-70" :class="LinkClass('/shop')">
            Tienda
          </RouterLink>
        </div>

        <button
          type="button"
          class="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm"
          @click="IsOpen = !IsOpen"
          :aria-expanded="IsOpen"
          aria-label="Abrir menú"
        >
          <span v-if="!IsOpen">Menú</span>
          <span v-else>Cerrar</span>
        </button>
      </div>

      <div v-if="IsOpen" class="md:hidden pb-4">
        <div class="flex flex-col gap-2">
          <RouterLink
            to="/"
            class="rounded-lg px-3 py-2 text-sm hover:bg-black/5"
            :class="MobileLinkClass('/')"
            @click="Close"
          >
            Home
          </RouterLink>

          <RouterLink
            to="/shop"
            class="rounded-lg px-3 py-2 text-sm hover:bg-black/5"
            :class="MobileLinkClass('/shop')"
            @click="Close"
          >
            Tienda
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>
