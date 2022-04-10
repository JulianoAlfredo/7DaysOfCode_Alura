import React from "react";
import MenuComponent from "./components/menuComponent/menu";
import SubmitComponent from "./components/submitComponent/sbmt";
export default function MainPage(){
    return(
        <div className="mainPage">
            
            <div className="menu">
                <MenuComponent />
             </div>

             <div>
                 <SubmitComponent />
             </div>
        </div>
        
    )
}