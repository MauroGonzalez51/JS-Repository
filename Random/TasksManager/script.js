const form = document.querySelector(".form.update-tasks");
const input = document.querySelector(".form__field-input");

const tasksList = document.querySelector(".tasks-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    createElement(input.value);
    input.value = "";
});

const createElement = (text) => {
    let li = document.createElement("li");
    li.classList.add("task-item");
    li.textContent = text;

    li.addEventListener("click", (event) => {
        tasksList.removeChild(event.target);
    });

    tasksList.appendChild(li);
};
