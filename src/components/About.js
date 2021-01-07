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
            Hello! I'm Ashik Raj , a full-stack Web Application Developer ({" "}
            <strong>MERN</strong> ) currently living in Dharamashala, India.
          </p>
          <p className="mb-4">
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>
          <p className="mb-4">
            Shortly after graduating from School of Planning and Architecture
            Bhopal, I worked as an interior designer where I work on a wide
            variety of interesting and meaningful projects on a daily basis.
          </p>
        </div>
        <img
          src={Picture}
          alt="profilep/ic"
          className="w-7/12 sm:w-3/12 border-solid border border-gray-500 rounded-md"
        />
      </div>
    </div>
  );
}
