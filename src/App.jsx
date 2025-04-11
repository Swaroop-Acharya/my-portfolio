import "./App.css";
import "../src/Styles/modern-normalise.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import AnimatedCursor from "react-animated-cursor";
import { PropagateLoader, HashLoader, PacmanLoader } from "react-spinners";
import { useState, useEffect } from "react";
import Home from "./components/Main/Home.jsx";
import About from "./components/Main/About.jsx";
import Skills from "./components/Main/Skills.jsx";
import Experience from "./components/Main/Experience.jsx";
import ExperienceSection from "./components/Main/ExperienceSection.jsx";
import Projects from "./components/Main/Projects.jsx";
import Contact from "./components/Main/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Toaster } from "./components/ui/toaster";
import ProjectSection from "./components/Main/ProjectSection";
import { Analytics } from '@vercel/analytics/react';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., API call, data fetching) before setting loading to false
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="w-full mx-auto font-pop scroll-smooth justify-center min-h-screen flex flex-col">
      {loading ? (
        <div className="flex-grow flex items-center justify-center">
          <PacmanLoader color="#fff" size={20} margin="5px" />
        </div>
      ) : (
        <div className="flex-grow">
          <Header />
          <Main>
            <Home />
            <About />
            <ExperienceSection />
            <Skills />
            <ProjectSection/>
            <Contact />
          </Main>
          <Toaster />
          <Footer />

          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={3}
          />
        </div>
      )}
      <Analytics/>
    </div>
  );
}

export default App;
