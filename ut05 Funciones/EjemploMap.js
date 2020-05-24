/*El método map() crea un nuevo array con los resultados de la
llamada a la función indicada aplicados a cada uno de sus elementos.
 */
const colores=["Óxido",,"Ámbar","azul",,"negro","Gris","Naranga","granate","oro"];

console.log(colores.map((v,i)=>v.toUpperCase()+i)); // no modifica el contenido del array.
