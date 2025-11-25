import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Package, Truck, CheckCircle2, XCircle, Download, Eye, Search, Calendar } from "lucide-react"
import Link from "next/link"

export default function ClientOrdersPage() {
  const orders = [
    {
      id: "CGA-2025-1236",
      date: "15 Jan 2025",
      items: [
        { name: "CGA Website Builder Pro", quantity: 1, price: 299 },
        { name: "Cloud Hosting Pro - Mensuel", quantity: 1, price: 29 },
      ],
      total: 328,
      status: "delivered",
      trackingNumber: "TRK123456789",
      deliveredDate: "18 Jan 2025",
    },
    {
      id: "CGA-2025-1235",
      date: "12 Jan 2025",
      items: [{ name: "Dashboard Analytics SaaS", quantity: 1, price: 49 }],
      total: 49,
      status: "shipped",
      trackingNumber: "TRK987654321",
      estimatedDelivery: "20 Jan 2025",
    },
    {
      id: "CGA-2025-1234",
      date: "10 Jan 2025",
      items: [
        { name: "E-commerce Template Premium", quantity: 1, price: 149 },
        { name: "Admin Dashboard Template", quantity: 1, price: 89 },
      ],
      total: 238,
      status: "processing",
    },
    {
      id: "CGA-2024-9823",
      date: "28 Déc 2024",
      items: [{ name: "Mobile App Starter Kit", quantity: 1, price: 199 }],
      total: 199,
      status: "delivered",
      deliveredDate: "2 Jan 2025",
    },
  ]

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "delivered":
        return { icon: CheckCircle2, label: "Livré", variant: "secondary" as const, color: "text-green-600" }
      case "shipped":
        return { icon: Truck, label: "Expédié", variant: "default" as const, color: "text-blue-600" }
      case "processing":
        return { icon: Package, label: "En traitement", variant: "default" as const, color: "text-orange-600" }
      case "cancelled":
        return { icon: XCircle, label: "Annulé", variant: "destructive" as const, color: "text-red-600" }
      default:
        return { icon: Package, label: status, variant: "default" as const, color: "text-gray-600" }
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mes Commandes</h1>
        <p className="text-muted-foreground">Consultez l'historique et le suivi de toutes vos commandes.</p>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Rechercher une commande..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Filtrer par Date
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">Toutes (4)</TabsTrigger>
          <TabsTrigger value="delivered">Livrées (2)</TabsTrigger>
          <TabsTrigger value="in-transit">En transit (1)</TabsTrigger>
          <TabsTrigger value="processing">En cours (1)</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {orders.map((order) => {
            const statusInfo = getStatusInfo(order.status)
            const StatusIcon = statusInfo.icon

            return (
              <Card key={order.id} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">Commande {order.id}</CardTitle>
                      <CardDescription>Passée le {order.date}</CardDescription>
                    </div>
                    <Badge variant={statusInfo.variant} className="flex items-center gap-1">
                      <StatusIcon className="h-3 w-3" />
                      {statusInfo.label}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Items */}
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-sm border-b pb-2 last:border-0 last:pb-0"
                      >
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-muted-foreground">Quantité: {item.quantity}</div>
                        </div>
                        <div className="font-semibold">{item.price}€</div>
                      </div>
                    ))}
                  </div>

                  {/* Total and Tracking */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Total</div>
                      <div className="text-2xl font-bold text-primary">{order.total}€</div>
                    </div>
                    {order.trackingNumber && (
                      <div className="text-right space-y-1">
                        <div className="text-sm text-muted-foreground">Suivi</div>
                        <div className="font-mono text-sm font-medium">{order.trackingNumber}</div>
                        {order.status === "shipped" && order.estimatedDelivery && (
                          <div className="text-xs text-muted-foreground">
                            Livraison estimée: {order.estimatedDelivery}
                          </div>
                        )}
                        {order.status === "delivered" && order.deliveredDate && (
                          <div className="text-xs text-green-600">Livré le {order.deliveredDate}</div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 bg-transparent" asChild>
                      <Link href={`/client/commandes/${order.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        Détails
                      </Link>
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Facture
                    </Button>
                    {order.status === "shipped" && (
                      <Button variant="outline">
                        <Truck className="mr-2 h-4 w-4" />
                        Suivre
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="delivered">
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">Filtrer les commandes livrées...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in-transit">
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">Filtrer les commandes en transit...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processing">
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">Filtrer les commandes en cours...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
