import { Fade } from "react-awesome-reveal";
import React from "react";
import { collegeLink, companyLink } from "@/Data";
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

        <div className="text-base font-light mt-16 mb-10  w-full max-w-[60ch] md:max-w-[80ch] lg:max-w-[100ch] text-justify">
          <Fade direction="up" triggerOnce={true}>
            <div>
              <p className="mb-10 ">
                Welcome to my portfolio! I hold a degree in Information Science
                and Engineering from{" "}
                <a
                  href={collegeLink}
                  className="text-white font-bold hover:text-secondary hover:underline transition-all relative"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sahyadri College of Engineering and Management
                </a>
                , Mangalore. I've successfully built <span className="font-bold">over 30 freelance projects </span> 
                for clients both <span className="font-bold">onshore and offshore </span> , delivering top-notch solutions
                every time.
              </p>
              <p className="mb-10">
                I am currently working
                as a Software Engineer Trainee @{" "}
                <a
                  href={companyLink}
                  className="text-white font-bold hover:text-secondary hover:underline transition-all relative"
                  target="_blank"
                  rel="noreferrer"
                >
                  illumifin India
                </a>{" "}
                belongs to{" "}
                <span className="font-bold">
                  Health Annuity and Lifecare (HAL)
                </span>{" "}
                Software Team.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
