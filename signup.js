const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password2 =document.getElementById('password2');
 
form.addEventListener('submit' , e =>{
    e.preventDefault();
    validateInputs();
});
const setError = (Element, message) => {
    const inputControl  = Element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.ClassList.add('error');
    inputControl.ClassList.remove('success');

};
const setSuccess = Element =>{
    const inputControl  = Element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.ClassList.add('success');
    inputControl.ClassList.remove('error');

};
const isvalidEmail = email => {
    const re =  /^(([^<>()[\]\\.,;:\s@"] +(\.[^<>()[\]\\.,;:\s@" +)*)|(".+")@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\]{2,}))$/;
     return re.test(String(email).toLowerCase());
};
const validateInputs =() => {
    const usernamevalue = username.value.trim();
    const  emailvalue = email.value.trim();
    const  passwordvalue = password.value.trim();
    const password2value =password2.value.trim();

    if(usernamevalue === ''){
        setError(username , 'username is required');
    }
    else{
        setSuccess(username);

    }
    if(emailvalue === ''){
        setError(email , 'email is required');

    }
    else if (!isvalidEmail(emailvalue)){
       setError(email, 'provide a valid email address');
    }
    else{
        setSuccess(email);
    }
    if(passwordvalue === ''){
        setError(password, 'password is required');

    }else if(passwordvalue.lenght <8){
        setError(password, 'password must be at least 8 character.')
    }else{
        setSuccess(password);
    }
    if(password2value === ''){
        setError(password2, 'pleas confirm your password ')
    }else if(password2value !==passwordvalue){
        setError(password2,"password doesn't match");

    }else{
        setSuccess(password2);
    }
    
};