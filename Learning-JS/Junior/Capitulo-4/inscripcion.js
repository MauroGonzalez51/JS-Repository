let materias = {
    fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
    programacion: ["Dalto", "Pedro", "Juan", "Pepito"],
    logica: ["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
    quimica: ["Rodriguez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
};

const inscribirAlumno = (alumno, materia) => {
    let personas = materias[materia];

    if (personas.length >= 21) {
        document.write(
            `Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br><br>`
        );
    } else {
        personas.push(alumno);

        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"],
            };
        }

        if (materia == "programacion") {
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                logica: materias["logica"],
                quimica: materias["quimica"],
            };
        }

        if (materia == "logica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: personas,
                quimica: materias["quimica"],
            };
        }

        if (materia == "quimica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: personas,
            };
        }

        document.write(
            `¡Felicidades ${alumno}! Te has inscrito a ${materia} correctamente <br><br>`
        );
    }
};

document.write(materias["fisica"] + "<br><br>")

inscribirAlumno("Pedrito", "fisica");

