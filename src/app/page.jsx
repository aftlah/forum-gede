"use client";
import Navbar from "@/components/core/Navbar";
import AboutSection from "@/components/layouts/AboutSection";
import BenefitSection from "@/components/layouts/BenefitSection";
import FooterSection from "@/components/layouts/FooterSection";
import HeroSection from "@/components/layouts/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative mx-auto max-w-screen-2xl">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <BenefitSection />

        <div className="text-center mb-36 mt-28">
          <h1 className="mb-5 text-3xl font-bold text-primary">
            TUNGGU APA LAGI?
          </h1>
          <button className="px-5 py-3 text-lg font-bold rounded-lg cursor-pointer bg-tertiary drop-shadow-lg">
            Cari Sekarang juga
          </button>
        </div>

        <FooterSection />

        <div className="fixed flex p-2 md:p-3 border-[1.5px] border-white rounded-full bg-primary bottom-10 right-5">
          <Link href={"#up"} className="text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15a1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
