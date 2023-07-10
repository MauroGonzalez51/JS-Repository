const formBtn = document.getElementById("btn");
const form = document.querySelector(".form");

formBtn.addEventListener("mousedown", () => {
    formBtn.classList.toggle("clicked");
});

formBtn.addEventListener("mouseup", () => {
    formBtn.classList.toggle("clicked");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let { value: result } = document.getElementById("student-grade");
    let message;

    if (result.trim() == "") return;

    try {
        if (window.isNaN(parseInt(result))) {
            throw new Error("Error during submission");
        }

        message = checkApproval(result);
    } catch (error) {
        message = error.message;
    } finally {
        document.getElementById("student-grade").value = "";
    }

    openModal(result, message);

    document.getElementById("student-grade").focus();
});

const checkApproval = (result) => {
    const cases = {
        1: "No podes ser tan HDP",
        2: "Sos malisimo para mi materia",
        3: "No sabes casi nada",
        4: "Muy mal",
        5: "Mal",
        6: "Regular",
        7: "Bien, pero puedes mejorar",
        8: "¡Muy bien!",
        9: "¡Excelente!",
        10: "¡Insuperable!",
    };

    return cases[result] || null;
};

const openModal = (result, message) => {
    const regex = new RegExp("^.{7,10}$");
    const container = document.querySelector(".result__container");

    let userIsAproved = regex.test("".padStart(result, "1"));

    if (result !== undefined && result !== "") {
        document.querySelector(".result__final-grade-result").textContent =
            userIsAproved ? "Aprovado" : "Desaprobado";
    }

    document.querySelector(".result__result-message").textContent = message;

    container.classList.add("visible");
    container.classList.add(userIsAproved ? "success" : "failure");

    setTimeout(() => {
        container.classList.remove("visible");
        container.classList.remove(userIsAproved ? "success" : "failure");
    }, 3000);
};
