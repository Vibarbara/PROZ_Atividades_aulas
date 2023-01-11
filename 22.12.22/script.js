
const titulo = document.getElementsByClassName('titulo');
const error_text = document.getElementsByClassName('error-text');
const username_input = document.getElementById('login-usuario');
const password_input = document.getElementById('login-senha');
const success_message = document.getElementsByClassName('success-message');

console.log(success_message.value);

/*titulo[0].style.color = "red";*/


function validaForms() {
    if (username_input.value != 'viviane') {
        error_text[0].classList.add('visible');
    }else{
        error_text[0].classList.remove('visible');
    }
    if (password_input.value != '3497') {
        error_text[1].classList.add('visible');
    }else{
        error_text[1].classList.remove('visible');
    }
}
validaForms();

function showSuccessMessage() {
    success_message[0].classList.toggle('flex');
}
