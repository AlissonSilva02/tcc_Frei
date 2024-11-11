import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rodape from "../../components/rodape";
import Cabecalhologin from "../../components/cabecalhoLogin/index.jsx";

export default function EsqueceuSenhaCodigo() {
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  async function confirmar() {
    if (setCodigo === codigo) {
      alert("Código de confirmação válido");
      navigate("/esqueceu_senha_senha");
    }
  }

  return (
    <div className="pagina-Codigo">
      <Cabecalhologin />
      <div className="container">
        <div className="formulario">
          <div className="campo">
            <h1>RECUPERAÇÃO DE SENHA</h1>
            <p>Insira o código que foi enviado para seu e-mail</p>
            <input
              type="text"
              placeholder="Digite o código"
              onChange={(e) => setCodigo(e.target.value)}
            />
            <button onClick={confirmar}>Confirmar código</button>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
