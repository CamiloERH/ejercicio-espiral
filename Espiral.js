 
/*
La siguiente espiral de 5 × 5 se forma desde su elemento central comenzando del 1 y moviéndose a la derecha en el sentido horario:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

En esta espiral, la suma de sus diagonales principales es 101.

El objetivo es escribir un programa escrito en Javascript que entregue la 
suma de las diagonales de una espiral de 1003 × 1003 creada tal como en el ejemplo.

*/

const sumaDiagonales = (ordenEspiral) => {
    let sequenceNumber = (ordenEspiral+1)/2;
    let seqDiagonales = (n) => 1/3*(16*n**3 -18*n**2 + 14*n -9);
    return seqDiagonales(sequenceNumber);
}

const ordenEspiral = 1003;
console.log(sumaDiagonales(ordenEspiral));
