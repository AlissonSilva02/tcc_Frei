import "./index.scss";

export default function Rodape() {
  return (
    <div className="secao-rodape">

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
    </div>
  );
}
