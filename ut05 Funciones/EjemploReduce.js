/*El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo
como resultado un único valor.

arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

 */
const numeros=[1,,3,4,5,6,7,,9]

console.log(numeros.reduce((acumulador,actual)=>{
    console.log(`Acumulador: ${acumulador} Actual ${actual}`)
    return acumulador+actual})); // no modifica el contenido del array.

console.log(numeros.reduce((acumulador,actual)=>acumulador+actual,35)); // Segundo parámetro de reduce


console.log(numeros.reduce((acumulador,actual,i)=>{
    console.log(`Acumulador: ${acumulador} Actual ${actual} Indice ${i}`)
    acumulador = i % 2 == 0 ? acumulador+actual : acumulador
    return acumulador},0)); // no modifica el contenido del array.