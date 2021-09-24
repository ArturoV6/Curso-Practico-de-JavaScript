//const precioOrigin = 100;
//const descuento = 15;

function clacularPrecio(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function buttonPriceDiscount(){
    const valuePrice = document.getElementById("input_price");
    const priceValue = valuePrice.value;

    const valueDiscount = document.getElementById("input_discount");
    const discountValue = valueDiscount.value;

    const precioConDescuento = clacularPrecio(priceValue, discountValue);

    const resultP = document.getElementById("price_result");
    resultP.innerText="El precio con descuento seria este " + "$" + precioConDescuento;
}


//console.log({
    //precioOrigin,
    //descuento,
    //porcentajePrecioConDescuento,
    //precioConDescuento
//});
