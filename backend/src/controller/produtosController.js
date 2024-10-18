import * as db from "../repository/produtosRepository.js";

import { Router } from "express";
const endpoints = Router();

import { autenticar } from "../utils/jwt.js";

//seleciona todos os produtos
endpoints.get("/select/produto", autenticar, async (req, resp) => {
    try {
        let idUsuario = req.user.id;

        let produto = await db.consultarProdutos(idUsuario);

        resp.send(produto);
    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});

endpoints.get("/select/produto/:id", autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let produto = await db.consultarProdutosid(id);

        resp.send(produto[0]);
    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});

//Busca produtos por nome ou pela descrição
endpoints.get("/produto/nome", autenticar, async (req, resp) => {
    try {
        let buscar = req.body;

        console.log(`----> ${buscar}`);

        let produtos = await db.consultarProdutosNome(buscar);

        resp.send(produtos);
    } catch (err) {
        resp.send({
            Error: err.message,
        });
    }
});

endpoints.post("/insert/produto", autenticar, async (req, resp) => {
    try {
        let id = req.user.id;
        let produto = req.body;

        let resposta = await db.inserirProdutos(produto, id);

        resp.send({
            id: resposta,
        });
    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});

endpoints.put("/update/produto/:id", autenticar, async (req, resp) => {
    try {
        let idUsuario = req.params.id;

        let produto = req.body;

        let resposta = await db.alterarProdutos(produto, idUsuario);

        resp.send({
            linhasAfetadas: resposta,
        });
    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});

endpoints.delete("/delete/produto/:id", autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let resposta = await db.deletarProduto(id);

        resp.send({
            linhasAfetadas: resposta,
        });
    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});

export default endpoints;
