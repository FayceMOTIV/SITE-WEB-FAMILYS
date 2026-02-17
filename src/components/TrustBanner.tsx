"use client";

import { motion } from "framer-motion";

export default function TrustBanner() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-slate-400 text-sm mb-10 uppercase tracking-wider font-medium">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
            {/* DISTRAM logo text */}
            <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">D</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">DISTRAM</span>
            </div>
            {/* Placeholder clients */}
            <div className="flex items-center gap-2 opacity-40">
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-lg font-semibold text-white">+3 projets en cours</span>
            </div>
            <div className="flex items-center gap-2 opacity-40">
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="text-lg font-semibold text-white">Secteurs multiples</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
