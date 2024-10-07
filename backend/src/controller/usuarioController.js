import * as db from "../repository/usuarioRepository.js";
import * as asd from "../repository/produtosRepository.js";


import { Router } from "express";
const endpoints = Router();


endpoints.post('/usuario/', async (req, resp) => {
    try {

        let usuario = req.body
        let id = await db.inserirUsuario(usuario)

        resp.send(
            {
                novoId: id
            }
        )

    } catch (error) {
        resp.send({
            error: error.message
        })
    }

})



endpoints.post('/entrar/', async (req, resp) => {
    try {
        let usuario = req.body
        
        let resposta = await db.validarUsuario(usuario)

    if (resposta === null) {

      error:  resp.send('usuario ou senha incorreto(s)')
        
    }
    else {


        resp.send(dados)

    }

        resp.send(
            {
                novoId: resposta
            }
        )

    } catch (error) {
        resp.send({
            error: error.message
        })
    }




})



endpoints.get("/autonomo", async (req,resp) => {

try {
    const { idUsuario } = req.query 

    let registros = await asd.consultarProdutosid(idUsuario)
        resp.send(registros);
}

catch (error) {
    resp.send({
        error: error.message
    })
}



})

export default endpoints;