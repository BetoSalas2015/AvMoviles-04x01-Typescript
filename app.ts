//  Ejercicio11 - Argumentos Obligatorios, Opcionales y por defecto

class Empleado {
    private Nombre: string;
    private Apellido: string;
    private Salario: number;

    public constructor(nom: string, pos: string = 'Trabajador', sal?: number) {
        this.Nombre = nom;
        this.Apellido = pos;
        if (sal) {
            this.Salario = sal;
        } else {
            this.Salario = 0.0;
        }
    }
}

var Roberto = new Empleado('Roberto');
console.log(Roberto);

