import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="content-wrapper-narrow py-16">
        <div className="text-center space-y-8">
          {/* 404 Number with CGA Gold accent */}
          <div className="relative">
            <h1 className="text-[150px] sm:text-[200px] lg:text-[250px] font-bold text-primary/20 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 animate-pulse" />
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Page introuvable</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou explorez nos
              services.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="gap-2 min-w-[200px]">
              <Link href="/">
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2 min-w-[200px] bg-transparent">
              <Link href="/services">
                <Search className="w-5 h-5" />
                Nos services
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Liens utiles</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/portfolio" className="text-primary hover:text-primary/80 transition-colors">
                Portfolio
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">
                Blog
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                Contact
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/produits" className="text-primary hover:text-primary/80 transition-colors">
                Produits
              </Link>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <span>CGA - Code, Growth Alive</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
