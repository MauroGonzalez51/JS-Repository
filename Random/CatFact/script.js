const RANDOM_IMAGE_API = "https://cataas.com/cat/says";

const fecthData = () => {
    return new Promise((resolve, reject) => {
        fetch("https://catfact.ninja/fact")
            .then((response) => response.json())
            .then((response) => {
                document.querySelector(".response__fact").textContent =
                    response.fact;
                resolve(response);
            })
            .catch((err) => reject(err));
    });
};

const sliceResponse = (amoutOfWords) => {
    return new Promise((resolve, reject) => {
        fecthData()
            .then((response) => {
                resolve(
                    response.fact.split(" ").slice(0, amoutOfWords).join(" ")
                );
            })
            .catch((err) => reject(err));
    });
};

const getImage = () => {
    sliceResponse(3)
        .then((response) => {
            fetch(`${RANDOM_IMAGE_API}/${response}`)
                .then((response) => response.blob())
                .then((response) => {
                    document.querySelector(".image").src =
                        URL.createObjectURL(response);
                })
                .catch((err) => reject(err));
        })
        .catch((err) => console.error(err));
};

window.addEventListener("load", getImage());
