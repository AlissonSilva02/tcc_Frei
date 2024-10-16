import * as db from "../repository/produtosRepository.js";

import { Router } from "express";
const endpoints = Router();

import { autenticar } from "../utils/jwt.js";

endpoints.delete('/delete/produto/:id' , autenticar, async (req, resp) => {
    
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


endpoints.get('/select/produto', autenticar, async (req, resp) => {
    try {
        let idUsuario=req.user.id
        let produto = await db.consultarProdutos(idUsuario);

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


endpoints.get('/select/produto/:id', autenticar, async (req, resp) => {
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

endpoints.post('/insert/produto', autenticar, async (req, resp) => {
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

endpoints.put('/update/produto/:id', autenticar, async (req, resp) => {

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