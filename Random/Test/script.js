const form = document.querySelector(".form");

const getFormValues = (form) => {
    return Object.fromEntries(new FormData(form));
};

const getFormValuesById = (form) => {
    const inputs = form.querySelectorAll(".input");

    return Object.fromEntries(
        Array.from(inputs).map((input) => [input.id, input.value])
    );
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(getFormValues(event.target));
    Object.entries(getFormValuesById(event.target)).forEach(
        ([property, value]) => {
            console.log(property, value);
        }
    );
});
