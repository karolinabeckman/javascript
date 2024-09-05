// (nota) => Conceito
// 10(A+), 9 (A), 8(B+), 7(B)
// 6(C+), 5(C), 4(D+), 3(D)
// 2(E+), 1(E), 0(F), null

// Math.ceil (arredonda pra cima)

function notaParaConceito(nota){
  nota = Math.ceil(nota)
  conceito = null
  switch (nota) {
    case 10:
      conceito = 'A+';
      break
    case 9:
      conceito = 'A'
      break
    case 8:
      conceito = 'B+'
      break
    case 7:
      conceito = 'B'
      break
    case 6:
      conceito = 'C+'
      break
    case 5:
      conceito = 'C'
      break
    case 4:
      conceito = 'D+'
      break
    case 3:
      conceito = 'D'
      break
    case 2:
      conceito = 'E+'
      break
    case 1:
      conceito = 'E'
      break
    case 0:
      conceito = 'F'
      break
    default:
      conceito = 'Valor inválido'
  }
  return conceito;
}


conceito = notaParaConceito(5)
console.log(`O valor do conceito é: ${conceito}`)