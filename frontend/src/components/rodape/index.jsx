import "./index.scss";
import { Link } from "react-router-dom";

export default function Rodape() {
    return (
        <div className="secao-rodape">
            <div className="container_superior">
                <div className="link_admin">
                    <div className="links">
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            <h3>Inicio</h3>
                        </Link>

                        <Link
                            to={"/produtos"}
                            style={{ textDecoration: "none" }}
                        >
                            <h3>Produtos</h3>
                        </Link>

                        <Link to={"/sobre"} style={{ textDecoration: "none" }}>
                            <h3>Sobre Nós</h3>
                        </Link>

                        <Link to={"/ajuda"} style={{ textDecoration: "none" }}>
                            <h3>FAQ</h3>
                        </Link>
                    </div>

                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <div className="admin">
                            <h3>Login</h3>
                        </div>
                    </Link>

                   
                </div>

                <div className="logo_redes">
                    <div className="container_intermediario">
                         <img 
                            className="logo"
                            src="/assets\images\logo\Ashey-logo.svg"
                            alt="logo"
                        />

                        <div className="redes_sociais">
                            <div className="redes">
                                <img
                                    src="/assets/images/RedesSociais/face.svg"
                                    alt="face"
                                />
                                <p>Ashey_Ofc</p>
                            </div>

                            <div className="redes">
                                <img
                                    src="/assets/images/RedesSociais/instagram.svg"
                                    alt="insta"
                                />
                                <p>Ashey_Ofc</p>
                            </div>

                            <div className="redes">
                                <img
                                    src="/assets/images/RedesSociais/frame.svg"
                                    alt="yt"
                                />
                                <p>(11) 94033-0018</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="linha"></div>
            <p className="copyright">© 2024 Copyright. Ashey</p>
        </div>
    );
}
