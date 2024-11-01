import "./index.scss";

import MenuUsuario from "../../components/MenuUsuario/index.jsx";
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import Card from "../../components/CardProduto/index.jsx";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VoltarButton from "../../components/voltar/index.jsx";

export default function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState([]);
  const [relacionados, setRelacionados] = useState([]);



<<<<<<< HEAD
  async function buscar() {
    const url = `http://localhost:5002/select/produto/${id}`;
    let resp = await axios.get(url);
    setProduto(resp.data);
  }

  async function buscarRelacionados() {
    let paramCorpo = {
      buscar: produto.tipo,
    };
=======
    async function buscarRelacionados() {
        const paramCorpo = {
            "buscar": produto.categoria
        }
    
        const url = `http://localhost:5002/produto/nome`;
        try {
            let resp = await axios.post(url, paramCorpo);
            setRelacionados(resp.data);
        } catch (error) {
            console.error("Erro ao buscar produtos relacionados:", error);
        }
    }

    useEffect(() => {
        buscarRelacionados()
    }, [buscarRelacionados]);

    useEffect(() => {
        buscar()
    }, [buscar]);
>>>>>>> 569575e32589476cd860202567b6b732aa762c27

    const url = `http://localhost:5002/produto/nome`;
    let resp = await axios.post(url, paramCorpo);

    setRelacionados(resp.data);
  }

  useEffect(() => {
    buscar();
    buscarRelacionados();
  }, [buscar, buscarRelacionados]);

  function testar() {
    alert(relacionados);
  }

  /*
        "id":5,
        "tipo":"Batom",
        "img":"batom.jpg",
        "descricao":"Batom matte vermelho intenso",
        "valor":20,
        "disponivel":true,
        "estoque":100
    */

  return (
    <div className="pagina-produto">
      <header>
        <MenuUsuario />
        <Cabe />
      </header>

<<<<<<< HEAD
      <main>
        <button onClick={testar}>Testar</button>

       <VoltarButton/>

        <div className="guia">
          <p> home / </p>
          <p> produtos / </p>
          <p> cremes capilares</p>
        </div>
=======
            <main>
                <button onClick={testar}>Testar</button>
                <button onClick={(e) => alert(JSON.stringify(produto.categoria))}>produto</button>

                <div className="botao-voltar">
                    <Link to={"/"}>
                        <div className="voltar">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                        </svg>
                            <h1>VOLTAR</h1>
                        </div>
                    </Link>
                </div>
>>>>>>> 569575e32589476cd860202567b6b732aa762c27

        <div className="secao-produto">
          <div className="container-flex">
            <div className="imagem-produto">
              <img src={produto.img} alt={produto.img} />
            </div>

            <div className="info">
              <h1>{produto.nome}</h1>
              <h2>R$ {Number(produto.valor).toFixed(2)}</h2>

              <hr />

              <div>
                <h2>Categoria</h2>
                <p>{produto.categoria}</p>
              </div>

              <div className="numero">
                <img
                  src="/assets/images/RedesSociais/whatsapp.svg"
                  alt="whatsapp"
                />
                <p>{"(11) 9999-9999"}</p>
              </div>
            </div>
          </div>

          <div className="descricao">
            <hr className="linha" />
            <h1>Descrição</h1>
            <p>{produto.descricao}</p>
          </div>
        </div>

        <div className="Produtos-relacionados">
          <h1>Produtos Relacionados</h1>

          <div className="produtos">
            {relacionados.map((item, index) => (
              <Card
                imagem={item.img}
                alt={item.img}
                preco={item.valor}
                nome={item.valor}
              />
            ))}

<<<<<<< HEAD
            {/* <Card
=======
                <div className="Produtos-relacionados">
                    <h1>Produtos Relacionados</h1>

                    <div className="produtos">
                        {relacionados.map((item, index) => (
                            <Card
                                key={index}
                                imagem={item.img}
                                alt={item.img}
                                preco={item.valor}
                                nome={item.valor}
                            />
                        ))} 

                        {/* <Card
>>>>>>> 569575e32589476cd860202567b6b732aa762c27
                            imagem="/assets/images/RedesSociais/whatsapp.svg"
                            alt="imagem"
                            preco={50}
                            nome="nome"
                        /> */}
          </div>
        </div>
      </main>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
}
