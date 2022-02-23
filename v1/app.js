const express = require("express");
const { randomUUID } = require("crypto");
const fs = require("fs");

const app = express();
app.use(express.json());

let produtos = [];

fs.readFile("./store/produtos.json", "utf-8", (err, data) => {
    if(err)
        console.log(err)
    else
        produtos = JSON.parse(data);
});

app.post("/produtos", (request, response) => {
    const {name, price} = request.body;
    
    const produto = {
        id: randomUUID(),
        name,
        price
    };

    produtos.push(produto);

    productFile();

    return response.json(produto);
});

app.get("/produtos", (requests, response) => {
    return response.json(produtos);
});

app.get("/produtos/:id", (request, response) => {
    const { id } = request.params;

    const produto = produtos.find((item) => item.id === id);

    return response.json(produto);
});

app.put("/produtos/:id", (request, response) => {
    const { id } = request.params;
    const { name, price } = request.body;

    const produto = produtos.findIndex((item) => item.id === id);

    produtos[produto] = {
        ...produtos[produto],
        name,
        price
    };

    productFile();
    
    return response.json({"message": "Produto alterado com sucesso."});
});

app.delete("/produtos/:id", (request, response) => {
    const { id } = request.params;

    const produto = produtos.findIndex((item) => item.id === id);
    produtos.splice(produto, 1);

    productFile();
    return response.json({"message": "Produto removido da lista"});
});

function productFile() {
    fs.writeFile("./store/produtos.json", JSON.stringify(produtos), (err) => {
        if (err)
            console.log(err);
        else
            console.log("Produto inserido");
    })
}

app.listen(4002, () => console.log("Servidor rodando na porta 4002."));