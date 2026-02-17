"use client";

import { motion } from "framer-motion";
import { Code, Bot, Link as LinkIcon, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Développement sur mesure",
    description:
      "Applications web et mobile adaptées à vos besoins métier. Technologies modernes, interfaces intuitives.",
  },
  {
    icon: Bot,
    title: "Intelligence Artificielle",
    description:
      "Automatisez vos process grâce à l'IA. Chatbots, analyse de données, assistants intelligents.",
  },
  {
    icon: LinkIcon,
    title: "Intégration & API",
    description:
      "Connectez vos outils existants. ERP, CRM, comptabilité. Synchronisation automatique.",
  },
  {
    icon: BarChart3,
    title: "Conseil & Stratégie",
    description:
      "Audit digital, roadmap technologique, accompagnement à la transformation numérique.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.58, 1] as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
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
            Notre expertise à votre service
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Des compétences techniques pointues, mises au service de vos enjeux
            métier.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
