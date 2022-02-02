const categorias = ["COMIDA", "ALQUILER", "ENTRETENIMIENTO", "FACTURAS"];
const gastos = [["Salida peliculas Spider-Man x2","ENTRETENIMIENTO",680.00,"15-01-2022"],
                ["Pago de luz Enero 2022","FACTURAS",350.00,"01-02-2022"],
                ["Pago alquiler Diciembre 2021", "ALQUILER",15000.00,"10-01-2022"],
                ["Pago celular Movistar","FACTURAS",750.00,"06-01-2022"]];

const ver_categorias = () =>{
    let listado = "";
    for (let index = 0; index < categorias.length; index++) {
        listado += (index + 1).toString() + ". " + categorias[index] + " \n";
    }
    return listado;
} 

const ver_gastos = () => {
    let listado = "";
    gastos.forEach(gasto => {
        listado += gasto[0] + " - " + gasto[1] + " - $" + gasto[2] + " - " + gasto[3] + "\n";
    });
    return listado;
}

const ver_menu = () => {
    let menu = "1. Nuevo gasto\n";
    menu += "2. Ver gastos\n";
    menu += "3. Categorias\n";
    menu += "4. Informes\n";
    menu += "0. Salir\n";
    return menu;
}

const agregar_gasto = (descripcion, categoria, monto, fecha) =>{
    gastos.push([descripcion,categoria, monto, fecha]);
}


const menu_agregar_gasto = () =>{
    let descripcion = prompt("Ingrese una descripción del gasto: ");
    let index_categoria = 0;
    do{
        index_categoria = parseInt(prompt("Seleccione una de las categorías: \n" + ver_categorias())) - 1;
        if(categorias.length <= index_categoria || index_categoria < 0)
        {
            alert("Ingrese una opción válida del listado");
        }
    }while(categorias.length < index_categoria || index_categoria < 1);
    let categoria = categorias[index_categoria];
    let monto = prompt("Ingrese el monto del gasto: ");
    let fecha = new Date(Date.now());
    agregar_gasto(descripcion,categoria,monto,fecha);
}


console.log("Bienvenido a Mis Cuentas");
console.log("Esta aplicación te va a permitir organizar y analizar tus gastos del día a día");
alert("Bienvenido a Mis Cuentas \n Esta aplicación te va a permitir organizar y analizar tus gastos del día a día");
console.log(gastos);
let opcion = '0';


do{
    opcion = prompt("Ingresa una opción del menú: \n" + ver_menu());
    switch (opcion) {
        case '1':
            menu_agregar_gasto();
            break;
        case '2':
            alert(ver_gastos());
            break;
        case '3':
            alert(ver_categorias());
            break;
        case '4':
            alert("En construccion... próximamente aquí informes y estadísticas");
            break;
        case '0':
            alert("Saludos! Vuelve pronto");
            break;
        default:
            alert("Ingrese una opción del menú");
            break;
    }
}while(opcion != '0');




