"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FolderKanban, ShoppingBag, MessageSquare, Settings, LogOut, User, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const navigation = [
  { name: "Tableau de Bord", href: "/client/dashboard", icon: LayoutDashboard },
  { name: "Mes Projets", href: "/client/projets", icon: FolderKanban, badge: 3 },
  { name: "Mes Commandes", href: "/client/commandes", icon: ShoppingBag },
  { name: "Support", href: "/client/support", icon: MessageSquare, badge: 2 },
  { name: "Paramètres", href: "/client/parametres", icon: Settings },
]

export function ClientSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-muted/30">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center">
          <Image src="/logo-cga.png" alt="CGA" width={100} height={32} className="h-8 w-auto" />
        </Link>
      </div>

      {/* User Profile */}
      <div className="border-b p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm truncate">Jean Dupont</div>
            <div className="text-xs text-muted-foreground truncate">jean.dupont@example.com</div>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="flex-1">{item.name}</span>
              {item.badge && (
                <Badge variant={isActive ? "secondary" : "default"} className="ml-auto">
                  {item.badge}
                </Badge>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Footer Actions */}
      <div className="border-t p-4 space-y-2">
        <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
          <Link href="/client/profil">
            <User className="mr-2 h-4 w-4" />
            Mon Profil
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          Déconnexion
        </Button>
      </div>
    </div>
  )
}
