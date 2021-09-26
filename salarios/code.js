


function calcularMediaAritmetica(lista) {
    //let sumaLista = 0;

    //for (let i = 0; i < lista.length; i++) {
        //sumaLista = sumaLista + lista[i];
    //};

    const sumaLista = lista.reduce(
        function (acumlar = 0, nuevoElemento) {
            return acumlar + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}