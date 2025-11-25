"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Mail, Phone, Building2, MoreVertical, FolderKanban, ShoppingCart } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ClientModal } from "@/components/modals/client-modal"

export default function AdminClientsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<"create" | "edit">("create")
  const [selectedClient, setSelectedClient] = useState<any>(null)

  const clients = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@email.com",
      phone: "+33 6 12 34 56 78",
      company: "Style Plus",
      projects: 3,
      orders: 5,
      totalSpent: "45000€",
      status: "Actif",
      joinDate: "2023-06-15",
    },
    {
      id: 2,
      name: "Marie Martin",
      email: "marie.martin@fintech.com",
      phone: "+33 6 23 45 67 89",
      company: "FinTech Corp",
      projects: 2,
      orders: 3,
      totalSpent: "35000€",
      status: "Actif",
      joinDate: "2023-08-20",
    },
    {
      id: 3,
      name: "Pierre Bernard",
      email: "p.bernard@datainsights.com",
      phone: "+33 6 34 56 78 90",
      company: "Data Insights",
      projects: 4,
      orders: 8,
      totalSpent: "62000€",
      status: "Actif",
      joinDate: "2023-03-10",
    },
    {
      id: 4,
      name: "Sophie Laurent",
      email: "sophie@legourmet.fr",
      phone: "+33 6 45 67 89 01",
      company: "Le Gourmet",
      projects: 1,
      orders: 2,
      totalSpent: "8000€",
      status: "Actif",
      joinDate: "2024-01-05",
    },
    {
      id: 5,
      name: "Thomas Petit",
      email: "thomas@globaltech.com",
      phone: "+33 6 56 78 90 12",
      company: "Global Tech",
      projects: 5,
      orders: 12,
      totalSpent: "95000€",
      status: "VIP",
      joinDate: "2023-01-15",
    },
  ]

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
      case "VIP":
        return "bg-primary/20 text-primary"
      case "Inactif":
        return "bg-gray-100 text-gray-700 dark:bg-gray-950 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const handleCreate = () => {
    setSelectedClient(null)
    setModalMode("create")
    setModalOpen(true)
  }

  const handleEdit = (client: any) => {
    setSelectedClient(client)
    setModalMode("edit")
    setModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Clients</h1>
          <p className="text-muted-foreground">Gérer tous les clients de CGA</p>
        </div>
        <Button className="gap-2" onClick={handleCreate}>
          <Plus className="h-4 w-4" />
          Nouveau Client
        </Button>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </Card>

      {/* Clients Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {clients.map((client) => (
          <Card key={client.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {getInitials(client.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{client.name}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{client.company}</span>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Voir profil</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEdit(client)}>Modifier</DropdownMenuItem>
                    <DropdownMenuItem>Envoyer message</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Désactiver</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 pt-2 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{client.phone}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <FolderKanban className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">{client.projects}</p>
                  <p className="text-xs text-muted-foreground">Projets</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">{client.orders}</p>
                  <p className="text-xs text-muted-foreground">Commandes</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="text-primary font-bold">€</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{client.totalSpent}</p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <ClientModal open={modalOpen} onOpenChange={setModalOpen} client={selectedClient} mode={modalMode} />
    </div>
  )
}
