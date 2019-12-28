import React, { useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link} from 'react-router-dom';
import AuthContext from './AuthContext';
// import Button from '@material-ui/core/Button';
// import { Route, link, BrowserRouter as Router } from "react-router-dom";
// import Button from '@material-ui/core/Button';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  static contextType = AuthContext;

  handleLogout() {
    this.context.logout();

    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="nav-bar">
        <Link to="/home">HomePage</Link>
        <Link to="/login">LoginPage</Link>
        <Link to="/register">RegisterPage</Link>
        <button onClick={ this.handleLogout }>Logout</button>
      </div>
    );
  }
}

export default App;