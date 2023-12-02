import React from "react";
import Experience from "./Experience";
import { experienceObj } from "../../Data";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center m-3 w-4/5">
        <div className="flex justify-center items-center w-full  gap-8">
          <div className="text-3xl md:text-5xl font-bold">Experience</div>
          <div className="h-px w-full border  border-slate-400"></div>
        </div>

        {experienceObj.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>
    </section>
  );
}
