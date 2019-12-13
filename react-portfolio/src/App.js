import React from 'react';
import './App.css';
import { Link} from 'react-router-dom';

function App() {
  return (
    <div className="nav-bar">
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/heythere">Heythere</Link>
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>

    </div>
  );
}

export default App;
