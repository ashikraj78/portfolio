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
            At heart, I'm a coder who has an intense love for design. The last 3
            years of my life have been a deep dive into the world of coding,
            where I've taken vibrant ideas and brought them to life on the
            digital canvas. My foundations might be in spatial design, but
            today, my enthusiasm truly lies with the MERN stack. When I dive
            into code, I see more than just algorithms and logic; I see it as a
            symphony where every line, every command, has a purpose.
          </p>
          <p className="mb-4 pt-1">
            Coding, for me, isn’t just a profession; it’s a passion. And it's in
            front-end design that this passion finds its fullest expression. I
            take immense pride in blending aesthetics with functionality,
            ensuring that users aren’t just browsing a website, but living an
            experience.
          </p>
          <p className="mb-4">
            Throughout my journey across various projects, I’ve not only
            enhanced visual interfaces but also refined the code beneath,
            ensuring the best performance. The world of coding offers endless
            horizons, and I’m always eager to explore, learn, and innovate.
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
