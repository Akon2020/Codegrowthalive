// User types based on UML diagram
export interface User {
  id: number
  nom: string
  prenom: string
  email: string
  telephone: string
  adresse: string
  motDePasse: string
  role: "client" | "agent" | "admin"
  createdAt: Date
}

// Project types
export interface Project {
  id: number
  titre: string
  description: string
  dateDebut: Date
  dateFin?: Date
  statut: "Planifié" | "En cours" | "En révision" | "Complété" | "Annulé"
  clientId: number
  budget?: number
  progression: number
}

// Product types (already defined in product.ts but adding for completeness)
export interface Product {
  id: number
  nom: string
  description: string
  prix: number
  stock: number
  image: string
  categorie: string
}

// Order types
export interface Order {
  id: string
  clientId: number
  dateCommande: Date
  statut: "En attente" | "En cours" | "En livraison" | "Complété" | "Annulé"
  total: number
  items: OrderItem[]
}

export interface OrderItem {
  id: number
  commandeId: string
  produitId: number
  quantite: number
  prixUnitaire: number
}

// Ticket/Support types
export interface Ticket {
  id: string
  sujet: string
  message: string
  statut: "Ouvert" | "En cours" | "Résolu" | "Fermé"
  dateCreation: Date
  clientId: number
}

// Notification types
export interface Notification {
  id: number
  userId: number
  message: string
  lu: boolean
  dateEnvoi: Date
  type: "info" | "warning" | "success" | "error"
}

// Portfolio types
export interface PortfolioItem {
  id: number
  titre: string
  description: string
  technologies: string[]
  image: string
  clientNom?: string
  dateRealisation?: Date
  categorie: string
}

// Agent Assignment types
export interface AgentAssignment {
  id: number
  projetId: number
  agentId: number
  dateAssignation: Date
}
