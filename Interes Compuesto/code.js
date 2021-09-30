1000000 * (Math.pow(1+2/100, 5))

function calcular(dinero, tiempo, interes) {
    const valorFinal = dinero * (Math.pow(1+interes/100, tiempo))
    return valorFinal;
};

function buttonClick() {
    const moneyValue = document.getElementById("money_value");
    const valueMoney = moneyValue.value

    const timeValue = document.getElementById("time_value");
    const valueTime = timeValue.value

    const interestValue = document.getElementById("interest_value");
    const valueInterest = interestValue.value

    const calcularValorFinal = calcular(valueMoney, valueTime, valueInterest);

    const result = document.getElementById("result");
    result.innerText=calcularValorFinal;
}