import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, Search, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Les Tendances du Développement Web en 2025",
    excerpt:
      "Découvrez les technologies et pratiques qui vont dominer le développement web cette année, de l'IA aux frameworks émergents.",
    category: "Tendances",
    date: "15 Jan 2025",
    readTime: "8 min",
    image: "/web-development-trends-2025.jpg",
    author: {
      name: "Sophie Martin",
      role: "Lead Developer",
    },
  }

  const posts = [
    {
      id: 2,
      title: "Next.js 15 : Nouveautés et Migration",
      excerpt:
        "Guide complet des nouvelles fonctionnalités de Next.js 15 et comment migrer votre application existante.",
      category: "Tutoriel",
      date: "12 Jan 2025",
      readTime: "10 min",
      image: "/nextjs-15-features.jpg",
      author: "Jean Dupont",
    },
    {
      id: 3,
      title: "Sécurité des Applications Web : Guide Complet",
      excerpt: "Les meilleures pratiques pour sécuriser vos applications web contre les menaces courantes.",
      category: "Sécurité",
      date: "10 Jan 2025",
      readTime: "12 min",
      image: "/blog-covers/blog-demo-5.png",
      author: "Marie Dubois",
    },
    {
      id: 4,
      title: "Performance Web : Optimiser React",
      excerpt: "Techniques avancées d'optimisation pour améliorer les performances de vos applications React.",
      category: "Performance",
      date: "8 Jan 2025",
      readTime: "7 min",
      image: "/react-performance-optimization.png",
      author: "Pierre Laurent",
    },
    {
      id: 5,
      title: "Design System : Créer une Bibliothèque UI",
      excerpt: "Comment créer et maintenir un design system cohérent pour vos projets d'entreprise.",
      category: "Design",
      date: "5 Jan 2025",
      readTime: "9 min",
      image: "/design-system-ui-library.jpg",
      author: "Emma Bernard",
    },
    {
      id: 6,
      title: "TypeScript : Tips Avancés",
      excerpt: "Des astuces TypeScript avancées pour écrire du code plus robuste et maintenable.",
      category: "Tutoriel",
      date: "3 Jan 2025",
      readTime: "6 min",
      image: "/typescript-advanced-tips.jpg",
      author: "Lucas Moreau",
    },
    {
      id: 7,
      title: "CI/CD avec GitHub Actions",
      excerpt: "Automatisez vos déploiements avec GitHub Actions et améliorez votre workflow DevOps.",
      category: "DevOps",
      date: "1 Jan 2025",
      readTime: "11 min",
      image: "/github-actions-cicd.png",
      author: "Thomas Petit",
    },
    {
      id: 8,
      title: "Architecture Microservices avec Node.js",
      excerpt: "Guide pratique pour concevoir et implémenter une architecture microservices scalable.",
      category: "Architecture",
      date: "28 Déc 2024",
      readTime: "15 min",
      image: "/microservices-nodejs-architecture.jpg",
      author: "Julien Roux",
    },
    {
      id: 9,
      title: "Accessibilité Web : WCAG 2.2",
      excerpt: "Rendez vos applications accessibles à tous en suivant les dernières directives WCAG.",
      category: "Accessibilité",
      date: "25 Déc 2024",
      readTime: "8 min",
      image: "/web-accessibility-wcag.jpg",
      author: "Camille Blanc",
    },
  ]

  const categories = [
    "Tous",
    "Tendances",
    "Tutoriel",
    "Sécurité",
    "Performance",
    "Design",
    "DevOps",
    "Architecture",
    "Accessibilité",
  ]

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative border-b bg-gradient-to-br from-background via-background to-primary/5">
            <div className="container px-4 py-20 md:py-28">
              <div className="mx-auto max-w-3xl text-center space-y-6">
                <Badge variant="secondary">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  Blog CGA
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                  Insights & <span className="text-primary">Expertise</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Découvrez nos articles sur les dernières technologies, tutoriels pratiques et meilleures pratiques du
                  développement.
                </p>
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Rechercher des articles..." className="pl-10" />
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="border-b bg-muted/30">
            <div className="container px-4 py-6">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map((category) => (
                  <Button key={category} variant="ghost" size="sm" className="shrink-0">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="py-12 md:py-16">
            <div className="container px-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Article en vedette</h2>
              </div>
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {featuredPost.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{featuredPost.author.name}</div>
                        <div className="text-xs text-muted-foreground">{featuredPost.author.role}</div>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${featuredPost.id}`}>
                        Lire l'article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Recent Posts */}
          <section className="py-12 md:py-16 border-t">
            <div className="container px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Articles récents</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge>{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">{post.author.name}</div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Lire
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Charger Plus d'Articles
                </Button>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-20 border-t bg-primary text-primary-foreground">
            <div className="container px-4">
              <div className="mx-auto max-w-2xl text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Restez Informé</h2>
                <p className="text-lg opacity-90 text-pretty">
                  Recevez nos derniers articles et conseils directement dans votre boîte mail.
                </p>
                <div className="flex gap-2 max-w-md mx-auto">
                  <Input type="email" placeholder="votre@email.com" className="bg-primary-foreground text-primary" />
                  <Button variant="secondary">S'abonner</Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}
