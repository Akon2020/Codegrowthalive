import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Smartphone, Wrench, Cloud, Shield, Zap, ArrowRight, CheckCircle2, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Sites web modernes et applications performantes avec les dernières technologies.",
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Applications natives et cross-platform pour iOS et Android.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Support technique 24/7 et maintenance proactive de vos systèmes.",
    },
    {
      icon: Cloud,
      title: "Solutions Cloud",
      description: "Migration et optimisation de votre infrastructure cloud.",
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Audits de sécurité et protection de vos données critiques.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimisation et amélioration des performances de vos applications.",
    },
  ]

  const testimonials = [
    {
      name: "Anonymous",
      role: "CEO, TechStart",
      content:
        "CGA a transformé notre vision en une application exceptionnelle. Leur expertise et professionnalisme sont remarquables.",
      rating: 5,
    },
    {
      name: "Anonymous",
      role: "Directeur IT, InnovCorp",
      content:
        "Équipe réactive et compétente. Ils ont livré notre projet en temps et en heure avec une qualité irréprochable.",
      rating: 5,
    },
    {
      name: "Anonymous",
      role: "Founder, EcoShop",
      content:
        "Notre boutique en ligne a explosé grâce à leur solution e-commerce. Un investissement qui a dépassé nos attentes.",
      rating: 5,
    },
  ]

  const stats = [
    { value: "10+", label: "Projets Réalisés" },
    { value: "98%", label: "Satisfaction Client" },
    { value: "20+", label: "Clients Actifs" },
    { value: "2+", label: "Ans d'Expérience" },
  ]

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden border-b bg-gradient-to-br from-background via-background to-primary/5">
            <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
            <div className="content-wrapper relative py-24 md:py-32 lg:py-40">
              <div className="mx-auto max-w-4xl text-center space-y-8">
                <Badge className="mb-4" variant="secondary">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  Solutions Digitales Innovantes
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                  Transformez Vos Idées en <span className="text-primary">Réalité Digitale</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
                  CGA accompagne votre croissance avec des solutions web et mobiles sur mesure. De la conception au
                  déploiement, nous donnons vie à vos projets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" asChild className="text-base">
                    <Link href="/contact">
                      Démarrer un Projet
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                    <Link href="/portfolio">Voir nos Réalisations</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="border-b bg-muted/30">
            <div className="content-wrapper py-12">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 md:py-28">
            <div className="content-wrapper">
              <div className="text-center space-y-4 mb-12">
                <Badge variant="secondary">Nos Services</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                  Des Solutions Complètes pour Votre Succès
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
                  Nous offrons une gamme complète de services pour répondre à tous vos besoins digitaux.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">
                    Découvrir Tous nos Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Choose CGA Section */}
          <section className="py-20 md:py-28 border-t bg-muted/30">
            <div className="content-wrapper">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <Badge variant="secondary">Pourquoi CGA ?</Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                    Votre Partenaire de Confiance pour la Transformation Digitale
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Depuis plus de 10 ans, CGA accompagne les entreprises dans leur croissance digitale. Notre expertise
                    et notre engagement font de nous le partenaire idéal pour vos projets.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Équipe d'experts certifiés et passionnés",
                      "Méthodologie agile et livraisons rapides",
                      "Support et maintenance 24/7",
                      "Technologies modernes et évolutives",
                      "Tarifs transparents et compétitifs",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" asChild>
                    <Link href="/contact">Discuter de Votre Projet</Link>
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20" />
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 md:py-28">
            <div className="content-wrapper">
              <div className="text-center space-y-4 mb-12">
                <Badge variant="secondary">Témoignages</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                  Ce Que Disent Nos Clients
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
                  La satisfaction de nos clients est notre priorité. Découvrez leurs retours d'expérience.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <CardDescription className="text-base leading-relaxed">"{testimonial.content}"</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-28 border-t bg-primary text-primary-foreground">
            <div className="content-wrapper text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                Prêt à Démarrer Votre Projet ?
              </h2>
              <p className="mx-auto max-w-2xl text-lg opacity-90 text-pretty">
                Contactez-nous dès aujourd'hui pour un devis gratuit et découvrez comment nous pouvons transformer votre
                vision en réalité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Obtenir un Devis Gratuit</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/portfolio">Voir nos Projets</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

      </div>
    </ThemeProvider>
  )
}
