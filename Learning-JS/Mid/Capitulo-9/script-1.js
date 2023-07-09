let students = [];
let gridContainer = document.querySelector(".grid-container");
let documentFragment = document.createDocumentFragment();
let btn = document.querySelector(".btn");

const generateRandomData = async () => {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        let users = await response.json();

        let randomData = users.map((user) => {
            let subjects = ["Math", "Physics", "Chemistry", "Biology"];
            let randomSubject = subjects.at(
                Math.floor(Math.random() * subjects.length)
            );

            return {
                name: user.name,
                email: user.email,
                subject: randomSubject,
            };
        });

        randomData.forEach((element) => {
            students.push(element);
        });
    } catch (error) {
        console.error(error);
    }
};

const createElement = (name, email, subject) => {
    // * Name Element
    const nameElement = document.createElement("div");
    nameElement.classList.add("grid-item", "name");
    nameElement.textContent = name;
    documentFragment.appendChild(nameElement);

    // * Email Element
    const emailElement = document.createElement("div");
    emailElement.classList.add("grid-item", "mail");
    emailElement.textContent = email;
    documentFragment.appendChild(emailElement);

    // * Subject Element
    const subjectElement = document.createElement("div");
    subjectElement.classList.add("grid-item", "subject");
    subjectElement.textContent = subject;
    documentFragment.appendChild(subjectElement);

    // * Week Element
    const weekElement = document.createElement("div");
    weekElement.classList.add("grid-item", "week");

    // * Select Element
    const selectElement = document.createElement("select");
    selectElement.classList.add("week-selected");

    const option1 = document.createElement("option");
    option1.value = "Semana 1";
    option1.textContent = "Semana 1";
    selectElement.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "Semana 2";
    option2.textContent = "Semana 2";
    selectElement.appendChild(option2);

    weekElement.appendChild(selectElement);
    documentFragment.appendChild(weekElement);
};

const printStudents = async () => {
    await generateRandomData();

    for (let student of students) {
        let { name, email, subject } = student;
        createElement(name, email, subject);
    }

    gridContainer.appendChild(documentFragment);
};

window.onload = printStudents;

btn.addEventListener("click", () => {
    let elements = document.querySelectorAll(".week");
    let weekSelecteds = document.querySelectorAll(".week-selected");

    elements.forEach((element, index) => {
        element.innerHTML = weekSelecteds[index].value;
    });

    document.body.removeChild(btn);
});
