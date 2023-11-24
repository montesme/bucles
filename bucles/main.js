// Funcion
function mostrarTablaMultiplicar(numero) {
  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// ingresa el numero
let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));

// Verificar 
if (!isNaN(numero)) {
  mostrarTablaMultiplicar(numero);
} else {
  console.log("Por favor, ingresa un número válido.");
}

//2.

let suma = 0;

// Mensaje
console.log("Ingresa números para acumular. Ingresa 0 para terminar.");


let num = parseInt(prompt("Ingresa un número:"));
while (num !== 0) {
  // Verificar si se ingresó un número válido
  if (!isNaN(num)) {
    suma += num; // Acumular el número ingresado
  } else {
    console.log("Por favor, ingresa un número válido.");
  }
  
  // Pedir otro número al usuario
  num = parseInt(prompt("Ingresa un número:"));
}

// Mostrar la suma total al finalizar
console.log(`La suma total de los números ingresados es: ${suma}`);

//4.
function esPrimo(nume) {
  if (nume <= 1) {
    return false; // Los números menores o iguales a 1 no son primos
  }

  // Verificar si el número es divisible por algún otro número que no sea 1 o él mismo
  for (let i = 2; i <= Math.sqrt(nume); i++) {
    if (nume % i === 0) {
      return false; // Si es divisible, no es primo
    }
  }

  return true; // Si no es divisible por ningún número excepto 1 y él mismo, es primo
}

// Solicitar al usuario ingresar un número para verificar si es primo
let nume = parseInt(prompt("Ingresa un número para verificar si es primo:"));

if (!isNaN(nume)) {
  if (esPrimo(nume)) {
    console.log(`${nume} es un número primo.`);
  } else {
    console.log(`${nume} no es un número primo.`);
  }
} else {
  console.log("Por favor, ingresa un número válido.");
}

//5.
function mostrarDivisores(numeros) {
  if (numeros <= 0) {
    console.log("Ingresa un número positivo mayor que cero.");
    return;
  }

  console.log(`Los divisores de ${numeros} son:`);
  for (let i = 1; i <= numeros; i++) {
    if (numeros % i === 0) {
      console.log(i);
    }
  }
}

// Solicitar al usuario ingresar un número para mostrar sus divisores
let numeros = parseInt(prompt("Ingresa un número para mostrar sus divisores:"));

if (!isNaN(numero)) {
  mostrarDivisores(numeros);
} else {
  console.log("Por favor, ingresa un número válido.");
}


//6.
// Ejemplo de un array con 10 elementos
let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Recorrer el array y mostrar cada elemento por consola
console.log("Elementos del array:");
miArray.forEach(elemento => {
  console.log(elemento);
});

//7. // Ejemplo de un array con 10 números
let number = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Mostrar el doble de cada elemento por consola
console.log("El doble de cada elemento del array es:");
number.forEach(number => {
  let doble = number * 2;
  console.log(doble);
});

//9



// Ejemplo de un array con 10 números
let N = [3, 8, 12, 5, 17, 22, 10, 9, 14, 7];

// Mostrar los números impares del array por consola
console.log("Los números impares del array son:");
N.forEach(N => {
  if (N % 2 !== 0) {
    console.log(N);
  }
});