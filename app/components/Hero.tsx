import React from "react";
import banner from "@/app/assets/images/banner.png";
import facebook from "@/app/assets/images/facebook.svg";
import discord from "@/app/assets/images/discord.svg";
import reddit from "@/app/assets/images/reddit.svg";
import twitter from "@/app/assets/images/twitter.svg";
import Image from "next/image";
import colors from "../themes/colors";

const Hero = () => {
  return (
    <div className=" p-4 lg:p-10 lg:relative mt-10" id="#about">
      <div className="container flex flex-col gap-4  lg:flex-row-reverse">
        <Image src={banner} alt="banner" className="w-full mx-auto" />
        <div className="w-full mx-auto flex flex-col gap-2 lg:justify-center">
          <div className="text-black text-2xl font-medium lg:text-4xl">
            Hello I am{" "}
            <span className="font-bold text-3xl ml-2 lg:text-5xl">
              Shubham Hooda.
            </span>
          </div>
          <div className="text-2xl font-bold lg:text-4xl ">
            {" "}
            Frontend
            <span
              className="text-4xl ml-4 lg:text-6xl"
              style={{
                color: "white",
                letterSpacing: "2px",
                textShadow:
                  "1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
              }}
            >
              Developer
            </span>{" "}
          </div>
          <div className="text-2xl lg:text-4xl">
            Based in{" "}
            <span className="font-bold text-4xl ml-4 lg:text-5xl">India.</span>
          </div>
          <p className="text-lg mt-4" style={{ color: colors.zinc[500] }}>
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
      </div>
      <div className="socials flex items-center justify-start gap-4 mt-6 lg:absolute lg:-bottom-6">
        <div className="w-14 h-14 border-black border-2 rounded-md flex items-center justify-center bg-black ">
          <Image src={facebook} alt="facebook" />
        </div>
        <div className="w-14 h-14 border-black border-2 rounded-md flex items-center justify-center">
          <Image src={reddit} alt="facebook" />
        </div>
        <div className="w-14 h-14 border-black border-2 rounded-md flex items-center justify-center">
          <Image src={discord} alt="facebook" />
        </div>
        <div className="w-14 h-14 border-black border-2 rounded-md flex items-center justify-center ">
          <Image
            src={twitter}
            alt="twitter"
            // className="opacity-0 hover:opacity-100 transition ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
