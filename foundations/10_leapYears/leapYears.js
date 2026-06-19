//let year = 34992
const leapYears = function(year) {
// determinar una funcion que determine si un año es bisiesto o no
// divisibles por cuatro %4 ? 
//que no sea divisible por 100 
//que no sean divisibles por 100 pero si de 400 
if (year % 4 === 0 && (year % 100 !==0 || year %400 ===0)) {
   return true }
 else{ 
    return false
}
}
//leapYears(year)
// Do not edit below this line
module.exports = leapYears;
