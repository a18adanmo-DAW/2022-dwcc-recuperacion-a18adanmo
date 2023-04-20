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

flightsInfo = flightsInfo.split("+");
console.log(flightsInfo);
for (let linea of flightsInfo) {
    let lineaSenBarrasBaixas = linea.replaceAll("_", " ").substring(1, linea.length);
    let lineaSeparada = lineaSenBarrasBaixas.split(";");
    for (let parte of lineaSeparada){
        let lineaFinal = lineaSeparada[0].concat(" ").concat(lineaSeparada[1].substring(0,3).toUpperCase()).concat(" ").concat(lineaSeparada[2].substring(0,3).toUpperCase()).concat(" ").concat(lineaSeparada[3]);
        console.log(lineaFinal);
    }
}




