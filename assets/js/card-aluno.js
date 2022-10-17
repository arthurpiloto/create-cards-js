// SEMPRE QUE FORMOS CRIAR UM COMPONENTE É OBRIGATÓRIO USAR ESSA ESTRUTURA
class Card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: `open`})
        this.nome = `Nome do Aluno`
        this.bgcolor = `tomato`
        this.turma = `Turma do Aluno`
    }

    // MÉTODO QUE OBSERVA AS TAGS QUE POSSUEM O ATRIBUTO DESEJADO
    static get observedAttributes() {
        return [`nome`, `bgcolor`, `turma`]
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
                margin: 16px;
                width: 400px;
                height: 400px;
                background-color: ${this.bgcolor};
                display: grid;
                grid-template-rows: 20% 1fr 20%;
                place-items: center;
            }
            .card__titulo {
                color: #FFF;
                font-size: 1.5rem;
            }
            .card__imagem {
                width: 60%;
                height: 100%;
                background-image: url(https://static.vecteezy.com/ti/vetor-gratis/t2/1993889-icone-personagem-avatar-mulher-latina-bonita-gr%C3%A1tis-vetor.jpg);
                background-size: cover;
                background-repeat: no-repeat;
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