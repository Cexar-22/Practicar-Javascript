// Escribe una función llamada filtrarAltos que reciba un arreglo de números (ej. [50, 150, 20, 300, 90]). 
// La función debe revisar cada número y devolver un nuevo arreglo que contenga solo los números que sean mayores a 100.

// Reglas de la función:

// Crea un arreglo vacío al inicio para ir guardando los que pasen la prueba: let aprobados = [];

// Usa tu ya dominado bucle for para recorrer el arreglo original.

// Dentro del bucle, usa un if. Si el número actual (arreglo[i]) es mayor a 100, mételo al nuevo arreglo usando el método .push(). Por ejemplo: aprobados.push(arreglo[i]);.

// Al final, retorna el arreglo aprobados.


//solucion sin metodo push

//el metodo += se usa para sumar cosas,en este caso transforma el arreglo en texto y pega los numeros

function filtrarAltossinpush(arreglo){
    validos = [];
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]>100){
            validos += arreglo[i];
        }else{
            continue
        }
    }
    return validos   
}

//el metodo push envia los datos a un arreglo nuevo

function filtrarAltos(arreglo){
    validos = [];
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]>100){
            validos.push(arreglo[i]);
        }else{
            continue
        }
    }
    return validos   
}

console.log(filtrarAltossinpush([10,101,102,3,105,3,5,3]))

console.log(filtrarAltos([50, 150, 20, 300, 90]))

// solucion mas simple
//se elimina el else ya que se el bucle se parara al recorrer el arreglo
//falto la declaracion de variable en validos


// function filtrarAltos(arreglo){
//     let validos = [];
//     for(let i=0;i<arreglo.length;i++){
//         if(arreglo[i]>100){
//             validos.push(arreglo[i]);
//         }
//     }
//     return validos   
// }