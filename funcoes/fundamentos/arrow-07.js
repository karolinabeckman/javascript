// somar(3)(4)(5)

// const somar = a => {
//   return b => {
//     return c => {
//       return a + b + c
//     }
//   }
// }

const somar = a => b => c => a + b + c

const subtrair = (a, b) => a - b
const bomDia = _ => 'Bom Dia!' // com parâmetro que será ignorado
// const bomDia = () => 'Bom Dia!' // Forma ideal

console.log(somar(3)(4)(5))
console.log(subtrair(7, 5))
console.log(bomDia())