//  Ejercicio 08 - atributos de Acceso en TypeScript

class Persona {
    private nombre: string;
    private edad: number;

    public constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public get Edad(): number {
        return this.edad;
    }

    public set Edad(edad: number) {
        this.Edad = edad;
    }

    public toString(): string {
        return "Nombre: " + this.nombre +", Edad: " + this.edad;
    }
}

var roberto = new Persona('Roberto Salazar', 52);
var juan = new Persona('Juan Pérez', 58);

console.log(roberto.getNombre());
roberto.setNombre('Pedrita López');
console.log(roberto.getNombre());

console.log( roberto.toString() );
