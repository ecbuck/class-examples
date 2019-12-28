import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthContext from "./AuthContext";

const initialAuthContextState = {
  // currentUser: {
  //   username: "clairebuck",
  //   password: "supersecretpassword"
  // },
  currentUser: null,
  users: [
    {
      username: "clairebuck",
      password: "supersecretpassword"
    }
  ],
  resetPassword(username, newPassword) {
    const exists = this.users.find(user => {
      if (user.username === username) {
        return true;
      }
    });

    if (exists) {
      exists.password = newPassword;
    } else {
      // user not found.
    }
  },
  login(username, password) {
    const exists = this.users.find(user => {
      if (user.username === username && user.password === password) {
        localStorage.setItem('currentUser', username);
        return true;
      }
    });

    if (exists) {
      this.currentUser = exists;

      return this.currentUser;
    } else {
      // show an invalid username/password error
    }
  },
  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  },
  error: null
};

const routing = (
  <AuthContext.Provider value={initialAuthContextState}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/home" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Router>
  </AuthContext.Provider>
);




ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
