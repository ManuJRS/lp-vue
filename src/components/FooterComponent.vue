<script setup lang="ts">
const Year = new Date().getFullYear()
</script>
<template>
  <footer class="border-t bg-white">
    <div class="mx-auto max-w-6xl px-4 py-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="font-semibold">Florería</p>
          <p class="text-sm opacity-70">Arreglos personalizados y entrega local.</p>
        </div>

        <div class="flex flex-col gap-2 md:flex-row md:gap-6 text-sm">
          <RouterLink to="/" class="hover:opacity-70">Home</RouterLink>
          <RouterLink to="/shop" class="hover:opacity-70">Tienda</RouterLink>
          <a href="#" class="hover:opacity-70">WhatsApp</a>
        </div>
      </div>

      <div class="mt-6 text-xs opacity-60">
        © {{ Year }} Florería. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>
