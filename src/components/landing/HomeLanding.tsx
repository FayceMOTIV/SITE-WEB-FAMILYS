"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  LineChart,
  Mail,
  Shield,
  Workflow,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trackCalendlyOpen, trackCtaClick } from "@/lib/analytics";
import { CALENDLY_URL } from "@/lib/constants";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const painPoints = [
  "2h perdues pour sortir un devis complexe",
  "WhatsApp/email non tracés dans le pipeline",
  "Tournées non optimisées qui mangent la marge",
  "Réachat client subi au lieu d'être piloté",
];

const deliveries = [
  {
    title: "Système devis & commandes",
    text: "Capture multicanale, qualification IA, génération devis et synchronisation CRM/ERP.",
  },
  {
    title: "Orchestration livraisons",
    text: "Planification tournée, preuves de livraison, alertes et arbitrage en temps réel.",
  },
  {
    title: "Moteur de réachat",
    text: "Détection décrochage, relances automatiques et plan commercial ciblé.",
  },
];

const proofs = [
  {
    title: "Devis & prospection",
    text: "Photo menu ou demande WhatsApp transformée en devis exploitable en 30–90s.",
    impact: "-95% à -99% temps devis",
  },
  {
    title: "Tournées & livraison",
    text: "Optimisation des tournées par zones et contraintes réelles terrain.",
    impact: "-8% à -15% km parcourus",
  },
];

const offers = [
  {
    title: "Diagnostic + Setup",
    price: "10–30k€",
    bullets: [
      "Architecture cible + backlog priorisé",
      "Intégrations ERP/CRM/WhatsApp",
      "Déploiement initial 4–8 semaines",
      "Plan d'adoption équipes",
    ],
  },
  {
    title: "Run & optimisation",
    price: "abonnement",
    bullets: [
      "Monitoring & SLA",
      "Optimisation continue des flux IA",
      "Nouveaux modules métier",
      "Comité KPI mensuel",
    ],
  },
];

const faq = [
  {
    q: "Vous remplacez notre ERP ?",
    a: "Non. Nous connectons votre existant et orchestrons les flux métier autour.",
  },
  {
    q: "Combien de temps avant le premier gain ?",
    a: "Un premier périmètre est généralement opérationnel en 4 à 8 semaines.",
  },
  {
    q: "Travaillez-vous en multi-dépôts ?",
    a: "Oui, avec consolidation direction et règles d'accès par équipe/site.",
  },
  {
    q: "Garantie process ?",
    a: "Vous repartez avec l'architecture et le plan, même sans build avec nous.",
  },
];

function onCalendly(label: string) {
  trackCtaClick(label, "home");
  trackCalendlyOpen(label, "home", CALENDLY_URL);
}

export default function HomeLanding() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main className="bg-white">
        <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pb-24 pt-36 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.25),transparent_42%),radial-gradient(circle_at_80%_35%,rgba(99,102,241,0.2),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
            <motion.div initial="hidden" animate="visible" variants={reveal}>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Face Media conçoit des systèmes IA pour grossistes alimentaires B2B</h1>
              <h2 className="mt-5 text-lg text-slate-300 sm:text-xl">Devis en minutes, tournées optimisées, réachat piloté</h2>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => onCalendly("home_hero_diagnostic")}
                data-cta="home-hero-diagnostic"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Diagnostic 30 min
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-2 text-xs text-slate-400">Plan + architecture livrés après l'appel.</p>
            </motion.div>

            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={reducedMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <Image
                  src="/images/dashboard-grossiste.svg"
                  alt="Dashboard IA grossiste B2B"
                  width={1200}
                  height={800}
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="h-auto w-full rounded-2xl border border-white/10"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="problemes" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Pourquoi maintenant</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {painPoints.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Ce que nous livrons</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {deliveries.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="preuves" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Preuves métier</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {proofs.map((proof) => (
                <article key={proof.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{proof.title}</h3>
                  <p className="mt-2 text-slate-600">{proof.text}</p>
                  <span className="mt-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">{proof.impact}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="offres" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Offres</h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {offers.map((offer) => (
                <article key={offer.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-slate-900">{offer.title}</h3>
                    <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">{offer.price}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    {offer.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">FAQ</h2>
            <div className="mt-8 space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">{item.q}</summary>
                  <p className="mt-2 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center sm:px-10">
            <h2 className="text-3xl font-bold sm:text-4xl">Parlons de vos flux grossiste en 30 minutes</h2>
            <div className="mx-auto mt-7 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:contact@facemedia.me" onClick={() => trackCtaClick("home_contact_mail", "home")} data-cta="home-contact-mail" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/20 sm:w-auto"><Mail className="h-4 w-4" />contact@facemedia.me</a>
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={() => onCalendly("home_contact_calendly")} data-cta="home-contact-calendly" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500 sm:w-auto"><Workflow className="h-4 w-4" />Diagnostic 30 min</a>
            </div>
            <div className="mt-7 grid gap-3 text-left text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><Clock3 className="mb-2 h-4 w-4 text-blue-300" />Déploiement 4–8 semaines</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><LineChart className="mb-2 h-4 w-4 text-blue-300" />ROI cible 3–6 mois</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><Shield className="mb-2 h-4 w-4 text-blue-300" />Code, monitoring et SLA</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
