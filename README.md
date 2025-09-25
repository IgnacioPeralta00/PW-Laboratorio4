# PW-Laboratorio4
## Pregunta página 8
#### Analicemos ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

#### Prioridad en operadores aritméticos 
Los paréntesis tienen máxima prioridad, luego exponenciación (derecha a izquierda), luego multiplicación/división, finalmente suma/resta.

#### Operadores de incremento y decremento
```js
    let inicio = +5; // Operador unario + (convierte a número)

    const sumaYAsigna = ++inicio; // 6 → PRIMERO incrementa a 6, LUEGO asigna
    const asignaYSuma = inicio++;  // 6 → PRIMERO asigna 6, LUEGO incrementa a 7
    const restaYAsigna = --inicio; // 6 → PRIMERO decrementa a 6, LUEGO asigna  
    const asignaYResta = inicio--; // 6 → PRIMERO asigna 6, LUEGO decrementa a 5

    console.log(inicio); // 5 (valor final)
```
#### Operadores de asignación compuesta
```js
let x = 1;
let y = 2; 
let z = 3;

x = y;     // x = 2
x += z;    // x = x + z → 2 + 3 = 5
x *= y;    // x = x * y → 5 * 2 = 10  
x /= y;    // x = x / y → 10 / 2 = 5
x %= x;    // x = x % x → 5 % 5 = 0
```

En este contexto, C, C++, Java, C# usan la misma sintaxis que js lo que hace que sea un lenguaje familiar para algunos programadores, ademas, js es débilmente tipado y permisivo lo que permite múltiples formas de expresar la misma operación


# Pregunta página 9

#### ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo? 

Los flujos de control, como bucles, declaraciones condicionales y funciones, siguen una sintaxis y lógica comunes en muchos lenguajes de programación.
En javascript, se pueden utilizar bucles for, while y do-while para repetir bloques de código. Asi como utilizar declaraciones condicionales como if, else, switch y try-catch para tomar decisiones basadas en condiciones específicas.
