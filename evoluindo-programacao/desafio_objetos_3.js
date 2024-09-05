function Aluno(nome, disciplinas){
  this.nome = nome,
  this.disciplinas = disciplinas
  
  function mediaDeUmArray(numeros){
    if (!Array.isArray(numeros)) return null
    
    let total = 0 
    for(let numero of numeros){
      total += numero
    }
    return total / numeros.length
  }

  this.media = function (nomeDaDisciplina){
    for (let disciplina of this.disciplinas){
      if(disciplina.nome.toLowerCase() === nomeDaDisciplina.toLowerCase()){
        return mediaDeUmArray(disciplina.notas)
      }
    }
    return null
  },

  this.mediaGlobal = function () {
    const medias = []
    for(let disciplina of this.disciplinas){
      medias.push(mediaDeUmArray(disciplina.notas))
    }
    return mediaDeUmArray(medias)
  }
}

const aluno1 = new Aluno('Pedro', [
  {
    nome: 'Orientação a objetos',
    notas:[ 8, 9, 10]
  },
  {
    nome: 'Funções',
    notas:[ 5, 5, 0]
  }
])

console.log(aluno1.nome)
console.log(aluno1.media('orientação a objetos'))
console.log(aluno1.media('funções'))
console.log(aluno1.mediaGlobal())