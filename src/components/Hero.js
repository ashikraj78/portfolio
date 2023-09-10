import React from "react";

export default function Hero() {
  return (
    <div className="pt-8 sm:pt-10 h-full">
      <p className="font-mono">Hi, my name is</p>
      <h1 className="text-2xl sm:text-7xl font-sans font-black pb-2  sm:pb-5 pt-2 sm:pt-8 text-gray-800">
        Ashik Raj.
      </h1>
      <h1 className="text-2xl sm:text-7xl font-sans font-bold pb-2 sm:pb-8 text-gray-700">
        I turn ideas into web magic.
      </h1>
      <div>
        <h3 className="sm:w-4/6">
          Hello World ! From the peaceful nooks of Dharamshala, India, I pour my
          heart into web development. Crafting websites and applications isn't
          just my job; it's a piece of who I am. I find joy in turning lines of
          code into vibrant digital stories. Come, let's share this journey!
        </h3>
      </div>
      <div className="mt-4 sm:mt-10">
        <a
          href="mailto:ashikraj.78@gmail.com"
          className="border-solid border border-gray-200 px-4 py-2 sm:px-8 sm:py-4 rounded-md inline-block font-mono large_btn "
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
