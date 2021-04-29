//  Ejercicio 05 - Setters y Getters en TypeScript

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
}

var roberto = new Persona('Roberto Salazar', 52);
var juan = new Persona('Juan Pérez', 58);

console.log(roberto.getNombre());
roberto.setNombre('Pedrita López');
console.log(roberto.getNombre());