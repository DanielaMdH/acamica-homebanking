//Declaración de variables
if (! sessionStorage.getItem("nombreUsuario")) {
	sessionStorage.setItem('nombreUsuario','Cliente');
}
if (! sessionStorage.getItem("saldoCuenta")) {
	sessionStorage.setItem('saldoCuenta',20000);
}
if (! sessionStorage.getItem("limiteExtraccion")) {
	sessionStorage.setItem('limiteExtraccion',5000);
	
}
if (! sessionStorage.getItem("saldoAnterior")) {
	sessionStorage.setItem('saldoAnterior',5000);
}
//if (! sessionStorage.getItem("users")) {
	//crearCuentas();
//}

sessionStorage.setItem('color','#0000FF);
document.body.style.backgroundColor = sessionStorage.getItem("color");


//getCuentas();

var nombreUsuario 		= sessionStorage.getItem("nombreUsuario");
var saldoCuenta 		= parseInt(sessionStorage.getItem("saldoCuenta"));
var limiteExtraccion 	= parseInt(sessionStorage.getItem("limiteExtraccion"));
var saldoAnterior 		= parseInt(sessionStorage.getItem("saldoAnterior"));
var nuevoLimite		 	= parseInt(sessionStorage.getItem("nuevoLimite"));


//var nombreUsuario = "Daniela de Haro";
//var saldoCuenta = 20000;
//var limiteExtraccion = 5000;
//var saldoAnterior = saldoCuenta;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
/*cargarNombreEnPantalla();
actualizarSaldoEnPantalla(saldoCuenta);
actualizarLimiteEnPantalla();*/
deshabilitarBtn();
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
	sessionStorage.setItem('saldoCuenta',saldoCuenta);
	alert ("Depositaste " + dineroDepositado + "\n te quedo - saldo actual: " + saldoCuenta +"\n saldo anterior:  "+saldoAnterior);

}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	var nuevoLimite="";
	nuevoLimite = (prompt("POr Favor ingrese un nuevo limite de extracción"));
	validar(nuevoLimite);
	
	/*if(isNaN(limiteExtraccion=NaN)){
		alert("1")	
	}
	else if(limiteExtraccion=null){
		alert("2");
	}

	else {
			
	}*/
	//alert ("El LIMITE DE EXTRACCION HA CAMBIADO \n Su nuevo limite es: "+ limiteExtraccion);
	/*sessionStorage.setItem("limiteExtraccion",limiteExtraccion);
	
			actualizarLimiteEnPantalla();*/


}



function extraerDinero(dineroExtraido) {
	
			dineroExtraido= parseInt(prompt("cuanto dinero desea extraer?"));
			
	/*alert (saldoCuenta + "|" + dineroExtraido);  | para verificar si estan bien colocadas las variables*/
	if (dineroExtraido>saldoCuenta) { 
	alert ("Saldo insuficiente para extraer esa cantidad de dinero");
	}
	else if (dineroExtraido>limiteExtraccion) {
	alert ("La cantidad de dinero que desea extraer supera el limite de extraccion, por favor intente con un monto inferior");
	}
	else if (dineroExtraido%100 != 0){
		alert("Recuerde extraer multiplos de $100 , solo puede extraer montos en billetes de $100");
	}
   else {
		saldoAnterior = saldoCuenta;
		saldoCuenta -= dineroExtraido;
		actualizarSaldoEnPantalla();
		sessionStorage.setItem('saldoCuenta',saldoCuenta);
	alert ("Ud extrajo " + dineroExtraido + "\n te quedo - saldo actual: " + saldoCuenta +"\n saldo anterior:  "+saldoAnterior);
   }
   			actualizarLimiteEnPantalla();

   
}
/* validacion con booleanos , */
/*function haySaldoDisponible();*/



