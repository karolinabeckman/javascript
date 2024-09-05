const numeros = [1,2,3]

// numeros.forEach(function(elemento){
//   console.log(elemento)
// })

function forEach(array, funcao){
  for(let i in array){
    funcao(array[i],i,array)
  }
}

function paraCadaElemento(el, i, arr){
  console.log(el, i, arr)
}

forEach(numeros, paraCadaElemento)