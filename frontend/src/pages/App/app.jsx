import "./app.scss";
import { Cabe } from "../../components/cabecalho/head.jsx";
import Card from "../../components/Card/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import { useState } from "react";

export default function App() {
    return (
        <div className="secao-landing">
            <div>
                <Cabe />
            </div>

            <div className="land">
                <img
                    src="assets/images/PRODUOS-Photoroom1.png"
                    alt=""
                    width={510}
                />
                <img src="assets/images/cab-loiro1.png" alt="" width={512} />
            </div>

            <img
                className="ji"
                src="assets/images/group28.png"
                alt=""
                width={300}
            />

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



        </div>
    );
}
