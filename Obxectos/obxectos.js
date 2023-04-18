"use strict"

//1. Mostra o día da semana (en letra) do 25 de xullo de 2000.

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

const data3 = new Date();
const tempo1 = data1.valueOf();
const tempo2 = data3.valueOf();
const ex3 = Math.round(((tempo2 - tempo1) / (1000 * 60 * 60 * 24)));
console.log(ex3+" días");


//4. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes.

function diasDeMes(mes, ano) {
    return new Date(ano, mes, 0).getDate();
}

console.log(diasDeMes(5, 2000));

//5. Crea unha función á que se lle pase unha data e diga se é fin de semana.

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

//1. Crea unha función á que se lle pase como parámetro o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos.

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