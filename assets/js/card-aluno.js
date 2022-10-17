// SEMPRE QUE FORMOS CRIAR UM COMPONENTE É OBRIGATÓRIO USAR ESSA ESTRUTURA
class Card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: `open`})
    }

    // SEMELHANTE A CLASSE CONSTRUTORA DO KOTLIN (onCreate) - SEMPRE QUE A CLASSE Card FOR CHAMADA A PRIMEIRA COISA PUXADA PARA EXECUÇÃO DEPOIS DO constructor() SERÁ ELA
    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    // CRIA UM "style"
    styles() {
        const style = document.createElement(`style`)
        style.textContent = `
            .card {
                margin: 0;
                width: 400px;
                height: 400px;
                background-color: tomato;
            }
        `
        return style
    }

    // CRIA O COMPONENTE card
    component() {
        const card = document.createElement(`div`)
        card.classList.add(`card`)
        card.innerHTML = `
            <div>Arthur</div>
            <div></div>
            <div>DS2M</div>
        `
        return card
    }
}

// DEFINE UMA NOVA TAG NO HTML. 1º PARÂMETRO = NOME DA TAG E 2º PARÂMETRO = CLASSE CRIADORA DE COMPONENTE
customElements.define(`card-aluno`, Card)