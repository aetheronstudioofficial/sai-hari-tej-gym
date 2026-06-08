"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GOOGLE_REVIEWS, GYM_DETAILS } from "@/data/gymData";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === GOOGLE_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
            Testimonials
          </h2>
          <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Client Success Stories
          </p>
          <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Google Review Score Card */}
          <div className="bg-secondary-bg border border-border-rgba p-8 rounded-sm text-center flex flex-col items-center justify-center h-full">
            {/* Google Logo Placeholder */}
            <div className="flex items-center gap-1.5 mb-4 font-heading font-black text-lg tracking-wider">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
              <span className="text-white text-xs uppercase tracking-widest ml-2 font-bold opacity-60">Reviews</span>
            </div>

            {/* Score */}
            <h3 className="text-5xl sm:text-6xl font-heading font-black text-white leading-none">
              {GYM_DETAILS.rating}
            </h3>

            {/* Stars */}
            <div className="flex items-center text-accent-gold my-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Count */}
            <p className="text-sm text-secondary-text">
              Based on {GYM_DETAILS.reviewsCount}+ verified reviews
            </p>

            {/* Google Maps link */}
            <a
              href={GYM_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-white/20 hover:border-accent-gold/40 text-white hover:text-accent-gold font-heading text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-sm transition-all duration-300 w-full justify-center"
            >
              <MessageSquare className="w-4 h-4 text-accent-gold" />
              Write A Review
            </a>
          </div>

          {/* Carousel Showcase */}
          <div className="lg:col-span-2 relative flex flex-col justify-between h-full bg-secondary-bg border border-border-rgba p-8 sm:p-10 rounded-sm">
            
            {/* Quote Icon Background */}
            <span className="absolute top-4 right-10 text-[120px] font-black text-white/5 select-none leading-none">
              “
            </span>

            {/* Carousel Item Container */}
            <div className="min-h-[180px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p className="text-sm sm:text-base md:text-lg italic leading-relaxed text-white">
                    &quot;{GOOGLE_REVIEWS[currentIndex].text}&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    {/* Initials Avatar */}
                    <div className="w-12 h-12 bg-primary-bg border border-accent-gold/20 flex items-center justify-center text-accent-gold font-heading font-bold text-sm rounded-full">
                      {GOOGLE_REVIEWS[currentIndex].initials}
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-sm text-white tracking-wide uppercase">
                        {GOOGLE_REVIEWS[currentIndex].author}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center text-accent-gold">
                          {[...Array(GOOGLE_REVIEWS[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] text-secondary-text/60">
                          {GOOGLE_REVIEWS[currentIndex].relativeTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-end gap-3 mt-8 border-t border-border-rgba/45 pt-6">
              <button
                onClick={prevReview}
                className="p-2.5 border border-border-rgba rounded-sm text-secondary-text hover:text-white hover:border-accent-gold/40 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="p-2.5 border border-border-rgba rounded-sm text-secondary-text hover:text-white hover:border-accent-gold/40 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
