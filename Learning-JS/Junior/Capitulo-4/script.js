// ! Metodos de Strings ------------------------------------------|>

/**
 * concat() > Junta dos o mas cadenas y retorna una nueva
 *
 * startsWith(@param) > Si una cadena empieza con @param => true
 * endsWith(@param) > Si una cadena termina con @param => true
 * includes(@param) > Si una cadena incluye @param => true
 * indexOf(@param) > Devuelve el primer indice de la cadena, si no se encuentra retorna -1
 * lastIndexOf(@param) > Lo mismo que el anterior pero devuelve el ultimo
 *
 * padStart(@param) > Rellenar la cadena al principio con los caracteres deseados
 * padEnd(@param) > Rellenar la cadena al final con los caracteres deseados
 * repeat(@para) > Devuelve la misma cadena, pero repetida @param veces
 *
 * split(@param) > Divide la cadema como le pidamos
 * substring(@param) > Retorna un pedazo de la cadena que selecciona
 * toLowerCase() > Convierte una cadena a Miniscula
 * toUpperCase() > Convierte una cadena a Mayuscula
 * toString() > Retorna una cadena que representa al objeto
 * trim() > Elimina los espacios en blanco al principio y al final de una cadena
 * trimEnd() > Elimina los espacios en blanco al final de una cadena
 * trimStart() > Elimina los espacios en blanco al inicio de una cadena
 * valueOf() > Retorna el valor positivo de un objeto String
 *
 *
 *
 *
 */

// let cadena = "Cadena de prueba";

// console.log(cadena.concat("Hola"));

// console.log(cadena.startsWith("Cadena"));

// console.log(cadena.endsWith("prueba"));

// console.log(cadena.includes("de"));

// console.log(cadena.indexOf("prueba"));

// console.log(cadena.padStart(25, "a"));

// console.log(cadena.padEnd(25, "a"));

// console.log(cadena.repeat(2));

// console.log(cadena.split(" "));

// console.log(cadena.substring(0, 2));

// console.log(cadena.toLowerCase());

// console.log(cadena.toUpperCase());

// console.log(cadena.toString());

// console.log(cadena.trim());

// console.log(cadena.trimStart());

// console.log(cadena.trimEnd());

// ! Metodos de Arrays -------------------------------------------|>

/**
 * pop() > Elimina el ultimo elemento de un array y lo retorna
 * shift() > Elimina el primer elemento de un array y lo retorna
 * push(@param) > Agregar un elemento al array al final
 * reverse() > Invierte el orden de los elementos de un array
 * unshift(@param) > Agregar elementos al principio del array
 * sort() > Ordena los elementos de un array y lo retorna [Orden lexico-grafico]
 * splice(@param, @param) > Cambia el contenido de un array eliminando elementos existentens y/o agregando nuevos elementos
 *
 * join(@param) > Une todos los elementos de aun array separandolos por @param
 * slice() > Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin
 *
 * filter() > Crea un nuevo array con todos los elementos que cumplan la condicion
 * forEach() > Ejecuta una funcion indicada por cada elemento en el array
 *
 */

// let nombres = ["Pedro", "Maria", "Jorge", "Samuel", "Jose"];

// console.log(nombres.pop());

// console.log(nombres.shift());

// console.log(nombres.push("Juancito"));

// console.log(nombres.reverse());

// console.log(nombres.unshift("Felipe"));

// console.log(nombres.sort());

// console.log(nombres.splice(0, 2));

// console.log(nombres.join(" - "));

// console.log(nombres.slice(0, 2));

// document.write(nombres.filter((nombre) => nombre.length > 6))

// nombres.forEach((nombre) => {
//     document.write(nombre.toUpperCase());
// })

// ! Objeto Math -------------------------------------------------|>

/**
 * sqrt() > Raiz cuadrada
 * cbrt() > Raiz cubica
 * max() > Devuelve el numero mayor
 * min() > Devuelve el numero menor
 * random() > Numero aleatorio entre 0 y 1
 * round() > Redondea al entero mas cercano
 * floor() > Redondea hacia abajo
 * ceil() > Redondea hacia arriba
 * fround() > Redondea a 4 Bytes xD?
 * trunc() > Devuelve la parte decimal de un numero
 *
 *
 *
 *
 */

class Calculadora {
    static sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }

    static restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }

    static multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }

    static dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }

    static potenciar(num, exp) {
        return num ** exp;
    }

    static raizCuadrada(num) {
        return Math.sqrt(num);
    }

    static raizCubica(num) {
        return Math.cbrt(num);
    }
}


let opciones = ["Sumar", "Restar", "Multiplicar", "Dividir", "Potenciacion", "Raiz cuadrada", "Raiz cubica"];

let resultado = opciones.map((elemento, index) => `${index + 1}. ${elemento}`).join(' | ');

alert(resultado);

let opcionIngresada = prompt("Ingrese una opcion: ");


switch (opcionIngresada) {
    case "1": {
        let num1 = prompt("Ingrese el primer numero: ");
        let num2 = prompt("Ingrese el segundo numero: ");
        alert(`Resultado: ${Calculadora.sumar(num1, num2)}`);
        break;
    }

    case "2": {
        let num1 = prompt("Ingrese el primer numero: ");
        let num2 = prompt("Ingrese el segundo numero: ");
        alert(`Resultado: ${Calculadora.restar(num1, num2)}`);
        break;
    }

    case "3": {
        let num1 = prompt("Ingrese el primer numero: ");
        let num2 = prompt("Ingrese el segundo numero: ");
        alert(`Resultado: ${Calculadora.multiplicar(num1, num2)}`);
        break;
    }

    case "4": {
        let num1 = prompt("Ingrese el primer numero: ");
        let num2 = prompt("Ingrese el segundo numero: ");
        alert(`Resultado: ${Calculadora.dividir(num1, num2)}`);
        break;
    }

    case "5": {
        let num1 = prompt("Ingrese el numero: ");
        let num2 = prompt("Ingrese el exponente: ");
        alert(`Resultado: ${Calculadora.potenciar(num1, num2)}`);
        break;
    }

    case "6": {
        let num = prompt("Ingrese un numero: ");
        alert(`Resultado: ${Calculadora.raizCuadrada(num)}`);
        break;
    }

    case "7": {
        let num = prompt("Ingrese un numero: ");
        alert(`Resultado: ${Calculadora.raizCubica(num)}`);
        break;
    }

    default:
        alert("Opcion invalida");
}
