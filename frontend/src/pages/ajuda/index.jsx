import Rodape from '../../components/rodape'
import { Link } from 'react-router-dom';
import './index.scss';
import Cabe from '../../components/cabecalho';
import Menu from '../../components/menu';

export default function () {
    return (
        <div>
            <header>
            <Menu
                    itens={[
                        {
                            icone: "/assets/images/menu/home.svg",
                            nome: "Home",
                        },
                        {
                            icone: "/assets/images/menu/home.svg",
                            nome: "Outro Home",
                        },
                        {
                            nome: "Sobre",
                        },
                    ]}
                />
                <Cabe
                    pesquisar={false}
                />
            </header>
            <main>
                <div className='pagina-ajuda'>
                    <div className="botao-voltar">
                        <Link to={'/'}>
                            <div className="voltar">
                                <img src="/assets/images/Arrowleft.png" alt="seta" width={30} />
                                <h1>VOLTAR</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='ajuda'>

                        <div>
                            <h1>Como podemos ajudar ?</h1>

                            <div className='perguntasErespostas'>
                                <h3>Não encontrei um produto</h3>
                                <details>
                                    <summary></summary>
                                    <p className='asdf'>Se você não encontrou o que procura na nossa vitrine, entre em contato conosco pelo WhatsApp. Podemos ajudar a localizar o produto desejado ou oferecer sugestões similares.</p>
                                </details>
                            </div>

                            <div className='perguntasErespostas'>
                                <h3>Quero fazer parte da equipe</h3>
                                <details>
                                    <summary></summary>
                                    <p>Ficamos felizes com seu interesse! Envie uma mensagem pelo WhatsApp com seu currículo e uma breve apresentação. Nossa equipe avaliará e entrará em contato se houver uma oportunidade.</p>
                                </details>
                            </div>

                            <div className='perguntasErespostas'>
                                <h3>Quais são os horários de atendimento ao cliente ?</h3>
                                <details>
                                    <summary></summary>
                                    <p>Atendemos pelo WhatsApp de segunda a sexta-feira, das 9h às 18h. Sinta-se à vontade para nos enviar uma mensagem durante esse horário!</p>
                                </details>
                            </div>

                            <div className='perguntasErespostas'>
                                <h3>Como posso comprar os produtos?</h3>
                                <details>
                                    <summary></summary>
                                    <p>Para comprar, basta enviar uma mensagem pelo WhatsApp com os produtos que você deseja. Nossa equipe irá ajudá-lo com o pedido.</p>
                                </details>
                            </div>

                            <div className='perguntasErespostas'>
                                <h3>Qual é o prazo de entrega?</h3>
                                <details>
                                    <summary></summary>
                                    <p>O prazo de entrega varia de acordo com a sua localização, mas geralmente leva de 3 a 10 dias úteis após a confirmação do pagamento.</p>
                                </details>
                            </div>

                            <div className='perguntasErespostas'>
                                <h3>O que faço se eu tiver dúvidas sobre um produto?</h3>
                                <details>
                                    <summary></summary>
                                    <p>Sinta-se à vontade para nos enviar suas dúvidas pelo WhatsApp. Nossa equipe está pronta para ajudar com recomendações e informações detalhadas.</p>
                                </details>
                            </div>

                            <div className='perguntasErespostas'>
                                <h3>Como posso entrar em contato com o suporte ao cliente?</h3>
                                <details>
                                    <summary></summary>
                                    <p>Você pode entrar em contato conosco pelo WhatsApp a qualquer momento durante nosso horário de atendimento. Estamos aqui para ajudar!</p>
                                </details>
                            </div>
                        </div>
                    </div>

                    <img src="/assets/images/faq/faq.svg" alt="" />
                </div>
            </main>
            <footer>
                <Rodape />
            </footer>

        </div>
    )
}