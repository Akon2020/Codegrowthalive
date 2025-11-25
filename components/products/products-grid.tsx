"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import type { Product } from "@/types/product"
import { ShoppingCart, Star } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

const mockProducts: Product[] = [
  {
    id: 1,
    name: "CGA Website Builder Pro",
    description: "Créateur de sites web professionnel avec drag & drop, 100+ templates et hébergement inclus.",
    price: 299,
    image: "/placeholder.svg?key=builder",
    category: "software",
    stock: 50,
    featured: true,
    tags: ["Populaire", "Nouveau"],
  },
  {
    id: 2,
    name: "Dashboard Analytics SaaS - Mensuel",
    description: "Tableau de bord analytics complet avec visualisations en temps réel et rapports personnalisés.",
    price: 49,
    image: "/placeholder.svg?key=analytics",
    category: "saas",
    stock: 999,
    tags: ["Abonnement"],
  },
  {
    id: 3,
    name: "E-commerce Template Premium",
    description: "Template e-commerce complet avec panier, paiement Stripe et gestion des stocks.",
    price: 149,
    image: "/placeholder.svg?key=ecommerce",
    category: "templates",
    stock: 100,
    tags: ["Best Seller"],
  },
  {
    id: 4,
    name: "CRM System - Licence Annuelle",
    description: "Système CRM complet pour gérer vos clients, leads et pipeline de ventes.",
    price: 599,
    image: "/placeholder.svg?key=crm",
    category: "licenses",
    stock: 25,
  },
  {
    id: 5,
    name: "Mobile App Starter Kit",
    description: "Kit de démarrage React Native avec authentification, navigation et API ready.",
    price: 199,
    image: "/placeholder.svg?key=mobile",
    category: "software",
    stock: 75,
    featured: true,
  },
  {
    id: 6,
    name: "Cloud Hosting Pro - Mensuel",
    description: "Hébergement cloud performant avec SSL, CDN, backups automatiques et support 24/7.",
    price: 29,
    image: "/placeholder.svg?key=hosting",
    category: "saas",
    stock: 999,
    tags: ["Populaire"],
  },
  {
    id: 7,
    name: "Admin Dashboard Template",
    description: "Template dashboard admin moderne avec charts, tables et gestion utilisateurs.",
    price: 89,
    image: "/placeholder.svg?key=admin",
    category: "templates",
    stock: 150,
  },
  {
    id: 8,
    name: "API Management Platform",
    description: "Plateforme complète de gestion d'APIs avec analytics, monitoring et documentation.",
    price: 399,
    image: "/placeholder.svg?key=api",
    category: "software",
    stock: 30,
  },
  {
    id: 9,
    name: "Design System Pro",
    description: "Design system complet avec composants React, Figma et documentation.",
    price: 249,
    image: "/placeholder.svg?key=design",
    category: "software",
    stock: 60,
    featured: true,
    tags: ["Nouveau"],
  },
]

interface ProductsGridProps {
  category?: string
}

export function ProductsGrid({ category = "all" }: ProductsGridProps) {
  const { addItem } = useCartStore()
  const { toast } = useToast()

  const filteredProducts = category === "all" ? mockProducts : mockProducts.filter((p) => p.category === category)

  const handleAddToCart = (product: Product) => {
    addItem(product)
    toast({
      title: "Produit ajouté au panier",
      description: `${product.name} a été ajouté à votre panier.`,
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
        >
          <div className="relative aspect-video overflow-hidden bg-muted">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
            {product.tags && product.tags.length > 0 && (
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {product.tags.map((tag, i) => (
                  <Badge key={i} className="bg-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <CardHeader>
            <div className="flex items-start justify-between gap-2 mb-2">
              <Badge variant="secondary">{product.category}</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-primary text-primary" />
                <span className="text-xs font-medium">4.8</span>
              </div>
            </div>
            <CardTitle className="text-xl line-clamp-1">{product.name}</CardTitle>
            <CardDescription className="line-clamp-2">{product.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">{product.price}€</span>
              {product.category === "saas" && <span className="text-sm text-muted-foreground">/mois</span>}
            </div>
            <div className="text-sm text-muted-foreground">
              {product.stock > 0 ? (
                <span className="text-green-600 dark:text-green-400">En stock ({product.stock})</span>
              ) : (
                <span className="text-destructive">Rupture de stock</span>
              )}
            </div>
            <div className="flex gap-2">
              <Button className="flex-1" onClick={() => handleAddToCart(product)} disabled={product.stock === 0}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ajouter au Panier
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={`/produits/${product.id}`}>
                  <span className="sr-only">Voir les détails</span>→
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
