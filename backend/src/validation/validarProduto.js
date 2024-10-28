export default function validarProduto(produto, caminho) {
    
    if (JSON.stringify(produto) === '{}') {
        throw new Error("Nenhum campo foi preenchido");
    }
    if (!produto.tipo) {
        throw new Error("O tipo do produto é obrigatório");
    }
    if (!produto.img && !caminho) {
        throw new Error("A imagem do produto é obrigatório");
    }
    if (!produto.descricao) {
        throw new Error("A Descrição do produto é obrigatório");
    }
    if (!produto.valor) {
        throw new Error("O Valor do produto é obrigatório");
    }
    
    if (typeof produto.disponivel !== "boolean") {
        throw new Error("A disponibilidade do produto é obrigatória e deve ser um valor booleano");
    }
    
    if (!produto.estoque) {
        throw new Error("O estoque do produto é obrigatório");
    }
}
