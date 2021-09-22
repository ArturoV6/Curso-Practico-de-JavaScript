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
console.group("triangulo");
const ladoDelTriangulo1 = 6;
const ladoDelTriangulo2 = 6;
const baseDelTriangulo = 4;

console.log("los lados del triangulo miden " 
    + ladoDelTriangulo1 + "cm, " 
    + ladoDelTriangulo2 + "cm, " 
    + baseDelTriangulo + "cm ");


const alturaDelTriangulo = 5.5;
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

//Radio

const radioCirculo = 4;

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

console.log("el radio del circulo es: " + radioCirculo);
console.log("el diametro del circulo es: " + diametroCirculo);
console.log("la circunferencia del circulo es: " + perimetroCirculo);
console.log("el area del circulo es: " + areaCirculo);

console.groupEnd()

//aqui interactuamos con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("input_type_num");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("input_type_num");
    const value = input.value;
    const area = areaCuadrado(value);
    alert (area);
}