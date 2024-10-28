import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Rodape from '../../components/rodape';
import Cabecalho_login from '../../components/cabecalho_login';
import { toast } from 'react-toastify';


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
            toast.error('Usuario ou senha incorreto!');
            
        }
        else {
            localStorage.setItem("USUARIO", resp.data.token);
            toast.success('Acesso liberado')
            navigate('/consultar')
        }
    }

    return (
        <div className="Pagina-login">
            <Cabecalho_login/>
            <div className="container">
                <div className="formulario">
                    <div className="campos">
                        <h1>Login</h1>

                        <div className="campo">
                            <h4>Usuário</h4>
                            <input
                                type="text"
                                placeholder="Digite seu Usuário"
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <h4>Senha</h4>
                            <input
                                type="text"
                                placeholder="Digite sua Senha"
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <a href='/esqueceu_senha_email'>Esqueci a Senha</a>
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
