let container = document.querySelector(".rating__container");

let user = {
    userRateTaken: false,
    userRate: 0,
};

const getUserRate = (element) => {
    console.log(element.getAttribute("data-value"));
};

const fillIcons = (elements, elementSelected, fullIcon, emptyIcon) => {
    let found = false;

    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = found ? emptyIcon : fullIcon;

        if (elements[i] === elementSelected) {
            found = true;
        }
    }
};

const createRating = ({ total = 5, fullIcon = "★", emptyIcon = "☆" }) => {
    let fragment = document.createDocumentFragment();

    let elements = Array(total)
        .fill(0)
        .map((element, index) => {
            let item = document.createElement("div");
            item.classList.add("element-rating");
            item.setAttribute("data-value", index + 1);
            item.textContent = emptyIcon;
            return item;
        });

    elements.forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            fillIcons(elements, event.target, fullIcon, emptyIcon);
        });

        element.addEventListener("click", (event) => {
            if (!user.userRateTaken) {
                getUserRate(event.target);
                user.userRateTaken = true;
            }
        });
    });

    elements.map((element) => fragment.appendChild(element));

    container.appendChild(fragment);
};

createRating({ total: 5 });

