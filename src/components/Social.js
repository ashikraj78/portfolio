import React from "react";

export default function Social() {
  return (
    <section className="flex justify-between ">
      <div className="fixed left-12 bottom-0 ">
        <div className="mb-4 opacity-60 w-5/6 smicon">
          <a href="https://github.com/ashikraj78" target="_blank">
            <img src="/images/github2.png" alt="github" />
          </a>
        </div>
        <div className="mb-4 opacity-60 w-5/6 smicon">
          <a href="https://www.instagram.com/_ashikraj/" target="_blank">
            <img src="/images/instagram.png" alt="instagram" />
          </a>
        </div>
        <div className="mb-4 opacity-60 w-5/6 smicon">
          <a href="https://twitter.com/_ashikraj" target="_blank">
            <img src="/images/twitter.png" alt="twitter" />
          </a>
        </div>
        <div className="mb-4 opacity-60 w-5/6 smicon">
          <a
            href="https://www.linkedin.com/in/ashik-raj-43aa5769/"
            target="_blank"
          >
            <img src="/images/linkedin.png" alt="linkedin" />
          </a>
        </div>
        <div className=" border-l-2 border-black h-24 w-1 ml-3 opacity-60  "></div>
      </div>
      <div className="fixed right-12 bottom-0  ">
        <div>
          <a
            href="mailto:ashikraj.78@gmail.com"
            className="mail mb-4 pt-1 font-mono opacity-60  text-sm smicon"
          >
            ashikraj.78@gmail.com
          </a>
        </div>
        <div className=" border-l-2 border-black h-24 w-1 ml-3  opacity-60 "></div>
      </div>
    </section>
  );
}
