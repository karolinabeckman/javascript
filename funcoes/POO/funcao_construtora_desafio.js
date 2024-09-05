// Função construtora -> Produto
// nome, preco, desconto
// precoFinal (calcular precoComDesconto)

// Criar duas instâncias de produto

function Produto(nome, preco, desconto = 0){
  // dados
  this.nome = nome
  this.preco = preco
  this.desconto = desconto

  // método
  this.precoFinal = function() {
    return ((1 - this.desconto) * this.preco).toFixed(2)
  }
}

produto1 = new Produto('Caneta', 5.99, 0.5)
produto2 = new Produto('Computador', 9999, 0.15)

console.log(`O preco final do produto ${produto1.nome} é de R$ ${produto1.precoFinal()}`)
console.log(`O preco final do produto ${produto2.nome} é de R$ ${produto2.precoFinal()}`)