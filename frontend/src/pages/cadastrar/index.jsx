import Rodape from "../../components/rodape/index.jsx";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import Cabe from "../../components/cabecalho/index.jsx";


export default function Cadastrar() {
    const [token, setToken] = useState(null);
    const Navigate = useNavigate();

    const [tipo, setTipo] = useState("");
    const [img, setImg] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [estoque, setEstoque] = useState("");
    const [disponivel, setDisponivel] = useState(false);
    const { id } = useParams();

   function alterarImagem(e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

    async function salvar() {
        const paramCorpo = {
            tipo: tipo,
            img: img,
            descricao: descricao,
            valor: valor,
            disponivel: disponivel,
            estoque: estoque,
        };

        if (id === undefined) {
            //inserir
            const url = `http://localhost:5002/insert/produto?x-access-token=${token}`;
            let resp = await axios.post(url, paramCorpo);
            alert("Produto adicionado Id: " +  resp.data.id)
        } else {
            //atualizar
            
			const config = {
                headers: {
                    'x-access-token': token
				}
			};
            const url = `http://localhost:5002/update/produto/${id}`;
            await axios.put(url, paramCorpo, config);
        
            alert("Produto alterado Id: " + id);
        }
    }

    async function Buscar(token) {
        const url = `http://localhost:5002/select/produto/${id}?x-access-token=${token}`;
        let resp = await axios.get(url);

        setTipo(resp.data.tipo);
        setImg(resp.data.img);
        setDescricao(resp.data.descricao);
        setValor(resp.data.valor);
        setDisponivel(resp.data.disponivel);
        setEstoque(resp.data.estoque);
    }

    useEffect(() => {
        let token = localStorage.getItem("USUARIO");
        setToken(token);

        if (token === null) {
            Navigate("/");
        }

        Buscar(token); 
    }, [Buscar, Navigate]);

    return (
        <div className="pagina-cadastrar">
            <header>
            <Cabe pesquisar={false}/>
            </header>

            <main>
                <div className="titulo">
                    <h2> Cadastrar Produto: {id} </h2>
                    <hr />
                </div>

                <div className="formulario">
                    <div className="campos">
                        <div className="campo">
                            <h3>Nome do produto:</h3>
                            <input
                                type="text"
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <h3>Valor:</h3>
                            <input
                                type="text"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="campos">
                        <div className="campo">
                            <h3>Imagem:</h3>
                            <input
                                 type="file"
                                 accept='image/*'
                                 onChange={(e) => alterarImagem(e)}
                            />
                        </div>

                        <div className="campo">
                            <h3>Estoque:</h3>
                            <input
                                type="text"
                                value={estoque}
                                onChange={(e) => setEstoque(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="checkbox">
                        <h3>Disponivel:</h3>
                        <input
                            className="check"
                            type="checkbox"
                            checked={disponivel}
                            onChange={(e) => setDisponivel(e.target.checked)}
                        />
                    </div>

                    <div className="descricao">
                        <h3>Descricão:</h3>
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
                </div>


                {img &&
                    <div className='imagem'>
                        <img
                            id='inimigo'
                            src={img}
                            alt="Foto"
                        />
                    </div>
                }

                <div className="lile">
                    <Link to={`/consultar`}>
                        <button onClick={salvar}>
                            inserir e ir para  a tela de consulta

                        </button>
                    </Link>
                    <button onClick={salvar}> alterar </button>
                </div>
            </main>

            <footer>
                <Rodape />
            </footer>
        </div>
    );
}
