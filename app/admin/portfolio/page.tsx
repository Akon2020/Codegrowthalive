"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, MoreVertical, Eye, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function AdminPortfolioPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const portfolioItems = [
    {
      id: 1,
      title: "Plateforme E-commerce Moderne",
      client: "TechRetail SA",
      category: "E-commerce",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      image: "/modern-ecommerce-dashboard.png",
      status: "Publié",
      views: 1245,
    },
    {
      id: 2,
      title: "Application de Suivi Santé",
      client: "HealthTech Corp",
      category: "Application Mobile",
      technologies: ["React Native", "Node.js", "MongoDB"],
      image: "/health-tracking-app.png",
      status: "Publié",
      views: 892,
    },
    {
      id: 3,
      title: "Système de Gestion RH",
      client: "Enterprise Solutions",
      category: "SaaS",
      technologies: ["Vue.js", "Django", "Redis"],
      image: "/hr-management-system-dashboard.jpg",
      status: "Brouillon",
      views: 0,
    },
    {
      id: 4,
      title: "Plateforme d'Apprentissage en Ligne",
      client: "EduTech International",
      category: "E-learning",
      technologies: ["React", "Firebase", "Stripe"],
      image: "/online-learning-platform.png",
      status: "Publié",
      views: 1567,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestion du Portfolio</h1>
          <p className="text-muted-foreground">Gérer les projets affichés publiquement</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Ajouter un Projet
        </Button>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher dans le portfolio..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </Card>

      {/* Portfolio Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative bg-accent">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    item.status === "Publié"
                      ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-950 dark:text-gray-300"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.client}</p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-accent rounded-md">{item.category}</span>
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
                      Prévisualiser
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Modifier
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Supprimer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                <span>{item.views} vues</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
