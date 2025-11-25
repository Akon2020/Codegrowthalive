"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { Mail, Lock, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <Image src="/images/logocga.webp" alt="CGA Logo" width={120} height={60} className="mx-auto" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Bienvenue sur CGA</h1>
          <p className="text-muted-foreground">Connectez-vous à votre compte</p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Oublié?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-9"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full gap-2">
              Se connecter
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Pas encore de compte? </span>
            <Link href="/register" className="text-primary font-medium hover:underline">
              S'inscrire
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t">
            <p className="text-sm text-muted-foreground text-center mb-4">Accès rapide</p>
            <div className="grid grid-cols-3 gap-2">
              <Link href="/client/dashboard">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Client
                </Button>
              </Link>
              <Link href="/agent/dashboard">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Agent
                </Button>
              </Link>
              <Link href="/admin">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          En vous connectant, vous acceptez nos{" "}
          <Link href="/terms" className="text-primary hover:underline">
            conditions d'utilisation
          </Link>
        </p>
      </div>
    </div>
  )
}
