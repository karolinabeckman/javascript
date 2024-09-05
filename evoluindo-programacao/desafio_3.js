const nota1 = 7.9;
const nota2 = 2.4;
const nota3 = 6.5;

// Descartar a menor nota e fazer a média simples de duas notas
function media(x, y) {
	return (x + y) / 2;
}

function mediaNotas(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
    return media(n2, n3);
  } else if (n2 <= n1 && n2 <= n3) {
    return media(n1, n3);
  } else {
    return media(n1, n2);
  }
}

function mediaParaStatus(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media < 7 && media >= 4) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

function notasParaStatus(n1, n2, n3) {
	let media = mediaNotasMaiores(n1, n2, n3);
  return mediaParaStatus(media)
}

// console.log(calculaMediaMaioresNotas(nota1, nota2, nota3))


console.log(notasParaStatus(nota1,nota2,nota3))

//aprovado -> >= 7
//Recuperação -> < 7 e >= 4
//Reprovado -> < 4

//Calculando menor valor
function menorValor(n1,n2) {
  return n1 <= n2 ? n1 : n2
}

function mediaNotasMaiores(n1,n2,n3){
  const menorNota = menorValor(n1, menorValor(n2,n3))
  if (menorNota === n1) {
    return media(n2, n3);
  } else if (menorNota === n2) {
    return media(n1, n3);
  } else {
    return media(n1, n2);
  }
}

