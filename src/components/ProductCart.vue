<script setup lang="ts">
import type { Product } from '@/types/product.types'
import { useCartStore } from '@/stores/cartStore'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'

const cart = useCartStore()

defineProps<{ product: Product }>()

const emit = defineEmits<{
  (e: 'add', product: Product): void
  (e: 'removeOne', product: Product): void
}>()
</script>

<template>
  <Card class="group overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
    <CardContent class="p-4">
      <img
        :src="product.imageUrl"
        :alt="product.title"
        class="h-44 w-full rounded-xl object-cover"
      />

      <div class="mt-3 flex items-start justify-between gap-3">
        <div class="min-w-0">
          <CardTitle class="truncate text-base">
            {{ product.title }}
          </CardTitle>

          <p class="mt-1 text-sm text-muted-foreground">
            ${{ product.price }} {{ product.currency }}
          </p>
        </div>

        <Badge
          class="shrink-0"
          :class="
            product.available
              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-100'
              : 'bg-zinc-100 text-zinc-600'
          "
        >
          {{ product.available ? 'Disponible' : 'Agotado' }}
        </Badge>
      </div>

      <p class="mt-2 line-clamp-2 text-sm text-muted-foreground">
        {{ product.description }}
      </p>
    </CardContent>

    <CardFooter class="flex flex-col gap-2 p-4 pt-0">
      <Button class="w-full" :disabled="!product.available" @click="emit('add', product)">
        {{ product.available ? 'Agregar al carrito' : 'No disponible' }}
      </Button>

      <Button
        v-if="cart.hasItem(product.variantId)"
        class="w-full"
        variant="destructive"
        @click="emit('removeOne', product)"
      >
        Borrar del carrito
      </Button>
    </CardFooter>
  </Card>
</template>
