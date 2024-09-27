import { alterarProdutos, consultarProdutos, deletarProduto, inserirProdutos } from "../repository/produtosRepository.js";

import { Router } from "express";
const endpoints = Router();


endpoints.delete('/delete/produto/:id' , async (req, resp) => {
    
    try {
        let id = req.params.id

        let resposta = await deletarProduto(id)

        resp.send({
            linhasAfetadas: resposta
        })

    } catch (error) {
        resp.send({
            error: error.message
        })
    }
})


endpoints.get('/select/produtos', async (req, resp) => {
    try {
        let produto = await consultarProdutos();

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

endpoints.post('/insert/produto', async (req, resp) => {
    try {
        let produto = req.body

        let resposta = await inserirProdutos(produto)

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

endpoints.put('/update/produto/:id'), async (req, resp) => {

    try {
        let id = req.params.id

        let produto = req.body

        let resposta = await alterarProdutos(produto, id)

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
}



export default endpoints;