import Image from "next/image";
import React from "react";
import colors from "../themes/colors";
import { projectData } from "../assets/data/data";
import readMore from "@/app/assets/images/readMore.svg";
import { Element } from "react-scroll";
import Link from "next/link";

const Projects = () => {
  return (
    <Element
      className="w-full mt-10 lg:mt-20 bg-black text-white p-4 lg:p-10"
      name="projects"
    >
      <h1 className=" text-center mt-4 text-3xl lg:text-5xl">
        My <span className="font-bold">Projects</span>
      </h1>
      {projectData.map((data) => {
        return (
          <div
            className="flex  flex-col items-center justify-center gap-4 lg:flex-row mt-10"
            key={data.id}
          >
            <div className="flex-1 flex items-center justify-center overflow-hidden rounded-md">
              <Link href={data.url} target="_blank">
                <Image
                  src={data.image}
                  alt="project image"
                  // className="w-full h-auto object-contain
                  //   rounded-md lg:w-[90%] "
                  className="w-full h-auto object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <h2 className="font-bold text-2xl md:text-3xl">{data.id}</h2>
              <h3 className="font-bold text-2xl md:text-4xl">{data.title}</h3>
              <p className="lg:w-[80%]" style={{ color: colors.zinc[500] }}>
                {data.desc}
              </p>
              <Link href={data.url} target="_blank">
                <Image src={readMore} alt="read more" />
              </Link>
            </div>
          </div>
        );
      })}
    </Element>
  );
};

export default Projects;
