import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Synap'Link",
  description: "Politique de confidentialité du site synaplink.be",
};

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au site
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-10">
          Politique de confidentialité
        </h1>

        <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
          <p>
            Dernière mise à jour : {new Date().toLocaleDateString("fr-BE", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles collectées via le site
              <strong className="text-text-primary"> synaplink.be</strong> est :
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-text-primary">Responsable :</strong> Ashot Avakian</li>
              <li><strong className="text-text-primary">Dénomination :</strong> Synap&apos;Link</li>
              <li><strong className="text-text-primary">Adresse :</strong> 13, Rue de la Pépinière, 5000 Namur, Belgique</li>
              <li><strong className="text-text-primary">Email :</strong> info@synaplink.be</li>
              <li><strong className="text-text-primary">N° TVA :</strong> BE 1034.436.506</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              2. Données collectées
            </h2>
            <p>
              Nous collectons les données personnelles suivantes lorsque vous utilisez nos formulaires :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><strong className="text-text-primary">Formulaire de devis :</strong> nom, adresse email, numéro WhatsApp (optionnel), type de projet, budget estimé, délai souhaité, description du projet.</li>
              <li><strong className="text-text-primary">Formulaire de contact :</strong> nom, adresse email, objet, message.</li>
              <li><strong className="text-text-primary">Réservation d&apos;appel :</strong> les données sont collectées via Calendly, soumis à sa propre politique de confidentialité.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              3. Finalités du traitement
            </h2>
            <p>Vos données personnelles sont utilisées pour :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Répondre à vos demandes de devis et messages de contact.</li>
              <li>Vous recontacter dans le cadre de votre projet.</li>
              <li>Améliorer nos services et l&apos;expérience utilisateur du site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              4. Base légale
            </h2>
            <p>
              Le traitement de vos données repose sur votre <strong className="text-text-primary">consentement</strong> (envoi
              volontaire du formulaire) et sur notre <strong className="text-text-primary">intérêt légitime</strong> à
              répondre à vos demandes commerciales, conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              5. Durée de conservation
            </h2>
            <p>
              Vos données personnelles sont conservées pendant une durée maximale de <strong className="text-text-primary">24 mois</strong> à
              compter de votre dernier contact, sauf obligation légale de conservation plus longue.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              6. Partage des données
            </h2>
            <p>
              Vos données ne sont jamais vendues à des tiers. Elles peuvent être transmises aux prestataires techniques
              suivants, uniquement dans le cadre du fonctionnement du site :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><strong className="text-text-primary">Vercel</strong> — hébergement du site.</li>
              <li><strong className="text-text-primary">n8n</strong> — automatisation des notifications email.</li>
              <li><strong className="text-text-primary">Infomaniak (KSuite)</strong> — envoi des emails.</li>
              <li><strong className="text-text-primary">Calendly</strong> — gestion des réservations d&apos;appel.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              7. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><strong className="text-text-primary">Droit d&apos;accès :</strong> obtenir une copie de vos données.</li>
              <li><strong className="text-text-primary">Droit de rectification :</strong> corriger des données inexactes.</li>
              <li><strong className="text-text-primary">Droit de suppression :</strong> demander l&apos;effacement de vos données.</li>
              <li><strong className="text-text-primary">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données.</li>
              <li><strong className="text-text-primary">Droit à la portabilité :</strong> recevoir vos données dans un format structuré.</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, envoyez un email à <a href="mailto:info@synaplink.be" className="text-accent hover:underline">info@synaplink.be</a>.
              Nous nous engageons à répondre dans un délai de 30 jours.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              8. Cookies
            </h2>
            <p>
              Le site synaplink.be n&apos;utilise pas de cookies de tracking ou publicitaires. Seuls des cookies
              strictement nécessaires au fonctionnement technique du site peuvent être utilisés (ex : préférences
              d&apos;affichage, sessions).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              9. Sécurité
            </h2>
            <p>
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos
              données contre tout accès non autorisé, modification, divulgation ou destruction. Le site est
              servi en HTTPS et les données sont transmises de manière chiffrée.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              10. Autorité de contrôle
            </h2>
            <p>
              Si vous estimez que le traitement de vos données n&apos;est pas conforme à la réglementation, vous pouvez
              introduire une réclamation auprès de l&apos;Autorité de protection des données (APD) :
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-text-primary">Adresse :</strong> Rue de la Presse 35, 1000 Bruxelles</li>
              <li><strong className="text-text-primary">Site web :</strong> autoriteprotectiondonnees.be</li>
              <li><strong className="text-text-primary">Email :</strong> contact@apd-gba.be</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
