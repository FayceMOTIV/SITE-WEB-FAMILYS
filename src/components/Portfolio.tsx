"use client";

import { motion } from "framer-motion";
import { BarChart3, MessageSquare, ShoppingCart, TrendingUp, Clock, Zap, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── Inline visual mockups for each project ──────────────────── */

function GrossisteMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
          <ShoppingCart className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-white text-xs font-bold">Portail B2B Grossiste</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Produits", val: "1 247" },
          { label: "Clients", val: "342" },
          { label: "Devis/jour", val: "89" },
        ].map((s, i) => (
          <div key={i} className="bg-white/10 rounded-lg p-2 text-center">
            <div className="text-white text-sm font-bold">{s.val}</div>
            <div className="text-blue-300 text-[8px]">{s.label}</div>
          </div>
        ))}
      </div>
      {/* Product list */}
      <div className="flex-1 space-y-1.5">
        {[
          { name: "Poulet Halal 10kg", price: "45,90€", stock: true },
          { name: "Huile Olive 5L", price: "22,50€", stock: true },
          { name: "Frites Surgelées 2.5kg", price: "8,90€", stock: false },
        ].map((p, i) => (
          <div key={i} className="flex items-center justify-between bg-white/5 rounded px-2 py-1.5">
            <span className="text-white text-[10px]">{p.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-blue-300 text-[10px] font-medium">{p.price}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${p.stock ? "bg-green-400" : "bg-red-400"}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 bg-blue-600 rounded-lg py-1.5 text-center">
        <span className="text-white text-[10px] font-bold">Générer devis IA — 30 sec</span>
      </div>
    </div>
  );
}

function RestoMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-900 to-slate-900 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-[10px]">
          🍕
        </div>
        <span className="text-white text-xs font-bold">Gestion Restaurant</span>
      </div>
      {/* Orders */}
      <div className="flex-1 space-y-2">
        <div className="text-[10px] text-orange-300 font-medium">Commandes en cours</div>
        {[
          { id: "#142", items: "2x Kebab, 1x Frites", time: "12:34", status: "En préparation", color: "bg-amber-500/20 text-amber-400" },
          { id: "#143", items: "1x Pizza Royale", time: "12:38", status: "Prêt", color: "bg-green-500/20 text-green-400" },
          { id: "#144", items: "3x Tacos, 2x Boissons", time: "12:41", status: "Nouveau", color: "bg-blue-500/20 text-blue-400" },
        ].map((o, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white text-[10px] font-bold">{o.id}</span>
              <span className={`text-[8px] px-1.5 py-0.5 rounded ${o.color}`}>{o.status}</span>
            </div>
            <div className="text-slate-400 text-[9px]">{o.items}</div>
            <div className="text-slate-500 text-[8px] mt-0.5">{o.time}</div>
          </div>
        ))}
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="bg-white/10 rounded p-2 text-center">
          <div className="text-white text-sm font-bold">47</div>
          <div className="text-orange-300 text-[8px]">Commandes</div>
        </div>
        <div className="bg-white/10 rounded p-2 text-center">
          <div className="text-white text-sm font-bold">1 280€</div>
          <div className="text-orange-300 text-[8px]">CA du jour</div>
        </div>
      </div>
    </div>
  );
}

function ChatbotMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900 to-slate-900 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded bg-purple-500 flex items-center justify-center">
          <MessageSquare className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-white text-xs font-bold">Assistant IA — WhatsApp</span>
        <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        {/* Messages */}
        <div className="flex justify-start">
          <div className="bg-white/10 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%]">
            <p className="text-white text-[10px]">Bonjour, je voudrais passer commande pour demain matin.</p>
            <span className="text-slate-500 text-[8px]">09:14</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-purple-600 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
            <p className="text-white text-[10px]">Bonjour ! Bien sûr. Voici votre catalogue personnalisé. Que souhaitez-vous commander ?</p>
            <span className="text-purple-300 text-[8px]">09:14 · IA</span>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white/10 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%]">
            <p className="text-white text-[10px]">50kg poulet, 20L huile olive, 10 cartons frites</p>
            <span className="text-slate-500 text-[8px]">09:15</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-purple-600 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
            <p className="text-white text-[10px]">Votre devis est prêt : 487,50€ HT. Livraison demain entre 7h-9h. Confirmez-vous ?</p>
            <span className="text-purple-300 text-[8px]">09:15 · IA</span>
          </div>
        </div>
      </div>
      {/* Stats bottom */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        <div className="bg-white/10 rounded p-1.5 text-center">
          <div className="text-white text-[10px] font-bold">-70%</div>
          <div className="text-purple-300 text-[7px]">Appels</div>
        </div>
        <div className="bg-white/10 rounded p-1.5 text-center">
          <div className="text-white text-[10px] font-bold">24/7</div>
          <div className="text-purple-300 text-[7px]">Dispo</div>
        </div>
        <div className="bg-white/10 rounded p-1.5 text-center">
          <div className="text-white text-[10px] font-bold">3 lang</div>
          <div className="text-purple-300 text-[7px]">FR/AR/TR</div>
        </div>
      </div>
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────────────── */

interface Projet {
  title: string;
  description: string;
  mockup: React.FC;
  stats: { icon: LucideIcon; text: string }[];
  tags: string[];
}

const projets: Projet[] = [
  {
    title: "Plateforme Grossiste B2B",
    description:
      "Digitalisation complète d'un grossiste alimentaire : devis IA, portail client, tournées optimisées.",
    mockup: GrossisteMockup,
    stats: [
      { icon: TrendingUp, text: "300+ clients gérés" },
      { icon: Clock, text: "-90% temps devis" },
      { icon: Zap, text: "+15% panier moyen" },
    ],
    tags: ["Next.js", "IA", "Firebase"],
  },
  {
    title: "App Gestion Restauration",
    description:
      "Application de gestion pour chaîne de restaurants : commandes, stocks, planning équipes.",
    mockup: RestoMockup,
    stats: [
      { icon: Globe, text: "15 restaurants" },
      { icon: Zap, text: "Temps réel" },
      { icon: BarChart3, text: "Multi-sites" },
    ],
    tags: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "Automatisation IA — Chatbot",
    description:
      "Chatbot intelligent pour service client : répond 24/7, qualifie les leads, transfère aux humains.",
    mockup: ChatbotMockup,
    stats: [
      { icon: TrendingUp, text: "-70% appels" },
      { icon: Clock, text: "24/7" },
      { icon: Globe, text: "3 langues" },
    ],
    tags: ["OpenAI", "WhatsApp", "Twilio"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.58, 1] as const },
  },
};

/* ── Component ────────────────────────────────────────────────── */

export default function Portfolio() {
  return (
    <section id="realisations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Nos réalisations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Des projets concrets, des résultats mesurables.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projets.map((projet, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Mockup visual */}
              <div className="relative h-56 overflow-hidden">
                <projet.mockup />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                {/* Tags */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {projet.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {projet.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{projet.description}</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2">
                  {projet.stats.map((stat, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      <stat.icon className="w-3 h-3" />
                      {stat.text}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
