const applyEvents = (content) => {
    content.addEventListener("click", (event) => {
        const { target } = event;
        const { parentElement: content } = target;
        const { parentElement: cell } = content;

        cell.removeChild(content);

        console.warn(
            `%c${content}[CELL Content] was removed from table but not from localStorage`,
            "color: #E6F622;"
        );
    });
};

const insertElement = (parentElement, data) => {
    let fragment = document.createDocumentFragment();

    let container = document.createElement("div");
    container.classList.add("content");

    const filteredData = Object.values(data).filter(
        (_, index) => index !== 2 && index !== 3 && index !== 5
    );

    filteredData
        .map(({ id: className, value: property }) => {
            let div = document.createElement("div");
            div.classList.add(className);
            div.textContent = property;

            return div;
        })
        .forEach((elementContainer) => {
            applyEvents(elementContainer);
            container.appendChild(elementContainer);
        });

    fragment.appendChild(container);
    parentElement.appendChild(fragment);
};

export default insertElement;
