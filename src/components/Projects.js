import React, { useState } from "react";
import { projects } from "../projects.json";
export default function Projects() {
  const [filterProjects, setFrilterProjects] = useState(projects);
  let [languages, setLanguages] = useState(
    [
      ...new Set(projects.map((project) => project.language).flat()),
    ].map((lang) => ({ label: lang, checked: false }))
  );
  function handleClick(lang) {
    let showProjects = projects.filter((pro) => pro.language.includes(lang));
    setFrilterProjects(showProjects);

    let clickedLanguages = languages.map((singleLanguage) => {
      if (singleLanguage.label === lang) {
        return { ...singleLanguage, checked: !singleLanguage.checked };
      } else {
        return { ...singleLanguage, checked: false };
      }
      return singleLanguage;
    });
    setLanguages(clickedLanguages);
  }
  return (
    <section className="mb-10">
      <h2 className="mb-10 text-center text-3xl font-semibold">Projects</h2>
      <div className="flex justify-between ">
        {languages.map((l) => (
          <li className="list-none ">
            <button
              onClick={() => handleClick(l.label)}
              className={`border-solid border border-black px-10 py-2 rounded-md ${
                l.checked ? "activeclass" : ""
              }`}
            >
              {l.label}
            </button>
          </li>
        ))}
      </div>
      <div className="flex flex-wrap justify-between">
        {filterProjects.map((proj) => (
          <div className="border-solid border border-black-500 px-10 py-2 rounded-md singleproject mt-4 ">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6 mt-6">
              {proj.title}
            </h3>
            <img src={`/images/${proj.sku}.png`} alt="project" />
            <p className="text-gray-500 mb-4 mt-4 h-24 text-center ">
              {proj.details}
            </p>
            <div className="flex justify-between mb-4">
              {/* <button className="border-solid border border-gray-500 px-4 py-2 rounded-3xl">
                Preview
              </button> */}
              <a href={proj.website} target="_blank">
                <button className="border-solid border border-gray-500 px-8 py-2 rounded-md">
                  Demo
                </button>
              </a>
              <a href={proj.code} target="_blank">
                <button className="border-solid border border-gray-500 px-8 py-2   rounded-md">
                  {/* <img src="/images/github.png" alt="github" /> */}
                  Code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
