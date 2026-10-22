// cosas que busque:
// 1.como declarar una funcion en javascript

// lo mas basico es asi:

// function nombreFuncion(parametros){
//     //logica de la funcion
// }

// 2.como crear un condicional if/else en javascript:

// if(condicion){
//     //logica de la condicion;
// } else{
//     //logica de la condicion;
// }

// 3.como ejecutar un archivo javascript en la terminal:

// requisitos:tener node instalado

// node nombreArchivo.js


//---- problema----
// Escribe una función llamada verificarEdad que reciba un dato: la edad de una persona (un número).

// Reglas de la función:

// Si la edad es 18 o mayor, la función debe devolver (return) el texto: "Puedes pasar".

// Si la edad es menor a 18, la función debe devolver el texto: "No puedes pasar".

function verificarEdad(edad){
	if (edad >=18){
		resultado ="puedes pasar";
	}else{
	        resultado ="no puedes pasar";
	
	}
	return resultado
}

// pruebas
console.log("Edad 18");
console.log(verificarEdad(18));
console.log("Edad 17");
console.log(verificarEdad(17));
console.log("Edad 20");
console.log(verificarEdad(20));

