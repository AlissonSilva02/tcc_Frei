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
            <h1>Entrar</h1>

            <input type="text"  placeholder='Digite seu CPF/CNPJ'  onChange={e => setNome(e.target.value)} />
            <input type="text"  placeholder='Digite sua senha'  onChange={e => setSenha(e.target.value)} />

            <button onClick={entrar}>ENTRAR</button>
        </div>
    )
}