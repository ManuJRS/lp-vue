<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { Button as AcaciaButton } from '@/components/ui/button'

const Year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-background">
    <Separator />

    <div class="mx-auto max-w-6xl px-4 py-10">
      <div class="grid gap-10 md:grid-cols-3">
        <!-- Brand -->
        <div class="space-y-2">
          <p class="text-base font-semibold tracking-tight">Florería</p>
          <p class="text-sm text-muted-foreground">Arreglos personalizados y entrega local.</p>
        </div>

        <!-- Links -->
        <div class="space-y-3">
          <p class="text-sm font-semibold">Navegación</p>
          <div class="flex flex-col gap-2 text-sm">
            <RouterLink to="/" class="text-muted-foreground hover:text-foreground">
              Home
            </RouterLink>
            <RouterLink to="/shop" class="text-muted-foreground hover:text-foreground">
              Tienda
            </RouterLink>
          </div>
        </div>

        <!-- CTA -->
        <div class="space-y-3 md:justify-self-end">
          <p class="text-sm font-semibold">Contacto</p>

          <div class="flex flex-col gap-3">
            <a
              href="https://wa.me/5210000000000"
              target="_blank"
              rel="noreferrer"
              class="inline-flex"
            >
              <AcaciaButton variant="default" class="w-full md:w-auto"> WhatsApp </AcaciaButton>
            </a>

            <p class="text-xs text-muted-foreground">Horario: Lun–Sáb · 9:00 a 18:00</p>
          </div>
        </div>
      </div>

      <div class="mt-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p class="text-xs text-muted-foreground">
          © {{ Year }} Florería. Todos los derechos reservados.
        </p>

        <div class="flex gap-4 text-xs">
          <a href="#" class="text-muted-foreground hover:text-foreground">Privacidad</a>
          <a href="#" class="text-muted-foreground hover:text-foreground">Términos</a>
        </div>
      </div>
    </div>
  </footer>
</template>
