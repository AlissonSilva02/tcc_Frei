import './index.scss';

export default function Card({ imagem, alt, preco, nome, link }) {
    return (

        <div className='card-component'>

            <div onClick={() => window.location.href = `/produto/${link}`} >
                <div>
                    <img src={imagem} alt={alt} />
                        <h2>{nome}</h2>
                    <h3>R$  {Number(preco).toFixed(2)}</h3>
                </div>
            </div>
        </div>

    )
}
