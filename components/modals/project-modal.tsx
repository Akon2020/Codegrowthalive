"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProjectModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project?: {
    id: number
    name: string
    client: string
    status: string
    startDate: string
    deadline: string
    agent: string
    budget: string
    priority: string
    description?: string
  }
  mode: "create" | "edit"
}

export function ProjectModal({ open, onOpenChange, project, mode }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    name: project?.name || "",
    client: project?.client || "",
    status: project?.status || "Planifié",
    startDate: project?.startDate || "",
    deadline: project?.deadline || "",
    agent: project?.agent || "",
    budget: project?.budget || "",
    priority: project?.priority || "Moyenne",
    description: project?.description || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call
    console.log("[v0] Submitting project:", formData)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{mode === "create" ? "Créer un Nouveau Projet" : "Modifier le Projet"}</DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Remplissez les informations pour créer un nouveau projet."
              : "Modifiez les informations du projet."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nom du Projet *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="client">Client *</Label>
              <Input
                id="client"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Statut</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger id="status" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Planifié">Planifié</SelectItem>
                  <SelectItem value="En cours">En cours</SelectItem>
                  <SelectItem value="En révision">En révision</SelectItem>
                  <SelectItem value="Complété">Complété</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priorité</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => setFormData({ ...formData, priority: value })}
              >
                <SelectTrigger id="priority" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Basse">Basse</SelectItem>
                  <SelectItem value="Moyenne">Moyenne</SelectItem>
                  <SelectItem value="Haute">Haute</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="startDate">Date de Début</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline">Date d'Échéance</Label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="agent">Agent Assigné</Label>
              <Input
                id="agent"
                value={formData.agent}
                onChange={(e) => setFormData({ ...formData, agent: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <Input
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                placeholder="ex: 15000€"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              placeholder="Description détaillée du projet..."
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Annuler
            </Button>
            <Button type="submit">{mode === "create" ? "Créer" : "Enregistrer"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
