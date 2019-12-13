import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Contact from "./pages/Contact"
import Heythere from "./pages/Heythere"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import About from "./pages/About"
import * as serviceWorker from "./serviceWorker";
import { Route,  BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/heythere" component={Heythere} />
      <Route path="/resume" component={Resume} />
      <Route path="/about" component={ About}/>

    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
