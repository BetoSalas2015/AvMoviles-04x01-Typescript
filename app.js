//  Ejercicio11 - Argumentos Obligatorios, Opcionales y por defecto
var Empleado = /** @class */ (function () {
    function Empleado(nom, pos, sal) {
        if (pos === void 0) { pos = 'Trabajador'; }
        this.Nombre = nom;
        this.Apellido = pos;
        if (sal) {
            this.Salario = sal;
        }
        else {
            this.Salario = 0.0;
        }
    }
    return Empleado;
}());
var Roberto = new Empleado('Roberto');
console.log(Roberto);
