"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Users, Tag, Plus, Filter } from "lucide-react"

export default function AgentTasksPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Correction bug paiement Stripe",
      description: "Résoudre l'erreur lors du processus de paiement avec Stripe API",
      project: "Site E-commerce Fashion",
      client: "Jean Dupont",
      priority: "high",
      status: "todo",
      dueDate: "Aujourd'hui 17:00",
      estimatedTime: "2h",
      tags: ["Bug", "Backend"],
      completed: false,
    },
    {
      id: 2,
      title: "Revue de code API REST",
      description: "Vérifier et approuver les endpoints de l'API utilisateur",
      project: "Application Mobile Fitness",
      client: "Marie Martin",
      priority: "high",
      status: "in-progress",
      dueDate: "Aujourd'hui 19:00",
      estimatedTime: "1.5h",
      tags: ["Code Review", "API"],
      completed: false,
    },
    {
      id: 3,
      title: "Mise à jour documentation technique",
      description: "Documenter les nouvelles fonctionnalités du dashboard",
      project: "Dashboard Analytics",
      client: "Pierre Laurent",
      priority: "medium",
      status: "todo",
      dueDate: "Demain 12:00",
      estimatedTime: "1h",
      tags: ["Documentation"],
      completed: false,
    },
    {
      id: 4,
      title: "Optimisation requêtes base de données",
      description: "Améliorer les performances des requêtes sur la table products",
      project: "Site E-commerce Fashion",
      client: "Jean Dupont",
      priority: "medium",
      status: "todo",
      dueDate: "22 Jan 2025",
      estimatedTime: "3h",
      tags: ["Performance", "Database"],
      completed: false,
    },
    {
      id: 5,
      title: "Intégration notifications push",
      description: "Implémenter le système de notifications push pour iOS et Android",
      project: "Application Mobile Fitness",
      client: "Marie Martin",
      priority: "low",
      status: "todo",
      dueDate: "25 Jan 2025",
      estimatedTime: "4h",
      tags: ["Feature", "Mobile"],
      completed: false,
    },
  ])

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed, status: !task.completed ? "done" : "todo" } : task,
      ),
    )
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "default"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "todo":
        return "À faire"
      case "in-progress":
        return "En cours"
      case "done":
        return "Terminé"
      default:
        return status
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mes Tâches</h1>
          <p className="text-muted-foreground">Gérez vos tâches assignées et suivez votre progression.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtrer
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle Tâche
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">À Faire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">En Cours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Terminées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Heures Estimées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11.5h</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">Toutes (5)</TabsTrigger>
          <TabsTrigger value="today">Aujourd'hui (2)</TabsTrigger>
          <TabsTrigger value="week">Cette Semaine (4)</TabsTrigger>
          <TabsTrigger value="completed">Terminées</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {tasks.map((task) => (
            <Card key={task.id} className={task.completed ? "opacity-60" : ""}>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => handleToggleTask(task.id)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className={`font-semibold ${task.completed ? "line-through" : ""}`}>{task.title}</h3>
                          <Badge variant={getPriorityColor(task.priority)}>
                            {task.priority === "high" ? "Urgent" : task.priority === "medium" ? "Normal" : "Basse"}
                          </Badge>
                          <Badge variant="outline">{getStatusLabel(task.status)}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{task.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {task.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 text-sm">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          Projet
                        </div>
                        <div className="font-medium">{task.project}</div>
                        <div className="text-xs text-muted-foreground">Client: {task.client}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          Échéance
                        </div>
                        <div className="font-medium">{task.dueDate}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          Temps Estimé
                        </div>
                        <div className="font-medium">{task.estimatedTime}</div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 border-t">
                      {task.status === "todo" && <Button size="sm">Commencer</Button>}
                      {task.status === "in-progress" && (
                        <>
                          <Button size="sm">Marquer comme Terminé</Button>
                          <Button size="sm" variant="outline">
                            Pause
                          </Button>
                        </>
                      )}
                      <Button size="sm" variant="outline">
                        Voir Détails
                      </Button>
                      <Button size="sm" variant="ghost">
                        Commentaires
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="today">
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">Filtrer les tâches d'aujourd'hui...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week">
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">Filtrer les tâches de la semaine...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">Afficher les tâches terminées...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
