const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
        programacion: ["Dalto", "Pedro", "Juan", "Pepito"],
        logica: ["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
        quimica: ["Rodriguez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
    };

    return [materias[materia]]
        ? [materias[materia], materia, materias]
        : materias;
};

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if (informacion) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(
            `El profesor de <b>${informacion.at(1)}</b> 
            es: <b style='color:red'>${profesor}</b> <br>
    
            Los alumnos son: <b style='color:blue'>${alumnos}</b>
            
            <br><br>
            `
        );
    }
};

const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion();

    let clasesPresentes = [];

    let cantidadTotal = 0;
    for (info in informacion[2]) {
        if (informacion[2][info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }

    return `<b style='color:blue'>${alumno} </b> esta en <b>${cantidadTotal}</b> clases<br>
        Esta cursando las clases: <b style='color:green'>${clasesPresentes}</b> <br><br>
    `;
};

mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("logica")
mostrarInformacion("quimica")

document.write(cantidadDeClases("Cofla"))
document.write(cantidadDeClases("Pedro"))