const data = {
  dia: 7, 
  mes: 11, 
  ano: 2026,
  formatar: function () {
    console.log(`${this.dia}/${this.mes}/${this.ano}`)
  }
}

data.formatar()