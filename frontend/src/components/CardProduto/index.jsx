import "./index.scss";
import { Link } from "react-router-dom";

export default function Card({ imagem, alt, preco, nome, link }) {
  function parcelarPreco(preco) {
    const valorParcela = (preco / 6).toFixed(2);
    return valorParcela;
  }
  return (
    <div className="card-component">
      <div>
        <img src={imagem} alt={alt} />
        <div className="linha"></div>
        <h2>{nome}</h2>
        <h3>R$ {Number(preco).toFixed(2)}</h3>
        <h5>ou até 6x R$ {parcelarPreco(preco)}</h5>
      </div>
      <div onClick={() => (window.location.href = `/produto/${link}`)}>
        <div className="quadrado">
          <button className="comprar">Comprar</button>
        </div>
      </div>
    </div>
  );
}
