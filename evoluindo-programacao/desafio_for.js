// 10, 8, 6, 4, 2, 0

// for (i=10; i>=0; i-=2){
//   console.log(i)
// }

conteudo = ''

for (let linha = 1; linha < 4; linha++){
  for(let coluna = 1; coluna < 4; coluna++){
    conteudo += `[${linha}-${coluna}] `
  }
  conteudo += `\n`
}

console.log(conteudo)

for(let numero of numeros ){
  console.log(numero)
}

for(let numero in numeros ){
  console.log(numero)
}