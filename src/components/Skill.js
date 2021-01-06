import React from "react";
import HTMLImg from "../images/html.svg";
import SASSImg from "../images/sass.svg";
import TailwindImg from "../images/tailwind.svg";
import JSImg from "../images/js.png";
import ReactImg from "../images/reactjs.svg";
import NodeImg from "../images/nodejs.svg";
import MonoImg from "../images/mongodb.svg";
import GitImg from "../images/git.svg";

export default function Skill() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="mb-10 mt-10 text-center font-semibold sheading text-3xl sm:text-5xl ">
        Skills
      </h2>
      <div className="flex justify-between">
        <div className="border-solid border border-black-900 h-28 p-2 sm:p-0 sm:h-44 w-1/4 sm:w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={HTMLImg} alt="html" className="sm:pl-4" />
            <p className="font-mono text-xs sm:text-base">HTML & CSS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-28 p-2 sm:p-0 sm:h-44 sm:w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={SASSImg} alt="html" className="sm:pl-4" />
            <p className="sm:pl-4 font-mono text-xs sm:text-base">SASS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-28 p-2 sm:p-0 sm:h-44 w-1/4 sm:w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={TailwindImg} alt="html" className="sm:pl-4" />
            <p className="font-mono text-xs sm:text-base">TAILWIND CSS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-28 p-2 sm:p-0 sm:h-44 w-1/4 sm:w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={JSImg} alt="html" className="sm:pl-4" />
            <p className="font-mono text-xs sm:text-base">JAVASCRIPT</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-1 sm:mt-8">
        <div className="border-solid border border-black-900 h-28 p-2 sm:p-0 sm:h-44 sm:w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={ReactImg} alt="html" />
            <p className="font-mono text-xs sm:text-base">REACT JS</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-28 p-2 sm:p-0 sm:h-44 sm:w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={NodeImg} alt="html" />
            <p className="font-mono text-xs sm:text-base">NODE JS</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-28 p-2 sm:p-0 sm:h-44  sm:w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={MonoImg} alt="html" className="sm:pl-4" />
            <p className="font-mono text-xs sm:text-base">MONGO DB</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-28 p-2 sm:p-0 sm:h-44 sm:w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={GitImg} alt="html" />
            <p className="pl-4 font-mono text-xs sm:text-base">GIT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