function pagarServicio() {
	/*set.Servicio(){*/
	var agua=350;
	var telefono=425;
	var luz=210;
	var internet=570;
	var servicio = "";
		/*}*/
	var tipoServicio=prompt("ingrese el servicio que desea pagar :\n 1 - AGUA. \n  2-TELEFONO. \n 3-LUZ. \n 4-INTERNET.");

	switch(tipoServicio) {
	case "1":
		servicio=agua;
		servicioStr="Agua";
		break;
	case "2":
		servicio=telefono;
		servicioStr="Teléfono";
		break;
	case "3":
		servicio=luz;
		servicioStr="Luz";
		break;
	case "4":
		servicio=internet;
		servicioStr="Internet";
		break;
	default:
		servicio="Ingreso un numero incorrecto";
	}
	
	if (servicio<saldoCuenta){
		
		saldoAnterior = saldoCuenta;
		/*alert("1")*/
		saldoCuenta -= servicio;
		
		alert ("Usted abonó el servicio de: " + servicioStr + "\n Ud pagó: $ " + servicio + "\n Su Saldo actual: $ " + saldoCuenta +"\n Saldo anterior: $  "+saldoAnterior);
		sessionStorage.setItem('saldoCuenta',saldoCuenta);
		actualizarSaldoEnPantalla();
		
	}else{ 		
		alert("No posee saldo suficiente para realizar el pago");
	}
	
	

		
	
	return servicio;
	
	

}

function transferirDinero() {
		var cuentaAmiga1="1234567";// no hace falta
		var cuentaAmiga2="7654321";// no hace falta
		var cuentaAmiga="";
		
		
		/*
		var cuentas = JSON.parse(sessionStorage.getItem("users"));	
		
		var listastr = generarListaNombreCuentas();
		var pregunta=prompt("Seleccione la cuenta: \n 1 -> daniela1\n 2 -> daniela2");
	
		//cuentas[pregunta].nombreCuenta
		cuentas[cuentaActual].dineroDepositado -= dinerotransfiere;
		cuentas[pregunta].dineroDepositado += dinerotransfiere;
			
		sessionStorage["cuentas"] = JSON.stringify(users);
		*/
		
		
		var montoTransferencia=prompt("Ingrese el monto que desea transferir");
		
		if(montoTransferencia > 0 && montoTransferencia<saldoCuenta){

			var cuentaAmiga=prompt("Seleccione la cuenta: \n -> 1234567\n -> 7654321");
			switch(cuentaAmiga){
				case "1234567":
					saldoCuenta -= montoTransferencia;
					alert ("Ud transfirió: $ " + montoTransferencia + "\nCuenta destino: n° " + cuentaAmiga + "\n Saldo Actual Disponible: $ " + saldoCuenta );

				break;
				case "7654321":
					saldoCuenta -= montoTransferencia;
					alert ("Ud transfirió: $ " + montoTransferencia + "\nCuenta destino: n° " + cuentaAmiga + "\n Saldo Actual Disponible: $ " + saldoCuenta );

				break;
				default:
					alert ("No se encuentra la Cuenta. Intente nuevamente.");
			}
	//			alert ("Ud transfirió: $ " + montoTransferencia + "\nCuenta destino: n° " + cuentaAmiga + "\n Saldo Actual Disponible: $ " + saldoCuenta );

		}else if (montoTransferencia <=0 ){
			alert("el valor ingresado es negativo o nulo");
		}else if (montoTransferencia > saldoCuenta){
			alert("El monto ingresado supera el saldo Disponible. Saldo en cuenta insuficiente para realizar la operación");
		}else{
			alert("lo ingresado es incorrecto");
		}
		actualizarSaldoEnPantalla();
		sessionStorage.setItem('saldoCuenta',saldoCuenta);
		return transferirDinero;
}

/*function logIn(){
	var codigoIngresado= prompt ("ingrese codigo plis");
	if (codigoIngresado){ 
	switch(codigoIngresado){
		case "codigo1":
		usuario = "usuario1";
		/*document.getElementById ("Button").disabled = false;*/
	/*	alert ("Bienvenido " + usuario + " ya puede realizar sus operaciones");
		break;
		case "codigo2":
		usuario = "usuario2";
		alert ("Bienvenido " + usuario + " ya puede realizar sus operaciones");
		break;
		default:
		alert ("Codigo incorrecto. Tu dinera ha sido retenido por cuestiones de seguridad.");
		saldoCuenta=0;
		actualizarSaldoEnPantalla();
		
	}
	}*/
	//habilito boton html
/*document.getElementById("Button").disabled = false;*/

//deshabilito boton html
/*document.getElementById("Button").disabled = true;*/

