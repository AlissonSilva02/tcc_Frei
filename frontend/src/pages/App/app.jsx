import "./app.scss";
import { Cabe } from "../../components/cabecalho/index.jsx";
import Card from "../../components/Card/index.jsx";
import Rodape from "../../components/rodape/index.jsx";

export default function App() {
    return (
        <div className="secao-landing">
            <div>
                <Cabe />
            </div>

            <div className="land">
                <img
                    src="assets/images/banner_21.png"
                    alt=""
                    width={1200}
                    height={600}
                    
                />
               
            </div>


            <div className="catch">

                <img className="garanta" src="assets/images/garanta.png" alt="" />

                <hr className="gold" />

                <h2>Conheça a nossa coleção de produtos de autocuidado</h2>

            </div>


            <div className="categoria">

            <img src="grou.png" alt="" />


            <div className="nomes">
                <thead>
                <th className="th"> Cabelos </th>
                <th  className="th"> Perfumes </th>
                <th  className="th"> Skin-care </th>
                <th  className="th"> Maquiagem </th>
                </thead>
            </div>

            </div>

          <div className="mestre">

            <div className="secundario">

                <img src="" alt="" />





            </div>


          </div>

            <div className="cards">
                <div className="c2">
                    <Card
                        imagem="assets\images\Rectangle25.png"
                        alt="Product imagem produto"
                        preco="10.99"
                        nome="Nome do produto"
                    />
                </div>
            </div>


            <div>
             <footer>
               <Rodape/>  
             </footer>
            </div>

            <link rel="stylesheet" href="" />

        </div>
    );
}
