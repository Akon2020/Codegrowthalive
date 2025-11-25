import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce TechStore",
      category: "E-commerce",
      description:
        "Boutique en ligne complète avec gestion des stocks, paiements sécurisés et tableau de bord administrateur.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS"],
      stats: {
        performance: "+150% de ventes",
        users: "10K+ utilisateurs",
        rating: "4.9/5 étoiles",
      },
    },
    {
      id: 2,
      title: "Application Mobile HealthTrack",
      category: "Mobile",
      description:
        "Application de suivi de santé avec tracking d'activité, nutrition et intégration de dispositifs connectés.",
      image: "/health-tracking-app.png",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      stats: {
        downloads: "50K+ téléchargements",
        rating: "4.8/5 étoiles",
        retention: "85% rétention",
      },
    },
    {
      id: 3,
      title: "Système de Gestion RH HRPro",
      category: "SaaS",
      description: "Plateforme SaaS de gestion des ressources humaines avec gestion des congés, paie et recrutement.",
      image: "/hr-management-system-dashboard.jpg",
      technologies: ["React", "Python", "Django", "PostgreSQL", "AWS"],
      stats: {
        companies: "200+ entreprises",
        employees: "15K+ employés gérés",
        uptime: "99.9% disponibilité",
      },
    },
    {
      id: 4,
      title: "Plateforme Éducative EduLearn",
      category: "Web",
      description: "Plateforme d'apprentissage en ligne avec cours vidéo, quiz interactifs et suivi de progression.",
      image: "/online-learning-platform.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "Vercel"],
      stats: {
        students: "25K+ étudiants",
        courses: "500+ cours",
        completion: "92% taux de complétion",
      },
    },
    {
      id: 5,
      title: "Application Fintech PayFlow",
      category: "Fintech",
      description: "Solution de paiement mobile avec transferts instantanés, gestion budgétaire et analytics.",
      image: "/fintech-payment-app-interface.jpg",
      technologies: ["Flutter", "Node.js", "MongoDB", "Stripe", "Plaid"],
      stats: {
        transactions: "1M+ transactions",
        volume: "10M€+ traités",
        security: "Certifié PCI-DSS",
      },
    },
    {
      id: 6,
      title: "Tableau de Bord Analytics DataViz",
      category: "Data",
      description: "Dashboard analytics en temps réel avec visualisations avancées et rapports personnalisés.",
      image: "/analytics-dashboard-visualization.png",
      technologies: ["React", "D3.js", "Python", "FastAPI", "TimescaleDB"],
      stats: {
        dataPoints: "100M+ points de données",
        refresh: "Temps réel",
        charts: "50+ types de graphiques",
      },
    },
    {
      id: 7,
      title: "Marketplace B2B TradeHub",
      category: "E-commerce",
      description:
        "Marketplace B2B connectant fournisseurs et acheteurs avec système d'enchères et logistique intégrée.",
      image: "/b2b-marketplace-platform.png",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "Docker"],
      stats: {
        vendors: "500+ fournisseurs",
        buyers: "2K+ acheteurs",
        gmv: "5M€ GMV/mois",
      },
    },
    {
      id: 8,
      title: "App Réservation BookingPro",
      category: "Mobile",
      description:
        "Application de réservation pour restaurants et services avec gestion des disponibilités et paiements.",
      image: "/booking-reservation-app-interface.jpg",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Stripe"],
      stats: {
        bookings: "100K+ réservations",
        businesses: "1K+ établissements",
        satisfaction: "4.7/5 étoiles",
      },
    },
    {
      id: 9,
      title: "CRM Entreprise SalesForce Pro",
      category: "SaaS",
      description: "CRM complet avec gestion des leads, pipeline de ventes, automation marketing et reporting.",
      image: "/crm-sales-dashboard.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Elasticsearch"],
      stats: {
        users: "10K+ utilisateurs",
        deals: "50M€+ deals gérés",
        automation: "80% tâches automatisées",
      },
    },
  ]

  const categories = ["Tous", "E-commerce", "Mobile", "SaaS", "Web", "Fintech", "Data"]

  return (
    <>
      {/* Hero */}
      <section className="relative border-b bg-gradient-to-br from-background via-background to-primary/5">
        <div className="content-wrapper py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <Badge variant="secondary">Portfolio</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
              Nos <span className="text-primary">Réalisations</span> à Succès
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Découvrez une sélection de projets que nous avons réalisés pour nos clients. Chaque projet est unique et
              témoigne de notre expertise technique.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-muted/30">
        <div className="content-wrapper py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Projets Livrés</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Clients Satisfaits</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Secteurs d'Activité</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Taux de Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="content-wrapper">
          <Tabs defaultValue="Tous" className="space-y-8">
            <TabsList className="flex-wrap h-auto gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => category === "Tous" || project.category === category)
                    .map((project) => (
                      <Card
                        key={project.id}
                        className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
                      >
                        <div className="relative aspect-video overflow-hidden bg-muted">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="object-cover w-full h-full transition-transform group-hover:scale-105"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge>{project.category}</Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            {Object.entries(project.stats).map(([key, value]) => (
                              <div key={key}>
                                <div className="font-semibold text-primary">{value}</div>
                                <div className="text-muted-foreground text-xs capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              <ExternalLink className="mr-2 h-3 w-3" />
                              Voir le Projet
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t bg-primary text-primary-foreground">
        <div className="content-wrapper text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Prêt à Créer Votre Prochain Succès ?
          </h2>
          <p className="mx-auto max-w-2xl text-lg opacity-90 text-pretty">
            Rejoignez nos clients satisfaits et transformez votre vision en réalité.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Démarrer un Projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
