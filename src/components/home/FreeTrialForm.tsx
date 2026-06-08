"use client";

import React, { useState } from "react";
import { CheckCircle2, User, Phone, Calendar, Target, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  phone: string;
  age: string;
  goal: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  age?: string;
  goal?: string;
}

export default function FreeTrialForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    age: "",
    goal: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name check
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Phone check (Indian phone: 10 digits optionally starting with +91 or 0)
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Provide a valid 10-digit phone number";
    }

    // Age check
    const ageNum = parseInt(formData.age);
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(ageNum) || ageNum < 12 || ageNum > 90) {
      newErrors.age = "Age must be between 12 and 90";
    }

    // Goal check
    if (!formData.goal) {
      newErrors.goal = "Please select a fitness goal";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate server response latency
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", age: "", goal: "" });
    setShowSuccessModal(false);
  };

  return (
    <section id="trial-form-section" className="py-24 bg-secondary-bg border-y border-border-rgba relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: CTA Pitch */}
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-accent-gold uppercase bg-accent-gold/10 px-2.5 py-1 rounded-sm">
              Limited Offer
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none mt-2">
              Book A Free Session
            </h2>
            <div className="w-12 h-1 bg-accent-gold" />
            <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
              Experience the difference at Sai Hari Tej Gym before committing. Sign up now for a free, no-obligation trial workout. Meet our trainers, utilize our state-of-the-art machines, and evaluate our environment first-hand.
            </p>

            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-xs text-white">
                <div className="w-5 h-5 bg-accent-gold/10 border border-accent-gold/25 rounded-full flex items-center justify-center text-accent-gold shrink-0">
                  ✓
                </div>
                <span>Complimentary 1-day pass to all training zones</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-white">
                <div className="w-5 h-5 bg-accent-gold/10 border border-accent-gold/25 rounded-full flex items-center justify-center text-accent-gold shrink-0">
                  ✓
                </div>
                <span>Free postural and movement consultation with a trainer</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-white">
                <div className="w-5 h-5 bg-accent-gold/10 border border-accent-gold/25 rounded-full flex items-center justify-center text-accent-gold shrink-0">
                  ✓
                </div>
                <span>Zero signup fees or pressure to buy plans</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Form Box */}
          <div className="bg-primary-bg border border-border-rgba p-8 sm:p-10 rounded-sm shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="name-input" className="font-heading font-black text-[10px] text-white uppercase tracking-widest flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-accent-gold" /> Full Name
                </label>
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`w-full bg-secondary-bg border px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-accent-gold/60 transition-colors ${
                    errors.name ? "border-red-500/50" : "border-border-rgba"
                  }`}
                />
                {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label htmlFor="phone-input" className="font-heading font-black text-[10px] text-white uppercase tracking-widest flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-accent-gold" /> Phone Number
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 99000 00000"
                  className={`w-full bg-secondary-bg border px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-accent-gold/60 transition-colors ${
                    errors.phone ? "border-red-500/50" : "border-border-rgba"
                  }`}
                />
                {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone}</p>}
              </div>

              {/* Age & Fitness Goal (Row) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Age */}
                <div className="space-y-2">
                  <label htmlFor="age-input" className="font-heading font-black text-[10px] text-white uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-gold" /> Age
                  </label>
                  <input
                    id="age-input"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter your age"
                    className={`w-full bg-secondary-bg border px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-accent-gold/60 transition-colors ${
                      errors.age ? "border-red-500/50" : "border-border-rgba"
                    }`}
                  />
                  {errors.age && <p className="text-[10px] text-red-500 font-bold">{errors.age}</p>}
                </div>

                {/* Fitness Goal */}
                <div className="space-y-2">
                  <label htmlFor="goal-select" className="font-heading font-black text-[10px] text-white uppercase tracking-widest flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-accent-gold" /> Fitness Goal
                  </label>
                  <select
                    id="goal-select"
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className={`w-full bg-secondary-bg border px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-accent-gold/60 transition-colors ${
                      errors.goal ? "border-red-500/50" : "border-border-rgba"
                    }`}
                  >
                    <option value="" disabled>Select goal</option>
                    <option value="Lose Weight">Lose Weight</option>
                    <option value="Build Muscle">Build Muscle</option>
                    <option value="Improve Strength">Improve Strength</option>
                    <option value="Stay Fit">Stay Fit</option>
                  </select>
                  {errors.goal && <p className="text-[10px] text-red-500 font-bold">{errors.goal}</p>}
                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs font-black tracking-widest uppercase py-4 rounded-sm transition-all duration-300 transform active:scale-95 shadow-md flex items-center justify-center gap-2 disabled:opacity-75 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Book Free Trial Now"
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-secondary-bg border border-accent-gold/30 p-8 max-w-md w-full rounded-sm text-center space-y-6 shadow-2xl relative"
            >
              <div className="w-16 h-16 bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold rounded-full mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-heading font-black text-2xl text-white uppercase tracking-wide">
                  Trial Confirmed!
                </h3>
                <p className="text-secondary-text text-sm mt-3 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your free trial session has been reserved. Our head coach, Harish, will contact you shortly at <span className="text-white font-semibold">{formData.phone}</span> to schedule your first workout.
                </p>
              </div>

              <div className="p-4 bg-primary-bg/50 border border-border-rgba rounded-sm text-left text-xs text-secondary-text space-y-2">
                <p><strong>Goal:</strong> {formData.goal}</p>
                <p><strong>Age:</strong> {formData.age} years old</p>
                <p><strong>Location:</strong> SBI Complex, Anekal - Hosur Rd</p>
              </div>

              <button
                onClick={resetForm}
                className="w-full bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs font-black tracking-widest uppercase py-3 rounded-sm transition-all duration-300"
              >
                Dismiss Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
