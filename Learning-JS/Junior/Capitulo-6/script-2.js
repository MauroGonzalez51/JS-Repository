class Key {
    constructor(name, model, price, img) {
        this.name = name;
        this.model = model;
        this.price = price;
        this.img = img;
    }

    createElement() {
        let flexItemContainer = document.createElement("div");
        flexItemContainer.classList.add("flex-item");
    
        let imgElement = document.createElement("img");
        imgElement.src = this.img;
        imgElement.classList.add("key-img");
    
        let nameElement = document.createElement("h2");
        nameElement.textContent = this.name;
    
        let modelElement = document.createElement("h3");
        modelElement.id = this.model;
        modelElement.innerHTML = `Modelo: ${this.model}`;
    
        let priceElement = document.createElement("p");
        priceElement.innerHTML = `Precio: <b>$${this.price}</b>`;
    
        flexItemContainer.appendChild(imgElement);
        flexItemContainer.appendChild(nameElement);
        flexItemContainer.appendChild(modelElement);
        flexItemContainer.appendChild(priceElement);
    
        flexItemContainer.addEventListener("click", () => {
            document.querySelector(".key-data").value = this.model;
        });
    
        return flexItemContainer;
    }
}

const generateRandomNumber = (minRange, maxRange) => {
    return Math.round(Math.random() * (maxRange - minRange) + minRange);
};

let flexContainer = document.querySelector(".flex-container");
let documentFragment = document.createDocumentFragment();

for (let i = 0; i < 21; i++) {
    let randomModel = generateRandomNumber(0, 10000);
    let randomPrice = generateRandomNumber(30, 40);

    const key = new Key (`Llave ${i}`, randomModel, randomPrice, `llave.jpg`);

    documentFragment.appendChild(key.createElement());
}

flexContainer.appendChild(documentFragment)

document.querySelector("input[type=submit]").addEventListener("click", (e) => {
    e.preventDefault();
});
