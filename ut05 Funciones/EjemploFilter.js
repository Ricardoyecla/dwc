/*El método filter() crea un nuevo array con todos los elementos que cumplan la condición
 implementada por la función dada.*/

const colores=["Óxido",,"Ámbar","azul",,"negro","Gris","Naranga","granate","oro"]; // Hay elementos indefinidos.

/*function TamanaMayor6(elemento) {
    return elemento.length>6
}
console.log(colores.filter(TamanaMayor6));
*/


console.log(colores.filter(color=>color.length<6));
