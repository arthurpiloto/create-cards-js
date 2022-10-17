// SEMPRE QUE FORMOS CRIAR UM COMPONENTE É OBRIGATÓRIO USAR ESSA ESTRUTURA
class Card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: `open`})
        this.nome = `Nome do Aluno`
        this.bgcolor = `tomato`
        this.turma = `Turma do Aluno`
        this.foto = `Foto do Aluno`
    }

    // MÉTODO QUE OBSERVA AS TAGS QUE POSSUEM O ATRIBUTO DESEJADO
    static get observedAttributes() {
        return [`nome`, `bgcolor`, `turma`, `foto`]
    }

    // OBSERVA QUANDO O ATRIBUTO É MUDADO E ATUALIZA-O
    attributeChangedCallback(nameAttr, oldValue, newValue) {
        // SUBSTITUI TODOS OS IF`s
        this[nameAttr] = newValue

        // if (nameAttr == `nome`){
        //     this.nome = newValue 
        // }
        // if (nameAttr == `bgcolor`) {
        //     this.bgcolor = newValue
        // }
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
                padding: 8px;
                width: 400px;
                height: 600px;
                background-color: ${this.bgcolor};
                display: grid;
                grid-template-rows: 20% 60% 20%;
                place-items: center;
            }
            .card__titulo {
                color: #FFF;
                font-size: 1.5rem;
            }
            .card__imagem {
                width: 90%;
                height: 100%;
                background-image: url(${this.foto});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
            .card__turma {
                color: #FFF;
            }
        `
        return style
    }

    // CRIA O COMPONENTE card
    component() {
        const card = document.createElement(`div`)
        card.classList.add(`card`)
        // PADRÃO DE NOMENCLATURA CSS - BEM
        card.innerHTML = `
            <div class="card__titulo">${this.nome}</div>
            <div class="card__imagem"></div>
            <div class="card__turma">${this.turma}</div>
        `
        return card
    }
}

// DEFINE UMA NOVA TAG NO HTML. 1º PARÂMETRO = NOME DA TAG E 2º PARÂMETRO = CLASSE CRIADORA DE COMPONENTE
customElements.define(`card-aluno`, Card)