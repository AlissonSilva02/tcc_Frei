import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
const [nome,setNome] = useState('');
const [senha,setSenha] = useState('');

    const navigate = useNavigate()

    async function entrar() {
        const usuario = {
            "nome": nome,
            "senha": senha
        }

        const url = "http://localhost:5002/entrar/"
        let resp = await axios.post(url, usuario)

        if (resp.data.erro !== undefined) {
            alert(resp.data.erro)
        } else {
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/consultar')
        }
    }


    return (
        <div className='login'>
            <a href="/" className='voltar'>
                <img src="/assets/images/Arrowleft.png" alt="voltar" />
                <p>VOLTAR</p>
            </a>
            <img className='logo' src="/assets/images/bank.png" alt="Logo" />

            <div className='container'>
                <h1>Login</h1>
                <h4 className='dif'>CPF/CNPJ</h4>
                <input type="text"  placeholder='Digite seu CPF/CNPJ'  onChange={e => setNome(e.target.value)} />
                <h4 className='dif'>SENHA</h4>
                <input type="text"  placeholder='Digite sua senha'  onChange={e => setSenha(e.target.value)} />
                <p className='dif'>Esqueci a Senha</p>
                <div className="linha"></div>
                <button onClick={entrar}>ENTRAR</button>
            </div>
        </div>
    )
}