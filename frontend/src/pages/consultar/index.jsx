import { useState } from 'react'
import './index.scss'

import axios from 'axios'

export default function Consultar() {
    const [produtos, setProdutos] = useState([]);
    const [id, setId] = useState()

    async function buscar() {
        const url = 'http://localhost:5002/select/produtos';
        let resp = await axios.get(url);
        setProdutos(resp.data);
    }


    async function deletar(id) {
        const url = 'http://localhost:5002/delete/produto/:id'
        await axios.delete(url);
    }

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>
            
            <div>
                <label>Insira um id</label>
                <input type="text" value={id} onChange={e => setId(e.target.value)}/>
                <button onClick={deletar}>remover</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>tipo</th>
                        <th>Imagem</th>
                        <th>descricao</th>
                        <th>Valor</th>
                        <th>Estoque</th>
                        <th>Disponivel</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.tipo}</td>
                            <td>{item.img}</td>
                            <td>{item.descricao}</td>
                            <td>{item.valor}</td>
                            <td>{item.estoque}</td>
                            {/* <td>{new Date(item.vinganca).toLocaleDateString()}</td> */}
                            <td>{item.disponivel ? 'Sim' : 'Não'}</td>
                        </tr>
                    )}
                </tbody>


            </table>

           
        </div>
    )
}