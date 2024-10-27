import Menu from "../menu/index.jsx";
import "./index.scss";
import iconeHome from "../../assets/home.svg";

export default function Cabecalho_sem() {
  return (
    <div className="secao-cabecalho">
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
      <div className="super">
        <div className="logo">
          <img
            className="logo-ashey"
            src="/assets/images/Ashey_Logo.svg"
            alt="logo"
            
          />
        </div>
      </div>
    </div>
  );
}
