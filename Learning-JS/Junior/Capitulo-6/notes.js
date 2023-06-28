/**
 * ! DOM
 *
 * * Document Object Model
 *
 * * Nodo
 * Un nodo en el DOM es cualquier etiqueta en el cuerpo
 *
 * * Document
 * El nodo document es el nodo raiz, a partir del cual derivan el
 * resto de nodos
 *
 * * Element
 * Nodos definidos por etiquetas HTML
 *
 * * Text
 * El texto dentro de un nodo element se considera un nuevo nodo hijo
 * de un tipo text (texto)
 *
 * * Attribute
 * Los atributos de las etiquetas definen nodos
 *
 * * Comentarios y otros
 * Los comentarios y otros elementos como las delcaraciones doctype
 * en cabecera de los documentos HTML generan nodos
 *
 *
 *
 */

/**
 * ! Metodos de seleccion de elementos
 *
 * * document.[...]
 *
 * * getElementById()
 * Selecciona un elemento por ID
 *
 * * getElementsByTagName()
 * Selecciona todos los elementos que coincidan con el nombre
 * de la etiqueta especificada
 *
 * * querySelector()
 * Devuelve el primer elemento que coincida con el grupo
 * especificado de selectores
 *
 * * querySelectorAll()
 * Devuelve todos los elementos que coincidan con el grupo
 * especificado de selectores
 *
 *
 *
 *
 *
 */

/**
 * ! Metodos para definir, obtener y eliminar atributos
 *
 * * setAttribute()
 * Modificar el valor de un atributo
 *
 * * getAttribute()
 * Obtiene el valor de un atributo
 *
 * * removeAttribute()
 * Remueve el valor de un atributo
 *
 *
 *
 *
 *
 *
 */

/**
 * ! Atributos globales
 *
 * * class
 * Lista de clases del elemento separadas por espacios
 *
 * * contenteditable
 * Indica si el elemento puede ser modificable por el usuario
 *
 * * dir
 * Indica la direccionalidad del texto
 *
 * > ltr > left to right
 * > rtl > right to left
 *
 *
 * * hidden
 * Indica si el elemento aun no es, o ya no es, relevante
 *
 * * id
 * Define un identificador unico
 *
 * * style
 * Contiene declaraciones de estilo CSS para ser
 * aplicadas al elemento
 *
 * * tabindex
 * Indica si el elemento puede obtener un focus de input
 *
 * Va definido con numeros
 *
 * * title
 * Contiene un texto con informacion relacionada al elemento
 * al que pertenece
 *
 * Es como si fuera un placeholder cuando pasamos el mouse por
 * encima
 *
 *
 *
 *
 */

/**
 * ! Atributos de los inputs
 *
 * * className
 *
 * * value
 *
 * * type
 *
 * * accept
 *
 * * form
 *
 * * minlength
 *
 * * placeholder
 *
 * * required
 *
 *
 *
 *
 *
 *
 *
 */

/**
 * ! Atributo Style
 *
 * Permite acceder a las propiedades CSS
 *
 * element.style.property = [...]
 *
 */

/**
 * ! Clases, classList y metodos de classList
 *
 * * classList
 *
 * * add()
 * Añade una clase
 *
 * * remove()
 * Remueve una clase
 *
 * * item()
 * Devuelve la clase del indice especificado
 *
 * * contains()
 * Verifica si ese elemento posee o no la clase especificada
 *
 * * replace()
 * Reemplaza una clase por otra
 *
 * * toggle()
 * Si no tiene la clase especificada, la agrega, si ya la tiene
 * la elimina
 *
 * toggle(@param className, @param Boolean mantenerClase)
 *
 * En mantenerClase en caso de ser true, si el elemento tiene
 * la clase, no la va a quitar
 */

/**
 * ! Obtencion y modificacion de elementos
 *
 * * textContent
 * Devuelve el texto de cualquier nodo
 *
 * * innerText <!-->
 * Devuelve el texto visible de un node element
 *
 * * outerText <!-->
 * Devuelve el texto de las etiquetas HTML incluidas las
 * etiquetas
 *
 *
 * * innerHTML
 * Devuelte el contenido HTML de un elemento
 *
 * * outerHTML
 * Devuelve el codigo completo del elemento
 *
 *
 *
 *
 *
 */

/**
 * ! Creacion de elementos
 *
 * * createElements()
 *
 * * createTextNode()
 *
 * * createDocumentFragment()
 *
 * * appendChild()
 *
 *
 *
 */

// const container = document.querySelector(".container");

// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 20; i++) {
//     const item = document.createElement("li")
//     item.textContent = "Este es un item de la lista"
//     fragment.appendChild(item);
// }

// container.appendChild(fragment);

/**
 * ! Obtencion y modificacion de los childs (Hijos)
 *
 * * firstChild
 *
 * * lastChild
 *
 * * firstElementChild
 * Primer elemento hijo
 *
 * * lastElementChild
 * Ultimo elemento hijo
 *
 * * childNodes
 * Devuelve todos los nodos hijos
 *
 * * children
 * Devuelve los elementos hijos
 */

// const container = document.querySelector(".container");

// const element = container.children;

// for (let hijo of element) {
//     console.log(hijo);
// }

/**
 * ! Metodos de childs (Hijos)
 *
 * * replaceChild()
 *
 * * removeChild()
 *
 * * hasChildNodes()
 *
 *
 *
 *
 */

// const container = document.querySelector(".container");

// const paragraph = document.createElement("p");
// const h2Nuevo = document.createElement("h2");

// paragraph.textContent = "Parrafo";
// h2Nuevo.textContent = "Titulo";

// const h2Antiguo = document.querySelector(".h2");

// // container.replaceChild(h2Nuevo, h2Antiguo);
// // container.removeChild(h2Antiguo);

// let flag = container.hasChildNodes();

// if (flag) {
//     document.write("El elemento si tiene hijos")
// } else {
//     document.write("El elemento no tiene hijos")
// }

/**
 * ! Propiedades de los parents (Padres)
 *
 * * parentElement
 * Busca una etiqueta HTML padre
 * 
 * * parentNode
 * Busca un nodo padre
 * 
 */

// const container = document.querySelector(".container");

// const h2 = document.querySelector(".h2");

// console.log(h2.parentElement); 

/**
 * ! Propiedades de siblings (Hermanos)
 * 
 * * nextSibling
 * 
 * * previousSibling
 * 
 * * nextElementSibling
 * 
 * * previousElementSibling 
 * 
 * 
 */

// const h2 = document.querySelector(".h2");

// console.log(h2.nextElementSibling); 

/**
 * ! Nodos - Extras
 * 
 * * closest()
 * Selecciona el elemento ascendente mas cercano (padre)
 * 
 * 
 */