import "./index.scss";

export default function Cabe() {
    return (
        <div className="secao-cabecalho">
            <div className="super">
                <div className="logo">
                    <img
                        className="aura"
                        src="/assets/images/Ashey_Logo.svg"
                        alt="logo"
                        width={370}
                    />
                </div>

                <div className="pesquisar">
                    <div className="pesquisa">
                        <input
                            type="search"
                            placeholder="Pesquisar"
                        />

                        <img
                            src="\assets\images\search.png"
                            alt="pesquisar"
                            width={25}
                            height={25}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
