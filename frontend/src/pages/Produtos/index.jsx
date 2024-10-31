import "./index.scss";

import MenuUsuario from "../../components/MenuUsuario/index.jsx";
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import Card from "../../components/CardProduto/index.jsx";

import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Produtos(){
    

    return(
        <div className="pagina-produtos">
            <MenuUsuario/>
            <Cabe pesquisar={true}/>
        </div>
    )
}