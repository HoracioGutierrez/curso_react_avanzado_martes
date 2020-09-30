import React from 'react'
import {Route,Switch} from "react-router-dom"
import Home from "../paginas/Home"
import Usuarios from "../paginas/Usuarios"
import Tareas from "../paginas/Tareas"
import Acceso from "../paginas/Acceso"
import Cuenta from "../paginas/Cuenta"
import Logout from "../paginas/Logout"
import {PrivateRoute, PublicRoute} from "../componentes/CustomRoutes"

const Main = () => {

    return (
    <main>
        <Switch>
            <Route path="/" exact component={Home}/>
            <PrivateRoute path="/usuarios" component={Usuarios}/>
            <PrivateRoute path="/tareas" component={Tareas}/>
            <PrivateRoute path="/cuenta" component={Cuenta}/>
            <PrivateRoute path="/logout" component={Logout}/>
            <PublicRoute path="/acceso" component={Acceso}/>
        </Switch>   
    </main>
    )
}
    

export default Main
