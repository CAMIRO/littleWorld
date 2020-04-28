import React from 'react'
import { Switch, Route } from "react-router-dom";

// Views
import { Desserts } from './views/desserts'
import { FastFood } from './views/fastFood'
import { Contact } from './views/contact'


interface routesProps {
}

export const Routes: React.FC<routesProps> = ({}) => {
    
    return (
        <>
        <Switch>
        <Route path="/fastfood">
            <FastFood />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route exact path="/">
            <Desserts />
        </Route>
        </Switch>
        </>
    )
}