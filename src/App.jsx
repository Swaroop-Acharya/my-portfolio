import "./App.css";
import "../src/Styles/modern-normalise.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import AnimatedCursor from "react-animated-cursor";
import { PropagateLoader,HashLoader } from "react-spinners";
import { useState, useEffect } from "react";
import Home from "./components/Main/Home.jsx";
import About from "./components/Main/About.jsx";
import Skills from "./components/Main/Skills.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., API call, data fetching) before setting loading to false
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="w-full mx-auto font-pop scroll-smooth justify-center min-h-screen flex flex-col">
      {loading ? (
        <div className="flex-grow flex items-center justify-center">
          <HashLoader color="#fff" size={30} margin="5px" />
        </div>
      ) : (
        <div className="flex-grow">
          <Header />
          <Main>
            <Home />
            <About/>
            <Skills/>
           
          </Main>

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
    </div>
  );
}

export default App;
