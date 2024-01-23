import Image from "next/image";
import React from "react";
import colors from "../themes/colors";
import { projectData } from "../assets/data/data";
import readMore from "@/app/assets/images/readMore.svg";

const Projects = () => {
  return (
    <div className="w-full mt-20 bg-black text-white p-4 lg:p-10" id="projects">
      <h1 className=" text-center text-3xl lg:text-5xl">
        My <span className="font-bold">Projects</span>
      </h1>
      {projectData.map((data) => {
        return (
          <div
            className="flex flex-col items-center justify-center lg:flex-row mt-10"
            key={data.id}
          >
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={data.image}
                alt="project image"
                className="w-full lg:w-[80%]"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4 lg:gap-20">
              <h2 className="font-bold text-2xl lg:text-5xl">{data.id}</h2>
              <h3 className="font-bold text-2xl lg:text-4xl">{data.title}</h3>
              <p className="lg:w-[80%]" style={{ color: colors.zinc[500] }}>
                {data.desc}
              </p>
              <Image src={readMore} alt="read more" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
