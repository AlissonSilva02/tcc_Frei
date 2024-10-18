import "./index.scss";

export default function Light() {


    
    return (
        <div className="light">
            <header>
                <div className="cabecalho">
                    <img src="assets\images\light.png" alt="" height={70}/>

                    <div className="links">
                        <h1><a href="#servicos">Serviços</a></h1>
                        <h1><a href="#capabilidades">Capabilidades</a></h1>
                        <h1><a href="#sobre">Sobre nós</a></h1>
                        <h1><a href="#contato">Contato</a></h1>
                    </div>
                </div>

            </header>

            <section>
                <div className="banner">
                    
                        <div className="nome">
                       <img src="assets\images\LightDigital.png" alt="" width={600} />
                         </div>
                    <img src="assets\images\Make.png" width={1343} height={400} alt="" />
                </div>
            </section>

            <section className="servicos" id="servicos">
  <div className="servicos_a1">
    <h1>Serviços</h1>
    <div className="services">
      <h1>web <br /> e <br /> app design</h1>
      <h1>inteligencia <br /> artificial</h1>
      <h1>redes <br /> e <br /> internet</h1>
      <h1 className="ferran">BPM</h1>
    </div>
    <div className="images">
      <img className="sla" src="assets/images/codigo.png" alt="" />
      <img src="assets/images/floating.png" alt="" />
      <img src="assets/images/inter.png" alt="" />
      <img src="assets/images/Getty.png" alt="" />
    </div>
  </div>

  <div>
    <div className="services">
      <h1>E-commerce</h1>
      <h1>Equipamento <br /> Hospitalar</h1>
      <h1>Produção</h1>
      <h1>Bancário</h1>
    </div>
    <h1 id="capabilidades">Capabilidades</h1>
    <div className="images">
      <img src="assets/images/eshop.png" alt="" />
      <img src="assets/images/engenharia.png" alt="" />
      <img src="assets/images/eletrotecnica.png" alt="" />
      <img src="assets/images/bank.png" alt="" />
    </div>
  </div>
</section>


            <section>
                <div className="sobre" id="sobre">
                    <h1>Sobre nós</h1>
                        
                    <h4>
                        Bem-vindo à Light Digital! Somos uma empresa dedicada a iluminar o
                        caminho digital das empresas e pessoas, trazendo soluções inovadoras
                        e eficientes para suas necessidades tecnológicas. 
                         Nosso foco é criar
                        sites modernos, funcionais e personalizados que refletem a essência
                        do seu negócio, além de oferecer serviços de instalação de redes que
                        garantem conectividade rápida e segura.  <br />  <br />
                        Na Light Digital,
                        acreditamos que a tecnologia deve ser acessível, prática e capaz de
                        transformar a forma como você interage com o mundo. Nossa equipe é
                        composta por profissionais experientes e apaixonados pelo que fazem,
                        sempre prontos para ouvir suas necessidades e transformar suas
                        ideias em realidade.  <br /> <br /> Estamos comprometidos em entregar resultados de
                        alta qualidade, com um atendimento próximo e personalizado. Seja
                        desenvolvendo o site dos seus sonhos ou instalando uma rede robusta
                        para o seu escritório, estamos aqui para tornar o processo simples e
                        eficaz. <br /> <br /> Conte conosco para ser o parceiro que você pode confiar na
                        sua jornada digital. Na Light Digital, fazemos a tecnologia brilhar
                        ao seu favor!
                    </h4>
                </div>
            </section>

            <div className="sobre">
                <button className="contato">
                    <h2>Solicite um orçamento</h2>
                </button>{" "}
                <img src="" alt="" />
                <h1 className="con" id="contato">Contato</h1>
                <p>
                    Estamos prontos para ajudar você a dar o próximo passo na sua jornada
                    digital! Entre em contato com a Light Digital pelos canais abaixo:

                    <li> Telefone/WhatsApp: (11) 99416-1401 </li>
                    <li> E-mail: contato@lightdigital.com.br </li>
                    <li>Horário de Atendimento: Segunda a Sexta, das 9h às 18h </li>
                    
                    Siga-nos nas redes sociais para ficar por dentro das novidades e dicas sobre
                    tecnologia. Vamos juntos fazer a tecnologia brilhar ao seu favor!
                </p>
            </div>

            <section>
                <div className="rodape">

                <img src="assets\images\light.png" alt="" height={70}/>
                    <img src="assets\images\LightDigital.png" alt=""  height={70} />
                    

                </div>



            </section>



        </div>
    );
}
