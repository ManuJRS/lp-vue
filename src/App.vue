<script setup lang="ts">
import { onMounted } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useCartStore } from '@/stores/cartStore'

const cart = useCartStore()

onMounted(() => {
  cart.hydrate()
})
</script>

<template>
  <MainLayout />
</template>
