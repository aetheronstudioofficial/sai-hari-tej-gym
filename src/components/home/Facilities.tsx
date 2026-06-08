"use client";

import React from "react";
import { Cpu, Activity, Dumbbell, UserCheck, Shield, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { FACILITIES } from "@/data/gymData";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Cpu: Cpu,
  Activity: Activity,
  Dumbbell: Dumbbell,
  UserCheck: UserCheck,
  Shield: Shield,
  Sparkles: Sparkles,
};

export default function Facilities() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
            Amenities
          </h2>
          <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Premium Facilities
          </p>
          <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
        </div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FACILITIES.map((facility, idx) => {
            const IconComponent = iconMap[facility.iconName] || Dumbbell;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-secondary-bg border border-border-rgba rounded-sm p-8 hover:border-accent-gold/30 transition-all duration-300 flex items-start gap-5 group"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-primary-bg rounded-sm border border-border-rgba text-accent-gold flex items-center justify-center shrink-0 group-hover:bg-accent-gold group-hover:text-primary-bg transition-colors duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Text content */}
                <div className="space-y-2">
                  <h3 className="font-heading font-black text-sm text-white uppercase tracking-wider group-hover:text-accent-gold transition-colors duration-200">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-secondary-text/80 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
