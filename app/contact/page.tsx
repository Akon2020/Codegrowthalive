import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">

        <main className="flex-1">
          {/* Hero */}
          <section className="relative border-b bg-gradient-to-br from-background via-background to-primary/5">
            <div className="content-wrapper py-20 md:py-28">
              <div className="mx-auto max-w-3xl text-center space-y-6">
                <Badge variant="secondary">Contact</Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                  Parlons de Votre <span className="text-primary">Projet</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Notre équipe est à votre écoute pour transformer vos idées en solutions digitales performantes.
                  Contactez-nous pour un devis gratuit.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="py-12 border-b bg-muted/30">
            <div className="content-wrapper">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Email</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a href="mailto:contact@cga.com" className="text-primary hover:underline">
                      contact@cga.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Téléphone</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                      +243 987 654 321
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Lun-Ven 9h-18h</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Adresse</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm">
                      123 Avenue Maison
                      <br />
                      75001 Bukavu, RDC
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Horaires</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm">
                      Lundi - Vendredi
                      <br />
                      9:00 - 18:00
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Form & Map */}
          <section className="py-20">
            <div className="content-wrapper">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Form */}
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Envoyez-nous un Message</h2>
                    <p className="text-muted-foreground">
                      Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.
                    </p>
                  </div>

                  <Card>
                    <CardContent className="pt-6">
                      <form className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Prénom *</Label>
                            <Input id="firstName" placeholder="Firstname" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Nom *</Label>
                            <Input id="lastName" placeholder="Lastname" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" placeholder="email@example.com" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input id="phone" type="tel" placeholder="+243 987 654 321" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Entreprise</Label>
                          <Input id="company" placeholder="Nom de votre entreprise" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Sujet *</Label>
                          <Select>
                            <SelectTrigger id="subject" className="w-full">
                              <SelectValue placeholder="Sélectionnez un sujet" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="devis">Demande de devis</SelectItem>
                              <SelectItem value="info">Demande d'information</SelectItem>
                              <SelectItem value="support">Support technique</SelectItem>
                              <SelectItem value="partnership">Partenariat</SelectItem>
                              <SelectItem value="other">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea id="message" placeholder="Décrivez votre demande en détail..." rows={6} required />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          <Send className="mr-2 h-4 w-4" />
                          Envoyer le Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Map & Additional Info */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Visitez-nous</h2>
                    <p className="text-muted-foreground mb-6">
                      Notre bureau est situé au cœur de Bukavu. N'hésitez pas à prendre rendez-vous pour discuter de
                      votre projet autour d'un café.
                    </p>
                  </div>

                  {/* Map Placeholder */}
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <MapPin className="h-12 w-12 text-primary mx-auto" />
                          <p className="text-sm text-muted-foreground">123 Avenue Maison, 75001 Bukavu</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* FAQ Quick Links */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Questions Fréquentes</CardTitle>
                      <CardDescription>Trouvez rapidement des réponses à vos questions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <a href="/faq#pricing">Quels sont vos tarifs ?</a>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <a href="/faq#timeline">Quel est le délai de réalisation ?</a>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <a href="/faq#process">Comment se déroule un projet ?</a>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <a href="/faq#support">Quel support proposez-vous ?</a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Live Chat */}
                  <Card className="bg-primary text-primary-foreground">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        <CardTitle>Chat en Direct</CardTitle>
                      </div>
                      <CardDescription className="text-primary-foreground/80">
                        Notre équipe est en ligne
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="secondary" className="w-full">
                        Démarrer une Conversation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

      </div>
    </ThemeProvider>
  )
}
