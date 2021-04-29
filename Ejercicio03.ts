//  Ejercicio 03 - Funciones y tipos datos en TypeScript

function regresaNumero(numero: number): number {
    return numero;
}

var numero1: number;
var numero2: string;

numero1 = regresaNumero(5);         // Correcto
numero2 = regresaNumero(5);         // ERROR: tipos incompatibles

