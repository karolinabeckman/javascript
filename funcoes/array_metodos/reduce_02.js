const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 4, preco: 649.50 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lápis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const totalizar = (total, valor) => total + valor
const totalProduto = produto => produto.qtde * produto.preco

const precoTotal = carrinho.map(totalProduto).reduce(totalizar) // -> Não precisa passar valor inicial pois o map já transformou em um array de números

console.log(precoTotal)
