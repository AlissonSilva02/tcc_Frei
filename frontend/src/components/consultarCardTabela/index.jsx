import "./index.scss";
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MagicMotion } from "react-magic-motion";

import axios from "axios";

export default function ConsultarCardTabela() {
    const [limite, setLimite] = useState(5);
    const [produtos, setProdutos] = useState([]);
    const [mostrarVermais, setMostrarVermais] = useState(true);
    const [pesquisar, setPesquisar] = useState("");

    const Navigate = useNavigate();
    const host = "localhost:3131";
    const [token, setToken] = useState(null);

    //receber Token
    useEffect(() => {
        let token = localStorage.getItem("USUARIO");
        setToken(token);

        if (token === "null") {
            Navigate("/");
        }
    }, [Navigate]);

    const buscar = useCallback(
        async (token) => {
            const url = `http://${host}/select/produto/?total=${limite}&x-access-token=${token}`;
            let resp = await axios.get(url);

            const itens = Array.isArray(resp.data) ? resp.data : [];

            setProdutos(itens);
        },
        [limite]
    );

    async function VerMais() {
        if (limite !== produtos.length) {
            setMostrarVermais(false);
        }

        let novoLimite = limite * 2;
        setLimite(novoLimite);

        await buscar(token);
    }

    async function deletar(id, token) {
        // Remova o parâmetro id
        const url = `http://${host}/delete/produto/${id}?x-access-token=${token}`; // Substitua o parâmetro id
        await axios.delete(url);

        await buscar(token);
    }

    const filtrar =
        pesquisar.length > 0
            ? produtos.filter((produto) =>
                  produto.nome.toLowerCase().includes(pesquisar)
              )
            : [];

    useEffect(() => {
        buscar(token);
    }, [buscar, token]);

    return (
        <div className="Componente-CardTabela">
            <div className="pesquisar-adicionar">
                <input
                    type="text"
                    placeholder="Pesquisar item"
                    onChange={(e) => setPesquisar(e.target.value.toLowerCase())}
                />

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

            {pesquisar.length > 0 ? (
                <MagicMotion>
                    {filtrar.map((item, index) => (
                        <div className="cardProduto" key={index}>
                            <div className="container-flex">
                                <div className="imagem_Id">
                                    <div className="imagem">
                                        <img src={item.img} alt={item.nome} />
                                    </div>

                                    <div className="id">
                                        <p>id: {item.id}</p>
                                    </div>
                                </div>

                                <div className="infoProduto">
                                    <div className="titulo_descricao">
                                        <h1>{item.nome}</h1>
                                        <hr style={{ width: "100%" }} />
                                        <p>{item.descricao}</p>
                                    </div>

                                    <div>
                                        <p>Estoque: {item.estoque}</p>
                                        <p>
                                            Preço: R$
                                            {Number(item.valor).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="icones">
                                <Link to={`/cadastrar/${item.id}`}>
                                    <img
                                        src="/assets/images/editar.png"
                                        alt="icone_alterar"
                                        width={48}
                                    />
                                </Link>

                                <Link onClick={() => deletar(item.id, token)}>
                                    <img
                                        src="/assets/images/Remover.svg"
                                        alt="icone_lixo"
                                        width={48}
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </MagicMotion>
            ) : produtos.length > 0 ? (
                <div>
                    {produtos.map((item, index) => (
                        <MagicMotion>
                            <div className="cardProduto" key={index}>
                                <div className="container-flex">
                                    <div className="imagem_Id">
                                        <div className="imagem">
                                            <img
                                                src={item.img}
                                                alt={item.nome}
                                            />
                                        </div>

                                        <div className="id">
                                            <p>id: {item.id}</p>
                                        </div>
                                    </div>

                                    <div className="infoProduto">
                                        <div className="titulo_descricao">
                                            <h1>{item.nome}</h1>
                                            <hr style={{ width: "100%" }} />
                                            <p>{item.descricao}</p>
                                        </div>

                                        <div>
                                            <p>Estoque: {item.estoque}</p>
                                            <p>
                                                Preço: R$
                                                {Number(item.valor).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="icones">
                                    <Link to={`/cadastrar/${item.id}`}>
                                        <img
                                            src="/assets/images/editar.png"
                                            alt="icone_alterar"
                                            width={48}
                                        />
                                    </Link>

                                    <Link
                                        onClick={() => deletar(item.id, token)}
                                    >
                                        <img
                                            src="/assets/images/Remover.svg"
                                            alt="icone_lixo"
                                            width={48}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </MagicMotion>
                    ))}
                </div>
            ) : (
                <div className="nenhum">
                    <p>Nenhum produto encontrado</p>
                </div>
            )}

            {mostrarVermais && (
                <div className="verMais">
                    <hr />
                    <button onClick={VerMais}>
                        <p>Ver Mais</p>
                    </button>
                    <hr />
                </div>
            )}
        </div>
    );
}
