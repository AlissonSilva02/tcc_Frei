import './index.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Rodape from '../../components/rodape';
import CabecalhoLogin from '../../components/cabecalhoLogin/index.jsx';

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
            senha: senha,
        };

        const url = "http://4.172.207.208:5031/entrar/";
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
        const token = localStorage.getItem("USUARIO")
        if (token !== 'null' && token !== undefined) {
            navigate('/consultar')
        }
    }, [navigate])


    return (
        <div>
        <div className="Pagina-login">
            <header>
                <img src="/assets/images/logo/Ashey-Logo.svg" alt="logoAshey" />
            </header>

            <div className="formulario">
                <div className="campos">
                    <h1>Login</h1>

                    <div className="campo">
                        <h4>Usuário</h4>
                        <div className="usuario">
                            <img src="/assets/images/login/usuario.svg" alt="Usuario" width={25} style={{position:"relative"}}/>

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
                            <img src="/assets/images/login/cadeado.svg" alt="Cadeado" width={18} style={{position:"relative"}}/>
                            <input
                                type={olho ? "text" : "password"}
                                placeholder="Digite sua Senha"
                                onKeyUp={teclaApertada}
                                onChange={(e) => setSenha(e.target.value)}
                            /> 
                            <div className='olho1'>
                            <button className='olho' onClick={verificaOlho} type='button'>
                              { olho  &&   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg> }
                           
                                { !olho && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>}
                             
                            </button></div></div>
                            
                            
                            </div>
                    
                          <a href="/esqueceu_senha_email">Esqueci a Senha</a>

                        <hr className="linha" />

                        <button className='mes' onClick={entrar}>ENTRAR</button>
                    </div>
                 

                    <hr className="linha" />

                    
                </div>
            </div>

            <Rodape />
        </div>
        
    );
}
