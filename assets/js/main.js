`use strict`
import './card-aluno.js'

const getData = async () => {
    const url = `https://testeleonid.herokuapp.com/alunos`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const studentsList = await getData()
const createCard = async () => {
    const container = document.getElementById(`container`)

    studentsList.forEach(element => {
        const card = document.createElement(`card-aluno`)
        card.nome = element.nome
        card.foto = element.foto
        card.turma = element.turma
        card.status = element.status

        if (card.status.toLowerCase() == `aprovado`) {
            card.bgcolor = `#146551`
        } else if (card.status.toLowerCase() == `desistente`) {
            card.bgcolor = `#FFA868`
        } else if (card.status.toLowerCase() == `reprovado`) {
            card.bgcolor = `#E51C00`
        }

        container.appendChild(card)
    });
}
createCard()