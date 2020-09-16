import React , { useContext } from 'react'
import context from "../../api/context"

const Header = () => {
 
    let {links} = useContext(context)

    return(
        <header>
            <h1>React Avanzado</h1>
            {links.map((link,i)=>
                <a href="#" key={i}>{link}</a>
            )}
        </header>
    )
}


export default Header
