import React from "react";
import Experience from "./Experience";
import { experienceObj } from "../../Data";
import { Fade } from "react-awesome-reveal";
export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="text-white  flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center  w-4/5">
        <div className="flex justify-center items-center w-full gap-8">
          <div className="h-px w-full border  border-slate-400"></div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Experience</h1>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <Fade direction="up" triggerOnce={true}>
            {experienceObj.map((experience, index) => (
              <Experience key={index} {...experience} />
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
}
