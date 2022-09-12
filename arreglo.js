
//CREA EL ARREGLO.
let myArray = [3,5];

console.log(menuOperaciones())
function menuOperaciones(){
    console.log("\n")
    console.log('Menu de operaciones basicas de un arreglo.')
    console.log('1.- INGRESAR un elemento en el arreglo.')
    console.log('2.- ELIMINAR un elemento en el arreglo.')
    console.log('3.- EDITAR un elemento en el arreglo.')
    console.log('4.- BUSCAR un elemento en el arreglo.')
    console.log('5.- IMPRIMIR dado un indice.')
    console.log('6.- IMPRIMIR todo el arreglo.')
    console.log('7.- IMPRIMIR suma y promedio de elementos del arreglo.')
    console.log('8.- SALIR')
    console.log("\n")

}

let lectura = require("readline-sync");
let numeroOpcion = lectura.question("Ingresa la opcion que quieres ejecutar: ");

switch (numeroOpcion){
    case '1':
        añadirElemento();
        break;
    case '2':
        eliminarElemento();
        break;
    case '3':
        editarElemento();
        break;
    case '4':
        buscarElemento();
        break;
    case '5':
        imprimirConIndice();
        break;
    case '6':
        recorreArreglo();
        break;
    case '7':
        sumaPromedio();
        break;
    case '8':
        process.exit();
        break;
}

//----------------------------------------------------------------------------------------------------
// 1.-  AÑADE UN ELEMENTO AL INCIO DEL ARREGLO.
function añadirElemento(){
    let lecturaAñadir = require("readline-sync")
    let numero = lecturaAñadir.questionInt('Ingresa el numero que deseas Agregar: ');
    myArray.unshift(numero);
    return console.log(myArray);
}

//----------------------------------------------------------------------------------------------------
// 2.- ELIMINA UN ELEMENTO DEL ARREGLO.
function eliminarElemento(){
    let posicionNumero = require("readline-sync")
    let elimina = posicionNumero.questionInt('Dame la posicion del numero: ')
    myArray.splice(elimina,elimina+1);
    return console.log(myArray);
}

//----------------------------------------------------------------------------------------------------
// 3.- EDITA UN ELEMENTO DEL ARREGLO.
function editarElemento(){
    let posicion = input('Dame la posicion del elemento: ')
    let nuevoValor = input('Dame el nuevo valor del elemento: ')
    myArray.splice(posicion, posicion+1, nuevoValor);
    console.log(myArray);
}

//----------------------------------------------------------------------------------------------------
// 4.- BUSCA UN ELEMENTO DADO SU INDICE.
function buscarElemento(){
    let valorBusqueda = input('Dame el valor del elemento que buscas: ')
    console.log(myArray.indexOf(valorBusqueda));
}

//----------------------------------------------------------------------------------------------------
// 5.- IMPRIMIR DADO UN INDICE.
// Validar si no existe el indice.
// modificar el "1" por "i".
function imprimirConIndice(i){
    console.log('El elemento en el Indice:', i + ' ' + 'es:', myArray[i]);
}

//----------------------------------------------------------------------------------------------------
// 6.- RECORRE EL ARREGLO PARA MOSTRAR SU POSICION Y VALOR.
function recorreArreglo(){
    for(let i=0; i<myArray.length; i++){
        console.log('Elemento en el Indice:', i + ' ' + 'es:', myArray[i]);
    }
}

//----------------------------------------------------------------------------------------------------
// 7.- SUMA DE VALORES & PROMEDIO DE LOS VALORES.
function sumaPromedio(){
    const valorInicial = 0;
    const suma = myArray.reduce((previousValue, currentValue) => previousValue + currentValue, valorInicial);
    const promedio = suma / myArray.length;
    console.log(suma)
    console.log(promedio)
}




function menu(){
    
}