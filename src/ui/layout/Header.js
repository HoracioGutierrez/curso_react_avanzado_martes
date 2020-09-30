import React , { useContext } from 'react'
import {NavLink} from "react-router-dom"
import context from "../../api/context"

const Header = () => {
 
    let contexto = useContext(context)
    let [estado] = contexto
    let {links,logged} = estado
    console.log(logged)
    return(
        <header>
            <NavLink to="/" exact>
                <h1>React Avanzado</h1>
            </NavLink>
            <nav>
                {
                    logged ?
                    links.map((link,i)=>
                        <NavLink to={`/${link}`} key={i}>{link}</NavLink>
                    ) : <NavLink to="/acceso">acceso</NavLink>
                }
            </nav>
        </header>
    )
}


export default Header
