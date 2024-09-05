const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt')

// fs.readFile(caminho, function(erro, conteudo){
//   if(erro) return
//   // console.log(erro)
//   console.log(conteudo.toString())
// })

function lerArquivo(erro, conteudo) {
  if(erro) return
  console.log(conteudo.toString())
}

// fs.readFile(caminho, lerArquivo)
// console.log('Fim #01!!!')

const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim #02!!!')
// console.log(__dirname)