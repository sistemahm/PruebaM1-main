// No cambies los nombres de las funciones.

// =================== EJERCICIO 1 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 * "x" e "y" son números enteros (int).
 * Devuelve el número más grande
 * Si son iguales, devuelve cualquiera de los dos
 * 
 */
function obtenerMayor(x, y) {
    // Tu código:
}

// =================== EJERCICIO 2 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 * Determinar si la persona según su edad puede ingresar a un evento.
 * Si tiene 18 años ó más, devolver --> "Allowed"
 * Si es menor, devolver --> "Not allowed"
 * 
 */
function mayoriaDeEdad(edad) {
    // Tu código
}
    
// =================== EJERCICIO 3 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Recibimos un estado de conexión de un usuario representado por un valor numérico.
 * Cuando el estado es igual a 1, el usuario está "Online"
 * Cuando el estado es igual a 2, el usuario está "Away"
 * De lo contrario, presumimos que el usuario está "Offline"
 * Devolver el estado de conexión de usuario en cada uno de los casos.
 * 
 */
function conection(status) {
    // Tu código   
}
  
// =================== EJERCICIO 4 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 *  Devuelve un saludo en tres diferentes lenguajes:
 *  Si "idioma" es "aleman", devuelve "Guten Tag!"
 *  Si "idioma" es "mandarin", devuelve "Ni Hao!"
 *  Si "idioma" es "ingles", devuelve "Hello!"
 *  Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
 * 
 */
function saludo(idioma) {
    // Tu código:
}

// =================== EJERCICIO 5 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 * Si "numero" es divisible entre 3, devuelve "fizz"
 * Si "numero" es divisible entre 5, devuelve "buzz"
 * Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
 * De lo contrario, devuelve el numero
 * 
 */
function fizzBuzz(numero) {
    // Tu código
}

// =================== EJERCICIO 6 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 * La función recibe tres números distintos.
 * Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
 * Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
 * Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
 * 0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
 * Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
 * 
 */
function operadoresLogicos(num1, num2, num3) {
    // Tu código
}

// =================== EJERCICIO 7 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Devuelve "true" si "numero" es primo
 * De lo contrario devuelve "falso"
 * Pista: un número primo solo es divisible por sí mismo y por 1
 * Pista 2: Puedes resolverlo usando un bucle `for`
 * Nota: Los números 0 y 1 NO son considerados números primos
 * 
 */
function esPrimo(numero) {
    // Tu código
}

// =================== EJERCICIO 8 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
 * Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
 * 
 */
function multiplicarArgumentos() {
    // Escribe tu código aquí:
}


// =================== EJERCICIO 9 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
 * inicia con 9 y false en otro caso.
 * 
 */
function empiezaConNueve(n) {
    //Escribe tu código aquí
}


  
// No modificar nada debajo de esta línea
// --------------------------------
  
module.exports = {
    obtenerMayor,
    mayoriaDeEdad,
    conection,
    saludo,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    multiplicarArgumentos,
    empiezaConNueve
};
  