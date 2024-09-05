const produto = {
  // -> Dados:
  nome: 'iPad',
  marca:'Apple',
  anoFabricacao: 2023,
  preco: 7500,
  fragil: true,
  desconto: 0.15,
} 

//Paradigma procedural (função)
function precoComDesconto(produto) {
  return (1 - produto.desconto) * produto.preco
}

const precoFinal = precoComDesconto(produto)
console.log(precoFinal)