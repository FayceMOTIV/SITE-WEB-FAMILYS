"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

/* ── Inline SVG mockups ────────────────────────────────────────── */

function DashboardMockup() {
  return (
    <div className="bg-slate-800 rounded-xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-slate-400 font-mono">supervision.facemedia.me</span>
      </div>
      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-white">Tableau de bord — DISTRAM</div>
            <div className="text-xs text-slate-400 mt-0.5">Supervision temps réel</div>
          </div>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-medium">En ligne</span>
            <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-[10px] font-medium">12 livreurs actifs</span>
          </div>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Commandes", value: "127", color: "text-blue-400" },
            { label: "CA du jour", value: "8 430€", color: "text-green-400" },
            { label: "Clients actifs", value: "342", color: "text-purple-400" },
            { label: "Livraisons", value: "98%", color: "text-amber-400" },
          ].map((s, i) => (
            <div key={i} className="bg-slate-700/50 rounded-lg p-3 text-center">
              <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
              <div className="text-[10px] text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
        {/* Chart placeholder */}
        <div className="bg-slate-700/30 rounded-lg p-4">
          <div className="text-xs text-slate-400 mb-3">Évolution des ventes — 7 derniers jours</div>
          <div className="flex items-end gap-1.5 h-20">
            {[40, 55, 35, 70, 60, 85, 75].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-400" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d, i) => (
              <span key={i} className="text-[8px] text-slate-500 flex-1 text-center">{d}</span>
            ))}
          </div>
        </div>
        {/* Table rows */}
        <div className="space-y-1.5">
          <div className="text-xs text-slate-400 mb-1">Dernières commandes</div>
          {[
            { client: "Restaurant Le Marrakech", total: "347€", status: "Livrée", statusColor: "bg-green-500/20 text-green-400" },
            { client: "Snack Istanbul", total: "523€", status: "En cours", statusColor: "bg-amber-500/20 text-amber-400" },
            { client: "Pizza Roma", total: "189€", status: "En préparation", statusColor: "bg-blue-500/20 text-blue-400" },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between bg-slate-700/30 rounded px-3 py-2">
              <span className="text-xs text-slate-300">{row.client}</span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-white">{row.total}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded ${row.statusColor}`}>{row.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="w-44 bg-slate-900 rounded-[2rem] border-4 border-slate-700 shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="flex justify-center pt-2 pb-1">
        <div className="w-16 h-1.5 rounded-full bg-slate-700" />
      </div>
      {/* Screen */}
      <div className="bg-slate-800 mx-1 mb-1 rounded-b-[1.4rem] overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 px-3 py-3">
          <div className="text-[10px] font-bold text-white">Tournée du jour</div>
          <div className="text-[8px] text-blue-200 mt-0.5">Mardi 11 fév — 8 livraisons</div>
        </div>
        {/* Delivery list */}
        <div className="p-2 space-y-1.5">
          {[
            { name: "Le Marrakech", time: "09:30", done: true },
            { name: "Snack Istanbul", time: "10:15", done: true },
            { name: "Pizza Roma", time: "11:00", done: false },
            { name: "Tacos Sombrero", time: "11:45", done: false },
            { name: "Burger Factory", time: "12:30", done: false },
          ].map((d, i) => (
            <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg ${d.done ? "bg-green-500/10" : "bg-slate-700/50"}`}>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] shrink-0 ${d.done ? "bg-green-500 text-white" : "border border-slate-500"}`}>
                {d.done && "✓"}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[9px] font-medium truncate ${d.done ? "text-slate-400 line-through" : "text-white"}`}>{d.name}</div>
              </div>
              <span className="text-[8px] text-slate-400 shrink-0">{d.time}</span>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div className="flex justify-around border-t border-slate-700 px-2 py-2 mt-1">
          {["Tournée", "Carte", "Stock", "Profil"].map((tab, i) => (
            <div key={i} className={`text-[7px] text-center ${i === 0 ? "text-blue-400 font-bold" : "text-slate-500"}`}>
              <div className={`w-5 h-5 mx-auto mb-0.5 rounded ${i === 0 ? "bg-blue-500/20" : "bg-slate-700/50"}`} />
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Hero component ────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-medium text-blue-300 mb-8">
              Solutions digitales sur mesure
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6"
          >
            Nous créons les outils digitaux qui font{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
              grandir votre entreprise
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed"
          >
            Applications métier, automatisation IA, plateformes B2B.
            De l&apos;idée au déploiement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              Découvrir nos solutions
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Nous contacter
            </a>
          </motion.div>
        </div>

        {/* Right — Mockups */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Desktop mockup */}
          <div className="transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <DashboardMockup />
          </div>
          {/* Mobile mockup */}
          <div className="absolute -bottom-8 -left-8 z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-700">
            <MobileMockup />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-3xl rounded-full scale-110" />
        </motion.div>
      </div>
    </section>
  );
}
