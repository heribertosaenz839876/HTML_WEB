console.log("Hello World");
const colores = ["red", "blue"];
console.log (colores[0]);
colores[0]=523;
console.log (colores[0]);
colores[2]=8;

let alumno = {
    nombre:"Luis",
    edad: 20,
    imprime(){
        console.log(this.nombre+" "+this.
        edad);
    },
};

alumno.imprime();
alumno["edad"]++;

function fun2(){
    console.log("Hola 2");
}

const funcion = (name) => {console.log("Hola "+name);
};

funcion("Luis");