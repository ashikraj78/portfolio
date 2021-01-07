import "./App.css";
import "./style/style.css";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Social from "./components/Social";
import About from "./components/About";

function App() {
  return (
    <div className="relative">
      <div className="pl-4 sm:pl-12 pr-12  mt-6 ">
        <Navbar />
      </div>
      <div className="pl-4 pr-4 sm:pl-40 sm:pr-40">
        <Hero />
        <About />
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
