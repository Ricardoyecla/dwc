/*La sintaxis de asignación desestructurante (destructuring assignment) es una expresión que posibilita la extracción
de datos de arrays, o de propiedades de objetos, en variables distintas..*/

let color1,color2, resto;

[color1,color2]=["Rojo","Amarillo"];

console.log(`${color1} ${color2}`);

[color1,color2,...resto] = ["Rojo","Negro","Amarillo","Azul","Verde","Naranja"];

[color1,color2]=[color2,color1]; //intercambiar valores en una sola instrucción.
console.log(`${color1} ${color2}`);

console.log(resto)

var ClaveValor =[["Color4","Rojo"],["Color5","Amarillo"],["Color3","Esmeralda"]];
let mapaColores = new Map(ClaveValor);
console.log(mapaColores);
[...mapaColores.entries()]
console.log(mapaColores.entries()); //Devuel el array 2d del mapa

const mapaColores2= new Map([...mapaColores.entries()].sort((a,b)=>a[1].localeCompare(b[1])));

console.log(mapaColores2);

//Añade una caracter al final de todas las cadenas pasadas


function finalizaConI(c, ...otros) {
    for (i=0;i<=otros.length-1; i++){
        otros[i]=otros[i]+c;
    }
    return otros
}
console.log(finalizaConI('X',"Linu","Molinu","Siu"));


function finalizaConII(c, ...otros) {
    return  otros.map(x=>x+c)
}

console.log(finalizaConII('F',"hola","mio","silla"));

