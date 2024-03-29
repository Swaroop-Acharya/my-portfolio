import { Fade } from "react-awesome-reveal";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="text-white flex flex-col justify-center items-center gap-1 mt-12 "
    >
      <div className="flex flex-col justify-center items-center   w-4/5">
        <div className="flex justify-center items-center w-full  gap-8">
          <div className="text-3xl md:text-5xl font-bold">About</div>
          <div className="h-px w-full border border-slate-400"></div>
        </div>

        <div className="text-base font-light m-8  w-full max-w-[60ch] md:max-w-[80ch] lg:max-w-[100ch] text-justify">
          <Fade direction="up" triggerOnce={true}>
            <div>
              <p className="mb-10 ">
                Welcome to my portfolio! I hold a degree in Information Science
                and Engineering from{" "}
                <a
                  href="https://sahyadri.edu.in/"
                  className="text-white hover:text-secondary transition-all relative"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sahyadri College of Engineering and Management
                </a>
                , Mangalore, and currently looking for oppertunities , where I
                initially interned at LTIMindtree for 3 Months.
              </p>
              <p className="mb-10">
                As a passionate Developer, I thrive on exploring new frameworks
                and libraries. My recent focus has been on mastering MERN Stack.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
