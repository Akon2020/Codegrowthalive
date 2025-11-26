"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useCartStore } from "@/lib/cart-store"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function PanierPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore()
  const total = getTotal()
  const shipping = total > 0 ? (total > 500 ? 0 : 15) : 0
  const tax = total * 0.2
  const finalTotal = total + shipping + tax

  if (items.length === 0) {
    return (
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <main className="flex-1 flex items-center justify-center py-20">
            <div className="content-wrapper px-4 text-center space-y-6">
              <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mx-auto">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold">Votre Panier est Vide</h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                Explorez notre catalogue de produits et ajoutez des articles à votre panier.
              </p>
              <Button size="lg" asChild>
                <Link href="/produits">
                  Découvrir nos Produits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </main>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">

        <main className="flex-1 py-12 md:py-20">
          <div className="content-wrapper px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Panier</h1>
              <p className="text-muted-foreground">
                {items.length} article{items.length > 1 ? "s" : ""} dans votre panier
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="relative h-24 w-24 shrink-0 rounded-lg overflow-hidden bg-muted">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <h3 className="font-semibold text-lg line-clamp-1">{item.name}</h3>
                              <Badge variant="secondary" className="mt-1">
                                {item.category}
                              </Badge>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 border rounded-lg">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-12 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                                disabled={item.quantity >= item.stock}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">
                                {(item.price * item.quantity).toFixed(2)}€
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {item.price}€ × {item.quantity}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="flex gap-2">
                  <Button variant="outline" asChild className="flex-1 bg-transparent">
                    <Link href="/produits">Continuer mes Achats</Link>
                  </Button>
                  <Button variant="destructive" onClick={clearCart}>
                    Vider le Panier
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Récapitulatif</CardTitle>
                    <CardDescription>Détails de votre commande</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Sous-total</span>
                        <span className="font-medium">{total.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Livraison</span>
                        <span className="font-medium">
                          {shipping === 0 ? <span className="text-green-600">Gratuit</span> : `${shipping.toFixed(2)}€`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">TVA (20%)</span>
                        <span className="font-medium">{tax.toFixed(2)}€</span>
                      </div>
                      {total > 0 && total < 500 && (
                        <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                          Livraison gratuite pour toute commande supérieure à 500€
                        </div>
                      )}
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex justify-between items-baseline mb-4">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-3xl font-bold text-primary">{finalTotal.toFixed(2)}€</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button size="lg" className="w-full" asChild>
                        <Link href="/commande">
                          Passer la Commande
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">Paiement sécurisé par Stripe</p>
                    </div>

                    {/* Promo Code */}
                    <div className="space-y-2 pt-4 border-t">
                      <label className="text-sm font-medium">Code promo</label>
                      <div className="flex gap-2">
                        <Input placeholder="PROMO2025" />
                        <Button variant="outline">Appliquer</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

      </div>
    </ThemeProvider>
  )
}
