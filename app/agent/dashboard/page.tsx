import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ListTodo,
  FolderKanban,
  Clock,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Users,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function AgentDashboardPage() {
  const stats = [
    {
      title: "Tâches à Faire",
      value: "5",
      icon: ListTodo,
      description: "2 urgentes",
      trend: "up",
      color: "text-orange-600",
    },
    {
      title: "Projets Actifs",
      value: "3",
      icon: FolderKanban,
      description: "8 clients",
      trend: "neutral",
      color: "text-blue-600",
    },
    {
      title: "Heures Travaillées",
      value: "32h",
      icon: Clock,
      description: "Cette semaine",
      trend: "up",
      color: "text-green-600",
    },
    {
      title: "Tâches Complétées",
      value: "12",
      icon: CheckCircle2,
      description: "Cette semaine",
      trend: "up",
      color: "text-primary",
    },
  ]

  const urgentTasks = [
    {
      id: 1,
      title: "Correction bug paiement",
      project: "Site E-commerce Fashion",
      priority: "high",
      dueDate: "Aujourd'hui",
      client: "Jean Dupont",
      estimatedTime: "2h",
    },
    {
      id: 2,
      title: "Revue de code API",
      project: "Application Mobile Fitness",
      priority: "high",
      dueDate: "Aujourd'hui",
      client: "Marie Martin",
      estimatedTime: "1.5h",
    },
    {
      id: 3,
      title: "Mise à jour documentation",
      project: "Dashboard Analytics",
      priority: "medium",
      dueDate: "Demain",
      client: "Pierre Laurent",
      estimatedTime: "1h",
    },
  ]

  const upcomingMeetings = [
    {
      id: 1,
      title: "Point projet E-commerce",
      time: "14:00 - 15:00",
      client: "Jean Dupont",
      type: "video",
    },
    {
      id: 2,
      title: "Démo Application Mobile",
      time: "16:00 - 17:00",
      client: "Marie Martin",
      type: "video",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "task_completed",
      message: "Tâche 'Intégration Stripe' complétée",
      project: "Site E-commerce Fashion",
      time: "Il y a 1h",
    },
    {
      id: 2,
      type: "comment",
      message: "Nouveau commentaire de Jean Dupont",
      project: "Site E-commerce Fashion",
      time: "Il y a 2h",
    },
    {
      id: 3,
      type: "task_assigned",
      message: "Nouvelle tâche assignée par Admin",
      project: "Dashboard Analytics",
      time: "Il y a 3h",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Bonjour Sophie!</h1>
            <p className="text-muted-foreground">Vous avez 5 tâches à faire aujourd'hui et 2 réunions prévues.</p>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            32h / 40h cette semaine
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  {stat.trend === "up" && <TrendingUp className="h-3 w-3 text-green-600" />}
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Urgent Tasks */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <CardTitle>Tâches Urgentes</CardTitle>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/agent/taches">
                  Voir toutes
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {urgentTasks.map((task) => (
              <div key={task.id} className="space-y-2 border-b last:border-0 pb-4 last:pb-0">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="font-medium">{task.title}</div>
                    <div className="text-xs text-muted-foreground">{task.project}</div>
                  </div>
                  <Badge variant={task.priority === "high" ? "destructive" : "default"} className="ml-2">
                    {task.dueDate}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3" />
                    {task.client}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {task.estimatedTime}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>Planning Aujourd'hui</CardTitle>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/agent/planning">
                  Voir tout
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingMeetings.map((meeting) => (
              <div key={meeting.id} className="flex gap-4 border-b last:border-0 pb-4 last:pb-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-medium">{meeting.title}</div>
                  <div className="text-sm text-muted-foreground">{meeting.time}</div>
                  <div className="flex items-center gap-2 text-xs">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                        {meeting.client
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-muted-foreground">{meeting.client}</span>
                  </div>
                </div>
                <Button size="sm">Rejoindre</Button>
              </div>
            ))}
            <div className="pt-2">
              <Button variant="outline" className="w-full bg-transparent">
                Ajouter une Réunion
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Activité Récente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex gap-4 border-b last:border-0 pb-4 last:pb-0">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  {activity.type === "task_completed" && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                  {activity.type === "comment" && <MessageSquare className="h-5 w-5 text-blue-600" />}
                  {activity.type === "task_assigned" && <ListTodo className="h-5 w-5 text-orange-600" />}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-medium">{activity.message}</div>
                  <div className="text-sm text-muted-foreground">{activity.project}</div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
