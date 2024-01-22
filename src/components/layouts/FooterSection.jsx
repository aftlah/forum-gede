import React from "react";

const FooterSection = () => {
  return (
    <footer className="flex justify-center h-80 md:h-60 items-centerl justicky bg-primary">
      <div className="grid content-center grid-cols-1 px-10 text-white md:py-20 md:grid-cols-2 lg:grid-cols-3 md:justify-items-stretch md:pl-20 gap-y-5 md:gap-y-0">
        <div>
          <h1 className="text-2xl font-black md:text-3xl">Frum Gede</h1>
          <p className="text-sm font-medium md:text-base">Copyright © Forum Gede 2024</p>
        </div>
        <div>
          <h1 className="text-2xl font-black md:text-3xl">Geet In Touch</h1>
          <p className="text-sm font-medium md:text-base text-wrap">
            Universitas Budi Luhur, Jl Ciledug raya No.1C, Petukangan utara,Kota
            Jakarta Selatan.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-black md:text-3xl">Sosial Media</h1>
          <ul className="text-sm font-medium md:text-base">
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
