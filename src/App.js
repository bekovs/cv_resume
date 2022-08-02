import AboutMe from "./components/AboutMe";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {

  return (
    <div>
      <Navbar /> 
      <div className="Main">
        <Main />
      </div>
      <div className="About">
        <AboutMe />
      </div>
      <div className="Skills">
        <Skills />
      </div>
      
    </div>
  );
}

export default App;
