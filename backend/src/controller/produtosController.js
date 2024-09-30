import * as db from "../repository/produtosRepository.js";

import { Router } from "express";
const endpoints = Router();


endpoints.delete('/delete/produto/:id' , async (req, resp) => {
    
    try {
        let id = req.params.id

        let resposta = await db.deletarProduto(id)

        resp.send({
            linhasAfetadas: resposta
        })

    } catch (error) {
        resp.send({
            error: error.message
        })
    }
})


endpoints.get('/select/produto', async (req, resp) => {
    try {
        let produto = await db.consultarProdutos();

        resp.send(produto)
    }
    catch (error) {
        resp.send(
            {
                error: error.message
            }
        )
    }

})


endpoints.get('/select/produto/:id', async (req, resp) => {
    try { 
        let id = req.params.id
        let produto = await db.consultarProdutosid(id);

        resp.send(produto[0])
    }
    catch (error) {
        resp.send(
            {
                error: error.message
            }
        )
    }

})

endpoints.post('/insert/produto', async (req, resp) => {
    try {
        let produto = req.body

        let resposta = await db.inserirProdutos(produto)

        resp.send(
            {
                id: resposta
            }
        )

    } catch (error) {
        resp.send({
            error: error.message
        })
    }

})

endpoints.put('/update/produto/:id', async (req, resp) => {

    try {
        let id = req.params.id

        let produto = req.body

        let resposta = await db.alterarProdutos(produto, id)

        resp.send(
            {
                "linhasAfetadas": resposta
            }
        )

    } catch (error) {
        resp.send({
            error: error.message
        })
    }
})



export default endpoints;