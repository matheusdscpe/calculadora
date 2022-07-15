let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');
let soma = document.querySelector('.btn__soma');
let subtracao = document.querySelector('.btn__subtracao');
let multiplicacao = document.querySelector('.bnt__multilicacao');
let divisao = document.querySelector('.btn__divisao');
let resultado = document.querySelector('#span');


function fct_soma() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value);
    console.log(resultado);
} 

function fct_subtracao() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value);
    console.log(resultado);
} 
function fct_multiplicacao() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value);
    console.log(resultado);
} 
function fct_divisao() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value);
    console.log(resultado);
} 
