let btn = document.querySelector('.button');
let cr = document.querySelector('.cr');
let body = document.querySelector('body')

btn.addEventListener('click', function(){
 cr.style.background='yellow';    
 cr.style.borderColor = 'transparent';
 cr.style.boxShadow = '0 0 0.2rem 0.2rem yellow';
 body.style.background = 'white'
})

let but = document.querySelector('.btn2');
but.addEventListener('click', function(){
    cr.style.backgroundColor = 'white';
    cr.style.borderColor = 'grey';
    cr.style.boxShadow = 'none';
    body.style.background = 'black'
     


})