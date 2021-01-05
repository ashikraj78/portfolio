import React from "react";

export default function Hero() {
  return (
    <div className=" pt-10 mb-4">
      <p>Hi, my name is</p>
      <h1 className="text-7xl font-sans font-black pb-5 pt-8">Ashik Raj.</h1>
      <h1 className="text-7xl font-sans font-bold pb-8">
        I build things for the web.
      </h1>
      <h3 className="w-3/6">
        I'm a software engineer based in Dharamashala, India specializing in
        building (and occasionally designing) exceptional websites,
        applications, and everything in between.
      </h3>
      <div className="mt-10">
        <a
          href="mailto:ashikraj.78@gmail.com"
          className="border-solid border border-black px-10 py-4 rounded-md inline-block"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
