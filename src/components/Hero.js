import React from "react";

export default function Hero() {
  return (
    <div id="about" className="pt-8 sm:pt-10 mb-4">
      <p className="font-mono">Hi, my name is</p>
      <h1 className="text-2xl sm:text-7xl font-sans font-black pb-2  sm:pb-5 pt-2 sm:pt-8 text-gray-800">
        Ashik Raj.
      </h1>
      <h1 className="text-2xl sm:text-7xl font-sans font-bold pb-2 sm:pb-8 text-gray-700">
        I build things for the web.
      </h1>
      <h3 className="sm:w-3/6">
        I'm a software engineer based in Dharamashala, India specializing in
        building (and occasionally designing) exceptional websites,
        applications, and everything in between.
      </h3>
      <div className="mt-4 sm:mt-10">
        <a
          href="mailto:ashikraj.78@gmail.com"
          className="border-solid border border-gray-200 px-4 py-2 sm:px-8 sm:py-4 rounded-md inline-block font-mono large_btn"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
