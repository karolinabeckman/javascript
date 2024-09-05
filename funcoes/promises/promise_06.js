function promessaComPossivelErro(chanceErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro) {
      reject('Ocorreu um erro!')
    } else {
      resolve('Tudo certo')
    }
  })
}

promessaComPossivelErro(0.5)
  .then(v => console.log(v))
  .catch(erro => console.log(erro)) // -> Isso serve para fazer o tratamento da promise

promessaComPossivelErro(0.5)
  .then(v => v + "!!!!")
  .then(v => console.log(v))
  .catch(erro => console.log(erro)) // -> Tratar todos os erros de forma global
  .finally(() => console.log('Fim')) // Executa independente se der erro ou não