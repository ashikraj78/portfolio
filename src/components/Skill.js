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
      <h2 className="mb-10 text-center font-semibold sheading ">Skills</h2>
      <div className="flex justify-between">
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={HTMLImg} alt="html" className="pl-4" />
            <p className="font-mono">HTML & CSS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={SASSImg} alt="html" className="pl-4" />
            <p className="pl-4 font-mono">SASS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={TailwindImg} alt="html" className="pl-4" />
            <p className="font-mono">TAILWIND CSS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={JSImg} alt="html" className="pl-4" />
            <p className="font-mono">JAVASCRIPT</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={ReactImg} alt="html" />
            <p className="font-mono">REACT JS</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={NodeImg} alt="html" />
            <p className="font-mono">NODE JS</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={MonoImg} alt="html" className="pl-4" />
            <p className="font-mono">MONGO DB</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src={GitImg} alt="html" />
            <p className="pl-4 font-mono">GIT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
