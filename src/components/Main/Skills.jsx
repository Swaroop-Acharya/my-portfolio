import React from "react";
import { Fade } from "react-awesome-reveal";
export default function Skills() {
  return (
    <section
      id="skills"
      className="flex text-white flex-col justify-center items-center gap-1"
    >
      <div className="flex flex-col justify-center items-center gap-1  w-4/5">
        <div className="flex justify-center items-center w-full gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Skills</h1>
          </div>
          <div className="h-px w-full border  border-slate-400"></div>
        </div>

        <div className="flex flex-wrap justify-between mt-10 mb-10">
          <Fade direction="up" triggerOnce={true}>
            <div className="mb-6 flex-1 min-w-[150px]">
              <div className="font-bold mb-4">LANGUAGES</div>
              <ul>
                <li className="mb-2 text-base font-normal leading-6">
                 Java
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                  HTML/CSS
                </li>
                <li className="mb-2 text-base font-normal leading-6">Python</li>
                <li className="mb-2 text-base font-normal leading-6">SQL</li>
                <li className="mb-2 text-base font-normal leading-6">C/C++</li>
                <li className="mb-2 text-base font-normal leading-6">PHP</li>
              </ul>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce={true}>
            <div className="mb-6 flex-1 min-w-[150px]">
              <div className="font-bold mb-4">TOOLS</div>
              <ul>
                <li className="mb-2 text-base font-normal leading-6">
                  Git & Github
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                 Jira
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                  PhpMyAdmin
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                  Firebase
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                 BitBucket
                </li>
              </ul>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce={true}>
            <div className="mb-6 flex-1 min-w-[150px]">
              <div className="font-bold mb-4">Database</div>
              <ul>
                <li className="mb-2 text-base font-normal leading-6">
                  MySQL
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                  MongoDB
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                  MS SQL
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                  Fire store
                </li>
                
              </ul>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce={true}>
            <div className="mb-6 flex-1 min-w-[150px]">
              <div className="font-bold mb-4">FRAMEWORKS/LIBRARIES</div>
              <ul>
                <li className="mb-2 text-base font-normal leading-6">React</li>
                <li className="mb-2 text-base font-normal leading-6">
                  Express
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                  ShadCN
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                  Material-UI
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                  Chakra-UI
                </li>
                <li className="mb-2 text-base font-normal leading-6">
                  Bootstrap
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
