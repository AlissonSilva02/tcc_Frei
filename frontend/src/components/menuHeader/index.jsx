import "./index.scss";
import { useState } from "react";
import SideBar from "../menuSidebar";

export default function Menu() {
    const [sidebar, setSidebar] = useState(false);

    //alterna entre true e false
    function showSidebar() {
        setSidebar(!sidebar)
    } 

    return (
        <div className="componente-menu">
            <div className="container-menu">
                <svg onClick={showSidebar} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
                {sidebar && <SideBar active={setSidebar} />} 
            </div>
        </div>
    );
}
