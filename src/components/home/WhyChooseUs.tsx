"use client";

import React from "react";
import { Dumbbell, TrendingDown, Zap, Heart } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { PROGRAMS } from "@/data/gymData";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Dumbbell: Dumbbell,
  TrendingDown: TrendingDown,
  Zap: Zap,
  Heart: Heart,
};

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
            Core Programs
          </h2>
          <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Elevate Your Training
          </p>
          <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
          <p className="mt-4 text-secondary-text text-sm sm:text-base leading-relaxed">
            Our specialized programs are engineered to meet you at your current level and push you towards your ultimate physical capabilities.
          </p>
        </div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PROGRAMS.map((program) => {
            const IconComponent = iconMap[program.iconName] || Dumbbell;
            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="bg-secondary-bg border border-border-rgba rounded-sm p-8 hover:border-accent-gold/40 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Card Hover Subtle Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Icon Container */}
                <div className="w-14 h-14 bg-primary-bg rounded-sm border border-border-rgba flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-primary-bg transition-colors duration-300 mb-6">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-wide group-hover:text-accent-gold transition-colors duration-200">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-secondary-text/80">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
