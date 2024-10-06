import { Cabe } from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";

export default function Cadastrar() {
  const [tipo, setTipo] = useState("");
  const [img, setImg] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [estoque, setEstoque] = useState("");
  const [disponivel, setDisponivel] = useState(false);
  const { id } = useParams();

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
      const url = "http://localhost:5002/insert/produto";
      let resp = await axios.post(url, paramCorpo);
      alert("Produto adicionado Id: " + resp.data.id);
    } else {
      //atualizar
      const url = `http://localhost:5002/update/produto/${id}`;
      await axios.put(url, paramCorpo);

      alert("Produto alterado Id: " + id);
    }
  }

  async function Buscar() {
    const url = `http://localhost:5002/select/produto/${id}`;
    let resp = await axios.get(url);

    console.log(resp.data);

    setTipo(resp.data.tipo);
    setImg(resp.data.img);
    setDescricao(resp.data.descricao);
    setValor(resp.data.valor);
    setDisponivel(resp.data.disponivel);
    setEstoque(resp.data.estoque);
  }

  useEffect(() => {
    Buscar();
  });

  return (
    <div>
    <div className="pagina-cadastrar">
      <div>
        <Cabe />
      </div>

      <div className="formulario">

        <div className="titulo">
        <h2> Cadastrar Produto: </h2>
        <h2>{id}</h2>
        </div>
        <hr />

        <div className="form">
          <div className="forma1">
            <div className="lab">
              <label><h3>Nome do produto:</h3></label>
              <input
                type="text"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>
            <div className="lab">
              <label> <h3>Valor:</h3> </label>
              <input
                type="text"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>
          </div>

        
        <div className="forma1">
            <div className="lab">
              <label><h3>Imagem:</h3></label>
              <input
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
         
          
          
          <div className="lab">
              <label><h3>Estoque:</h3></label>
              <input
                type="text"
                checked={estoque}
                onChange={(e) => setEstoque(e.target.value)}
              />
            </div>
        </div> 
        </div>

          <div className="forma1">
            <div className="lab">

              <label>
                
                <h3>Disponivel:</h3>
              <input className="check"
                type="checkbox"
                checked={disponivel}
                onChange={(e) => setDisponivel(e.target.checked)}
              />

              </label>
            </div>
            
          </div>
        </div>  
        
        <div className="forma1">
            <div className="lab">
              <label><h3>Descricão:</h3></label>
              <input className="desc"
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            
            </div>

        <div className="lile">
        <Link to={`/consultar`}>
          <button onClick={salvar}> Alterar e ir para consulta </button>
        </Link>
        <button  onClick={salvar}> Alterar </button>
        </div>


      

      
    </div>  
    
    <div>
            <footer>
                <Rodape/>
            </footer>
        </div>
        
        </div>
  );
}
