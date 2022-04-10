import React from "react";

import './sbmtCss.css'
import treeImage from '../../../../img/treeImage.svg'
import emailVector from '../../../../img/emailvector.svg'

export default function SubmitComponent(){
    return(
        <div className='main-sbmt-component'>
            <div className="text-div">
                <p>Sua casa com as</p>
                <h1>melhores</h1>
                <h1>plantas</h1>
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <div className="button-input-submit">
                    <input placeholder="Insira seu email"></input>
                    <button>Assinar newsletter</button>
                </div>
            </div>
            <div className='image-div'>
                <img src={treeImage} />
            </div>
            
        </div>
    )
}