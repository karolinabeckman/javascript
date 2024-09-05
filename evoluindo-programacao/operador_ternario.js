// Aluno faltou 18 vezes em um total de 223 aulas no ano
const totalAulas = 223
const faltas = 18

//Frequência
const frequencia = Math.round((1 - faltas / totalAulas) * 100)
const temFrequenciaSuficiente = frequencia >= 80 // Frequência de 80%

//Notas: 5.8, 8.1, 6.9
const nota1 = 5.8
const nota2 = 8.1
const nota3 = 6.9

//Média
const media = (nota1 + nota2 + nota3) / 3
const temMediaSuficiente = Math.round(media) >= 7 // Média maior ou igual a 7

//Exibindo as informações
console.log('Frequência:', frequencia + '%')
console.log('Média:', media.toFixed(2))

//O aluno foi aprovado?
const aprovado = temFrequenciaSuficiente && temMediaSuficiente
console.log('Resultado:', aprovado ? 'Aprovado' : 'Reprovado')