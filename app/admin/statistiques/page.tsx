"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, FolderKanban, ShoppingCart, DollarSign, Calendar, ArrowUp, ArrowDown } from "lucide-react"

export default function AdminStatisticsPage() {
  const mainStats = [
    { label: "Revenu Total", value: "245,890€", change: "+12.5%", trend: "up", icon: DollarSign },
    { label: "Nouveaux Clients", value: "156", change: "+8.2%", trend: "up", icon: Users },
    { label: "Projets Actifs", value: "24", change: "-3.1%", trend: "down", icon: FolderKanban },
    { label: "Commandes", value: "89", change: "+23.4%", trend: "up", icon: ShoppingCart },
  ]

  const monthlyRevenue = [
    { month: "Jan", revenue: 18500 },
    { month: "Fév", revenue: 22000 },
    { month: "Mar", revenue: 19800 },
    { month: "Avr", revenue: 25600 },
    { month: "Mai", revenue: 28900 },
    { month: "Juin", revenue: 31200 },
  ]

  const topClients = [
    { name: "Global Tech", spent: 95000, projects: 5, growth: 45 },
    { name: "Data Insights", spent: 62000, projects: 4, growth: 32 },
    { name: "Style Plus", spent: 45000, projects: 3, growth: 28 },
    { name: "FinTech Corp", spent: 35000, projects: 2, growth: 18 },
  ]

  const topAgents = [
    { name: "Pierre Martin", projects: 31, performance: 88 },
    { name: "Sophie Bernard", projects: 27, performance: 97 },
    { name: "Jean Dupont", projects: 24, performance: 95 },
    { name: "Thomas Leroy", projects: 22, performance: 90 },
  ]

  const maxRevenue = Math.max(...monthlyRevenue.map((m) => m.revenue))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Statistiques et Analytics</h1>
        <p className="text-muted-foreground">Vue d'ensemble des performances</p>
      </div>

      {/* Main Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {mainStats.map((stat) => {
          const Icon = stat.icon
          const TrendIcon = stat.trend === "up" ? ArrowUp : ArrowDown
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-lg ${stat.trend === "up" ? "bg-green-100 dark:bg-green-950" : "bg-red-100 dark:bg-red-950"}`}
                >
                  <Icon className={`h-6 w-6 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`} />
                </div>
                <div className={`flex items-center gap-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  <TrendIcon className="h-4 w-4" />
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-bold mt-1">{stat.value}</p>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue Chart */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">Revenu Mensuel</h2>
              <p className="text-sm text-muted-foreground">6 derniers mois</p>
            </div>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {monthlyRevenue.map((item) => (
              <div key={item.month} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.month}</span>
                  <span className="text-primary font-semibold">{item.revenue.toLocaleString("fr-FR")}€</span>
                </div>
                <div className="h-3 bg-accent rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Clients */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">Top Clients</h2>
              <p className="text-sm text-muted-foreground">Par revenu généré</p>
            </div>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {topClients.map((client, index) => (
              <div key={client.name} className="flex items-center gap-4 p-4 rounded-lg border">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{client.name}</p>
                  <p className="text-sm text-muted-foreground">{client.projects} projets</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{client.spent.toLocaleString("fr-FR")}€</p>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <ArrowUp className="h-3 w-3" />
                    <span>{client.growth}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Top Agents */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Meilleurs Agents</h2>
            <p className="text-sm text-muted-foreground">Performance et projets complétés</p>
          </div>
          <Users className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {topAgents.map((agent, index) => (
            <div key={agent.name} className="p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {index + 1}
                </div>
                <p className="font-semibold text-sm">{agent.name}</p>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-muted-foreground">Projets complétés</p>
                  <p className="text-2xl font-bold">{agent.projects}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Performance</span>
                    <span className="font-medium text-primary">{agent.performance}%</span>
                  </div>
                  <div className="h-2 bg-accent rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all" style={{ width: `${agent.performance}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
