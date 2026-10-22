// Escribe una función llamada verificarRetiro que reciba dos parámetros (números): saldo (cuánto dinero hay en la cuenta) y monto (cuánto dinero se quiere sacar).

// Reglas de la función:

// Si el monto es mayor que el saldo, la función debe retornar: "Fondos insuficientes".

// Si el monto es mayor a 500000 (el límite máximo por transacción), debe retornar: "Límite de retiro excedido".

// Si el monto no supera el saldo ni el límite, debe retornar: "Retiro exitoso".

function verificarRetiro(saldo,monto){
	if(monto>saldo){
		return "Fondos insufucientes";
	}else if (monto>500000){
		return "limite del retiro Exedido";
	}else{
		return "Retiro Exitoso";
	}

}

//Pruebas

//monto correcto
console.log(verificarRetiro(1000000,400000));
//monto mayor al saldo
console.log(verificarRetiro(100000,400000));
//monto mayor al limite
console.log(verificarRetiro(1000000,600000))