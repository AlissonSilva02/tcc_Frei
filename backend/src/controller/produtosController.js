import { consultarProdutos } from "../repository/produtosRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.get('/select/produtos', async (req, resp) => {
    try {
        let produto = await consultarProdutos();

        resp.send(produto)
    }
    catch (error) {
        resp.send(
            {
                "error": error.message
            }
        )
    }

})

export default endpoints;