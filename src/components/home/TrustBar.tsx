"use client";

import React from "react";
import { MapPin, Star, Award } from "lucide-react";
import { GYM_DETAILS } from "@/data/gymData";

export default function TrustBar() {
  return (
    <section className="bg-secondary-bg border-y border-border-rgba py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border-rgba/60 items-center">
          
          {/* Location Verification */}
          <div className="flex items-center gap-4 justify-start md:justify-start pb-6 md:pb-0">
            <div className="w-12 h-12 bg-primary-bg rounded-full flex items-center justify-center border border-accent-gold/25 text-accent-gold shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-secondary-text/80 font-medium">Located In</p>
              <h3 className="text-white font-heading font-black text-sm tracking-wide mt-0.5">
                Anekal, Karnataka, India
              </h3>
            </div>
          </div>

          {/* Address Description */}
          <div className="flex items-center gap-4 justify-start md:justify-start py-6 md:py-0 md:px-8">
            <div className="w-12 h-12 bg-primary-bg rounded-full flex items-center justify-center border border-accent-gold/25 text-accent-gold shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-secondary-text/80 font-medium">Physical Location</p>
              <h3 className="text-white font-heading font-bold text-xs leading-relaxed mt-0.5 max-w-xs">
                {GYM_DETAILS.address.line1}, {GYM_DETAILS.address.line2}, {GYM_DETAILS.address.colony}
              </h3>
            </div>
          </div>

          {/* Social Proof metrics */}
          <div className="flex items-center gap-4 justify-start md:justify-start pt-6 md:pt-0 md:pl-8">
            <div className="w-12 h-12 bg-primary-bg rounded-full flex items-center justify-center border border-accent-gold/25 text-accent-gold shrink-0">
              <Star className="w-5 h-5 fill-accent-gold" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-secondary-text/80 font-medium">Google Rating</p>
              <h3 className="text-white font-heading font-black text-sm tracking-wide mt-0.5 flex items-center gap-1.5">
                {GYM_DETAILS.rating} ★ <span className="text-secondary-text font-normal text-xs">({GYM_DETAILS.reviewsCount}+ Reviews)</span>
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
