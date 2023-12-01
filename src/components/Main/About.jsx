import React from "react";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row gap-1 p-7 mt-8">
       <div className="flex-shrink-0 w-80 mr-40 text-secondary uppercase md:text-right font-bold tracking-wide">
        BACKGROUND 👨‍💻
      </div>
      <div className= "font-light w-full max-w-3xl text-justify">
        <p className="mb-10 ">
          Welcome to my portfolio! I hold a degree in Information Science and Engineering from 
          {' '}
          <a
            href="https://sahyadri.edu.in/"
            className="text-white hover:text-secondary transition-all relative"
            target="_blank"
            rel="noreferrer"
          >
          Sahyadri College of Engineering and Management
          </a>
          , Mangalore, and currently looking for oppertunities
         
           
         
          , where I initially interned at LTIMindtree for 3 Months.
        </p>
        <p className="mb-10">
          As a passionate Developer, I thrive on exploring new frameworks and libraries. My recent focus has been on mastering MERN Stack. 
        </p>
       
      </div>
    </section>
  );
}
