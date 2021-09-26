//codigo del cuadrado

console.group("cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}  

function areaCuadrado (lado) {
    return lado * lado;
} 

console.groupEnd()

//codigo del triangulo

console.log("la altura del triangulo es de: " + alturaDelTriangulo + " cm");

function perimetroDelTriangulo (ladoDelTriangulo1, ladoDelTriangulo2, baseDelTriangulo){
    return ladoDelTriangulo1 + ladoDelTriangulo2 + baseDelTriangulo;
} 


function areaDelTriangulo (base, altura) {
    return base * altura / 2;
}

console.groupEnd()

//Codigo del circulo
console.group("circulo");

//Diametro

function diametroCirculo (radio) {
    return radio * 2;
}

//PI

const pi = Math.PI;

//circunferencia

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio)
    return diametro * pi
}

//Area

function areaCirculo (radio){
    return (radio * radio) * pi;
}

console.groupEnd()

//aqui interactuamos con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("input_type_num");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    
    const resultP = document.getElementById("figure_result");
    resultP.innerText="El resultado seria: " + perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("input_type_num");
    const value = input.value;
    const area = areaCuadrado(value);
    
    const resultP = document.getElementById("figure_result");
    resultP.innerText="El resultado seria: " + area;
}

//triangulo

function ladoDelTriangulo(){
    const input = document.getElementById("input_type_num2");
    value = input.value;
    return value;
}

function baseDelTriangulo(){
    const input = document.getElementById("input_type_num2")
    value = input.value;
    return value;
}

function alturaDelTriangulo(){
    const input = document.getElementById("input_type_num2")
    value = input.value;
    return value;
}

function calcularPerimetroDelTriangulo(){
    const input = document.getElementById("input_type_num2");
    const value = input.value;
    const value4 = ladoDelTriangulo();
    const area = perimetroDelTriangulo(value, value, value4);
    
    const resultP = document.getElementById("figure_result-2");
    resultP.innerText="El resultado seria: " + area;
}

function calcularAreaTriangulo(){
    const value3 = baseDelTriangulo();
    const value4 = alturaDelTriangulo();
    const area = areaDelTriangulo(value3, value4);
    
    const resultP = document.getElementById("figure_result-2");
    resultP.innerText="El resultado seria: " + area;
}

//circulo
function radioDelCirculo(){
    const input = document.getElementById("input_type_num3")
    const value = input.value;
    return value;
}

function diametroDelCirculo(){
    const input = document.getElementById("input_type_num3")
    const value = input.value
    const diametro = diametroCirculo (value)
    return diametro;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("input_type_num3")
    const value = input.value;
    const perimetro = perimetroCirculo (value)

    const resultP = document.getElementById("figure_result-3");
    resultP.innerText="El resultado seria: " + perimetro;
}

function areaDelCirculo(){
    const input = document.getElementById("input_type_num3")
    const value = input.value;
    const area = areaCirculo (value)

    const resultP = document.getElementById("figure_result-3");
    resultP.innerText="El resultado seria: " + area;
}
