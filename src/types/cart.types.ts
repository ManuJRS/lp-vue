export type CartLine = {
  variantId: string
  quantity: number
}

export type CartItem = {
  variantId: string
  title: string
  price: number
  quantity: number
  imageUrl?: string
}
