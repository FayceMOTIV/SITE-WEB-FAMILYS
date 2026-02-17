import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Grossistes", href: "/grossistes" },
  { label: "Problèmes", href: "#problemes" },
  { label: "Solution", href: "#solution" },
  { label: "Méthode", href: "#methode" },
  { label: "Offres", href: "#offres" },
  { label: "Preuves", href: "#preuves" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-background-dark text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <span className="text-2xl font-black tracking-tight">
              FACE<span className="text-accent"> MEDIA</span>
            </span>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Constructeur de systèmes métiers IA pour PME, distribution et SaaS B2B.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>
                <a
                  href="tel:+33602100774"
                  className="hover:text-white transition-colors"
                >
                  06 02 10 07 74
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@facemedia.me"
                  className="hover:text-white transition-colors"
                >
                  contact@facemedia.me
                </a>
              </p>
              <p>facemedia.me</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} FACE MEDIA — Tous droits réservés</p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
