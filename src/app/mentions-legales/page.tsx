import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — FACE MEDIA",
  description: "Mentions légales du site facemedia.me",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-white"
          >
            FACE<span className="text-accent"> MEDIA</span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-white">
            Mentions légales
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              1. Éditeur du site
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Le site <strong>facemedia.me</strong> est édité par :
            </p>
            <ul className="mt-4 space-y-1 text-slate-600">
              <li>
                <strong>Nom :</strong> FACE MEDIA
              </li>
              <li>
                <strong>Statut :</strong> Auto-entrepreneur
              </li>
              <li>
                <strong>Responsable :</strong> Faiçal KRIOUIAR
              </li>
              <li>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact@facemedia.me"
                  className="text-primary hover:underline"
                >
                  contact@facemedia.me
                </a>
              </li>
              <li>
                <strong>Téléphone :</strong> 06 02 10 07 74
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              2. Hébergement
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site est hébergé par Google Firebase Hosting, fourni par Google
              LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
              États-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="text-slate-600 leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, logos,
              graphismes) est la propriété exclusive de FACE MEDIA, sauf mention
              contraire. Toute reproduction, même partielle, est interdite sans
              autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              4. Données personnelles
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les informations recueillies via le formulaire de contact sont
              destinées uniquement à FACE MEDIA pour répondre à votre demande.
              Elles ne sont ni vendues, ni partagées avec des tiers.
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
              de rectification et de suppression de vos données. Pour exercer ce
              droit, contactez-nous à{" "}
              <a
                href="mailto:contact@facemedia.me"
                className="text-primary hover:underline"
              >
                contact@facemedia.me
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              5. Cookies
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site n&apos;utilise pas de cookies de suivi ou de cookies
              publicitaires. Seuls des cookies techniques strictement nécessaires
              au fonctionnement du site peuvent être utilisés.
            </p>
          </section>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            &larr; Retour à l&apos;accueil
          </Link>
        </div>
      </main>
    </div>
  );
}
