//codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("el perimetro de mi cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("el area de mi cuadrado es: " + areaCuadrado + " cm cuadrados");
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

const perimetroDelTriangulo = ladoDelTriangulo1 + ladoDelTriangulo2 + baseDelTriangulo;
console.log("el perimetro del cuadrado es " + perimetroDelTriangulo + " cm");

const areaDelTriangulo = (baseDelTriangulo * alturaDelTriangulo) / 2;

console.log("el area de mi triangulo es " + areaDelTriangulo + " cm");

console.groupEnd()

//Codigo del circulo
console.group("circulo");

//Radio

const radioCirculo = 4;

//Diametro

const diametroCirculo = radioCirculo * 2

//PI

const pi = Math.PI;

//circunferencia

const perimetroCirculo = diametroCirculo * pi;

//Area

const areaCirculo = (radioCirculo * radioCirculo) * pi;

console.log("el radio del circulo es: " + radioCirculo);
console.log("el diametro del circulo es: " + diametroCirculo);
console.log("la circunferencia del circulo es: " + perimetroCirculo);
console.log("el area del circulo es: " + areaCirculo);

console.groupEnd()