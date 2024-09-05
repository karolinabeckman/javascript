const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

const promessa = new Promise(resolve => {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promessa
  .then(primeiroElemento) // -> Pega o primeiro elemento do array
  .then(primeiroElemento) // -> Pega a primeira letra do primeiro elemento do array
  .then(letraMinuscula) // -> Tranforma a primeira letra em letra minúscula
  .then(console.log) // Exibe no console