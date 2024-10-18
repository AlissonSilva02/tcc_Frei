import { useEffect, useState } from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { Cabe } from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";


import axios from "axios";

export default function Consultar() {
	const [id, setId] = useState(""); // Inicialize com uma string vazia
	const [produtos, setProdutos] = useState([]);
	const [token, setToken] = useState(null);

	const Navigate = useNavigate();

	async function buscar(token) {
		const url = `http://localhost:5002/select/produto?x-access-token=${token}`;
		let resp = await axios.get(url);
		setProdutos(resp.data);
	}

	async function deletar(id, token) {
		// Remova o parâmetro id
		const url = `http://localhost:5002/delete/produto/${id}?x-access-token=${token}`; // Substitua o parâmetro id
		await axios.delete(url);

		await buscar(token);
	}

	async function sair() {
		localStorage.setItem('USUARIO', null)
		Navigate('/')
	}


	useEffect(() => {
		let token = localStorage.getItem('USUARIO')
		setToken(token)

		if (token === null) {
			Navigate('/')
		} else{
			buscar(token)
		}

	}, [Navigate])


	return (
		<div className="a1">
			<div className="pagina-consultar">
				<header>
					<Cabe />
				</header>


				<div>
					<button onClick={sair}>Sair</button>
					<button><Link to={'/cadastrar'}>Cadastrar</Link></button>
					<label>Insira um id</label>
					<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
					<button onClick={deletar}>deletar </button>
				</div>


				<table>
					<thead>
						<tr className="bak">
							<th>ID</th>
							<th>Produto</th>
							<th>Imagem</th>
							<th>Descricao</th>
							<th>Valor</th>
							<th>Estoque</th>
							<th>Disponivel</th>
							<th className="alter">Alterar ou excluir</th>
						</tr>
					</thead>

					<tbody>
						{produtos.map((item) => (
							<tr>
								<td>{item.id}</td>
								<td>{item.tipo}</td>
								<td>{item.img}</td>
								<td>{item.descricao}</td>
								<td>{item.valor}</td>
								<td>{item.estoque}</td>
								{/* <td>{new Date(item.vinganca).toLocaleDateString()}</td> */}
								<td>{item.disponivel ? "Sim" : "Não"}</td>
								<td>
									<Link to={`/cadastrar/${item.id}`}>
										<img src="/assets/images/Alterar.svg" alt="icone_alterar" width={50} />
									</Link>
									
									<Link onClick={() => deletar(item.id, token)}> 
										<img src="/assets/images/Remover.svg" alt="icone_lixo" width={40} />
									</Link>

								</td>
							</tr>
						))}
					</tbody>
				</table>


				<div>
					<button className="ver">Ver mais</button>
				</div>

			</div>



			<div className="rodape">
				<footer>


					<Rodape />

				</footer>
			</div>

		</div>
	);
}
