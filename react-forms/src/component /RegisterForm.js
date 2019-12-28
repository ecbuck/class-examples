import React from 'react'
import '/App.css'

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
    }
}

this.state = {
    form: {
        username:'',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        password: '',
        passwordConfirmation: '',

    },
}



this.handleInputChange = this.handleInputChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

handleInputChange(field, event) {
    const value = event.target.value;
    const formClone = Object.assign({}, this.state.form);
    formClone[field] = value;

    this.setState({
        form: formClone
    });
    
}
handleSubmit(e) 
    e.preventDefault();
