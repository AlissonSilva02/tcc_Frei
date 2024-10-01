import "./index.scss";
import { Cabe } from "../../components/cabecalho/head.jsx";
import Card from "../../components/Card/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import Card_grande from "../../components/Card_grande/index.jsx";

export default function Produto() {
  return (
    <div className="pagina_produto">
      <Cabe />

      <div className="botao">
<button className="but"> <img src="assets\images\Arrowleft.png" alt="" height={40} /><h3>Voltar</h3></button>
      </div>

      <div className="cardG">
        <Card_grande  className='big'
           imagem="assets\images\ima.png" 
           alt="Product imagem produto"
           preco="10.99"
           nome="Nome do produto"
           categoria="Pentes/Escovas"
         
         />
     

</div>
        
        <div>  
        <h3>Produtos Relacionados</h3>

        <div className="related">

        <Card/>         
        <Card/>
        <Card/>
        <Card/>
        <Card/>


        </div>


        </div>



        <div>

        <Rodape/>

        </div>

      
    </div>
  );
}
