//Tipos de Datos en JS

const { shallowReadonly } = require("vue");

//1. Undefined - (Null).
console.warn("--- Tipo de Datos UNDEFINED (No definido)")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de Dato de la Variable cliente es: ${typeof(cliente)}`);
cliente="Juvenal Viveros"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de Dato de la Variable cliente es: ${typeof(cliente)}`);
cliente=19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de Dato de la Variable cliente es: ${typeof(cliente)}`);
//console.log('El cliente ha realizado: ${cliente} en este mes.');
//Undefined es el tipo de dato por defecto se asigna a varables no inicializadas o no declaradas
//2.BOOLEAN - Boleanos - TRUE/FALSE (Falso/Verdadero)
console.warn("--- Tipo de Dato: BOOLEAN (Boleano - True/ False)")
let esPremium="No lo sé";
console.log(`¿Es el cliente Premium es: ${typeof(esPremium)}`);
console.log(`El tipo de Dato de la Variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor \"true\" a la variable.");
esPremium="true"
console.log(`El tipo de Dato de la Variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor true a la variable.")
esPremium=true
console.log(`El tipo de Dato de la Variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿Es el cliente Premium?: ${esPremium}`)
console.log("Cambiando el valor de esPremium a false")
esPremium=0;
//3.NUMBER(Numeros)
var cantidad;
const costo_producto=10.50
let saldo_cuenta=-2500.40
let monto_transaccion;
console.warn("--- Tipo de Datos - NUMBER (Numeros, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato=${typeof(saldo_cuenta)})`);
console.log(`El Producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8
console.log(`Has elegido comprar: ${cantidad} de productos`);
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
//4.STRING (cadena de caracteres).
console.warn("--- Tipo de Datos -STRING (cadena de caracteres) ");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)})`);
//Inicializamos el valor de la variable producto.
Producto="MONITOR 20\" FULL HD"
console,log(`El nombre del PROCTO es: ${Producto}, que es un tipo de dato ${typeof(Producto)}`);
//Manipulando los STRINGS
console.log(`Mas adelante podremos transformar el contenido de los de los STRINGS usando los metodos y funciones especificas, como convertir su valor a mayusculas: ${alumno}=>${alumno.toUpperCase()}`);
console.log(`O en su defecto a minusculas: ${Producto}=>${Producto.toLowerCase()}`);
//5. BIGINT (Numero de Mayor Amplitud)
console.warn("--- Tipo de Datos -BIGINT (Numero de Mayor Amplitud)");
const numeroGrande=1234567890
const numeroGrande2=12345678901234567890
const numeroGrande3=123456789012345678901234567890
const numeroGrande4=1234567890123456789012345678901234567890

console.log(`El primero experimento de un numero grande es: ${numeroGrande}, que si es soportado pro NUMBER, y tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El primero experimento de un numero grande es: ${numeroGrande2}, que si es soportado pro NUMBER, y tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El primero experimento de un numero grande es: ${numeroGrande3}, que No es soportado pro NUMBER, perdiendo presicion, y tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El primero experimento de un numero grande es: ${numeroGrande4}, que No es soportado pro NUMBER, perdiendo presicion, y tipo de dato es: ${typeof(numeroGrande4)}`);

numeroGrande3=BigInt(123456789012345678901234567890);
console.log(`El quinto experimento de un numero grande es: ${numeroGrande3}, que ya fue convertido a BIGINT, y tipo de dato es: ${typeof(numeroGrande3)}`);
numeroGrande4=BigInt(1234567890123456789012345678901234567890);
console.log(`El quinto experimento de un numero grande es: ${numeroGrande4}, que ya fue convertido a BIGINT, y tipo de dato es: ${typeof(numeroGrande4)}`);
 //¿Se pueden realizar operaciones matematicas entre un NUMBER y un BIGINT?.
 const numero=129;
 console.log(`Intentando realizar la suma de: numero + numeroGrande3, el resultado es: ${BIGINT(numero) + numeroGrande3}`)
 //6. SYMBOL (simbolo)
 console.warn('--- Tipo de dato SYMBOL (simbolo)')
 const numero1=5;
 const numero2=5.0;
 const numero3="5";
 const numero4="5.0";
 const numero5=Symbol(5)
 const numero6=Symbol(5)
 const numero7=Symbol(5.0)
 const numero8=Symbol("5")
 const numero9=Symbol("5.0")
 //Pruebas comparativas
 //1
 console.log("¿Es 5=5.0?")
 if(numero1==numero2)
 console.log("Se comparo numero1 con numero2, determinando que tienen el mismo valor.")
