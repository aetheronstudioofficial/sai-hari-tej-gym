"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star, ArrowUp } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { GYM_DETAILS } from "@/data/gymData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary-bg border-t border-border-rgba text-secondary-text pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-1">
              <span className="font-heading font-black text-xl tracking-wider text-white">
                SAI HARI TEJ
              </span>
              <span className="font-heading font-black text-xl tracking-wider text-accent-gold">
                GYM
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-secondary-text/80">
              Anekal&apos;s premium fitness destination. We combine elite-level strength equipment, expert training methodologies, and a highly motivational environment to enable complete physical transformation.
            </p>
            {/* Google review micro badge */}
            <a 
              href={GYM_DETAILS.mapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary-bg px-4 py-2 border border-border-rgba rounded-sm hover:border-accent-gold/40 transition-colors"
            >
              <div className="flex items-center text-accent-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-xs text-white font-medium">
                {GYM_DETAILS.rating} ★ <span className="text-secondary-text">({GYM_DETAILS.reviewsCount}+ Reviews)</span>
              </div>
            </a>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white tracking-widest uppercase mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-accent-gold">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About the Gym
                </Link>
              </li>
              <li>
                <Link href="/memberships" className="hover:text-white transition-colors duration-200">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors duration-200">
                  Gallery Showcase
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white tracking-widest uppercase mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-accent-gold">
              Gym Timings
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Monday – Saturday</p>
                  <p className="text-xs text-secondary-text/80 mt-1">Morning: 5:30 AM – 10:30 AM</p>
                  <p className="text-xs text-secondary-text/80">Evening: 5:00 PM – 9:30 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-xs text-secondary-text/80 mt-1">Closed (Weekly Maintenance)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white tracking-widest uppercase mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-accent-gold">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {GYM_DETAILS.address.line1}, {GYM_DETAILS.address.line2},<br />
                  {GYM_DETAILS.address.colony}, {GYM_DETAILS.address.city},<br />
                  {GYM_DETAILS.address.state} {GYM_DETAILS.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-gold shrink-0" />
                <a href={`tel:${GYM_DETAILS.phone}`} className="hover:text-white transition-colors">
                  {GYM_DETAILS.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-gold shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">
                  contact@saiharitejgym.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-rgba/60 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-text/60 text-center md:text-left flex flex-wrap items-center justify-center md:justify-start gap-x-1.5 gap-y-1">
            <span>© {new Date().getFullYear()} Sai Hari Tej Gym. All Rights Reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Designed & Developed by</span>
            <a 
              href="https://www.aetheronstudio.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-gold hover:text-white font-semibold transition-colors"
            >
              Aetheron Studio
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`https://wa.me/${GYM_DETAILS.phone.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text/80 hover:text-[#25D366] transition-colors text-xs flex items-center gap-1.5 group"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" /> WhatsApp Support
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 border border-border-rgba rounded-sm hover:border-accent-gold/40 hover:text-white transition-all duration-200 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
