import Cabe from "../../components/cabecalho";
import Rodape from "../../components/rodape";

import MenuUsuario from "../../components/MenuUsuario";
import { Link } from "react-router-dom";

import "./index.scss";
import VoltarButton from "../../components/voltar";

export default function Sobre() {
  return (
    <div className="pagina-SobreNos">
      <div className="sobre">
        <header>
          <MenuUsuario />
          <Cabe />
        </header>
        <VoltarButton />
        <div className="faleConosco">
          <Link to={"https://w.app/VJWdUo"}>
            <button className="butao">Fale Conosco</button>
          </Link>
        </div>

        <div className="nossaMissao">
          <h2>Nossa Missão</h2>
          <p>
            Acreditamos que cada pessoa é única e merece produtos que se alinhem
            com sua individualidade e valores. Por isso, trabalhamos para
            oferecer soluções eficazes que promovam sua beleza natural e
            promovem a autoaceitação.
          </p>
        </div>

        <div className="comentarios">
          <h1>O que os clientes dizem</h1>
          <div className="comenta">
            <div className="comments-txt">
              <div className="card-comentario">
                <div className="nome-comentario">
                  <img
                    src="/assets/images/RedesSociais/ana.jpeg"
                    alt="Ana Paula"
                  />
                  <h3>Ana Paula</h3>
                </div>
                <img src="/assets/images/icones/estrelas.png" alt="Estrelas" />
                <p>
                  Simplesmente adorei! O produto superou minhas expectativas. A
                  embalagem é prática, e o resultado é visível em poucos dias.
                  Com certeza voltarei a comprar!
                </p>
              </div>
            </div>

            <div className="comments-txt">
              <div className="card-comentario">
                <div className="nome-comentario">
                  <img
                    src="/assets/images/RedesSociais/mariana.jpg"
                    alt="Mariana Oliveira"
                  />
                  <h3>Mariana Oliveira</h3>
                </div>
                <img src="/assets/images/icones/estrelas.png" alt="Estrelas" />
                <p>
                  Produto sensacional! Além de ser super eficaz, tem um cheiro
                  agradável e a textura é perfeita. É ótimo para quem tem pele
                  sensível como eu. Comprarei novamente, sem dúvida.
                </p>
              </div>
            </div>

            <div className="comments-txt">
              <div className="card-comentario">
                <div className="nome-comentario">
                  <img
                    src="/assets/images/RedesSociais/pedro.jpeg"
                    alt="Pedro Henrique"
                  />
                  <h3>Pedro Henrique</h3>
                </div>
                <img src="/assets/images/icones/estrelas.png" alt="Estrelas" />
                <p>
                  Amei a experiência com este cosmético! Desde o atendimento até
                  o uso, tudo foi perfeito. Minha pele está muito mais hidratada
                  e com um brilho natural. Recomendo de olhos fechados.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="recado">
          <p>
            Nossos cosméticos são formulados com ingredientes de alta qualidade,
            combinando inovação e respeito pelo meio ambiente. Junte-se a nós e
            descubra como a Ashey pode transformar sua rotina de cuidados
            pessoais.
          </p>
        </div>

        <hr />

        <div className="creditos">
          <p>
            Com carinho, <br />
            Equipe Ashey
          </p>
        </div>
      </div>

      <div className="tiny">
        <img src="assets/images/Tiny.png" alt="tiny" />
      </div>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
}
