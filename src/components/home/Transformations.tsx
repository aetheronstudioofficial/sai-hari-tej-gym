"use client";

import React from "react";
import { Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { TRANSFORMATIONS } from "@/data/gymData";

export default function Transformations() {
  return (
    <section className="py-24 bg-secondary-bg border-y border-border-rgba">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
            Results
          </h2>
          <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Real Transformations
          </p>
          <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
          <p className="mt-4 text-secondary-text text-sm sm:text-base leading-relaxed">
            Witness the physical transformations of our members who committed to the process, trusted the programming, and worked consistently.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TRANSFORMATIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-primary-bg border border-border-rgba rounded-sm overflow-hidden flex flex-col group hover:border-accent-gold/30 transition-all duration-300"
            >
              {/* Images Container (Side by Side Before/After) */}
              <div className="grid grid-cols-2 h-[280px] sm:h-[360px] relative overflow-hidden">
                
                {/* BEFORE Image */}
                <div className="relative border-r border-black/40">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.beforeImg})` }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <span className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase px-3 py-1 border border-white/10 rounded-sm">
                    Before
                  </span>
                </div>

                {/* AFTER Image */}
                <div className="relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.afterImg})` }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-4 right-4 bg-accent-gold text-primary-bg text-[10px] sm:text-xs font-black tracking-widest uppercase px-3 py-1 rounded-sm shadow-md">
                    After
                  </span>
                </div>

                {/* Vertical Separator Line */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-accent-gold/60 z-10" />
              </div>

              {/* Text / Stats Details */}
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold tracking-widest text-accent-gold uppercase bg-accent-gold/10 px-2.5 py-1 rounded-sm">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-secondary-text">
                      <Clock className="w-3.5 h-3.5 text-accent-gold" />
                      <span>{item.duration} Journey</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-xl text-white uppercase tracking-wide mt-3">
                    {item.title}
                  </h3>

                  <p className="text-secondary-text/80 text-xs sm:text-sm mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Stat Display Box */}
                <div className="mt-6 p-4 bg-secondary-bg border border-border-rgba rounded-sm flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-accent-gold" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-secondary-text/60">Verified Results</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{item.stats}</p>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
