// 2. Según este string "abcdefghijklmnñopqrstuvwxyz", hacer una función que recibe un parámetro (un caracter), y la función me debe devolver en qué posición en la cadena del string se encuentra el caracter entregado como argumento:
// Ejemplo:
// posición('e') // -> 4

var string = "abcdefghijklmnñopqrstuvwxyz";

function checkPosition(letter){
    var position = string.indexOf(letter);
    return position;
}




// 3. Hacer una función a la que le paso un precio, y este me devuelva el precio con impuesto de 0.19%. Si yo ingreso 1000 a la función, me debería retornar con el formato "El precio con impuesto es de 1190"

function iva(valor){
    var iva = valor * 0.19;
    return valor + iva;
}



// 4. Hacer un closure con contexto de "una persona tira un dado". Es decir, yo le entrego un nombre, por ejemplo:
// var dadoJulio = nuevoDado('julio')
// Y que la respuesta de dadoJulio() sea:
// dadoJulio() -> "Julio tiró un dado y salió 6"
// dadoJulio() -> "Julio tiró un dado y salió 3"
// dadoJulio() -> "Julio tiró un dado y salió 5"
// Por lo tanto, la respuesta del closure debe ser aleatoria y el dado debe ser de 6 caras (osea del 1 al 6).

function lanzarDado(player){
    return function(){
        var random = Math.floor(Math.random() * 6) + 1;
        var message = player + " tiró un dado y salió " + random;
        return message;
    }
}



