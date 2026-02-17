"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur-2xl opacity-15" />

            {/* Main image area — stylized avatar */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-800 to-slate-900 aspect-[4/5]">
              {/* Abstract professional visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                {/* Avatar circle */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/30">
                  <span className="text-6xl sm:text-7xl font-black text-white">F</span>
                </div>
                <div className="text-center">
                  <p className="text-white text-xl font-bold">Faiçal KRIOUIAR</p>
                  <p className="text-blue-300 text-sm mt-1">Fondateur de FACE MEDIA</p>
                </div>
                {/* Experience tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  <span className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-full">
                    Grossiste alimentaire
                  </span>
                  <span className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-full">
                    Restauration
                  </span>
                  <span className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-full">
                    Tech & IA
                  </span>
                </div>
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
              <div className="text-3xl font-black text-primary">23 ans</div>
              <div className="text-slate-600 text-sm">d&apos;expérience terrain</div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              À propos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-8">
              Je connais vos galères.
              <br />
              Je les ai vécues.
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
              <p>
                <strong className="text-slate-900">8 ans dans le grossiste alimentaire.</strong>{" "}
                J&apos;ai vu les commerciaux passer 2 heures sur un devis. Les
                clients appeler à minuit. Les tournées mal optimisées qui coûtent
                une fortune.
              </p>
              <p>
                <strong className="text-slate-900">15 ans dans la restauration.</strong>{" "}
                J&apos;ai géré les commandes qui se perdent, les stocks qui
                explosent, les équipes débordées.
              </p>
              <p>
                Aujourd&apos;hui, je mets cette expérience au service de la
                technologie.{" "}
                <strong className="text-slate-900">
                  Pas pour créer des gadgets. Pour résoudre vos vrais problèmes.
                </strong>
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">FK</span>
              </div>
              <div>
                <p className="font-bold text-slate-900">Faiçal KRIOUIAR</p>
                <p className="text-slate-500 text-sm">Fondateur de FACE MEDIA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
