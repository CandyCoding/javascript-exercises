const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
return array.reduce((acummulator,numero)=> acummulator + numero, 0)
};

const multiply = function(array) {
return array.reduce((acummulator,numero)=> acummulator * numero ||0 +1)
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(number) {
	let resultado = 1 ;
  for (let i = 2; i<= number; i++){
    resultado = resultado * i
  }
  return resultado;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
