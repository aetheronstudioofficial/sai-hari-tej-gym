"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { GYM_DETAILS } from "@/data/gymData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Memberships", href: "/memberships" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const handleTrialClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("trial-form-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Allow navigation to Home and scroll (handled in page or standard transition)
    }
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary-bg/85 backdrop-blur-md border-b border-border-rgba py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 group">
              <span className="font-heading font-black text-xl tracking-wider text-white">
                SAI HARI TEJ
              </span>
              <span className="font-heading font-black text-xl tracking-wider text-accent-gold transition-colors duration-300 group-hover:text-white">
                GYM
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-heading text-sm font-medium tracking-wide uppercase transition-colors relative py-1 ${
                      isActive
                        ? "text-accent-gold"
                        : "text-secondary-text hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`https://wa.me/${GYM_DETAILS.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-secondary-text hover:text-[#25D366] transition-colors border border-border-rgba rounded-full hover:border-[#25D366]/30 group"
                aria-label="Contact on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <Link
                href="/#trial-form-section"
                onClick={handleTrialClick}
                className="bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-accent-gold/20"
              >
                Book Free Trial
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center md:hidden gap-3">
              <a
                href={`https://wa.me/${GYM_DETAILS.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-secondary-text hover:text-[#25D366] transition-colors group"
                aria-label="Contact on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-accent-gold transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-secondary-bg border-b border-border-rgba shadow-2xl overflow-y-auto max-h-[calc(100vh-60px)]"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-heading text-base font-bold tracking-widest uppercase py-3 border-b border-border-rgba/50 transition-colors ${
                        isActive ? "text-accent-gold" : "text-secondary-text hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/#trial-form-section"
                  onClick={handleTrialClick}
                  className="w-full text-center bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-sm font-bold tracking-widest uppercase py-3 rounded-sm transition-all duration-300"
                >
                  Book Free Trial
                </Link>
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="w-full text-center border border-border-rgba text-white font-heading text-sm font-bold tracking-widest uppercase py-3 rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Gym
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
