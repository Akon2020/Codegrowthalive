"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Settings, Bell, Shield, Mail, Globe, Palette } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Paramètres</h1>
        <p className="text-muted-foreground">Gérer les paramètres du système</p>
      </div>

      {/* General Settings */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Settings className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Paramètres Généraux</h2>
        </div>
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="site-name">Nom du site</Label>
            <Input id="site-name" defaultValue="CGA - Code, Growth Alive" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="site-description">Description</Label>
            <Textarea
              id="site-description"
              defaultValue="Votre partenaire pour des solutions digitales innovantes"
              rows={3}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-email">Email de contact</Label>
            <Input id="contact-email" type="email" defaultValue="contact@cga.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input id="phone" defaultValue="+243 987 654 321" />
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Notifications</h2>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Notifications par email</Label>
              <p className="text-sm text-muted-foreground">Recevoir des notifications sur les nouvelles commandes</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Notifications des projets</Label>
              <p className="text-sm text-muted-foreground">Alertes sur les mises à jour de projets</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Rapports hebdomadaires</Label>
              <p className="text-sm text-muted-foreground">Recevoir un résumé hebdomadaire des activités</p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Email Configuration */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Configuration Email</h2>
        </div>
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="smtp-host">Serveur SMTP</Label>
            <Input id="smtp-host" placeholder="smtp.exemple.com" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="smtp-port">Port</Label>
              <Input id="smtp-port" defaultValue="587" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="smtp-encryption">Chiffrement</Label>
              <Input id="smtp-encryption" defaultValue="TLS" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="smtp-username">Nom d'utilisateur</Label>
            <Input id="smtp-username" type="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="smtp-password">Mot de passe</Label>
            <Input id="smtp-password" type="password" />
          </div>
        </div>
      </Card>

      {/* SEO Settings */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">SEO & Réseaux Sociaux</h2>
        </div>
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="meta-title">Titre Meta</Label>
            <Input id="meta-title" defaultValue="CGA - Solutions Digitales Innovantes" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="meta-description">Description Meta</Label>
            <Textarea
              id="meta-description"
              defaultValue="Développement web, applications mobiles et solutions digitales sur mesure"
              rows={2}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="meta-keywords">Mots-clés</Label>
            <Input id="meta-keywords" defaultValue="développement web, applications, digital" />
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Sécurité</h2>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Authentification à deux facteurs</Label>
              <p className="text-sm text-muted-foreground">Ajouter une couche de sécurité supplémentaire</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Connexions sécurisées uniquement (HTTPS)</Label>
              <p className="text-sm text-muted-foreground">Forcer les connexions HTTPS</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Journal d'activité</Label>
              <p className="text-sm text-muted-foreground">Enregistrer toutes les actions administratives</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      {/* Theme Settings */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Palette className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Apparence</h2>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label>Mode sombre par défaut</Label>
              <p className="text-sm text-muted-foreground">Utiliser le thème sombre pour tous les utilisateurs</p>
            </div>
            <Switch />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="primary-color">Couleur primaire</Label>
            <div className="flex items-center gap-3">
              <Input id="primary-color" type="color" defaultValue="#D4AF37" className="w-20 h-10" />
              <Input defaultValue="#D4AF37" className="flex-1" />
            </div>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-4">
        <Button variant="outline">Annuler</Button>
        <Button>Enregistrer les modifications</Button>
      </div>
    </div>
  )
}
