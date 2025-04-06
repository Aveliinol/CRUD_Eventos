import React from "react";
import { Link } from "react-router-dom"
import Style from "./HeaderEvento.module.css"

function HeaderEvento(){
    return(
        
        <header className={Style.Header}>
         <h1>Eventos</h1>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/eventos">Eventos</Link>
              <Link to="/cadastrar">Cadastrar Evento</Link>
              <Link to="/editar">Editar Evento</Link>
          </nav>
        </header>
        
    )
}

export default HeaderEvento