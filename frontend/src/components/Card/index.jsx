import './index.scss';
import { Link } from "react-router-dom"
import { useState } from 'react';

export default function Card(props) {
return (

    <div className='card'>
        <Link><div className='ima'>
            <img src={props.imagem} alt={props.alt} />
        </div>

        <h2>{props.preco}</h2>

        <h3>{props.nome}</h3>
        </Link>
    </div>

)
}
