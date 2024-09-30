import "./index.scss";
import { Cabe } from "../../components/cabecalho/head.jsx";
import Card from "../../components/Card/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import Card_big from "../../components/Card_grande/index.jsx";

export default function Produto() {
  return (
    <div className="pagina_produto">
      <Cabe />

      <div className="botao">
<button className="but"> <img src="assets\images\Arrowleft.png" alt="" height={40} /><h3>Voltar</h3></button>
      </div>

      <div className="cardB">
        <Card_big  className='big'
           imagem="assets\images\ima.png" 
           alt="Product imagem produto"
           preco="10.99"
           nome="Nome do produto"
         
         />
      </div>

      <div className="descricao">

        <hr />

        <h2>Descricao</h2>
        <p>
          Material de Alta Qualidade: Cerdas feitas de nylon flexível, ideais
          para desembaraçar sem puxar ou quebrar os fios. Design Ergonômico:
          Cabo antideslizante e confortável, projetado para fácil manuseio.
          Desembaraço Eficiente: Ideal para todos os tipos de cabelo, desde os
          mais finos até os mais grossos e encaracolados. Uso Versátil: Perfeita
          para uso diário, tanto em cabelos secos quanto molhados. Cuidado com o
          Couro Cabeludo: Cerdas com pontas arredondadas, que massageiam o couro
          cabeludo e estimulam a circulação sanguínea. Fácil de Limpar: Material
          resistente à água e de fácil manutenção, garantindo uma escova sempre
          limpa e pronta para o uso.

        </p>
        
<hr />

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
