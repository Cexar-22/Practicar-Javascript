// Escribe una función llamada calcularGanancias que reciba este arreglo.
// const registro = [
//     { producto: "Pan de molde", precio: 2000, pagado: true },
//     { producto: "Pastel", precio: 8000, pagado: false },
//     { producto: "Café", precio: 1500, pagado: true }
// ];
// La función debe sumar y retornar el total solamente de los productos donde la propiedad pagado sea true.

// Estructura mental:

// Tu variable acumuladora en 0.

// Tu bucle for para iterar sobre el arreglo.

// Dentro del bucle, un if que evalúe si el elemento actual está pagado. Si es así, le sumas el precio al acumulador.

function calcularGanancias(arreglo){
    let ganancias =0;
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i].pagado=== true){
            ganancias+=arreglo[i].precio
        }
    }
    return ganancias
}

console.log(calcularGanancias([
    { producto: "Pan de molde", precio: 2000, pagado: true },
    { producto: "Pastel", precio: 8000, pagado: false },
    { producto: "Café", precio: 1500, pagado: true }
]
))