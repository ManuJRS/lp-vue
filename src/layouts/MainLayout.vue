<template>
  <div class="min-h-dvh flex flex-col">
    <Navbar />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/FooterComponent.vue'
</script>
