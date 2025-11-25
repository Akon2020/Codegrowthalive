import { Card } from "@/components/ui/card"
import { FolderKanban, Users, UserCog, ShoppingCart, TrendingUp, Clock, CheckCircle2 } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    { label: "Projets Actifs", value: "24", icon: FolderKanban, change: "+12%", color: "text-primary" },
    { label: "Clients", value: "156", icon: Users, change: "+8%", color: "text-blue-600" },
    { label: "Agents", value: "12", icon: UserCog, change: "+2", color: "text-green-600" },
    { label: "Commandes", value: "89", icon: ShoppingCart, change: "+23%", color: "text-purple-600" },
  ]

  const recentProjects = [
    {
      id: 1,
      name: "Site E-commerce Fashion",
      client: "Style Plus",
      status: "En cours",
      progress: 75,
      agent: "Jean Dupont",
    },
    {
      id: 2,
      name: "Application Mobile Banking",
      client: "FinTech Corp",
      status: "En cours",
      progress: 60,
      agent: "Marie Claire",
    },
    {
      id: 3,
      name: "Dashboard Analytics",
      client: "Data Insights",
      status: "En révision",
      progress: 90,
      agent: "Pierre Martin",
    },
    {
      id: 4,
      name: "Site Vitrine Restaurant",
      client: "Le Gourmet",
      status: "En cours",
      progress: 45,
      agent: "Sophie Bernard",
    },
  ]

  const recentOrders = [
    { id: "CMD-001", client: "Tech Solutions", product: "Licence Premium", amount: "299€", status: "Complété" },
    { id: "CMD-002", client: "StartUp Inc", product: "Pack Maintenance", amount: "450€", status: "En cours" },
    { id: "CMD-003", client: "Digital Agency", product: "Abonnement Pro", amount: "199€", status: "Complété" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tableau de Bord Admin</h1>
        <p className="text-muted-foreground">Vue d'ensemble de l'activité du système</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-accent ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Projects */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Projets Récents</h2>
            <FolderKanban className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {project.client} • {project.agent}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      project.status === "En cours"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-accent rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all" style={{ width: `${project.progress}%` }} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Orders */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Commandes Récentes</h2>
            <ShoppingCart className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium">{order.id}</p>
                    {order.status === "Complété" ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    ) : (
                      <Clock className="h-4 w-4 text-amber-600" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{order.client}</p>
                  <p className="text-sm">{order.product}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{order.amount}</p>
                  <span className={`text-xs ${order.status === "Complété" ? "text-green-600" : "text-amber-600"}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Activity Timeline */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Activité Récente</h2>
        <div className="space-y-4">
          {[
            {
              action: "Nouveau projet créé",
              detail: "Site E-commerce Fashion",
              time: "Il y a 2 heures",
              icon: FolderKanban,
            },
            {
              action: "Commande complétée",
              detail: "CMD-001 • Tech Solutions",
              time: "Il y a 3 heures",
              icon: CheckCircle2,
            },
            {
              action: "Agent assigné",
              detail: "Marie Claire → Application Mobile Banking",
              time: "Il y a 5 heures",
              icon: UserCog,
            },
            { action: "Nouveau client", detail: "Digital Agency inscrit", time: "Il y a 7 heures", icon: Users },
          ].map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.detail}</p>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
