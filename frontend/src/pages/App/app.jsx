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
                    
                    
                />
               
            </div>


            <div className="catch">

                <img className="garanta" src="assets/images/gr.png" alt="" />

                <hr className="gold" />

                <h2>Conheça a nossa coleção de produtos de autocuidado</h2>

                <button>Ver mais</button>

            </div>

            
            
            <div className="">
                <img className="garanta" src="assets/images/grou.png" alt="" width={250} />
                </div>

            <div className="categoria">

            <img src="grou.png" alt="" />


            <div className="dona">
            <div className="nomes">
                
                <div className="cat1"> 

                <img className="creme" src="assets/images/creme1.png" alt="" />
                <img className="verde" src="assets/images/garra1.png" alt="" />
                </div>

                <div className="cat2">
                    <img className="azul" src="assets/images/makeup_blue2.png" alt="" />
                </div>

                


                <div className="cat3">
                    <img className="amarelo" src="assets/images/pote_amarelo1.png" alt="" />
                    <img  className="roxo" src="assets/images/perfum.png" alt="" />
                </div>
           

            </div>

         </div>


          



            <div>
             <footer>
               <Rodape/>  
             </footer>
            </div>

            <link rel="stylesheet" href="" />

        </div>
        </div>
    );
}
