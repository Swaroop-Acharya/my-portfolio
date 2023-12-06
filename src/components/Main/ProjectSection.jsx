import React from "react";
import { Fade } from "react-awesome-reveal";
import { projectsObj } from "../../Data";
import Projects from "./Projects";
export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="text-white flex flex-col justify-center items-center gap-1"
    >
      <div className="flex flex-col justify-center items-center gap-1  w-4/5">
        <div className="flex justify-center items-center w-full gap-8">
          <div className="h-px w-full border  border-slate-400"></div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
          </div>
        </div>
        <div className="project_container mt-9">
          <Fade direction="up" triggerOnce={true}>
            {projectsObj.map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
}
