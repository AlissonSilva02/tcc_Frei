import "./index.scss";
import Menu from "../../components/menu/index.jsx";

import Cabe from "../../components/cabecalho/index.jsx";

export default function TesteMenu() {
    return (
        <div className="pagina-testMenu">
            <div>
                <Menu
                    itens={[
                        {
                            icone: '/assets/images/menu/home.svg',
                            nome: "Home",
                        },
                        {
                            icone: '/assets/images/menu/home.svg',
                            nome: "Outro Home",
                        },
                        {
                            nome: "item sem icone",
                        }
                    ]}
                />
            </div>

            <Cabe 
                pesquisar={true}
            />
        </div>
    );
}
