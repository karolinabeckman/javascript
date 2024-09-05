// const data = Object.freeze({ //-> Forma de tornar o objeto inalterável
//   dia: 7, 
//   mes: 11, 
//   ano: 2026
// })

const data = {
  dia: 7, 
  mes: 11, 
  ano: 2026
}

data.dia = 9
data.mes = 12
data.noFuturo = true

console.log(data.dia)
console.log(data.mes)
console.log(data.ano)

console.log(`${data.dia}/${data.mes}/${data.ano}`)
console.log(data)