import React from "react";
import {link} from "react-router-dom";
import Style from "./Header.module.css"

function Header(){
    return(
        <div className={Style.Header}>

         <h1>Eventos</h1>
          <nav>
              <link to="/"> Home </link>
              <link to="/eventos"> Eventos </link>
              <link to="/cadastrar"> Cadastrar Evento </link>
          </nav>

        </div>
    )
}

export default Header