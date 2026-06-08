"use client";

import React from "react";
import { Star, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { TRAINERS } from "@/data/gymData";

export default function Trainers() {
  return (
    <section className="py-24 bg-secondary-bg border-y border-border-rgba">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
            Team
          </h2>
          <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Expert Coaches
          </p>
          <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
          <p className="mt-4 text-secondary-text text-sm sm:text-base leading-relaxed">
            Train under certified instructors committed to teaching correct form, optimizing workouts, and keeping you injury-free.
          </p>
        </div>

        {/* Trainers List (Flex or Grid centered) */}
        <div className="flex flex-col md:flex-row justify-center gap-12 items-stretch max-w-4xl mx-auto">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-primary-bg border border-border-rgba rounded-sm overflow-hidden flex flex-col flex-1 group hover:border-accent-gold/30 transition-all duration-300"
            >
              
              {/* Photo Area */}
              <div className="h-[280px] sm:h-[350px] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${trainer.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent" />
                
                {/* Experience Overlay Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-sm flex items-center gap-1.5 text-xs text-white">
                  <Star className="w-3.5 h-3.5 text-accent-gold fill-accent-gold" />
                  <span>{trainer.experience} Exp</span>
                </div>
              </div>

              {/* Details Content */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                
                {/* Name and Role */}
                <div>
                  <h3 className="font-heading font-black text-xl text-white uppercase tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-accent-gold text-xs font-semibold mt-1">
                    {trainer.role}
                  </p>
                </div>

                {/* Specializations */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold text-secondary-text/60 uppercase tracking-widest">
                    Areas of Expertise
                  </h4>
                  <ul className="flex flex-wrap gap-1.5">
                    {trainer.specialization.map((spec, sIdx) => (
                      <li key={sIdx} className="bg-secondary-bg border border-border-rgba text-[10px] text-white px-2 py-1 rounded-sm">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                <div className="space-y-2.5 pt-4 border-t border-border-rgba/60">
                  <h4 className="text-[10px] font-bold text-secondary-text/60 uppercase tracking-widest flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-accent-gold" /> Credentials
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/90">
                    {trainer.certifications.map((cert, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2">
                        <Shield className="w-3 h-3 text-accent-gold shrink-0" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
