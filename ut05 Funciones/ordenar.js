const colores=["Óxido","Ámbar","azul","negro","Gris","Naranga","granate","oro"];

colores.sort();

console.log(colores);

let c1="verde"
let c2="oro";
let c3="Óxido";

console.log(c1.localeCompare(c2,"es"));
console.log(c3.localeCompare(c1,"es"));
console.log(c1.localeCompare(c1,"es"));

function ComoCompararColores(color1,color2){
    return color1.localeCompare(color2,"es");
}

colores.sort(ComoCompararColores) //Le paso solo el nombre de la función no hay parametros
console.log(colores)

colores.sort(function (c1,c2){
    return c1.localeCompare(c2,"es")
})

console.log(colores)

colores.sort((c1,c2)=>  c1.localeCompare(c2,"es"))

console.log(colores)

const colores1=["Óxido","Ámbar","azul","negro","Gris","Naranga","granate","oro11","oro10","oro12"];

colores1.sort((c1,c2)=>  c1.length-c2.length)

console.log(colores1)

colores1.sort((c1,c2)=>  {
    return c1.length-c2.length == 0 ? c1.localeCompare(c2,"es") : c1.length-c2.length;

})

console.log(colores1)