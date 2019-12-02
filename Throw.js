let dia = prompt("Cual es tu dia favorito de la semana");
dia = dia.toLowerCase();
try {
    switch (dia) {
        case 'lunes': console.log("1");
            break;
        case 'martes': console.log("2");
            break;
        case 'miercoles': console.log('3');
            break;
        case 'jueves': console.log('4');
            break;
        case 'viernes': console.log('5');
            break;
        case 'sabado': console.log('6');
            break;
        case 'domingo': console.log('7');
            break;
        default: throw (2308);
    }
}
catch (err){
    console.warn(`Error ${err} . Ingrese dia valido`)
}




