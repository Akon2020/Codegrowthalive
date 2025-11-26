import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Download, Mail } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1 flex items-center justify-center py-20">
          <div className="content-wrapper px-4">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-12 pb-8 text-center space-y-8">
                <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl font-bold">Commande Confirmée !</h1>
                  <p className="text-lg text-muted-foreground">
                    Merci pour votre achat. Votre commande a été enregistrée avec succès.
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-6 space-y-2">
                  <div className="text-sm text-muted-foreground">Numéro de commande</div>
                  <div className="text-2xl font-bold font-mono">CGA-2025-{Math.floor(Math.random() * 10000)}</div>
                  <div className="text-sm text-muted-foreground">
                    Un email de confirmation a été envoyé à votre adresse
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger la Facture
                  </Button>
                  <Button size="lg" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Envoyer par Email
                  </Button>
                </div>

                <div className="pt-6 border-t space-y-4">
                  <h2 className="text-xl font-semibold">Que se passe-t-il ensuite ?</h2>
                  <div className="grid gap-4 sm:grid-cols-3 text-left">
                    <div className="space-y-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                        1
                      </div>
                      <div className="font-medium">Traitement</div>
                      <p className="text-sm text-muted-foreground">Nous préparons votre commande</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                        2
                      </div>
                      <div className="font-medium">Expédition</div>
                      <p className="text-sm text-muted-foreground">Envoi sous 24-48h</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                        3
                      </div>
                      <div className="font-medium">Livraison</div>
                      <p className="text-sm text-muted-foreground">Réception sous 3-5 jours</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
                  <Button size="lg" asChild>
                    <Link href="/client/commandes">Voir mes Commandes</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/produits">Continuer mes Achats</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}
