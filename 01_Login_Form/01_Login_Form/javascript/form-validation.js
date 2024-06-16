const form = document.getElementById('form-container');
const uname = document.getElementById('name');
const username = document.getElementById('username');
const password = document.getElementById('password');
const date = document.getElementById('birthdate');
const email = document.getElementById('email');

// gender
const male = document.getElementById('male');
const female = document.getElementById('female');
const other = document.getElementById('other');


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}


const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase)
}


const validateInputs = () => {
    const nameValue = uname.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const dateValue = date.value.trim();
    const emailValue = email.value.trim();

    const maleValue = male.value.trim();
    const femaleValue = female.value.trim();
    const otherValue = other.value.trim();

    if (nameValue === ''){
        setError(uname, 'Name is required');
    }else{
        setSuccess(uname);
    }

    if (usernameValue === ''){
        setError(username, 'Username is required');
    }else{
        setSuccess(username);
    }
    
    if (emailValue === ''){
        setError(email, 'Email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    }else{
        setSuccess(email);
    }
    
    if (passwordValue === ''){
        setError(password, 'Username is required');
    }else if (passwordValue.length < 8){
        setError(password, 'Password must be at least 8 character')
    }else{
        setSuccess(username);
    }
};
