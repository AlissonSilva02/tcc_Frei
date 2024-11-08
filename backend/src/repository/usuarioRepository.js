import con from './connection.js'

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


export async function validarUsuarioemail(usuario) {
    let comando = `
       SELECT   id_autonomo  id,  
                nome,	
                email
        FROM autonomo
        WHERE nome= ? and email = ?
     `;

    let registros = await con.query(comando, [usuario.nome, usuario.email]);

    return registros[0][0];


}


