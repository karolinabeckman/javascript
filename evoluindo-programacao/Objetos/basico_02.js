// const produto = {
//   nome: 'Macboook',
//   preco: 32000,
//   desconto: 0.05,
//   precoComDesconto: function () { // Método
//     return 'Estou em precoComDesconto'
//   }
// }

// console.log(produto.precoComDesconto())

function precoComDesconto(preco, desconto){
  return preco * (1 - desconto)
}

const produto = {
  nome: 'Macboook',
  preco: 32000,
  desconto: 0.05,
  precoComDesconto: function () { // Método
    return this.preco * (1 - this.desconto)
  }
}

console.log(produto.precoComDesconto())
console.log(precoComDesconto(produto.preco, produto.desconto))