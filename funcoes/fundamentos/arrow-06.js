// somar(3)(4)(5)

// const somar = (a) => {
//   return (b) => {
//     return (c) => a + b + c // Essa função: (c) => a + b + c - tem retorno implícito
//   }
// }

// const somar = (a) => {
//   return (b) => (c) => a + b + c 
// }

const somar = (a) => (b) => (c) => a + b + c 

somar = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(somar(3)(4)(5))