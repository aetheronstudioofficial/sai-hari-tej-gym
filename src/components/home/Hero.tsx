"use client";

import React from "react";
import { Star, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { GYM_DETAILS } from "@/data/gymData";

export default function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById("trial-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-dvh sm:h-screen min-h-[550px] sm:min-h-[700px] flex items-center justify-center overflow-hidden bg-primary-bg">
      {/* Background Image with Dark Vignette/Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-transparent" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Rating Badge */}
        <motion.a
          href={GYM_DETAILS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-accent-gold/20 hover:border-accent-gold/50 transition-all duration-300 mb-8"
        >
          <div className="flex items-center text-accent-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-white">
            {GYM_DETAILS.rating} ★ ({GYM_DETAILS.reviewsCount}+ Google Reviews)
          </span>
        </motion.a>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none"
        >
          SAI HARI TEJ
          <span className="block text-accent-gold drop-shadow-[0_2px_10px_rgba(212,175,55,0.15)]">GYM</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 font-heading font-bold text-lg sm:text-xl md:text-2xl text-secondary-text uppercase tracking-widest"
        >
          Anekal&apos;s Trusted Fitness Destination
        </motion.p>

        {/* Brand Mantra */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-secondary-text max-w-xl italic font-light"
        >
          &quot;Train Hard. Transform Strong. Achieve More.&quot;
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs sm:text-sm font-black tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-accent-gold/10 hover:shadow-accent-gold/25 flex items-center justify-center gap-2 group"
          >
            Book Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={GYM_DETAILS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-white/20 hover:border-accent-gold/40 text-white font-heading text-xs sm:text-sm font-black tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:bg-white/5 active:scale-95 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-accent-gold" />
            Get Directions
          </a>
        </motion.div>

      </div>

      {/* Subtle Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-secondary-text/60 font-medium">Scroll to explore</span>
        <div className="w-5 h-8 border border-white/25 rounded-full p-1 flex justify-center">
          <motion.div 
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-2 bg-accent-gold rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
