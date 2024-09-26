
const bg = "linear-gradient(11deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 33%, rgba(0, 212, 255, 1) 86%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding: 4px; font-size; 1.0rem; font-weight:bold`

//Personalización de las salidas de consola
console.warn("---Práctica 05: Repaso de Objetos En JS");

//VARIABLES INDEPENDIENTES

console.log("%c1. - Variables Independientes ", style_console);

//DECLARAMOS VALORES INDEPENDIENTES RELACIONADOS A UN PRODUCTO
//Esto no es un objeto, son variables independientes.
let Producto_Nombre = "Computadora Laptop 1\"";
let Producto_Marca = "ASUS";
let Producto_Modelo = "TUF 17"
let Producto_Precio = 15749.50;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("TUF707VV-HX221W")
let Producto_Stock = 15;
let Producto_Imagen = null;
let Producto_Barcode ;
let Producto_Categorias = ["Electrónicos", "Computación", "Gaming", "Promociones Buen Fin", "Mejor Valotrados"]


//Accedemos a los valores de las características del producto de manera independiente
console.log(`Los datos del PRODUCTO son: \n"
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad},Tipo de Dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Nombre)}>`);

    console.log("En el caso del SKU al ser un symbol, no se puede concatenar a la cadena de impresión anterior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

    //Ahora lo declaramos como un objeto
    console.log("%c2. - Variables Independientes ", style_console);

    let Producto =
    {
        ID:316,
        Nombre : "Tenis Deportivos",
        Marca: "Nikes",
        Modelo: "Jordan '24",
        Precio: 3361.25,
        Disponibilidad: false,
        Stock: 0,
        SKU: "DZ5485-612",
        Imagen: "../ruta/sajkfdsf/uksqbhkjskjs/mksnfjnds",
        Barcode: null,
        Categorias: ["Deportes", "Tenis", "Juvenil"]
    }

    //Ahora leemos el objeto completo
    console.table(Producto);
    

    //Para acceder a las propiedades del objeto usmaos un "." y el nombre de la propiedad a leer.

    console.log("Accediendo a las propiedades especificas del producto");
    console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`);
        console.log(`Precio: ${Producto.Precio}`);
        if (Producto.Disponibilidad == 0) {
            console.log(`Estatus: Agotado`)    
        }else{

        }
        
    //INVESTIGA LA DESESTRUCTURACIÓN DE OBJETOS, TE VA A AYUDAR. Y ES TAREA.

    //DESESTRUCTURACIÓN DE DATOS

    console.log("%c3. - Desestructuración de un objeto ", style_console);    
    
    let Producto2 =
    {
        Clave: 3216,
        Nombre : "Lentes Deportivos",
        Marca: "Oakley",
        Modelo: "QNTM Kato",
        Precio: 6829.00,
        Disponibilidad: true,
        Stock: 5,
        SKU: "009481D-0356",
        Imagen: "../ruta/gghgfjfsf/uioymhbjs/mnbvmxvm",
        Barcode: 888392491626,
        Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
    }


    let Comprador =
    {
        Nombre : "Daniel de J.",
        Apellido: "Bravo Godinez",
        Tipo: "Frecuente",
        Correo: "blacktemplehood@gmail.com",
        PaisOrigen: "México",
        SaldoActual: 14000.00
    }

    let Pedido = 
    {
        ID:5816,
        Producto_Clave: 316,
        Comprador_Clave: 3216,
        Cantidad: 2,
        Estatus: "Carrito de Compra",
        TipoPago:"Tarjeta De Credito"
    }

    //En base de a llos 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

    let {Precio: Producto_Precio2} = Producto2;
    let {Cantidad: Pedido_Cantidad} = Pedido;
    let {SaldoActual: Cliente_SaldoActual} = Comprador;
    let Costo_Compra = Producto_Precio2 * Pedido_Cantidad;

    console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: ${(Pedido_Cantidad * Producto_Precio)}`);
    if (Costo_Compra < Cliente_SaldoActual) {
        console.log("El cliente tiene saldo suficiente");
    }
    //Actualizar el valor de los Objetos
    console.log("%c4.-Actualizar el valor de las propiedades de un objeto",style_console);
    console.log(`El objeto actualmente tiene los siguentes valores: `)
    console.log(JSON.stringify(Producto2,null,2));
    //convierte el objeto a una cadena para evitar problemas con la referencia
    console.log(`Por cuestiones de inflacion del costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6.915.00`)
    //Para modificar el valor de un objeto basta con igualar el valor de la propiedad deseada
    Producto2.Precio=6915.00;
    console.log(`Los nuevos valores del Producto son: `)
    console.log(Producto2);
    //¿Puedo cambiar no solo el valor, si no el tipo de dato de un objeto en javaScript?
    console.log(`---------------------------------------------------------------`)
    console.log(`El objeto actualmente tiene los siguentes valores`)
    let tipoDisponibilidad=typeof(Producto.Disponibilidad)
    console.log(`El tipo de dato de la Disponibilidad es: ${tipoDisponibilidad}`)
    console.log(JSON.stringify(Producto2,null,2))//Disponibilidad Booleano
    Producto2.Disponibilidad="sí";
    let nuevoTipoDisponibilidad=typeof(Producto2.Disponibilidad)
    console.log(Producto2);
    console.log(`El nuevo tipo de Disponibilidad es: ${nuevoTipoDisponibilidad}`)
    //Agregar nuevas propiedades a los objetos
    console.log("%c5.-Agregar nuevas propiedades a los objetos",style_console);
    //Para agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propiedad con su valor por defecto.
    Comprador['Dirección']="Av. Benito Juárez No. 1525, Interior 4D, xicotepec de Juárez, Puebla, Mexico"
    Comprador['Tipo']="nuevo Cliente"
    Comprador['ActividadReciente']=true
    Comprador['TotalCompras']=3516.25
    console.log("Después de haber agregado las propiedades; Dirección, Tipo, ActividadReciente y TotalCompras...")
    console.table(Comprador)
    //Eliminar Propiedades existentes de un objeto
    console.log("%c6.- Eliminar  propiedades existentes de un objeto", style_console);
    console.log("La estructura y valores del objeto PEDIDO son previos a la modificación: ")
    console.table(Pedido)
    delete Pedido.TipoPago
    console.log("Despues de la modificación...")
    console.table(Pedido)
     
    console.log("%c7.- Metododos para controlar la mutabilidad de los objeto, Congelacion (FREEZE)", style_console);
    //Si deseamos permitir que los objetos sean modificados ni en estructura, ni en valor, utilizanremos el método FREEZE (congelar).
    console.log(`La estructura actual del Objeto COMPRADOR es: `)
    console.table(Comprador)
    Object.freeze(Comprador)
    //Intentamos agregar, eliminar o modificar los valores de sus propiedades
    Comprador.FechaUltimaCompra="05/09/2024 10:15:25"
    delete Comprador.Tipo;
    Comprador.Dirección="Calle 16 de Septiembre #102, Col. Manantiales, Huauchinango, Puebla, México.";
    console.log(`Verificamos si se realizaron los cambios en el objeto COMPRADOR: `)
    console.table(Comprador)

    console.log("%c8.- Metododos para controlar la mutabilidad de los objeto, sellado (SEAL)", style_console);
    //Sin embargo, en el caso que desemos poder modificar los valores de las propiedades del Objeto, pero no su estructura, usaremos SEAL
    console.log(`Objeto antes de ser modificado: `)
    console.table(Pedido)
    //sellamos el objeto
    Object.seal(Pedido)
    //In tentamos modificar su estructura
    Pedido[`FechaPedido`]="25/09/2024 11:05:03"
    delete Pedido[`Cantidad`]
    console.log(`Verificamos si se realizaron los cambios en el Objetivo PEDIDO: `)
    //Ahora intentamos modificar el valor de las propiedades
    Pedido.Cantidad=5
    console.log(`Verificamos si se realizaron los cambios en el Objeto PEDIDO: `)

    console.log("%c9.- Destructuración de 2 o más objetos", style_console);
    let {Precio: ProductoPrecio, Marca: ProductoMarca}=Producto
    let {Correo: ClienteCorreo, PaisOrigen: ClientePais, SaldoActual: ClienteSaldo, Tipo: ClienteTipo}=Comprador

    //Transformar valores cuantitativos en cualitativos
    if(ProductoPrecio>2000)
        ProductoPrecio="Caro"
    else
    ProductoPrecio="Barato"

    if(ClienteSaldo>0)
    ClienteSaldo="A favor"
    else if(ClienteSaldo<0)
        ClienteSaldo="En contra"
    ClienteSaldo="sin deuda"
    //Transformar valores Cualitativos en Cuantitativos
    let ClienteNivel;
    if(ClienteTipo=="Premium")
        ClienteNivel=1
    if(ClienteTipo=="Freemium")
        ClienteNivel=2
    if(ClienteTipo=="No identificado")
        ClienteNivel=3
    //Clasificamos al cliente por su pais de Origen
    if(ClientePais=="México")
        ClientePais="Nacional"
    else
    ClientePais="Extranjero"

    //OLE -Objet Literal Enhacement
    let datosClientePromociones={ClienteCorreo, ClientePais, ClienteNivel, ClienteSaldo, ProductoMarca, ProductoPrecio}
    //El nuevo objeto creamos seria un ejemplo de la informacion que enviariamos al area de Marketing la diffusion de promociones
    console.log("Los datos del cliente y sus habitos de compra son: ")
    console.table(datosClientePromociones)

    console.log("%c10.- Unión de Objetos usando el método de asignaón (ASSING)", style_console);
    console.log("Imprimimos la estructura y valores del Objeto PRODUCTO")
    console.table(Producto);
    console.log("Imprimimos la estructura y valores del Objeto PEDIDO")
    console.table(Pedido);
    //Suponiendo que el usuarios ya realizo el pago el pedido se convirtira en una VENTA que requiere informacion de ambos objetos
    const VENTA=Object.assign(Producto, Pedido);
    console.log("Consultamos este nuevo objeto VENTA ")
    console.table(VENTA);

    