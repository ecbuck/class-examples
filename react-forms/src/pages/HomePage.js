import React from "react";
import AuthContext from "../AuthContext";

class HomePage extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {context => {
          return (
            <div className="home-container">
              {context.currentUser ? (
                <span>Welcome, {context.currentUser.username}</span>
              ) : (
                <button>Login</button>
              )}
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

// class HomePage extends React.Component {
//   constructor(props) {
// super(props);

// this.state = {};
//   }

//   render() {
// return <div>Home Page</div>;
//   }
// }

export default HomePage;


