//  Ejercicio 04 - Fundamentos de POO en TypeScript

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

var roberto = new Persona('Roberto Salazar', 52);
var juan = new Persona('Juan Pérez', 58);