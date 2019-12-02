/*
 1) crear una funcion que guarde una lista de listas de datos personales,
  que guarde por cada persona nombre, sexo y edad 
 2) hacer una funcion que reciba como parametro el nombre de la persona
 y que devuelva un string indicando:
    a) menor de edad <18
    b) mayor de edad (>=18)
    c) tercera edad  >60
3) Hacer una funcion que cuente cuantas personas del sexo femenino hay en la lista
4) Hacer una funcion que cuente cuantas personas del sexo masculino hay en la lista
5) Hacer una funcion que indique el % de personas con sexo masculino y cuantas con sexo femenino
*/

let general = [];
const guardarDatos = () => {
    let persona = [];
    let nombre = prompt('Dime tu nombre');
    let sexo = prompt('Sexo?');
    let edad = prompt('edad');
    persona.push(nombre, sexo, edad)
    general.push(persona);
    return "Persona Guardada"
}


const etapaDeVida = (nombre) => {
    let encuentraEdad = general.find(persona => {
        return persona[0] === nombre;
    });
    if (encuentraEdad[2] < 18) {
        return "Eres menor de edad";
    } else if (encuentraEdad[2] >= 18 && encuentraEdad[2] <= 60) {
        return "Eres mayor de edad";
    }
    return "Eres de la tercera edad";
}

const contadorGenero = (sexo) => {
    let sexoCounter = general.filter(persona =>{
        return persona[1].toLowerCase() === sexo
    })
    return sexoCounter.length;
}


















const arreglo = [10, 20, 30, 40]
const mayor = (numero) => {
    const numeroMayorEncontrado = arreglo.find(num => {
        console.log(num > numero)
        return num > numero 
    })
    return numeroMayorEncontrado;
}

