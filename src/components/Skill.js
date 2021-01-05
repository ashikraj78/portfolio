import React from "react";
export default function Skill() {
  return (
    <section className="mb-16">
      <h2 className="mb-10 text-center text-3xl font-semibold">Skills</h2>
      <div className="flex justify-between">
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md">
          <div>
            <img src="/images/html.svg" alt="html" className="pl-4" />
            <p>HTML & CSS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md">
          <div>
            <img src="/images/sass.svg" alt="html" className="pl-4" />
            <p className="pl-4">SASS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md">
          <div>
            <img src="/images/tailwind.svg" alt="html" className="pl-4" />
            <p>TAILWIND CSS</p>
          </div>
        </div>
        <div className=" border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md">
          <div>
            <img src="/images/js.png" alt="html" className="pl-4" />
            <p>JAVASCRIPT</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md">
          <div>
            <img src="/images/reactjs.svg" alt="html" />
            <p>REACT JS</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md">
          <div>
            <img src="/images/nodejs.svg" alt="html" />
            <p>NODE JS</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md">
          <div>
            <img src="/images/mongodb.svg" alt="html" className="pl-4" />
            <p>MONGO DB</p>
          </div>
        </div>
        <div className="border-solid border border-black-900 h-44 w-1/5 flex justify-center items-center rounded-md">
          <div>
            <img src="/images/git.svg" alt="html" />
            <p className="pl-4">GIT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
