// const container = document.querySelector(".container");
// const button = document.querySelector(".button");
// const input = document.querySelector(".input");
// const img = document.querySelector(".img");

// button.onclick = () => {
//     alert("hola")
// }

// button.addEventListener("click", (event) => {
//     event.stopPropagation();
//     alert(event.target.outerHTML);
// });

// container.addEventListener("click", (event) => {
//     alert(event.target.outerHTML);
// }, true);

// container.addEventListener("mouseout", (event) => {
//     console.log(event.target);
// });

// input.addEventListener('keydown', (event) => {
//     console.log(`Una tecla fue soltada [${event.key}]`)
// })

// input.addEventListener('keypress', (event) => {
//     console.log(`Una tecla fue presionada [${event.key}]`)
// })

// input.addEventListener('keyup', (event) => {
//     console.log(`Un usuario presiono una tecla [${event.key}]`)
// })

// img.addEventListener("error", (event) => {
//     console.log(`${event.type}: Loading image`);
// });

// window.addEventListener('load', (event) => {
//     console.log(`Documento cargado`)
// })

// window.addEventListener('unload', (event) => {
//     alert("xD")
// })

// input.addEventListener("select", (event) => {
//     let { selectionStart: start, selectionEnd: end } = event.target;
//     let selected = input.value.slice(start, end);

//     console.log(`Selected: ${selected}`);
// });

// input.addEventListener('keydown', (event) => {
//     console.log(`Ultima tecla presionada: ${event.key}`)
// })

// setTimeout(() => {
//     document.write('Hola')
// }, 2000)

// setInterval(() => {
//     document.write('Hola')
// }, 2000)

let formBtn = document.querySelector(".form__button");

formBtn.addEventListener("mousedown", (event) => {
    formBtn.classList.add("clicked");
});

formBtn.addEventListener("mouseup", (event) => {
    formBtn.classList.remove("clicked");
});

let form = document.querySelector(".form");

const fullNameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectOwedInput = document.getElementById("subject");

const resultContainer = document.querySelector(".result__container");

const clearInputs = (...args) => {
    for (let input of args) {
        input.value = "";
    }
};

const validarCampos = (fullName, email, subjectOwed) => {
    /**
     * @Return Array { length: 2 }
     * 
     * [0]: Boolan
     *
     * true: all condicions are satisfied
     * false: there's something missing
     *
     * [1]: String
     *
     * Error || Success Message
     *
     *
     */

    // const lengthRegex = new RegExp(`^.{${minLength},${maxLength}}$`);

    const regex = [
        new RegExp("^.{5,40}$"),
        new RegExp(
            "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
        ),
        new RegExp("^.{4,40}$"),
    ];

    if (!regex.at(0).test(fullName)) {
        return [false, "El nombre debe tener entre 5 y 40 caracteres"];
    }

    if (!regex.at(1).test(email)) {
        return [false, "El Email es invalido"];
    }

    if (!regex.at(2).test(subjectOwed)) {
        return [false, "La materia es invalida"];
    }

    return [true, "Datos enviados correctamente"];
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { value: fullName } = fullNameInput;
    const { value: email } = emailInput;
    const { value: subjectOwed } = subjectOwedInput;

    let result = validarCampos(fullName, email, subjectOwed);

    resultContainer.classList.add(
        "visible",
        result.at(0) ? "success" : "failure"
    );
    resultContainer.textContent = result.at(1);

    setTimeout(() => {
        resultContainer.classList.remove(
            "visible",
            result.at(0) ? "success" : "failure"
        );
    }, 3000);

    if (result.at(0)) {
        console.log(`Nombre ${fullName}`);
        console.log(`Email ${email}`);
        console.log(`Subject: ${subjectOwed}`);

        clearInputs(fullNameInput, emailInput, subjectOwedInput);
    }
});