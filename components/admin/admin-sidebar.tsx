"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  UserCog,
  Package,
  ShoppingCart,
  FileText,
  Settings,
  BarChart3,
} from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Projets",
    href: "/admin/projets",
    icon: FolderKanban,
  },
  {
    title: "Clients",
    href: "/admin/clients",
    icon: Users,
  },
  {
    title: "Agents",
    href: "/admin/agents",
    icon: UserCog,
  },
  {
    title: "Produits",
    href: "/admin/produits",
    icon: Package,
  },
  {
    title: "Commandes",
    href: "/admin/commandes",
    icon: ShoppingCart,
  },
  {
    title: "Portfolio",
    href: "/admin/portfolio",
    icon: FileText,
  },
  {
    title: "Statistiques",
    href: "/admin/statistiques",
    icon: BarChart3,
  },
  {
    title: "Paramètres",
    href: "/admin/parametres",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r bg-card">
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-primary">Administration</h2>
          <p className="text-sm text-muted-foreground">Gestion complète du système</p>
        </div>
        <nav className="flex flex-1 flex-col gap-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
