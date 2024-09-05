const produto = {
  // -> Dados:
  nome: 'iPad',
  marca:'Apple',
  anoFabricacao: 2023,
  preco: 7500,
  fragil: true,
  desconto: 0.15,

  // -> Comportamentos:
  precoComDesconto: function() {
    return (1 - this.desconto) * this.preco
  }
} 

const precoFinal = produto.precoComDesconto() // -> Paradigma orientado a objetos

console.log(precoFinal)
console.log(`${produto.nome} tem preço R$ ${precoFinal}`)