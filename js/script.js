const form = document.getElementById('form')
const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordC = document.getElementById('password-c');


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs () {
    const userNameValue = userName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordCValue = passwordC.value;


    if(userNameValue === ''){
        setErrorFor(userName, 'Username is required!');

    }else{
        setSucessFor(userName)
    }
    if(emailValue === ''){
        setErrorFor(email, 'Email is required!');

    }else if(!checkEmail(emailValue)){
        setErrorFor(email, 'Please, insert a valid email!');

    }else{
        setSucessFor(email)
        
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password is required!');

    }else if(passwordValue.length < 8){
        setErrorFor(password, 'Must be at least 8 characters long.');

    }else{
        setSucessFor(password);
       
    }

    if(passwordCValue === ''){
        setErrorFor(passwordC, 'Please, insert your password here.');

    }else if(passwordValue !== passwordCValue){
        setErrorFor(passwordC, 'Password are not the same!');

    }else{
        setSucessFor(passwordC)
       
    }
    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });
  
    if (formIsValid) {
      console.log("O formulário está 100% válido!");
    }
  }



function setErrorFor(input, message){

    const formControl = input.parentElement.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';

}

function setSucessFor(input){
    const formControl = input.parentElement.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}