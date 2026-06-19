//let string = ["hello",0]
const repeatString = function(string,number){
let stringToRepeat =""
if (number >= 0){
for ( let i = 0 ; i < number; i ++ ) 
    stringToRepeat = stringToRepeat + string;}
 else {
    stringToRepeat = "ERROR"
}
return stringToRepeat
}


// Do not edit below this line
module.exports = repeatString;
