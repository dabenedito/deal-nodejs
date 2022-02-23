
import { Router } from 'express';
const { randomUUID } = require("crypto");
const fs = require("fs");

const route = new Router();
let produtos = [];

fs.readFile("./store/produtos.json", "utf-8", (err, data) => {
    if(err)
        console.log(err)
    else
        produtos = JSON.parse(data);
});

route.post("/produtos", (request, response) => {
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

route.get("/produtos", (requests, response) => {
    return response.json(produtos);
});

route.get("/produtos/:id", (request, response) => {
    const { id } = request.params;

    const produto = produtos.find((item) => item.id === id);

    return response.json(produto);
});

route.put("/produtos/:id", (request, response) => {
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

route.delete("/produtos/:id", (request, response) => {
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

export default route;