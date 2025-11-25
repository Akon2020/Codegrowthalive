"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, MoreVertical, CheckCircle2, Clock, XCircle, Truck, Package } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AdminOrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const orders = [
    {
      id: "CMD-001",
      client: "Tech Solutions",
      products: ["Licence Premium CMS", "Pack Maintenance"],
      amount: 749,
      status: "Complété",
      date: "2024-02-15",
      paymentMethod: "Carte bancaire",
    },
    {
      id: "CMD-002",
      client: "StartUp Inc",
      products: ["Abonnement Pro"],
      amount: 199,
      status: "En cours",
      date: "2024-02-14",
      paymentMethod: "PayPal",
    },
    {
      id: "CMD-003",
      client: "Digital Agency",
      products: ["Formation React Avancé"],
      amount: 599,
      status: "Complété",
      date: "2024-02-13",
      paymentMethod: "Carte bancaire",
    },
    {
      id: "CMD-004",
      client: "E-commerce Pro",
      products: ["Template E-commerce", "Audit SEO"],
      amount: 548,
      status: "En livraison",
      date: "2024-02-12",
      paymentMethod: "Virement",
    },
    {
      id: "CMD-005",
      client: "Web Studio",
      products: ["Pack Maintenance Annuel"],
      amount: 450,
      status: "En attente",
      date: "2024-02-11",
      paymentMethod: "Carte bancaire",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Complété":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case "En cours":
        return <Clock className="h-5 w-5 text-amber-600" />
      case "En livraison":
        return <Truck className="h-5 w-5 text-blue-600" />
      case "En attente":
        return <Package className="h-5 w-5 text-purple-600" />
      case "Annulé":
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <Clock className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Complété":
        return "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
      case "En cours":
        return "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
      case "En livraison":
        return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
      case "En attente":
        return "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
      case "Annulé":
        return "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Commandes</h1>
          <p className="text-muted-foreground">Suivre et gérer toutes les commandes</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher une commande..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filtres
          </Button>
        </div>
      </Card>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-6">
              <div className="p-3 rounded-lg bg-accent">{getStatusIcon(order.status)}</div>

              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{order.id}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{order.client}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Voir détails</DropdownMenuItem>
                      <DropdownMenuItem>Modifier statut</DropdownMenuItem>
                      <DropdownMenuItem>Envoyer facture</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Annuler</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Produits</p>
                    <div className="space-y-1">
                      {order.products.map((product, index) => (
                        <p key={index} className="text-sm font-medium">
                          {product}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Date</p>
                    <p className="text-sm font-medium">{new Date(order.date).toLocaleDateString("fr-FR")}</p>
                    <p className="text-sm text-muted-foreground mt-2">Paiement</p>
                    <p className="text-sm font-medium">{order.paymentMethod}</p>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Montant total</p>
                      <p className="text-3xl font-bold text-primary">{order.amount}€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
