import React from "react";
import Experience from "./Experience";
import { experienceObj } from "../../Data";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-9/12 gap-8">
        <div className="text-5xl font-bold">Experience</div>
        <div className="h-px w-full border border-[#ebecf3]"></div>
      </div>
    
      {experienceObj.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
    </section>
  );
}
