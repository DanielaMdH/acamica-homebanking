//Declaración de variables
var nombreUsuario = "Daniela de Haro";
var saldoCuenta = 20000;
var limiteExtraccion = 5000;
var saldoAnterior = saldoCuenta;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla(saldoCuenta);
actualizarLimiteEnPantalla();

/////// funcion /////
//var dineroDepositado = prompt("Ingrese monto");
//depositarDinero(dineroDepositado);

// Save data to sessionStorage
//sessionStorage.setItem('Dani', 'Javi');
//localStorage.setItem('Dani2', 'Javi2');


function depositarDinero(dineroDepositado) {
	
	dineroDepositado = parseInt(prompt("CUanto?"));
	//dineroDepositado = parseInt(dineroDepositadostr);
	saldoAnterior = saldoCuenta;
	saldoCuenta += dineroDepositado;
	
	actualizarSaldoEnPantalla();
	alert ("Depositaste " + dineroDepositado + "\n te quedo: " + saldoCuenta);

}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	limiteExtraccion = parseInt(prompt("que nuevo limite?"));
}

function extraerDinero(dineroExtraido) {
		
		saldoAnterior = saldoCuenta;
		saldoCuenta -= dineroExtraido;

}



function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre_user").innerHTML = "Bienvenido/a " + nombreUsuario;
	
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

