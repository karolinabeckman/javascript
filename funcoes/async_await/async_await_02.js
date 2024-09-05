// function obterVersiculo(livro, cap, versiculo) {
//   const url = `https://bible-api.com/${livro} ${cap}:${versiculo}`
//   return fetch(url)
//     .then(resposta => resposta.json())
//     .then(dados => dados.verses[0])
//     .then(versiculo => versiculo.text)
// }

// obterVersiculo('John', 3, 16)
//   .then(texto => console.log(texto))
// obterVersiculo('luke', 1, 1)
//   .then(texto => console.log(texto)) 

// Uma função async sempre vai retornar uma PROMISE!!!
async function obterVersiculo(livro, cap, versiculo) {
  const url = `https://bible-api.com/${livro} ${cap}:${versiculo}`
  const resposta = await fetch(url)
  const dados = await resposta.json()
  return dados.verses[0].text
}

async function executar() {
  const textoJohn = await obterVersiculo('John', 3, 16)
  const textoLuke = await obterVersiculo('luke', 1, 1)
  
  console.log(textoJohn)
  console.log(textoLuke)
}

executar()


