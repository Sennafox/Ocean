const express  = require('express')
const app = express()

const URL = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello World')
})

/*
    Lista de Endpoints da aplicação CRUD de mensagens
    CRUD: Create, Read (Single & All), Update and Delete
    - [GET] /mensagens - Retorna lista de mensagens
    - [GET] /mensagens/id - Retorna apenas uma única mensagem pelo id
    - [GET] /mensagens - Cria uma nova mensagem
    - [GET] /mensagens - Atualiza uma mensagem pelo id
    - [GET] /mensagens - Remove uma mensagem pelo id
*/

const mensagens = [
    "Primeira mensagem",
    "Segunda mensagem"
];

//- [GET] /mensagens - Retorna lista de mensagens

app.get('/mensagens', (req, res) =>{
    res.send(mensagens)
})

//- [GET] /mensagens/id - Retorna apenas uma única mensagem pelo id
app.get('/mensagens/:id', (req, res) =>{
    const id = req.params.id-1;
    const mensagem = mensagens[id];
    res.send(mensagem);
})

app.listen(URL , () => {
    console.info(`App rodando na porta:${URL}`)
})



