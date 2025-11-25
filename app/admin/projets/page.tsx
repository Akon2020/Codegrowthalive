"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, MoreVertical, Calendar, Users, AlertCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ProjectModal } from "@/components/modals/project-modal"

export default function AdminProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<"create" | "edit">("create")
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      id: 1,
      name: "Site E-commerce Fashion",
      client: "Style Plus",
      status: "En cours",
      progress: 75,
      startDate: "2024-01-15",
      deadline: "2024-03-01",
      agent: "Jean Dupont",
      budget: "15000€",
      priority: "Haute",
    },
    {
      id: 2,
      name: "Application Mobile Banking",
      client: "FinTech Corp",
      status: "En cours",
      progress: 60,
      startDate: "2024-01-20",
      deadline: "2024-04-15",
      agent: "Marie Claire",
      budget: "25000€",
      priority: "Haute",
    },
    {
      id: 3,
      name: "Dashboard Analytics",
      client: "Data Insights",
      status: "En révision",
      progress: 90,
      startDate: "2024-01-05",
      deadline: "2024-02-20",
      agent: "Pierre Martin",
      budget: "12000€",
      priority: "Moyenne",
    },
    {
      id: 4,
      name: "Site Vitrine Restaurant",
      client: "Le Gourmet",
      status: "En cours",
      progress: 45,
      startDate: "2024-02-01",
      deadline: "2024-03-15",
      agent: "Sophie Bernard",
      budget: "5000€",
      priority: "Basse",
    },
    {
      id: 5,
      name: "Refonte Site Corporate",
      client: "Global Tech",
      status: "Planifié",
      progress: 10,
      startDate: "2024-02-15",
      deadline: "2024-05-01",
      agent: "Thomas Leroy",
      budget: "20000€",
      priority: "Moyenne",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En cours":
        return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
      case "En révision":
        return "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
      case "Planifié":
        return "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
      case "Complété":
        return "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-950 dark:text-gray-300"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Haute":
        return "text-red-600"
      case "Moyenne":
        return "text-amber-600"
      case "Basse":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  const handleCreate = () => {
    setSelectedProject(null)
    setModalMode("create")
    setModalOpen(true)
  }

  const handleEdit = (project: any) => {
    setSelectedProject(project)
    setModalMode("edit")
    setModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Projets</h1>
          <p className="text-muted-foreground">Gérer tous les projets clients</p>
        </div>
        <Button className="gap-2" onClick={handleCreate}>
          <Plus className="h-4 w-4" />
          Nouveau Projet
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un projet..."
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

      {/* Projects Grid */}
      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground">Client: {project.client}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Voir détails</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEdit(project)}>Modifier</DropdownMenuItem>
                    <DropdownMenuItem>Assigner agent</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Supprimer</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progression</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="h-2 bg-accent rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all" style={{ width: `${project.progress}%` }} />
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Agent</p>
                    <p className="text-sm font-medium">{project.agent}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Échéance</p>
                    <p className="text-sm font-medium">{new Date(project.deadline).toLocaleDateString("fr-FR")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className={`h-4 w-4 ${getPriorityColor(project.priority)}`} />
                  <div>
                    <p className="text-xs text-muted-foreground">Priorité</p>
                    <p className={`text-sm font-medium ${getPriorityColor(project.priority)}`}>{project.priority}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">€</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Budget</p>
                    <p className="text-sm font-medium">{project.budget}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal open={modalOpen} onOpenChange={setModalOpen} project={selectedProject} mode={modalMode} />
    </div>
  )
}
