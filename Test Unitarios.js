//* 

//Funcionamiento en raiz.

///mi proyecto/.git//
//  /.index.js//
// /Node_modules///
//  /modulo1///
//  /node_moduls//


// 1ro npm init
// 2do npm install -save-dev jest (NO)                       
// 3ro npm install -g jest       

// TEST UNITARIOS:
// Hace un peque#o test de Funciones.
//Cuando son archivos test terminan en test.js


test('suma 2 al numero 4, devolviendome 6', () => {
    expect(sumaDos(4)).toBe(6);
});

//NUMERICO
  // Expect es el valor que estoy esperando recibir.
  // ToBe es el resultado esperado.

  //ARRAY
  //tpContain  es cuando es el resultado en un array.

  //Ciclo de Vida son los tiempos de ejecucion :)
  