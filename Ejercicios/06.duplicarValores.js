// Escribe una función llamada duplicarValores que reciba un arreglo de números (ej. [10, 20, 30]). 
// La función debe devolver un nuevo arreglo donde cada número esté multiplicado por 2 (debería entregar [20, 40, 60]).

// Reglas:
// Usa la misma estructura que acabas de corregir:
// crea un arreglo vacío con let, haz un bucle for y usa .push() para meter el arreglo[i] * 2 dentro de la nueva lista.

function duplicarValores(arreglo){
    let nuevoArreglo = [];
    for(i=0;i<arreglo.length;i++){
        nuevoArreglo.push(arreglo[i]*2);
    }
    return nuevoArreglo
}

console.log(duplicarValores([10,20,30]))



//correcciones 

// falto let al declarar el i del bucle for

// function duplicarValores(arreglo){
//     let nuevoArreglo = [];
//     for(let i=0;i<arreglo.length;i++){ //<--aqui
//         nuevoArreglo.push(arreglo[i]*2);
//     }
//     return nuevoArreglo
// }

