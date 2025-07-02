import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => setInit(true));
    }
  }, [init]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <RouteBasedParticles init={init} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <FooterVisibilityWrapper />
      </div>
    </Router>
  );
}

// ✅ Show particles only when NOT on home, about, skills, projects, or contact pages
const RouteBasedParticles = ({ init }) => {
  const location = useLocation();
  const hiddenPages = ["/", "/about", "/skills", "/projects", "/contact"];
  const showParticles = !hiddenPages.includes(location.pathname);
  return init && showParticles ? <Particles options={particlesOptions} /> : null;
};

// ✅ Show footer only on pages other than Home
const FooterVisibilityWrapper = () => {
  const location = useLocation();
  return location.pathname !== "/" ? <Footer /> : null;
};

export default App;
