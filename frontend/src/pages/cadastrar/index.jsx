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
  const [estoque, setEstoque] = useState(0);
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

  function aumentar() {
    if (estoque < 999) {
      setEstoque(Number(estoque) + 1);
    }
  }
  function diminuir() {
    if (estoque > 0) {
      setEstoque(estoque - 1);
    }
  }

  function teclaApertada(e) {
    if (e.key == "Enter") {
      salvar();
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
      alert("Produto adicionado Id: " + resp.data.id);
    } else {
      //atualizar

      const config = {
        headers: {
          "x-access-token": token,
        },
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

    if (id) {
      Buscar(token);
    }
  }, [id, Navigate]);

  return (
    <div className="pagina-cadastrar">
      <header>
        <Cabe pesquisar={false} />
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
                placeholder="Creme Hidratante 200ml"
                onKeyUp={teclaApertada}
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>

            <div className="campo">
              <h3>Valor:</h3>
              <input
                type="text"
                placeholder="R$ 119.99"
                onKeyUp={teclaApertada}
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
                accept="image/*"
                onKeyUp={teclaApertada}
                onChange={(e) => alterarImagem(e)}
              />
            </div>

            <div className="campo">
              <h3>Estoque:</h3>
              <div className="contador">
                <button onClick={diminuir}> - </button>
                <input
                  type="Text"
                  placeholder="100"
                  onKeyUp={teclaApertada}
                  value={estoque}
                  onChange={(e) => setEstoque(e.target.value)}
                />
                <button onClick={aumentar}> + </button>
              </div>
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
              onKeyUp={teclaApertada}
              placeholder="Creme Hidratante Corporal 200ml
Transforme o cuidado com a pele em um momento especial com este creme hidratante corporal de 200ml. Com uma textura leve e de rápida absorção, ele foi desenvolvido para todos os tipos de pele, proporcionando hidratação profunda e duradoura. Formulado com ingredientes naturais, como manteiga de karité e óleo de amêndoas, o creme ajuda a restaurar a barreira protetora da pele, deixando-a mais macia, suave e visivelmente saudável.

Ideal para uso diário, este hidratante possui uma fragrância suave e delicada, que deixa uma sensação refrescante sem ser invasiva. Além disso, seu tamanho prático é perfeito para ter sempre à mão, seja em casa ou na bolsa. Com o uso contínuo, a pele fica nutrida e com um brilho natural."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
        </div>

        {img && (
          <div className="imagem">
            <img id="inimigo" src={img} alt="Foto" width={90} />
          </div>
        )}

        <div className="lile">
          <Link to={`/consultar`}>
            <button className="inserir" onClick={salvar}>
              Inserir Produto
            </button>
          </Link>
          <Link to={"/"}>
            <button className="cancelar"> Cancelar </button>
          </Link>
        </div>
      </main>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
}
