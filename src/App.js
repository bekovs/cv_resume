import AboutMe from "./components/AboutMe";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

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
      
    </div>
  );
}

export default App;
