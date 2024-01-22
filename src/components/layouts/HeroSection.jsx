import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    // -mt-16
    <section className="grid content-center w-full grid-cols-1 px-4 mt-24 mb-32 text-center md:text-start md:grid-cols-2 h-96 place-items-center -z-50">
      <Image src="/images/hero.png" width={500} height={500} alt="auth-image" />
      <div className="font-bold text-primary">
        <div className="md:text-2xl  lg:text-[29px] mb-5 mt-5 md:mt-0">
          <p>TENTUKAN KEKUATAN DALAM KOLABORASI!</p>
          <p>
            CARI DAN BERGABUNGLAH DENGAN TIM DAN JADILAH BAGIAN DARI PERJALANAN
            MENUJU KEBERHASILAN BERSAMA
          </p>
        </div>
        <button className="px-5 py-3 text-base rounded-lg bg-tertiary drop-shadow-lg">
          Cari Sekarang Juga
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
