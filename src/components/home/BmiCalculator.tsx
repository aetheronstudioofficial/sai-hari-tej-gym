"use client";

import React, { useState } from "react";
import { Calculator } from "lucide-react";

export default function BmiCalculator() {
  const [height, setHeight] = useState<number>(170); // in cm
  const [weight, setWeight] = useState<number>(70); // in kg

  const heightInMeters = height / 100;
  const bmi = height > 0 && weight > 0 ? parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1)) : null;

  // Category assignment
  let category = "";
  if (bmi !== null) {
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  }

  // Recommended range: BMI 18.5 to 24.9
  const targetMinWeight = bmi !== null ? parseFloat((18.5 * (heightInMeters * heightInMeters)).toFixed(1)) : 0;
  const targetMaxWeight = bmi !== null ? parseFloat((24.9 * (heightInMeters * heightInMeters)).toFixed(1)) : 0;

  const getMeterPercentage = () => {
    if (!bmi) return 0;
    // Standard BMI range represented: 15 to 35
    const minBmi = 15;
    const maxBmi = 35;
    const percent = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
    return Math.max(0, Math.min(100, percent));
  };

  const getCategoryColor = () => {
    switch (category) {
      case "Underweight":
        return "text-blue-400";
      case "Normal Weight":
        return "text-emerald-400";
      case "Overweight":
        return "text-amber-500";
      case "Obese":
        return "text-red-500";
      default:
        return "text-white";
    }
  };

  return (
    <section className="py-24 bg-secondary-bg border-y border-border-rgba">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
              Health Tools
            </h2>
            <h3 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              Calculate Your BMI
            </h3>
            <div className="w-12 h-1 bg-accent-gold" />
            <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
              Body Mass Index (BMI) is a simple measurement that uses your height and weight to work out if your weight is healthy. Use this instant calculator to assess your starting point and discover your ideal physiological weight parameters.
            </p>
            <div className="p-6 bg-primary-bg/50 border border-border-rgba rounded-sm space-y-4">
              <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
                BMI Reference Categories
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-center font-bold">
                <div className="p-2 bg-blue-950/40 border border-blue-900/30 text-blue-400 rounded-sm">
                  &lt; 18.5<br />Under
                </div>
                <div className="p-2 bg-emerald-950/40 border border-emerald-900/30 text-emerald-400 rounded-sm">
                  18.5 – 24.9<br />Normal
                </div>
                <div className="p-2 bg-amber-950/40 border border-amber-900/30 text-amber-500 rounded-sm">
                  25.0 – 29.9<br />Over
                </div>
                <div className="p-2 bg-red-950/40 border border-red-900/30 text-red-500 rounded-sm">
                  30.0+<br />Obese
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Card */}
          <div className="bg-primary-bg border border-border-rgba p-8 sm:p-10 rounded-sm shadow-xl relative overflow-hidden">
            
            {/* Corner Icon Accent */}
            <div className="absolute -top-6 -right-6 text-white/5 w-24 h-24 pointer-events-none">
              <Calculator className="w-full h-full stroke-1" />
            </div>

            <div className="space-y-8">
              
              {/* Height Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="height-slider" className="font-heading font-black text-xs text-white uppercase tracking-wider">
                    Height
                  </label>
                  <span className="font-heading font-bold text-sm text-accent-gold">
                    {height} cm
                  </span>
                </div>
                <input
                  id="height-slider"
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-accent-gold h-1 bg-secondary-bg rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Weight Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="weight-slider" className="font-heading font-black text-xs text-white uppercase tracking-wider">
                    Weight
                  </label>
                  <span className="font-heading font-bold text-sm text-accent-gold">
                    {weight} kg
                  </span>
                </div>
                <input
                  id="weight-slider"
                  type="range"
                  min="30"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-accent-gold h-1 bg-secondary-bg rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Result display */}
              {bmi !== null && (
                <div className="border-t border-border-rgba pt-8 space-y-6">
                  
                  <div className="grid grid-cols-2 gap-4 items-center">
                    
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest text-secondary-text/60">Your BMI Score</p>
                      <h4 className="text-4xl font-heading font-black text-white">{bmi}</h4>
                    </div>

                    <div className="space-y-1 text-right">
                      <p className="text-[10px] uppercase tracking-widest text-secondary-text/60">Classification</p>
                      <h4 className={`text-lg font-heading font-black uppercase tracking-wide ${getCategoryColor()}`}>
                        {category}
                      </h4>
                    </div>

                  </div>

                  {/* Meter Track */}
                  <div className="space-y-1">
                    <div className="h-2 w-full bg-secondary-bg rounded-full overflow-hidden relative border border-border-rgba">
                      <div
                        className="h-full bg-accent-gold rounded-full transition-all duration-300"
                        style={{ width: `${getMeterPercentage()}%` }}
                      />
                    </div>
                  </div>

                  {/* Recommended Target Weight Range */}
                  <div className="p-4 bg-secondary-bg/50 border border-border-rgba rounded-sm flex items-center justify-between text-xs text-secondary-text">
                    <span>Healthy Weight Range:</span>
                    <span className="font-bold text-white font-heading">
                      {targetMinWeight} kg – {targetMaxWeight} kg
                    </span>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
