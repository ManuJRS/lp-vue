<script lang="ts" setup></script>

<template>
  <section class="mx-auto max-w-3xl p-6">
    <div class="rounded-2xl border border-zinc-200 bg-white p-6">
      <h1 class="text-2xl font-semibold text-zinc-900">¡Gracias por tu compra! 🎉</h1>
      <p class="mt-2 text-sm text-zinc-600">
        Pago simulado completado. Luego aquí podríamos mostrar el número de orden o detalles.
      </p>

      <div class="mt-6 flex gap-3">
        <router-link
          to="/"
          class="rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Volver al catálogo
        </router-link>

        <router-link
          to="/cart"
          class="rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          Ir al carrito
        </router-link>
      </div>
    </div>
  </section>
</template>
