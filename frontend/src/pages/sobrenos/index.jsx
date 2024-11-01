import Cabe from "../../components/cabecalho";
import MenuUsuario from "../../components/MenuUsuario";

import Rodape from "../../components/rodape";
import MenuUsuario from "../../components/MenuUsuario/index.jsx";
import "./index.scss";

export default function Sobre() {
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

                <div className="comments-txt">


				</div>

                <div className="comentarios">
					<div className="comments-title"> 
						<h2>Comentarios</h2>
					</div>

                    <div className="comments-txt">
                        <img
                            className="seta"
                            src="assets/images/seta.esq.png"
                            alt=""
                        />
                        <h3 className="pe">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium cupiditate alias quibusdam non
                            placeat tempora, temporibus amet. Accusantium, enim
                            consequuntur explicabo blanditiis cum exercitationem
                            totam praesentium saepe possimus beatae. Vero.
                        </h3>
                        <img
                            className="seta"
                            src="assets/images/seta.direita.png"
                            alt=""
                        />
                    </div>
                </div>

        <div className="yap0">
          <div className="yap1">
            <h2>
              Nossos cosméticos são formulados com ingredientes de alta
              qualidade, combinando inovação e respeito pelo meio ambiente.
              Junte-se a nós e descubra como a AuraStyle pode transformar sua
              rotina de cuidados pessoais.
            </h2>
          </div>
		  </div>

                <hr />
              

                <div className="yap3">
                    <h2>
                        Com carinho,
                        <br />
                        Equipebr Aurastyle
                    </h2>
                </div>
            </div>

            <div>
                <img className="tiny " src="assets/images/tiny.png" alt="" />
            </div>

            <footer>
                <Rodape />
            </footer>
        </div>
    );
}
