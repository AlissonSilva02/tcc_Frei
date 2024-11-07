import { useEffect, useState, useCallback } from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import MenuUsuario from "../../components/MenuUsuario/index.jsx";

import ConsultarTabelaLista from "../../components/consultarTabelaLista/index.jsx";

import axios from "axios";
import CardTabela from "../../components/cardTabela/index.jsx";

export default function Consultar() {
    const [produtos, setProdutos] = useState([]);
    const [token, setToken] = useState(null);
    const [limite, setLimite] = useState(5);

    const [mostrarVermais, setMostrarVermais] = useState(true);
    const Navigate = useNavigate();

    const [cardAtivado, setCardAtivado] = useState(false)
    const [listaAtivado, setListaAtivado] = useState(true)

    function ativar() {
        setCardAtivado(!cardAtivado)
        setListaAtivado(!listaAtivado)
    }

    //4.172.207.208:5031
    const host = "localhost:5031";

    const buscar = useCallback(
        async (token) => {
            const url = `http://${host}/select/produto/?total=${limite}&x-access-token=${token}`;
            let resp = await axios.get(url);
            setProdutos(resp.data);
        },
        [limite]
    );

    async function sair() {
        localStorage.setItem("USUARIO", null);
        Navigate("/");
    }

    function voltar() {
        Navigate("/");
    }

    useEffect(() => {
        let token = localStorage.getItem("USUARIO");
        setToken(token);

        if (token === "null") {
            Navigate("/");
        } else {
            buscar(token);
        }
    }, [Navigate, limite, buscar]);


    return (
        <div className="pagina-consultar">
            <header className="cabecalho">
                <MenuUsuario />
                <Cabe />
            </header>

            <main>
                <div className="botao-voltar">
                    <div
                        className="voltar"
                        onClick={voltar}
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            src="/assets/images/Arrowleft.png"
                            alt="seta"
                            width={25}
                        />
                        <h1>VOLTAR</h1>
                    </div>
                </div>

                <div className="opcoes">
                    <button className="sair" onClick={sair}>
                        Sair
                    </button>

                    <div className="visualizar">
                        <button className="botao-card" onClick={ativar}>
                            <img
                                src="/assets/images/icones/consultarCard.svg"
                                alt="botãoCard"
                                width={30}
                                height={30}
                            />
                        </button>

                        <button className={`botao-list ${listaAtivado ? 'ativado' : ''}`} onClick={ativar}>
                            <img
                                
                                src="/assets/images/icones/consultarLista.svg"
                                alt="botãoLista"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>

                    <div className="pesquisar-adicionar">
                        <input type="text" placeholder="Pesquisar item" />

                        <button className="adicionar">
                            <img
                                src="/assets/images/icones/adicionarQuadrado.svg"
                                alt="Sinal_Mais"
                                width={30}
                            />
                            <Link to={"/cadastrar"}>Adicionar</Link>
                        </button>
                    </div>
                </div>

                {listaAtivado &&
                    <ConsultarTabelaLista token={token}/> 
                }

                <CardTabela token={token}/>

            </main>

            <footer>
                <Rodape />
            </footer>
        </div>
    );
}