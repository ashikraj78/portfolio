import "./App.css";
import "./style/style.css";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <div className="pl-16 pr-16  mt-6">
        <Navbar />
      </div>
      <div className="pl-36 pr-36">
        <Hero />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
