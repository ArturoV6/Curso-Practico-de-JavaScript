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


//triangulo

function alturaDelTriangulo(){
    const input = document.getElementById("input_type_num2")
    value = input.value;
    return value;
}

function calcularPerimetroDelTriangulo(){
    const input = document.getElementById("input_type_num2");
    const value3 = input.value;
    const value4 = ladoDelTriangulo();
    const area = perimetroDelTriangulo(value3, value3, value4);
    alert (area);
}

function calcularAreaTriangulo(){
    const value3 = baseDelTriangulo();
    const value4 = alturaDelTriangulo();
    const area = areaDelTriangulo(value3, value4);
    alert (area);
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
    alert (perimetro);
}

function areaDelCirculo(){
    const input = document.getElementById("input_type_num3")
    const value = input.value;
    const area = areaCirculo (value)
    alert (area);
}