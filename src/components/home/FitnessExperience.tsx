"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_CATEGORIES } from "@/data/gymData";

export default function FitnessExperience() {
  return (
    <section className="py-24 bg-secondary-bg border-y border-border-rgba overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
              The Facility
            </h2>
            <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              Elite Training Environment
            </p>
            <div className="mt-4 w-12 h-1 bg-accent-gold" />
          </div>
          <p className="max-w-md text-secondary-text text-sm sm:text-base">
            Take a visual tour through our meticulously planned zones, custom-built to support heavy lifting, high-intensity conditioning, and structured recovery.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCE_CATEGORIES.map((category, idx) => {
            // Asymmetric height layout
            const isTall = idx === 0 || idx === 3;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                className={`relative group overflow-hidden border border-border-rgba bg-primary-bg cursor-pointer rounded-sm ${
                  isTall ? "h-[350px] sm:h-[450px]" : "h-[300px] sm:h-[380px] md:mt-12"
                }`}
              >
                {/* Background Image Container */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />

                {/* Dark Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent transition-opacity duration-300 group-hover:via-black/55" />

                {/* Text Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-[10px] tracking-widest text-accent-gold uppercase font-bold mb-2 block">
                    0{idx + 1} / ZONE
                  </span>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-accent-gold transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-secondary-text/80 text-xs sm:text-sm mt-2 max-w-sm line-clamp-2 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {category.description}
                  </p>
                </div>

                {/* Top Corner Accent Border */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-t-accent-gold border-l-[15px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
