import React from "react";
import Picture from "../images/picture2.jpg";

export default function About() {
  return (
    <div id="about">
      <h2 className="mt-10 mb-10 text-center font-semibold sheading text-3xl sm:text-5xl ">
        About me
      </h2>
      <div className="sm:flex justify-between">
        <div className="sm:w-3/6 text-gray-700">
          <p className="mb-4 pt-1">
            An architect turned web developer. A graduate of School of Planning
            and Architecture, Bhopal, I’ve spent 7+ years learning and applying
            architecture and design thinking.
          </p>
          <p className="mb-4 pt-1">
            My projects as an architect include giving a modern interpretation
            to a ruined fort in Rajasthan to transforming an urban sewage
            wasteland in Gurgaon into an award winning park, used by thousands
            everyday.
          </p>
          <p className="mb-4">
            I’m now excited to apply my understanding of form and functionality
            to my new canvas,{" "}
            <span className="text-gray-900 italic">the web</span> .
          </p>
          {/* <p className="mb-4">
            Shortly after graduating from School of Planning and Architecture
            Bhopal, I worked as an interior designer where I work on a wide
            variety of interesting and meaningful projects on a daily basis.
          </p> */}
        </div>

        <img
          src={Picture}
          alt="profilep/ic"
          className="w-7/12  sm:w-2/6 border-solid border border-gray-500 rounded-md profilepic"
        />
      </div>
    </div>
  );
}
