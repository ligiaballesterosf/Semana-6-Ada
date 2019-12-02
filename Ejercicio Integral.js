/***********************************************
 * 
 * 1. Hacer una función que guarde una lista
 *    de listas de datos de personas. Deberia
 *    guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.
 * 1b. Al ingresar nueva persona, validar que no 
 *     exista en la lista. Si existe, tirar
 *     un error. (Usar funcion distinta para validar
 *     y llamar dentro de la funcion de guardar persona).
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.
 * 3. Hacer una función que me permita encontrar
 *    una persona por email.
 * 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 * 5. Hacer una función para borrar personas por mail.
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 * 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.
 * Observaciones: Google. Mucho google.
 * 
 ************************************************/


let general = [];
const guardarDatos = () => {
    try {
        let persona = [];
        let nombreCompleto = prompt('Ingresa tu nombre completo:');
        if (validarSiExiste(nombreCompleto)) {
            // si hago trow, cae en el catch abajo
            throw "nombre ya existe";
        }

        let edad = prompt("Edad:");
        let email = prompt('Correo:')
        // el orden de los datos es como se va a consultar luego, por ejemplo si digo persona[1] se refiere a la edad
        //  posicion         0        1      2 
        persona.push(nombreCompleto, edad, email)
        general.push(persona);
        return "Dato guardado"
    } catch (error) {
        console.warn(error)
    }

}
// Funcion para validar si el usuario existe
const validarSiExiste = (nombreCompleto) => {
    // find devuelve el primer elemento que encuentra en un arreglo
    // https://www.w3schools.com/jsref/jsref_find.asp
    // si encuentra por lo menos uno entonces devuelve el contenido encontrado, de lo contrario devuelve undefined
    // siempre llevar las cosas a minusculas o mayusculas para hacer busquedas
    return general.find(persona => persona[0].toLowerCase() === nombreCompleto.toLowerCase())
}
// Funcion retorna todo el array
const listarTodos = () => {
    if (general.length > 0) {
        return general
    }

    return "No hay datos"
}

const buscarPorEmail = (email) => {
    // Si no encuentra nada devuelve 'undefined' entonces con el 'or ||' devuelve No encontrado
    return general.find(persona => persona[2] === email) || "No encontrado"
}

// https://www.w3schools.com/jsref/jsref_filter.asp
const buscarPorNombreIncompleto = (texto) => {
    // filter retorna un array con las coincidencias en la comparacion
    // ej: ['texto1', 'nas', 'hola'].filter(texto => texto === 'nas')  esto va a devolver un array solo con ['nas']
    // .includes() evalua si un string se encuentra dentro de otro string
    // ej: "Hola ligia".includes("li") va a devolver TRUE
    return general.filter(persona => persona[0].toLowerCase().includes(texto.toLowerCase()))
}

//* @parm {*} name / @returns array/bolean //


const borrarPorEmail = (email) => {
    // findIndex devuelve la POSICION del primer valor encontrado
    // https://www.w3schools.com/jsref/jsref_findindex.asp
    const posicion = general.findIndex(persona => persona[2].toLowerCase() === email.toLowerCase())
    if (posicion >= 0) {
        // The splice() method adds/removes items to/from an array, and returns the removed item(s).
        // https://www.w3schools.com/jsref/jsref_splice.asp
        general.splice(posicion, 1);
        return "Persona borrada"
    }
    return "No encontrado"
}

const posicion = email => {
    return general.findIndex(persona => persona[2].toLowerCase() === email.toLowerCase())
}

const modificarNombrePorEmail = (nombreCompleto, email) => {
    // igual que antes se busca la posicion de la persona en general
    const posicion = posicion(email)
    if (posicion >= 0) {
        general[posicion][0] = nombreCompleto;
        return "Persona modificada"
    }
    return "No encontrado"
}

const modificarEdadPorEmail = (edad, email) => {
    const posicion = posicion(email)
    if (posicion >= 0) {
        general[posicion][1] = edad;
        return "Edad modificada"
    }
    return 'No se encuentra.'
}


guardarDatos()