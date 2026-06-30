
const word = 'A car, a man, a maraca.'
const palindromes = function (string) {
let minus =string.toLowerCase() // minusculas 
let clean = minus.replace(/[^a-z0-9]/g,"")// hay que quitar espacios y signos
console.log(clean)
let reverse = clean.split("").reverse().join("")
return reverse === clean
};
// Do not edit below this line
module.exports = palindromes;
