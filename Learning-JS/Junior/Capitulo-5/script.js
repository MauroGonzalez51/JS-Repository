// ! Console [Object]

/**
 * * Funciones de Registro
 *
 * .assert(@param Condition) > Evalua una condicion
 * .clear() > Limpia la consola
 * .error(@param String) > Muestra un mensaje de error en la consola web
 * .info(@param String) > Emite un mensaje informativo en la consola web
 * .log(@param String) > El de toda la vida :)
 * .table(@param Array) > Toma un argumento, y muestra una tabla en consola
 * .warn(@param String) > Emite un mensaje de emergencia en la consola web
 * .dir(@param Object) > Despliega una lista interactiva de las propiedades del objeto JavasScript especificado
 *
 *
 *
 *
 */

/**
 * * Funciones de Conteo
 *
 * .count(@param String (Optional) Label) > Registra el numero de veces que se llama a count(). Toma como argumento opcional una etiqueta
 * .countReset() > Resetea el contador console.count()
 *
 *
 */

/**
 * * Funciones de Agrupacion
 *
 * .group(@param String (Optional) GroupName) > Crea un nuevo grupo en linea en la consola
 * .groupEnd() > Remueve un grupo en linea en la consola
 * .groupCollapsed(@param String (optional) GroupName) > Crea un nuevo grupo en linea en la consola (Cerrado)
 *
 */

/**
 * * Funciones de Temporizacion
 *
 * .time(@param String (optional) Label) > Inicia un temporizador
 * .timeEnd(@param String (optional) Label) > Detiene un temporizador
 * .timeLog() > Registra el valor actual de un temporizador
 *
 *
 */

/**
 * * Modificar el estilo del texto
 *
 * console.log("%c ...", @param String styles)
 *
 *
 *
 *
 */

const materias = {
    fisica: [90, 6, 4],
    matematica: [84, 8, 2],
    logica: [92, 8, 4],
    quimica: [96, 8, 4],
    calculo: [91, 6, 3],
    programacion: [79, 7, 4],
    biologia: [75, 9, 2],
    bbdd: [98, 9, 1],
    algebra: [100, 10, 4],
};

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const validarAprobacion = () => {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(`%c${capitalizeFirstLetter(materia)}`, "font-weight: bold");

        asistencias >= 90
            ? console.log(
                  `%cAsistencias en orden`,
                  "color: green; padding: 0 15px"
              )
            : console.log(
                  `%cFalta de asistencias`,
                  "color: red; padding: 0 15px"
              );

        promedio >= 7
            ? console.log(
                  `%cPromedio en orden`,
                  "color: green; padding: 0 15px"
              )
            : console.log(
                  `%cPromedio desaprobado`,
                  "color: red; padding: 0 15px"
              );

        trabajos >= 3
            ? console.log(
                  `%cTrabajos practicos en orden`,
                  "color: green; padding: 0 15px"
              )
            : console.log(
                  `%cFaltan trabajos practicos`,
                  "color: red; padding: 0 15px"
              );
    }
};

// validarAprobaciones()

// ! --------------------------------------------------------------------------------------------|>

/**
 * * 30 Minutos para cosas de la casa
 * * 100 Minutos para trabajos
 * * 100 Minutos pra estudiar
 * * 10 Minutos para descansar
 * * 240 Minutos para trabajar
 *
 *
 *
 *
 */

let trabajosPracticos = "100 Minutos de hacer trabajos practicos";
let estudio = "100 Minutos de estudio";
let trabajo = "240 Minutos de trabajo";
let homework = "30 Minutos de cosas de la casa";
let descanso = "10 Minutos de descanso";

console.log("Tareas");

for (let i = 0; i < 14; i++) {
    if (i == 0) {
        console.groupCollapsed("Semana 1");
    }

    if (i == 7) {
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }

    console.groupCollapsed(`Dia ${i + 1}`);
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(trabajosPracticos);
    console.log(homework);
    console.groupEnd();   
}

console.groupEnd();
