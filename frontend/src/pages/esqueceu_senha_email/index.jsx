import "./index.scss";
import { useState } from "react";
/*import { useNavigate } from "react-router-dom";*/
import Rodape from "../../components/rodape";
import Cabecalhologin from "../../components/cabecalhoLogin/index.jsx";
import emailjs from "@emailjs/browser";
import React from "react";
import env from "react-dotenv";
import axios from "axios";
import { toast } from "react-toastify";

export default function EsqueceuSenhaEmail() {
    const [Emailuser, setEmailuser] = useState("");
    const [nome, SetNome] = useState("");

    const host = "localhost:3131";

    async function mandarEmail() {
        const usuario = {
            email: Emailuser,
            nome: nome,
        };

        const templateParams = {
            to_email: Emailuser,
        };

        const url = `http://${host}/confirmar/email`;
        let resp = await axios.post(url, usuario);

        if (resp.data.erro !== undefined) {
            toast.error("Usuario ou email incorretos");
            return;
        } else {
            emailjs
                .send(
                    env.SERVICE_ID,
                    env.TEMPLATE_ID,
                    templateParams,
                    env.PUBLIC_KEY
                )
                .then((response) => {
                    console.log(
                        "E-mail enviado",
                        response.status,
                        response.text
                    );
                });
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
                            Enviaremos um código no seu email para que você
                            possa redefinir sua senha
                        </p>

                        <input
                            type="text"
                            placeholder="digite o nome de usuario"
                            onChange={(e) => SetNome(e.target.value)}
                        />

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
