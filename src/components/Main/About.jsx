import React from "react";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row gap-3 mt-8">
       <div className="flex-shrink-0 w-80 mr-40 text-secondary uppercase text-right font-bold tracking-wide">
        BACKGROUND 👨‍💻
      </div>
      <div className="pt-16 pl-24 md:p-0 font-light w-full max-w-3xl">
        <p className="mb-10">
          Welcome to my portfolio! I hold a degree in Electronics and Communication Engineering from
          <a
            href="https://www.medicaps.ac.in/"
            className="text-white hover:text-secondary transition-all relative"
            target="_blank"
            rel="noreferrer"
          >
            Medi-Caps University
          </a>
          , Indore, and currently serve as a full-time Frontend Engineer at
          <a
            href="https://www.zuapp.co/"
            className="text-white hover:text-secondary transition-all"
            target="_blank"
            rel="noreferrer"
          >
            ZuAI
          </a>
          , where I initially interned for a year.
        </p>
        <p className="mb-10">
          As a passionate frontend developer, I thrive on exploring new frameworks and libraries. My recent focus has been on mastering Next.js and Typescript. My goal in web development is to craft visually stunning, responsive products that deliver a pixel-perfect user experience.
        </p>
        <p className="mb-10">
          Beyond coding, I find joy in immersing myself in books and engaging in online gaming. I also contribute as a web development mentor at the
          <a
            href="https://gdsc.community.dev/medi-caps-university-indore/"
            className="text-white hover:text-secondary transition-all relative"
            target="_blank"
            rel="noreferrer"
          >
            Google Developer Student Club
          </a>
          on my university campus. Join me on this journey as I continue to push the boundaries of web development and create innovative digital experiences.
        </p>
      </div>
    </section>
  );
}
