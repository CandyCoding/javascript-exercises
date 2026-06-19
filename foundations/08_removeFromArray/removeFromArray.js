//let ingreso = [1, 2, 3, 4]
//let numero = 3 
// primero ver como manejar multiples argumentos opcionales
const removeFromArray = function(array,...otros) {
    let uniquearray = []
    for (item of array){
        if(!otros.includes(item)){
            uniquearray.push(item)
        }
  //          console.log(uniquearray)
    }
    return uniquearray
};
//removeFromArray(ingreso,numero)
// Do not edit below this line
module.exports = removeFromArray;
