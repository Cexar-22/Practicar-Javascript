// Escribe una función llamada sumarVentas que reciba un parámetro: un arreglo de números (ej. [10, 20, 30]).
//  La función debe sumar todos los números del arreglo y retornar el total.

// Reglas de la función:

// Crea una variable en 0 para ir guardando la suma total (como hiciste con el string vacío).

// Usa un bucle for para recorrer el arreglo.

function sumarVentas(arreglo){
    let total = 0;
    for (let i=0;i<arreglo.length;i++){
        total += arreglo[i];
    }
    return total;

}

// prueba

console.log(sumarVentas([10,20,30,40]))