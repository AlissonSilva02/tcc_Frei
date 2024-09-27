import { useState } from 'react'
import './index.scss'

import axios from 'axios'

export default function Cadastrar() {
    const [tipo, setTipo] = useState('');
    const [img, setImg] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [estoque, setEstoque] = useState('');
    const [disponivel, setDisponivel] = useState(false);


    async function salvar() {
        const paramCorpo = {
            "tipo": tipo,
            "img": img,
            "descricao": descricao,
            "valor": valor,
            "disponivel": disponivel,
            "estoque": estoque
        }

        const url = 'http://localhost:5002/insert/produto';
        let resp = await axios.post(url, paramCorpo);

        alert('Produto adicionado Id: ' + resp.data.id);
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> CADASTRAR </h1>


            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={tipo} onChange={e => setTipo(e.target.value)} />
                </div>
                <div>
                    <label>img:</label>
                    <input type='text' value={img} onChange={e => setImg(e.target.value)}/>
                </div>
                <div>
                    <label>descricao:</label>
                     <input  type='text' value={descricao} onChange={e => setDescricao(e.target.value)} /> 
                </div>
                <div>
                    <label>valor</label>
                    <input type='text' value={valor} onChange={e => setValor(e.target.value)} />
                </div>
                <div>
                    <label>disponivel:</label>
                    <input type='checkbox' checked={disponivel} onChange={e => setDisponivel(e.target.checked)} />
                </div>
                <div>
                    <label>disponivel:</label>
                    <input type='text' checked={estoque} onChange={e => setEstoque(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}