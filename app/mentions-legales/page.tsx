import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions légales — Synap'Link",
  description: "Mentions légales du site synaplink.be",
};

export default function MentionsLegales() {
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
          Mentions légales
        </h1>

        <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong className="text-text-primary">synaplink.be</strong> est édité par :
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-text-primary">Responsable :</strong> Ashot Avakian</li>
              <li><strong className="text-text-primary">Dénomination :</strong> Synap&apos;Link</li>
              <li><strong className="text-text-primary">Statut :</strong> Indépendant</li>
              <li><strong className="text-text-primary">Siège social :</strong> 13, Rue de la Pépinière, 5000 Namur, Belgique</li>
              <li><strong className="text-text-primary">Téléphone :</strong> +32 465/39.53.08</li>
              <li><strong className="text-text-primary">Email :</strong> info@synaplink.be</li>
              <li><strong className="text-text-primary">N° TVA :</strong> BE 1034.436.506</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              2. Hébergement
            </h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-text-primary">Nom :</strong> Vercel Inc.</li>
              <li><strong className="text-text-primary">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li><strong className="text-text-primary">Site web :</strong> vercel.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété
              exclusive de Synap&apos;Link ou de ses partenaires, sauf mention contraire. Toute reproduction, représentation,
              modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou
              le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable de Synap&apos;Link.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              4. Limitation de responsabilité
            </h2>
            <p>
              Synap&apos;Link s&apos;efforce de fournir sur le site des informations aussi précises que possible. Toutefois,
              Synap&apos;Link ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise
              à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p className="mt-3">
              Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d&apos;évoluer.
              Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve
              de modifications ayant été apportées depuis leur mise en ligne.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              5. Liens hypertextes
            </h2>
            <p>
              Le site peut contenir des liens hypertextes vers d&apos;autres sites. Synap&apos;Link n&apos;exerce aucun contrôle
              sur ces sites et décline toute responsabilité quant à leur contenu ou aux pratiques de confidentialité
              de ces tiers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-3">
              6. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit belge. En cas de litige, les tribunaux de
              l&apos;arrondissement de Namur seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
