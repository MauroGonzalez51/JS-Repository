import { STATE, STATUS } from "./request.js";

// * Ya no se hace de esta manera

// request.addEventListener("readystatechange", () => {
//     if (request.readyState !== STATE.DONE)
//         return

//     if (request.status !== STATUS.SUCESS)
//         return

//     console.log(request.response)
// });

// * Asi

// window.XMLHttpRequest
//     ? (request = new XMLHttpRequest())
//     : (request = new ActiveXObject("Microsoft.XMLHTTP"));

// request.addEventListener("load", () => {
//     if (request.status !== STATUS.SUCESS) return;

//     console.log(JSON.parse(request.response).nombre);
// });

// request.open("GET", "info.txt");

// request.send();

// // * Peticiones POST

// window.XMLHttpRequest
//     ? (request = new XMLHttpRequest())
//     : (request = ActiveXObject("Microsoft.XMLHTTP"));

// request.addEventListener("load", () => {
//     if (request.status !== STATUS.SUCESS) return;

//     console.log(request.response);
// });

// request.open("POST", "https://reqres.in/api/users");

// let user = {
//     name: "morpheus",
//     job: "leader",
// };

// request.sendRequestHeader("Content-type", "application/json;charset=UTF8");

// request.send(JSON.stringify(user));

// const img = document.querySelector(".img");

// fetch("img.jpg")
//     .then((response) => response.blob())
//     .then((response) => {
//         img.src = URL.createObjectURL(response);
//     });

// const getName = async () => {
//     let request = await fetch("info.txt");
//     let data = await request.json();

//     console.log(data);
// };

// document.getElementById("name").addEventListener("click", getName);

const getInfoBtn = document.getElementById("getInfo");
const clearBtn = document.getElementById("clear");
const resultContainer = document.querySelector(".result");

const getInfo = async () => {
    try {
        let response = await fetch("data.txt");
        let data = await response.json();

        let fragment = document.createDocumentFragment();

        let aproved = document.createElement("div");
        aproved.classList.add("result__aproved");
        aproved.innerHTML = `Aprobados: <b>${data.aprobados}</b>`;

        let reproved = document.createElement("div");
        reproved.classList.add("result__reproved");
        reproved.innerHTML = `Reprobados: <b>${data.desaprobados}</b>`;

        fragment.appendChild(aproved);
        fragment.appendChild(reproved);
        resultContainer.appendChild(fragment);
    } catch (err) {
        let error = document.createElement("div");
        error.classList.add("result__error-message");
        error.textContent = "La API Fallo";

        resultContainer.appendChild(error);
    }
};

const clearInfo = () => {
    document.querySelectorAll(".result > *").forEach((element) => {
        resultContainer.removeChild(element);
    });
};

getInfoBtn.addEventListener("click", getInfo);
clearBtn.addEventListener("click", clearInfo);
