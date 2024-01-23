import React from "react";
import Image from "next/image";
import logo from "@/app/assets/images/logo.svg";
import burgerMenu from "@/app/assets/images/burger.svg";
import download from "@/app/assets/images/download.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-4 lg:p-10">
      <div className="flex items-center justify-center gap-2">
        <Image src={logo} alt="logo" />
        <span className="text-black font-bold text-2xl">Personal</span>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex items-center justify-center gap-4 text-black font-semibold">
          <li>
            <Link href={"#about"}>About Me</Link>
          </li>
          <li>
            <Link href={"#skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact Me</Link>
          </li>
        </ul>
      </nav>
      <div className="lg:hidden cursor-pointer">
        <Image src={burgerMenu} alt="burger menu" />
      </div>
      <div className="hidden lg:block">
        <button className=" w-[150px] h-[50px] bg-black text-white flex items-center justify-center gap-2">
          <span>Resume</span>
          <Image src={download} alt="resume donwload button" />
        </button>
      </div>
    </div>
  );
};

export default Header;
