"use strict"

////////////////////////DATE////////////////////////////


//1. Mostra o día da semana (en letra) do 25 de xullo de 2000.
console.log("Exercicio DATE - 1");
const data1 = new Date('July 25, 2000');
const ex1 = data1.getDay();
if (ex1 == 0) {
    console.log("Domingo");
}
if(ex1 == 1){
    console.log("Luns");
}
if(ex1 == 2){
    console.log("Martes");
}
if(ex1 == 3){
    console.log("Mércores");
}
if(ex1 == 4){
    console.log("Xoves");
}
if(ex1 == 5){
    console.log("Venres");
}
if(ex1 == 6){
    console.log("Sábado");
}


//2. Mostra o día da semana (en letra) do 26 de xullo deste ano.
console.log("Exercicio DATE - 2");
const data2 = new Date('July 26, 2023');
const ex2 = data2.getDay();
if (ex2 == 0) {
    console.log("Domingo");
}
if(ex2 == 1){
    console.log("Luns");
}
if(ex2 == 2){
    console.log("Martes");
}
if(ex2 == 3){
    console.log("Mércores");
}
if(ex2 == 4){
    console.log("Xoves");
}
if(ex2 == 5){
    console.log("Venres");
}
if(ex2 == 6){
    console.log("Sábado");
}

//3. Calcula o número de días que pasaron dende o 25 de xullo de 2000 ata hoxe.
console.log("Exercicio DATE - 3");
const data3 = new Date();
const tempo1 = data1.valueOf();
const tempo2 = data3.valueOf();
const ex3 = Math.round(((tempo2 - tempo1) / (1000 * 60 * 60 * 24)));
console.log(ex3+" días");


//4. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes.
console.log("Exercicio DATE - 4");
function diasDeMes(mes, ano) {
    return new Date(ano, mes, 0).getDate();
}

console.log(diasDeMes(5, 2000));

//5. Crea unha función á que se lle pase unha data e diga se é fin de semana.
console.log("Exercicio DATE - 5");
function finde(data) {
    const comprobar = data.getDay();
    if (comprobar == 0) {
        return("FINDE :D");
    }
    if(comprobar == 1){
        return("Non é finde :C");
    }
    if(comprobar == 2){
        return("Non é finde :C");
    }
    if(comprobar == 3){
        return("Non é finde :C");
    }
    if(comprobar == 4){
        return("Non é finde :C");
    }
    if(comprobar == 5){
        return("Non é finde :C");
    }
    if(comprobar == 6){
        return("FINDE :D");
    }
}

const data5 = new Date('April 22, 2023');
console.log(finde(data5));

//6. Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano.
console.log("Exercicio DATE - 6");
function diasDendeAno(data) {
    let ano = data.getFullYear();
    let fechaInicial = Date.parse('1 Jan '.concat(ano)+' 00:00:00 GMT');
    let milisecsFechaIn = fechaInicial.valueOf();
    let milisecsData = data.valueOf();
    const diasFinais = Math.round(((milisecsData - milisecsFechaIn) / (1000 * 60 * 60 * 24)));
    return diasFinais;
}

const data6 = new Date('September 27, 2020');
console.log(diasDendeAno(data6));


///////////////////////MATH///////////////////////////

//1. Crea unha función á que se lle pase como parámetro o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos.
console.log("Exercicio MATH - 1");
function pasarMinutos(numeroMins) {
    if (numeroMins >= 0) {
        if (numeroMins >= 60) {
            let horas = 0;
            while (numeroMins >= 60) {
                numeroMins = numeroMins - 60;
                horas++;
            }
            return horas + " horas e " + numeroMins + " minutos";
        }
        else {
            return numeroMins + " minutos";
        }
    }
    else {
        return "O número debe ser positivo";
    }
}

const minutos = 770;
console.log(pasarMinutos(minutos));

//2. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o resultado das funcións usando dúas cifras decimais.
console.log("Exercicio MATH - 2");
function calcularArea(radio) {
    let area = Math.PI * radio ** 2;
    area = area.toFixed(2);
    return area;
}

function calcularPerimetro(radio) {
    let perimetro = 2 * Math.PI * radio; 
    perimetro = perimetro.toFixed(2);
    return perimetro;
}

const radio1 = 7;

console.log(calcularArea(radio1));
console.log(calcularPerimetro(radio1));


