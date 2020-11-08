// 1. Escribir una función a la que se pasa como parámetro un número entero y devuelve como resultado un texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

var text = document.querySelector('.page__text');
var pageNumber = document.querySelector('.page__number');
var pageNumberType = document.querySelector('.page__number-type');

function checkNumber(){
    var numberValue = document.getElementById('numero').value;
    var remainder = numberValue % 2;

    text.style.display = "block";
    pageNumber.innerText = numberValue;

    if (remainder === 0) {
        pageNumberType.innerText = "es un Número Par";
    } else{
        pageNumberType.innerText = "No es un Número Par";
    }
}

