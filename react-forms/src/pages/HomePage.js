import React from "react";
import AuthContext from "../AuthContext";

class HomePage extends React.Component {
  static contextType = AuthContext;

  componentDidMount() {
    const user = localStorage.getItem("currentUser");

    if (user) {
      this.context.currentUser = user;
    }

    if (!this.context.currentUser) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <AuthContext.Consumer>
        {context => {
          return (
            <div className="home-container">
              <span>Welcome, user!</span>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default HomePage;
