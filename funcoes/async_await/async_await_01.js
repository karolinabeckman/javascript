// function esperarPor(tempo) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve()
//     }, tempo)
//   })
// }

const esperarPor = tempo => new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, tempo)
})

// function executar() {
//   esperarPor(2000)
//     .then(() => console.log('Depois de 2s...'))
//     .then(() => esperarPor(3000))
//     .then(() => console.log('Depois de 3s...'))
//     .then(() => esperarPor(1500))
//     .then(() => console.log('Depois de 1.5s...'))
// }

async function executarAsync() {
  await esperarPor(2000)
  console.log('[Async/Await] Depois de 2s...')

  await esperarPor(3000)
  console.log('[Async/Await] Depois de 3s...')

  await esperarPor(1500)
  console.log('[Async/Await] Depois de 1.5s...')
}

function executarPromise() {
  esperarPor(2000)
  .then(() => console.log('[Promise] Depois de 2s...'))
  .then(() => esperarPor(3000))
  .then(() => console.log('[Promise] Depois de 3s...'))
  .then(() => esperarPor(1500))
  .then(() => console.log('[Promise] Depois de 1.5s...'))  
}

executarPromise()
executarAsync()
