import Menu from "../menu/index.jsx";
import "./index.scss";

export default function Cabecalho_sem() {
  return (
    <div className="secao-cabecalho">
      <Menu
        itens={[
          {
            icone: "/assets/images/menu/home.svg",
            nome: "Home",
          },
          {
            icone: "/assets/images/menu/home.svg",
            nome: "Outro Home",
          },
          {
            nome: "item sem icone",
          },
        ]}
      />
      <div className="super">
        <div className="logo">
          <img
            className="logo-ashey"
            src="/assets/images/Ashey_Logo.svg"
            alt="logo"
            width="65%" 
          />
        </div>
      </div>
    </div>
  );
}
