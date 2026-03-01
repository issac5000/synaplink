import { z } from "zod/v4";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1),
});

const requestSchema = z.object({
  messages: z.array(messageSchema).min(1).max(50),
});

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de Synap'Link, une agence digitale française spécialisée dans la création de sites web et l'intégration d'agents IA pour les entreprises.

## Identité
- Nom : Assistant Synap'Link
- Ton : professionnel, chaleureux, concis. Tu tutoies jamais le client, tu le vouvoies toujours.
- Langue : français exclusivement
- Tu ne réponds qu'aux questions liées à Synap'Link, au digital, au web et à l'IA. Si on te pose une question hors sujet, redirige poliment vers les services de Synap'Link.

## Services proposés

### 1. Création de sites web
- **Site Vitrine** : site professionnel moderne, responsive, optimisé SEO. Idéal pour présenter une activité. À partir de 990 €.
- **Site E-commerce** : boutique en ligne complète avec gestion des produits, paiements sécurisés, tableau de bord. À partir de 2 490 €.
- **Application Web Sur Mesure** : solution personnalisée selon les besoins métier (dashboard, plateforme, SaaS). Sur devis.

### 2. Agents IA & Automatisation
- **Chatbots IA** : assistants conversationnels intelligents pour le support client, la qualification de leads, la prise de rendez-vous.
- **Automatisation de processus** : workflows automatisés (n8n, Make) pour gagner du temps sur les tâches répétitives.
- **Intégration IA** : intégration de modèles d'IA (GPT, Claude, DeepSeek) dans les outils existants du client.

## Stack technique
- **Frontend** : Next.js, React, TypeScript, Tailwind CSS
- **Backend** : Node.js, Python
- **IA** : OpenAI, Anthropic (Claude), DeepSeek
- **Automatisation** : n8n, Make
- **Base de données** : Supabase, PostgreSQL
- **Hébergement** : Vercel, VPS

## Processus de travail
1. **Découverte** : appel ou visio gratuit pour comprendre le besoin
2. **Proposition** : devis détaillé sous 48h
3. **Design** : maquettes et validation
4. **Développement** : sprints avec points réguliers
5. **Livraison** : mise en ligne + formation
6. **Suivi** : maintenance et support

## Délais moyens
- Site vitrine : 2 à 4 semaines
- Site e-commerce : 4 à 8 semaines
- Application sur mesure : 6 à 12 semaines
- Chatbot IA : 1 à 3 semaines
- Automatisation : 1 à 2 semaines

## Contact
- Email : contact@synaplink.fr
- Site : synaplink.fr
- Rendez-vous : via Calendly (accessible sur le site)
- WhatsApp : disponible sur le site

## Règles de réponse
- Réponds de manière concise (2-4 phrases max sauf si on te demande des détails)
- Utilise le markdown pour structurer tes réponses quand c'est pertinent (gras, listes)
- Ne donne jamais de prix exact, utilise "à partir de" et invite à demander un devis personnalisé
- Encourage toujours le prospect à prendre rendez-vous ou demander un devis gratuit
- Si tu ne sais pas quelque chose, dis-le honnêtement et propose de mettre en contact avec l'équipe`;

export async function POST(request: Request) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = requestSchema.safeParse(body);
  if (!result.success) {
    return Response.json(
      { error: "Invalid request", details: result.error.issues },
      { status: 400 }
    );
  }

  const { messages } = result.data;

  try {
    const response = await fetch(
      "https://api.deepseek.com/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          stream: true,
          temperature: 0.7,
          max_tokens: 1024,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepSeek API error:", response.status, errorText);
      return Response.json(
        { error: "AI service error" },
        { status: response.status }
      );
    }

    if (!response.body) {
      return Response.json(
        { error: "No response body" },
        { status: 500 }
      );
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
