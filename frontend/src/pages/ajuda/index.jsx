import Rodape from '../../components/rodape'
import Menu from '../../components/menu'
import Cabe from '../../components/cabecalho'
import iconeHome from "../../assets/home.svg";
import './index.scss'

export default function (){
    return(
        <div>
            <header>
            <Menu
                    itens={[
                        {
                            icone: iconeHome,
                            nome: "Home",
                        },
                        {
                            icone: iconeHome,
                            nome: "Outro Home",
                        },
                        {
                            nome: "item sem icone",
                        },
                    ]}
                />
                <Cabe />
            </header>
                    <main>
                        <div className='pagina-ajuda'>
                            <div className='voltar'>
                                <img src="/assets/images/Arrowleft.png" alt="seta" />
                                <h1>VOLTAR</h1>
                                <hr className='linha'/>
                            </div>
                            <div className=''>
                                <h1>Como podemos ajudar?</h1>

                                <h3>Não encontrei um produto</h3>
                                <h3>Quero fazer parte da equipe</h3>
                                <h3>Quais são os horários de atendimento ao cliente ?</h3>
                            </div>
                        </div>
                    </main>
            <footer>
                <Rodape/>
            </footer>

        </div>
    )
}