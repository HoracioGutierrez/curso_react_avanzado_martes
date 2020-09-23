import React from 'react'
import {Route,Switch} from "react-router-dom"
import Home from "../paginas/Home"
import Usuarios from "../paginas/Usuarios"
import Tareas from "../paginas/Tareas"
import Acceso from "../paginas/Acceso"

const Main = () => {

    return (
    <main>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/usuarios" component={Usuarios}/>
            <Route path="/tareas" component={Tareas}/>
            <Route path="/acceso" component={Acceso}/>
        </Switch>   
    </main>
    )
}
    

export default Main
