
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App/app.jsx";
import Tabela from "./pages/cadastrar/index.jsx";
import Consultar from "./pages/consultar/index.jsx";
import Light from "./pages/Light_digital/index.jsx";
import Produto from "./pages/Produto/index.jsx";

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<App />} />
                <Route path="/tabela" element={<Tabela />} />
                <Route path="/consultar" element={<Consultar />} />
                <Route path="/light" element={<Light />} />
                <Route path="/produto" element={<Produto />} />
                

            </Routes>
        </BrowserRouter>
    )

}