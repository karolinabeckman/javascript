// funcao: 3 param => mediaSimples => console.log
// funcao: 3 param => mediaPonderada => console.log

function mediaSimples(nota1, nota2, nota3){
  calculoMediaSimples = (nota1 + nota2 + nota3)/3
  console.log(calculoMediaSimples)
}

function mediaPonderada(nota1, nota2, nota3){
  calculoMediaPonderada = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3))/(3 * 2)
  console.log(calculoMediaPonderada)
}

mediaSimples(6, 7, 8)
mediaPonderada(6, 7, 8)
