import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Face Media",
  description:
    "Systèmes IA premium pour grossistes alimentaires B2B: devis, tournées, réachat et pilotage opérationnel.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="fr">
      <body className="antialiased">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js', new Date());gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <div className="bg-red-600 text-white text-center py-3 px-4 text-sm font-semibold sticky top-0 z-50">
          Attention : jusqu&apos;au 19 mars nous serons ouverts seulement le soir de 18H &agrave; Minuit
        </div>
        {children}
      </body>
    </html>
  );
}
