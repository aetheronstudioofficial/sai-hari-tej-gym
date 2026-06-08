import React from "react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FitnessExperience from "@/components/home/FitnessExperience";
import Reviews from "@/components/home/Reviews";
import Transformations from "@/components/home/Transformations";
import MembershipPlans from "@/components/home/MembershipPlans";
import BmiCalculator from "@/components/home/BmiCalculator";
import GoalSelector from "@/components/home/GoalSelector";
import Trainers from "@/components/home/Trainers";
import Facilities from "@/components/home/Facilities";
import FreeTrialForm from "@/components/home/FreeTrialForm";
import Location from "@/components/home/Location";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[60px] md:pt-[76px]">
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <FitnessExperience />
        <Reviews />
        <Transformations />
        <MembershipPlans />
        <BmiCalculator />
        <GoalSelector />
        <Trainers />
        <Facilities />
        <FreeTrialForm />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
