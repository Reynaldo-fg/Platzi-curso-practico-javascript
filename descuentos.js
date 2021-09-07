
function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
   
    return precioConDescuento;
}

const cupones = [
  {
      nombre: "JuanDC_es_Batman",
      descuento: 15,
  },
  {
      nombre: "pero_no_le_digas_a_nadie",
      descuento: 30,
  },
  {
      nombre: "es_un_secreto",
      descuento: 25,
  },
];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

     //   Se crea una funcion para validar si el cupon ingresado en el inputCoupon es es igual a uno de los cupones dentro del array cupones

    const validarValorCupon = function(cupones){
      return cupones.nombre === couponValue;
    }
    
    //Con el metodo .find nos obtendra el cupon ingresado en el array cupones, almacenada dentro de validarValorCupon
    const cuponUsuario = cupones.find(validarValorCupon);
    //Primero verificara que si es diferente, saldra mensaje que no es valido, caso contrario, aplica descuento por el tipo de cupon que tiene en el array cupones
    if (!cuponUsuario){
      alert(`El cupon ${couponValue} no es valido`)
    } else {
      const descuento = cuponUsuario.descuento;
      const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

      const resultP = document.getElementById("ResultP");
      resultP.innerText = `El precio con descuento son: $ ${precioConDescuento}`;
    }
}
  





