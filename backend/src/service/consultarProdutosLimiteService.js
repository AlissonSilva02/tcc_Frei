import { consultarProdutosLimite } from "../repository/produtosRepository.js";

export default async function consultarProdutosLimiteService(limite) {
    
    let produto = await consultarProdutosLimite(limite)

    if  (produto == '') {
        throw new Error("Produto não encontrado");
    }

    return produto
}