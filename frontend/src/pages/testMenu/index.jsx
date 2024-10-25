import "./index.scss";
import Menu from "../../components/menu/index.jsx";

import iconeHome from "../../assets/home.svg";

import Cabe from "../../components/cabecalho/index.jsx";

export default function TesteMenu() {
    return (
        <div className="pagina-testMenu">
            <div>
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
            </div>

            <Cabe />
        </div>
    );
}
