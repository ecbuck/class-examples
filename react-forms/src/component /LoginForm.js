import React from "react";
import AuthContext from "../AuthContext";
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "clairebuck",
      password: "supersecretpassword"
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    const user = localStorage.getItem("currentUser");

    if (user) {
      this.context.currentUser = user;
    }
    if (this.context.currentUser) {
      this.props.history.push("/home");
    }
  }

  handleLogin(e){
    e.preventDefault();

    const user = this.context.login(this.state.username, this.state.password);
    
    if (user){
      this.props.history.push('/home');
    }
  }

  static contextType = AuthContext;

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <label>
          Username:
          <input
            type="text"
            onChange={e => this.handleInputChange("username", e)}
            value={ this.state.username }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={e => this.handleInputChange("password", e)}
            value={ this.state.password }
          />
        </label>
        <button>Login</button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
