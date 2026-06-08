"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/data/gymData";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-24 bg-secondary-bg border-y border-border-rgba">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
            Questions
          </h2>
          <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Frequently Asked
          </p>
          <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-primary-bg border border-border-rgba rounded-sm overflow-hidden transition-colors duration-300 hover:border-accent-gold/20"
              >
                {/* Header Clickable Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-6 cursor-pointer focus:outline-none"
                >
                  <span className="font-heading font-black text-sm sm:text-base text-white uppercase tracking-wide group-hover:text-accent-gold transition-colors duration-200">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-sm bg-secondary-bg border border-border-rgba text-accent-gold flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm leading-relaxed text-secondary-text/80 border-t border-border-rgba/50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
