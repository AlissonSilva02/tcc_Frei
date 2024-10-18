import "./index.scss";

export default function Cabe() {
  
    return (
    <div className="super"> 
        <div className="secao-cabecalho">
            <div className="sub">
                <div className="men">
                    <button>
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
    </div>
    );
}
