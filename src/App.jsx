import "./App.css";
import "../src/Styles/modern-normalise.css";
import Header from "./components/Header/Header.jsx";
import About from "./components/Main/About.jsx";
import Main from "./components/Main/Main.jsx";
import AnimatedCursor from "react-animated-cursor";
import { PropagateLoader,HashLoader } from "react-spinners";
import { useState, useEffect } from "react";

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
    <div className="font-pop scroll-smooth min-h-screen flex flex-col">
      {loading ? (
        <div className="flex-grow flex items-center justify-center">
          <PropagateLoader color="#fff" size={15} margin="5px" />
        </div>
      ) : (
        <div className="flex-grow">
          <Header />
          <Main>
            <About />
           
          </Main>

          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
        </div>
      )}
    </div>
  );
}

export default App;
