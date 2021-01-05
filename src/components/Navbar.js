import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <section>
        <a className="pr-6" href="">
          About
        </a>
        <a className="pr-6" href="">
          Work
        </a>
        <a className="pr-6" href="">
          Portfolio
        </a>
        <a className="pr-6" href="">
          Contact
        </a>
        <a
          href=""
          className="border-solid border border-black px-6 py-2 rounded-md"
        >
          Resume
        </a>
      </section>
    </nav>
  );
}
