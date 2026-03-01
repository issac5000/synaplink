import { z } from "zod";

export const devisSchema = z.object({
  typeProjet: z.string().min(1, "Veuillez sélectionner un type de projet"),
  budget: z.string().min(1, "Veuillez sélectionner un budget"),
  delai: z.string().min(1, "Veuillez sélectionner un délai"),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  whatsapp: z.string().optional(),
  description: z
    .string()
    .min(10, "Veuillez décrire votre projet en quelques mots (min. 10 caractères)"),
});

export type DevisFormData = z.infer<typeof devisSchema>;

export const typeProjetOptions = [
  "Site vitrine / landing page",
  "Application web ou mobile",
  "Agent IA / chatbot",
  "Automatisation / workflow",
  "Vidéo promotionnelle",
  "Conseil / audit",
  "Autre",
];

export const budgetOptions = [
  "< 1 000€",
  "1 000€ – 5 000€",
  "5 000€ – 15 000€",
  "15 000€+",
  "Je ne sais pas encore",
];

export const delaiOptions = [
  "Urgent (< 1 mois)",
  "1 à 3 mois",
  "3 à 6 mois",
  "Pas de contrainte",
];

export const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  objet: z.string().min(3, "L'objet doit contenir au moins 3 caractères"),
  message: z
    .string()
    .min(10, "Votre message doit contenir au moins 10 caractères"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