else
console.log("Se comparo numero1 con numero2, determinando que No tienen el mismo valor.")

console.log("¿Es 5=\"5\"?")
 if(numero1==numero3)
 console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
 else
 console.log("Se comparo numero1 con numero3, determinando que No tienen el mismo valor.")

 console.log("¿Es 5===\"5.0\?")
 if(numero1==numero4)
 console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
else
console.log("Se comparo numero1 con numero4, determinando que No tienen el mismo valor, pero No es el mismo Dato.")

console.log("¿Es 5===Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: number y numero5 del tipo: Symbol")
 if(numero1===numero5)//Estrictamente igual (Equidad)=Mismo Valor, mismo tipo de dato.
 console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor.")
else
console.log("Se comparo numero1 con numero5, determinando que No tienen el mismo valor, pero No es el mismo Dato.")
console.log("¿Es 5===Symbol(5)?")
 if(numero1===numero6)
 console.log("Se comparo numero1 con numero6, determinando que tienen el mismo valor.")
else
console.log("Se comparo numero1 con numero6, determinando que No tienen el mismo valor.")
console.log("¿Es 5===Symbol(5.0)?")
 if(numero1===numero7)
 console.log("Se comparo numero1 con numero7, determinando que tienen el mismo valor.")
else
console.log("Se comparo numero1 con numero7, determinando que No tienen el mismo valor.")
//8
console.log(`¿Es 5===Symbol("5.0")?, antes de compararlos analizamos que tipo de dato son: siendo numero5 del tipo ${typeof(numero5)} y numero6 del tipo: ${typeof(numero6)}`)
 if(numero1===numero8)//Estrictamente igual(equidad)=Mismo valor, mismo tipo de dato
 console.log("Se comparo numero1 con numero8, determinando que tienen el mismo valor.")
else
console.log("Se comparo numero1 con numero8, determinando que No tienen el mismo valor.")

console.log("¿Es 5===Symbol(\"5.0\)?")
 if(numero1===numero9)
 console.log("Se comparo numero1 con numero9, determinando que tienen el mismo valor.")
else
console.log("Se comparo numero1 con numero9, determinando que No tienen el mismo valor.")
//7. NULL
console.warn("--Tipo de Dato -NULL (Nulo o Vacio)")
//El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la Variable pero prefieren dejarlo vacio, bajo su consentimiento, a diferencia de UNDEFIEND que es un valor desconocido por DEFAULT por JS.
let passUsuario=null;
let generoUsuaro=null;
let estatusRelacionSentimental=null;
let fecha_ultimopost;
//Supongamos que estamos programando Red social, tipo Facebook, en la que parye de la informacion se publicara en el perfil del usuario.
//Si el usuario no ha iniciado sesion en el dispositivo movil o en la aplicacion web, puede explorar contenido de acceso publico. y no existira informacion para mostrar.

nombreUsuario="230196@utxicotepec.edu.mx";
passUsuario="pass123";
// en este momento de ejecucion del sistema no sabemos su genero, ni su estatus de relacion sentimental.
console.log(`El usuario: ${nombreUsuario} esta intentado logearse con una contraseña de:${passUsuario}`);
//Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos y en caso de que los datos sean correctos
generoUsuaro="H"
estatusRelacionSentimental=null