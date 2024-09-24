import { criarErro } from "../utils/error.js";

import salvarTesteService from "../service/salvarTesteService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/teste', async (req, resp) => {
    try {

        let testeobj = req.body;

        let id = await salvarTesteService(testeobj);

        resp.send({
            id: id
        })
    }

    catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err));
    }

})

export default endpoints;