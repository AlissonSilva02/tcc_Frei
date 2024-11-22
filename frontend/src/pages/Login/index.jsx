import "./index.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Rodape from "../../components/rodape";

import { toast } from "react-toastify";

export default function Login() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const [olho, setOlho] = useState(false);

    const navigate = useNavigate();

    //4.172.207.208:5031
    const host = "4.172.207.208:5031";

    function verificaOlho() {
        setOlho(!olho);
    }

    function teclaApertada(e) {
        if (e.key === "Enter") {
            entrar();
        }
    }
    async function entrar() {
        const usuario = {
            nome: nome,
            senha: senha
        };

        const url = `http://${host}/entrar/`;
        let resp = await axios.post(url, usuario);

        if (resp.data.erro !== undefined) {
            toast.error("Usuario ou senha incorreto!");
        } else {
            localStorage.setItem("USUARIO", resp.data.token);
            toast.success("Acesso liberado");
            navigate("/consultar/");
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("USUARIO");
        if (token !== "null" && token !== undefined) {
            navigate("/consultar");
        }
    }, [navigate]);

    return (
        <div>
            <div className="Pagina-login">
                <header>
                    <img
                        src="/assets/images/logo/Ashey-Logo.svg"
                        alt="logoAshey"
                    />
                </header>

                <div className="formulario">
                    <div className="campos">
                        <h1>Login</h1>

                        <div className="campo">
                            <h4>Usuário</h4>
                            <div className="usuario">
                                <img
                                    src="/assets/images/login/usuario.svg"
                                    alt="Usuario"
                                    width={25}
                                    style={{ position: "relative" }}
                                />

                                <input
                                    type="text"
                                    placeholder="Digite seu Usuário"
                                    onKeyUp={teclaApertada}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="campo">
                            <h4>Senha</h4>
                            <div className="senha">
                                <img
                                    src="/assets/images/login/cadeado.svg"
                                    alt="Cadeado"
                                    width={18}
                                    style={{ position: "relative" }}
                                />
                                <input
                                    type={olho ? "text" : "password"}
                                    placeholder="Digite sua Senha"
                                    onKeyUp={teclaApertada}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <div className="olho1">
                                    <button
                                        className="olho"
                                        onClick={verificaOlho}
                                        type="button"
                                    >
                                        {olho && (
                                            <img
                                                src="/assets/images/login/olhoAberto.svg"
                                                alt="olho-Aberto"
                                                width={24}
                                            />
                                        )}
                                        {!olho && (
                                            <img
                                                src="/assets/images/login/olhoFechado.svg"
                                                alt="olho-Fechado"
                                                width={24}
                                            />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <a href="/esqueceu_senha_email">Esqueci a Senha</a>

                        <hr className="linha" />

                        <button className="entrar" onClick={entrar}>
                            ENTRAR
                        </button>
                    </div>

                    <hr className="linha" />
                </div>
            </div>

            <Rodape />
        </div>
    );
}
