"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
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

const flow = ["WhatsApp/Email", "Agent IA", "CRM", "Devis", "Relance"];

const pains = [
  "Devis trop lents et variables selon les équipes",
  "Aucune traçabilité fiable des demandes WhatsApp",
  "Tournées coûteuses et peu pilotées",
  "Réachat client non industrialisé",
];

const spaces = ["Commercial", "Livreur", "Manager", "Admin", "Portail client"];
const aiModules = ["Qualification", "Devis", "Tarification", "Tournées", "Relance", "Support"];

function onCalendly(label: string) {
  trackCtaClick(label, "grossistes");
  trackCalendlyOpen(label, "grossistes", CALENDLY_URL);
}

function LiveFlow() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => setActive((s) => (s + 1) % flow.length), 1300);
    return () => clearInterval(timer);
  }, [reduced]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <div className="grid gap-2 md:grid-cols-5">
        {flow.map((step, i) => (
          <motion.div
            key={step}
            className={`rounded-lg border px-3 py-3 text-center text-xs font-semibold ${
              i === active
                ? "border-cyan-300 bg-cyan-300/15 text-cyan-100"
                : i < active
                  ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-200"
                  : "border-white/10 bg-white/5 text-slate-400"
            }`}
            animate={i === active && !reduced ? { scale: [1, 1.02, 1] } : { scale: 1 }}
            transition={{ duration: 0.45 }}
          >
            {step}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function GrossistesLanding() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pb-24 pt-36 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.25),transparent_42%),radial-gradient(circle_at_80%_35%,rgba(99,102,241,0.2),transparent_45%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" animate="visible" variants={reveal} className="max-w-4xl">
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">L'OS IA du grossiste alimentaire</h1>
              <h2 className="mt-5 text-lg text-slate-300 sm:text-xl">Une plateforme unifiée pour commerciaux, livreurs, managers, admin et clients</h2>
              <p className="mt-5 text-2xl font-semibold text-white">Jusqu'à +2 à +6 points de marge en 90 jours</p>
              <p className="mt-3 max-w-3xl text-slate-300">Devis, commandes, tournées, relances, réachat: un système IA connecté à vos flux réels, pas un POC.</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={() => onCalendly("grossistes_hero_diagnostic")} data-cta="grossistes-hero-diagnostic" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">Réserver un diagnostic (30 min)<ArrowRight className="h-4 w-4" /></a>
                <span className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-300">Plan + architecture livrés après l'appel</span>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {["Déploiement 4–8 semaines", "ROI cible 3–6 mois", "Vous possédez le code", "Monitoring & SLA"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-center text-[11px] font-semibold text-slate-200">{item}</div>
                ))}
              </div>
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <Image src="/images/dashboard-grossiste.svg" alt="Dashboard opérations grossiste" width={1200} height={800} priority sizes="(max-width: 1024px) 100vw, 58vw" className="h-auto w-full rounded-2xl border border-white/10" />
              </div>
              <LiveFlow />
            </div>
          </div>
        </section>

        <section id="problemes" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Douleurs</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {pains.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Une seule plateforme, une IA centrale</h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">5 espaces métiers</h3>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {spaces.map((s) => (
                    <div key={s} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700">{s}</div>
                  ))}
                </div>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">6 modules IA</h3>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {aiModules.map((m) => (
                    <div key={m} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700">IA {m}</div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Architecture blueprint</h2>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
              <Image src="/images/blueprint-flow.svg" alt="Flux données vers agents, orchestrateur, CRM ERP et dashboard" width={1400} height={380} sizes="100vw" loading="lazy" className="h-auto w-full rounded-xl" />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Avant / Après + gains estimatifs</h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Avant</p>
                <ul className="mt-3 space-y-2 text-slate-700"><li>• Devis en 2h</li><li>• Appels simples saturent l'équipe</li><li>• Tournées sous-optimales</li></ul>
              </div>
              <div className="rounded-2xl border border-cyan-300 bg-cyan-50 px-5 py-4 text-center"><p className="text-2xl font-black text-cyan-700">+2 à +6 pts marge</p></div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Après</p>
                <ul className="mt-3 space-y-2 text-slate-700"><li>• Devis en 30–90s</li><li>• -70% appels simples</li><li>• -8% à -15% km</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section id="preuves" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Case study S1–S4</h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Contexte</p>
                <p className="mt-2 text-slate-700">Grossiste alimentaire 3 dépôts, 18 commerciaux, flux WhatsApp/email/téléphone.</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Système livré</p>
                <p className="mt-2 text-slate-700">IA devis, pipeline CRM, orchestration tournées, réachat automatisé et dashboard direction.</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">KPI</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-700">-58% temps devis</span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">+22% conversion</span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-700">+2.9 pts marge</span>
                </div>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Timeline</p>
                <ol className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><span className="font-semibold text-slate-900">S1:</span> Audit flux + architecture</li>
                  <li><span className="font-semibold text-slate-900">S2:</span> Connecteurs ERP/CRM</li>
                  <li><span className="font-semibold text-slate-900">S3:</span> IA devis + tournées</li>
                  <li><span className="font-semibold text-slate-900">S4:</span> Run, monitoring, optimisation</li>
                </ol>
              </article>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Sécurité & conformité</p>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {["RBAC et droits granulaires", "Journalisation des actions", "Sauvegardes et PRA", "Rétention et principes RGPD"].map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">FAQ</h2>
            <div className="mt-8 space-y-3">
              {[
                { q: "Compatible ERP / Excel ?", a: "Oui, via connecteurs et flux progressifs." },
                { q: "Multi-dépôts ?", a: "Oui, avec consolidation direction et droits par site." },
                { q: "Délai ?", a: "4 à 8 semaines selon les intégrations prioritaires." },
                { q: "Garantie ?", a: "Vous repartez avec architecture + plan d'exécution." },
              ].map((item) => (
                <details key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">{item.q}</summary>
                  <p className="mt-2 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center sm:px-10">
            <h2 className="text-3xl font-bold sm:text-4xl">Réserver un diagnostic (30 min)</h2>
            <div className="mx-auto mt-7 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:contact@facemedia.me" onClick={() => trackCtaClick("grossistes_contact_mail", "grossistes")} data-cta="grossistes-contact-mail" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/20 sm:w-auto"><Mail className="h-4 w-4" />contact@facemedia.me</a>
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={() => onCalendly("grossistes_contact_calendly")} data-cta="grossistes-contact-calendly" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500 sm:w-auto"><Workflow className="h-4 w-4" />Diagnostic 30 min</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
