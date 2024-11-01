import * as db from "../repository/produtosRepository.js";

import { autenticar } from "../utils/jwt.js";

import multer from 'multer'

import { Router } from "express";

const endpoints = Router();

//seleciona todos os produtos
endpoints.get("/select/produto", async (req, resp) => {
    try {
        //Recebe o id pelo Token
        let total = req.query.total
    
        let produto = await db.consultarProdutos(total);

        resp.send(produto);
    } catch (error) {
        resp.send({
            Error: error.message
        });
    }
});

//Seleciona um id especifico
endpoints.get("/select/produto/:id", async (req, resp) => {
    try {
        let id = req.params.id;
        let produto = await db.consultarProdutos(id);

        resp.send(produto[0]);
    } catch (error) {
        resp.send({
            Error: error.message
        });
    }
});

endpoints.get("/select/todosproduto", async (req, resp) => {
    try {
        let total= req.body
        let produto = await db.consultarTodos(total);

        resp.send(produto[0]);
    } catch (error) {
        resp.send({
            Error: error.message
        });
    }
});

//Busca produtos por nome ou pela descrição
endpoints.post("/produto/nome", async (req, resp) => {
    try {
        let buscar = req.body;

        let produtos = await db.consultarProdutosNome(buscar)
        
        resp.send(produtos);
    } catch (err) {
        resp.send({
            Error: err.message,
        });
    }
});


//insere um novo produto
let uploadImagemProduto = multer({dest: './storage/produtos'})
endpoints.post("/insert/produto", autenticar, uploadImagemProduto.single('produto'), async (req, resp) => {
    try {
        let id = req.user.id;
        
        let produto = null
        let caminhoImagem = null

        if (!req.body.info){
            //Usar o body ainda funciona
            produto = req.body
            caminhoImagem = produto.img 
        } else {
            //verifica se algum arquivo foi enviado
            produto = JSON.parse(req.body.info)
            if (req.file && req.file.path) {
                caminhoImagem = req.file.path;
            } else {
                console.log('Nenhum arquivo foi enviado.');
                caminhoImagem = produto.img
            }
        }

        let resposta = await db.inserirProdutos(produto, caminhoImagem, id)

        resp.send({
            id: resposta
        });
    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});

//inserindo uma imagem
let atualizarImagemProduto = multer({dest: './storage/produtos'})
endpoints.put("/update/imagem/:id", autenticar, atualizarImagemProduto.single('produto'), async (req, resp) => {
        try {
            let id = req.params.id;
            let caminhoImagem = req.file.path;
            let extensao = req.file.mimetype
            let nome = req.file.originalname

            //processamento (service)
            let linhasAfetadas = await db.alterarImagem(id, caminhoImagem)

            //saida
            resp.send({
                linhasAfetadas: linhasAfetadas,
                Nome: nome,
                Extensao: extensao
            });
        } catch (error) {
            resp.send({
                Error: error.message
            })
        }
    }
)

//Altera um produto
endpoints.put("/update/produto/:id", autenticar, async (req, resp) => {
    try {
        let idProduto = req.params.id;
        let produto = req.body;

        let resposta = await db.alterarProdutos(produto, idProduto)

        resp.send({
            linhasAfetadas: resposta
        });
    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});

//Remove um produto
endpoints.delete("/delete/produto/:id", autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let resposta = await removerProdutoService(id)

        resp.send({
            linhasAfetadas: resposta,
        });
    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});




endpoints.post("/produto/preco/", async (req, resp) => {
    try {
        const { precoMax } = req.body; 

        // Verifica se o preço máximo foi fornecido
        if (!precoMax) {
            return resp.status(400).send({
                Error: "O parâmetro precoMax é obrigatório."
            });
        }

        // Chama o método no repositório que busca produtos com preço até o limite
        let produtos = await consultarProdutospreco(precoMax);
        
        resp.send(produtos);
    } catch (error) {
        resp.send({
            Error: error.message
        });
    }
});



export default endpoints;
