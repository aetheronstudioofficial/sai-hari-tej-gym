"use client";

import React from "react";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { MEMBERSHIP_PLANS } from "@/data/gymData";

export default function MembershipPlans() {
  const scrollToForm = () => {
    const element = document.getElementById("trial-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
            Pricing
          </h2>
          <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Membership Packages
          </p>
          <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
          <p className="mt-4 text-secondary-text text-sm sm:text-base leading-relaxed">
            Choose the membership tier that aligns with your timeline and transformation goals. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-secondary-bg rounded-sm flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular 
                  ? "border-2 border-accent-gold shadow-xl shadow-accent-gold/5 scale-105 z-10 md:translate-y-[-8px]"
                  : "border border-border-rgba hover:border-accent-gold/20"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-accent-gold text-primary-bg font-heading text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-sm flex items-center gap-1 shadow-md">
                  <Star className="w-3 h-3 fill-current" /> Best Value
                </div>
              )}

              {/* Top Details */}
              <div className="p-8 pb-4">
                <span className="text-[10px] font-bold tracking-widest text-accent-gold uppercase">
                  {plan.duration}
                </span>
                <h3 className="font-heading font-black text-xl text-white uppercase tracking-wide mt-2">
                  {plan.name}
                </h3>
                <p className="text-secondary-text/80 text-xs mt-1.5 italic min-h-[32px]">
                  {plan.tagline}
                </p>

                {/* Placeholder Price */}
                <div className="mt-6 border-t border-border-rgba/60 pt-6">
                  <span className="text-3xl font-heading font-black text-white tracking-tight">
                    {plan.pricePlaceholder}
                  </span>
                  <span className="text-secondary-text/60 text-xs block mt-1">
                    *Contact gym to verify pricing
                  </span>
                </div>
              </div>

              {/* Feature List */}
              <div className="px-8 py-4 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-secondary-text/90 leading-normal">
                      <Check className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call To Action */}
              <div className="p-8 pt-4">
                <button
                  onClick={scrollToForm}
                  className={`w-full font-heading text-xs font-black tracking-widest uppercase py-3.5 rounded-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-accent-gold hover:bg-accent-gold-hover text-primary-bg shadow-md"
                      : "border border-white/20 hover:border-accent-gold/40 text-white hover:bg-white/5"
                  }`}
                >
                  Select Package
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
