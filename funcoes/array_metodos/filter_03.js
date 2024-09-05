Array.prototype.meuFilter = function (fn) {
  // fn -> TRUE ou FALSE
  const novoArray = []
  for (let i = 0; i < this.length; i++){
    // console.log(this[i])
    const elemento = this[i]
    if(fn(elemento)){
      novoArray.push(elemento)
    }
  }
  return novoArray
}

const numeros = [1, 2, 3, 4, 5]
const maiorOuIgualA4 = numero => numero >= 4

console.log(numeros.filter(maiorOuIgualA4))
console.log(numeros.meuFilter(maiorOuIgualA4))