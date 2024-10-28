import "./index.scss";

export default function Cabecalho_login() {
  return (
    <div className="container">
      <div className="voltar">
        <a href="/">
          <img src="/assets/images/Arrowleft.png" alt="voltar" />
          <p>VOLTAR</p>
         
        </a> 
      </div>
    
      <div className="logo">
        <img src="/assets/images/logo/ashey-logo.svg" alt="Logo" width={400} />
      </div>
    </div>
  );
}
