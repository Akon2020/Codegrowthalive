import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  FolderKanban,
  ShoppingBag,
  Clock,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  ArrowRight,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function ClientDashboardPage() {
  const stats = [
    {
      title: "Projets Actifs",
      value: "3",
      icon: FolderKanban,
      description: "+1 ce mois",
      trend: "up",
    },
    {
      title: "Commandes",
      value: "12",
      icon: ShoppingBag,
      description: "5 livrées",
      trend: "neutral",
    },
    {
      title: "En Attente",
      value: "2",
      icon: Clock,
      description: "Nécessite action",
      trend: "down",
    },
    {
      title: "Complétés",
      value: "8",
      icon: CheckCircle2,
      description: "Ce mois",
      trend: "up",
    },
  ]

  const recentProjects = [
    {
      id: 1,
      name: "Site E-commerce Fashion",
      status: "En cours",
      progress: 75,
      dueDate: "15 Fév 2025",
      priority: "high",
    },
    {
      id: 2,
      name: "Application Mobile Fitness",
      status: "En révision",
      progress: 90,
      dueDate: "20 Fév 2025",
      priority: "medium",
    },
    {
      id: 3,
      name: "Dashboard Analytics",
      status: "En développement",
      progress: 45,
      dueDate: "1 Mar 2025",
      priority: "low",
    },
  ]

  const recentOrders = [
    {
      id: "CGA-2025-1234",
      product: "CGA Website Builder Pro",
      date: "10 Jan 2025",
      amount: "299€",
      status: "Livré",
    },
    {
      id: "CGA-2025-1235",
      product: "Dashboard Analytics SaaS",
      date: "12 Jan 2025",
      amount: "49€",
      status: "En cours",
    },
  ]

  const notifications = [
    {
      id: 1,
      type: "project",
      title: "Nouveau jallon atteint",
      message: "Le design du site e-commerce a été approuvé",
      time: "Il y a 2h",
    },
    {
      id: 2,
      type: "support",
      title: "Réponse du support",
      message: "Votre ticket #4521 a reçu une réponse",
      time: "Il y a 5h",
    },
    {
      id: 3,
      type: "order",
      title: "Commande expédiée",
      message: "Votre commande CGA-2025-1235 est en route",
      time: "Hier",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Bienvenue, Jean Dupont!</h1>
            <p className="text-muted-foreground">Voici un aperçu de vos projets et activités récentes.</p>
          </div>
          <Button asChild>
            <Link href="/contact">
              Nouveau Projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
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
                <Icon className="h-4 w-4 text-muted-foreground" />
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
        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Projets Récents</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/client/projets">
                  Voir tous
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">{project.name}</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.dueDate}
                    </div>
                  </div>
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
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progression</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Commandes Récentes</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/client/commandes">
                  Voir toutes
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-start justify-between border-b last:border-0 pb-4 last:pb-0">
                <div className="space-y-1">
                  <div className="font-medium">{order.product}</div>
                  <div className="text-xs text-muted-foreground">
                    {order.id} • {order.date}
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="font-semibold text-primary">{order.amount}</div>
                  <Badge variant={order.status === "Livré" ? "secondary" : "default"}>{order.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications Récentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex gap-4 border-b last:border-0 pb-4 last:pb-0">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  {notification.type === "project" && <FolderKanban className="h-5 w-5 text-primary" />}
                  {notification.type === "support" && <AlertCircle className="h-5 w-5 text-primary" />}
                  {notification.type === "order" && <ShoppingBag className="h-5 w-5 text-primary" />}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-medium">{notification.title}</div>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <div className="text-xs text-muted-foreground">{notification.time}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
