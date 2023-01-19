# Problema:
La siguiente espiral de 5 × 5 se forma desde su elemento central comenzando del 1 y moviéndose a la derecha en el sentido horario:
```
21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13
```

En esta espiral, la suma de sus diagonales principales es 101.

El objetivo es escribir un programa escrito en Javascript que entregue la suma de las diagonales de una espiral de 1003 × 1003 creada tal como en el ejemplo.
## Planteamiento:
Leo bien el problema cuantas veces sea necesario para entenderlo, abordarlo correctamente y no hacer algo que no se pide. 

Parto con una lluvia de ideas y observaciones:
- Identifico la estructura de datos, una matriz.
- Deben ser matrices nxn con n impar para que tenga centro.
- La espiral más pequeña sería 1x1.
- Debo encontrar una forma de recrear la espiral cualquiera sea el n.

Lo primero que hago es agarrar un cuaderno y escribir distintas espirales para encontrar un patrón, identifico que sigue una secuencia donde, desde el centro avanza una posición a la derecha, una hacia abajo, dos hacia la izquierda, dos hacia arriba, tres hacia la derecha, tres hacia abajo, etc y dependiendo del orden de la espiral, por lo que crearia dos bucles para rellenar la matriz a partir del centro y con una variable modulo 4 (n % 4) para ir rellenando la matriz en espiral (0 - derecha, 1 - abajo, 2 - izquierda 3 - arriba). Luego pienso que esta solución tendría complejidad exponencial, se tendria que crear una matriz muy grande para una de 1003x1003 o más, además estaría haciendo algo que no se pide que es recrear la matriz cuando el objetivo pide encontrar la suma de las diagonales.

Ahora comienzo a cambiar el planteamiento y sumo las diagonales centrales para una espiral de 1x1, 3x3, 5x5, 7x7, 9x9, donde se obtiene:

```
1, 25, 101, 261, 537, 961
```

Pienso que podria existir un patrón o secuencia y haciendo la resta para encontrar una sucesión:

```
1, 25, 101, 261, 537, 961 ...
24, 76, 160, 276, 424 ...
52, 84, 116, 48 ...
32, 32, 32, ...
```
se obtiene que se trata de una sucesión de tercer orden. No recuerdo como se obtenia la formula general por lo que acudo a Youtube. https://www.youtube.com/watch?v=wrTsbbPDrgM

Obtengo:

```
let sumaDiagonales = (n) => ((16/3)*n**3 - 6*n**2 + (14/3)*n -3);
```

Pero para el termino correspondiente a la espiral 1003x1003 se obtiene 673189024.9999999, cuando debiese ser un número entero, por lo que me doy cuenta que es por la división así que factorizo por 1/3.

```
673189024.9999999
```

Finalmente para 1003 se obtiene :

```
let ordenEspiral = 1003;
let sequenceNumber = (ordenEspiral+1)/2;
let seqDiagonales = (n) => 1/3*(16*n**3 -18*n**2 + 14*n -9);
console.log(seqDiagonales(sequenceNumber));
```

se obtiene:
```
673189025
```














