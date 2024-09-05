const executar = (fn) => fn()

const bomDia = () => 'Bom Dia!'
const boaTarde = () => 'Boa Tarde!'

const resultado = executar(bomDia)

console.log(resultado)