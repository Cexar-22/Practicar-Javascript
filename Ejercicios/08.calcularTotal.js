// Escribe una función llamada calcularTotal que reciba un arreglo como este (llamémoslo compras). 

// const carrito = [
//     { producto: "Pan de masa madre", precio: 2500 },
//     { producto: "Croissant", precio: 1200 },
//     { producto: "Café", precio: 1800 }
// ];

// La función debe sumar todos los precios y devolver el número total a pagar.

// Reglas:

// Usa tu bucle for (let i = 0...).

// Dentro del bucle, suma al acumulador la propiedad precio del objeto actual (compras[i].precio).

// Retorna el total.


//primera solucion primero crear un arreglo con los precios y leugo sumar los precios
//sin embargo esto hace que en la tercera iteracion se vuelvan a sumar los valores y da erroneo


// function calcularTotal(arreglo){
//     let total=[];
//     let valor=0

//     for(let i=0;i<arreglo.length;i++){
//         for(let j=0;j<total.length;j++){
//             valor+=total[j]
//         }
//         total.push(arreglo[i].precio)
//     }
//     return valor;

// }


function calcularTotal(arreglo){
    let valor=0;

    for(let i=0;i<arreglo.length;i++){
        valor+=arreglo[i].precio
    }
    return valor;
}




console.log(calcularTotal([
    { producto: "Pan de masa madre", precio: 2500 },
    { producto: "Croissant", precio: 1200 },
    { producto: "Café", precio: 1800 }
]))