import { consultarProdutosid } from "../repository/produtosRepository.js";

export default async function consultarTodosprodutos(total) {
    
     
    let produto = await consultarTodos(total)

    if  (produto == '') {

        throw new Error("Produto não encontrado");
    }

    return produto
}