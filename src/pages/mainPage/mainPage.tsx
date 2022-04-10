import React from "react";
import MenuComponent from "./components/menuComponent/menu";
import SubmitComponent from "./components/submitComponent/sbmt";
import svgBackground from "../../img/Vector.svg"
import "./main.css"
export default function MainPage(){
    return(
        <div className="mainPage">
            
            <div className="imgBackGround">
                <img  alt="VECTOR" src={svgBackground} />
            </div>
            
            <div className="menu">
                <MenuComponent />
             </div>

             <div className="sbmt">
                 <SubmitComponent />
             </div>

        </div>
        
    )
}