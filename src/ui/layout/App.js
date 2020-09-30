import React , {useReducer,useEffect} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {Provider} from "../../api/context"
import {init,reducer} from "../../api/hookReducer"

let App = () => {

    let value = useReducer(reducer,init)

    useEffect(()=>{

        let [estado,dispatch] = value
        let logged = Boolean(localStorage.getItem("logged"))
        if(logged){
            dispatch({type:"LOGIN_SUCCESS"})
        }

    },[])


    return(
        <Provider value={value} >
            <Header/>
            <Main/> 
            <Footer/>
        </Provider>
    )
}

export default App
