import React , { useContext } from 'react'
import {NavLink} from "react-router-dom"
import context from "../../api/context"

const Header = () => {
 
    let {estado} = useContext(context)
    let {links} = estado

    return(
        <header>
            <NavLink to="/" exact>
                <h1>React Avanzado</h1>
            </NavLink>
            <nav>
                {links.map((link,i)=>
                    <NavLink to={`/${link}`} key={i}>{link}</NavLink>
                )}
            </nav>
        </header>
    )
}


export default Header
