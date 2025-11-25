export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
  featured?: boolean
  tags?: string[]
}

export interface CartItem extends Product {
  quantity: number
}

export interface Order {
  id: number
  userId: number
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  createdAt: string
  shippingAddress: Address
  paymentMethod: string
}

export interface Address {
  street: string
  city: string
  postalCode: string
  country: string
}
