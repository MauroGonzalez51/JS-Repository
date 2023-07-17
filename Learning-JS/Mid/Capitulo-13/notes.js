/**
 * ! Peticiones HTTP
 *
 * * Definicion
 * Comunicarse con un servidor
 * Basicamente
 *
 * * Cliente & Servidor
 *
 * * No guardan informacion
 * Espeficamente las peticiones HTTP
 *
 *
 *
 *
 */

/**
 * ! Datos estructurados (JSON)
 *
 * * Definicion, Usos y sintaxis
 * Exactamente igual a los "arrays asociativos"
 * Basado en clavez y valores
 *
 * Hasta los nombres de las variables van entre comillas
 *
 * * Serializacion
 * Se dice que el JSON esta serializado cuando es una
 * cadena de texto con formato JSON
 *
 * En resumen, cadena de texto que tiene formato JSON
 *
 * Se { envia, recibe } de la misma forma
 *
 * * Des-serializado
 * Objeto con formato JSON
 *
 * * Object --> JSON
 *
 * + JSON.stringify(object)
 *
 * * JSON --> Object
 *
 * + JSON.parse(json)
 *
 * * JSON Polyfill
 * Simula un JSON, en caso de que el navegador no lo soporte
 */

/**
 * ! AJAX
 *
 * Respuestas asincronas :D
 *
 * * Objecto XMLHttpRequest
 * Se pueden enviar peticiones GET, POST
 *
 * >
 *
 * * .get(Method, url)
 * Abre una peticion
 *
 *
 * * Objeto ActiveXObject
 *
 * En caso de que el objecto window.XMLHttpRequest no exista se
 * usa la otra wea
 *
 * window.XMLHttpRequest
 *   ? (request = new XMLHttpRequest())
 *   : (request = new ActiveXObject("Microsoft.XMLHTTP"));
 *
 *
 *
 * * Enviar peticiones POST
 *
 */

/**
 * ! Fetch
 *
 * Siempre retorna una promesa encapsulada
 *
 * Tiene el metodo GET por defecto
 *
 *
 * * Metodos para acceder a la data
 *
 * + response.text()
 * Lo mismo pero ahora es una promesa
 * Osea lo mismo, pero des-encapsulada
 *
 * + response.json()
 * Devuelve un .json()
 */

// * Peticion GET con fetch

// fetch("https://reqres.in/api/unknown/2")
//     .then((response) => response.json())
//     .then((response) => console.log(response));

// * Peticion POST con fetch

// fetch("https://reqres.in/api/users", {
//     method: "POST",
//     body: JSON.stringify({
//         nombre: "Mauro",
//         apellido: "Gonzalez",
//     }),
//     headers: {
//         "Content-type": "application/json",
//     },
// })
//     .then((response) => response.json())
//     .then((response) => console.log(response));

/**
 * + response.blob()
 * Para trabajar con imagenes
 *
 */

// const img = document.querySelector(".img");

// fetch("img.jpg")
//     .then((response) => response.blob())
//     .then((response) => {
//         img.src = URL.createObjectURL(response);
//     });

/**
 * * URL.createObjectURL(blob)
 * Crea una ruta imaginaria, en donde va a almacenarse la imagen
 * Solo durante la peticion, luego al actualizar va a cambiar la
 * direccion
 *
 */

/**
 * ! Axios
 *
 * Basado en promesas, pero usa el objecto
 * XMLHttpRequest
 *
 * * axios.get()
 *
 * axios("info.txt").then((response) => console.log(response));
 *
 * * axios.post()
 */

// axios
//     .post("https://reqres.in/api/users", {
//         name: "Mauro",
//         apellido: "Gonzalez"
//     })
//     .then((response) => console.log(response));

// axios("https://reqres.in/api/users", {
//     method: "POST",
//     data: {
//         name: "Mauro",
//     },
// }).then((response) => console.log(response));

/**
 * ! Fetch - Axios con async await
 * 
 * 
 * 
 */

// * Literalmente esto xD

// const getName = async () => {
//     let request = await fetch("info.txt");
//     let data = await request.json();

//     console.log(data);
// };

// document.getElementById("name").addEventListener("click", getName);
