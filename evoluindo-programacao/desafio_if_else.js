// Segunda até Sexta => 8 horas
// Sábado => 4 horas
// Domingo => 0 horas


const diaDaSemana = 'Sábado'
let cargaHoraria
if(diaDaSemana === 'Sábado'){
  cargaHoraria = 4
} else if(diaDaSemana === 'Domingo'){
  cargaHoraria = 0
} else {
  cargaHoraria= 8
}

console.log(`A carga horária do dia da semana informado é de ${cargaHoraria} horas`)