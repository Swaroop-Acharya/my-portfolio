import React from "react";
import "./style.css";

export default function Header() {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  return (
    <header className="fixed backdrop-blur-md z-50 w-full mx-auto flex flex-col align-middle drop-in">
      <nav className="desktop-nav  justify-around items-center my-6 md:flex hidden ">
        <div className="text-white logo text-2xl md:text-3xl hover:cursor-default">
          Swaroop
        </div>
        <div>
          <ul className="nav-links text-white flex gap-8 list-none text-2xl">
            <li>
              <a
                className="transition-all duration-300 ease hover:text-gray-500 hover:underline hover:underline-offset-8 "
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300 ease hover:text-gray-500 hover:underline hover:underline-offset-8 "
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300 ease hover:text-gray-500 hover:underline hover:underline-offset-8 "
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300 ease hover:text-gray-500 hover:underline hover:underline-offset-8 "
                href="#projects"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="  hamburger-nav flex justify-between mt-5 mb-5 ml-6 mr-9 items-center md:hidden">
        <div className=" text-white text-2xl hover:cursor-default logo">
          Swaroop
        </div>
        <div className="hamburger-menu  inline-block">
          <div
            className="hamburger-icon flex flex-col justify-between h-6 w-8 cursor-pointer"
            onClick={toggleMenu}
          >
            <span className="w-full h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
            <span className=" w-full h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
            <span className=" w-full h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
          </div>
          <div className="menu-links menu-links absolute top-full right-0 bg-white w-max max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
            <li className="list-none">
              <a
                className="block p-2.5  text-center text-2xl no-underline transition-all duration-300 ease-in-out"
                href="#about"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li className="list-none">
              <a
                className="block p-2.5  text-center text-2xl no-underline transition-all duration-300 ease-in-out"
                href="#experience"
                onClick={toggleMenu}
              >
                Experience
              </a>
            </li>
            <li className="list-none">
              <a
                className="block p-2.5  text-center text-2xl no-underline transition-all duration-300 ease-in-out"
                href="#skills"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li className="list-none">
              <a
                className="block p-2.5  text-center text-2xl no-underline transition-all duration-300 ease-in-out"
                href="#projects"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
}
