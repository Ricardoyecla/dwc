//Función Constructora.

function Poligono_regular(lados,nombre) {
    this.lados=lados;
    this.nombre=nombre;
    this.mostrarInfo=()=>`Soy un ${this.nombre} y tengo ${this.lados} lados\n`;
}
Poligono_regular.prototype.U;
Poligono_regular.prototype.U=5;

Poligono_regular.prototype.Angulo_Interior=function(){
    return 180*(this.lados-2)/this.lados;
}


function Cuadrado(){
   this.__proto__=new Poligono_regular(4,"Cuadrado");
    this.mostrarInfo=()=>"hola";
    this.solodelCuadrado="SoloMia";
}

let a=new Poligono_regular(4,'Cuadrado');
let b=new Poligono_regular(3,"Triangulo");

let c=new Cuadrado();

console.log(c)
console.log(c.mostrarInfo())

a.U=4;

console.log(a.Angulo_Interior());
console.log(a)
console.log(b);
console.log(c.Angulo_Interior())





