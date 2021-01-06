import React from "react";
import LogoImg from "../images/logo3.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <img src={LogoImg} alt="logo" />
      </div>
      <section className="font-mono">
        <a className="pr-6" href="#about">
          About
        </a>
        <a className="pr-6" href="#skills">
          Skills
        </a>
        <a className="pr-6" href="#project">
          Projects
        </a>
        <a className="pr-6" href="#contact">
          Contact
        </a>
        <a
          href="https://github.com/ashikraj78/portfolio/raw/master/public/Ashik_Raj_Resume.pdf"
          className="border-solid border border-gray-200 px-6 py-2 rounded-md lang_btn"
        >
          Resume
        </a>
      </section>
    </nav>
  );
}
