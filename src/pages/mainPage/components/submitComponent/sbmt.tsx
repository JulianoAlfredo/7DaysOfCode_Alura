import React from "react";

import './sbmtCss.css'
import treeImage from '../../../../img/treeImage.svg'
export default function SubmitComponent(){
    return(
        <div className='main-sbmt-component'>
            <div className="text-div">
                <p>LOREM</p>
            </div>
            <div className='image-div'>
                <img src={treeImage} />
            </div>
        </div>
    )
}