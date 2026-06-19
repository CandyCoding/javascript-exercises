// Do not edit below this line
//Escribir una funcion que devuelva su entrada pero invertida
// empezamos con una sola palabra

//let word = "hello"
const reverseString = function(string) {
let newWord = []
let wordToArr = string.split("")
//console.log(wordToArr.length)
for (i = wordToArr.length -1; i > -1 ; i--){
    newWord.push(wordToArr[i])
}
    let palabra = newWord.join("")
    return palabra
}
    
//reverseString(word)

module.exports = reverseString;
