import type { Product } from '@/types/product.types'

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p_001',
    title: 'Ramo Rosas Rojas',
    description: 'Ramo clásico de rosas rojas.',
    imageUrl: 'https://picsum.photos/seed/rosas/800/600',
    price: 799,
    currency: 'MXN',
    variantId: 'v_001',
    available: true,
  },
  {
    id: 'p_002',
    title: 'Arreglo Girasoles',
    description: 'Girasoles frescos para alegrar el día.',
    imageUrl: 'https://picsum.photos/seed/girasoles/800/600',
    price: 649,
    currency: 'MXN',
    variantId: 'v_002',
    available: true,
  },
]
