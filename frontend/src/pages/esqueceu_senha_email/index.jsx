import "./index.scss";
import { useState } from "react";
/*import { useNavigate } from "react-router-dom";*/
import Rodape from "../../components/rodape";
import Cabecalhologin from "../../components/cabecalhoLogin/index.jsx";
import emailjs from '@emailjs/browser'
import React from "react";
import env from "react-dotenv";

export default function Esqueceu_senha_email() {
  const [Emailuser, setEmailuser] = useState("");

 
  function mandarEmail(e) {
    e.preventDefault()
    if (Emailuser === '') {
      alert('preencha todos os campos')
      return
    }
    
    const templateParams = {
      to_email: Emailuser 
    }

   emailjs.send( env.SERVICE_ID, env.TEMPLATE_ID, templateParams, env.PUBLIC_KEY)
    .then((response) => {
      console.log("E-mail enviado", response.status, response.text)
    }, (err) => {
      alert("Erro: ", err)
    })
    
  }

  /*const navigate = useNavigate();

  async function confirmar() {
    if (setEmailuser === Emailuser) {
      alert("Código email valido");
      navigate("/esqueceuc");
    }
  }*/



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
            <form onSubmit={mandarEmail}/>
            <input
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmailuser(e.target.value)}
            />
            <button onClick={mandarEmail}>Enviar Código</button>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
