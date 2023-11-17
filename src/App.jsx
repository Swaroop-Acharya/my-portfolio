import "./App.css";
import "../src/Styles/modern-normalise.css"
import Header from "./components/Header/Header.jsx";
import About from "./components/Main/About.jsx";
import Main from "./components/Main/Main.jsx";
import AnimatedCursor from "react-animated-cursor";



function App() {
  return (
    <div className="font-pop overflow-hidden scroll-smooth">
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
  );
}

export default App;
