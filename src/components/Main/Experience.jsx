// Experience.jsx

import React from "react";

export default function Experience({ company, position, location, duration, description, techStack }) {
  return (
    <div className="flex flex-col md:justify-center md:items-center">
      <div className="flex flex-col w-9/12 mt-5 border-b border-[#232323] ">
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-lg">{company}</p>
            <p className="font-light text-sm text-slate-400">{position}</p>
          </div>
          <div>
            <p className="font-light text-sm">{duration}</p>
            <p className="font-light text-sm">{location}</p>
          </div>
        </div>
        <div className="text-justify mt-2">{description}</div>
        <div className="flex w-full gap-2 m-4 flex-wrap">
          {techStack.map((tech, index) => (
            <span key={index} className="text-xs block bg-white text-black py-1 px-4 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
