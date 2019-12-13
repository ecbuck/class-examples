import React from 'react'

class RegisterPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return (
            <div class="register-button">
                Register Page
                <button>Test
                {/* { onClick ={() => this.ListeningStateChangedEvent({ mode: "register" })} } */}
        >
          Register
                </button>
            </div>
        )
    }
}
// render() {
    // return (
    //   <div className="Register-page-container">
        // {this.state.mode === "register"
        //   ? this.renderLoginForm()
        //   : this.renderForgotPasswordForm()}
    //   </div>
    // );

// eslint-disable-next-line no-unreachable
export default RegisterPage