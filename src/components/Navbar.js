import React from "react";
import LogoImg from "../images/logo3.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-10">
      <div>
        <img src={LogoImg} alt="logo" />
      </div>
      <section className="font-mono  hidden sm:block">
        <a className="pr-6 navi" href="#about">
          About
        </a>
        <a className="pr-6 navi" href="#skills">
          Skills
        </a>
        <a className="pr-6 navi" href="#project">
          Projects
        </a>
        <a className="pr-6 navi" href="#contact">
          Contact
        </a>
        <a
          href="https://github.com/ashikraj78/portfolio/raw/master/public/Ashik_Raj_Resume.pdf"
          className="border-solid border border-gray-200 px-6 py-2 rounded-md lang_btn navi"
        >
          Resume
        </a>
      </section>
    </nav>
  );
}
