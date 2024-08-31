"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/images/logo.svg";
import burgerMenu from "@/app/assets/images/burger.svg";
import download from "@/app/assets/images/download.svg";
import cross from "@/app/assets/images/cross.svg";
import colors from "../themes/colors";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const downloadResume = () => {
    const resumePath = "/resume/Shubham_Resume.pdf";
    const a = document.createElement("a");
    a.href = resumePath;
    a.target = "_blank";
    a.download = "Shubham_Resume.pdf";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className=" w-full flex items-center justify-between p-4 lg:p-10">
      <div className="flex items-center justify-center gap-2">
        <Image src={logo} alt="logo" />
        <span className="text-black font-bold text-2xl">Portfolio</span>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex items-center justify-center gap-4 text-black font-semibold">
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-20}
              className="cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-20}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-20}
              className="cursor-pointer"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>

      {/* mobile menu open/close  */}
      {isOpen && (
        <nav
          className={`${
            isOpen
              ? "fixed top-0 left-0 w-[100%] h-[100vh] transition duration-500  ease-in-out"
              : "hidden"
          }   lg:hidden`}
          style={{ backgroundColor: colors.zinc[100] }}
        >
          <ul className="flex w-full h-3/4 items-end p-16 justify-center flex-col gap-8 text-black font-semibold">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70} // Adjust this offset based on your header height
                onClick={toggleMenu}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-70} // Adjust this offset based on your header height
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70} // Adjust this offset based on your header height
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70} // Adjust this offset based on your header height
                onClick={toggleMenu}
              >
                Contact Me
              </Link>
            </li>
            <button
              className=" w-[150px] h-[50px] bg-black text-white flex items-center justify-center gap-2"
              onClick={downloadResume}
            >
              <span>Resume</span>
              <Image src={download} alt="resume donwload button" />
            </button>
          </ul>
          <Image
            src={cross}
            alt="burger menu close"
            width={40}
            height={40}
            className="absolute top-5 right-4 cursor-pointer"
            onClick={toggleMenu}
          />
        </nav>
      )}
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        {/* {isOpen ? (
          <Image src={cross} alt="burger menu close" width={40} height={40} />
        ) : (
          <Image
            src={burgerMenu}
            alt="burger menu open"
            width={40}
            height={40}
          />
        )} */}
        <Image src={burgerMenu} alt="burger menu open" width={40} height={40} />
      </div>
      <div className="hidden lg:block">
        <button
          className=" w-[150px] h-[50px] bg-black text-white flex items-center justify-center gap-2"
          onClick={downloadResume}
        >
          <span>Resume</span>
          <Image src={download} alt="resume donwload button" />
        </button>
      </div>
    </div>
  );
};

export default Header;
