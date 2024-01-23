import React from "react";
import Image from "next/image";
import footerLogo from "@/app/assets/images/footerLoog.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between w-full  p-4 lg:p-10">
      <div className="flex items-center justify-center gap-2">
        <Image src={footerLogo} alt="logo" />
        <span className="text-white font-bold text-2xl">Personal</span>
      </div>
      <div>
        <p>@2023 Personal</p>
      </div>
    </div>
  );
};

export default Footer;
