import type { Metadata } from "next";
import HomeLanding from "@/components/landing/HomeLanding";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Systèmes IA grossistes B2B | Face Media",
  description:
    "Face Media conçoit des systèmes IA pour grossistes alimentaires B2B: devis en minutes, tournées optimisées, réachat piloté.",
  openGraph: {
    title: "Systèmes IA grossistes B2B | Face Media",
    description:
      "Devis, commandes, tournées et réachat dans un seul système IA opérationnel.",
    url: SITE_URL,
    siteName: "Face Media",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/og-grossistes.svg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Systèmes IA grossistes B2B",
  url: SITE_URL,
  description:
    "Face Media conçoit des systèmes IA pour grossistes alimentaires B2B: devis en minutes, tournées optimisées, réachat piloté.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeLanding />
    </>
  );
}
