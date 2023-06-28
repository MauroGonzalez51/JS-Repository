const container = document.querySelector(".flex-container");

let contador = 0;

function createKey(name, model, price) {
    contador++;
    img = "<img class='key-img' src='llave.jpg'>";
    name = `<h2>${name}</h2>`;
    model = `<h3 id='${model}'>${model}</h3>`;
    price = `<p>Precio: <b>$${price}</b></p>`;
    return [img, name, model, price];
}

let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
    let randomModel = Math.round(Math.random() * 10000);
    let randomPrice = Math.round(Math.random() * 10 + 30);

    let llave = createKey(`Llave ${i}`, `Modelo ${randomModel}`, randomPrice);

    let div = document.createElement("div");

    div.addEventListener("click", () => {
        document.querySelector('.key-data').value = randomModel;
    });

    div.tabIndex = i;
    div.classList.add(`item${i}`, "flex-item");
    div.innerHTML = llave;
    documentFragment.appendChild(div);
}

container.appendChild(documentFragment);

document.querySelector("input[type='submit']").addEventListener('click', (e) => {
    e.preventDefault();
})