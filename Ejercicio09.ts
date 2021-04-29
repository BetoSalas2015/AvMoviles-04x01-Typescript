//  Ejercicio 09 - Interfaces en TypeScript

interface Nombre {
    nombre: string;
    apellido: string;
    
}

class Persona {
    private nom: Nombre;
    private edad: number;

    public constructor(nombre: Nombre, edad: number) {
        this.nom.nombre = nombre.nombre;
        this.edad = edad;
    }

    public getNombre(): string {
        return this.nom.nombre;
    }

    public setNombre(nombre: string): void {
        this.nom.nombre = nombre;
    }

    public get Edad(): number {
        return this.edad;
    }

    public set Edad(edad: number) {
        this.Edad = edad;
    }

    public toString(): string {
        return "Nombre: " + this.nom.nombre +", Edad: " + this.edad;
    }
}

var persona1 = { nombre: 'Roberto', apellido: 'salazar' };
var roberto = new Persona(persona1, 52);
//var juan = new Persona('Juan Pérez', 58);

console.log(roberto.getNombre());
roberto.setNombre('Pedrita López');
console.log(roberto.getNombre());

console.log( roberto.toString() );
