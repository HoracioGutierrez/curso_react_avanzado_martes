import {createContext} from "react"

//La funcion createContext nos crea el nuevo espacio de almacenamiento de datos
let context = createContext()

//Provider es un HoC que alimenta la aplicacion con el valor del contexto
//Consumer es un componente que recibe el valor del contexto
export let {Provider,Consumer} = context

export default context