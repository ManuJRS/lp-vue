<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
const cart = useCartStore()
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>Router + Pinia OK ✅</p>
    <p>Items en carrito: {{ cart.totalItems }}</p>
  </div>
</template>
