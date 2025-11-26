"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Mail, Phone, MoreVertical, CheckCircle2, Clock, Code2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function AdminAgentsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const agents = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@cga.com",
      phone: "+243 987 654 321",
      role: "Lead Developer",
      skills: ["React", "Node.js", "TypeScript"],
      activeProjects: 3,
      completedProjects: 24,
      status: "Disponible",
      performance: 95,
    },
    {
      id: 2,
      name: "Marie Claire",
      email: "marie.claire@cga.com",
      phone: "+243 987 654 321",
      role: "Full Stack Developer",
      skills: ["Vue.js", "Python", "PostgreSQL"],
      activeProjects: 2,
      completedProjects: 18,
      status: "Occupé",
      performance: 92,
    },
    {
      id: 3,
      name: "Pierre Martin",
      email: "pierre.martin@cga.com",
      phone: "+243 987 654 321",
      role: "Frontend Developer",
      skills: ["React", "Next.js", "Tailwind"],
      activeProjects: 4,
      completedProjects: 31,
      status: "Occupé",
      performance: 88,
    },
    {
      id: 4,
      name: "Sophie Bernard",
      email: "sophie.bernard@cga.com",
      phone: "+243 987 654 321",
      role: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Photoshop"],
      activeProjects: 2,
      completedProjects: 27,
      status: "Disponible",
      performance: 97,
    },
    {
      id: 5,
      name: "Thomas Leroy",
      email: "thomas.leroy@cga.com",
      phone: "+243 987 654 321",
      role: "Backend Developer",
      skills: ["Django", "FastAPI", "MongoDB"],
      activeProjects: 3,
      completedProjects: 22,
      status: "Disponible",
      performance: 90,
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
      case "Disponible":
        return "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
      case "Occupé":
        return "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
      case "Congé":
        return "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Agents</h1>
          <p className="text-muted-foreground">Gérer l'équipe et les assignations</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouvel Agent
        </Button>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un agent..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </Card>

      {/* Agents Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <Card key={agent.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start gap-3">
                <Avatar className="h-14 w-14 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {getInitials(agent.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{agent.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{agent.role}</p>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${getStatusColor(agent.status)}`}
                  >
                    {agent.status}
                  </span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Voir profil</DropdownMenuItem>
                    <DropdownMenuItem>Assigner projet</DropdownMenuItem>
                    <DropdownMenuItem>Modifier</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Désactiver</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 pt-2 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground truncate">{agent.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">{agent.phone}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="pt-2 border-t">
                <div className="flex items-center gap-1 mb-2">
                  <Code2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Compétences</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {agent.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs bg-accent rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Clock className="h-4 w-4 text-amber-600" />
                    <span className="text-sm text-muted-foreground">En cours</span>
                  </div>
                  <p className="text-2xl font-bold">{agent.activeProjects}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-muted-foreground">Complétés</span>
                  </div>
                  <p className="text-2xl font-bold">{agent.completedProjects}</p>
                </div>
              </div>

              {/* Performance */}
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-muted-foreground">Performance</span>
                  <span className="font-medium text-primary">{agent.performance}%</span>
                </div>
                <div className="h-2 bg-accent rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all" style={{ width: `${agent.performance}%` }} />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
