

const saludo = () => {
    let nombre = prompt('Dime un nombre')
    alert('Hola' + nombre)
};
saludo()


const cuadrado = () => {
    let numero = prompt('Dime un numero, para elevarlo al cuadrado');
    alert(numero * numero)
};
cuadrado()




const arrayNuevo = [];
//let es lo mismo
const nombres = () => {
    let listaDeNombres = prompt("Cual es tu nombre?");
    //a let le puedo asignar otro valor en cambios a una const no puedo reasignar otro valor
    arrayNuevo.push(listaDeNombres);
} //del promt va a la variable dato y de dato a miArray. en el push debe ir un dato que existe.
//otra forma de hacerlo es arrayNuevo.push (promt ("decime tu nombre"));
nombres();
const mostrarlista = () => {
    console.log(arrayNuevo);
}
const ultimoValor = () => {
    let variableNombre = arrayNuevo[arrayNuevo.length - 1];//el length significa llamame el ultimo valor.
    //Tengo una propiedad de calcular el largo de mi array con la propiedad length
    //tengo que llamar a la
    alert(variableNombre);
}
ultimoValor();
console.log(arrayNuevo[arrayNuevo.length - 1])




    //*Escribir una funcion que reciba como parametro un numero e imprima ese numero al reves.Pista: Buscar como transformar los strings en arrays.*//


const reverseNumber = (numberToReverse) => {
    numberToReverse = numberToReverse.toString()
        .split("") /*con esto, separare los strings con el elemento que esta dentro, en este caso la coma.*/
        .reverse()
        .toString();

    console.log(numberToReverse);
};


//* Escribe una funcion que reciba una palabra e imprima sus letras ordenadas alfabeticamente *//

const alfabetico = (palabra) => {
    palabra = palabra.split("")
        .sort()
        .join()
    console.log(palabra)
}

/* cada palabra letra mayuscula*/

const mayus = (phrase) => {
    phrase = phrase.toLowerCase()
        .split(' ')
        .map(v => v[0].toUpperCase() + v.substr(1))
        .join(' ');
    console.log(phrase)
}

//*ejemplo de map*//
const arr = ["hola", "mundo"];

const arr2 = arr.map((item) => {


})


//*que imprima la frase mas larga *//

const longer = (text) => {
    text = text.split(' ')
        .sort(function (a, b) {
            return b.length - a.length;
        });

    console.log(text)
}


const longer = (text) => {
    text = text.split(' ')
        .sort(function (a, b) {
            return b.length - a.length;
        });

    console.log(text)
}


//* que imprima la palabra mas larga *//

function longer(str) {

    let length = 0, longestWord = "";
    let text = str.split(" ");
    for (let i = 0; i < text.length; i++) {
        if (text[i].length > length) {
            length = text[i].length;
            longestWord = text[i];
        }

    }

    return longestWord;
};

longer("Ah ok estoy buscando la palabras mas larga que exista en google, pongamos Otorrinolaringologo.")

//*version Anto *//

const bigPalabra = (frase) => {
    let word = frase.split(" ");
    let largo = 0;
    let palabra = null;
    word.forEach((word) => {
        if (largo < word.length) {
            largo = word.length;
            palabra = word;
        }
    })
    return palabra;
}
bigPalabra("un elefante se balanceaba sobre la tela de una arania");
Contraer


/* CallBack

Se pueden enviar funciones como parametros. De la misma forma que declaramos funciones en variables y las invocamos, 
podemos hacer esto con los parametros de nuesta funcion.


Ej

const miFuncion1 = ()=> {console.log(1);};
const miFuncion2 = (callback) => { callback();};
miFuncion2(miFuncion1);


Tambien puedo declarar la funcion directamente.*/


//* RETURN *//
/*Nos permite, desde la funcion, devolver un valor de la misma forma que un parametro nos permite recibir un valor.

Ademas le da cierre a una funcion. (Puede sacarlso break de los Switch)

Ej: 
function mySwith (value) {
    switch(value) {
        case 1: return "valor uno";
    }
}

Puede devolver cualquier tipo de dato.

*/


/* RECIBA UNA FRASE Y CALCULE EL NUMERO DE VOCALES */



function contador(str) {
    let vocales = 0;

    //turn the input into a string
    let string = str.toString();

    //loop through the string
    for (let i = 0; i <= string.length - 1; i++) {

        //if a vowel, add to vowel count
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vocales += 1;
        }
    }
    return vocales;
}


function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowel_count("The quick brown fox"));


const contador = (frase) => {
    frase = frase.toLowerCase();
    let vocal = 'aeiouAEIOU';
    let counter = 0;
    for (let x = 0; x < frase.length; x++) {
        if (vocal.indexOf(frase[x]) !== -1) {
            counter += 1;
        }

    }
    return counter;
}

//*ULTIMO EJERCICIO DE FUNCIONES*//
//Escoge un caracter de la frase y eliminalo. Solo uno solo. 

const sustractor = (frase) => {
    let caracter = prompt("Quitemos una letra")
    if (caracter.length != 1) {
       return "error"
    }

    frase = frase.toLowerCase();
    caracter = new RegExp(caracter, 'g'); //REGEXP Crea un objeto 'expresión regular' para encontrar texto de acuerdo a un patrón y el new lo invoca.
    frase = frase.replace(caracter,''); 

    return frase
}