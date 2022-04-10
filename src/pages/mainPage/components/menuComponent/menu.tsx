import React from "react"
import logo from "../../../../img/logo.svg"
import './menu.css'
export default function MenuComponent(){
    return(
        <div className="menu-component">
            <img alt="LOGO CASA VERDE" src={logo} />
            <p> Como fazer / Ofertas / Depoimentos / Vídeos / Meu Carrinho </p>
        </div>
    )
}