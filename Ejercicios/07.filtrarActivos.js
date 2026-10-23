// Escribe una función llamada filtrarActivos que reciba un arreglo como este.

// const usuarios = [
//     { nombre: "Ana", activo: true },
//     { nombre: "Luis", activo: false },
//     { nombre: "Carlos", activo: true }
// ];

// La función debe devolver un nuevo arreglo que contenga solo los objetos de los usuarios que estén activos.

// Reglas y recordatorios:

// La lógica es idéntica a tu ejercicio de filtrarAltos: 
// creas un arreglo vacío, recorres la lista con un for (¡no olvides el let i = 0!) y haces un .push().

// Para acceder a la propiedad de un objeto dentro de un arreglo, usas el punto. Ejemplo: arreglo[i].activo.

// Tu condición será evaluar si esa propiedad es:
// igual a true (puedes usar === true o simplemente poner la propiedad en el if).

function filtrarActivos(arreglo){
    let validos =[];
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i].activo === true){
            validos.push(arreglo[i])
        }
    }
    return validos

}

console.log(filtrarActivos([{ nombre: "Ana", activo: true },
                            { nombre: "Luis", activo: false },
                            { nombre: "Carlos", activo: true }
                            ]));