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
        <div className='CardTabela'>

            <div>
                <img src={produtos.imagem} alt={produtos.alt} />
                <p>id: {produtos.id}</p>
            </div>

            <div>
                <h4>{produtos.nome}</h4>
                <p>Estoque: {produtos.estoque}</p>
                <h5>Preço: {produtos.preco}</h5>
            </div>

            <div>
                <MagicMotion>
                    <Link to={`/cadastrar/${produtos.id}`}>
                        <img
                            src="/assets/images/editar.png"
                            alt="icone_alterar"
                            width={48}
                        />
                    </Link>

                    <Link
                        onClick={() =>
                            deletar(produtos.id, token)
                        }
                    >
                        <img
                            src="/assets/images/Remover.svg"
                            alt="icone_lixo"
                            width={48}
                        />
                    </Link>
                </MagicMotion>
            </div>

        </div>
    )
}