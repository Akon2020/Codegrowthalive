import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Clock, Users, MessageSquare, Paperclip, Eye, MoreVertical } from "lucide-react"
import Link from "next/link"

export default function ClientProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Site E-commerce Fashion",
      description: "Développement d'une plateforme e-commerce complète avec gestion des stocks et paiements.",
      status: "En cours",
      progress: 75,
      priority: "high",
      startDate: "15 Déc 2024",
      dueDate: "15 Fév 2025",
      agent: { name: "Sophie Martin", role: "Lead Developer" },
      team: 4,
      messages: 23,
      files: 15,
      budget: "15,000€",
      spent: "11,250€",
    },
    {
      id: 2,
      name: "Application Mobile Fitness",
      description: "Application React Native pour le suivi de fitness avec intégration de wearables.",
      status: "En révision",
      progress: 90,
      priority: "medium",
      startDate: "10 Jan 2025",
      dueDate: "20 Fév 2025",
      agent: { name: "Marc Durand", role: "Mobile Developer" },
      team: 3,
      messages: 18,
      files: 12,
      budget: "12,000€",
      spent: "10,800€",
    },
    {
      id: 3,
      name: "Dashboard Analytics",
      description: "Tableau de bord analytics avec visualisations en temps réel et rapports personnalisés.",
      status: "En développement",
      progress: 45,
      priority: "low",
      startDate: "20 Jan 2025",
      dueDate: "1 Mar 2025",
      agent: { name: "Julie Lambert", role: "Full Stack Developer" },
      team: 2,
      messages: 8,
      files: 6,
      budget: "8,000€",
      spent: "3,600€",
    },
  ]

  const completedProjects = [
    {
      id: 4,
      name: "Site Vitrine Restaurant",
      completedDate: "5 Jan 2025",
      rating: 5,
      budget: "3,500€",
    },
    {
      id: 5,
      name: "Refonte Site Corporate",
      completedDate: "20 Déc 2024",
      rating: 5,
      budget: "5,000€",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mes Projets</h1>
        <p className="text-muted-foreground">Suivez l'avancement de tous vos projets en cours et terminés.</p>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Projets Actifs (3)</TabsTrigger>
          <TabsTrigger value="completed">Terminés (2)</TabsTrigger>
          <TabsTrigger value="archived">Archivés</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {projects.map((project) => (
            <Card key={project.id} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-3">
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
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progression</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>

                {/* Info Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Dates
                    </div>
                    <div className="text-sm font-medium">
                      {project.startDate} - {project.dueDate}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      Agent Assigné
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                          {project.agent.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm font-medium">{project.agent.name}</div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Budget
                    </div>
                    <div className="text-sm font-medium">
                      {project.spent} / {project.budget}
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
                    <Link href={`/client/projets/${project.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir les Détails
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/client/projets/${project.id}/messages`}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Messages
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>Terminé le {project.completedDate}</CardDescription>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="font-semibold text-primary">{project.budget}</div>
                    <div className="text-xs text-muted-foreground">⭐ {project.rating}/5</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" asChild className="flex-1 bg-transparent">
                    <Link href={`/client/projets/${project.id}`}>Voir les Détails</Link>
                  </Button>
                  <Button variant="outline">Télécharger les Fichiers</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="archived">
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">Aucun projet archivé</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
