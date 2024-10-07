import con from './connection.js'

export async function inserirUsuario(usuario) {
    let comando =
        `
    INSERT INTO usuario (nome, telefone,senha,email) VALUES
    (?, ?, ?, ?)
    `

    let resposta = await con.query(comando, [usuario.nome, usuario.telefone, usuario.senha, usuario.email]);
    let info = resposta[0]

    return info.insertId;   
}

export async function validarUsuario(usuario) {
    let comando = `
       SELECT   id_autonomo  id,  
                nome,		
                senha
        FROM autonomo
        WHERE nome= ?  and senha = ?
     `;

    let registros = await con.query(comando, [usuario.nome, usuario.senha]);
    return registros[0][0];
}


