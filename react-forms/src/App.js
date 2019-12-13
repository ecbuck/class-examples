import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import { Route, link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="nav-bar">
      <Link to="/home">HomePage</Link>
      <Link to="/login">LoginPage</Link>
      <Link to="/register">RegisterPage</Link>
    </div>
  );
}

export default App;