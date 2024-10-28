import "./index.scss";
import Menu from "../../components/menu/index.jsx";
import iconeHome from "../../assets/home.svg";

export default function Cabe({ pesquisar }) {
    return (
        <div className="secao-cabecalho">
            <div className="logo">
                <img
                    className="logo"
                    src="assets/images/logo/Ashey-Logo.svg"
                    alt="logo"
                />
            </div>

            <div className="navegacao">
                <h2>Inicio</h2>
                <h2>Produtos</h2>
                <h2>Sobre nós</h2>
            </div>

            {pesquisar && (
                <div className="pesquisa">
                    <input type="search" placeholder="Pesquisar" />

                    <img
                        src="/assets/images/search.png"
                        alt="pesquisar"
                        width={25}
                        height={25}
                    />
                </div>
            )}
        </div>
    );
}
