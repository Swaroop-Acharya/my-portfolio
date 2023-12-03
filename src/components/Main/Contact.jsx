import React from "react";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import SendBtn from "../SendBtn";



export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center gap-1">
      <div className="flex flex-col justify-center items-center gap-1  w-4/5">
        <div className="flex justify-center items-center w-full gap-8">
          <div className="text-3xl md:text-5xl font-bold">Contact</div>
          <div className="h-px w-full border  border-slate-400"></div>
        </div>
        <div className="flex mt-5 justify-center flex-col items-center gap-4">
          <p className="max-w-[60ch] text-center font-light">
            Whether you are starting a project, have business inquiries or just
            want to say hi, my inbox is always open so feel free to reach out
            and I will get back to you as soon as possible.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://github.com/Swaroop-Acharya"
              className="block"
              target="__blank"
            >
              <GitHub sx={{ fontSize: 35 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/swaroop-acharya-55b8b5223/"
              target="__blank"
              className="block"
            >
              <LinkedIn sx={{ fontSize: 38 }} />
            </a>
            <a href="https://twitter.com/swaroopcodes" target="__blank">
              <img src="/X.png" alt="twitter" className="w-7  h-7" />
            </a>
            <a href="mailto:swaroopa802@gmail.com" className="block" target="__blank">
              <Email sx={{ fontSize: 38 }} />
            </a>
          </div>
         <div>
            <SendBtn/>
         </div>
        </div>
      </div>
    </section>
  );
}
