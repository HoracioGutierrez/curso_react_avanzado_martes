import React from 'react'

const Pagina = (prop) => 
    <section>
        <h2>{prop.titulo?prop.titulo:"Template"}</h2>
        {prop.children?prop.children:null}
    </section>

export default Pagina