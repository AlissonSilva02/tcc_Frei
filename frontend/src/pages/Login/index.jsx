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
        let resp = await axios.get(url, usuario)

        alert (resp.data)

        

        if (resp.data !== undefined) {
          
        }

        else {

            let usuario = {
                "id": resp.data.id,
                "nome": resp.data.nome
            }   
            localStorage.setItem('usuario', JSON.stringify(usuario))
        }
    }


    return (
        <div className='login'>
            <h1>Entrar</h1>

            <input type="text"  placeholder='Digite seu usuario'  onChange={e => setNome(e.target.value)} />
            <input type="text"  placeholder='Digite sua senha'  onChange={e => setSenha(e.target.value)} />

            <button onClick={entrar}>ENTRAR</button>
        </div>
    )
}