////////////////////STRINGS/////////////////////////////

//Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido inverso.
console.log("Exercicio STRING - 1");

function cadeaInversa(cadea) {
    return cadea.split("").reverse().join("")
}

// function invertirCadea(cad) {
//   if (cad === "")
//     return "";
//   else
//     return invertirCadea(cad.substr(1)) + cad.charAt(0);
// }

console.log(cadeaInversa("Hola cadea"));
//console.log(invertirCadea("Hola cadea"));

//Crea unha función á que se lle pase unha cadea e un array de caracteres e devolva a cadea orixinal eliminando os caracteres do array.
console.log("Exercicio STRING - 2");

function eliminarCaracteresString(str, arr) {
    let cadeaNova = str;
    for (let letra of arr) {
        cadeaNova = cadeaNova.replaceAll(letra, "");
    }
    return cadeaNova;
}

let string2 = "Este exemplo é maravilloso";
let array2 = ["t", "l"];
console.log(eliminarCaracteresString(string2, array2));

//3. Crea unha función á que se lle pase unha cadea e devolva o carácter máis repetido.
console.log("Exercicio STRING - 3");

function caracterRepetido(cadea3) {
    let cadeaOrixinal = cadea3;
    let contadorLetras = 0;
    let letrasUnicas = [];
    let almacenVecesRepetidas = [];

    cadea3 = cadea3.toUpperCase().split("").sort();

    for (let i = 0; i < cadea3.length; i++){
        if (cadea3[i + 1] === cadea3[i]) {
            contadorLetras++;
        } else {
            letrasUnicas.push(cadea3[i]);
            almacenVecesRepetidas.push(contadorLetras);
            contadorLetras = 1;
        }
    }

    let valorMaximo = Math.max(...almacenVecesRepetidas);
    let letraMaisRepetida = "";

    for (let i = 0; i < almacenVecesRepetidas.length; i++){
        if (almacenVecesRepetidas[i] === valorMaximo) {
            letraMaisRepetida = letrasUnicas[i];
        }
    }
    console.log("Cadea: "+cadeaOrixinal);
    return "O caracter máis repetido é: "+ letraMaisRepetida + " = " + valorMaximo;
}

console.log(caracterRepetido("Vaia unha cadea chula estou facendo"));

//Crea unha función á que se lle pase unha cadea de números e devolva unha cadea da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada.
console.log("Exercicio STRING - 4");

function enmascarar(cadea4) {
    let dixitos4 = cadea4.substring(cadea4.length, cadea4.length - 4);
    let cadeaEnmascarada = "";
    for (let i = 0; i < cadea4.length - 4; i++) {
        cadeaEnmascarada = cadeaEnmascarada.concat("*");
    }
    let cadeaFinal = cadeaEnmascarada.concat(dixitos4);
    return cadeaFinal;
}


console.log(enmascarar("111117777"));

//Escribe o código necesario para procesar unha cadea con información de voos como a do exemplo e mostrar a información por consola formateada como aparece na imaxe:

console.log("Exercicio STRING - 5");

let flightsInfo =
    "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

// flightsInfo = flightsInfo.split("+");
// let arrayFinal = [];
// for (let linea of flightsInfo) {
//     let lineaSenBarrasBaixas = linea.replaceAll("_", " ").substring(1, linea.length);
//     let lineaSeparada = lineaSenBarrasBaixas.split(";");
//     for (let parte of lineaSeparada){
//         let lineaFinal = lineaSeparada[0].concat(" ").concat(lineaSeparada[1].substring(0,3).toUpperCase()).concat(" ").concat(lineaSeparada[2].substring(0,3).toUpperCase()).concat(" ").concat(lineaSeparada[3]);
//         arrayFinal.push(lineaFinal);
//     }
// }
//     console.log(arrayFinal[1]);
//     console.log(arrayFinal[5]);
//     console.log(arrayFinal[8]);
//     console.log(arrayFinal[12]);



//Garda nun array a lista de froitas: peras, mazás, kiwis, plátanos e mandarinas. Fai os seguintes apartados con splice:
//a. Elimina as mazás.
//b. Engade detrás dos plátanos, laranxas e sandía.
//c. Quita os kiwis e pon no seu lugar cereixas e nésperas.

