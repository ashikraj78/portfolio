import React from "react";
import LogoImg from "../images/logo3.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-10">
      <a href="/">
        <img src={LogoImg} alt="logo" />
      </a>
      <section className="font-mono  ">
        <a className="pr-6 navi hidden sm:inline" href="#about">
          About
        </a>
        <a className="pr-6 navi hidden sm:inline" href="#skills">
          Skills
        </a>
        <a className="pr-6 navi hidden sm:inline" href="#project">
          Projects
        </a>
        <a className="pr-6 navi hidden sm:inline" href="#contact">
          Contact
        </a>
        <a
          href="https://github.com/ashikraj78/portfolio/raw/master/public/Ashik_Raj_Resume.pdf"
          className="border-solid border border-gray-200 px-3 sm:px-6 py-2 rounded-md lang_btn navi"
        >
          Resume
        </a>
      </section>
    </nav>
  );
}
