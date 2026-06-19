
//let one = 2
//let two = 1

const sumAll = function(a,b) {
// la funcion va a recibir dos numeros enteros positivos y devolvera
// la suma de todos los numeros que se encuentren dentro de estos. 
if (typeof a !== "number" || typeof b !== "number"){
    return "ERROR"};
if (a < 0 || b < 0 ) {
    return "ERROR"};

if (!Number.isInteger(a)|| !Number.isInteger(b)){
     return "ERROR"};

if(a > b){
    let temp = a;
    a = b ;
    b = temp;
}
let suma = 0;
for(let i=a; i<= b;i++){
        suma = suma +i
}
return suma
};
//sumAll(one,two)
// Do not edit below this line
module.exports = sumAll;
