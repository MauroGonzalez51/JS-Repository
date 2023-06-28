// class Animal {
//     constructor(especie, edad, color) {
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;

//         this.informacion = `Soy ${this.especie}, tengo
//             ${this.edad} años, y soy de color ${this.color}`;
//     }

//     verInformacion() {
//         document.write(this.informacion + "<br>");
//     };
// }

// class Perro extends Animal {
//     constructor(especie, edad, color, raza) {
//         super(especie, edad, color);
//         this.raza = null;
//     }

//     set setRaza(raza) { this.raza = raza; }

//     get getRaza() { return this.raza; }
// }

// const perro = new Perro("Perro", 10, "marron", "doberman");

// perro.setRaza = "Pedro";

// document.write(perro.getRaza);

class Celular {
    constructor(color, peso, resPantalla, resCamara, RAM) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = resPantalla;
        this.resolucionDeCamara = resCamara;
        this.memoriaRAM = RAM;
        this.encendido = false;
    }

    presionarBotonEncendido() {
        if (!this.encendido) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    reiniciar() {
        this.encendido
            ? alert("Reiniciando celular")
            : alert("El celular esta apagado");
    }

    tomarFoto() {
        alert(`Foto tomada en una resolucion de ${this.resolucionDeCamara}`);
    }

    grabarVideo() {
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }

    mobileInfo() {
        return `
            Color: <b>${this.color}</b> </br>
            Peso: <b>${this.peso}</b> </br>
            Tamaño: <b>${this.resolucionDePantalla}</b> </br>
            Resolucion de Video: <b>${this.resolucionDeCamara}</b> </br>
            Memoria RAM: <b>${this.memoriaRAM}</b> </br>
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor(color, peso, resPantalla, resCamara, RAM, resCamaraExtra) {
        super(color, peso, resPantalla, resCamara, RAM);
        this.resulucionDeCamaraExtra = resCamaraExtra;
    }

    grabarVideoLento() {
        this.encendido
            ? alert("Estas grabando en camara lenta")
            : alert("El celular esta apagado");
    }

    reconocimientoFacial() {
        this.encendido
            ? alert("Vamos a iniciar un reconocimiento facial")
            : alert("El celular esta apagado");
    }

    mobileInfo() {
        return (
            super.mobileInfo() +
            `
            Resolucion de camara Extra: <b>${this.resulucionDeCamaraExtra}</b> <br>
        `
        );
    }
}

// const celular1 = new Celular("Rojo", "150g", "5'", "HD", "1GB");
// const celular2 = new Celular("Negro", "155g", "5.4'", "Full HD", "2GB");
// const celular3 = new Celular("Blanco", "146g", "5.9'", "Full HD", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

// document.write(`
//     ${celular1.mobileInfo()} <br>
//     ${celular2.mobileInfo()} <br>
//     ${celular3.mobileInfo()} <br>
// `);

// const celular1 = new CelularAltaGama("Rojo", "130g", "5.2'", "4K", "3GB", "Full HD");
// const celular2 = new CelularAltaGama("Negro", "142g", "6'", "4K", "4GB", "HD");

// document.write(`
//     ${celular1.mobileInfo()} <br>
//     ${celular2.mobileInfo()} <br>
// `);

class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalarApp() {
        if (!this.instalada) {
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }

    desinstalarApp() {
        if (this.iniciada) {
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }

    abrirApp() {
        if (!this.iniciada && this.instalada) {
            this.iniciada = true;
            alert("App iniciada");
        }
    }

    cerrarApp() {
        if (this.iniciada && this.instalada) {
            this.iniciada = false;
            alert("App cerrada");
        }
    }

    appInfo() {
        return `
            Descargas: <br>${this.descargas} </b> <br>
            Puntuacion: <br> ${this.puntuacion}</b> <br>
            Peso: <br> ${this.peso}</b> <br>
        `;
    }
}

const apps = [
    new App("16.000", "5 Estrellas", "900MB"),
    new App("1.000", "4 Estrellas", "800MB"),
    new App("18.000", "3 Estrellas", "40MB"),
    new App("7.000", "4 Estrellas", "500MB"),
    new App("6.000", "3 Estrellas", "1GB"),
    new App("26.000", "2 Estrellas", "90MB"),
    new App("100.000", "1 Estrellas", "700MB"),
];

for (let i = 0; i < apps.length; i++) {
    document.write(`${apps[i].appInfo()} <br>`)
}