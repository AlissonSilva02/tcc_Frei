import {useState} from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import MenuUsuario from "../../components/MenuUsuario/index.jsx";

import ConsultarTabelaLista from "../../components/consultarTabelaLista/index.jsx";
import ConsultarCardTabela from "../../components/consultarCardTabela/index.jsx";

export default function Consultar() {
    const Navigate = useNavigate();

    const [cardAtivado, setCardAtivado] = useState(false);
    const [listaAtivado, setListaAtivado] = useState(true);
    function ativarLista() {
        setListaAtivado(true);
        setCardAtivado(false);
    }

    function ativarCard() {
        setCardAtivado(true);
        setListaAtivado(false);
    }

    async function sair() {
        localStorage.setItem("USUARIO", null);
        Navigate("/");
    }

    function voltar() {
        Navigate("/");
    }

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
                        <button
                            className={`botao-card ${
                                cardAtivado ? "ativado" : ""
                            }`}
                            onClick={ativarCard}
                        >
                            <img
                                src="/assets/images/icones/consultarCard.svg"
                                alt="botãoCard"
                            />
                        </button>

                        <button
                            className={`botao-list ${
                                listaAtivado ? "ativado" : ""
                            }`}
                            onClick={ativarLista}
                        >
                            <img
                                src="/assets/images/icones/consultarLista.svg"
                                alt="botãoLista"
                            />
                        </button>
                    </div>

                    <div className="pesquisar-adicionar">
                        <input type="text" placeholder="Pesquisar item" />
                        <Link to={"/cadastrar"}>
                            <button className="adicionar">
                                <img
                                    src="/assets/images/icones/adicionarQuadrado.svg"
                                    alt="Sinal_Mais"
                                />
                                Adicionar
                            </button>
                        </Link>
                    </div>
                </div>

                {listaAtivado && <ConsultarTabelaLista/>}

                {cardAtivado && <ConsultarCardTabela/>}
            </main>

            <footer>
                <Rodape />
            </footer>
        </div>
    );
}