function iniciarSesion() {
	var codigo="";

	if (document.getElementById("btnInicioDeSesion").innerHTML == "Iniciar sesion"){
			
		var inicio = prompt("Ingrese su clave personal"); 
		switch(inicio){
			case "codigo1":
			usuario = "usuario1";
			habilitarBtn();
			alert ("Bienvenido " + usuario + " ya puede realizar sus operaciones");
			break;
		case "codigo2":
			usuario = "usuario2";
			alert ("Bienvenido " + usuario + " ya puede realizar sus operaciones");
			habilitarBtn();
			break;
		default:
			alert ("Codigo incorrecto. Tu dinera ha sido retenido por cuestiones de seguridad.");
			saldoCuenta=0;
			deshabilitarBtn();
			actualizarSaldoEnPantalla();
		}
	
	}else{
	
		deshabilitarBtn();
		document.getElementById("saldo-cuenta").innerHTML = "Por favor inicie sesión";
	}
	
	
	

}


function habilitarBtn (){
			document.getElementById("btnExtraerDinero").disabled = false;
			document.getElementById("btnDepositarDinero").disabled = false;
			document.getElementById("btnPagarServicios").disabled = false;
			document.getElementById("btnTransferirDinero").disabled = false;
			document.getElementById("btnCambiarLimiteDeExtraccion").disabled = false;
			
			document.getElementById("btnInicioDeSesion").innerHTML = "Cerrar sesion";
			
			nombreUsuario 		= sessionStorage.getItem("nombreUsuario");
			saldoCuenta 		= parseInt(sessionStorage.getItem("saldoCuenta"));
			limiteExtraccion 	= parseInt(sessionStorage.getItem("limiteExtraccion"));
			saldoAnterior 		= parseInt(sessionStorage.getItem("saldoAnterior"));

			cargarNombreEnPantalla();
			actualizarSaldoEnPantalla(saldoCuenta);
			actualizarLimiteEnPantalla();
}

function deshabilitarBtn (){
			document.getElementById("btnExtraerDinero").disabled = true;
			document.getElementById("btnDepositarDinero").disabled = true;
			document.getElementById("btnPagarServicios").disabled = true;
			document.getElementById("btnTransferirDinero").disabled = true;
			document.getElementById("btnCambiarLimiteDeExtraccion").disabled = true;	
			document.getElementById("btnInicioDeSesion").innerHTML = "Iniciar sesion";
			
			/*document.getElementById("saldo-cuenta").innerHTML = "Por favor inicie sesión";*/
			
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre_user").innerHTML = "Bienvenido/a " + nombreUsuario;
	
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + nuevoLimite;
}

function crearCuentas(){
	
users = [

{
	nombreUsuario: "Daniela0",
	saldoCuenta: 0,
	dineroExtraido:0,
	dineroDepositado: 0,
},
{
	nombreUsuario: "Daniela1",
	saldoCuenta: 0,
	dineroExtraido:0,
	dineroDepositado: 0,
},

{
	nombreUsuario: "Daniela2",
	saldoCuenta: 0,
	dineroExtraido:0,
	dineroDepositado: 0,
}


]
sessionStorage["users"] = JSON.stringify(users);
//alert(JSON.stringify(users));
}

function getCuentas(){
	
	var storedNames = JSON.parse(sessionStorage.getItem("users"));	
	//alert ( storedNames[1]['nombreUsuario']);
	//alert ( storedNames[2]['nombreUsuario']);
	//alert ( storedNames[2]['dineroDepositado']);
	//alert ( "la cuenta " + storedNames[2]['nombreUsuario'] + " tiene $"+storedNames[2]['dineroDepositado'] + " en la cuenta");
}
/*


//////////////////////////
/*Multicliente: array*/

/*validar si existe.
/*
Users: [

{
	nombreUsuario: "",
	saldoCuenta: 0,
	dineroExtraido:0,
	dineroDepositado: 0,
},
{
	nombreUsuario: "Daniela0",
	saldoCuenta: 0,
	dineroExtraido:0,
	dineroDepositado: 0,
},
{
	nombreUsuario: "Daniela1",
	saldoCuenta: 0,
	dineroExtraido:0,
	dineroDepositado: 0,
},

{
	nombreUsuario: "Daniela2",
	saldoCuenta: 0,
	dineroExtraido:0,
	dineroDepositado: 0,
}


]



///////////////

*/

function validar(nuevoLimite){
	
	if (nuevoLimite===""){
		alert("sin valor");
		debugger;
		}
		else if (parseInt(nuevoLimite)===NaN){
			alert("2");
			debugger;
		}else {
			/*parseInt (nuevoLimite)*/
			alert ("El LIMITE DE EXTRACCION HA CAMBIADO \n Su nuevo limite es: "+ nuevoLimite);
						actualizarLimiteEnPantalla();
		sessionStorage.setItem("nuevoLimite",nuevoLimite);
	

		}
}
		