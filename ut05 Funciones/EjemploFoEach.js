const colores=["Óxido",,"Ámbar","azul",,"negro","Gris","Naranga","granate","oro"]; // Hay elementos indefinidos.

console.log(colores)

function mostraR(valor){
    console.log(`Valor: ${valor}`);
}
colores.forEach(mostraR);

function mostrarR2(valor,indice) {
    console.log(`Valor: ${valor} Indice: ${indice}`);
}
colores.forEach(mostrarR2);

const colores1=new Map();
colores1.set("C1","Óxido").set("C2","Ámbar").set("C3","Naranga").set("C4","azul").set("C5","granate").set("C6","oro10");

colores1.forEach((valor,clave)=>console.log(`La clave: ${clave} tiene el valor ${valor}`));

colores1.forEach(valor=>console.log(`Valor ${valor}`));