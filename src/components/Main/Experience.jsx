// Experience.jsx

import React from "react";

export default function Experience({ company, position, location, duration, description, techStack }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-9/12 mt-5 border-b border-[#232323] ">
        <div className="flex justify-between">
          <div>
            <p>{company}</p>
            <p>{position}</p>
          </div>
          <div>
            <p>{duration}</p>
            <p>{location}</p>
          </div>
        </div>
        <div className="text-align">{description}</div>
        <div>
          {techStack.map((tech, index) => (
            <span key={index} className="text-xs bg-background-light py-1 px-4 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
