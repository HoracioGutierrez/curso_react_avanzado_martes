import React from 'react'
import { connect } from "react-redux"

const Header = ({links}) => 
    <header>
        <h1>React Avanzado</h1>
        {links.map((link,i)=>
            <a href="#" key={i}>{link}</a>
        )}
    </header>


/* let fn = () => {} */

/* let fn = (store) => {
    return { 
        links : store.links
     }
}
 */


/* let fn = store => {

    let {links} = store

    return { 
        links : links
    }
} */

/* let fn = (store) => {

    let {links} = store

    return { links }
} */

/* let fn = (store) => {
    return {links} = store
} */


//let fn = ({links}) => ({ links })


export default connect(
    ({links})=>({links})
)(Header)
