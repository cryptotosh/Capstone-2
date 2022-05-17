const hamburger = document.getElementById('hamburger'),
navul = document.querySelector('.navul');

hamburger.addEventListener('click', ()=>{
    navul.classList.toggle('show');
});


//SELECT ELEMENETS FROM DOM
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#confirm-password');
const toggle = document.querySelector('#toggle');
const toggle2 = document.querySelector('#toggle2');

toggle.addEventListener('click', ()=>{
   const showPass = pass.getAttribute('type')=== 'text';
    pass.setAttribute('type', showPass ? 'password' : 'text');
    pass2.setAttribute('type', showPass ? 'password' : 'text');
    toggle.classList.toggle('fa-eye-slash');
    // toggle2.classList.toggle('fa-eye-slash');
});


var password = document.getElementById('password');
confirm_password = document.getElementById('confirm-password');
    function validatePassword() {
        if ((confirm_password.value!='')&&(password.value != confirm_password.value)) {
            document.getElementById('errorMsg').innerHTML='Passwords Don\'t Match';
        } else {
            document.getElementById('errorMsg').innerHTML='';
        }
    }
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;