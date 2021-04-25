// ---------------------------> Función principal <----------------------------------

let scanString = (str) => {
  var data = validateString(str);

  console.log("Cadena: " + str);

  data.forEach((element) => {
    console.log(element);
    null;
  });
};

// ---------------------------> Exportar función principal <-------------------------

module.exports.scanString = scanString;

// ---------------------------> Funciones secundarias <------------------------------

// Verificar si la cadena es un palindromo
let isPalindrome = (str) => {
  var normalized = str.toLowerCase().match(/[a-z]/gi).reverse();
  return normalized.join("") === normalized.reverse().join("");
};

// Contar el número de palabras
let wordsCount = (str) => {
  // Excluye especios al inicio y al final
  str.replace(/(^\s*)|(\s*$)/gi, "");
  // Reduce espacios múltiples
  str.replace(/[ ]{2,}/gi, " ");
  // Excluye lineas nuevas
  str.replace(/\n /, "\n");
  return str.split(" ").length;
};

// Contar el número de letras
let letterCount = (str) => {
  var qty = 0;
  // Pasa un arreglo de caracteres para validar
  const letters = Array.from(str);
  // Recibe el arreglo de caracteres y aumenta el contador si es una letra
  letters.forEach((letter) => {
    letter.match(/[a-z]/i) ? qty++ : null;
  });
  return qty;
};

// Contar el número de vocales
let vocalCount = (str) => {
  var qty = 0;
  // Pasa un arreglo de caracteres para validar
  const letters = Array.from(str);
  // Recibe el arreglo de caracteres y aumenta el contador si es una vocal
  letters.forEach((letter) => {
    letter.match(/[aeiou]/i) ? qty++ : null;
  });
  return qty;
};

// Contar el número de consonantes
let consonantCount = (str) => {
  var qty = 0;
  // Pasa un arreglo de caracteres para validar
  const letters = Array.from(str);
  /* 
    Recibe el arreglo de caracteres y aumenta el contador si es una letra,
    si es una letra se verifica si es una vocal, si no, es consonante y se aumenta
    el contador 
  */
  letters.forEach((letter) => {
    letter.match(/[a-z]/i) ? (letter.match(/[aeiou]/i) ? null : qty++) : null;
  });
  return qty;
};

let validateString = (str) => {
  results = [];
  // Verifica si es un palindromo o no y regresa un mensaje
  isPalindrome(str)
    ? results.push("- La cadena es un palindromo")
    : results.push("- La cadena no es un palindromo");

  // Obtiene el número de palabras
  results.push("- Cantidad de palabras: " + wordsCount(str));

  // Obtiene número de letras
  results.push("- Cantidad de letras: " + letterCount(str));

  // Obtiene número de vocales
  results.push("- Cantidad de vocales: " + vocalCount(str));

  // Obtiene número de consonantes
  results.push("- Cantidad de consonantes: " + consonantCount(str));

  return results;
};
