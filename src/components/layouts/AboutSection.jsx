import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <h1 className="mt-16 mb-6 text-3xl font-bold text-center text-primary">
        ABOUT
      </h1>
      <div className="grid content-center w-full grid-cols-2 px-5 py-14 justify-items-start bg-primary">
        <ul className="grid content-center grid-cols-3 my-auto md:w-full lg:w-1/2 lg:ml-28 md:justify-self-start justify-items-start gap-7 h-72 ">
          <li>
            <Image
              src="/images/Vector.png"
              width={100}
              height={100}
              alt="avatar"
              className="w-16 md:w-20 lg:w-24"
            />
          </li>
          <li>
            <Image
              src="/images/Vector.png"
              width={100}
              height={100}
              alt="avatar"
              className="w-16 md:w-20 lg:w-24"
            />
          </li>
          <li>
            <Image
              src="/images/Vector.png"
              width={100}
              height={100}
              alt="avatar"
              className="w-16 md:w-20 lg:w-24"
            />
          </li>
          <li>
            <Image
              src="/images/Vector.png"
              width={100}
              height={100}
              alt="avatar"
              className="w-16 md:w-20 lg:w-24"
            />
          </li>
          <li>
            <Image
              src="/images/Vector.png"
              width={100}
              height={100}
              alt="avatar"
              className="w-16 md:w-20 lg:w-24"
            />
          </li>
          <li>
            <Image
              src="/images/Vector.png"
              width={100}
              height={100}
              alt="avatar"
              className="w-16 md:w-20 lg:w-24"
            />
          </li>
          <li>
            <Image
              src="/images/Vector.png"
              width={100}
              height={100}
              alt="avatar"
              className="w-16 md:w-20 lg:w-24"
            />
          </li>
          <li>
            <Image
              src="/images/Vector.png"
              width={100}
              height={100}
              alt="avatar"
              className="w-16 md:w-20 lg:w-24"
            />
          </li>
        </ul>

        <div className="grid content-center w-full m-0 text-white lg:-ml-20 gap-y-7">
          <p className="text-wrap">
            Karya ilmiah ini menyajikan solusi digital inovatif berupa website
            pencari rekan keanggotaan untuk mahasiswa. Platform ini dirancang
            untuk memudahkan penyatuan tim di berbagai organisasi dan event
            kompetisi. Dengan pendekatan sistem, aplikasi ini memberikan akses
            cepat dan efisien bagi mahasiswa untuk menemukan rekan sesuai minat
            dan keterampilan.
          </p>

          <p className="text-wrap">
            Tujuannya adalah mendorong kolaborasi antar mahasiswa, fakultas,
            memperkuat kehadiran organisasi, dan meningkatkan partisipasi
            mahasiswa dalam kegiatan kampus. Melalui integrasi fitur pencarian
            yang canggih dan desain antarmuka yang ramah pengguna, aplikasi ini
            bertujuan menjadi sarana kunci bagi mahasiswa untuk membangun tim
            yang solid dan sukses dalam lingkungan kampus yang dinamis.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
