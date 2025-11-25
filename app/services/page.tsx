import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Code2,
  Smartphone,
  Wrench,
  Cloud,
  Shield,
  Database,
  BarChart,
  Globe,
  Palette,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Création de sites web et applications web sur mesure avec les technologies les plus récentes.",
      features: [
        "Sites vitrine et corporate",
        "Applications web complexes",
        "Progressive Web Apps (PWA)",
        "Refonte et modernisation",
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js"],
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Développement d'applications mobiles natives et cross-platform pour iOS et Android.",
      features: [
        "Applications natives iOS/Android",
        "Applications cross-platform",
        "Intégration API et services",
        "Publication sur les stores",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: Database,
      title: "Backend & API",
      description: "Architecture backend robuste et APIs performantes pour vos applications.",
      features: ["APIs RESTful et GraphQL", "Microservices", "Bases de données optimisées", "Architecture scalable"],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design d'interfaces utilisateur modernes et expériences utilisateur optimales.",
      features: ["Wireframes et prototypes", "Design systems", "Tests utilisateurs", "Responsive design"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    {
      icon: Cloud,
      title: "Solutions Cloud",
      description: "Migration, hébergement et optimisation de votre infrastructure cloud.",
      features: [
        "Migration vers le cloud",
        "Infrastructure as Code",
        "Optimisation des coûts",
        "Monitoring et alertes",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Vercel"],
    },
    {
      icon: Shield,
      title: "Sécurité & Conformité",
      description: "Audits de sécurité et mise en conformité de vos systèmes informatiques.",
      features: ["Audits de sécurité", "Tests de pénétration", "Conformité RGPD", "Certifications ISO"],
      technologies: ["OWASP", "SSL/TLS", "OAuth", "JWT"],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Support technique continu et maintenance proactive de vos applications.",
      features: ["Support 24/7", "Mises à jour régulières", "Monitoring proactif", "Corrections de bugs"],
      technologies: ["Monitoring", "CI/CD", "DevOps", "Backup"],
    },
    {
      icon: BarChart,
      title: "Consulting IT",
      description: "Conseil stratégique pour optimiser votre transformation digitale.",
      features: ["Audit technique", "Roadmap technologique", "Formation équipes", "Best practices"],
      technologies: ["Agile", "SCRUM", "DevOps", "ITIL"],
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Solutions e-commerce complètes pour vendre en ligne efficacement.",
      features: ["Boutiques en ligne", "Paiement sécurisé", "Gestion des stocks", "Marketing automation"],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Analyse & Découverte",
      description: "Nous analysons vos besoins et définissons ensemble les objectifs du projet.",
    },
    {
      step: "02",
      title: "Conception",
      description: "Création des maquettes, prototypes et architecture technique du projet.",
    },
    {
      step: "03",
      title: "Développement",
      description: "Développement itératif avec des points de validation réguliers.",
    },
    {
      step: "04",
      title: "Tests & QA",
      description: "Tests rigoureux pour garantir qualité, performance et sécurité.",
    },
    {
      step: "05",
      title: "Déploiement",
      description: "Mise en production et formation de vos équipes.",
    },
    {
      step: "06",
      title: "Support & Évolution",
      description: "Maintenance continue et évolutions selon vos besoins.",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative border-b bg-gradient-to-br from-background via-background to-primary/5">
        <div className="content-wrapper py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <Badge variant="secondary">Nos Services</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
              Des Services Complets pour Tous Vos <span className="text-primary">Besoins Digitaux</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              De la conception à la maintenance, CGA vous accompagne à chaque étape de votre projet avec expertise et
              professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="content-wrapper">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t bg-muted/30">
        <div className="content-wrapper">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">Notre Processus</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Une Méthodologie Éprouvée</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
              Notre approche agile garantit transparence, flexibilité et livraisons de qualité.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-4xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="content-wrapper">
          <div className="mx-auto max-w-2xl">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="secondary">Demande de Devis</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Obtenez un Devis Gratuit</h2>
              <p className="text-muted-foreground text-pretty">
                Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input id="firstName" placeholder="Jean" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input id="lastName" placeholder="Dupont" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="jean.dupont@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="+33 6 12 34 56 78" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise</Label>
                    <Input id="company" placeholder="Nom de votre entreprise" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service demandé *</Label>
                    <Select>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Développement Web</SelectItem>
                        <SelectItem value="mobile">Application Mobile</SelectItem>
                        <SelectItem value="backend">Backend & API</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                        <SelectItem value="cloud">Solutions Cloud</SelectItem>
                        <SelectItem value="security">Sécurité</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget estimé</Label>
                    <Select>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Sélectionnez une fourchette" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Moins de 5 000€</SelectItem>
                        <SelectItem value="medium">5 000€ - 20 000€</SelectItem>
                        <SelectItem value="large">20 000€ - 50 000€</SelectItem>
                        <SelectItem value="xlarge">Plus de 50 000€</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Description du projet *</Label>
                    <Textarea id="message" placeholder="Décrivez votre projet et vos besoins..." rows={5} required />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer la Demande
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t bg-primary text-primary-foreground">
        <div className="content-wrapper text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Besoin d'un Service Personnalisé ?
          </h2>
          <p className="mx-auto max-w-2xl text-lg opacity-90 text-pretty">
            Contactez-nous pour discuter de vos besoins spécifiques. Nous créons des solutions sur mesure.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Nous Contacter</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
