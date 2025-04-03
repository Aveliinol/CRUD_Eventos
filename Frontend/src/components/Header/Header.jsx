import React from "react";
import Style from "./Header.module.css"

function Header(){
    return(
        <div className={Style.Header}>

         <h1>Eventos</h1>
          <nav>
              <link to="/"> Home </link>
              <link to="/eventos"> eventos </link>
          </nav>

        </div>
    )
}

export default Header