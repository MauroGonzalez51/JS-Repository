/**
 * ! Eventos
 * 
 * Cualquier cambio que ocurre en la pagina
 * 
 * * Agregar un Listener
 * element.addEventListener(Event, () => {})
 * 
 * 
 * * Eliminar un Listener
 * element.removeEventListener(Event, () => {})
 * 
 * * Objeto Event
 * 
 * event.target
 * Acceder al objeto el cual desencadeno el elemento
 * 
 * * Flujo de Eventos
 * 
 * Orden en que se van a ejecutar los eventos
 * 
 * > Event Bubbling
 * [Por defecto] 
 * Event mas especifico -> menos especifico
 * 
 * 
 * > Event Capturing
 * Event menos especifico -> mas especifico
 * Si al contenedor padre se le da true se ejecuta de esta forma
 * Osea, se ejecuta primero
 * 
 * element.addEventListener(Event, () => {
 *      // ...
 * }, true)
 * 
 * 
 * 
 * Event.stopPropagation()
 */

/**
 * ! Eventos del mouse
 * 
 * * click
 * Con que mas crees que ocurre?
 * 
 * * dblclick
 * Doble click
 * 
 * * mouseover
 * Ocurre cuando el puntero se mueve sobre un elemento
 * o sobre uno de sus hijos
 * 
 * * mouseout
 * Ocurre cuando se mueve el puntero fuera de un elemento
 * o sus elementos secundarios
 * 
 * * contextmenu
 * Ocurre con un click derecho
 * 
 * * mouseenter
 * Ocurre cuando el puntero se mueve sobre un elemento
 * 
 * * mouseleave
 * Ocurre cuando el puntero se mueve fuera de un elemento
 * 
 * * mousedown
 * Ocurre cuando el usuario aprieta un boton del mouse 
 * sobre un elemento
 * 
 * * mouseup
 * Ocurre cuando el usuario suelta un boton del mouse
 * sobre un elemento
 * 
 * * mousemove
 * Ocurre cuando el puntero se mueve mientras esta sobre un 
 * elemento
 * 
 * 
 */

/**
 * ! Eventos del teclado
 * 
 * * keypress [3]
 * Ocurre cuando se presiona y se suelta una tecla en el mismo 
 * elemento
 * 
 * * keydown [1]
 * Ocurre cuando una tecla se presiona
 * 
 * * keyup [2]
 * Ocurre cuando se suelta una tecla
 * Solamente cuando se suelta en ese mismo elemento
 * 
 * Event.key > Obtener la tecla presionada
 * 
 * 
 */

/**
 * ! Eventos de la interfaz
 * 
 * * error
 * Ocurre cuando sucede un error durante la carga de un 
 * archivo multimedia
 * 
 * * load
 * Ocurre cuando un objeto se ha cargado
 * 
 * * beforeunload
 * Ocurre antes de que el documento este a punto
 * de descargarse
 * 
 * * unload
 * Ocurre una vez que se ha descargado la pagina
 * 
 * * resize
 * Ocurre cuando se cambia el tamaño de la vsta del 
 * documento
 * 
 * * scroll
 * Ocurre cuando se desplaza la barra de desplazamiento
 * de un elemento
 * 
 * * select
 * Ocurre despues de que el usuario selecciona algun
 * texto de <input /> o <textarea />
 * 
 * Event.target.selectionStart
 * Event.target.selectionEnd
 * 
 */

/**
 * ! Temporizadores
 * 
 * Trabajos con tiempo
 * 
 * * setTimeout(() => {}, delay [Millis])
 * Ejecutar una funcion despues de un tiempo determinado
 * 
 * * clearTimeout()
 * Eliminar un temporizador
 * 
 * let temporizador = setTimeout(() => {}, delay)
 * 
 * clearTimeout(temporizador)
 * 
 * * setInterval(() => {}, interval [Millis])
 * Ejecuta una funcion cada x tiempo
 * 
 * * clearInterval()
 * Elimina un intervalo
 * 
 * let interval = setInterval(() => {}, interval)
 * 
 * clearInterval(interval)
 * 
 */

/**
 * Event.preventDefault()
 * 
 * 
 * 
 */