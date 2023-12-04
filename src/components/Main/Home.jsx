import React from "react";
import Button from "../Button";
import "./home.css";
import { GitHub, LinkedIn } from "@mui/icons-material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Home() {
  return (
    <section className="gap-10 mt-12 md:mt-0 text-white home md:gap-20 flex md:flex-row flex-col text-center justify-center items-center-full mx-auto px-2 md:flex place-items-center ">
      <div className="drop-in">
        <img

          className=" w-40 h-40 md:w-80 md:h-80 rounded-full"
          src="/Profile.JPG"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-7 w-96">
        <div className="flex flex-col gap-4">
          <p className="font-semibold drop-in-2">Hello, I'm</p>
          <h1 className="text-3xl md:text-5xl font-semibold drop-in-2">Swaroop</h1>
          <h1 className="font-semibold drop-in-2">Software Developer</h1>
        </div>
        <div className="flex justify-center items-center gap-3 drop-in-2">
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
            link="https://drive.google.com/file/d/116W19JOl4FjzhpMFPXicJX216-eCQARn/view?usp=drive_link"
          />
          <Button title="Contact Me" logo="" link="#about" />
        </div>
        <div className="flex justify-center items-center gap-5 drop-in-2">
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
      <div>
       <KeyboardDoubleArrowDownIcon/>
      </div>
    </section>
  );
}
