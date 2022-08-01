import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <div className="Main">
        <Navbar /> 
        <Main />
      </div>
      <div className="About">
        <AboutMe />
      </div>
      
    </div>
  );
}

export default App;
