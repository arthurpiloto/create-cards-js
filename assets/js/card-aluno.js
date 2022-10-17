// SEMPRE QUE FORMOS CRIAR UM COMPONENTE É OBRIGATÓRIO USAR ESSA ESTRUTURA
class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: `open`})
        
        // A PARTIR DAQUI O CÓDIGO DESEJADO PELO DEV É INSERIDO
        const titulo = document.createElement(`h1`)
        titulo.textContent = `Arthur Piloto`

        this.shadow.appendChild(titulo)
    }
}

// DEFINE UMA NOVA TAG NO HTML. 1º PARÂMETRO = NOME DA TAG E 2º PARÂMETRO = CLASSE CRIADORA DE COMPONENTE
customElements.define(`card-aluno`, card)