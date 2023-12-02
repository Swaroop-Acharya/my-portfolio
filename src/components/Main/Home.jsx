import React from "react";
import Button from "../Button";
import "./home.css";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

export default function Home() {
  return (
    <section className="gap-10 home md:gap-20 flex md:flex-row flex-col text-center justify-center items-center-full mx-auto px-2 md:flex place-items-center ">
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
          <h1 className="font-semibold">Software Developer</h1>
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
        <div className="flex justify-center items-center gap-5">
          <a href="https://github.com/Swaroop-Acharya" target="__blank">
            <GitHub sx={{ fontSize: 35 }} />
          </a>
          <a href="https://www.linkedin.com/in/swaroop-acharya-55b8b5223/"  target="__blank">

          <LinkedIn sx={{ fontSize: 38 }} />
          </a>
          <a href="https://twitter.com/swaroopcodes"  target="__blank">
            <img src="/X.png" alt="twitter" className="w-7 h-7" />


          </a>
        </div>
      </div>
    </section>
  );
}
