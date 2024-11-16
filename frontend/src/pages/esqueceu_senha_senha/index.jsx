import './index.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Rodape from '../../components/rodape';
import CabecalhoLogin from '../../components/cabecalhoLogin/index.jsx';

import { toast } from "react-toastify";
export default function Esqueceu_senha_senha() {
  const [senha, setSenha] = useState("");
  const [confirmarsenha, setConfirmarsenha] = useState("");
  const [token, setToken] = useState(null);

  const navigate = useNavigate();


  const host = "localhost:3131";

  

function teclaApertada(e) {
  if (e.key === "Enter") {
      entrar();
  }
}

async function entrar() {
  const usuario = {
      nome: nome,
      senha: senha,
      email: email,
  };

const buscaremail = useCallback(
    async () => {
        const url = `http://${host}/confirmar/email&x-access-token=${token}`;
        let resp = await axios.get(url);
        setSenha(resp.data);
    },
);

    if(usuario = null){
      toast.error("preencha todos os campos")
    }

    if (setSenha != senha) {
      alert("Senhas incompativeis");
      navigate("/esqueceu_codigo");

      if (setSenha === setConfirmarsenha) {
        alert("Senha Alterada");
        navigate("/login");
      } else {
        alert("Erro");
      }
    }
  }
}

  return (
    <div className="senha">
      <Cabecalho_login />
      <div className="container">
        <div className="formulario">
          <div className="campos">
            <h1>RECUPERAÇÃO DE SENHA</h1>
            <div className="campo">
              <h4>Nova Senha</h4>
              <input
                type="text"
                onKeyUp={teclaApertada}
                placeholder="Digite sua Nova senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="campo">
              <h4>Confirmar Senha</h4>
              <input
                type="text"
                onKeyUp={teclaApertada}
                placeholder="Confirme a senha"
                onChange={(e) => setConfirmarsenha(e.target.value)}
              />
            </div>
            <hr className="linha" />
            <button onClick={confirmar}>Entrar</button>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
