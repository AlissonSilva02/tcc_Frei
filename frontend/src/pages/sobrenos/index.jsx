import Cabe from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import './index.scss'

export default function Sobre() {
  return (
    <div className="pagina-SobreNos">
      <div className="sobre">
        <header>
          <Cabe />
        </header>


        
        <div className="fale">
          <div>
            <button>Fale Conosco</button>
          </div>
          </div>

        
          <div className="nossa">
            <h1>Nossa Missão</h1>

            <h3>
              Acreditamos que cada pessoa é única e merece produtos que se
              alinhem com sua individualidade e valores. Por isso, trabalhamos
              para oferecer soluções eficazes que promovam sua beleza natural e
              promovem a autoaceitação.
            </h3>
          </div>

          <div className="comentarios">
            <h2>Comentarios</h2>
            
            <img src="assets/images/seta.esq.png" alt="" />{" "}
            <h2 className="pe">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium cupiditate alias quibusdam non placeat tempora,
              temporibus amet. Accusantium, enim consequuntur explicabo
              blanditiis cum exercitationem totam praesentium saepe possimus
              beatae. Vero.
            </h2>{" "}
            <img src="assets/images/seta.direita.png" alt="" />
          </div>

          <p>
            Nossos cosméticos são formulados com ingredientes de alta qualidade,
            combinando inovação e respeito pelo meio ambiente. Junte-se a nós e
            descubra como a AuraStyle pode transformar sua rotina de cuidados
            pessoais.
          </p>

          <hr />

          <p>
            Com carinho,
            <br />
            Equipebr Aurastyle
          </p>
        </div>

        <div>
          <img src="assets/images/tiny.png" alt="" />
        </div>

        <footer>
          <Rodape />
        </footer>

      </div>
    
  );
}
