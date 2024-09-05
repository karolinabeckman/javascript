class Data {
  #dia = 1
  #mes = 1
  #ano = 1970

  // Getters/Setters

  // Getters:
  get dia() { return this.#dia }
  
  get mes() { return this.#mes }
  
  get ano(){ return this.#ano }
  
  //Setters
  set dia(novoDia) {
    if( novoDia >=1 && novoDia <= 31) {
      this.#dia = novoDia
    }
  }
  
  set mes(novoMes) {
    if(novoMes >= 1 && novoMes <= 12) {
      this.#mes = novoMes
    }
  }
  
  set ano(novoAno) {
    if(novoAno >= 1970 && novoAno <=2900){
      this.#ano = novoAno
    }
  }

  exibir() {
    return `${this.#dia}/${this.#mes}/${this.#ano}`
  }
}

const d1 = new Data()
d1.dia = 130
d1.mes = 130
d1.ano = "ano que o Brasil ganhou a copa"
console.log(d1.dia)
console.log(d1.mes)
console.log(d1.exibir(), d1)
