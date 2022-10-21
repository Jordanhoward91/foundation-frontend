import { NavLink, Link } from "react-router-dom";

import "../src/styles/App.scss";
import "../src/components/pages/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <nav>
            <a href="/home/">Home</a>
            <a href="/about-me/">About Me</a>
            <a href="/contact/">Contact</a>
          </nav>
        </div>
        <hr></hr>
      </header>
    </div>
  );
}

export default App;
