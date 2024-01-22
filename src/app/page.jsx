"use client";
import Navbar from "@/components/core/Navbar";
import AboutSection from "@/components/layouts/AboutSection";
import BenefitSection from "@/components/layouts/BenefitSection";
import FooterSection from "@/components/layouts/FooterSection";
import HeroSection from "@/components/layouts/HeroSection";

export default function Home() {
  return (
    <>
      <div className="relative max-w-screen-xl mx-auto">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <BenefitSection />

        <div className="mb-32 text-center mt-28">
          <h1 className="mb-5 text-3xl font-bold text-primary">
            TUNGGU APA LAGI?
          </h1>
          <button className="px-5 py-3 text-lg font-bold rounded-lg bg-tertiary drop-shadow-lg ">
            Cari Sekarang juga
          </button>
        </div>
        <FooterSection />
      </div>
    </>
  );
}
