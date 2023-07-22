const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { value: name } = document.getElementById("name");
    const { value: age } = document.getElementById("age");
    const { value: email } = document.getElementById("email");

    sendData({ name, age, email })
        .then((response) => {
            console.log(response);
            clearInputs(form);
        })
        .catch((error) => console.error(error));
});

const sendData = async ({ name, age, email }) => {
    return new Promise((resolve, reject) => {
        fetch("https://reqres.in/api/users", {
            method: "POST",
            body: JSON.stringify({ name, age, email }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
};

const clearInputs = (parentElement) => {
    parentElement.querySelectorAll(".input").forEach((input) => {
        input.value = "";
    });
};
