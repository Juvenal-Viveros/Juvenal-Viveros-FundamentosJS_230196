const bg = "linear-gradient(11deg, rgba(2, 0, 36, 1) 0% rgba(9, 9, 121, 1) 33%, rgba(0, 212, 255, 1) 86%)";
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
        Producto_Clave: 316,
        Comprador_Clave: 3216,
        Cantidad: 2,
        Estatus: "Carrito de Compra",

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
    
    //PRÁCTICA 4 fusionada con los 8 tipos de datos.
    //Hacer commit si te salió todo esto.