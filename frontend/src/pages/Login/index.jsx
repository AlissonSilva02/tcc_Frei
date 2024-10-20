import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Rodape from '../../components/rodape';

export default function Login() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    async function entrar() {
        const usuario = {
            nome: nome,
            senha: senha,
        };

        const url = "http://localhost:5002/entrar/";
        let resp = await axios.post(url, usuario);

        if (resp.data.erro !== undefined) {
            alert(resp.data.erro);
        } else {
            localStorage.setItem("USUARIO", resp.data.token);
            navigate("/consultar");
        }
    }

    return (
        <div className="Pagina-login">
            <div className="logo">
                <img src="/assets/images/logo1.png" alt="Logo" width={300} />
            </div>

            <div className="voltar">
                <a href="/">
                    <img src="/assets/images/Arrowleft.png" alt="voltar" />
                    <p>VOLTAR</p>
                </a>
            </div>

            <div className="container">
                <div className="formulario">
                    <div className="campos">
                        <h1>Login</h1>

                        <div className="campo">
                            <h4>CPF/CNPJ</h4>
                            <input
                                type="text"
                                placeholder="Digite seu CPF/CNPJ"
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <h4>SENHA</h4>
                            <input
                                type="text"
                                placeholder="Digite sua senha"
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <p>Esqueci a Senha</p>
                        </div>

                        <hr className="linha" />

                        <button onClick={entrar}>ENTRAR</button>
                    </div>
                </div>
            </div>

            <Rodape/>
        </div>
    );
}
