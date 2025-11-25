import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { AgentSidebar } from "@/components/agent/agent-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden">
        <AgentSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex h-16 items-center justify-between border-b px-6">
            <h1 className="text-xl font-semibold">Portail Agent</h1>
            <ThemeToggle />
          </header>
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}
