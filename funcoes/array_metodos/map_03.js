const frases = ['Cuidado', 'Olha o carro']

const gritar = texto => texto.toUpperCase()
const enfatizar = texto => texto + '!!!'
const exagerar = texto => texto.split('').join(' ')

// A ordem gera resultados diferentes (ex: exagerar antes de gritar)
const final = frases.map(gritar).map(enfatizar).map(exagerar)

console.log(final)
