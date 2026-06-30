let a= "4" 


const fibonacci = function(n) {
n = Number(n)
if (n === 0){
   return 0
}if (n < 0) {
    return "OOPS"
}
 else ; 
let previous = 0;
let current = 1;
for (let i= 1; i < n ; i ++){
let next = previous + current
previous = current;
current = next;
}
return current
}


//console.log(fibonacci(a))
// Do not edit below this line
module.exports = fibonacci;
