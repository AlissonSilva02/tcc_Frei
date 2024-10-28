import Cabecalho_sem from "../../components/cabecalho_sem_pesquisa";
import Rodape from "../../components/rodape";
import './index.scss'

export default function Sobre() {
  return (
    <div>
    <div className="pagina-SobreNos">
      <div className="sobre">
        <header>
          <Cabecalho_sem />
        </header>


        
        <div className="fale">
          <div className="boto">
            <button className="butao">Fale Conosco</button>
          </div>
          </div>

        
          <div className="nossa">

            <div className="comments-title">
            <h2>Nossa Missão</h2>
            <br />
            <br />
            <br />
          </div>

          <div className="comments-txt">
            <h3 className="pe"  >
              Acreditamos que cada pessoa é única e merece produtos que se
              alinhem com sua individualidade e valores. Por isso, trabalhamos
              para oferecer soluções eficazes que promovam sua beleza natural e
              promovem a autoaceitação.
            </h3></div>
          </div>


          <div className="comentarios0">
             <h2>Comentarios</h2>
              
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
          </div>

            <hr />
            <br />
            <br />
        
          <div className="yap3">
          <h2>
            Com carinho,
            <br />
            Equipebr Aurastyle
          </h2>
          </div>
       
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
