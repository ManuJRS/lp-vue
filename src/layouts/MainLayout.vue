<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <Navbar />

    <main class="flex-1">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
