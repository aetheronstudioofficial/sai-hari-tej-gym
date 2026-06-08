/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  category: "interior" | "equipment" | "workout" | "training" | "transformations";
  title: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    category: "interior",
    title: "Premium Gym Floor",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g-2",
    category: "equipment",
    title: "Plate-Loaded Machines",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g-3",
    category: "workout",
    title: "Heavy Free-Weight Platform",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g-4",
    category: "training",
    title: "1-on-1 Coaching Session",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g-5",
    category: "transformations",
    title: "High-Intensity Fat Burn Results",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g-6",
    category: "interior",
    title: "Spacious Training Setup",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g-7",
    category: "equipment",
    title: "Barbells and Dumbbells Setup",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g-8",
    category: "workout",
    title: "Cardio Treadmill Section",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g-9",
    category: "training",
    title: "Coaching Posture Check",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g-10",
    category: "transformations",
    title: "Muscle Hypertrophy Progress",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
  },
];

const CATEGORIES = [
  { id: "all", label: "Show All" },
  { id: "interior", label: "Gym Interior" },
  { id: "equipment", label: "Equipment" },
  { id: "workout", label: "Workout Area" },
  { id: "training", label: "Training Sessions" },
  { id: "transformations", label: "Transformations" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems = activeFilter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[60px] md:pt-[76px]">
        
        {/* Page Header */}
        <section className="relative py-24 flex items-center justify-center bg-primary-bg overflow-hidden border-b border-border-rgba">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto px-4">
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              Gym <span className="text-accent-gold">Gallery</span>
            </h1>
            <p className="text-secondary-text text-sm sm:text-base tracking-widest uppercase">
              Explore Our Premium Environment
            </p>
          </div>
        </section>

        {/* Gallery Filtering UI */}
        <section className="py-24 bg-primary-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {CATEGORIES.map((cat) => {
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-5 py-2.5 rounded-sm font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                      isActive
                        ? "bg-accent-gold text-primary-bg shadow-md"
                        : "bg-secondary-bg border border-border-rgba text-secondary-text hover:text-white hover:border-accent-gold/30"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Masonry-Style Grid Container */}
            <motion.div
              layout
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="break-inside-avoid relative group overflow-hidden border border-border-rgba bg-secondary-bg rounded-sm cursor-pointer"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Dark gradient reveal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                    {/* Meta info text overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[10px] font-bold text-accent-gold tracking-widest uppercase">
                        {item.category === "interior" ? "Gym Interior" : item.category}
                      </span>
                      <h3 className="font-heading font-black text-sm text-white uppercase tracking-wider mt-1">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
