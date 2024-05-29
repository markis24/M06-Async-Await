// Crea una funció que donat un nombre per paràmetre et retorni, mitjançant una promesa si és divisible entre dos o no.
// Mitjançant un console.log mostra els possibles resultats
//

    function comprobarDivisibilidad(numero) {
        return new Promise((resolve, reject) => {
          if (numero % 2 === 0) {
            resolve(`${numero} es divisible entre dos`);
          } else {
            reject(`${numero} no es divisible entre dos`);
          }
        });
      }


      const numero = 10;

      comprobarDivisibilidad(numero)
        .then(resultado => {
          console.log(resultado);
        })
        .catch(error => {
          console.error(error);
        });



//   Assigna-li una promesa a una variable que comprovi si un valor és major o igual a 0 i menor o igual a 10.
// Mitjançant un console.log mostra els possibles resultats

const comprobarValor = new Promise((resolve, reject) => {
    const valor = 5; 
  
    if (valor >= 0 && valor <= 10) {
      resolve(`${valor} está entre 0 y 10`);
    } else {
      reject(`${valor} no está entre 0 y 10`);
    }
  });
  
  comprobarValor
    .then(resultado => {
      console.log(resultado);
    })
    .catch(error => {
      console.error(error);
    });



    //       Crea una funció que es digui esVocal que retorni una promesa que calculi si una lletra està dins d’un array donat.
    // let arr = [“a”, “e”, “i”, “o”, “u”]
    // Mitjançant un console.log mostra els possibles resultats


    function esVocal(lletra, arr) {
      return new Promise((resolve, reject) => {
          if (typeof lletra !== 'string' || lletra.length !== 1) {
              reject('Input no vàlid. Ha de ser una sola lletra.');
          } else {
              resolve(arr.includes(lletra.toLowerCase()));
          }
      });
  }
  
  let arr = ["a", "e", "i", "o", "u"];
  
  esVocal('a', arr).then(result => {
      console.log(result);  // true
  }).catch(error => {
      console.error(error);
  });
  
  esVocal('b', arr).then(result => {
      console.log(result);  // false
  }).catch(error => {
      console.error(error);
  });
  
  
//Crea una funció JS que rebi 2 paràmetres i que retorni una promesa que calculi la divisió del primer entre el 2on paràmetre.
// Fes que si la divisió és possible torni el quocient, si el 2on paràmetre és 0 que torni un missatge d’error

function dividir(a, b) {
  return new Promise((resolve, reject) => {
      if (b === 0) {
          reject('Error: no es pot dividir per zero.');
      } else {
          resolve(a / b);
      }
  });
}

dividir(10, 2).then(result => {
  console.log(result);  // 5
}).catch(error => {
  console.error(error);
});

dividir(10, 0).then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);  // Error: no es pot dividir per zero.
});
