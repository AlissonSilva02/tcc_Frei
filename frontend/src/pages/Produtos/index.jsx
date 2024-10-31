import "./index.scss";

import MenuUsuario from "../../components/MenuUsuario/index.jsx";
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import Card from "../../components/CardProduto/index.jsx";

import axios from "axios";
import { Link} from "react-router-dom";
import { useEffect, useState } from "react";

export default function Produtos() {
  const [pentes, setPentes] = useState(false);
  const [escovas, setEscovas] = useState(false);
  const [shampoo, setShampoo] = useState(false);
  const [condicionador, setCondicionador] = useState(false);
  const [mascaraCapilar, setMascaraCapilar] = useState(false);
  const [cremePentear, setCremePentear] = useState(false);
  const [esfolianteFacial, setEsfolianteFacial] = useState(false);
  const [hidratanteFacial, setHidratanteFacial] = useState(false);
  const [protetorSolar, setProtetorSolar] = useState(false);
  const [sabonete, setSabonete] = useState(false);
  const [perfume, setPerfume] = useState(false);
  const [maquiagem, setMaquiagem] = useState(false);
  const [batom, setBatom] = useState(false);
  const [delineador, setDelineador] = useState(false);

  const [produto, setProduto] = useState([]);
  const [relacionados, setRelacionados] = useState([]);

  async function buscar() {
    const url = `http://localhost:5002/select/produto/`;
    let resp = await axios.get(url);
    setProduto(resp.data);
  }

  async function buscarRelacionados() {
    let paramCorpo = {
      buscar: produto.tipo,
    };

    const url = `http://localhost:5002/produto/nome`;
    let resp = await axios.post(url, paramCorpo);

    setRelacionados(resp.data);
  }

  useEffect(() => {
    buscar();
    buscarRelacionados();
  }, [buscar, buscarRelacionados]);



  return (
    <div className="pagina-produtos">
      <header>
        <MenuUsuario />
        <Cabe pesquisar={true} />
      </header>

      <main>
        <div className="container_principal">
          <div className="filtros">
            <h2>Filtros</h2>
            <div className="filtro_preco">
              <div className="precinho">
                <p>Preco</p>
                <p>R$20-2000</p>
              </div>
              <hr />
            </div>
            <h2>Tipo de produto</h2>

            <div className="cabelos">
              <h3>Cabelos</h3>
              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={pentes}
                  onChange={(e) => setPentes(e.target.checked)}
                />
                <p>Pentes</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={escovas}
                  onChange={(e) => setEscovas(e.target.checked)}
                />
                <p>Escovas</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={shampoo}
                  onChange={(e) => setShampoo(e.target.checked)}
                />
                <p>Shampoo</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={condicionador}
                  onChange={(e) => setCondicionador(e.target.checked)}
                />
                <p>Condicionador</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={mascaraCapilar}
                  onChange={(e) => setMascaraCapilar(e.target.checked)}
                />
                <p>Máscara Capilar</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={cremePentear}
                  onChange={(e) => setCremePentear(e.target.checked)}
                />
                <p>Creme para Pentear</p>
              </div>
            </div>

            <div className="skinCare">
              <h3>Skin Care</h3>
              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={esfolianteFacial}
                  onChange={(e) => setEsfolianteFacial(e.target.checked)}
                />
                <p>Esfoliante Facial</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={hidratanteFacial}
                  onChange={(e) => setHidratanteFacial(e.target.checked)}
                />
                <p>Hidratante Facial</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={protetorSolar}
                  onChange={(e) => setProtetorSolar(e.target.checked)}
                />
                <p>Protetor Solar</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={sabonete}
                  onChange={(e) => setSabonete(e.target.checked)}
                />
                <p>Sabonete</p>
              </div>
            </div>

            <div className="beleza">
              <h3>Beleza</h3>
              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={perfume}
                  onChange={(e) => setPerfume(e.target.checked)}
                />
                <p>Perfume</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={maquiagem}
                  onChange={(e) => setMaquiagem(e.target.checked)}
                />
                <p>Maquiagem</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={batom}
                  onChange={(e) => setBatom(e.target.checked)}
                />
                <p>Batom</p>
              </div>
              <hr className="linha" />

              <div className="click">
                <input
                  className="check"
                  type="checkbox"
                  checked={delineador}
                  onChange={(e) => setDelineador(e.target.checked)}
                />
                <p>Delineador</p>
              </div>
            </div>
          </div>

          <div className="listaProdutos">
            <h1>Resultados Principais</h1>

            <div className="produtos">
                 {relacionados.map((item) => (
                  <Card
                     imagem={item.img}
                     alt={item.img}
                     preco={item.valor}
                     nome={item.valor}
                   />
                 ))}
            </div>


            <h1>Cremes Capilares</h1>
            <div className="produtos">
                        {relacionados.map((item, index) => (
                            <Card
                                imagem={item.img}
                                alt={item.img}
                                preco={item.valor}
                                nome={item.valor}
                            />
                        ))} 

                    </div>


            <h1>Pentes e Escovas</h1>
            <div className="produtos">
                        {relacionados.map((item, index) => (
                            <Card
                                imagem={item.img}
                                alt={item.img}
                                preco={item.valor}
                                nome={item.valor}
                            />
                        ))} 
                    </div>


            <h1>Skin Care</h1>
            <div className="produtos">
                        {relacionados.map((item, index) => (
                            <Card
                                imagem={item.img}
                                alt={item.img}
                                preco={item.valor}
                                nome={item.valor}
                            />
                        ))} 
                    </div>
          </div>
        </div>
      </main>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
}
