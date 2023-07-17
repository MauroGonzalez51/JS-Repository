/**
 * ! Callbacks
 *
 * Una funcion dentro de una funcion
 *
 * Una funcion que llama a otra funcion
 *
 * En caso de que el usuario tenga un dato opcional
 * se hace un mamotreto de codigo :P
 *
 *
 *
 *
 *
 *
 *
 */

/**
 * ! Promises
 *
 * Async
 *
 * new Promise((resolve, reject) => {})
 *
 * * then((result) => {})
 *
 * Metodo que accede al valor que tiene resolve
 * Recibe un callback
 *
 * * catch((err) => {})
 *
 * Metodo que accede al valor que tiene reject
 * Recibe un callback
 *
 *
 *
 *
 *
 * Promise.all([promise1, promise2])
 *      .then((data) => console.log(data))
 *      .catch((err) => console.log(err))
 *
 * Espera a que terminen las dos promesas
 *
 * En caso de ser exitosas (resolve), el metodo .then()
 * recibira un array con el valor de ambas promesas
 * Tal que asi
 * [ resolveP1, resolveP2 ]
 *
 * En caso de que alguna o todas sean rechazadas
 * se lanzara el .catch() el cual recibira el reject de
 * la promesa que fallo
 *
 * // ....
 * reject("Some value")
 *
 * Promise.all([p1, p2])
 *      .then(() => {})
 *      .catch((err) => {
 *          console.log(err) // Some value ...
 *      })
 *
 *
 *
 */

/**
 * ! Funciones async
 * 
 * Las funciones asincronas trabajan con promesas
 * 
 * 
 * * async
 * 
 * 
 * * await
 * 
 * Accede directamente al resolve()
 * 
 * 
 * 
 */
