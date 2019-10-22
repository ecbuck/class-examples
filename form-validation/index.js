function submitForm(event){
    event.preventDefault();
    let isFormValid = true;

    // Get Values form HTML inputs
    
    const firstNameElement= document.querySelector('#firstName');
    const firstName= firstNameElement.value;
    const lastNameElement= document.querySelector('#lastName');
    const lastName= lastNameElement.value;
    const ageElement= document.querySelector('#age');
    const age = ageElement.value;
    const emailElement= document.querySelector('#email');
    const email= emailElement.value;
    const eighteenOrOlderElement= document.querySelector('#eighteenOrOlder');
    const eighteenOrOlder= eighteenOrOlderElement.value;
    const passwordElement= document.querySelector('#password');
    const password = passwordElement.value;
    const passwordConfirmElement= document.querySelector('#passwordConfirm');
    const passwordConfirm = passwordConfirmElement.value;

    // Attempt to remove error class.
    firstNameElement.classList.remove('error');
    lastNameElement.classList.remove('error');
    ageElement.classList.remove('error');
    eighteenOrOlderElement.classList.remove('error');
    emailElement.classList.remove('error');
    passwordElement.classList.remove('error');
    passwordConfirmElement.classList.remove('error');

    if(firstName === ''){
        // highlight the FirstName input box to red
        firstNameElement.classList.add('error');
        isFormValid = false;
    }
    if(lastName === ''){
        // highlight the LastName input box to red
        lastNameElement.classList.add('error');
        isFormValid = false;
    }
    const numberAge = Number(age);

    if(age === '' || isNaN(numberAge) || NumberAge < 0) {
        // age verification failed.
        // Highlight the age input box to red
        ageElement.classList.add('error');

        isFormValid = false;
    }

    const isEmailValid = emailIsValid(email);


    if(!isEmailValid){
        // the email is invalid
        emailElement.classList.add('error');
    }
    
    isFormValid = false;

    if(password ===''|| passwordConfirm === ''){
        passwordElement.classList.add('error');
        passwordConfirmElement.classList.add('error');
        isFormValid = false;
    }

    if(password.length < 8 || passwordConfirm.length < 8){
        passwordElement.classList.add('error');
        passwordConfirmElement.classList.add('error');
        isFormValid = false;
    }

    if(password !== passwordConfirm){
        passwordElement.classList.add('error');
        passwordConfirmElement.classList.add('error');
        isFormValid = false;
    }

    if(eighteenOrOlder !== 'true' && eighteenOrOlder !== 'false') {
        eighteenOrOlderElement.classList.add('error');
        isFormValid = false;
    }

    if (eighteenOrOlder === 'true' && numberAge < 18) {
        eighteenOrOlderElement.classList.add('error');
        ageElement.classList.add('error');
        isFormValid = false;
    }

    if(isFormValid) {
        alert('Submission Successful');
    }
}


function emailIsValid (email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
 
    return isValid;
}