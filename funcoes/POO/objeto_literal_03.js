// Problema da utilização de Objetos Literais

const usuario1 = {
  nome: 'Ana',
  email: 'ana@ana.com.br',
  senha: '123456',
  cadastro: new Date()
}

const usuario2 = {
  name: 'Carlos',
  email: 'carlos@abcemail.org.br',
  dataCadastro: new Date()
}

console.log(usuario1, usuario2)