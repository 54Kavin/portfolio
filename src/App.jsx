import { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef({});

  // Track scroll for navbar shadow + active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const inView = NAV_LINKS.filter((name) => {
        const el = sectionRefs.current[name];
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
        
      });

      if (inView.length) setActiveSection(inView[inView.length - 1]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const el = sectionRefs.current[section];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Helper to assign refs by section name
  const setRef = (name) => (el) => {
    sectionRefs.current[name] = el;
  };

  return (
    <div className="site-bg">
      <Navbar
        activeSection={activeSection}
        scrolled={scrolled}
        onNavClick={scrollToSection}
      />

      <Hero sectionRef={setRef("Home")} />
      <About sectionRef={setRef("About")} />
      <Skills sectionRef={setRef("Skills")} />
      <Projects sectionRef={setRef("Projects")} />
      <Contact sectionRef={setRef("Contact")} />

      <Footer />
    </div>
  );
}

export default App;