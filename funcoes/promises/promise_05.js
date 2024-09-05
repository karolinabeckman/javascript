//fetch

const url_dogs = 'https://dog.ceo/api/breeds/image/random'

fetch(url_dogs) // -> Promise disponível na própria API do JS
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))

const url_biblia = 'https://bible-api.com/john 3:16'

fetch(url_biblia)
.then(resposta => resposta.json())
.then(dados => dados.verses[0])
.then(versiculo => versiculo.text)
.then(console.log)