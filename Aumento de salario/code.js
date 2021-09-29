function salario(viejo, nuevo) {
    const salarioNuevo = ((nuevo - viejo) / viejo)  * 100;
    return salarioNuevo;
}

function buttonOnclick() {
    const inputValue = document.getElementById("old_salary");
    const valueInput = inputValue.value;

    const inputValue2 = document.getElementById("new_salary");
    const valueInput2 = inputValue2.value;

    const calcularSalario = salario(valueInput, valueInput2);

    let result = document.getElementById("result_salary");
    if (calcularSalario >= 1) {
        result.innerText="Tu salario crecio un " + calcularSalario + "%";
    }else if (calcularSalario <= -1) {
        result.innerText="Tu salario decrecio un " + calcularSalario + "%";
    }else if (valueInput === valueInput2) {
        result.innerText="Tu salario no crecio";
    }else{
        result.innerText="Tus datos estan mal";
    }
};