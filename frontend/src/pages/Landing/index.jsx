import "./index.scss";
import MenuUsuario from "../../components/MenuUsuario/index.jsx"
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <div className="pagina-landing">
      <header>
      <MenuUsuario/>
        <Cabe/>
      </header>

      <div className="secao-landing0">
        <div className="secao-landing">
          <div className="land">
            <img className="banner" src="assets/images/banner_21.png" alt="" />
          </div>

          <div className="catch">
            <img className="garanta" src="assets/images/gr.png" alt="" />

            <h2>Conheça a nossa coleção de produtos de autocuidado</h2>

           <Link to='/produtos'> <button className="ver">Ver mais</button></Link>
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
                  
                    <div className="crem">
                      <h1 className="tec">Cremes</h1>
                      <img
                        className="creme"
                        src="assets/images/creme1.png"
                        alt=""
                      />
                    </div>
                  

                  
                    <div className="verd">
                      {" "}
                      <h1>Skin-care</h1>
                      <img
                        className="verde"
                        src="assets/images/garra1.png"
                        alt=""
                      />
                    </div>
                  
                </div>

                
                  <div className="cat2">
                    <h1>Maquiagem</h1>

                    <img
                      className="azul"
                      src="assets/images/makeup_blue2.png"
                      alt=""
                    />
                  </div>
                

                <div className="cat3">
                  <div className="amarel">
                    <h1 className="tec">Máscaras</h1>
                    <img
                      className="amarelo"
                      src="assets/images/pote_amarelo1.png"
                      alt=""
                    />
                  </div>

                  
                    {" "}
                    <div className="rox">
                      <h1 className="tec">Perfumes</h1>
                      <img
                        className="roxo"
                        src="assets/images/perfum.png"
                        alt=""
                      />
                    </div>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="rodape">
            <footer>
              <Rodape />
            </footer>
          </div>

          <link rel="stylesheet" href="" />
        </div>
      </div>
    </div>
  );
}
