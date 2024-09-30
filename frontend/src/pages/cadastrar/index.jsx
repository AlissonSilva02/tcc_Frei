import { useEffect, useState } from 'react'
import './index.scss'

import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Cadastrar() {
    const [tipo, setTipo] = useState('');
    const [img, setImg] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [estoque, setEstoque] = useState('');
    const [disponivel, setDisponivel] = useState(false);
    const { id } = useParams()



    async function salvar() {
        const paramCorpo = {
            "tipo": tipo,
            "img": img,
            "descricao": descricao,
            "valor": valor,
            "disponivel": disponivel,
            "estoque": estoque
        }
        if (id == undefined) {
            //inserir
            const url = 'http://localhost:5002/insert/produto';
            let resp = await axios.post(url, paramCorpo);
            alert('Produto adicionado Id: ' + resp.data.id);

        } else {
            //atualizar
            const url = `http://localhost:5002/update/produto/${id}`

            await axios.put(url, paramCorpo);

            alert('Produto alterado Id: ' + id);
        }
    }

    async function Buscar() {


        const url = `http://localhost:5002/select/produto/${id}`;
        let resp = await axios.get(url)

        console.log(resp.data)

        setTipo(resp.data.tipo)
        setImg(resp.data.img)
        setDescricao(resp.data.descricao)
        setValor(resp.data.valor)
        setDisponivel(resp.data.disponivel)
        setEstoque(resp.data.estoque)

    }

    useEffect(() => {

        Buscar()
    }, [])




    return (
        <div className='pagina-cadastrar'>
            <h1> CADASTRAR </h1>
            <p>{id}</p>

            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={tipo} onChange={e => setTipo(e.target.value)} />
                </div>
                <div>
                    <label>img:</label>
                    <input type='file' value={img} onChange={e => setImg(e.target.value)} />
                </div>
                <div>
                    <label>descricao:</label>
                    <input type='text' value={descricao} onChange={e => setDescricao(e.target.value)} />
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
                    <label>estoque:</label>
                    <input type='text' checked={estoque} onChange={e => setEstoque(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}