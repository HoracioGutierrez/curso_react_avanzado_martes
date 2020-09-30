import React , {useEffect} from 'react'
import Pagina from '../componentes/Pagina'

const Cuenta = () => {


    
    useEffect(() => {
        
        let usuario = localStorage.getItem("usuario")
        
        fetch("/getUser?usuario="+usuario)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })

    }, [])

    return (
        <Pagina titulo="Cuenta">
            
        </Pagina>
    )
}

export default Cuenta
