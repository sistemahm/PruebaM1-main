'use strict';

// =================== EJERCICIO 1 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *  
 * Este ejercicio consiste en pasar un número 
 * binario a decimal, puedes usar cualquier recurso para poder resolverlo.
 *
 */
function BinarioADecimal(num) {
    // tu código aca 
}

// =================== EJERCICIO 2 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Retorna una funcion que cuando sea invocada retorne un valor creciente.
 *  el primer valor deberia ser 1.
 *  Vas a tener que usar closures.
 *  ejemplo: const newCounter = counter();
 *  newCounter(); // 1
 *  newCounter(); // 2 
 *  ....
 */
function counter() {
}

// =================== EJERCICIO 3 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Escribir código, sin modificar lo que ya se encuentra escrito en las constantes INSTRUCTOR, ALUMNO y en la función GETNOMBRE, 
 * para poder llamar al método getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
 * Modificar los undefined por el código correspondiente en cada caso
 * -- Pista, tienes que bindear el this!
 *
 */
const instructor = {
    nombre: "HOMER",
    edad: 25
}

const alumno = {
    nombre: "Ethan",
    curso: "FullStack"
}
  
function getNombre(){
    return this.nombre;
}

let getNombreInstructor = undefined;
let getNombreAlumno = undefined;

// =================== ===========  CASO DE PRUEBA ===========  ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * 
 * La empresa JacksonMx desea tener un registro exacto de los terrenos y granjas que tien en su poder así como de
 * los administradores, para poder llevar un registro de las cantidad de hectáreas plantadas, la cantidad de 
 * hectareas que administradores tienen etc. Cada ejercicio solicita una función para resolver las necesidades
 * de la empresa.
 * 
 * Se presentan 4 objectos que serviran como nuestra base de datos, cada uno esta relacionado por una o más 
 * propiedades.
 * 
 * paddockManagers ---> colección de administradores
 * paddockType ---> tipo de cenbradio
 * paddocks ---> información de los terrenos
 * farms ---> granjas
 *
 *  Los ejercicios 4 - 7 se resuelven con la información dada.
 */
// Responsables de los terreno
const paddockManagers = [
    { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS'},
    { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA'},
    { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ'},
    { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS'},
    { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA'},
    { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
];

// Tipo de terreno, en el cual se utiliza el tipo de producto plantado
const paddockType = [
    { id: 1, name: 'PALTOS' },
    { id: 2, name: 'AVELLANOS' },
    { id: 3, name: 'CEREZAS' },
    { id: 4, name: 'NOGALES' }
]

// Un paddock representa un terreno (Entiéndase también como potrero o parcela), el área está representada 
// en m2, harvestYear es el año en el que se sembró el terreno
const paddocks = [
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
    { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
    { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
    { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
    { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
    { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
];
  
const farms = [
    { id: 1, name: 'AGRICOLA SANTA ANA' },
    { id: 2, name: 'VINA SANTA PAULA' },
    { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
];

// Tip: Una hectárea equivale a 10.000m2

// =================== EJERCICIO 4 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente 
 *  por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
 *
 */


function sortPaddockTypeByTotalArea() {
}

// =================== EJERCICIO 5 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  Arreglo con los nombres de los administradores, ordenados decrecientemente por 
 *  la suma TOTAL de hectáreas que administran.
 *
 */

function sortFarmManagerByAdminArea() {
}

// =================== EJERCICIO 6 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  Objeto en el cual las claves sean el nombre del administrador y
 *  el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
 *
 */

function farmManagerPaddocks() {
    // tu código aquí
}


// =================== EJERCICIO 7 ===================
/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2,
 *  año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador.
 *  Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 5.
 *  No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
 *
 */
function newManagerRanking() {
}



// RECURSIÓN
// =================== EJERCICIO 8 ===================
// Implementar la función isAncestor: debe determinar si dado dos nombres de personas las mismas
// son parientes o no (La primera debe ser ancestro de la segunda). La función recibira un objeto
// que va a representar sólo la parte femenina del "arbol genealogico" familiar y será de la siguiente forma:
// const genealogyTree = {
//   "Mona Simpson": [],
//   "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
//   "Jacqueline Bouvier": [ "Patty Bouvier", "Marge Simpson", "Selma Bouvier"],
//   "Patty Bouvier": [],
//   "Selma Bouvier": ["Ling Bouvier"],
//   "Edwina": ["Abigail Simpson"],
//   "Lisa Simpson": [],
//   "Maggie Simpson": [],
//   "Ling Bouvier": []
// }
// Ejemplo:
//  - Caso que devuelve true --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
//  - Caso que devuelve false --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")
//  [Observar los tests para otros casos]

const isAncestor = function(genealogyTree, ancestor, descendant){
    // Tu código aquí:
}


// NO MODIFICAR EL CÓDIGO DEBAJO
module.exports = {
    BinarioADecimal,
    counter,
    getNombreInstructor,
    getNombreAlumno,
    sortPaddockTypeByTotalArea,
    sortFarmManagerByAdminArea,
    farmManagerPaddocks,
    newManagerRanking,
    isAncestor
}