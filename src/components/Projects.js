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
    <section id="project" className="mb-10">
      <h2 className="mb-10 text-center font-semibold sheading ">Projects</h2>
      <div className="flex justify-between ">
        {languages.map((l) => (
          <li className="list-none ">
            <button
              onClick={() => handleClick(l.label)}
              className={`border-solid border border-gray-200 px-8 py-2 rounded-md font-mono lang_btn  ${
                l.checked ? "activeclass" : ""
              }`}
            >
              {l.label}
            </button>
          </li>
        ))}
      </div>
      <div className="flex flex-wrap justify-between mt-10">
        {filterProjects.map((proj) => (
          <div className="border-solid border border-gray-300 px-2 py-2 rounded-md singleproject mt-4 one_third bg-white project_display">
            <h3 className="text-xl font-semibold text-gray-500 text-center mb-8 mt-4">
              {proj.title}
            </h3>
            <img
              src={require(`../images/${proj.sku}.png`).default}
              alt="project"
            />
            <p className="text-gray-500 mb-1 mt-2 h-24 text-center ">
              {proj.details}
            </p>
            <div className="p_display">
              <div className=" justify-between mb-4 flex">
                {/* <button className="border-solid border border-gray-500 px-4 py-2 rounded-3xl">
                Preview
              </button> */}
                <a href={proj.website} target="_blank" rel="noreferrer">
                  <button className="border-solid border border-gray-200 px-8 py-2 rounded-md lang_btn font-mono">
                    Demo
                  </button>
                </a>
                <a href={proj.code} target="_blank" rel="noreferrer">
                  <button className="border-solid border border-gray-200 px-8 py-2 rounded-md lang_btn font-mono">
                    {/* <img src="/images/github.png" alt="github" /> */}
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
