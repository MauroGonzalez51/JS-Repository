import sendDataToDatabase from "./database.js";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { value: name } = document.getElementById("name");
    const { value: age } = document.getElementById("age");
    const { value: email } = document.getElementById("email");

    sendDataToDatabase({ name, age, email })
});
