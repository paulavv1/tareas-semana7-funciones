'use strict'

// 1. Sin parametros, sin valor de retorno

function saludar() {
    let mss = "Hola Bienvenido a mi sitio web"
    alert(mss);

}
//llamar a la funcion
saludar()

// 2. Con parametros, sin valor de retorno

function sumar(a, b) {//parametros from, tex
    let suma = a + b;
    alert = ("La suma de ", a, "y", b, "es igual a ", suma);
}
//llamar a la funcion
sumar(6, 4);

//3. Sin parametros con valor de retorno
function obtenerPi() {
    return 3.14159;
}
//llamar a la funcion y uso del valor de retorno
let pi = obtenerPi();
alert("El valor de Pi es: " + pi)

//4. Con parametros, con valor de retorno
let area;
function calcularAreaRectangulo(base, altura) {
    area = Number(base * altura);
    return area;
}
//Llamadar a la funcion uso del valor de retorno
let baseRectangulo = 7;
let alturaRectangulo = 14;
let areaRectangulo = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);
alert("El area del rectangulo es ", areaRectangulo);
