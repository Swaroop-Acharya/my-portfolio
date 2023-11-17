import React from "react";
import Button from "../Button";

export default function About() {
  return (
    <section className=" gap-10 md:gap-20 flex md:flex-row flex-col mt-20 text-center justify-center items-center-full mx-auto px-2 md:flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-black before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <div>
        <img
          loading="lazy"
          className=" w-40 h-40 md:w-80 md:h-80 rounded-full"
          src="/Profile.JPG"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-7 w-96">
        <div className="flex flex-col gap-4">
          <p className="font-semibold">Hello, I'm</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Swaroop</h1>
          <h1 className="font-semibold">
           Frontend Developer
          </h1>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Button
            title="Resume"
            logo={
              <svg
                class="fill-current inline w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
            }
          />
          <Button title="Contact Me" logo="" />
        </div>
      </div>
    </section>
  );
}
