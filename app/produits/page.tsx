import { ThemeProvider } from "@/components/theme-provider"
import { ProductsGrid } from "@/components/products/products-grid"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Code2, Cloud, Shield } from "lucide-react"

export default function ProduitsPage() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">

        <main className="flex-1">
          {/* Hero */}
          <section className="relative border-b bg-gradient-to-br from-background via-background to-primary/5">
            <div className="content-wrapper px-4 py-20 md:py-28">
              <div className="mx-auto max-w-3xl text-center space-y-6">
                <Badge variant="secondary">
                  <Package className="mr-1 h-3 w-3" />
                  Boutique CGA
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                  Produits & <span className="text-primary">Solutions</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Découvrez notre sélection de produits, licences et abonnements pour accélérer votre transformation
                  digitale.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="border-b bg-muted/30">
            <div className="content-wrapper px-4 py-12">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Produits Disponibles</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Technique</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Disponibilité</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Clients Satisfaits</div>
                </div>
              </div>
            </div>
          </section>

          {/* Products */}
          <section className="py-20">
            <div className="content-wrapper px-4">
              <Tabs defaultValue="all" className="space-y-8">
                <TabsList className="flex-wrap h-auto gap-2">
                  <TabsTrigger value="all">Tous les Produits</TabsTrigger>
                  <TabsTrigger value="software">Logiciels</TabsTrigger>
                  <TabsTrigger value="saas">Abonnements SaaS</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="licenses">Licences</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-8">
                  <ProductsGrid category="all" />
                </TabsContent>

                <TabsContent value="software" className="space-y-8">
                  <ProductsGrid category="software" />
                </TabsContent>

                <TabsContent value="saas" className="space-y-8">
                  <ProductsGrid category="saas" />
                </TabsContent>

                <TabsContent value="templates" className="space-y-8">
                  <ProductsGrid category="templates" />
                </TabsContent>

                <TabsContent value="licenses" className="space-y-8">
                  <ProductsGrid category="licenses" />
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 border-t bg-muted/30">
            <div className="content-wrapper px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir Nos Produits ?</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Code de Qualité</h3>
                  <p className="text-muted-foreground">
                    Tous nos produits sont développés selon les meilleures pratiques et standards de l'industrie.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Mises à Jour Régulières</h3>
                  <p className="text-muted-foreground">
                    Bénéficiez de nouvelles fonctionnalités et corrections régulières incluses dans votre abonnement.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Support Premium</h3>
                  <p className="text-muted-foreground">
                    Notre équipe d'experts est disponible 24/7 pour vous accompagner dans l'utilisation de nos produits.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

      </div>
    </ThemeProvider>
  )
}
