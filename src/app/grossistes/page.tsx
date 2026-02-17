import type { Metadata } from "next";
import GrossistesLanding from "@/components/landing/GrossistesLanding";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "L'OS IA du grossiste alimentaire | Face Media",
  description:
    "Une plateforme unifiée pour commerciaux, livreurs, managers, admin et clients: devis, tournées, réachat et pilotage IA.",
  openGraph: {
    title: "L'OS IA du grossiste alimentaire | Face Media",
    description:
      "1 plateforme, 5 espaces métiers, IA centrale: gains de marge et performance opérationnelle.",
    url: `${SITE_URL}/grossistes`,
    siteName: "Face Media",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/og-grossistes.svg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "L'OS IA du grossiste alimentaire",
  url: `${SITE_URL}/grossistes`,
  description:
    "Une plateforme unifiée pour commerciaux, livreurs, managers, admin et clients: devis, tournées, réachat et pilotage IA.",
};

export default function GrossistesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GrossistesLanding />
    </>
  );
}
