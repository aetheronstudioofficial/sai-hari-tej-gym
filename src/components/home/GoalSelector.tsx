"use client";

import React, { useState } from "react";
import { Sparkles, Dumbbell, Zap, TrendingDown, Heart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GoalDetail {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  duration: string;
  focusArea: string;
  dietPlan: string;
  recommendedPlan: string;
  description: string;
}

const GOALS: GoalDetail[] = [
  {
    id: "lose-weight",
    label: "Lose Weight",
    icon: TrendingDown,
    title: "High-Intensity Fat Loss Protocol",
    duration: "12 to 16 Weeks",
    focusArea: "High heart-rate circuits, dynamic rowers, treadmill intervals & calorie deficit coaching.",
    dietPlan: "Custom high-protein, calorie-restricted meal plans with structural macro tracking guidance.",
    recommendedPlan: "6 Months Builder or Elite Annual Plan",
    description: "Our metabolic conditioning systems elevate your heart rate and compound lifts to maximize fat loss, retain lean mass, and optimize cardiovascular endurance.",
  },
  {
    id: "build-muscle",
    label: "Build Muscle",
    icon: Zap,
    title: "Hypertrophy & Power Building",
    duration: "16 to 24 Weeks",
    focusArea: "Heavy compounds (squats, bench, deadlifts), isolated resistance machinery & progressive overload.",
    dietPlan: "Calorie-surplus macronutrient charts with heavy focus on clean proteins and fast carbohydrates.",
    recommendedPlan: "Elite Annual Plan (Includes monthly body composition)",
    description: "Designed specifically for cellular growth, progressive mechanical tension, and volume accumulation under the guidance of our strength coaches.",
  },
  {
    id: "improve-strength",
    label: "Improve Strength",
    icon: Dumbbell,
    title: "Strength & Conditioning Program",
    duration: "12 Weeks (Block Periodized)",
    focusArea: "1RM optimization, percentage-based loading protocols, accessory lifts & central nervous system recovery.",
    dietPlan: "Isocaloric high-density meals optimized for recovery, joint support, and nervous system fuel.",
    recommendedPlan: "Quarterly Starter or Elite Annual Plan",
    description: "Focus on maximizing raw force output, periodized training blocks, lifting posture, and mastering barbell kinematics for optimal safety and power.",
  },
  {
    id: "stay-fit",
    label: "Stay Fit",
    icon: Heart,
    title: "Operational Longevity & General Fitness",
    duration: "Ongoing Maintenance",
    focusArea: "Mobility flows, moderate-intensity resistance workouts, steady-state cardio & agility drills.",
    dietPlan: "Balanced whole foods plans centered around clean vegetables, healthy fats, and lean proteins.",
    recommendedPlan: "Standard Monthly or Quarterly Plan",
    description: "Engineered to keep you moving comfortably, avoid joint pain, boost active metabolic rate, and support high energy throughout your daily career and lifestyle.",
  },
];

export default function GoalSelector() {
  const [selectedGoalId, setSelectedGoalId] = useState<string>("lose-weight");

  const activeGoal = GOALS.find((g) => g.id === selectedGoalId) || GOALS[0];
  const ActiveIcon = activeGoal.icon;

  const scrollToForm = () => {
    const element = document.getElementById("trial-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-accent-gold uppercase">
            Interactive
          </h2>
          <p className="mt-3 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Goal-Based Recommendations
          </p>
          <div className="mt-4 w-12 h-1 bg-accent-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Goal Selector Buttons (Left 1 Col) */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-black text-xs text-white uppercase tracking-widest mb-2 px-1">
              Select Your Target:
            </h3>
            {GOALS.map((goal) => {
              const GoalIcon = goal.icon;
              const isSelected = goal.id === selectedGoalId;
              return (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoalId(goal.id)}
                  className={`w-full text-left p-5 rounded-sm border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-accent-gold border-accent-gold text-primary-bg"
                      : "bg-secondary-bg border-border-rgba text-secondary-text hover:border-accent-gold/45 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <GoalIcon className={`w-5 h-5 ${isSelected ? "text-primary-bg" : "text-accent-gold"}`} />
                    <span className="font-heading font-black text-sm uppercase tracking-wide">
                      {goal.label}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? "translate-x-1 text-primary-bg" : "group-hover:translate-x-1 text-secondary-text"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Recommendation Card (Right 2 Cols) */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedGoalId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-secondary-bg border border-border-rgba p-8 sm:p-10 rounded-sm space-y-6 relative overflow-hidden"
              >
                
                {/* Large Background Icon */}
                <div className="absolute -bottom-8 -right-8 text-white/5 w-48 h-48 pointer-events-none">
                  <ActiveIcon className="w-full h-full" />
                </div>

                {/* Badge Header */}
                <div className="flex items-center gap-2 text-accent-gold">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    Custom Recommendation
                  </span>
                </div>

                {/* Recommendation Title */}
                <div>
                  <h4 className="font-heading font-black text-2xl text-white uppercase tracking-wide">
                    {activeGoal.title}
                  </h4>
                  <p className="text-secondary-text/80 text-xs sm:text-sm mt-2 leading-relaxed">
                    {activeGoal.description}
                  </p>
                </div>

                {/* Focus, Nutrition, Package Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border-rgba/60">
                  
                  <div className="space-y-1">
                    <h5 className="text-[10px] font-bold text-accent-gold uppercase tracking-wider">
                      Training Focus
                    </h5>
                    <p className="text-xs text-white leading-relaxed">
                      {activeGoal.focusArea}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[10px] font-bold text-accent-gold uppercase tracking-wider">
                      Dietary Framework
                    </h5>
                    <p className="text-xs text-white leading-relaxed">
                      {activeGoal.dietPlan}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[10px] font-bold text-accent-gold uppercase tracking-wider">
                      Time Horizon
                    </h5>
                    <p className="text-xs text-white font-semibold">
                      {activeGoal.duration}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-[10px] font-bold text-accent-gold uppercase tracking-wider">
                      Recommended Plan
                    </h5>
                    <p className="text-xs text-white font-semibold">
                      {activeGoal.recommendedPlan}
                    </p>
                  </div>

                </div>

                {/* Book Trial Callout */}
                <div className="pt-6 border-t border-border-rgba/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-secondary-text/80 text-center sm:text-left">
                    Ready to initiate this plan? Book a free trial and speak with Harish/Tejesh.
                  </p>
                  <button
                    onClick={scrollToForm}
                    className="bg-accent-gold hover:bg-accent-gold-hover text-primary-bg font-heading text-xs font-black tracking-widest uppercase px-6 py-3 rounded-sm transition-all duration-300 transform active:scale-95 shadow-md flex items-center gap-2 group shrink-0"
                  >
                    Claim Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
