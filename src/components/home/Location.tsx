"use client";

import React from "react";
import { MapPin, Phone, Compass, Shield } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { GYM_DETAILS } from "@/data/gymData";

export default function Location() {
  return (
    <section className="py-24 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Business Location details */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
                Find Us
              </h2>
              <h3 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                Our Location
              </h3>
              <div className="w-12 h-1 bg-accent-gold" />
            </div>

            <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
              Sai Hari Tej Gym is situated in a premium, easily accessible commercial complex on the Anekal-Hosur main road. We offer ample parking space and a convenient location for fitness enthusiasts in Anekal.
            </p>

            {/* Address Info Cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-secondary-bg border border-border-rgba rounded-sm">
                <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm space-y-1.5">
                  <h4 className="font-heading font-bold text-white uppercase tracking-wider">Physical Address</h4>
                  <p className="text-secondary-text leading-relaxed">
                    {GYM_DETAILS.address.line1}, {GYM_DETAILS.address.line2},<br />
                    {GYM_DETAILS.address.colony}, {GYM_DETAILS.address.city},<br />
                    {GYM_DETAILS.address.state} {GYM_DETAILS.address.pincode}, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-secondary-bg border border-border-rgba rounded-sm">
                <Shield className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm space-y-1.5">
                  <h4 className="font-heading font-bold text-white uppercase tracking-wider">Coordinates</h4>
                  <p className="text-secondary-text">
                    Latitude: {GYM_DETAILS.coordinates.lat} | Longitude: {GYM_DETAILS.coordinates.lng}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions Row */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs font-black tracking-widest uppercase px-6 py-4 rounded-sm transition-all duration-300 transform active:scale-95 shadow-md flex items-center gap-2 group"
              >
                <Compass className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="border border-white/20 hover:border-accent-gold/40 text-white font-heading text-xs font-black tracking-widest uppercase px-6 py-4 rounded-sm transition-all duration-300 hover:bg-white/5 active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-accent-gold" />
                Call Gym
              </a>
              <a
                href={`https://wa.me/${GYM_DETAILS.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-[#25D366]/40 text-white font-heading text-xs font-black tracking-widest uppercase px-6 py-4 rounded-sm transition-all duration-300 hover:bg-[#25D366]/5 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Map */}
          <div className="h-[400px] sm:h-[480px] w-full border border-border-rgba bg-secondary-bg overflow-hidden relative rounded-sm shadow-xl group hover:border-accent-gold/20 transition-colors duration-300">
            {/* Embedded Google Map iframe matching gym location coordinates */}
            <iframe
              title="Sai Hari Tej Gym Google Maps Location"
              src="https://maps.google.com/maps?q=Sai%20Hari%20Tej%20Gym,%20SBI%20Complex,%20Anekal%20Hosur%20Road,%20KSRTC%20Colony,%20Anekal,%20Karnataka%20562106&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-110 brightness-90 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
