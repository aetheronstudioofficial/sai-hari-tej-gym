"use client";

import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { MapPin, Phone, Mail, Compass, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { GYM_DETAILS } from "@/data/gymData";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Provide a valid 10-digit phone number";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Provide a valid email address";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", email: "", message: "" });
    setShowSuccess(false);
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
              backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto px-4">
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              Contact <span className="text-accent-gold">Us</span>
            </h1>
            <p className="text-secondary-text text-sm sm:text-base tracking-widest uppercase">
              Get In Touch With Sai Hari Tej Gym
            </p>
          </div>
        </section>

        {/* Contact Info and Form Grid */}
        <section className="py-24 bg-primary-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Info Card */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
                    Connect
                  </h2>
                  <h3 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                    Start a Conversation
                  </h3>
                  <div className="w-12 h-1 bg-accent-gold" />
                </div>
                
                <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
                  Have questions about our rates, specific training packages, or floor timings? Fill out our contact form or chat with us directly via the phone lines or WhatsApp support.
                </p>

                {/* Details list */}
                <div className="space-y-4 pt-4">
                  
                  {/* Address */}
                  <div className="flex gap-4 p-5 bg-secondary-bg border border-border-rgba rounded-sm">
                    <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm space-y-1">
                      <h4 className="font-heading font-bold text-white uppercase tracking-wider">Gym Location</h4>
                      <p className="text-secondary-text leading-relaxed">
                        {GYM_DETAILS.address.line1}, {GYM_DETAILS.address.line2},<br />
                        {GYM_DETAILS.address.colony}, {GYM_DETAILS.address.city},<br />
                        {GYM_DETAILS.address.state} {GYM_DETAILS.address.pincode}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 p-5 bg-secondary-bg border border-border-rgba rounded-sm">
                    <Phone className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm space-y-1">
                      <h4 className="font-heading font-bold text-white uppercase tracking-wider">Phone Lines</h4>
                      <a href={`tel:${GYM_DETAILS.phone}`} className="text-secondary-text hover:text-white transition-colors">
                        {GYM_DETAILS.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 p-5 bg-secondary-bg border border-border-rgba rounded-sm">
                    <Mail className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm space-y-1">
                      <h4 className="font-heading font-bold text-white uppercase tracking-wider">Email Address</h4>
                      <span className="text-secondary-text hover:text-white transition-colors cursor-pointer">
                        contact@saiharitejgym.com
                      </span>
                    </div>
                  </div>

                </div>

                {/* Micro Actions Row */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={GYM_DETAILS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs font-black tracking-widest uppercase px-6 py-4.5 rounded-sm transition-all duration-300 transform active:scale-95 shadow-md flex items-center gap-2 group shrink-0"
                  >
                    <Compass className="w-4 h-4" /> Get Directions
                  </a>
                  <a
                    href={`https://wa.me/${GYM_DETAILS.phone.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 hover:border-[#25D366]/40 text-white font-heading text-xs font-black tracking-widest uppercase px-6 py-4.5 rounded-sm transition-all duration-300 hover:bg-[#25D366]/5 flex items-center justify-center gap-2 group"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" /> WhatsApp Front Desk
                  </a>
                </div>

              </div>

              {/* Right Column: Contact Form */}
              <div className="bg-secondary-bg border border-border-rgba p-8 sm:p-10 rounded-sm shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="font-heading font-black text-[10px] text-white uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className={`w-full bg-primary-bg border px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-accent-gold/60 transition-colors ${
                        errors.name ? "border-red-500/50" : "border-border-rgba"
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name}</p>}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="contact-phone" className="font-heading font-black text-[10px] text-white uppercase tracking-widest">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 99000 00000"
                        className={`w-full bg-primary-bg border px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-accent-gold/60 transition-colors ${
                          errors.phone ? "border-red-500/50" : "border-border-rgba"
                        }`}
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone}</p>}
                    </div>

                    {/* Email (Optional) */}
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="font-heading font-black text-[10px] text-white uppercase tracking-widest">
                        Email (Optional)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email address"
                        className={`w-full bg-primary-bg border px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-accent-gold/60 transition-colors ${
                          errors.email ? "border-red-500/50" : "border-border-rgba"
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
                    </div>

                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="font-heading font-black text-[10px] text-white uppercase tracking-widest">
                      How can we help you?
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      className={`w-full bg-primary-bg border px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-accent-gold/60 transition-colors resize-none ${
                        errors.message ? "border-red-500/50" : "border-border-rgba"
                      }`}
                    />
                    {errors.message && <p className="text-[10px] text-red-500 font-bold">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs font-black tracking-widest uppercase py-4 rounded-sm transition-all duration-300 transform active:scale-95 shadow-md flex items-center justify-center gap-2 disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                </form>
              </div>

            </div>

          </div>
        </section>

        {/* Embedded Map Section */}
        <section className="h-[450px] w-full border-t border-border-rgba bg-secondary-bg relative overflow-hidden group">
          <iframe
            title="Sai Hari Tej Gym Location map"
            src="https://maps.google.com/maps?q=Sai%20Hari%20Tej%20Gym,%20SBI%20Complex,%20Anekal%20Hosur%20Road,%20KSRTC%20Colony,%20Anekal,%20Karnataka%20562106&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-110 brightness-95 group-hover:grayscale-0 transition-all duration-500"
          />
        </section>

      </main>
      <Footer />

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
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
                  Message Sent!
                </h3>
                <p className="text-secondary-text text-sm mt-3 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your inquiry has been logged. We will reach back to you at <span className="text-white font-semibold">{formData.phone}</span> shortly.
                </p>
              </div>

              <button
                onClick={resetForm}
                className="w-full bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs font-black tracking-widest uppercase py-3 rounded-sm transition-all duration-300"
              >
                Close Message
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </>
  );
}