//Despois de realizar cada operación, mostra por pantalla o array coa lista de froitas,onde os elementos estean separados por unha coma e espazo. Por exemplo, inicialmente o array debe mostrarse como “peras, mazás, kiwis, plátanos, mandarinas”.

console.log("Exercicio ARRAY - 1");

let froitas = ["peras", "mazás", "kiwis", "plátanos", "mandarinas"];

function showFruit(froita) {
    let cadea = "";
    for (let f of froita) {
        cadea = cadea.concat(f).concat(", ");
    }
    return cadea;
}

froitas.splice(1, 1);
console.log(showFruit(froitas));
froitas.splice(3,"","laranxas", "sandía");
console.log(showFruit(froitas));
froitas.splice(1,1,"cereixas","nésperas");
console.log(showFruit(froitas));

//Fai unha función que ordene as notas dun array pasado como parámetro. Por exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a función sort e pasarlle como parámetro unha función que ti definas que serva para realizar a comparación de elementos.
console.log("Exercicio ARRAY - 2");

let notas = [4, 8, 3, 10, 5];

function ordenaNotas(a, b) {
    // if (a < b) {
    //     return 1;
    // }
    // if (a > b) {
    //     return -1;
    // }
    // if (a === b) {
    //     return 0;
    // }
    return a - b;
}

console.log(notas.sort(ordenaNotas));

//Dado un array cos días da semana, indica se algún comeza por ‘s’. Comproba tamén se todos acaban en ‘s’.
console.log("Exercicio ARRAY - 3");

let diaSemana = ["lunes", "martes", "mércores", "xoves", "venres", "sábado", "domingo"];

for (let dia of diaSemana) {
    dia = dia.toUpperCase();
    if (dia.startsWith("S")){
        console.log(dia," comeza por S");
    } else {
        console.log(dia," non comeza por S");
    }
    if (dia.endsWith("S")) {
        console.log(dia," acaba en S");
    } else {
        console.log(dia," non remata en S");
    }
}


//Crea unha función á que se lle pase un texto e devolva o mesmo texto coa primeira letra de cada palabra en maiúsculas e o resto en minúsculas.
console.log("Exercicio ARRAY - 4");

const texto4 = "Esta cadea de texto está pensada para javascript";

function camelText(texto) {
    let textoFinal = "";
    for (let palabra of texto.split(" ")) {

        let palabraMod = palabra.charAt(0).toUpperCase();
        palabra = palabra.substring(1);
        palabraMod = palabraMod.concat(palabra);
        textoFinal = textoFinal.concat(palabraMod).concat(" ");
    }
    return textoFinal;
}

console.log(camelText(texto4));

//EXERCIO FINAL ARRAYS-OBXECTOS
console.log("Exercicio ARRAY - FINAL");

const players = [
[
"Neuer",
"Pavard",
"Martinez",
"Alaba",
"Davies",
"Kimmich",
"Goretzka",
"Coman",
"Muller",
"Gnabry",
"Lewandowski",
],
[
"Burki",
"Schulz",
"Hummels",
"Akanji",
"Hakimi",
"Weigl",
"Witsel",
"Hazard",
"Brandt",
"Sancho",
"Gotze",
],
];

//Crea as variables players1, players2 que conteña un array cos xogadores de cada equipo.

let players1 = players[0];
let players2 = players[1];

console.log(players1);
console.log(players2);

//O primeiro xogador do array é o porteiro e o resto son xogadores de campo.Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e unha variable de tipo array chamada fieldPlayers que conteña o resto de xogadores do equipo.

let gk, fieldPlayers;
[gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//Crea un array allPlayers que conteña os xogadores dos dous equipos.

let allPlayers;
allPlayers = [...players1,...players2];
console.log(allPlayers);

//d. O primeiro equipo substituiu os xogadores iniciais por 'Thiago', 'Coutinho', 'Periscic'. Crea unha nova varible de tipo array chamada players1Final que conteña os xogadores iniciais e tamén os 3 novos.

let players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);


//Dado un array con nomes de variables formados por dúas palabras separadas por “_”, mostra por consola os nomes das variables en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “ last_NAME”], deberase mostrar por consola “firtsName” e “lastName”.

let arrVariable = ["first_name", "last_NAME"];

for (let x of arrVariable) {
    x = x.split("_");
    console.log(x);
    for (let y of x) {
        y = y.toLowerCase();
        console.log(y);
    }
}