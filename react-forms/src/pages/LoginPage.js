import React from "react";

import LoginForm from '../component /LoginForm'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "login"
    };
  }

  renderLoginForm() {
    return (
      <div>
        <h1>LOGIN FORM</h1>
        <LoginForm/>
      </div>
    );
  }
  

  render() {
    return (
      <div className="login-page-container">
        {this.state.mode === "login"
          ? this.renderLoginForm()
          : this.renderForgotPasswordForm()}
      </div>
    );
  }
}

export default LoginPage;