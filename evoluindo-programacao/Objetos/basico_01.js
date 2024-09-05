// const numero = [1, 2, 3]

//Objeto criado de forma literal
const produto = {
  nome: 'Caneta BIC Preta',
  preco: 9.99,
  desconto: 0.2,
  altoCusto: false
}

console.log(produto)

console.log(produto['nome'])
console.log(produto['preco'])
console.log(produto['desconto'])
console.log(produto['altoCusto'])

console.log(produto.nome) // -> Nome é um atributo do objeto produto
console.log(produto.preco)
console.log(produto.desconto)
console.log(produto.altoCusto)

produto['nome'] = 'Caneta BIC Verde'
produto.nome = 'Caneta BIC Vermelha'
console.log(produto.nome)
console.log(typeof produto)