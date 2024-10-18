import "./index.scss";
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx"
import { Link, useNavigate } from "react-router-dom";


export default function App() {
  return (
    <div className="secao-landing">
      <div>
        <Cabe />
      </div>

      
      <div className="land">
        <img src="assets/images/banner_21.png" alt="" width={1200} />
      </div>

      <div className="catch">
        <img className="garanta" src="assets/images/gr.png" alt="" />

        <h2>Conheça a nossa coleção de produtos de autocuidado</h2>

        <button className="ver">Ver mais</button>
      </div>

      <div>
        <img
          className="garanta"
          src="assets/images/grou.png"
          alt=""
          width={250}
        />
      </div>

      <div className="categoria">
        <img src="grou.png" alt="" />

        <div className="dona">
          <div className="nomes">
            <div className="cat1">

              <Link><div className="crem">
                <h1 className="tec">Cremes</h1>
                <img className="creme" src="assets/images/creme1.png" alt="" />
              </div></Link>
             
              <Link><div className="verd">

                {" "}
                <h1>Skin-care</h1>
                <img className="verde" src="assets/images/garra1.png" alt="" />
              </div></Link>
            </div>

            <Link><div className="cat2">


              <h1 className="tec">Maquiagem</h1>
              
              <img
                className="azul"
                src="assets/images/makeup_blue2.png"
                alt=""
              />
            </div></Link>

            <div className="cat3">
              
              <Link><div className="masc">
                <h1 className="tec">Máscaras</h1>
                <img
                  className="amarelo"
                  src="assets/images/pote_amarelo1.png"
                  alt=""
                />
              </div></Link>

             <Link> <div className="oil">
                <h1 className="tec">Perfumes</h1>
                <img className="roxo" src="assets/images/perfum.png" alt="" />


              </div></Link>
            </div>
          </div>
        </div>

        <div>
          <footer>
            <Rodape />
          </footer>
        </div>

        <link rel="stylesheet" href="" />
      </div>
    </div>
  );
}
