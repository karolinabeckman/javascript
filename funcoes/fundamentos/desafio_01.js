// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// Calcular(3)(7)(fn)

const multiplicar = (a, b) => a * b
const somar = (a, b) => a + b
const subtrair = (a, b) => a - b

const calcular = (a) => (b) => (fn) => fn(a, b)

console.log(calcular(3)(7)(multiplicar))