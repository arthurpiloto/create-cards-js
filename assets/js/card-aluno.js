// SEMPRE QUE FORMOS CRIAR UM COMPONENTE É OBRIGATÓRIO USAR ESSA ESTRUTURA
class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: `open`})
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
    }

    component() {
        const card = document.createElement(`div`)
        card.innerHTML = `
            <div>Arthur</div>
            <div></div>
            <div>DS2M</div>
        `
        return card
    }
}

// DEFINE UMA NOVA TAG NO HTML. 1º PARÂMETRO = NOME DA TAG E 2º PARÂMETRO = CLASSE CRIADORA DE COMPONENTE
customElements.define(`card-aluno`, card)