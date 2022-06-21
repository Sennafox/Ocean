const express  = require('express')
const bodyParser  = require('body-parser')
const app = express()

const URL = 3000;

app.use(bodyParser.json())

app.get('/hello', (req, res) => {
    res.send('Hello World')
})

/*
    Lista de Endpoints da aplicação CRUD de mensagens
    CRUD: Create, Read (Single & All), Update and Delete
    - [GET] /mensagens - Retorna lista de mensagens
    - [GET] /mensagens/id - Retorna apenas uma única mensagem pelo id
    - [POST] /mensagens - Cria uma nova mensagem
    - [PUT] /mensagens - Atualiza uma mensagem pelo id
    - [DELETE] /mensagens - Remove uma mensagem pelo id
*/

const mensagens = [
    "Primeira mensagem",
    "Segunda mensagem"
];

//- [GET] /mensagens - Retorna lista de mensagens

app.get('/mensagens', (req, res) =>{
    res.send(mensagens.filter(Boolean))
})

//- [GET] /mensagens/id - Retorna apenas uma única mensagem pelo id
app.get('/mensagens/:id', (req, res) =>{
    const id = req.params.id-1;
    const mensagem = mensagens[id];
    res.send(mensagem);
})

//- [POST] /mensagens - Cria uma nova mensagem
app.post('/mensagens', (req, res) =>{
    const mensagem = req.body.mensagem;

    mensagens.push(mensagem);

    res.send(`Nova mensagem criada: '${mensagem}'`);
})

app.put('/mensagens/:id', (req, res) =>{

    const id = req.params.id - 1;

    const mensagem = req.body.mensagem;
    
    mensagens[id] = mensagem;

    res.send(`Mensagem ${id+1} atualizada com sucesso: '${mensagem}'`)

})
app.delete('/mensagens/:id', (req, res) =>{

    const id = req.params.id - 1;
    
    delete mensagens[id];

    res.send(`Mensagem ${id+1} removida com sucesso!`)

})

app.listen(URL , () => {
    console.info(`App rodando na porta:${URL}`)
})



