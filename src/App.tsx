import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

import useScrollReveal from "./hooks/useScrollReveal";
import "./styles/scrollReveal.css";

function App() {
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.08;
      document.documentElement.style.setProperty(
        "--parallax-offset",
        `${offset}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "2rem 1rem",
          color: "#94a3b8",
          borderTop: "1px solid rgba(148,163,184,0.15)",
          background: "rgba(15,23,42,0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        © 2026 Aryan Trivedi | All rights reserved
      </footer>
    </>
  );
}
export default App;
