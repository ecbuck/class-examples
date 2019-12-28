import React from 'react'

class RegisterPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            form: {
                username: '',
                password: '',
                passwordConfirmation: ''
            },
            formErrors: {
                username: '',
                password: '',
                passwordConfirmation: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange( input, event){
        const inputValue = event.target.value;
        const formClone = Object.assign({}, this.state.form);

        formClone[ input ]= inputValue;

        this.setState( {
            form: formClone
        });
    }

    handleSubmit(e){
        e.preventDefault();
    debugger

    }

    render(){
        return (
            <div class="register-page-container">
                Register Page
                <form onSubmit={ this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            required
                            minLength="9"
                            value={ this.state.form.username}
                            onChange={ (e) =>this.handleInputChange('username',e)}
                      
                        />
                    </label>   
                    <button> Register </button>
                </form>
                
            </div>
        )
    }
}

export default RegisterPage