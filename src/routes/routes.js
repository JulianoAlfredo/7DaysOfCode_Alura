import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'



import MainPage from "../pages/mainPage/mainPage"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}