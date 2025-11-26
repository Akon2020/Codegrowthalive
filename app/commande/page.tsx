"use client"

import type React from "react"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useCartStore } from "@/lib/cart-store"
import { CreditCard, Building2, Smartphone, CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export default function CommandePage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const total = getTotal()
  const shipping = total > 500 ? 0 : 15
  const tax = total * 0.2
  const finalTotal = total + shipping + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate order processing
    clearCart()
    router.push("/commande/confirmation")
  }

  if (items.length === 0) {
    router.push("/panier")
    return null
  }

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">

        <main className="flex-1 py-12 md:py-20">
          <div className="content-wrapper px-4">
            <div className="mb-8">
              <Button variant="ghost" asChild className="mb-4">
                <Link href="/panier">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour au Panier
                </Link>
              </Button>
              <h1 className="text-3xl font-bold">Finaliser la Commande</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Left Column - Forms */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Contact Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Informations de Contact</CardTitle>
                      <CardDescription>Comment pouvons-nous vous contacter ?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom *</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Shipping Address */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Adresse de Livraison</CardTitle>
                      <CardDescription>Où souhaitez-vous recevoir votre commande ?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Adresse *</Label>
                        <Input id="address" placeholder="123 Rue Principale" required />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="city">Ville *</Label>
                          <Input id="city" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Code Postal *</Label>
                          <Input id="postalCode" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Pays *</Label>
                        <Input id="country" defaultValue="France" required />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Method */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Mode de Paiement</CardTitle>
                      <CardDescription>Choisissez votre méthode de paiement</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-primary transition-colors">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                            <CreditCard className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium">Carte Bancaire</div>
                              <div className="text-xs text-muted-foreground">Visa, Mastercard, Amex</div>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-primary transition-colors">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="flex items-center gap-3 cursor-pointer flex-1">
                            <Smartphone className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium">PayPal</div>
                              <div className="text-xs text-muted-foreground">Paiement sécurisé</div>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-primary transition-colors">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank" className="flex items-center gap-3 cursor-pointer flex-1">
                            <Building2 className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium">Virement Bancaire</div>
                              <div className="text-xs text-muted-foreground">Délai de 2-3 jours</div>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>

                      {paymentMethod === "card" && (
                        <div className="space-y-4 pt-4 border-t">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Numéro de carte *</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Date d'expiration *</Label>
                              <Input id="expiry" placeholder="MM/AA" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvc">CVC *</Label>
                              <Input id="cvc" placeholder="123" required />
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle>Récapitulatif de Commande</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Items */}
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {items.map((item) => (
                          <div key={item.id} className="flex gap-3 text-sm">
                            <div className="relative h-16 w-16 shrink-0 rounded overflow-hidden bg-muted">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="object-cover w-full h-full"
                              />
                              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                                {item.quantity}
                              </Badge>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium line-clamp-1">{item.name}</div>
                              <div className="text-muted-foreground">{item.price}€</div>
                            </div>
                            <div className="font-medium">{(item.price * item.quantity).toFixed(2)}€</div>
                          </div>
                        ))}
                      </div>

                      {/* Totals */}
                      <div className="space-y-3 pt-4 border-t">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Sous-total</span>
                          <span className="font-medium">{total.toFixed(2)}€</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Livraison</span>
                          <span className="font-medium">
                            {shipping === 0 ? (
                              <span className="text-green-600">Gratuit</span>
                            ) : (
                              `${shipping.toFixed(2)}€`
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">TVA (20%)</span>
                          <span className="font-medium">{tax.toFixed(2)}€</span>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <div className="flex justify-between items-baseline">
                          <span className="text-lg font-semibold">Total</span>
                          <span className="text-3xl font-bold text-primary">{finalTotal.toFixed(2)}€</span>
                        </div>
                      </div>

                      {/* Terms */}
                      <div className="flex items-start gap-2 pt-4 border-t">
                        <Checkbox
                          id="terms"
                          checked={acceptTerms}
                          onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                          J'accepte les{" "}
                          <Link href="/cgv" className="text-primary hover:underline">
                            conditions générales de vente
                          </Link>{" "}
                          et la{" "}
                          <Link href="/confidentialite" className="text-primary hover:underline">
                            politique de confidentialité
                          </Link>
                        </label>
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={!acceptTerms}>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Confirmer la Commande
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">Paiement 100% sécurisé par Stripe</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </main>

      </div>
    </ThemeProvider>
  )
}
