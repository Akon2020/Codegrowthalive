import type React from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <AdminSidebar />
      <main className="ml-64 p-8 pt-24">{children}</main>
    </div>
  )
}
