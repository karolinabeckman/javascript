nota = 4.8
let conceito

if(nota <= 10 && nota >= 9){
  conceito = 'A'
}
if(nota < 9 && nota >= 7 ){
  conceito = 'B'
}
if(nota < 7 && nota >= 5 ){
  conceito = 'C'
}
if(nota < 5 && nota >= 4.5 ){
  conceito = 'D'
}
if(nota < 4.5 ){
  conceito = 'F'
}

console.log(`O conceito do aluno é: ${conceito}`)