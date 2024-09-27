import con from './connection.js'

export async function consultarProdutos() {
    let comando = `
       SELECT   id_produto    id,  
                tipo    nome,		
                img    imagem,
                descricao   ,	
                valor       ,
                disponivel  
	    FROM produtos
    `

    let resposta = await con.query(comando, []);
    let registros= resposta[0]

    return registros;
}