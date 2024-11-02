import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Rodape from '../../components/rodape';
import CabecalhoLogin from '../../components/cabecalhoLogin';

import { toast } from 'react-toastify';


export default function Login() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const [olho,setOlho] = useState(false)

    const navigate = useNavigate();

    //4.172.207.208:5031
    const host = 'localhost:5031'

    function verificaOlho() {
        setOlho(!olho)
    }


    function teclaApertada(e) {
        if (e.key === 'Enter') {
            entrar();
        }
    }
    async function entrar() {
        const usuario = {
            nome: nome,
            senha: senha,
        };

        const url = `http://${host}/entrar/`;
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
            
            <header>
                <CabecalhoLogin />
            </header>

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
                                {!olho  && <hr className='oiof' />}
                                {olho && <hr className='oio' />}
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
