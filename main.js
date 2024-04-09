//1<. Funciones flecha
//Convierte la siguiente función en una función flecha:

//function saludar() {
//return "Hola";}


const saludar = () => "Hola";

console.log(saludar);

//Convierte la siguiente función en una función flecha en línea:
//function division(a,b) {
// return a / b;}

const div = (a, b) => a / b;

console.log(div(6, 6));


//Convierte la siguiente función en una función flecha:
//function miNombre(nombre) {
//return `Mi nombre es ${nombre}`;}

const miNombre = (nombre) => `Mi nombre es ${Patricia}`;
console.log(miNombre);


//Convierte las siguientes funciones en funciones flecha:
//function test2() {
// console.log("Función test 2 ejecutada.");}


function test2() {
    console.log("Función test 2 ejecutada.");
}
console.log(test2);


const test1 = (callback) => {
    callback();
}

console.log(test1);



/*2. Foreach
Utiliza la siguiente array para resolver los próximos ejercicios:*/

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];


for (let i = 0; i < gente.length; i++) {
    console.log(gente[i]);
}

//Crea un array con la gente mayor de 25 años y muéstralo por consola.
const mayoresDe25 = gente.filter(persona => persona.edad > 25);
console.log("Personas mayores de 25 años:");
console.log(mayoresDe25);


//Crea un array con la gente que empieza por J. 
const empiezanPorJ = gente.filter(persona => persona.nombre.startsWith("J"));
console.log("Personas cuyo nombre empieza por 'J':");
console.log(empiezanPorJ);


// 3. Map

//Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const ArraymayoresDe25 = gente.map(persona => {
    if (persona.edad > 25) {
        return persona.edad;
    }
})
console.log(ArraymayoresDe25);


//Crea un array con la gente que empieza por J. 


const ArrayEmpiezaJ = gente.map(persona => {
    if (persona.nombre.startsWith("J")) {
        return persona.nombre;
    }
})

console.log(ArrayEmpiezaJ);


//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [4, 5, 6, 7, 8, 9, 10];

// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const result = numbers.map(number => number ** number);

console.log(result);


//4. Filter

//Crea un segundo array que devuelva los impares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosImpares = numbers.filter(numero => numero % 2 !== 0);

console.log(numerosImpares);


//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como 
//la del ejemplo:

 const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ];

      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]*/

const platosVeganos = foodList
  .filter(plato => plato.isVeggie)
  .map(plato => `¡Qué rico ${plato.name} me voy a comer!`);

console.log(platosVeganos);

//5. Reduce

// Salida--> 483600

const num = [39, 2, 4, 25, 62];

const multiplicación = num.reduce((a, b) => a * b,);

console.log(multiplicación);


//Map
//Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo 
//accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];


// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */

    const frases = staff.map(persona => `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(" y ")}`);

    console.log(frases);