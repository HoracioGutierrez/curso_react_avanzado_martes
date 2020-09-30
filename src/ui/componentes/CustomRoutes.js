import React , {useContext} from "react"
import {Redirect,Route} from "react-router-dom"
import context from "../../api/context"


export let PublicRoute = ({path,component,...props}) => {

    let contexto = useContext(context)
    let [estado] = contexto
    let {logged} = estado

    if(logged){
        return <Redirect to="/cuenta"/>
    }else{
        return <Route path={path} component={component} {...props}/>
    }

}

export let PrivateRoute = ({path,component,...props}) => {
    let contexto = useContext(context)
    let [estado] = contexto
    let {logged} = estado

    if(logged){
        return <Route path={path} component={component} {...props}/>
    }else{
        return <Redirect to="/acceso"/>
    }
}