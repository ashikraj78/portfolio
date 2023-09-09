import React from "react";
import Picture from "../images/profile_photo.jpg";

export default function About() {
  return (
    <div id="about">
      <h2 className="mt-10 mb-10 text-center font-semibold sheading text-3xl sm:text-5xl ">
        About me
      </h2>
      <div className="sm:flex justify-between">
        <div className="sm:w-4/6 text-gray-700">
          <p className="mb-4 pt-1">
            Blending my affinity for design with a deep-rooted passion for
            coding, I’ve spent the last 3 years bringing vibrant ideas to life
            on the digital landscape. My journey, which began with the
            conceptual elegance of spatial designs, has evolved into a love
            story with the MERN stack. In this realm, I don't just code; I
            sculpt, paint, and weave narratives.
          </p>
          <p className="mb-4 pt-1">
            Front-end design is where my heart truly sings. Here, I bridge the
            art of visual appeal with the science of functionality, ensuring
            that users don't just visit websites but experience them.
          </p>
          <p className="mb-4">
            Across diverse projects, I’ve donned multiple hats - from creating
            intuitive applications and refining user interfaces to optimizing
            performance and making each interaction memorable. As the digital
            world constantly evolves, so does my commitment to learning,
            growing, and innovating.
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
          className="w-7/12  sm:w-3/12 border-solid shadow border-gray-500 rounded-md profilepic"
        />
      </div>
    </div>
  );
}
