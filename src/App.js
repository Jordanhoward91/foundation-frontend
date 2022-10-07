import { NavLink, Link } from "react-router-dom";

import '../src/styles/App.scss';
import '../src/components/pages/home'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <h3>Home</h3>
          <h3>Contact</h3>
          <h3>Menu</h3> 
        </div>
        <hr></hr>
      </header>
    </div>
  );
}

export default App;
