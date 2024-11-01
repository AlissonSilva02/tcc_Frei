import Cabe from "../../components/cabecalho";
import Rodape from "../../components/rodape";

import MenuUsuario from "../../components/MenuUsuario";

import "./index.scss";

export default function Sobre() {
  return (
    <>
      <div className="pagina-SobreNos">
        <div className="sobre">
          <header>
            <Cabe />
          </header>

          {/* Conteúdo da página */}
          <div className="fale">
            <div className="boto">
              <button className="butao">Fale Conosco</button>
            </div>

            <div className="nossa">
              <h2>Nossa Missão</h2>
            </div>

            <div className="comments-txt">
              <h3 className="pe">
                Acreditamos que cada pessoa é única e merece produtos que se
                alinhem com sua individualidade e valores...
              </h3>
            </div>
          </div>

          <div className="comentarios">
            <h2>Comentários</h2>
            <div className="comments-txt">
              <img className="seta" src="assets/images/seta.esq.png" alt="" />
              <h3 className="pe">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </h3>
              <img className="seta" src="assets/images/seta.direita.png" alt="" />
            </div>
          </div>

          <p>
            Nossos cosméticos são formulados com ingredientes de alta qualidade...
          </p>

          <div className="yap3">
            <h2>Com carinho,<br />Equipe Aurastyle</h2>
          </div>
        </div>
      </div>

      <img className="tiny" src="/assets/images/tiny.png" alt="" />
      <footer>
        <Rodape />
      </footer>
    </>
  );

    return (
        <div className="pagina-SobreNos">
            <div className="sobre">
                <header>
                    <MenuUsuario />
                    <Cabe />
                </header>
                <div className="faleConosco">
                    <button className="butao">Fale Conosco</button>
                </div>

                <div className="nossaMissao">
                    <h2>Nossa Missão</h2>
                    <p>
                        Acreditamos que cada pessoa é única e merece produtos
                        que se alinhem com sua individualidade e valores. Por
                        isso, trabalhamos para oferecer soluções eficazes que
                        promovam sua beleza natural e promovem a autoaceitação.
                    </p>
                </div>

                <div className="comentarios">
                    <h2>Comentarios</h2>

                    <div className="comments-txt">
                        <img
                            className="seta"
                            src="assets/images/seta.esq.png"
                            alt="seta"
                        />
                        <p>
							Este produto de cosmético é incrível! A qualidade
							é evidente desde a primeira aplicação - textura leve, fragrância suave e 
							resultados que realmente entregam o que prometem. É perfeito para quem busca 
							cuidados com a pele sem abrir mão de um toque de luxo.
                        </p>
                        <img
                            className="seta"
                            src="assets/images/seta.direita.png"
                            alt=""
                        />
                    </div>
                </div>

                <div className="recado">
                    <p>
                        Nossos cosméticos são formulados com ingredientes de
                        alta qualidade, combinando inovação e respeito pelo meio
                        ambiente. Junte-se a nós e descubra como a Ashey pode
                        transformar sua rotina de cuidados pessoais.
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
                <img src="assets/images/tiny.png" alt="tiny" />
            </div>

            <footer>
                <Rodape />
            </footer>
        </div>
    );
}
