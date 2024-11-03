import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rodape from "../../components/rodape";
import Cabecalhologin from "../../components/CabecalhoLogin/index.jsx";

export default function Esqueceu_senha_email() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function confirmar() {
    if (setEmail === email) {
      alert("Código email valido");
      navigate("/esqueceuc");
    }
  }

  return (
    <div className="email">
      <Cabecalhologin />
      <div className="container">
        <div className="formulario">
          <div className="campo">
            <h1>RECUPERAÇÃO DE SENHA</h1>
            <p>
              Enviaremos um código no seu email para que você possa redefinir
              sua senha
            </p>
            <input
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={confirmar}>Enviar Código</button>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
