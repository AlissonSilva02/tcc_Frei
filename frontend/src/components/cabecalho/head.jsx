import { useState } from "react";
import "./head.scss";

export function Cabe() {
    const [ativado, setAtivado] = useState(false);
    const [visivel, setVisivel] = useState(false);

    function Abrirmenu() {
        setVisivel(!visivel);
    }

    const barramenu = () => {
        return (
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                    <li>Menu item 1</li>
                    <li>Menu item 2</li>
                    <li>Menu item 3</li>
                </ul>
            </div>
        );
    };

    return (
        <div className="secao-cabecalho">
            <div className="sub">
                <div className="men">
                    <button onClick={barramenu}>
                        <img
                            src="/assets\images\menu.png"
                            alt="menu"
                            width={53}
                            height={53}
                        />
                    </button>
                    <h1>Menu</h1>
                </div>
                <div className="logo">
                    <img
                        className="aura"
                        src="/assets/images/logo1.png"
                        alt="logo"
                        width={370}
                    />
                </div>
            </div>

            <div className="pesquisa">
                <input className="pesq" type="text" placeholder="Pesquisar" />
                <img
                    className="lup"
                    src="\assets\images\search.png"
                    alt="pesquisar"
                    width={25}
                />
            </div>
        </div>
    );
}
