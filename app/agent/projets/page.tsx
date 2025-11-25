import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Users, ListTodo, MessageSquare, Paperclip, Eye } from "lucide-react"
import Link from "next/link"

export default function AgentProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Site E-commerce Fashion",
      description: "Plateforme e-commerce complète avec gestion des stocks",
      client: { name: "Jean Dupont", company: "Fashion Corp" },
      progress: 75,
      status: "En cours",
      priority: "high",
      startDate: "15 Déc 2024",
      dueDate: "15 Fév 2025",
      tasks: { total: 28, completed: 21, pending: 7 },
      team: [{ name: "Sophie Martin" }, { name: "Marc Durand" }, { name: "Julie Lambert" }],
      messages: 23,
      files: 15,
      timeSpent: "145h",
      timeEstimated: "200h",
    },
    {
      id: 2,
      name: "Application Mobile Fitness",
      description: "App React Native pour le suivi de fitness",
      client: { name: "Marie Martin", company: "FitTech" },
      progress: 90,
      status: "En révision",
      priority: "medium",
      startDate: "10 Jan 2025",
      dueDate: "20 Fév 2025",
      tasks: { total: 32, completed: 29, pending: 3 },
      team: [{ name: "Sophie Martin" }, { name: "Pierre Blanc" }],
      messages: 18,
      files: 12,
      timeSpent: "108h",
      timeEstimated: "120h",
    },
    {
      id: 3,
      name: "Dashboard Analytics",
      description: "Tableau de bord analytics avec visualisations",
      client: { name: "Pierre Laurent", company: "DataCorp" },
      progress: 45,
      status: "En développement",
      priority: "low",
      startDate: "20 Jan 2025",
      dueDate: "1 Mar 2025",
      tasks: { total: 24, completed: 11, pending: 13 },
      team: [{ name: "Sophie Martin" }],
      messages: 8,
      files: 6,
      timeSpent: "36h",
      timeEstimated: "80h",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Projets Assignés</h1>
        <p className="text-muted-foreground">Vue d'ensemble de tous les projets sur lesquels vous travaillez.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Projets Actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">8 clients différents</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tâches Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">84</div>
            <p className="text-xs text-muted-foreground mt-1">61 complétées, 23 en cours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Heures Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">289h</div>
            <p className="text-xs text-muted-foreground mt-1">Sur 400h estimées</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Badge
                      variant={
                        project.priority === "high"
                          ? "destructive"
                          : project.priority === "medium"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Client Info */}
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {project.client.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{project.client.name}</div>
                  <div className="text-sm text-muted-foreground">{project.client.company}</div>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progression Globale</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {project.tasks.completed} / {project.tasks.total} tâches complétées
                  </span>
                  <span>
                    {project.timeSpent} / {project.timeEstimated}
                  </span>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Échéance
                  </div>
                  <div className="text-sm font-medium">{project.dueDate}</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ListTodo className="h-4 w-4" />
                    Tâches
                  </div>
                  <div className="text-sm font-medium">{project.tasks.pending} en attente</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    Équipe
                  </div>
                  <div className="flex -space-x-2">
                    {project.team.map((member, i) => (
                      <Avatar key={i} className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Activité</div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {project.messages}
                    </div>
                    <div className="flex items-center gap-1">
                      <Paperclip className="h-4 w-4" />
                      {project.files}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t">
                <Button asChild className="flex-1">
                  <Link href={`/agent/projets/${project.id}`}>
                    <Eye className="mr-2 h-4 w-4" />
                    Voir les Détails
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/agent/projets/${project.id}/taches`}>
                    <ListTodo className="mr-2 h-4 w-4" />
                    Tâches
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/agent/projets/${project.id}/messages`}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Messages
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
