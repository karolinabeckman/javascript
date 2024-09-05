// Objeto: Aluno
// Atributos: nome, disciplinas (nome, 3 notas)
// Método: media(nomeDaDisciplina), mediaGlobal

// Resolução Karol
const aluno = {
  nome: 'Karolina Beckman',
  disciplinas: [
    { nome: 'Português', n1: 7.0, n2: 8.4, n3: 5.6 },
    { nome: 'Matemática', n1: 10.0, n2: 9.9, n3: 9.7 },
    { nome: 'Física', n1: 6.3, n2: 7.2, n3: 1.4 }
  ],
  media: function (nomeDaDisciplina){
    for(let disciplina of this.disciplinas){
      if(nomeDaDisciplina === disciplina.nome){
        return (disciplina.n1 + disciplina.n2 + disciplina.n3) / this.disciplinas.length
      }
    }
  },
  mediaGlobal: function (){
    let somaDasMedias = 0
    for(disciplina of this.disciplinas){
      somaDasMedias = somaDasMedias + this.media(disciplina.nome)
    }

    mediaGlobal = somaDasMedias / this.disciplinas.length
    return mediaGlobal

  }
}

console.log(aluno.mediaGlobal().toFixed(2))
console.log(aluno.media('Português'))
