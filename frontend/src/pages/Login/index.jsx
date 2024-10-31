import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Rodape from '../../components/rodape';
import Cabecalho_login from '../../components/cabecalho_login';

import {Eye, EyeOff} from "lucide-react"
import { toast } from 'react-toastify';


export default function Login() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const [olho,setOlho] = useState(false)

    const navigate = useNavigate();

    const verificaOlho = () => setOlho(!olho)

    function teclaApertada(e) {
        if (e.key == 'Enter') {
            entrar();
        }
    }
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
            navigate('/consultar/')
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
                                onKeyUp={teclaApertada}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            
                           <h4>Senha</h4> <div className='mestica'>
                            <input
                                type={olho ? "text" : "password"}
                                placeholder="Digite sua Senha"
                                onKeyUp={teclaApertada}
                                onChange={(e) => setSenha(e.target.value)}
                            /> 
                            <button className='olho' onClick={verificaOlho} type='button'>
                                {!olho  && <EyeOff className='oiof' />}
                                {olho && <Eye className='oio' />}
                            </button></div>
                            
                            
                            </div>
                            <a href='/esqueceu_senha_email'>Esqueci a Senha</a>
                       

                        <hr className="linha" />

                        <button className='mes' onClick={entrar}>ENTRAR</button>
                    </div>
                </div>
            </div>

            <Rodape/>
        </div>
    );
}
