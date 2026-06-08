"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Check, Star, Shield, Users, Dumbbell, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { MEMBERSHIP_PLANS } from "@/data/gymData";
import Faq from "@/components/home/Faq";

export default function Memberships() {
  const scrollToForm = () => {
    const element = document.getElementById("memberships-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              Membership <span className="text-accent-gold">Plans</span>
            </h1>
            <p className="text-secondary-text text-sm sm:text-base tracking-widest uppercase">
              Invest in Your Physical Longevity
            </p>
          </div>
        </section>

        {/* Membership Plans Grid */}
        <section className="py-24 bg-primary-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
                Options
              </h2>
              <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                Choose Your Commitment
              </p>
              <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              {MEMBERSHIP_PLANS.map((plan, idx) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`bg-secondary-bg rounded-sm flex flex-col justify-between transition-all duration-300 relative ${
                    plan.popular 
                      ? "border-2 border-accent-gold shadow-xl sm:scale-105 z-10 md:translate-y-[-8px]"
                      : "border border-border-rgba hover:border-accent-gold/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-accent-gold text-primary-bg font-heading text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-sm flex items-center gap-1 shadow-md">
                      <Star className="w-3 h-3 fill-current" /> Recommended
                    </div>
                  )}

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

                    <div className="mt-6 border-t border-border-rgba/60 pt-6">
                      <span className="text-3xl font-heading font-black text-white tracking-tight">
                        {plan.pricePlaceholder}
                      </span>
                      <span className="text-secondary-text/60 text-xs block mt-1">
                        *Contact gym to verify pricing
                      </span>
                    </div>
                  </div>

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

                  <div className="p-8 pt-4">
                    <button
                      onClick={scrollToForm}
                      className={`w-full font-heading text-xs font-black tracking-widest uppercase py-3.5 rounded-sm transition-all duration-300 ${
                        plan.popular
                          ? "bg-accent-gold hover:bg-accent-gold-hover text-primary-bg shadow-md"
                          : "border border-white/20 hover:border-accent-gold/40 text-white hover:bg-white/5"
                      }`}
                    >
                      Inquire Plan
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Membership Benefits & Support Details */}
        <section className="py-24 bg-secondary-bg border-y border-border-rgba">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: text */}
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-widest text-accent-gold uppercase">
                  Inclusive Amenities
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                  What is Included in Your Membership?
                </h2>
                <div className="w-12 h-1 bg-accent-gold" />
                <p className="text-secondary-text text-sm leading-relaxed">
                  Every active membership package at Sai Hari Tej Gym provides complete access to our high-performance facilities. We ensure that your environment supports steady training progress.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="flex gap-3 items-start">
                    <Dumbbell className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">Floor Coach Guidance</h4>
                      <p className="text-xs text-secondary-text/80 mt-1">Our certified trainers are always present on the floor to check your form, correct your posture, and answer queries.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Sparkles className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">Hygienic Environment</h4>
                      <p className="text-xs text-secondary-text/80 mt-1">Strict cleaning parameters are followed. Machines are cleaned regularly, and air ventilation is checked daily.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Shield className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">Locker Facilities</h4>
                      <p className="text-xs text-secondary-text/80 mt-1">Store your training gear and personal valuables safely in our secure floor locker boxes while you lift.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Users className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">Supportive Community</h4>
                      <p className="text-xs text-secondary-text/80 mt-1">Train alongside dedicated, like-minded individuals in Anekal who value health, safety, and lifting consistency.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Imagery */}
              <div className="relative h-[300px] sm:h-[400px] border border-border-rgba overflow-hidden rounded-sm">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

            </div>

          </div>
        </section>

        {/* FAQs */}
        <Faq />

        {/* CTA Contact Hook */}
        <section id="memberships-cta" className="py-24 bg-primary-bg text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            <h3 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              Verify Pricing & Join
            </h3>
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-secondary-text leading-relaxed">
              We keep our pricing editable and flexible to accommodate student discounts and seasonal offers. Contact our front desk directly via WhatsApp or phone to get the active rates for your selected tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/919902311113"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs font-black tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
              >
                Inquire on WhatsApp
                <Check className="w-4 h-4" />
              </a>
              <a
                href="tel:+919902311113"
                className="border border-white/20 hover:border-accent-gold/45 text-white font-heading text-xs font-black tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2"
              >
                Call Front Desk
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
