import Cabe from "../../components/cabecalho";
import Rodape from "../../components/rodape";
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
}
