import './index.scss';
import { Link } from "react-router-dom"
import { useState } from 'react';

export default function Card_big(props) {
return (

    <div className='cardB'>
        <Link><div className='imag'>
            <img src={props.imagem} alt={props.alt} />
        </div>

        <h2>{props.preco}</h2>

        <h3>{props.nome}</h3>
        </Link>
    </div>

)
}
