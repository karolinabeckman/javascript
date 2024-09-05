// MOLDE!!! Função construtora!
function Data(dia, mes, ano) {
  // atributos públicos
  this.dia = dia
  this.mes = mes
  this.ano = ano
}

const d1 = new Data(1, 1, 2023) // obj ou instância #1
const d2 = new Data(1, 2, 2024) // obj ou instância #2

console.log(typeof d1, d1)
console.log(typeof d2, d2)

console.log(`${d1.dia}/${d1.mes}/${d1.ano}`)

console.log(typeof Data)