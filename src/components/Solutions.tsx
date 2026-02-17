"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, UtensilsCrossed, Building2 } from "lucide-react";

const solutions = [
  {
    icon: Truck,
    title: "Grossistes Alimentaires",
    badge: "Solution disponible",
    description:
      "Plateforme complète pour digitaliser votre activité de grossiste.",
    features: [
      "Devis automatisés par IA (30 sec au lieu de 2h)",
      "Portail client B2B disponible 24/7",
      "Tournées de livraison optimisées",
      "Gestion multi-dépôts en temps réel",
    ],
    experience: "23 ans d'expérience dans le secteur",
    cta: "Voir la démo",
    ctaLink: "https://facemediagrossiste.web.app/offre-distram",
    highlight: true,
  },
  {
    icon: UtensilsCrossed,
    title: "Restauration Rapide",
    description:
      "Solutions pour kebabs, pizzerias, tacos, burgers.",
    features: [
      "Gestion des commandes",
      "Menus digitaux",
      "Fidélisation client",
    ],
    experience: "15 ans d'expérience terrain",
    cta: "Nous contacter",
    ctaLink: "#contact",
    highlight: false,
  },
  {
    icon: Building2,
    title: "PME & Commerces",
    description: "Digitalisation sur mesure pour votre activité.",
    features: [
      "Sites web & e-commerce",
      "Applications internes",
      "Automatisation des tâches",
    ],
    experience: undefined,
    cta: "Nous contacter",
    ctaLink: "#contact",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.58, 1] as const } },
};

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Des solutions adaptées à votre secteur
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nous développons des outils métier pour des secteurs que nous
            connaissons de l&apos;intérieur.
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
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                solution.highlight
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-slate-200"
              }`}
            >
              {/* Badge */}
              {solution.highlight && solution.badge && (
                <div className="absolute -top-3 left-6 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                  {solution.badge}
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  solution.highlight ? "bg-primary/10" : "bg-slate-100"
                }`}
              >
                <solution.icon
                  className={`w-7 h-7 ${
                    solution.highlight ? "text-primary" : "text-slate-600"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-slate-600 mb-4">{solution.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Experience */}
              {solution.experience && (
                <p className="text-sm text-slate-500 italic mb-6">
                  &ldquo;{solution.experience}&rdquo;
                </p>
              )}

              {/* CTA */}
              <a
                href={solution.ctaLink}
                target={solution.ctaLink.startsWith("http") ? "_blank" : undefined}
                rel={
                  solution.ctaLink.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                  solution.highlight
                    ? "text-primary hover:text-primary-dark"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {solution.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
