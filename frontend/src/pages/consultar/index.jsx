import { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

import axios from "axios";

export default function Consultar() {
    const [id, setId] = useState(""); // Inicialize com uma string vazia
    const [produtos, setProdutos] = useState([]);

    async function buscar() {
        const url = "http://localhost:5002/select/produto";
        let resp = await axios.get(url);
        setProdutos(resp.data);
    }

    async function deletar() {
        // Remova o parâmetro id
        const url = `http://localhost:5002/delete/produto/${id}`; // Substitua o parâmetro id
        await axios.delete(url);

        //se erro
        alert('Erro no banco de dados')
        buscar();
    }

    useEffect(() => {
         buscar();
    }, []);

    return (
        <div className="pagina-consultar">

            <button onClick={buscar}>Consultar</button>
            <h1> CONSULTAR </h1>

            {/* <button onClick={buscar}>Buscar</button> */}

            <div>
                <label>Insira um id</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button onClick={deletar}>remover</button>
            </div>

            <div>
                <Link to={`/cadastrar/`}>
                    {" "}
                    <h2>Cadastrar</h2>
                </Link>
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
                        <th>Alterar</th>
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
                            <td><Link to ={`/cadastrar/${item.id}`}>Alterar</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
