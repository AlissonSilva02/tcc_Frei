import "./index.scss";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { MagicMotion } from "react-magic-motion";

import axios from "axios";

export default function CardTabela({ token }) {
  const [limite, setLimite] = useState(5);
  const [produtos, setProdutos] = useState([]);
  const [mostrarVermais, setMostrarVermais] = useState(true);

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

  const host = "localhost:5031";

  async function deletar(id, token) {
    // Remova o parâmetro id
    const url = `http://${host}/delete/produto/${id}?x-access-token=${token}`; // Substitua o parâmetro id
    await axios.delete(url);

    await buscar(token);
  }

    useEffect(() => {
        buscar(token);
    }, [buscar]);

    return (
        <div className="Componente-CardTabela">
          <button onClick={() => alert(JSON.stringify(produtos))}>
                Testar
            </button> 

            {produtos.length > 0 ? (
                produtos.map((item, index) => (
                    <MagicMotion>
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
                                    <h4>{item.nome}</h4>
                                    <p>Estoque: {item.estoque}</p>
                                    <h5>Preço: R${item.valor}</h5>
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
                ))
            ) : (
                <div className="nenhum">
                    <p>Nenhum produto encontrado</p>
                </div>
            )}

            {mostrarVermais && (
                <div className="verMais">
                    <hr />
                    <button onClick={VerMais}>Ver Mais</button>
                    <hr />
                </div>
            )}
        </div>
    );
}

