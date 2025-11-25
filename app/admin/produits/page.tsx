"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, MoreVertical, Package, TrendingUp, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function AdminProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const products = [
    {
      id: 1,
      name: "Licence Premium CMS",
      category: "Logiciel",
      price: 299,
      stock: 50,
      sales: 145,
      image: "/cms-software.jpg",
      status: "En stock",
    },
    {
      id: 2,
      name: "Pack Maintenance Annuel",
      category: "Service",
      price: 450,
      stock: 999,
      sales: 89,
      image: "/maintenance-service.jpg",
      status: "En stock",
    },
    {
      id: 3,
      name: "Abonnement Pro",
      category: "Abonnement",
      price: 199,
      stock: 999,
      sales: 234,
      image: "/subscription-pro.jpg",
      status: "En stock",
    },
    {
      id: 4,
      name: "Formation React Avancé",
      category: "Formation",
      price: 599,
      stock: 25,
      sales: 56,
      image: "/react-training.jpg",
      status: "En stock",
    },
    {
      id: 5,
      name: "Template E-commerce",
      category: "Template",
      price: 149,
      stock: 100,
      sales: 178,
      image: "/ecommerce-template.jpg",
      status: "En stock",
    },
    {
      id: 6,
      name: "Audit SEO Complet",
      category: "Service",
      price: 399,
      stock: 999,
      sales: 67,
      image: "/seo-audit.jpg",
      status: "En stock",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Produits</h1>
          <p className="text-muted-foreground">Gérer le catalogue de produits et services</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau Produit
        </Button>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </Card>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square relative bg-accent">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      Voir détails
                    </DropdownMenuItem>
                    <DropdownMenuItem>Modifier</DropdownMenuItem>
                    <DropdownMenuItem>Dupliquer</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Supprimer</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-2xl font-bold text-primary">{product.price}€</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Package className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Stock: {product.stock}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-semibold">{product.sales}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">ventes</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
