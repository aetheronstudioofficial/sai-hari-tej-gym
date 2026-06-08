"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Award, Compass, Shield, Target, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[60px] md:pt-[76px]">
        
        {/* Page Header */}
        <section className="relative py-24 flex items-center justify-center bg-primary-bg overflow-hidden border-b border-border-rgba">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto px-4">
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              About Our <span className="text-accent-gold">Gym</span>
            </h1>
            <p className="text-secondary-text text-sm sm:text-base tracking-widest uppercase">
              The Standard of Fitness in Anekal
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-primary-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Image collage or large image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[320px] sm:h-[450px] border border-border-rgba overflow-hidden rounded-sm group shadow-xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-secondary-bg/90 backdrop-blur-md border border-border-rgba rounded-sm flex items-center gap-4">
                  <div className="text-3xl font-heading font-black text-accent-gold">4.9★</div>
                  <div className="text-xs text-white uppercase tracking-wider font-semibold">
                    Anekal&apos;s Top Rated Strength Facility
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Text content */}
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-widest text-accent-gold uppercase">
                  Our Origins
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                  The Sai Hari Tej Story
                </h2>
                <div className="w-12 h-1 bg-accent-gold" />
                
                <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
                  Established in Anekal, Karnataka, Sai Hari Tej Gym was built to address a key gap: the need for an elite, high-performance fitness facility that respects scientific training principles and values member transformation over generic commercial targets.
                </p>
                <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
                  Located strategically in the SBI Complex on the Anekal-Hosur main road, the gym has grown to become the community&apos;s trusted fitness harbor. From high-grade bio-mechanical plate machines to standard compound lifting platforms, we provide Anekal residents with the resources needed to train correctly, safely, and efficiently.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-lg text-white">100+ Members</h4>
                    <p className="text-xs text-secondary-text">Consistently active community</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-lg text-white">4.9 Star Rating</h4>
                    <p className="text-xs text-secondary-text">Verified local customer reviews</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-secondary-bg border-y border-border-rgba">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary-bg border border-border-rgba p-8 sm:p-10 rounded-sm space-y-6 relative overflow-hidden group hover:border-accent-gold/20 transition-colors"
              >
                <div className="w-12 h-12 bg-secondary-bg rounded-sm border border-border-rgba flex items-center justify-center text-accent-gold">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-white uppercase tracking-wide">
                    Our Mission
                  </h3>
                  <p className="text-secondary-text text-sm mt-3 leading-relaxed">
                    To elevate the physical standard and quality of life of Anekal residents by providing structural coaching, structured nutrition education, and an uncompromising, clean strength training environment. We aim to debunk fitness fads and focus entirely on sustainable, verified health transformations.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-primary-bg border border-border-rgba p-8 sm:p-10 rounded-sm space-y-6 relative overflow-hidden group hover:border-accent-gold/20 transition-colors"
              >
                <div className="w-12 h-12 bg-secondary-bg rounded-sm border border-border-rgba flex items-center justify-center text-accent-gold">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-white uppercase tracking-wide">
                    Our Vision
                  </h3>
                  <p className="text-secondary-text text-sm mt-3 leading-relaxed">
                    To remain the absolute gold standard of physical conditioning and training in southern Karnataka. We envision a community where every individual has the posture, endurance, physical confidence, and strength necessary to handle life&apos;s daily demands with optimal health and vitality.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Training Philosophy Section */}
        <section className="py-24 bg-primary-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
                Methodology
              </h2>
              <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                Our Training Philosophy
              </p>
              <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Point 1: Progressive Overload */}
              <div className="bg-secondary-bg border border-border-rgba p-8 rounded-sm space-y-4">
                <div className="w-10 h-10 bg-primary-bg rounded-sm border border-border-rgba text-accent-gold flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-white uppercase tracking-widest">
                  Progressive Overload
                </h3>
                <p className="text-xs text-secondary-text/80 leading-relaxed">
                  Real growth happens when your muscles are gradually and systematically challenged. We guide you on trackable weight additions, sets, reps, and tempos to ensure steady physiological progression.
                </p>
              </div>

              {/* Point 2: Safety & Form */}
              <div className="bg-secondary-bg border border-border-rgba p-8 rounded-sm space-y-4">
                <div className="w-10 h-10 bg-primary-bg rounded-sm border border-border-rgba text-accent-gold flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-white uppercase tracking-widest">
                  Structural Integrity
                </h3>
                <p className="text-xs text-secondary-text/80 leading-relaxed">
                  Lifting heavy is useless if it leads to joint damage or structural injuries. Our coaches emphasize neutral spine alignment, scapular positioning, and joint trajectories before adding resistance.
                </p>
              </div>

              {/* Point 3: Scientific Nutrition */}
              <div className="bg-secondary-bg border border-border-rgba p-8 rounded-sm space-y-4">
                <div className="w-10 h-10 bg-primary-bg rounded-sm border border-border-rgba text-accent-gold flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-white uppercase tracking-widest">
                  Nutritional Honesty
                </h3>
                <p className="text-xs text-secondary-text/80 leading-relaxed">
                  We stand against crash diets and unverified supplementations. We work on basic energy balance, protein synthesis, and macro distributions tailored to fuel performance and burn fat cleanly.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
