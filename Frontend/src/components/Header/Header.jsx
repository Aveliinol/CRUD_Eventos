import React from "react";
import { Link } from "react-router-dom"
import Style from "./Header.module.css"

function Header(){
    return(
        
        <header className={Style.Header}>
         <h1>Eventos</h1>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/eventos">Eventos</Link>
          </nav>
        </header>
        
    )
}

export default Header