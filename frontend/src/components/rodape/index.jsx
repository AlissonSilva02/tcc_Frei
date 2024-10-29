import "./index.scss";
import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <div className="secao-rodape">
      <div className="container_superior">
        <div className="links">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h3>Inicio</h3>
          </Link>

      <div className="botoes">
        <a href="/">Inicio</a>
        <a href="/produtos">Produtos</a>
        <a href="/sobre">Sobre nós</a>
        <a href="/ajuda">FAQ</a>
      </div>

       <a href="/login">Admin</a>
      <div className="cor">

        <img className="logo" src="assets\images\logo\Ashey-logo.svg" alt="logo" />

        <div className="grupo">
          <img src="assets/images/RedesSociais/face.png" alt="face" />

          <img src="assets/images/RedesSociais/insta.png" alt="insta" />

          <img src="assets/images/yt.png" alt="yt" />
         
        </div> 
        <div className="linha"></div>
      </div>
      <h3>© 2024 Copyright.  Ashey</h3>
          <Link to={"/produtos"} style={{ textDecoration: "none" }}>
            <h3>Produtos</h3>
          </Link>

          <Link to={"/sobre"} style={{ textDecoration: "none" }}>
            <h3>Sobre Nós</h3>
          </Link>

          <Link to={"/ajuda"} style={{ textDecoration: "none" }}>
            <h3>FAQ</h3>
          </Link>
        </div>

        <Link to={"/login"}  style={{ textDecoration: "none" }}>
          <div className="admin">
            <h3>Admin</h3>
          </div>
        </Link>

        <div className="cor">
          <img
            className="logo"
            src="assets\images\logo\Ashey-logo.svg"
            alt="logo"
          />

          <div className="grupo">
            <div className="redes">
              <img src="assets/images/RedesSociais/face.png" alt="face" />
              <p>Ashey_Ofc</p>
            </div>

            <div className="redes">
              <img src="assets/images/RedesSociais/insta.png" alt="insta" />
              <p>Ashey_Ofc</p>
            </div>

            <div className="redes">
              <img src="assets/images/yt.png" alt="yt" />
              <p>(11)94033-0018</p>
            </div>
          </div>
        </div>
        <div className="linha"></div>
      </div>
      <p className="copyright">© 2024 Copyright. Ashey</p>
    </div>
  );
}
