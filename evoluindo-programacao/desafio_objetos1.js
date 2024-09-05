// Objeto: Aluno
// Atributos: nome, disciplinas (nome, 3 notas)
// Método: média(nomeDaDisciplina), mediaGlobal

function mediaDeUmArray(numeros){
  if (!Array.isArray(numeros)) return null
  
  let total = 0 
  for(let numero of numeros){
    total += numero
  }
  return total / numeros.length
}

aluno = {
  nome: 'Karolina',
  disciplinas: [
    {
      nome: 'Orientação a objetos',
      notas:[ 8, 9, 10]
    },
    {
      nome: 'Funções',
      notas:[ 5, 5, 0]
    }
  ],

  media: function (nomeDaDisciplina){
    for (let disciplina of this.disciplinas){
      if(disciplina.nome.toLowerCase() === nomeDaDisciplina.toLowerCase()){
        return mediaDeUmArray(disciplina.notas)
      }
    }
    return null
  },

  mediaGlobal: function () {
    const medias = []
    for(let disciplina of this.disciplinas){
      medias.push(mediaDeUmArray(disciplina.notas))
    }
    return mediaDeUmArray(medias)
  }
}

console.log(aluno.nome)
console.log(aluno.media('orientação a objetos').toFixed(2))
console.log(aluno.media('funções').toFixed(2))