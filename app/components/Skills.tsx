import React from "react";
import Image from "next/image";
import { skillData } from "../assets/data/data";

const Skills = () => {
  return (
    <div className="w-full mt-20 p-4 lg:p-10" id="skills">
      <h1 className=" text-center text-3xl lg:text-5xl">
        My <span className="font-bold">Skills</span>
      </h1>
      <div className=" flex flex-wrap items-center justify-around gap-4 mt-10">
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
    </div>
  );
};

export default Skills;
