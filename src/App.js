import "./App.css";
import "./style/style.css";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Social from "./components/Social";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="relative">
      <div className="pl-12 pr-12  mt-6 ">
        <Navbar />
      </div>
      <div className="pl-40 pr-40">
        <Hero />
        <Skill />
        <Projects />
        <Contact />
      </div>
      <div className="pl-16 pr-16 ">
        <Social />
      </div>
    </div>
  );
}

export default App;
