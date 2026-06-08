"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCta() {
  const scrollToForm = () => {
    const element = document.getElementById("trial-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-28 overflow-hidden bg-primary-bg">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40 scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/80 to-primary-bg" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Headline */}
        <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-none">
          Start Your Fitness <br className="hidden sm:inline" />
          <span className="text-accent-gold drop-shadow-[0_2px_10px_rgba(212,175,55,0.15)]">Journey Today</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-secondary-text leading-relaxed">
          Take the first step toward a stronger, healthier version of yourself. Claim your free day pass, consult with our head coach, and evaluate our elite-level training systems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs sm:text-sm font-black tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-accent-gold/10 hover:shadow-accent-gold/25 flex items-center justify-center gap-2 group cursor-pointer"
          >
            Book Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <Link
            href="/contact"
            className="w-full sm:w-auto border border-white/20 hover:border-accent-gold/40 text-white font-heading text-xs sm:text-sm font-black tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:bg-white/5 active:scale-95 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-accent-gold" />
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}
