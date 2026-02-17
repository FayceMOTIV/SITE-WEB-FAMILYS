"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <Quote className="w-10 h-10 text-blue-300/50 mb-6" />

            <blockquote className="text-xl sm:text-2xl leading-relaxed font-medium mb-8">
              Faiçal comprend notre métier. Il ne nous a pas vendu un logiciel, il
              a résolu nos problèmes. En 3 mois, nos commerciaux ont triplé leur
              productivité.
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-black">
                H
              </div>
              <div>
                <p className="font-bold text-lg">Hamza</p>
                <p className="text-blue-200 text-sm">Directeur, DISTRAM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
