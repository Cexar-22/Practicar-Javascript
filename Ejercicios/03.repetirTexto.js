// Escribe una función llamada repetirTexto que reciba dos parámetros: un texto (un string) y un número de repeticiones. La función debe armar y retornar un solo string con el texto repetido esa cantidad de veces.

// Reglas de la función:

// Usa un bucle for para concatenar (unir) el texto paso a paso.

// No uses el método rápido nativo (texto.repeat()). El objetivo es construirlo manualmente.

function repetirTexto(texto,repeticiones){
	let resultado = "";
    for(let i=0;i<repeticiones;i++){
	resultado +=" "+texto;
	} 
	return resultado;
}

console.log(repetirTexto("hola",3))