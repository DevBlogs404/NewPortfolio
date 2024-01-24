import React from "react";
import Image from "next/image";
import { skillData } from "../assets/data/data";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element className="w-full mt-10 p-4 lg:p-10 lg:mt-20" name="skills">
      <h1 className=" text-center text-3xl lg:text-5xl">
        My <span className="font-bold">Skills</span>
      </h1>
      <div className=" flex flex-wrap w-full items-center justify-evenly md:justify-center lg:justify-center gap-4 mt-10">
        {skillData.map((skill) => {
          return (
            <div
              className="border-black border-2 h-[120px] w-[120px] rounded-md flex flex-col items-center justify-center gap-4"
              key={skill.id}
            >
              <Image src={skill.icon} alt="git" className="w-[40px] h-[40px]" />
              <span className="font-bold capitalize">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </Element>
  );
};

export default Skills;
