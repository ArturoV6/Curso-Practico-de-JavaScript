const salariosColom = colombia.map(
    function(personita){
        return personita.salary;
    }
);


const salariosColSorted = salariosColom.sort(
    function (a, b){
        return a - b;
    }
)


function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    }else{
        return false;
    }
}


function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (acumlar = 0, nuevoElemento) {
            return acumlar + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


function meidanaSal(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad]

        const meidana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return meidana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad
    }
}


const medianaGeneralColom = meidanaSal(salariosColSorted);

const spliceStart = (salariosColSorted.length * 90) / 100;

const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = meidanaSal(salariosColTop10);

console.log({medianaGeneralColom,
medianaTop10});