const hambugger = document.getElementById('hambugger'),
navul = document.querySelector('.navul');

hambugger.addEventListener('click', ()=>{
    navul.classList.toggle('show');
});