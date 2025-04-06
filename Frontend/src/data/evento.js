import { v4 as uuidv4 } from "uuid"

const eventos = [
    {
        id: uuidv4(),
        nome: "Festival de Forro",
        local: "Cidade alta",
        data: "2026/02/29",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPXu8wH7ghMzzuYNXIKoX-lf05uQHnUrebQ&s",
        descricao: "Descrição de evento 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    {
        id: uuidv4(),
        nome: "festival de eletronica",
        local: "areia preta",
        data: "04/04/2025",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPXu8wH7ghMzzuYNXIKoX-lf05uQHnUrebQ&s",
        descricao: "Descrição de evento 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    {
        id: uuidv4(),
        nome: "Festival de rap",
        local: "arena das dunas",
        data: "04/02/2025",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPXu8wH7ghMzzuYNXIKoX-lf05uQHnUrebQ&s",
        descricao: "Descrição de evento 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

function listarEventos() {
    return eventos
}

function buscarEventoID() {
    return eventos.find(eventos => eventos.id === id);
}

function criarEventos(evento) {
    evento.id = uuidv4();
    evento.imagem = evento.imagem || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPXu8wH7ghMzzuYNXIKoX-lf05uQHnUrebQ&s"
    eventos.push(evento)
}

function editarEventos(id, eventoAtualizado) {
    const i = evento.findIndex(evento => evento.id === id);
    if(i!== -1){
        eventos[i] = {...eventos[i], ...eventoAtualizado}
        eventos[i].imagem = eventoAtualizado.imagem || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPXu8wH7ghMzzuYNXIKoX-lf05uQHnUrebQ&s"
    }
}

function excluirEvento(id){
    const i = evento.findIndex(evento => evento.id === id);
    if(i!== -1){
        eventos.slice(i, 1)
    }
}





export default {listarEventos, buscarEventoID, criarEventos, editarEventos, excluirEvento}