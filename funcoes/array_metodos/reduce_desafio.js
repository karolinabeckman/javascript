const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false },
  { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
  { nome: 'Impressora', qtde: 5, preco: 1000, fragil: true },
  { nome: 'iPad', qtde: 2, preco: 7500, fragil: true },
  { nome: 'Computador', qtde: 2, preco: 5000, fragil: true },
  { nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false },

]

const ehFragil = produto => produto.fragil // === true // -> Não precisa colocar o === true pois o item já retorna true ou false

const produtosFrageis = carrinho.filter(ehFragil)

// console.log(produtosFrageis)

const totalProduto = produto => produto.qtde * produto.preco
const totalizar = (total, valor) => total + valor

const totalProdutosFrageis = produtosFrageis.map(totalProduto).reduce(totalizar)

// console.log(totalProdutosFrageis)

const mediaProdutosFrageis = totalProdutosFrageis / produtosFrageis.length

console.log(`A média de valor dos produtos fragéis é de: R$${mediaProdutosFrageis}`)

if(mediaProdutosFrageis > 5000){
  console.log(`Você precisa contratar o seguro premium`)
} else {
  console.log(`Você precisa contratar o seguro silver`)  
}




// 5000 + 15000 + 10000 = 30000 / 3 = 10.000

// filter, map, reduce

// 1. fragil: true
// 2. qtde * preco -> total
// 3. media totais

// acima de 5000: seguro premium
// abaixo de 5000: seguro silver 