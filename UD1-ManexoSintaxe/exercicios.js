"use strict"

//Crea unha función frecha que devolva o cubo dun número pasado como parámetro.
console.log("-EXERCICIO 1-");

const x = (y) => { return y * y * y };

console.log(x(3));

//Crea unha función á que se lle pase un array e devolva como resultado un array cos elementos impares do array de entrada.
console.log("-EXERCICIO 2-");

let arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];
let arraySalida = [];

for (const valor of arrayEntrada) {
    if (valor % 2 != 0) {
        arraySalida.push(valor);
    }
}

console.log(arraySalida);

//Crea unha función que sume todos os valores pasados como parámetros, sendo estes un número indeterminado.
console.log("-EXERCICIO 3-");

function suma(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}

console.log(suma(3,1,5,6));

//Crea unha función á que se lle pasen varios números como parámetros (un número indeterminado de parámetros). Debe devolver a media dos números pasados. Proba a realizala con diferentes bucles for (con contador, for…in e for…of).
console.log("-EXERCICIO 4-");

function media(...nums) {
    let media = 0;
    let contador = 0
    for (const num of nums) {
        contador++;
        media += num;
    }
    return media / contador;
}

console.log(media(3,1,5,7));

//Crea unha función que reciba un array bidimensional de lonxitude variable que se corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1 nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un array bidimensional onde cada posición que non teña mina, debe ter a información do número de minas adxacentes (diagonal, horizontal e vertical).
console.log("-EXERCICIO 6-");

let arrayBuscaminas = [[0, 0, -1, 0],
    [0, -1, -1, 0]];

let minas = [];

for (let i = 0; i < arrayBuscaminas.length; i++){
    minas[i] = [];

    for (let j = 0; j < arrayBuscaminas.length; j++){
        if (arrayBuscaminas[i][j] = -1) {

        }
        else {

        }
    }
}

console.log(minas);


//Crea unha función JavaScript que comprobe se é poxible axendar unha reunión dentro do horario laboral. A estrutura da función e do programa indícanse a continuación:
console.log("-EXERCICIO 7-");