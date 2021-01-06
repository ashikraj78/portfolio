import React from "react";
export default function Skill() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="mb-10 text-center font-semibold sheading ">Skills</h2>
      <div className="flex justify-between">
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src="/images/html.svg" alt="html" className="pl-4" />
            <p className="font-mono">HTML & CSS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src="/images/sass.svg" alt="html" className="pl-4" />
            <p className="pl-4 font-mono">SASS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src="/images/tailwind.svg" alt="html" className="pl-4" />
            <p className="font-mono">TAILWIND CSS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src="/images/js.png" alt="html" className="pl-4" />
            <p className="font-mono">JAVASCRIPT</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src="/images/reactjs.svg" alt="html" />
            <p className="font-mono">REACT JS</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src="/images/nodejs.svg" alt="html" />
            <p className="font-mono">NODE JS</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src="/images/mongodb.svg" alt="html" className="pl-4" />
            <p className="font-mono">MONGO DB</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md bg-white">
          <div>
            <img src="/images/git.svg" alt="html" />
            <p className="pl-4 font-mono">GIT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
