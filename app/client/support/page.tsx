"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Send, Paperclip, Clock, CheckCircle2, AlertCircle, Plus } from "lucide-react"

export default function ClientSupportPage() {
  const [message, setMessage] = useState("")

  const tickets = [
    {
      id: "#4523",
      subject: "Problème de connexion au dashboard",
      status: "open",
      priority: "high",
      created: "15 Jan 2025",
      updated: "Il y a 2h",
      messages: 5,
      agent: "Sophie Martin",
    },
    {
      id: "#4521",
      subject: "Question sur la facturation",
      status: "answered",
      priority: "medium",
      created: "14 Jan 2025",
      updated: "Il y a 5h",
      messages: 3,
      agent: "Marc Durand",
    },
    {
      id: "#4518",
      subject: "Demande de fonctionnalité",
      status: "closed",
      priority: "low",
      created: "10 Jan 2025",
      updated: "12 Jan 2025",
      messages: 8,
      agent: "Julie Lambert",
    },
  ]

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "open":
        return { label: "Ouvert", variant: "destructive" as const, icon: AlertCircle }
      case "answered":
        return { label: "Répondu", variant: "default" as const, icon: MessageSquare }
      case "closed":
        return { label: "Fermé", variant: "secondary" as const, icon: CheckCircle2 }
      default:
        return { label: status, variant: "default" as const, icon: MessageSquare }
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Support</h1>
          <p className="text-muted-foreground">Obtenez de l'aide pour vos projets et commandes.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau Ticket
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover:border-primary/50 transition-colors cursor-pointer">
          <CardHeader className="text-center pb-4">
            <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-base">Chat en Direct</CardTitle>
            <CardDescription>Discutez avec un agent maintenant</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:border-primary/50 transition-colors cursor-pointer">
          <CardHeader className="text-center pb-4">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-base">Base de Connaissances</CardTitle>
            <CardDescription>Trouvez des réponses rapidement</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:border-primary/50 transition-colors cursor-pointer">
          <CardHeader className="text-center pb-4">
            <AlertCircle className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-base">Signaler un Bug</CardTitle>
            <CardDescription>Signalez un problème technique</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="tickets" className="space-y-6">
        <TabsList>
          <TabsTrigger value="tickets">Mes Tickets (3)</TabsTrigger>
          <TabsTrigger value="new">Nouveau Ticket</TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="space-y-4">
          {tickets.map((ticket) => {
            const statusInfo = getStatusInfo(ticket.status)
            const StatusIcon = statusInfo.icon

            return (
              <Card key={ticket.id} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-lg">{ticket.subject}</CardTitle>
                        <Badge variant={statusInfo.variant} className="flex items-center gap-1">
                          <StatusIcon className="h-3 w-3" />
                          {statusInfo.label}
                        </Badge>
                      </div>
                      <CardDescription>
                        Ticket {ticket.id} • Créé le {ticket.created}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-3 text-sm">
                    <div className="space-y-1">
                      <div className="text-muted-foreground">Priorité</div>
                      <Badge
                        variant={
                          ticket.priority === "high"
                            ? "destructive"
                            : ticket.priority === "medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {ticket.priority === "high" ? "Haute" : ticket.priority === "medium" ? "Moyenne" : "Basse"}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="text-muted-foreground">Agent assigné</div>
                      <div className="font-medium">{ticket.agent}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-muted-foreground">Dernière mise à jour</div>
                      <div className="font-medium">{ticket.updated}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      {ticket.messages} message{ticket.messages > 1 ? "s" : ""}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">Voir la Conversation</Button>
                      {ticket.status === "open" && <Button>Répondre</Button>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>Créer un Nouveau Ticket</CardTitle>
              <CardDescription>
                Décrivez votre problème ou votre demande et notre équipe vous répondra rapidement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input id="subject" placeholder="Résumé de votre demande" required />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Catégorie *</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Sélectionnez une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Problème technique</SelectItem>
                        <SelectItem value="billing">Facturation</SelectItem>
                        <SelectItem value="feature">Demande de fonctionnalité</SelectItem>
                        <SelectItem value="project">Question sur un projet</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priorité *</Label>
                    <Select>
                      <SelectTrigger id="priority">
                        <SelectValue placeholder="Sélectionnez la priorité" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">Haute - Urgent</SelectItem>
                        <SelectItem value="medium">Moyenne</SelectItem>
                        <SelectItem value="low">Basse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez votre demande en détail..."
                    rows={8}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachments">Pièces jointes</Label>
                  <div className="flex items-center gap-2">
                    <Input id="attachments" type="file" multiple />
                    <Button variant="outline" size="icon">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Formats acceptés: PDF, PNG, JPG, max 10MB</p>
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le Ticket
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
