
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
        imprimirElemento();
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
    let posicionEdit = require("readline-sync")
    let pos = posicionEdit.questionInt('Dame la posicion del elemento: ')
    let nuevoValor = require("readline-sync")
    let nuevo = nuevoValor.questionInt('Dame el nuevo valor: ')
    myArray.splice(pos, pos+1, nuevo);
    return console.log(myArray);
}

//----------------------------------------------------------------------------------------------------
// 4.- BUSCA UN ELEMENTO DADO SU INDICE.
function buscarElemento(){
    let valorBusqueda = require("readline-sync")
    let valor = valorBusqueda.questionInt('Dame el valor del elemento que buscas: ')
    return console.log(myArray.indexOf(valor));
}

//----------------------------------------------------------------------------------------------------
// 5.- IMPRIMIR DADO UN INDICE.
// Validar si no existe el indice.
// modificar el "1" por "i".
function imprimirElemento(){
    let valorBusqueda = require("readline-sync")
    let valor = valorBusqueda.questionInt('Dame el valor del elemento que buscas: ')
    return console.log(myArray.indexOf(valor));
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
    console.log('La suma es: '+ suma)
    console.log('El promedio es: '+ promedio)
}
